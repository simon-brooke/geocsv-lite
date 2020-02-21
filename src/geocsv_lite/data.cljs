(ns geocsv-lite.data
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [clojure.browser.dom :as dom]
            [clojure.string :as cs]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [geocsv-lite.gis :as gis]
            [geocsv-lite.map :refer [get-view]]
            ))

;; function getQueryVariable(variable)
;; {
;;        var query = window.location.search.substring(1);
;;        var vars = query.split("&");
;;        for (var i=0;i<vars.length;i++) {
;;                var pair = vars[i].split("=");
;;                if(pair[0] == variable){return pair[1];}
;;        }
;;        return(false);
;; }


(defn get-query-part-as-map
  "Returns the query part of the current document URL as a keyword-string map."
  []
  (let [query-nvs (map #(cs/split % "=") (cs/split (subs js/window.location.search 1) "&"))]
    (when (every? #(= (count %) 2) query-nvs)
      (zipmap (map #(keyword (first %)) query-nvs)(map #(nth % 1) query-nvs)))))


(defn get-csv-url
  "`query` is expected a keyword-string map which may have keys:

  * `:docid` whose value is a Google Sheets document id;
  * `:uri` whose value is the URI of a JSON or CSV file.

  If either of these keys is found, returns an appropriate URL, else nil."
  [query]
  (when (map? query)
    (cond
      (:docid query) (str
                       "https://docs.google.com/spreadsheets/d/"
                       (:docid query)
                       "/export?format=csv")
      (:uri query) (:uri query))))


(defn default-handler
  [response k]
  (if
    (= (:status response) 200)
    (let [content (:body response)
          data (js->clj (.-data (.parse js/Papa content)))
          cols (map
            #(let [n (cs/lower-case (cs/replace (cs/trim %) #"[^\w\d]+" "-"))]
               (keyword
                 (if (empty? n)
                 (gensym)
                   n)))
            (first data))
          records (map
                    (fn [r] (zipmap cols (map str r)))
                    (rest data))
          ]
      ;; (println records)
      (gis/refresh-map-pins (get-view k) records))
    (println (str "Bad response from server: " (:status response)))))


(defn get-data
  [k]
  (let
    [uri (get-csv-url (get-query-part-as-map))]
    (go (let [response (<! (http/get uri {:with-credentials? "false"
                                          :access-control-allow-credentials "true"
                                          :origin js/window.location.hostname}))]
          (println (cs/join " " ["tx:" uri "rx:" (:status response)]))
            (default-handler response k)))))

(defn get-data-with-uri-and-handler
  [uri handler-fn k]
  (go (let [response (<! (http/get uri))]
          (apply handler-fn (list response k)))))


(go (let [uri "http://localhost:3449/data/data.csv"
          response (<! (http/get uri))]
      (when (= (:status response) 200)
        (default-handler response :map))))
