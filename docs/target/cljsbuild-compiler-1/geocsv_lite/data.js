// Compiled by ClojureScript 1.10.520 {}
goog.provide('geocsv_lite.data');
goog.require('cljs.core');
goog.require('clojure.browser.dom');
goog.require('clojure.string');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('geocsv_lite.gis');
goog.require('geocsv_lite.map');
goog.require('geocsv_lite.notify');
/**
 * Returns the query part of the current document URL as a keyword-string map.
 */
geocsv_lite.data.get_query_part_as_map = (function geocsv_lite$data$get_query_part_as_map(){
var query_nvs = cljs.core.map.call(null,(function (p1__25894_SHARP_){
return clojure.string.split.call(null,p1__25894_SHARP_,"=");
}),clojure.string.split.call(null,cljs.core.subs.call(null,window.location.search,(1)),"&"));
if(cljs.core.every_QMARK_.call(null,((function (query_nvs){
return (function (p1__25895_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.count.call(null,p1__25895_SHARP_),(2));
});})(query_nvs))
,query_nvs)){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,((function (query_nvs){
return (function (p1__25896_SHARP_){
return cljs.core.keyword.call(null,cljs.core.first.call(null,p1__25896_SHARP_));
});})(query_nvs))
,query_nvs),cljs.core.map.call(null,((function (query_nvs){
return (function (p1__25897_SHARP_){
return cljs.core.nth.call(null,p1__25897_SHARP_,(1));
});})(query_nvs))
,query_nvs));
} else {
return null;
}
});
/**
 * `query` is expected a keyword-string map which may have keys:
 * 
 *   * `:docid` whose value is a Google Sheets document id;
 *   * `:uri` whose value is the URI of a JSON or CSV file.
 * 
 *   If either of these keys is found, returns an appropriate URL, else nil.
 */
geocsv_lite.data.get_csv_url = (function geocsv_lite$data$get_csv_url(query){
if(cljs.core.map_QMARK_.call(null,query)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"docid","docid",832763997).cljs$core$IFn$_invoke$arity$1(query))){
return ["https://docs.google.com/spreadsheets/d/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"docid","docid",832763997).cljs$core$IFn$_invoke$arity$1(query)),"/export?format=csv"].join('');
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(query))){
return new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(query);
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * `data` is expected to be a vector of vectors, where the first vector
 *   contains column headers and the remaining vectors contain records.
 *   Return this as a vector of maps, with each map having keys taken from
 *   the first vector and values taken from one of the subsequent vectors.
 */
geocsv_lite.data.prepare_records = (function geocsv_lite$data$prepare_records(data){
var cols = cljs.core.map.call(null,(function (p1__25898_SHARP_){
var n = ((cljs.core.empty_QMARK_.call(null,p1__25898_SHARP_))?null:((typeof p1__25898_SHARP_ === 'string')?clojure.string.lower_case.call(null,clojure.string.replace.call(null,clojure.string.trim.call(null,p1__25898_SHARP_),/[^\w\d]+/,"-")):null));
return cljs.core.keyword.call(null,((cljs.core.empty_QMARK_.call(null,n))?cljs.core.gensym.call(null):n));
}),cljs.core.first.call(null,data));
return cljs.core.map.call(null,((function (cols){
return (function (r){
return cljs.core.zipmap.call(null,cols,r);
});})(cols))
,cljs.core.rest.call(null,data));
});
/**
 * When data is received from a URL, it is received asynchronously. This
 *   is the default callback called with the `response` of the HTTP request,
 *   and the keyword `k` identifying the map view, to populate the map with
 *   data.
 */
geocsv_lite.data.default_handler = (function geocsv_lite$data$default_handler(response,k){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response),(200))){
var content = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
var records = geocsv_lite.data.prepare_records.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,Papa.parse(content,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamicTyping","dynamicTyping",1380929723),true], null))),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
return geocsv_lite.gis.refresh_map_pins.call(null,geocsv_lite.map.get_view.call(null,k),records);
} else {
return geocsv_lite.notify.error.call(null,["Bad response from server: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response))].join(''));
}
});
/**
 * Get data for the view identified by this keyword `k` from this `uri`.
 */
geocsv_lite.data.get_data_from_uri = (function geocsv_lite$data$get_data_from_uri(k,uri){
var c__23644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto__){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto__){
return (function (state_25907){
var state_val_25908 = (state_25907[(1)]);
if((state_val_25908 === (1))){
var inst_25899 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_25900 = ["false"];
var inst_25901 = cljs.core.PersistentHashMap.fromArrays(inst_25899,inst_25900);
var inst_25902 = cljs_http.client.get.call(null,uri,inst_25901);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25907__$1,(2),inst_25902);
} else {
if((state_val_25908 === (2))){
var inst_25904 = (state_25907[(2)]);
var inst_25905 = geocsv_lite.data.default_handler.call(null,inst_25904,k);
var state_25907__$1 = state_25907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25907__$1,inst_25905);
} else {
return null;
}
}
});})(c__23644__auto__))
;
return ((function (switch__23549__auto__,c__23644__auto__){
return (function() {
var geocsv_lite$data$get_data_from_uri_$_state_machine__23550__auto__ = null;
var geocsv_lite$data$get_data_from_uri_$_state_machine__23550__auto____0 = (function (){
var statearr_25909 = [null,null,null,null,null,null,null];
(statearr_25909[(0)] = geocsv_lite$data$get_data_from_uri_$_state_machine__23550__auto__);

(statearr_25909[(1)] = (1));

return statearr_25909;
});
var geocsv_lite$data$get_data_from_uri_$_state_machine__23550__auto____1 = (function (state_25907){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_25907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e25910){if((e25910 instanceof Object)){
var ex__23553__auto__ = e25910;
var statearr_25911_25913 = state_25907;
(statearr_25911_25913[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25914 = state_25907;
state_25907 = G__25914;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
geocsv_lite$data$get_data_from_uri_$_state_machine__23550__auto__ = function(state_25907){
switch(arguments.length){
case 0:
return geocsv_lite$data$get_data_from_uri_$_state_machine__23550__auto____0.call(this);
case 1:
return geocsv_lite$data$get_data_from_uri_$_state_machine__23550__auto____1.call(this,state_25907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geocsv_lite$data$get_data_from_uri_$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = geocsv_lite$data$get_data_from_uri_$_state_machine__23550__auto____0;
geocsv_lite$data$get_data_from_uri_$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = geocsv_lite$data$get_data_from_uri_$_state_machine__23550__auto____1;
return geocsv_lite$data$get_data_from_uri_$_state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto__))
})();
var state__23646__auto__ = (function (){var statearr_25912 = f__23645__auto__.call(null);
(statearr_25912[(6)] = c__23644__auto__);

return statearr_25912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto__))
);

return c__23644__auto__;
});
/**
 * Get data for the view identified by this keyword `k` from this `data-source`.
 *   The data source may be a URL, or a CSV or JSON formatted string.
 */
geocsv_lite.data.get_data = (function geocsv_lite$data$get_data(k,data_source){
console.debug(["get-data: k = `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"`; data-source = `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data_source),"`"].join(''));

var p = cljs.core.js__GT_clj.call(null,Papa.parse(data_source),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var data = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(p)))?new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p):(function (){try{return cljs.core.js__GT_clj.call(null,JSON.parse(data_source));
}catch (e25915){var _ = e25915;
return null;
}})());
console.debug("Found records: ",cljs.core.clj__GT_js.call(null,data));

if(((cljs.core.vector_QMARK_.call(null,data)) && (cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,data)))){
var records = geocsv_lite.data.prepare_records.call(null,data);
geocsv_lite.notify.message.call(null,["Found ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,records))," records of inline data for map `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),"`"].join(''));

return geocsv_lite.gis.refresh_map_pins.call(null,geocsv_lite.map.get_view.call(null,k),geocsv_lite.data.prepare_records.call(null,data));
} else {
return geocsv_lite.data.get_data_from_uri.call(null,k,data_source);
}
});
geocsv_lite.data.get_data_with_uri_and_handler = (function geocsv_lite$data$get_data_with_uri_and_handler(uri,handler_fn,k){
var c__23644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto__){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto__){
return (function (state_25923){
var state_val_25924 = (state_25923[(1)]);
if((state_val_25924 === (1))){
var inst_25916 = cljs_http.client.get.call(null,uri);
var state_25923__$1 = state_25923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25923__$1,(2),inst_25916);
} else {
if((state_val_25924 === (2))){
var inst_25918 = (state_25923[(2)]);
var inst_25919 = (new cljs.core.List(null,k,null,(1),null));
var inst_25920 = (new cljs.core.List(null,inst_25918,inst_25919,(2),null));
var inst_25921 = cljs.core.apply.call(null,handler_fn,inst_25920);
var state_25923__$1 = state_25923;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25923__$1,inst_25921);
} else {
return null;
}
}
});})(c__23644__auto__))
;
return ((function (switch__23549__auto__,c__23644__auto__){
return (function() {
var geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__23550__auto__ = null;
var geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__23550__auto____0 = (function (){
var statearr_25925 = [null,null,null,null,null,null,null];
(statearr_25925[(0)] = geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__23550__auto__);

(statearr_25925[(1)] = (1));

return statearr_25925;
});
var geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__23550__auto____1 = (function (state_25923){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_25923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e25926){if((e25926 instanceof Object)){
var ex__23553__auto__ = e25926;
var statearr_25927_25929 = state_25923;
(statearr_25927_25929[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25930 = state_25923;
state_25923 = G__25930;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__23550__auto__ = function(state_25923){
switch(arguments.length){
case 0:
return geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__23550__auto____0.call(this);
case 1:
return geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__23550__auto____1.call(this,state_25923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__23550__auto____0;
geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__23550__auto____1;
return geocsv_lite$data$get_data_with_uri_and_handler_$_state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto__))
})();
var state__23646__auto__ = (function (){var statearr_25928 = f__23645__auto__.call(null);
(statearr_25928[(6)] = c__23644__auto__);

return statearr_25928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto__))
);

return c__23644__auto__;
});

//# sourceMappingURL=data.js.map
