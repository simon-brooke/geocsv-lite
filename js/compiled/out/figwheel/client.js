// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30355){if((e30355 instanceof Error)){
var e = e30355;
return "Error: Unable to stringify";
} else {
throw e30355;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30358 = arguments.length;
switch (G__30358) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30356_SHARP_){
if(typeof p1__30356_SHARP_ === 'string'){
return p1__30356_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30356_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30361 = arguments.length;
var i__4731__auto___30362 = (0);
while(true){
if((i__4731__auto___30362 < len__4730__auto___30361)){
args__4736__auto__.push((arguments[i__4731__auto___30362]));

var G__30363 = (i__4731__auto___30362 + (1));
i__4731__auto___30362 = G__30363;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30360){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30360));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30365 = arguments.length;
var i__4731__auto___30366 = (0);
while(true){
if((i__4731__auto___30366 < len__4730__auto___30365)){
args__4736__auto__.push((arguments[i__4731__auto___30366]));

var G__30367 = (i__4731__auto___30366 + (1));
i__4731__auto___30366 = G__30367;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30364){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30364));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30368){
var map__30369 = p__30368;
var map__30369__$1 = (((((!((map__30369 == null))))?(((((map__30369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30369):map__30369);
var message = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__22951__auto___30448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___30448,ch){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___30448,ch){
return (function (state_30420){
var state_val_30421 = (state_30420[(1)]);
if((state_val_30421 === (7))){
var inst_30416 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
var statearr_30422_30449 = state_30420__$1;
(statearr_30422_30449[(2)] = inst_30416);

(statearr_30422_30449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (1))){
var state_30420__$1 = state_30420;
var statearr_30423_30450 = state_30420__$1;
(statearr_30423_30450[(2)] = null);

(statearr_30423_30450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (4))){
var inst_30373 = (state_30420[(7)]);
var inst_30373__$1 = (state_30420[(2)]);
var state_30420__$1 = (function (){var statearr_30424 = state_30420;
(statearr_30424[(7)] = inst_30373__$1);

return statearr_30424;
})();
if(cljs.core.truth_(inst_30373__$1)){
var statearr_30425_30451 = state_30420__$1;
(statearr_30425_30451[(1)] = (5));

} else {
var statearr_30426_30452 = state_30420__$1;
(statearr_30426_30452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (15))){
var inst_30380 = (state_30420[(8)]);
var inst_30395 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30380);
var inst_30396 = cljs.core.first.call(null,inst_30395);
var inst_30397 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30396);
var inst_30398 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30397)].join('');
var inst_30399 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30398);
var state_30420__$1 = state_30420;
var statearr_30427_30453 = state_30420__$1;
(statearr_30427_30453[(2)] = inst_30399);

(statearr_30427_30453[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (13))){
var inst_30404 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
var statearr_30428_30454 = state_30420__$1;
(statearr_30428_30454[(2)] = inst_30404);

(statearr_30428_30454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (6))){
var state_30420__$1 = state_30420;
var statearr_30429_30455 = state_30420__$1;
(statearr_30429_30455[(2)] = null);

(statearr_30429_30455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (17))){
var inst_30402 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
var statearr_30430_30456 = state_30420__$1;
(statearr_30430_30456[(2)] = inst_30402);

(statearr_30430_30456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (3))){
var inst_30418 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30420__$1,inst_30418);
} else {
if((state_val_30421 === (12))){
var inst_30379 = (state_30420[(9)]);
var inst_30393 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30379,opts);
var state_30420__$1 = state_30420;
if(inst_30393){
var statearr_30431_30457 = state_30420__$1;
(statearr_30431_30457[(1)] = (15));

} else {
var statearr_30432_30458 = state_30420__$1;
(statearr_30432_30458[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (2))){
var state_30420__$1 = state_30420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30420__$1,(4),ch);
} else {
if((state_val_30421 === (11))){
var inst_30380 = (state_30420[(8)]);
var inst_30385 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30386 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30380);
var inst_30387 = cljs.core.async.timeout.call(null,(1000));
var inst_30388 = [inst_30386,inst_30387];
var inst_30389 = (new cljs.core.PersistentVector(null,2,(5),inst_30385,inst_30388,null));
var state_30420__$1 = state_30420;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30420__$1,(14),inst_30389);
} else {
if((state_val_30421 === (9))){
var inst_30380 = (state_30420[(8)]);
var inst_30406 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30407 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30380);
var inst_30408 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30407);
var inst_30409 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30408)].join('');
var inst_30410 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30409);
var state_30420__$1 = (function (){var statearr_30433 = state_30420;
(statearr_30433[(10)] = inst_30406);

return statearr_30433;
})();
var statearr_30434_30459 = state_30420__$1;
(statearr_30434_30459[(2)] = inst_30410);

(statearr_30434_30459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (5))){
var inst_30373 = (state_30420[(7)]);
var inst_30375 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30376 = (new cljs.core.PersistentArrayMap(null,2,inst_30375,null));
var inst_30377 = (new cljs.core.PersistentHashSet(null,inst_30376,null));
var inst_30378 = figwheel.client.focus_msgs.call(null,inst_30377,inst_30373);
var inst_30379 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30378);
var inst_30380 = cljs.core.first.call(null,inst_30378);
var inst_30381 = figwheel.client.autoload_QMARK_.call(null);
var state_30420__$1 = (function (){var statearr_30435 = state_30420;
(statearr_30435[(8)] = inst_30380);

(statearr_30435[(9)] = inst_30379);

return statearr_30435;
})();
if(cljs.core.truth_(inst_30381)){
var statearr_30436_30460 = state_30420__$1;
(statearr_30436_30460[(1)] = (8));

} else {
var statearr_30437_30461 = state_30420__$1;
(statearr_30437_30461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (14))){
var inst_30391 = (state_30420[(2)]);
var state_30420__$1 = state_30420;
var statearr_30438_30462 = state_30420__$1;
(statearr_30438_30462[(2)] = inst_30391);

(statearr_30438_30462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (16))){
var state_30420__$1 = state_30420;
var statearr_30439_30463 = state_30420__$1;
(statearr_30439_30463[(2)] = null);

(statearr_30439_30463[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (10))){
var inst_30412 = (state_30420[(2)]);
var state_30420__$1 = (function (){var statearr_30440 = state_30420;
(statearr_30440[(11)] = inst_30412);

return statearr_30440;
})();
var statearr_30441_30464 = state_30420__$1;
(statearr_30441_30464[(2)] = null);

(statearr_30441_30464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30421 === (8))){
var inst_30379 = (state_30420[(9)]);
var inst_30383 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30379,opts);
var state_30420__$1 = state_30420;
if(cljs.core.truth_(inst_30383)){
var statearr_30442_30465 = state_30420__$1;
(statearr_30442_30465[(1)] = (11));

} else {
var statearr_30443_30466 = state_30420__$1;
(statearr_30443_30466[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22951__auto___30448,ch))
;
return ((function (switch__22856__auto__,c__22951__auto___30448,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22857__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22857__auto____0 = (function (){
var statearr_30444 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30444[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22857__auto__);

(statearr_30444[(1)] = (1));

return statearr_30444;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22857__auto____1 = (function (state_30420){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_30420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e30445){if((e30445 instanceof Object)){
var ex__22860__auto__ = e30445;
var statearr_30446_30467 = state_30420;
(statearr_30446_30467[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30468 = state_30420;
state_30420 = G__30468;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22857__auto__ = function(state_30420){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22857__auto____1.call(this,state_30420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22857__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22857__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___30448,ch))
})();
var state__22953__auto__ = (function (){var statearr_30447 = f__22952__auto__.call(null);
(statearr_30447[(6)] = c__22951__auto___30448);

return statearr_30447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___30448,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30469_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30469_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30475 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30475){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30471 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30472 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30473 = true;
var _STAR_print_fn_STAR__temp_val__30474 = ((function (_STAR_print_newline_STAR__orig_val__30471,_STAR_print_fn_STAR__orig_val__30472,_STAR_print_newline_STAR__temp_val__30473,sb,base_path_30475){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__30471,_STAR_print_fn_STAR__orig_val__30472,_STAR_print_newline_STAR__temp_val__30473,sb,base_path_30475))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30473;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30474;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30472;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30471;
}}catch (e30470){if((e30470 instanceof Error)){
var e = e30470;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30475], null));
} else {
var e = e30470;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30475))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30476){
var map__30477 = p__30476;
var map__30477__$1 = (((((!((map__30477 == null))))?(((((map__30477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30477):map__30477);
var opts = map__30477__$1;
var build_id = cljs.core.get.call(null,map__30477__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30477,map__30477__$1,opts,build_id){
return (function (p__30479){
var vec__30480 = p__30479;
var seq__30481 = cljs.core.seq.call(null,vec__30480);
var first__30482 = cljs.core.first.call(null,seq__30481);
var seq__30481__$1 = cljs.core.next.call(null,seq__30481);
var map__30483 = first__30482;
var map__30483__$1 = (((((!((map__30483 == null))))?(((((map__30483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30483):map__30483);
var msg = map__30483__$1;
var msg_name = cljs.core.get.call(null,map__30483__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30481__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30480,seq__30481,first__30482,seq__30481__$1,map__30483,map__30483__$1,msg,msg_name,_,map__30477,map__30477__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30480,seq__30481,first__30482,seq__30481__$1,map__30483,map__30483__$1,msg,msg_name,_,map__30477,map__30477__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30477,map__30477__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30485){
var vec__30486 = p__30485;
var seq__30487 = cljs.core.seq.call(null,vec__30486);
var first__30488 = cljs.core.first.call(null,seq__30487);
var seq__30487__$1 = cljs.core.next.call(null,seq__30487);
var map__30489 = first__30488;
var map__30489__$1 = (((((!((map__30489 == null))))?(((((map__30489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30489):map__30489);
var msg = map__30489__$1;
var msg_name = cljs.core.get.call(null,map__30489__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30487__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30491){
var map__30492 = p__30491;
var map__30492__$1 = (((((!((map__30492 == null))))?(((((map__30492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30492):map__30492);
var on_compile_warning = cljs.core.get.call(null,map__30492__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30492__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30492,map__30492__$1,on_compile_warning,on_compile_fail){
return (function (p__30494){
var vec__30495 = p__30494;
var seq__30496 = cljs.core.seq.call(null,vec__30495);
var first__30497 = cljs.core.first.call(null,seq__30496);
var seq__30496__$1 = cljs.core.next.call(null,seq__30496);
var map__30498 = first__30497;
var map__30498__$1 = (((((!((map__30498 == null))))?(((((map__30498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30498.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30498):map__30498);
var msg = map__30498__$1;
var msg_name = cljs.core.get.call(null,map__30498__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30496__$1;
var pred__30500 = cljs.core._EQ_;
var expr__30501 = msg_name;
if(cljs.core.truth_(pred__30500.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30501))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30500.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30501))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30492,map__30492__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__,msg_hist,msg_names,msg){
return (function (state_30590){
var state_val_30591 = (state_30590[(1)]);
if((state_val_30591 === (7))){
var inst_30510 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
if(cljs.core.truth_(inst_30510)){
var statearr_30592_30639 = state_30590__$1;
(statearr_30592_30639[(1)] = (8));

} else {
var statearr_30593_30640 = state_30590__$1;
(statearr_30593_30640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (20))){
var inst_30584 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30594_30641 = state_30590__$1;
(statearr_30594_30641[(2)] = inst_30584);

(statearr_30594_30641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (27))){
var inst_30580 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30595_30642 = state_30590__$1;
(statearr_30595_30642[(2)] = inst_30580);

(statearr_30595_30642[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (1))){
var inst_30503 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30590__$1 = state_30590;
if(cljs.core.truth_(inst_30503)){
var statearr_30596_30643 = state_30590__$1;
(statearr_30596_30643[(1)] = (2));

} else {
var statearr_30597_30644 = state_30590__$1;
(statearr_30597_30644[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (24))){
var inst_30582 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30598_30645 = state_30590__$1;
(statearr_30598_30645[(2)] = inst_30582);

(statearr_30598_30645[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (4))){
var inst_30588 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30590__$1,inst_30588);
} else {
if((state_val_30591 === (15))){
var inst_30586 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30599_30646 = state_30590__$1;
(statearr_30599_30646[(2)] = inst_30586);

(statearr_30599_30646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (21))){
var inst_30539 = (state_30590[(2)]);
var inst_30540 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30541 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30540);
var state_30590__$1 = (function (){var statearr_30600 = state_30590;
(statearr_30600[(7)] = inst_30539);

return statearr_30600;
})();
var statearr_30601_30647 = state_30590__$1;
(statearr_30601_30647[(2)] = inst_30541);

(statearr_30601_30647[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (31))){
var inst_30569 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30590__$1 = state_30590;
if(inst_30569){
var statearr_30602_30648 = state_30590__$1;
(statearr_30602_30648[(1)] = (34));

} else {
var statearr_30603_30649 = state_30590__$1;
(statearr_30603_30649[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (32))){
var inst_30578 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30604_30650 = state_30590__$1;
(statearr_30604_30650[(2)] = inst_30578);

(statearr_30604_30650[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (33))){
var inst_30565 = (state_30590[(2)]);
var inst_30566 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30567 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30566);
var state_30590__$1 = (function (){var statearr_30605 = state_30590;
(statearr_30605[(8)] = inst_30565);

return statearr_30605;
})();
var statearr_30606_30651 = state_30590__$1;
(statearr_30606_30651[(2)] = inst_30567);

(statearr_30606_30651[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (13))){
var inst_30524 = figwheel.client.heads_up.clear.call(null);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30590__$1,(16),inst_30524);
} else {
if((state_val_30591 === (22))){
var inst_30545 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30546 = figwheel.client.heads_up.append_warning_message.call(null,inst_30545);
var state_30590__$1 = state_30590;
var statearr_30607_30652 = state_30590__$1;
(statearr_30607_30652[(2)] = inst_30546);

(statearr_30607_30652[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (36))){
var inst_30576 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30608_30653 = state_30590__$1;
(statearr_30608_30653[(2)] = inst_30576);

(statearr_30608_30653[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (29))){
var inst_30556 = (state_30590[(2)]);
var inst_30557 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30558 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30557);
var state_30590__$1 = (function (){var statearr_30609 = state_30590;
(statearr_30609[(9)] = inst_30556);

return statearr_30609;
})();
var statearr_30610_30654 = state_30590__$1;
(statearr_30610_30654[(2)] = inst_30558);

(statearr_30610_30654[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (6))){
var inst_30505 = (state_30590[(10)]);
var state_30590__$1 = state_30590;
var statearr_30611_30655 = state_30590__$1;
(statearr_30611_30655[(2)] = inst_30505);

(statearr_30611_30655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (28))){
var inst_30552 = (state_30590[(2)]);
var inst_30553 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30554 = figwheel.client.heads_up.display_warning.call(null,inst_30553);
var state_30590__$1 = (function (){var statearr_30612 = state_30590;
(statearr_30612[(11)] = inst_30552);

return statearr_30612;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30590__$1,(29),inst_30554);
} else {
if((state_val_30591 === (25))){
var inst_30550 = figwheel.client.heads_up.clear.call(null);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30590__$1,(28),inst_30550);
} else {
if((state_val_30591 === (34))){
var inst_30571 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30590__$1,(37),inst_30571);
} else {
if((state_val_30591 === (17))){
var inst_30530 = (state_30590[(2)]);
var inst_30531 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30532 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30531);
var state_30590__$1 = (function (){var statearr_30613 = state_30590;
(statearr_30613[(12)] = inst_30530);

return statearr_30613;
})();
var statearr_30614_30656 = state_30590__$1;
(statearr_30614_30656[(2)] = inst_30532);

(statearr_30614_30656[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (3))){
var inst_30522 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30590__$1 = state_30590;
if(inst_30522){
var statearr_30615_30657 = state_30590__$1;
(statearr_30615_30657[(1)] = (13));

} else {
var statearr_30616_30658 = state_30590__$1;
(statearr_30616_30658[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (12))){
var inst_30518 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30617_30659 = state_30590__$1;
(statearr_30617_30659[(2)] = inst_30518);

(statearr_30617_30659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (2))){
var inst_30505 = (state_30590[(10)]);
var inst_30505__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30590__$1 = (function (){var statearr_30618 = state_30590;
(statearr_30618[(10)] = inst_30505__$1);

return statearr_30618;
})();
if(cljs.core.truth_(inst_30505__$1)){
var statearr_30619_30660 = state_30590__$1;
(statearr_30619_30660[(1)] = (5));

} else {
var statearr_30620_30661 = state_30590__$1;
(statearr_30620_30661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (23))){
var inst_30548 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30590__$1 = state_30590;
if(inst_30548){
var statearr_30621_30662 = state_30590__$1;
(statearr_30621_30662[(1)] = (25));

} else {
var statearr_30622_30663 = state_30590__$1;
(statearr_30622_30663[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (35))){
var state_30590__$1 = state_30590;
var statearr_30623_30664 = state_30590__$1;
(statearr_30623_30664[(2)] = null);

(statearr_30623_30664[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (19))){
var inst_30543 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30590__$1 = state_30590;
if(inst_30543){
var statearr_30624_30665 = state_30590__$1;
(statearr_30624_30665[(1)] = (22));

} else {
var statearr_30625_30666 = state_30590__$1;
(statearr_30625_30666[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (11))){
var inst_30514 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30626_30667 = state_30590__$1;
(statearr_30626_30667[(2)] = inst_30514);

(statearr_30626_30667[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (9))){
var inst_30516 = figwheel.client.heads_up.clear.call(null);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30590__$1,(12),inst_30516);
} else {
if((state_val_30591 === (5))){
var inst_30507 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30590__$1 = state_30590;
var statearr_30627_30668 = state_30590__$1;
(statearr_30627_30668[(2)] = inst_30507);

(statearr_30627_30668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (14))){
var inst_30534 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30590__$1 = state_30590;
if(inst_30534){
var statearr_30628_30669 = state_30590__$1;
(statearr_30628_30669[(1)] = (18));

} else {
var statearr_30629_30670 = state_30590__$1;
(statearr_30629_30670[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (26))){
var inst_30560 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30590__$1 = state_30590;
if(inst_30560){
var statearr_30630_30671 = state_30590__$1;
(statearr_30630_30671[(1)] = (30));

} else {
var statearr_30631_30672 = state_30590__$1;
(statearr_30631_30672[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (16))){
var inst_30526 = (state_30590[(2)]);
var inst_30527 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30528 = figwheel.client.heads_up.display_exception.call(null,inst_30527);
var state_30590__$1 = (function (){var statearr_30632 = state_30590;
(statearr_30632[(13)] = inst_30526);

return statearr_30632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30590__$1,(17),inst_30528);
} else {
if((state_val_30591 === (30))){
var inst_30562 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30563 = figwheel.client.heads_up.display_warning.call(null,inst_30562);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30590__$1,(33),inst_30563);
} else {
if((state_val_30591 === (10))){
var inst_30520 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30633_30673 = state_30590__$1;
(statearr_30633_30673[(2)] = inst_30520);

(statearr_30633_30673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (18))){
var inst_30536 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30537 = figwheel.client.heads_up.display_exception.call(null,inst_30536);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30590__$1,(21),inst_30537);
} else {
if((state_val_30591 === (37))){
var inst_30573 = (state_30590[(2)]);
var state_30590__$1 = state_30590;
var statearr_30634_30674 = state_30590__$1;
(statearr_30634_30674[(2)] = inst_30573);

(statearr_30634_30674[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30591 === (8))){
var inst_30512 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30590__$1 = state_30590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30590__$1,(11),inst_30512);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22951__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22856__auto__,c__22951__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto____0 = (function (){
var statearr_30635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30635[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto__);

(statearr_30635[(1)] = (1));

return statearr_30635;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto____1 = (function (state_30590){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_30590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e30636){if((e30636 instanceof Object)){
var ex__22860__auto__ = e30636;
var statearr_30637_30675 = state_30590;
(statearr_30637_30675[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30676 = state_30590;
state_30590 = G__30676;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto__ = function(state_30590){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto____1.call(this,state_30590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__,msg_hist,msg_names,msg))
})();
var state__22953__auto__ = (function (){var statearr_30638 = f__22952__auto__.call(null);
(statearr_30638[(6)] = c__22951__auto__);

return statearr_30638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__,msg_hist,msg_names,msg))
);

return c__22951__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22951__auto___30705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___30705,ch){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___30705,ch){
return (function (state_30691){
var state_val_30692 = (state_30691[(1)]);
if((state_val_30692 === (1))){
var state_30691__$1 = state_30691;
var statearr_30693_30706 = state_30691__$1;
(statearr_30693_30706[(2)] = null);

(statearr_30693_30706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (2))){
var state_30691__$1 = state_30691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30691__$1,(4),ch);
} else {
if((state_val_30692 === (3))){
var inst_30689 = (state_30691[(2)]);
var state_30691__$1 = state_30691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30691__$1,inst_30689);
} else {
if((state_val_30692 === (4))){
var inst_30679 = (state_30691[(7)]);
var inst_30679__$1 = (state_30691[(2)]);
var state_30691__$1 = (function (){var statearr_30694 = state_30691;
(statearr_30694[(7)] = inst_30679__$1);

return statearr_30694;
})();
if(cljs.core.truth_(inst_30679__$1)){
var statearr_30695_30707 = state_30691__$1;
(statearr_30695_30707[(1)] = (5));

} else {
var statearr_30696_30708 = state_30691__$1;
(statearr_30696_30708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (5))){
var inst_30679 = (state_30691[(7)]);
var inst_30681 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30679);
var state_30691__$1 = state_30691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30691__$1,(8),inst_30681);
} else {
if((state_val_30692 === (6))){
var state_30691__$1 = state_30691;
var statearr_30697_30709 = state_30691__$1;
(statearr_30697_30709[(2)] = null);

(statearr_30697_30709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (7))){
var inst_30687 = (state_30691[(2)]);
var state_30691__$1 = state_30691;
var statearr_30698_30710 = state_30691__$1;
(statearr_30698_30710[(2)] = inst_30687);

(statearr_30698_30710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30692 === (8))){
var inst_30683 = (state_30691[(2)]);
var state_30691__$1 = (function (){var statearr_30699 = state_30691;
(statearr_30699[(8)] = inst_30683);

return statearr_30699;
})();
var statearr_30700_30711 = state_30691__$1;
(statearr_30700_30711[(2)] = null);

(statearr_30700_30711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__22951__auto___30705,ch))
;
return ((function (switch__22856__auto__,c__22951__auto___30705,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22857__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22857__auto____0 = (function (){
var statearr_30701 = [null,null,null,null,null,null,null,null,null];
(statearr_30701[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22857__auto__);

(statearr_30701[(1)] = (1));

return statearr_30701;
});
var figwheel$client$heads_up_plugin_$_state_machine__22857__auto____1 = (function (state_30691){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_30691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e30702){if((e30702 instanceof Object)){
var ex__22860__auto__ = e30702;
var statearr_30703_30712 = state_30691;
(statearr_30703_30712[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30713 = state_30691;
state_30691 = G__30713;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22857__auto__ = function(state_30691){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22857__auto____1.call(this,state_30691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22857__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22857__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___30705,ch))
})();
var state__22953__auto__ = (function (){var statearr_30704 = f__22952__auto__.call(null);
(statearr_30704[(6)] = c__22951__auto___30705);

return statearr_30704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___30705,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__){
return (function (state_30719){
var state_val_30720 = (state_30719[(1)]);
if((state_val_30720 === (1))){
var inst_30714 = cljs.core.async.timeout.call(null,(3000));
var state_30719__$1 = state_30719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30719__$1,(2),inst_30714);
} else {
if((state_val_30720 === (2))){
var inst_30716 = (state_30719[(2)]);
var inst_30717 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30719__$1 = (function (){var statearr_30721 = state_30719;
(statearr_30721[(7)] = inst_30716);

return statearr_30721;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30719__$1,inst_30717);
} else {
return null;
}
}
});})(c__22951__auto__))
;
return ((function (switch__22856__auto__,c__22951__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22857__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22857__auto____0 = (function (){
var statearr_30722 = [null,null,null,null,null,null,null,null];
(statearr_30722[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22857__auto__);

(statearr_30722[(1)] = (1));

return statearr_30722;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22857__auto____1 = (function (state_30719){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_30719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e30723){if((e30723 instanceof Object)){
var ex__22860__auto__ = e30723;
var statearr_30724_30726 = state_30719;
(statearr_30724_30726[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30727 = state_30719;
state_30719 = G__30727;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22857__auto__ = function(state_30719){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22857__auto____1.call(this,state_30719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22857__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22857__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__))
})();
var state__22953__auto__ = (function (){var statearr_30725 = f__22952__auto__.call(null);
(statearr_30725[(6)] = c__22951__auto__);

return statearr_30725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__))
);

return c__22951__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__,figwheel_version,temp__5720__auto__){
return (function (state_30734){
var state_val_30735 = (state_30734[(1)]);
if((state_val_30735 === (1))){
var inst_30728 = cljs.core.async.timeout.call(null,(2000));
var state_30734__$1 = state_30734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30734__$1,(2),inst_30728);
} else {
if((state_val_30735 === (2))){
var inst_30730 = (state_30734[(2)]);
var inst_30731 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30732 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30731);
var state_30734__$1 = (function (){var statearr_30736 = state_30734;
(statearr_30736[(7)] = inst_30730);

return statearr_30736;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30734__$1,inst_30732);
} else {
return null;
}
}
});})(c__22951__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__22856__auto__,c__22951__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto____0 = (function (){
var statearr_30737 = [null,null,null,null,null,null,null,null];
(statearr_30737[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto__);

(statearr_30737[(1)] = (1));

return statearr_30737;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto____1 = (function (state_30734){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_30734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e30738){if((e30738 instanceof Object)){
var ex__22860__auto__ = e30738;
var statearr_30739_30741 = state_30734;
(statearr_30739_30741[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30742 = state_30734;
state_30734 = G__30742;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto__ = function(state_30734){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto____1.call(this,state_30734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__,figwheel_version,temp__5720__auto__))
})();
var state__22953__auto__ = (function (){var statearr_30740 = f__22952__auto__.call(null);
(statearr_30740[(6)] = c__22951__auto__);

return statearr_30740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__,figwheel_version,temp__5720__auto__))
);

return c__22951__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30743){
var map__30744 = p__30743;
var map__30744__$1 = (((((!((map__30744 == null))))?(((((map__30744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30744):map__30744);
var file = cljs.core.get.call(null,map__30744__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30744__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30744__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30746 = "";
var G__30746__$1 = (cljs.core.truth_(file)?[G__30746,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30746);
var G__30746__$2 = (cljs.core.truth_(line)?[G__30746__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30746__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__30746__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30746__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30747){
var map__30748 = p__30747;
var map__30748__$1 = (((((!((map__30748 == null))))?(((((map__30748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30748):map__30748);
var ed = map__30748__$1;
var exception_data = cljs.core.get.call(null,map__30748__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30748__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30751 = (function (){var G__30750 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30750)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30750;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30751);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30752){
var map__30753 = p__30752;
var map__30753__$1 = (((((!((map__30753 == null))))?(((((map__30753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30753):map__30753);
var w = map__30753__$1;
var message = cljs.core.get.call(null,map__30753__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30755 = cljs.core.seq.call(null,plugins);
var chunk__30756 = null;
var count__30757 = (0);
var i__30758 = (0);
while(true){
if((i__30758 < count__30757)){
var vec__30765 = cljs.core._nth.call(null,chunk__30756,i__30758);
var k = cljs.core.nth.call(null,vec__30765,(0),null);
var plugin = cljs.core.nth.call(null,vec__30765,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30771 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30755,chunk__30756,count__30757,i__30758,pl_30771,vec__30765,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30771.call(null,msg_hist);
});})(seq__30755,chunk__30756,count__30757,i__30758,pl_30771,vec__30765,k,plugin))
);
} else {
}


var G__30772 = seq__30755;
var G__30773 = chunk__30756;
var G__30774 = count__30757;
var G__30775 = (i__30758 + (1));
seq__30755 = G__30772;
chunk__30756 = G__30773;
count__30757 = G__30774;
i__30758 = G__30775;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30755);
if(temp__5720__auto__){
var seq__30755__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30755__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30755__$1);
var G__30776 = cljs.core.chunk_rest.call(null,seq__30755__$1);
var G__30777 = c__4550__auto__;
var G__30778 = cljs.core.count.call(null,c__4550__auto__);
var G__30779 = (0);
seq__30755 = G__30776;
chunk__30756 = G__30777;
count__30757 = G__30778;
i__30758 = G__30779;
continue;
} else {
var vec__30768 = cljs.core.first.call(null,seq__30755__$1);
var k = cljs.core.nth.call(null,vec__30768,(0),null);
var plugin = cljs.core.nth.call(null,vec__30768,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30780 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30755,chunk__30756,count__30757,i__30758,pl_30780,vec__30768,k,plugin,seq__30755__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30780.call(null,msg_hist);
});})(seq__30755,chunk__30756,count__30757,i__30758,pl_30780,vec__30768,k,plugin,seq__30755__$1,temp__5720__auto__))
);
} else {
}


var G__30781 = cljs.core.next.call(null,seq__30755__$1);
var G__30782 = null;
var G__30783 = (0);
var G__30784 = (0);
seq__30755 = G__30781;
chunk__30756 = G__30782;
count__30757 = G__30783;
i__30758 = G__30784;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30786 = arguments.length;
switch (G__30786) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30787_30792 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30788_30793 = null;
var count__30789_30794 = (0);
var i__30790_30795 = (0);
while(true){
if((i__30790_30795 < count__30789_30794)){
var msg_30796 = cljs.core._nth.call(null,chunk__30788_30793,i__30790_30795);
figwheel.client.socket.handle_incoming_message.call(null,msg_30796);


var G__30797 = seq__30787_30792;
var G__30798 = chunk__30788_30793;
var G__30799 = count__30789_30794;
var G__30800 = (i__30790_30795 + (1));
seq__30787_30792 = G__30797;
chunk__30788_30793 = G__30798;
count__30789_30794 = G__30799;
i__30790_30795 = G__30800;
continue;
} else {
var temp__5720__auto___30801 = cljs.core.seq.call(null,seq__30787_30792);
if(temp__5720__auto___30801){
var seq__30787_30802__$1 = temp__5720__auto___30801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30787_30802__$1)){
var c__4550__auto___30803 = cljs.core.chunk_first.call(null,seq__30787_30802__$1);
var G__30804 = cljs.core.chunk_rest.call(null,seq__30787_30802__$1);
var G__30805 = c__4550__auto___30803;
var G__30806 = cljs.core.count.call(null,c__4550__auto___30803);
var G__30807 = (0);
seq__30787_30792 = G__30804;
chunk__30788_30793 = G__30805;
count__30789_30794 = G__30806;
i__30790_30795 = G__30807;
continue;
} else {
var msg_30808 = cljs.core.first.call(null,seq__30787_30802__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30808);


var G__30809 = cljs.core.next.call(null,seq__30787_30802__$1);
var G__30810 = null;
var G__30811 = (0);
var G__30812 = (0);
seq__30787_30792 = G__30809;
chunk__30788_30793 = G__30810;
count__30789_30794 = G__30811;
i__30790_30795 = G__30812;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___30817 = arguments.length;
var i__4731__auto___30818 = (0);
while(true){
if((i__4731__auto___30818 < len__4730__auto___30817)){
args__4736__auto__.push((arguments[i__4731__auto___30818]));

var G__30819 = (i__4731__auto___30818 + (1));
i__4731__auto___30818 = G__30819;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30814){
var map__30815 = p__30814;
var map__30815__$1 = (((((!((map__30815 == null))))?(((((map__30815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30815):map__30815);
var opts = map__30815__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30813){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30813));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30820){if((e30820 instanceof Error)){
var e = e30820;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30820;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__30821){
var map__30822 = p__30821;
var map__30822__$1 = (((((!((map__30822 == null))))?(((((map__30822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30822):map__30822);
var msg_name = cljs.core.get.call(null,map__30822__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1582812682219
