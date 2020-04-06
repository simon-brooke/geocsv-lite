// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30008){
var map__30009 = p__30008;
var map__30009__$1 = (((((!((map__30009 == null))))?(((((map__30009.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30009.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30009):map__30009);
var m = map__30009__$1;
var n = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30009__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30011_30043 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30012_30044 = null;
var count__30013_30045 = (0);
var i__30014_30046 = (0);
while(true){
if((i__30014_30046 < count__30013_30045)){
var f_30047 = cljs.core._nth.call(null,chunk__30012_30044,i__30014_30046);
cljs.core.println.call(null,"  ",f_30047);


var G__30048 = seq__30011_30043;
var G__30049 = chunk__30012_30044;
var G__30050 = count__30013_30045;
var G__30051 = (i__30014_30046 + (1));
seq__30011_30043 = G__30048;
chunk__30012_30044 = G__30049;
count__30013_30045 = G__30050;
i__30014_30046 = G__30051;
continue;
} else {
var temp__5720__auto___30052 = cljs.core.seq.call(null,seq__30011_30043);
if(temp__5720__auto___30052){
var seq__30011_30053__$1 = temp__5720__auto___30052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30011_30053__$1)){
var c__4550__auto___30054 = cljs.core.chunk_first.call(null,seq__30011_30053__$1);
var G__30055 = cljs.core.chunk_rest.call(null,seq__30011_30053__$1);
var G__30056 = c__4550__auto___30054;
var G__30057 = cljs.core.count.call(null,c__4550__auto___30054);
var G__30058 = (0);
seq__30011_30043 = G__30055;
chunk__30012_30044 = G__30056;
count__30013_30045 = G__30057;
i__30014_30046 = G__30058;
continue;
} else {
var f_30059 = cljs.core.first.call(null,seq__30011_30053__$1);
cljs.core.println.call(null,"  ",f_30059);


var G__30060 = cljs.core.next.call(null,seq__30011_30053__$1);
var G__30061 = null;
var G__30062 = (0);
var G__30063 = (0);
seq__30011_30043 = G__30060;
chunk__30012_30044 = G__30061;
count__30013_30045 = G__30062;
i__30014_30046 = G__30063;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30064 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30064);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30064)))?cljs.core.second.call(null,arglists_30064):arglists_30064));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30015_30065 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30016_30066 = null;
var count__30017_30067 = (0);
var i__30018_30068 = (0);
while(true){
if((i__30018_30068 < count__30017_30067)){
var vec__30029_30069 = cljs.core._nth.call(null,chunk__30016_30066,i__30018_30068);
var name_30070 = cljs.core.nth.call(null,vec__30029_30069,(0),null);
var map__30032_30071 = cljs.core.nth.call(null,vec__30029_30069,(1),null);
var map__30032_30072__$1 = (((((!((map__30032_30071 == null))))?(((((map__30032_30071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30032_30071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30032_30071):map__30032_30071);
var doc_30073 = cljs.core.get.call(null,map__30032_30072__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30074 = cljs.core.get.call(null,map__30032_30072__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30070);

cljs.core.println.call(null," ",arglists_30074);

if(cljs.core.truth_(doc_30073)){
cljs.core.println.call(null," ",doc_30073);
} else {
}


var G__30075 = seq__30015_30065;
var G__30076 = chunk__30016_30066;
var G__30077 = count__30017_30067;
var G__30078 = (i__30018_30068 + (1));
seq__30015_30065 = G__30075;
chunk__30016_30066 = G__30076;
count__30017_30067 = G__30077;
i__30018_30068 = G__30078;
continue;
} else {
var temp__5720__auto___30079 = cljs.core.seq.call(null,seq__30015_30065);
if(temp__5720__auto___30079){
var seq__30015_30080__$1 = temp__5720__auto___30079;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30015_30080__$1)){
var c__4550__auto___30081 = cljs.core.chunk_first.call(null,seq__30015_30080__$1);
var G__30082 = cljs.core.chunk_rest.call(null,seq__30015_30080__$1);
var G__30083 = c__4550__auto___30081;
var G__30084 = cljs.core.count.call(null,c__4550__auto___30081);
var G__30085 = (0);
seq__30015_30065 = G__30082;
chunk__30016_30066 = G__30083;
count__30017_30067 = G__30084;
i__30018_30068 = G__30085;
continue;
} else {
var vec__30034_30086 = cljs.core.first.call(null,seq__30015_30080__$1);
var name_30087 = cljs.core.nth.call(null,vec__30034_30086,(0),null);
var map__30037_30088 = cljs.core.nth.call(null,vec__30034_30086,(1),null);
var map__30037_30089__$1 = (((((!((map__30037_30088 == null))))?(((((map__30037_30088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30037_30088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30037_30088):map__30037_30088);
var doc_30090 = cljs.core.get.call(null,map__30037_30089__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30091 = cljs.core.get.call(null,map__30037_30089__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30087);

cljs.core.println.call(null," ",arglists_30091);

if(cljs.core.truth_(doc_30090)){
cljs.core.println.call(null," ",doc_30090);
} else {
}


var G__30092 = cljs.core.next.call(null,seq__30015_30080__$1);
var G__30093 = null;
var G__30094 = (0);
var G__30095 = (0);
seq__30015_30065 = G__30092;
chunk__30016_30066 = G__30093;
count__30017_30067 = G__30094;
i__30018_30068 = G__30095;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__30039 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30040 = null;
var count__30041 = (0);
var i__30042 = (0);
while(true){
if((i__30042 < count__30041)){
var role = cljs.core._nth.call(null,chunk__30040,i__30042);
var temp__5720__auto___30096__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30096__$1)){
var spec_30097 = temp__5720__auto___30096__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30097));
} else {
}


var G__30098 = seq__30039;
var G__30099 = chunk__30040;
var G__30100 = count__30041;
var G__30101 = (i__30042 + (1));
seq__30039 = G__30098;
chunk__30040 = G__30099;
count__30041 = G__30100;
i__30042 = G__30101;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__30039);
if(temp__5720__auto____$1){
var seq__30039__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30039__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30039__$1);
var G__30102 = cljs.core.chunk_rest.call(null,seq__30039__$1);
var G__30103 = c__4550__auto__;
var G__30104 = cljs.core.count.call(null,c__4550__auto__);
var G__30105 = (0);
seq__30039 = G__30102;
chunk__30040 = G__30103;
count__30041 = G__30104;
i__30042 = G__30105;
continue;
} else {
var role = cljs.core.first.call(null,seq__30039__$1);
var temp__5720__auto___30106__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___30106__$2)){
var spec_30107 = temp__5720__auto___30106__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30107));
} else {
}


var G__30108 = cljs.core.next.call(null,seq__30039__$1);
var G__30109 = null;
var G__30110 = (0);
var G__30111 = (0);
seq__30039 = G__30108;
chunk__30040 = G__30109;
count__30041 = G__30110;
i__30042 = G__30111;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__30112 = cljs.core.conj.call(null,via,t);
var G__30113 = cljs.core.ex_cause.call(null,t);
via = G__30112;
t = G__30113;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__30116 = datafied_throwable;
var map__30116__$1 = (((((!((map__30116 == null))))?(((((map__30116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30116):map__30116);
var via = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__30116__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30117 = cljs.core.last.call(null,via);
var map__30117__$1 = (((((!((map__30117 == null))))?(((((map__30117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30117):map__30117);
var type = cljs.core.get.call(null,map__30117__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__30117__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__30117__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30118 = data;
var map__30118__$1 = (((((!((map__30118 == null))))?(((((map__30118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30118):map__30118);
var problems = cljs.core.get.call(null,map__30118__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__30118__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__30118__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30119 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__30119__$1 = (((((!((map__30119 == null))))?(((((map__30119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30119):map__30119);
var top_data = map__30119__$1;
var source = cljs.core.get.call(null,map__30119__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__30124 = phase;
var G__30124__$1 = (((G__30124 instanceof cljs.core.Keyword))?G__30124.fqn:null);
switch (G__30124__$1) {
case "read-source":
var map__30125 = data;
var map__30125__$1 = (((((!((map__30125 == null))))?(((((map__30125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30125):map__30125);
var line = cljs.core.get.call(null,map__30125__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30125__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30127 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__30127__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30127,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30127);
var G__30127__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30127__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30127__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30127__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30127__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30128 = top_data;
var G__30128__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__30128,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30128);
var G__30128__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__30128__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30128__$1);
var G__30128__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30128__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30128__$2);
var G__30128__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30128__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30128__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30128__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30128__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30129 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30129,(0),null);
var method = cljs.core.nth.call(null,vec__30129,(1),null);
var file = cljs.core.nth.call(null,vec__30129,(2),null);
var line = cljs.core.nth.call(null,vec__30129,(3),null);
var G__30132 = top_data;
var G__30132__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__30132,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30132);
var G__30132__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__30132__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30132__$1);
var G__30132__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__30132__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30132__$2);
var G__30132__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__30132__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30132__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__30132__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30132__$4;
}

break;
case "execution":
var vec__30133 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__30133,(0),null);
var method = cljs.core.nth.call(null,vec__30133,(1),null);
var file = cljs.core.nth.call(null,vec__30133,(2),null);
var line = cljs.core.nth.call(null,vec__30133,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__30133,source__$1,method,file,line,G__30124,G__30124__$1,map__30116,map__30116__$1,via,trace,phase,map__30117,map__30117__$1,type,message,data,map__30118,map__30118__$1,problems,fn,caller,map__30119,map__30119__$1,top_data,source){
return (function (p1__30115_SHARP_){
var or__4131__auto__ = (p1__30115_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__30115_SHARP_);
}
});})(vec__30133,source__$1,method,file,line,G__30124,G__30124__$1,map__30116,map__30116__$1,via,trace,phase,map__30117,map__30117__$1,type,message,data,map__30118,map__30118__$1,problems,fn,caller,map__30119,map__30119__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__30136 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30136__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__30136,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30136);
var G__30136__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__30136__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30136__$1);
var G__30136__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__30136__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30136__$2);
var G__30136__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__30136__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30136__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__30136__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30136__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30124__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30140){
var map__30141 = p__30140;
var map__30141__$1 = (((((!((map__30141 == null))))?(((((map__30141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30141):map__30141);
var triage_data = map__30141__$1;
var phase = cljs.core.get.call(null,map__30141__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__30141__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__30141__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__30141__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__30141__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__30141__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__30141__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__30141__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__30143 = phase;
var G__30143__$1 = (((G__30143 instanceof cljs.core.Keyword))?G__30143.fqn:null);
switch (G__30143__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30144_30153 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30145_30154 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30146_30155 = true;
var _STAR_print_fn_STAR__temp_val__30147_30156 = ((function (_STAR_print_newline_STAR__orig_val__30144_30153,_STAR_print_fn_STAR__orig_val__30145_30154,_STAR_print_newline_STAR__temp_val__30146_30155,sb__4661__auto__,G__30143,G__30143__$1,loc,class_name,simple_class,cause_type,format,map__30141,map__30141__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30144_30153,_STAR_print_fn_STAR__orig_val__30145_30154,_STAR_print_newline_STAR__temp_val__30146_30155,sb__4661__auto__,G__30143,G__30143__$1,loc,class_name,simple_class,cause_type,format,map__30141,map__30141__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30146_30155;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30147_30156;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30144_30153,_STAR_print_fn_STAR__orig_val__30145_30154,_STAR_print_newline_STAR__temp_val__30146_30155,_STAR_print_fn_STAR__temp_val__30147_30156,sb__4661__auto__,G__30143,G__30143__$1,loc,class_name,simple_class,cause_type,format,map__30141,map__30141__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30144_30153,_STAR_print_fn_STAR__orig_val__30145_30154,_STAR_print_newline_STAR__temp_val__30146_30155,_STAR_print_fn_STAR__temp_val__30147_30156,sb__4661__auto__,G__30143,G__30143__$1,loc,class_name,simple_class,cause_type,format,map__30141,map__30141__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30138_SHARP_){
return cljs.core.dissoc.call(null,p1__30138_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30144_30153,_STAR_print_fn_STAR__orig_val__30145_30154,_STAR_print_newline_STAR__temp_val__30146_30155,_STAR_print_fn_STAR__temp_val__30147_30156,sb__4661__auto__,G__30143,G__30143__$1,loc,class_name,simple_class,cause_type,format,map__30141,map__30141__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30144_30153,_STAR_print_fn_STAR__orig_val__30145_30154,_STAR_print_newline_STAR__temp_val__30146_30155,_STAR_print_fn_STAR__temp_val__30147_30156,sb__4661__auto__,G__30143,G__30143__$1,loc,class_name,simple_class,cause_type,format,map__30141,map__30141__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30145_30154;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30144_30153;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30148_30157 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30149_30158 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30150_30159 = true;
var _STAR_print_fn_STAR__temp_val__30151_30160 = ((function (_STAR_print_newline_STAR__orig_val__30148_30157,_STAR_print_fn_STAR__orig_val__30149_30158,_STAR_print_newline_STAR__temp_val__30150_30159,sb__4661__auto__,G__30143,G__30143__$1,loc,class_name,simple_class,cause_type,format,map__30141,map__30141__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30148_30157,_STAR_print_fn_STAR__orig_val__30149_30158,_STAR_print_newline_STAR__temp_val__30150_30159,sb__4661__auto__,G__30143,G__30143__$1,loc,class_name,simple_class,cause_type,format,map__30141,map__30141__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30150_30159;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30151_30160;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30148_30157,_STAR_print_fn_STAR__orig_val__30149_30158,_STAR_print_newline_STAR__temp_val__30150_30159,_STAR_print_fn_STAR__temp_val__30151_30160,sb__4661__auto__,G__30143,G__30143__$1,loc,class_name,simple_class,cause_type,format,map__30141,map__30141__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__30148_30157,_STAR_print_fn_STAR__orig_val__30149_30158,_STAR_print_newline_STAR__temp_val__30150_30159,_STAR_print_fn_STAR__temp_val__30151_30160,sb__4661__auto__,G__30143,G__30143__$1,loc,class_name,simple_class,cause_type,format,map__30141,map__30141__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30139_SHARP_){
return cljs.core.dissoc.call(null,p1__30139_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30148_30157,_STAR_print_fn_STAR__orig_val__30149_30158,_STAR_print_newline_STAR__temp_val__30150_30159,_STAR_print_fn_STAR__temp_val__30151_30160,sb__4661__auto__,G__30143,G__30143__$1,loc,class_name,simple_class,cause_type,format,map__30141,map__30141__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30148_30157,_STAR_print_fn_STAR__orig_val__30149_30158,_STAR_print_newline_STAR__temp_val__30150_30159,_STAR_print_fn_STAR__temp_val__30151_30160,sb__4661__auto__,G__30143,G__30143__$1,loc,class_name,simple_class,cause_type,format,map__30141,map__30141__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30149_30158;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30148_30157;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30143__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1582812681961
