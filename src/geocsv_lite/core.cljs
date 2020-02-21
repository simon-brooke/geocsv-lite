(ns geocsv-lite.core
    (:require
      [clojure.browser.dom :as dom]
      [clojure.string :as cs]
      [geocsv-lite.data :refer [get-csv-url get-data get-query-part-as-map]]
      [geocsv-lite.gis :as gis]
      [geocsv-lite.map :as m]))

(enable-console-print!)

(println "This text is printed from src/geocsv-lite/core.cljs. Go ahead and edit it and see reloading in action.")




;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  (m/add-view "map" 55 -4 10)
  (let [query (get-query-part-as-map)
        uri (get-csv-url query)
        records (get-data :map)]
    (dom/set-text (.getElementById js/document "message")
                  (str "Query was: " query "; uri was: " uri))))


