(ns geocsv-lite.core
    (:require
      [clojure.browser.dom :as dom]
      [clojure.string :as cs]
      [geocsv-lite.data :refer [get-csv-url get-data get-query-part-as-map]]
      [geocsv-lite.gis :as gis]
      [geocsv-lite.map :as m]
      [geocsv-lite.notify :as n]))


(defn ^:export initialise-map-element
  "Create a map view in the element with this `id` and decorate it with
  pins showing locations from this `data-source`."
  [id data-source]
  (n/message (str "geocsv-lite.core.initialise-map-element called with args id: " id "; data-source: " data-source "."))
  (let [sid (str id)
        kid (keyword sid)
        v (m/add-view sid 55 -4 10)]
    (.whenReady v (fn [] (get-data kid data-source)))))

(defonce app-state (atom {:text "Hello world!"}))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
