(ns geocsv-lite.data
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.browser.dom :as dom]
            [clojure.string :as cs]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [geocsv-lite.gis :as gis]
            [geocsv-lite.map :refer [get-view]]
            [geocsv-lite.notify :as n]))



(defn get-query-part-as-map
  "Returns the query part of the current document URL as a keyword-string map."
  ;; not actually used in the current incarnation
  []
  (let [query-nvs (map #(cs/split % "=") (cs/split (subs js/window.location.search 1) "&"))]
    (when (every? #(= (count %) 2) query-nvs)
      (zipmap (map #(keyword (first %)) query-nvs)(map #(nth % 1) query-nvs)))))


(defn get-csv-url
  "`query` is expected a keyword-string map which may have keys:

  * `:docid` whose value is a Google Sheets document id;
  * `:uri` whose value is the URI of a JSON or CSV file.

  If either of these keys is found, returns an appropriate URL, else nil."
  ;; not actually used in the current incarnation
  [query]
  (when (map? query)
    (cond
      (:docid query) (str
                       "https://docs.google.com/spreadsheets/d/"
                       (:docid query)
                       "/export?format=csv")
      (:uri query) (:uri query))))


(defn default-handler
  "When data is received from a URL, it is received asynchronously. This
  is the default callback called with the `response` of the HTTP request,
  and the keyword `k` identifying the map view, to populate the map with
  data."
  [response k]
  (if
    (= (:status response) 200)
    (let [content (:body response)
          data (map
                 #(merge %
                         {:longitude (js/Number (:longitude %))
                          :latitide (js/Number (:latitude %))})
                 (js->clj (.-data (.parse js/Papa content (clj->js {:dynamicTyping true})))))
          cols (map
                 #(let [n (when-not
                            (empty? %)
                            (when (string? %)
                              (cs/lower-case
                                (cs/replace
                                  % #"[^\w\d]+" "-"))))]
                    (keyword
                      (if (empty? n)
                        (gensym)
                        n)))
                 (first data))
          records (map
                    (fn [r] (zipmap cols (map str r)))
                    (rest data))
          ]
      (gis/refresh-map-pins (get-view k) records))
    (n/error (str "Bad response from server: " (:status response)))))


(defn get-data
  "Get data for the view identified by this keyword `k` from this `data-source`.
  In this initial release the data source must be a URL, but in future releases
  I intend that it may also be a list of maps representing records, or a CSV or
  JSON formatted string."
  [k data-source]
  (let
    [uri data-source]
    (go (let [response (<! (http/get uri {:with-credentials? "false"
                                          :access-control-allow-credentials "true"
                                          :origin js/window.location.hostname}))]
            (default-handler response k)))))

(defn get-data-with-uri-and-handler
  [uri handler-fn k]
  (go (let [response (<! (http/get uri))]
          (apply handler-fn (list response k)))))

