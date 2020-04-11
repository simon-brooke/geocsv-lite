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


(defn prepare-records
  "`data` is expected to be a vector of vectors, where the first vector
  contains column headers and the remaining vectors contain records.
  Return this as a vector of maps, with each map having keys taken from
  the first vector and values taken from one of the subsequent vectors."
  [data]
  (let [cols (map
               #(let [n (when-not
                          (empty? %)
                          (when (string? %)
                            (cs/lower-case
                              (cs/replace
                                (cs/trim %)
                                #"[^\w\d]+" "-"))))]
                  (keyword
                    (if (empty? n)
                      (gensym)
                      n)))
               (first data))]
    (map
      (fn [r] (zipmap cols r))
      (rest data))))


(defn default-handler
  "When data is received from a URL, it is received asynchronously. This
  is the default callback called with the `response` of the HTTP request,
  and the keyword `k` identifying the map view, to populate the map with
  data."
  [response k]
  (if
    (= (:status response) 200)
    (let [content (:body response)
          records (prepare-records
                    (:data
                      (js->clj
                        (.parse js/Papa content
                                (clj->js {:dynamicTyping true}))
                        :keywordize-keys true)))]
      (gis/refresh-map-pins (get-view k) records))
    (n/error (str "Bad response from server: " (:status response)))))


(defn get-data-from-uri
  "Get data for the view identified by this keyword `k` from this `uri`."
  [k uri]
  (go (let [response (<! (http/get uri {:with-credentials? "false"}))]
        (default-handler response k))))


(defn identify-url-format
  "Assuming `data` is a url, infer its probable data type from the file
  extension if any; if no obvious file extension, return null"
  [data]
  (let [extn (re-find #"\.[A-Za-z0-9]{3,4}$" data)]
    (if extn {:type :url
              :format (keyword (subs (cs/lower-case extn) 1))})))

;; (identify-url-format "data/europe-capitals.csv")
;; (identify-url-format "data/wild-lands/doc.kml")

(defn kml?
  "Return non-nil if this `data` appears to be XML text with a namespace
  appropriate to KML 2.2."
  [data]
  (re-find #" +xmlns=[\"\']http://www.opengis.net/kml/2.2[\"\']" data))

;; (kml? "<?xml version=\"1.0\" ?><kml xmlns=\"http://www.opengis.net/kml/2.2\">
;; <Document><Folder><name>WILDLAND_SCOTLAND</name>")

(defn gpx?
  "Return non-nil if this `data` appears to be XML text with a namespace
  appropriate to GPX 1.1."
  [data]
  (re-find #" +xmlns=[\"\']http://www.topografix.com/GPX/1/1[\"\']" data))

;; (gpx? "<gpx xmlns=\"http://www.topografix.com/GPX/1/1\"
;;       xmlns:gpxx=\"http://www.garmin.com/xmlschemas/GpxExtensions/v3\"
;;       xmlns:gpxtpx=\"http://www.garmin.com/xmlschemas/TrackPointExtension/v1\"
;;       creator=\"Oregon 400t\" version=\"1.1\"
;;       xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"
;;       xsi:schemaLocation=\"http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd http://www.garmin.com/xmlschemas/GpxExtensions/v3 http://www.garmin.com/xmlschemas/GpxExtensionsv3.xsd http://www.garmin.com/xmlschemas/TrackPointExtension/v1 http://www.garmin.com/xmlschemas/TrackPointExtensionv1.xsd\">
;;   <metadata>
;;     <link href=\"http://www.garmin.com\">
;;       <text>Garmin International</text>
;;     </link>
;;     <time>2009-10-17T22:58:43Z</time>
;;   </metadata>
;;   <trk>
;;     <name>Example GPX Document</name>
;;     <trkseg>
;;       <trkpt lat=\"47.644548\" lon=\"-122.326897\">
;;         <ele>4.46</ele>
;;         <time>2009-10-17T18:37:26Z</time>
;;       </trkpt>
;;       <trkpt lat=\"47.644548\" lon=\"-122.326897\">
;;         <ele>4.94</ele>
;;         <time>2009-10-17T18:37:31Z</time>
;;       </trkpt>
;;       <trkpt lat=\"47.644548\" lon=\"-122.326897\">
;;         <ele>6.87</ele>
;;         <time>2009-10-17T18:37:34Z</time>
;;       </trkpt>
;;     </trkseg>
;;   </trk>
;; </gpx>")

(defn identify-data-format
  "Assuming that `data` is inline data, not a URL, try to infer its format;
  default to `:csv`."
  [data]
  {:type :inline
   :format
   (case (first (cs/triml data))
     ("{" "[") :json
     "<" (cond
           (kml? data) :kml
           (gpx? data) :gpx
           :else
           :xml)
     :csv)})

;; (identify-data-format "<?xml version=\"1.0\" ?><kml xmlns=\"http://www.opengis.net/kml/2.2\">
;;  <Document><Folder><name>WILDLAND_SCOTLAND</name>")

(defn identify-format
  [data]
  (or (identify-url-format data) (identify-data-format data)))

(identify-format "<?xml version=\"1.0\" ?><kml xmlns=\"http://www.opengis.net/kml/2.2\">
  <Document><Folder><name>WILDLAND_SCOTLAND</name>")
(identify-format "data/europe-capitals.csv")

(defn show-data-from-csv
  "Show data from this `data-source`, assumed to be either a CSV URL or else inline
  CSV text, on the map identified by `k`."
  [k data-source]
  (let [p (js->clj (.parse js/Papa data-source)  :keywordize-keys true)
        data (if
               (empty? (:errors p))
               (:data p)
               ;; otherwise, is it JSON?
               (try
                 (js->clj (.parse js/JSON data-source))
                 (catch :default _ nil)))]
    ;; almost anything can be a valid URL, so it's hard to verify that a given
    ;; string is not one. So we will assume that what we've been passed is a
    ;; URL unless we've been able to parse valid data out of it.
    (js/console.debug "Found records: " (clj->js data))
    (cond
      ;; CSV will appear as a vector of vectors.
      (and (vector? data) (every? vector? data))
      (let [records (prepare-records data)]
        (n/message (str "Found " (count records) " records of inline data for map `" k "`"))
        (gis/refresh-map-pins (get-view k) (prepare-records data)))
      ;; TODO: clauses to handle GeoJSON, KML here.
      :else
      (get-data-from-uri k data-source))))

(defn show-data-with-omnivore
  "Show data from this `data-source`, having the inferred format `f`, in the
  map view identified by `k`."
  [f k data-source]
  (let [view (get-view k)]
    (if-let [layer (case (:format f)
        :gpx (case (:type f)
               :url (.gpx js/omnivore data-source)
               :inline (.gpx.parse js/omnivore data-source))
        :kml (case (:type f)
               :url (.kml js/omnivore data-source)
               :inline (.kml.parse js/omnivore data-source))
        :json ;; assuming geojson here, which is dodgy.
        (case (:type f)
          :url (.addTo (.geojson js/omnivore data-source) view)))]
      (do
        (.addTo layer view)
        ;; zoom and pan the view to the bounds of the layer.
        ;; map.fitBounds(runLayer.getBounds());
        (.fitBounds view (.getBounds layer))
        (n/message (str "Added " (:format f) " layer")))
      (n/error (str "Cannot yet handle " f)))))

(defn get-data
  "Get data for the view identified by this keyword `k` from this `data-source`.
  The data source may be a URL, or a CSV or JSON formatted string."
  [k data-source]
  (let [f (identify-format data-source)]
    (js/console.debug (str "get-data: k = `" k
                           "`; data-source = `" data-source
                           "`; handled as `" f "`"))
    (case
      (:format f)
      :csv (show-data-from-csv k data-source)
      (:kml :gpx :json) (show-data-with-omnivore f k data-source)
      ;; default
      (n/error (str "Not able to display " f)))))

(defn get-data-with-uri-and-handler
  [uri handler-fn k]
  (go (let [response (<! (http/get uri))]
          (apply handler-fn (list response k)))))

;; (def data-source  "Name, Latitude, Longitude
;;   Nether Hazelfield Cottage, 54.816274, -3.887435
;;   Over Hazelfield Cottage, 54.823192, -3.899516
;;   Winter Palace, 54.822260, -3.920147
;;   Craignair, 54.842321, -3.872055
;;   Carlinscraig, 54.843224,-3.8730822
;;   Orchardton, 54.859129, -3.854212
;;   Elderslie, 54.845596, -3.866432")

;; (prepare-records
;;   (:data (js->clj (.parse js/Papa data-source)
;;                   :keywordize-keys true)))

;; (get-data :inline-csv-map "http://localhost:3449/data/data.csv")

;; (get-data :foo "file:///home/simon/workspace/geocsv-lite/resources/public/data/wild-lands/doc.kml")

;; (get-data :inline-csv-map data-source)
;; (every? (fn [r] (and (vector? r) (every? vector? r))) (:data (js->clj (.parse js/Papa data-source)
;;                   :keywordize-keys true)))
;; (every? vector? (:data (js->clj (.parse js/Papa data-source)
;;                   :keywordize-keys true)))
;; (vector? (first (:data (js->clj (.parse js/Papa data-source)
;;                   :keywordize-keys true))))
;; (def p (:data (js->clj (.parse js/Papa data-source)
;;                   :keywordize-keys true)))
;; (every? vector? p)

;; (vector? p)
;; (every? vector? p)
