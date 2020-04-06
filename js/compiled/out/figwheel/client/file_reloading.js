// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28478_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28478_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28479 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28480 = null;
var count__28481 = (0);
var i__28482 = (0);
while(true){
if((i__28482 < count__28481)){
var n = cljs.core._nth.call(null,chunk__28480,i__28482);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28483 = seq__28479;
var G__28484 = chunk__28480;
var G__28485 = count__28481;
var G__28486 = (i__28482 + (1));
seq__28479 = G__28483;
chunk__28480 = G__28484;
count__28481 = G__28485;
i__28482 = G__28486;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28479);
if(temp__5720__auto__){
var seq__28479__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28479__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28479__$1);
var G__28487 = cljs.core.chunk_rest.call(null,seq__28479__$1);
var G__28488 = c__4550__auto__;
var G__28489 = cljs.core.count.call(null,c__4550__auto__);
var G__28490 = (0);
seq__28479 = G__28487;
chunk__28480 = G__28488;
count__28481 = G__28489;
i__28482 = G__28490;
continue;
} else {
var n = cljs.core.first.call(null,seq__28479__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28491 = cljs.core.next.call(null,seq__28479__$1);
var G__28492 = null;
var G__28493 = (0);
var G__28494 = (0);
seq__28479 = G__28491;
chunk__28480 = G__28492;
count__28481 = G__28493;
i__28482 = G__28494;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28495){
var vec__28496 = p__28495;
var _ = cljs.core.nth.call(null,vec__28496,(0),null);
var v = cljs.core.nth.call(null,vec__28496,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__28499){
var vec__28500 = p__28499;
var k = cljs.core.nth.call(null,vec__28500,(0),null);
var v = cljs.core.nth.call(null,vec__28500,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28512_28520 = cljs.core.seq.call(null,deps);
var chunk__28513_28521 = null;
var count__28514_28522 = (0);
var i__28515_28523 = (0);
while(true){
if((i__28515_28523 < count__28514_28522)){
var dep_28524 = cljs.core._nth.call(null,chunk__28513_28521,i__28515_28523);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28524;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28524));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28524,(depth + (1)),state);
} else {
}


var G__28525 = seq__28512_28520;
var G__28526 = chunk__28513_28521;
var G__28527 = count__28514_28522;
var G__28528 = (i__28515_28523 + (1));
seq__28512_28520 = G__28525;
chunk__28513_28521 = G__28526;
count__28514_28522 = G__28527;
i__28515_28523 = G__28528;
continue;
} else {
var temp__5720__auto___28529 = cljs.core.seq.call(null,seq__28512_28520);
if(temp__5720__auto___28529){
var seq__28512_28530__$1 = temp__5720__auto___28529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28512_28530__$1)){
var c__4550__auto___28531 = cljs.core.chunk_first.call(null,seq__28512_28530__$1);
var G__28532 = cljs.core.chunk_rest.call(null,seq__28512_28530__$1);
var G__28533 = c__4550__auto___28531;
var G__28534 = cljs.core.count.call(null,c__4550__auto___28531);
var G__28535 = (0);
seq__28512_28520 = G__28532;
chunk__28513_28521 = G__28533;
count__28514_28522 = G__28534;
i__28515_28523 = G__28535;
continue;
} else {
var dep_28536 = cljs.core.first.call(null,seq__28512_28530__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_28536;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28536));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28536,(depth + (1)),state);
} else {
}


var G__28537 = cljs.core.next.call(null,seq__28512_28530__$1);
var G__28538 = null;
var G__28539 = (0);
var G__28540 = (0);
seq__28512_28520 = G__28537;
chunk__28513_28521 = G__28538;
count__28514_28522 = G__28539;
i__28515_28523 = G__28540;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28516){
var vec__28517 = p__28516;
var seq__28518 = cljs.core.seq.call(null,vec__28517);
var first__28519 = cljs.core.first.call(null,seq__28518);
var seq__28518__$1 = cljs.core.next.call(null,seq__28518);
var x = first__28519;
var xs = seq__28518__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28517,seq__28518,first__28519,seq__28518__$1,x,xs,get_deps__$1){
return (function (p1__28503_SHARP_){
return clojure.set.difference.call(null,p1__28503_SHARP_,x);
});})(vec__28517,seq__28518,first__28519,seq__28518__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28541 = cljs.core.seq.call(null,provides);
var chunk__28542 = null;
var count__28543 = (0);
var i__28544 = (0);
while(true){
if((i__28544 < count__28543)){
var prov = cljs.core._nth.call(null,chunk__28542,i__28544);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28553_28561 = cljs.core.seq.call(null,requires);
var chunk__28554_28562 = null;
var count__28555_28563 = (0);
var i__28556_28564 = (0);
while(true){
if((i__28556_28564 < count__28555_28563)){
var req_28565 = cljs.core._nth.call(null,chunk__28554_28562,i__28556_28564);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28565,prov);


var G__28566 = seq__28553_28561;
var G__28567 = chunk__28554_28562;
var G__28568 = count__28555_28563;
var G__28569 = (i__28556_28564 + (1));
seq__28553_28561 = G__28566;
chunk__28554_28562 = G__28567;
count__28555_28563 = G__28568;
i__28556_28564 = G__28569;
continue;
} else {
var temp__5720__auto___28570 = cljs.core.seq.call(null,seq__28553_28561);
if(temp__5720__auto___28570){
var seq__28553_28571__$1 = temp__5720__auto___28570;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28553_28571__$1)){
var c__4550__auto___28572 = cljs.core.chunk_first.call(null,seq__28553_28571__$1);
var G__28573 = cljs.core.chunk_rest.call(null,seq__28553_28571__$1);
var G__28574 = c__4550__auto___28572;
var G__28575 = cljs.core.count.call(null,c__4550__auto___28572);
var G__28576 = (0);
seq__28553_28561 = G__28573;
chunk__28554_28562 = G__28574;
count__28555_28563 = G__28575;
i__28556_28564 = G__28576;
continue;
} else {
var req_28577 = cljs.core.first.call(null,seq__28553_28571__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28577,prov);


var G__28578 = cljs.core.next.call(null,seq__28553_28571__$1);
var G__28579 = null;
var G__28580 = (0);
var G__28581 = (0);
seq__28553_28561 = G__28578;
chunk__28554_28562 = G__28579;
count__28555_28563 = G__28580;
i__28556_28564 = G__28581;
continue;
}
} else {
}
}
break;
}


var G__28582 = seq__28541;
var G__28583 = chunk__28542;
var G__28584 = count__28543;
var G__28585 = (i__28544 + (1));
seq__28541 = G__28582;
chunk__28542 = G__28583;
count__28543 = G__28584;
i__28544 = G__28585;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28541);
if(temp__5720__auto__){
var seq__28541__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28541__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__28541__$1);
var G__28586 = cljs.core.chunk_rest.call(null,seq__28541__$1);
var G__28587 = c__4550__auto__;
var G__28588 = cljs.core.count.call(null,c__4550__auto__);
var G__28589 = (0);
seq__28541 = G__28586;
chunk__28542 = G__28587;
count__28543 = G__28588;
i__28544 = G__28589;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28541__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28557_28590 = cljs.core.seq.call(null,requires);
var chunk__28558_28591 = null;
var count__28559_28592 = (0);
var i__28560_28593 = (0);
while(true){
if((i__28560_28593 < count__28559_28592)){
var req_28594 = cljs.core._nth.call(null,chunk__28558_28591,i__28560_28593);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28594,prov);


var G__28595 = seq__28557_28590;
var G__28596 = chunk__28558_28591;
var G__28597 = count__28559_28592;
var G__28598 = (i__28560_28593 + (1));
seq__28557_28590 = G__28595;
chunk__28558_28591 = G__28596;
count__28559_28592 = G__28597;
i__28560_28593 = G__28598;
continue;
} else {
var temp__5720__auto___28599__$1 = cljs.core.seq.call(null,seq__28557_28590);
if(temp__5720__auto___28599__$1){
var seq__28557_28600__$1 = temp__5720__auto___28599__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28557_28600__$1)){
var c__4550__auto___28601 = cljs.core.chunk_first.call(null,seq__28557_28600__$1);
var G__28602 = cljs.core.chunk_rest.call(null,seq__28557_28600__$1);
var G__28603 = c__4550__auto___28601;
var G__28604 = cljs.core.count.call(null,c__4550__auto___28601);
var G__28605 = (0);
seq__28557_28590 = G__28602;
chunk__28558_28591 = G__28603;
count__28559_28592 = G__28604;
i__28560_28593 = G__28605;
continue;
} else {
var req_28606 = cljs.core.first.call(null,seq__28557_28600__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28606,prov);


var G__28607 = cljs.core.next.call(null,seq__28557_28600__$1);
var G__28608 = null;
var G__28609 = (0);
var G__28610 = (0);
seq__28557_28590 = G__28607;
chunk__28558_28591 = G__28608;
count__28559_28592 = G__28609;
i__28560_28593 = G__28610;
continue;
}
} else {
}
}
break;
}


var G__28611 = cljs.core.next.call(null,seq__28541__$1);
var G__28612 = null;
var G__28613 = (0);
var G__28614 = (0);
seq__28541 = G__28611;
chunk__28542 = G__28612;
count__28543 = G__28613;
i__28544 = G__28614;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28615_28619 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28616_28620 = null;
var count__28617_28621 = (0);
var i__28618_28622 = (0);
while(true){
if((i__28618_28622 < count__28617_28621)){
var ns_28623 = cljs.core._nth.call(null,chunk__28616_28620,i__28618_28622);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28623);


var G__28624 = seq__28615_28619;
var G__28625 = chunk__28616_28620;
var G__28626 = count__28617_28621;
var G__28627 = (i__28618_28622 + (1));
seq__28615_28619 = G__28624;
chunk__28616_28620 = G__28625;
count__28617_28621 = G__28626;
i__28618_28622 = G__28627;
continue;
} else {
var temp__5720__auto___28628 = cljs.core.seq.call(null,seq__28615_28619);
if(temp__5720__auto___28628){
var seq__28615_28629__$1 = temp__5720__auto___28628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28615_28629__$1)){
var c__4550__auto___28630 = cljs.core.chunk_first.call(null,seq__28615_28629__$1);
var G__28631 = cljs.core.chunk_rest.call(null,seq__28615_28629__$1);
var G__28632 = c__4550__auto___28630;
var G__28633 = cljs.core.count.call(null,c__4550__auto___28630);
var G__28634 = (0);
seq__28615_28619 = G__28631;
chunk__28616_28620 = G__28632;
count__28617_28621 = G__28633;
i__28618_28622 = G__28634;
continue;
} else {
var ns_28635 = cljs.core.first.call(null,seq__28615_28629__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28635);


var G__28636 = cljs.core.next.call(null,seq__28615_28629__$1);
var G__28637 = null;
var G__28638 = (0);
var G__28639 = (0);
seq__28615_28619 = G__28636;
chunk__28616_28620 = G__28637;
count__28617_28621 = G__28638;
i__28618_28622 = G__28639;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28640__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28640 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28641__i = 0, G__28641__a = new Array(arguments.length -  0);
while (G__28641__i < G__28641__a.length) {G__28641__a[G__28641__i] = arguments[G__28641__i + 0]; ++G__28641__i;}
  args = new cljs.core.IndexedSeq(G__28641__a,0,null);
} 
return G__28640__delegate.call(this,args);};
G__28640.cljs$lang$maxFixedArity = 0;
G__28640.cljs$lang$applyTo = (function (arglist__28642){
var args = cljs.core.seq(arglist__28642);
return G__28640__delegate(args);
});
G__28640.cljs$core$IFn$_invoke$arity$variadic = G__28640__delegate;
return G__28640;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28643_SHARP_,p2__28644_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28643_SHARP_)),p2__28644_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28645_SHARP_,p2__28646_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28645_SHARP_),p2__28646_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28647 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28647.addCallback(((function (G__28647){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28647))
);

G__28647.addErrback(((function (G__28647){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28647))
);

return G__28647;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28648){if((e28648 instanceof Error)){
var e = e28648;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28648;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28649){if((e28649 instanceof Error)){
var e = e28649;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28649;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28650 = cljs.core._EQ_;
var expr__28651 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28650.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28651))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28650.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28651))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28650.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28651))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28650,expr__28651){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28650,expr__28651))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28653,callback){
var map__28654 = p__28653;
var map__28654__$1 = (((((!((map__28654 == null))))?(((((map__28654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28654):map__28654);
var file_msg = map__28654__$1;
var request_url = cljs.core.get.call(null,map__28654__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28654,map__28654__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28654,map__28654__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__){
return (function (state_28692){
var state_val_28693 = (state_28692[(1)]);
if((state_val_28693 === (7))){
var inst_28688 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28694_28720 = state_28692__$1;
(statearr_28694_28720[(2)] = inst_28688);

(statearr_28694_28720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (1))){
var state_28692__$1 = state_28692;
var statearr_28695_28721 = state_28692__$1;
(statearr_28695_28721[(2)] = null);

(statearr_28695_28721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (4))){
var inst_28658 = (state_28692[(7)]);
var inst_28658__$1 = (state_28692[(2)]);
var state_28692__$1 = (function (){var statearr_28696 = state_28692;
(statearr_28696[(7)] = inst_28658__$1);

return statearr_28696;
})();
if(cljs.core.truth_(inst_28658__$1)){
var statearr_28697_28722 = state_28692__$1;
(statearr_28697_28722[(1)] = (5));

} else {
var statearr_28698_28723 = state_28692__$1;
(statearr_28698_28723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (15))){
var inst_28673 = (state_28692[(8)]);
var inst_28671 = (state_28692[(9)]);
var inst_28675 = inst_28673.call(null,inst_28671);
var state_28692__$1 = state_28692;
var statearr_28699_28724 = state_28692__$1;
(statearr_28699_28724[(2)] = inst_28675);

(statearr_28699_28724[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (13))){
var inst_28682 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28700_28725 = state_28692__$1;
(statearr_28700_28725[(2)] = inst_28682);

(statearr_28700_28725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (6))){
var state_28692__$1 = state_28692;
var statearr_28701_28726 = state_28692__$1;
(statearr_28701_28726[(2)] = null);

(statearr_28701_28726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (17))){
var inst_28679 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28702_28727 = state_28692__$1;
(statearr_28702_28727[(2)] = inst_28679);

(statearr_28702_28727[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (3))){
var inst_28690 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28692__$1,inst_28690);
} else {
if((state_val_28693 === (12))){
var state_28692__$1 = state_28692;
var statearr_28703_28728 = state_28692__$1;
(statearr_28703_28728[(2)] = null);

(statearr_28703_28728[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (2))){
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28692__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28693 === (11))){
var inst_28663 = (state_28692[(10)]);
var inst_28669 = figwheel.client.file_reloading.blocking_load.call(null,inst_28663);
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28692__$1,(14),inst_28669);
} else {
if((state_val_28693 === (9))){
var inst_28663 = (state_28692[(10)]);
var state_28692__$1 = state_28692;
if(cljs.core.truth_(inst_28663)){
var statearr_28704_28729 = state_28692__$1;
(statearr_28704_28729[(1)] = (11));

} else {
var statearr_28705_28730 = state_28692__$1;
(statearr_28705_28730[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (5))){
var inst_28664 = (state_28692[(11)]);
var inst_28658 = (state_28692[(7)]);
var inst_28663 = cljs.core.nth.call(null,inst_28658,(0),null);
var inst_28664__$1 = cljs.core.nth.call(null,inst_28658,(1),null);
var state_28692__$1 = (function (){var statearr_28706 = state_28692;
(statearr_28706[(11)] = inst_28664__$1);

(statearr_28706[(10)] = inst_28663);

return statearr_28706;
})();
if(cljs.core.truth_(inst_28664__$1)){
var statearr_28707_28731 = state_28692__$1;
(statearr_28707_28731[(1)] = (8));

} else {
var statearr_28708_28732 = state_28692__$1;
(statearr_28708_28732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (14))){
var inst_28673 = (state_28692[(8)]);
var inst_28663 = (state_28692[(10)]);
var inst_28671 = (state_28692[(2)]);
var inst_28672 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28673__$1 = cljs.core.get.call(null,inst_28672,inst_28663);
var state_28692__$1 = (function (){var statearr_28709 = state_28692;
(statearr_28709[(8)] = inst_28673__$1);

(statearr_28709[(9)] = inst_28671);

return statearr_28709;
})();
if(cljs.core.truth_(inst_28673__$1)){
var statearr_28710_28733 = state_28692__$1;
(statearr_28710_28733[(1)] = (15));

} else {
var statearr_28711_28734 = state_28692__$1;
(statearr_28711_28734[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (16))){
var inst_28671 = (state_28692[(9)]);
var inst_28677 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28671);
var state_28692__$1 = state_28692;
var statearr_28712_28735 = state_28692__$1;
(statearr_28712_28735[(2)] = inst_28677);

(statearr_28712_28735[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (10))){
var inst_28684 = (state_28692[(2)]);
var state_28692__$1 = (function (){var statearr_28713 = state_28692;
(statearr_28713[(12)] = inst_28684);

return statearr_28713;
})();
var statearr_28714_28736 = state_28692__$1;
(statearr_28714_28736[(2)] = null);

(statearr_28714_28736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (8))){
var inst_28664 = (state_28692[(11)]);
var inst_28666 = eval(inst_28664);
var state_28692__$1 = state_28692;
var statearr_28715_28737 = state_28692__$1;
(statearr_28715_28737[(2)] = inst_28666);

(statearr_28715_28737[(1)] = (10));


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
});})(c__22951__auto__))
;
return ((function (switch__22856__auto__,c__22951__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22857__auto__ = null;
var figwheel$client$file_reloading$state_machine__22857__auto____0 = (function (){
var statearr_28716 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28716[(0)] = figwheel$client$file_reloading$state_machine__22857__auto__);

(statearr_28716[(1)] = (1));

return statearr_28716;
});
var figwheel$client$file_reloading$state_machine__22857__auto____1 = (function (state_28692){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_28692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e28717){if((e28717 instanceof Object)){
var ex__22860__auto__ = e28717;
var statearr_28718_28738 = state_28692;
(statearr_28718_28738[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28739 = state_28692;
state_28692 = G__28739;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22857__auto__ = function(state_28692){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22857__auto____1.call(this,state_28692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22857__auto____0;
figwheel$client$file_reloading$state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22857__auto____1;
return figwheel$client$file_reloading$state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__))
})();
var state__22953__auto__ = (function (){var statearr_28719 = f__22952__auto__.call(null);
(statearr_28719[(6)] = c__22951__auto__);

return statearr_28719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__))
);

return c__22951__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28741 = arguments.length;
switch (G__28741) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28743,callback){
var map__28744 = p__28743;
var map__28744__$1 = (((((!((map__28744 == null))))?(((((map__28744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28744):map__28744);
var file_msg = map__28744__$1;
var namespace = cljs.core.get.call(null,map__28744__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28744,map__28744__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28744,map__28744__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28746){
var map__28747 = p__28746;
var map__28747__$1 = (((((!((map__28747 == null))))?(((((map__28747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28747.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28747):map__28747);
var file_msg = map__28747__$1;
var namespace = cljs.core.get.call(null,map__28747__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28749){
var map__28750 = p__28749;
var map__28750__$1 = (((((!((map__28750 == null))))?(((((map__28750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28750):map__28750);
var file_msg = map__28750__$1;
var namespace = cljs.core.get.call(null,map__28750__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28752,callback){
var map__28753 = p__28752;
var map__28753__$1 = (((((!((map__28753 == null))))?(((((map__28753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28753):map__28753);
var file_msg = map__28753__$1;
var request_url = cljs.core.get.call(null,map__28753__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28753__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22951__auto___28803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto___28803,out){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto___28803,out){
return (function (state_28788){
var state_val_28789 = (state_28788[(1)]);
if((state_val_28789 === (1))){
var inst_28762 = cljs.core.seq.call(null,files);
var inst_28763 = cljs.core.first.call(null,inst_28762);
var inst_28764 = cljs.core.next.call(null,inst_28762);
var inst_28765 = files;
var state_28788__$1 = (function (){var statearr_28790 = state_28788;
(statearr_28790[(7)] = inst_28764);

(statearr_28790[(8)] = inst_28765);

(statearr_28790[(9)] = inst_28763);

return statearr_28790;
})();
var statearr_28791_28804 = state_28788__$1;
(statearr_28791_28804[(2)] = null);

(statearr_28791_28804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (2))){
var inst_28765 = (state_28788[(8)]);
var inst_28771 = (state_28788[(10)]);
var inst_28770 = cljs.core.seq.call(null,inst_28765);
var inst_28771__$1 = cljs.core.first.call(null,inst_28770);
var inst_28772 = cljs.core.next.call(null,inst_28770);
var inst_28773 = (inst_28771__$1 == null);
var inst_28774 = cljs.core.not.call(null,inst_28773);
var state_28788__$1 = (function (){var statearr_28792 = state_28788;
(statearr_28792[(10)] = inst_28771__$1);

(statearr_28792[(11)] = inst_28772);

return statearr_28792;
})();
if(inst_28774){
var statearr_28793_28805 = state_28788__$1;
(statearr_28793_28805[(1)] = (4));

} else {
var statearr_28794_28806 = state_28788__$1;
(statearr_28794_28806[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (3))){
var inst_28786 = (state_28788[(2)]);
var state_28788__$1 = state_28788;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28788__$1,inst_28786);
} else {
if((state_val_28789 === (4))){
var inst_28771 = (state_28788[(10)]);
var inst_28776 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28771);
var state_28788__$1 = state_28788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28788__$1,(7),inst_28776);
} else {
if((state_val_28789 === (5))){
var inst_28782 = cljs.core.async.close_BANG_.call(null,out);
var state_28788__$1 = state_28788;
var statearr_28795_28807 = state_28788__$1;
(statearr_28795_28807[(2)] = inst_28782);

(statearr_28795_28807[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (6))){
var inst_28784 = (state_28788[(2)]);
var state_28788__$1 = state_28788;
var statearr_28796_28808 = state_28788__$1;
(statearr_28796_28808[(2)] = inst_28784);

(statearr_28796_28808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28789 === (7))){
var inst_28772 = (state_28788[(11)]);
var inst_28778 = (state_28788[(2)]);
var inst_28779 = cljs.core.async.put_BANG_.call(null,out,inst_28778);
var inst_28765 = inst_28772;
var state_28788__$1 = (function (){var statearr_28797 = state_28788;
(statearr_28797[(8)] = inst_28765);

(statearr_28797[(12)] = inst_28779);

return statearr_28797;
})();
var statearr_28798_28809 = state_28788__$1;
(statearr_28798_28809[(2)] = null);

(statearr_28798_28809[(1)] = (2));


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
});})(c__22951__auto___28803,out))
;
return ((function (switch__22856__auto__,c__22951__auto___28803,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto____0 = (function (){
var statearr_28799 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28799[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto__);

(statearr_28799[(1)] = (1));

return statearr_28799;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto____1 = (function (state_28788){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_28788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e28800){if((e28800 instanceof Object)){
var ex__22860__auto__ = e28800;
var statearr_28801_28810 = state_28788;
(statearr_28801_28810[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28811 = state_28788;
state_28788 = G__28811;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto__ = function(state_28788){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto____1.call(this,state_28788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto___28803,out))
})();
var state__22953__auto__ = (function (){var statearr_28802 = f__22952__auto__.call(null);
(statearr_28802[(6)] = c__22951__auto___28803);

return statearr_28802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto___28803,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28812,opts){
var map__28813 = p__28812;
var map__28813__$1 = (((((!((map__28813 == null))))?(((((map__28813.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28813.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28813):map__28813);
var eval_body = cljs.core.get.call(null,map__28813__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28813__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28815){var e = e28815;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28816_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28816_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28817){
var vec__28818 = p__28817;
var k = cljs.core.nth.call(null,vec__28818,(0),null);
var v = cljs.core.nth.call(null,vec__28818,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28821){
var vec__28822 = p__28821;
var k = cljs.core.nth.call(null,vec__28822,(0),null);
var v = cljs.core.nth.call(null,vec__28822,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28828,p__28829){
var map__28830 = p__28828;
var map__28830__$1 = (((((!((map__28830 == null))))?(((((map__28830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28830):map__28830);
var opts = map__28830__$1;
var before_jsload = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28831 = p__28829;
var map__28831__$1 = (((((!((map__28831 == null))))?(((((map__28831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28831):map__28831);
var msg = map__28831__$1;
var files = cljs.core.get.call(null,map__28831__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28831__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28831__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22951__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22952__auto__ = (function (){var switch__22856__auto__ = ((function (c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28985){
var state_val_28986 = (state_28985[(1)]);
if((state_val_28986 === (7))){
var inst_28848 = (state_28985[(7)]);
var inst_28845 = (state_28985[(8)]);
var inst_28847 = (state_28985[(9)]);
var inst_28846 = (state_28985[(10)]);
var inst_28853 = cljs.core._nth.call(null,inst_28846,inst_28848);
var inst_28854 = figwheel.client.file_reloading.eval_body.call(null,inst_28853,opts);
var inst_28855 = (inst_28848 + (1));
var tmp28987 = inst_28845;
var tmp28988 = inst_28847;
var tmp28989 = inst_28846;
var inst_28845__$1 = tmp28987;
var inst_28846__$1 = tmp28989;
var inst_28847__$1 = tmp28988;
var inst_28848__$1 = inst_28855;
var state_28985__$1 = (function (){var statearr_28990 = state_28985;
(statearr_28990[(11)] = inst_28854);

(statearr_28990[(7)] = inst_28848__$1);

(statearr_28990[(8)] = inst_28845__$1);

(statearr_28990[(9)] = inst_28847__$1);

(statearr_28990[(10)] = inst_28846__$1);

return statearr_28990;
})();
var statearr_28991_29074 = state_28985__$1;
(statearr_28991_29074[(2)] = null);

(statearr_28991_29074[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (20))){
var inst_28888 = (state_28985[(12)]);
var inst_28896 = figwheel.client.file_reloading.sort_files.call(null,inst_28888);
var state_28985__$1 = state_28985;
var statearr_28992_29075 = state_28985__$1;
(statearr_28992_29075[(2)] = inst_28896);

(statearr_28992_29075[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (27))){
var state_28985__$1 = state_28985;
var statearr_28993_29076 = state_28985__$1;
(statearr_28993_29076[(2)] = null);

(statearr_28993_29076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (1))){
var inst_28837 = (state_28985[(13)]);
var inst_28834 = before_jsload.call(null,files);
var inst_28835 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28836 = (function (){return ((function (inst_28837,inst_28834,inst_28835,state_val_28986,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28825_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28825_SHARP_);
});
;})(inst_28837,inst_28834,inst_28835,state_val_28986,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28837__$1 = cljs.core.filter.call(null,inst_28836,files);
var inst_28838 = cljs.core.not_empty.call(null,inst_28837__$1);
var state_28985__$1 = (function (){var statearr_28994 = state_28985;
(statearr_28994[(13)] = inst_28837__$1);

(statearr_28994[(14)] = inst_28835);

(statearr_28994[(15)] = inst_28834);

return statearr_28994;
})();
if(cljs.core.truth_(inst_28838)){
var statearr_28995_29077 = state_28985__$1;
(statearr_28995_29077[(1)] = (2));

} else {
var statearr_28996_29078 = state_28985__$1;
(statearr_28996_29078[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (24))){
var state_28985__$1 = state_28985;
var statearr_28997_29079 = state_28985__$1;
(statearr_28997_29079[(2)] = null);

(statearr_28997_29079[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (39))){
var inst_28938 = (state_28985[(16)]);
var state_28985__$1 = state_28985;
var statearr_28998_29080 = state_28985__$1;
(statearr_28998_29080[(2)] = inst_28938);

(statearr_28998_29080[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (46))){
var inst_28980 = (state_28985[(2)]);
var state_28985__$1 = state_28985;
var statearr_28999_29081 = state_28985__$1;
(statearr_28999_29081[(2)] = inst_28980);

(statearr_28999_29081[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (4))){
var inst_28882 = (state_28985[(2)]);
var inst_28883 = cljs.core.List.EMPTY;
var inst_28884 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28883);
var inst_28885 = (function (){return ((function (inst_28882,inst_28883,inst_28884,state_val_28986,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28826_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28826_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28826_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28826_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_28882,inst_28883,inst_28884,state_val_28986,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28886 = cljs.core.filter.call(null,inst_28885,files);
var inst_28887 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28888 = cljs.core.concat.call(null,inst_28886,inst_28887);
var state_28985__$1 = (function (){var statearr_29000 = state_28985;
(statearr_29000[(12)] = inst_28888);

(statearr_29000[(17)] = inst_28884);

(statearr_29000[(18)] = inst_28882);

return statearr_29000;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29001_29082 = state_28985__$1;
(statearr_29001_29082[(1)] = (16));

} else {
var statearr_29002_29083 = state_28985__$1;
(statearr_29002_29083[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (15))){
var inst_28872 = (state_28985[(2)]);
var state_28985__$1 = state_28985;
var statearr_29003_29084 = state_28985__$1;
(statearr_29003_29084[(2)] = inst_28872);

(statearr_29003_29084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (21))){
var inst_28898 = (state_28985[(19)]);
var inst_28898__$1 = (state_28985[(2)]);
var inst_28899 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28898__$1);
var state_28985__$1 = (function (){var statearr_29004 = state_28985;
(statearr_29004[(19)] = inst_28898__$1);

return statearr_29004;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28985__$1,(22),inst_28899);
} else {
if((state_val_28986 === (31))){
var inst_28983 = (state_28985[(2)]);
var state_28985__$1 = state_28985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28985__$1,inst_28983);
} else {
if((state_val_28986 === (32))){
var inst_28938 = (state_28985[(16)]);
var inst_28943 = inst_28938.cljs$lang$protocol_mask$partition0$;
var inst_28944 = (inst_28943 & (64));
var inst_28945 = inst_28938.cljs$core$ISeq$;
var inst_28946 = (cljs.core.PROTOCOL_SENTINEL === inst_28945);
var inst_28947 = ((inst_28944) || (inst_28946));
var state_28985__$1 = state_28985;
if(cljs.core.truth_(inst_28947)){
var statearr_29005_29085 = state_28985__$1;
(statearr_29005_29085[(1)] = (35));

} else {
var statearr_29006_29086 = state_28985__$1;
(statearr_29006_29086[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (40))){
var inst_28960 = (state_28985[(20)]);
var inst_28959 = (state_28985[(2)]);
var inst_28960__$1 = cljs.core.get.call(null,inst_28959,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28961 = cljs.core.get.call(null,inst_28959,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28962 = cljs.core.not_empty.call(null,inst_28960__$1);
var state_28985__$1 = (function (){var statearr_29007 = state_28985;
(statearr_29007[(20)] = inst_28960__$1);

(statearr_29007[(21)] = inst_28961);

return statearr_29007;
})();
if(cljs.core.truth_(inst_28962)){
var statearr_29008_29087 = state_28985__$1;
(statearr_29008_29087[(1)] = (41));

} else {
var statearr_29009_29088 = state_28985__$1;
(statearr_29009_29088[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (33))){
var state_28985__$1 = state_28985;
var statearr_29010_29089 = state_28985__$1;
(statearr_29010_29089[(2)] = false);

(statearr_29010_29089[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (13))){
var inst_28858 = (state_28985[(22)]);
var inst_28862 = cljs.core.chunk_first.call(null,inst_28858);
var inst_28863 = cljs.core.chunk_rest.call(null,inst_28858);
var inst_28864 = cljs.core.count.call(null,inst_28862);
var inst_28845 = inst_28863;
var inst_28846 = inst_28862;
var inst_28847 = inst_28864;
var inst_28848 = (0);
var state_28985__$1 = (function (){var statearr_29011 = state_28985;
(statearr_29011[(7)] = inst_28848);

(statearr_29011[(8)] = inst_28845);

(statearr_29011[(9)] = inst_28847);

(statearr_29011[(10)] = inst_28846);

return statearr_29011;
})();
var statearr_29012_29090 = state_28985__$1;
(statearr_29012_29090[(2)] = null);

(statearr_29012_29090[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (22))){
var inst_28898 = (state_28985[(19)]);
var inst_28902 = (state_28985[(23)]);
var inst_28901 = (state_28985[(24)]);
var inst_28906 = (state_28985[(25)]);
var inst_28901__$1 = (state_28985[(2)]);
var inst_28902__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28901__$1);
var inst_28903 = (function (){var all_files = inst_28898;
var res_SINGLEQUOTE_ = inst_28901__$1;
var res = inst_28902__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28898,inst_28902,inst_28901,inst_28906,inst_28901__$1,inst_28902__$1,state_val_28986,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28827_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28827_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28898,inst_28902,inst_28901,inst_28906,inst_28901__$1,inst_28902__$1,state_val_28986,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28904 = cljs.core.filter.call(null,inst_28903,inst_28901__$1);
var inst_28905 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28906__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28905);
var inst_28907 = cljs.core.not_empty.call(null,inst_28906__$1);
var state_28985__$1 = (function (){var statearr_29013 = state_28985;
(statearr_29013[(26)] = inst_28904);

(statearr_29013[(23)] = inst_28902__$1);

(statearr_29013[(24)] = inst_28901__$1);

(statearr_29013[(25)] = inst_28906__$1);

return statearr_29013;
})();
if(cljs.core.truth_(inst_28907)){
var statearr_29014_29091 = state_28985__$1;
(statearr_29014_29091[(1)] = (23));

} else {
var statearr_29015_29092 = state_28985__$1;
(statearr_29015_29092[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (36))){
var state_28985__$1 = state_28985;
var statearr_29016_29093 = state_28985__$1;
(statearr_29016_29093[(2)] = false);

(statearr_29016_29093[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (41))){
var inst_28960 = (state_28985[(20)]);
var inst_28964 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28965 = cljs.core.map.call(null,inst_28964,inst_28960);
var inst_28966 = cljs.core.pr_str.call(null,inst_28965);
var inst_28967 = ["figwheel-no-load meta-data: ",inst_28966].join('');
var inst_28968 = figwheel.client.utils.log.call(null,inst_28967);
var state_28985__$1 = state_28985;
var statearr_29017_29094 = state_28985__$1;
(statearr_29017_29094[(2)] = inst_28968);

(statearr_29017_29094[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (43))){
var inst_28961 = (state_28985[(21)]);
var inst_28971 = (state_28985[(2)]);
var inst_28972 = cljs.core.not_empty.call(null,inst_28961);
var state_28985__$1 = (function (){var statearr_29018 = state_28985;
(statearr_29018[(27)] = inst_28971);

return statearr_29018;
})();
if(cljs.core.truth_(inst_28972)){
var statearr_29019_29095 = state_28985__$1;
(statearr_29019_29095[(1)] = (44));

} else {
var statearr_29020_29096 = state_28985__$1;
(statearr_29020_29096[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (29))){
var inst_28938 = (state_28985[(16)]);
var inst_28904 = (state_28985[(26)]);
var inst_28898 = (state_28985[(19)]);
var inst_28902 = (state_28985[(23)]);
var inst_28901 = (state_28985[(24)]);
var inst_28906 = (state_28985[(25)]);
var inst_28934 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28937 = (function (){var all_files = inst_28898;
var res_SINGLEQUOTE_ = inst_28901;
var res = inst_28902;
var files_not_loaded = inst_28904;
var dependencies_that_loaded = inst_28906;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28938,inst_28904,inst_28898,inst_28902,inst_28901,inst_28906,inst_28934,state_val_28986,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28936){
var map__29021 = p__28936;
var map__29021__$1 = (((((!((map__29021 == null))))?(((((map__29021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29021):map__29021);
var namespace = cljs.core.get.call(null,map__29021__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28938,inst_28904,inst_28898,inst_28902,inst_28901,inst_28906,inst_28934,state_val_28986,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28938__$1 = cljs.core.group_by.call(null,inst_28937,inst_28904);
var inst_28940 = (inst_28938__$1 == null);
var inst_28941 = cljs.core.not.call(null,inst_28940);
var state_28985__$1 = (function (){var statearr_29023 = state_28985;
(statearr_29023[(28)] = inst_28934);

(statearr_29023[(16)] = inst_28938__$1);

return statearr_29023;
})();
if(inst_28941){
var statearr_29024_29097 = state_28985__$1;
(statearr_29024_29097[(1)] = (32));

} else {
var statearr_29025_29098 = state_28985__$1;
(statearr_29025_29098[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (44))){
var inst_28961 = (state_28985[(21)]);
var inst_28974 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28961);
var inst_28975 = cljs.core.pr_str.call(null,inst_28974);
var inst_28976 = ["not required: ",inst_28975].join('');
var inst_28977 = figwheel.client.utils.log.call(null,inst_28976);
var state_28985__$1 = state_28985;
var statearr_29026_29099 = state_28985__$1;
(statearr_29026_29099[(2)] = inst_28977);

(statearr_29026_29099[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (6))){
var inst_28879 = (state_28985[(2)]);
var state_28985__$1 = state_28985;
var statearr_29027_29100 = state_28985__$1;
(statearr_29027_29100[(2)] = inst_28879);

(statearr_29027_29100[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (28))){
var inst_28904 = (state_28985[(26)]);
var inst_28931 = (state_28985[(2)]);
var inst_28932 = cljs.core.not_empty.call(null,inst_28904);
var state_28985__$1 = (function (){var statearr_29028 = state_28985;
(statearr_29028[(29)] = inst_28931);

return statearr_29028;
})();
if(cljs.core.truth_(inst_28932)){
var statearr_29029_29101 = state_28985__$1;
(statearr_29029_29101[(1)] = (29));

} else {
var statearr_29030_29102 = state_28985__$1;
(statearr_29030_29102[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (25))){
var inst_28902 = (state_28985[(23)]);
var inst_28918 = (state_28985[(2)]);
var inst_28919 = cljs.core.not_empty.call(null,inst_28902);
var state_28985__$1 = (function (){var statearr_29031 = state_28985;
(statearr_29031[(30)] = inst_28918);

return statearr_29031;
})();
if(cljs.core.truth_(inst_28919)){
var statearr_29032_29103 = state_28985__$1;
(statearr_29032_29103[(1)] = (26));

} else {
var statearr_29033_29104 = state_28985__$1;
(statearr_29033_29104[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (34))){
var inst_28954 = (state_28985[(2)]);
var state_28985__$1 = state_28985;
if(cljs.core.truth_(inst_28954)){
var statearr_29034_29105 = state_28985__$1;
(statearr_29034_29105[(1)] = (38));

} else {
var statearr_29035_29106 = state_28985__$1;
(statearr_29035_29106[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (17))){
var state_28985__$1 = state_28985;
var statearr_29036_29107 = state_28985__$1;
(statearr_29036_29107[(2)] = recompile_dependents);

(statearr_29036_29107[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (3))){
var state_28985__$1 = state_28985;
var statearr_29037_29108 = state_28985__$1;
(statearr_29037_29108[(2)] = null);

(statearr_29037_29108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (12))){
var inst_28875 = (state_28985[(2)]);
var state_28985__$1 = state_28985;
var statearr_29038_29109 = state_28985__$1;
(statearr_29038_29109[(2)] = inst_28875);

(statearr_29038_29109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (2))){
var inst_28837 = (state_28985[(13)]);
var inst_28844 = cljs.core.seq.call(null,inst_28837);
var inst_28845 = inst_28844;
var inst_28846 = null;
var inst_28847 = (0);
var inst_28848 = (0);
var state_28985__$1 = (function (){var statearr_29039 = state_28985;
(statearr_29039[(7)] = inst_28848);

(statearr_29039[(8)] = inst_28845);

(statearr_29039[(9)] = inst_28847);

(statearr_29039[(10)] = inst_28846);

return statearr_29039;
})();
var statearr_29040_29110 = state_28985__$1;
(statearr_29040_29110[(2)] = null);

(statearr_29040_29110[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (23))){
var inst_28904 = (state_28985[(26)]);
var inst_28898 = (state_28985[(19)]);
var inst_28902 = (state_28985[(23)]);
var inst_28901 = (state_28985[(24)]);
var inst_28906 = (state_28985[(25)]);
var inst_28909 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28911 = (function (){var all_files = inst_28898;
var res_SINGLEQUOTE_ = inst_28901;
var res = inst_28902;
var files_not_loaded = inst_28904;
var dependencies_that_loaded = inst_28906;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28904,inst_28898,inst_28902,inst_28901,inst_28906,inst_28909,state_val_28986,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28910){
var map__29041 = p__28910;
var map__29041__$1 = (((((!((map__29041 == null))))?(((((map__29041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29041):map__29041);
var request_url = cljs.core.get.call(null,map__29041__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28904,inst_28898,inst_28902,inst_28901,inst_28906,inst_28909,state_val_28986,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28912 = cljs.core.reverse.call(null,inst_28906);
var inst_28913 = cljs.core.map.call(null,inst_28911,inst_28912);
var inst_28914 = cljs.core.pr_str.call(null,inst_28913);
var inst_28915 = figwheel.client.utils.log.call(null,inst_28914);
var state_28985__$1 = (function (){var statearr_29043 = state_28985;
(statearr_29043[(31)] = inst_28909);

return statearr_29043;
})();
var statearr_29044_29111 = state_28985__$1;
(statearr_29044_29111[(2)] = inst_28915);

(statearr_29044_29111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (35))){
var state_28985__$1 = state_28985;
var statearr_29045_29112 = state_28985__$1;
(statearr_29045_29112[(2)] = true);

(statearr_29045_29112[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (19))){
var inst_28888 = (state_28985[(12)]);
var inst_28894 = figwheel.client.file_reloading.expand_files.call(null,inst_28888);
var state_28985__$1 = state_28985;
var statearr_29046_29113 = state_28985__$1;
(statearr_29046_29113[(2)] = inst_28894);

(statearr_29046_29113[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (11))){
var state_28985__$1 = state_28985;
var statearr_29047_29114 = state_28985__$1;
(statearr_29047_29114[(2)] = null);

(statearr_29047_29114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (9))){
var inst_28877 = (state_28985[(2)]);
var state_28985__$1 = state_28985;
var statearr_29048_29115 = state_28985__$1;
(statearr_29048_29115[(2)] = inst_28877);

(statearr_29048_29115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (5))){
var inst_28848 = (state_28985[(7)]);
var inst_28847 = (state_28985[(9)]);
var inst_28850 = (inst_28848 < inst_28847);
var inst_28851 = inst_28850;
var state_28985__$1 = state_28985;
if(cljs.core.truth_(inst_28851)){
var statearr_29049_29116 = state_28985__$1;
(statearr_29049_29116[(1)] = (7));

} else {
var statearr_29050_29117 = state_28985__$1;
(statearr_29050_29117[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (14))){
var inst_28858 = (state_28985[(22)]);
var inst_28867 = cljs.core.first.call(null,inst_28858);
var inst_28868 = figwheel.client.file_reloading.eval_body.call(null,inst_28867,opts);
var inst_28869 = cljs.core.next.call(null,inst_28858);
var inst_28845 = inst_28869;
var inst_28846 = null;
var inst_28847 = (0);
var inst_28848 = (0);
var state_28985__$1 = (function (){var statearr_29051 = state_28985;
(statearr_29051[(7)] = inst_28848);

(statearr_29051[(8)] = inst_28845);

(statearr_29051[(9)] = inst_28847);

(statearr_29051[(10)] = inst_28846);

(statearr_29051[(32)] = inst_28868);

return statearr_29051;
})();
var statearr_29052_29118 = state_28985__$1;
(statearr_29052_29118[(2)] = null);

(statearr_29052_29118[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (45))){
var state_28985__$1 = state_28985;
var statearr_29053_29119 = state_28985__$1;
(statearr_29053_29119[(2)] = null);

(statearr_29053_29119[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (26))){
var inst_28904 = (state_28985[(26)]);
var inst_28898 = (state_28985[(19)]);
var inst_28902 = (state_28985[(23)]);
var inst_28901 = (state_28985[(24)]);
var inst_28906 = (state_28985[(25)]);
var inst_28921 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28923 = (function (){var all_files = inst_28898;
var res_SINGLEQUOTE_ = inst_28901;
var res = inst_28902;
var files_not_loaded = inst_28904;
var dependencies_that_loaded = inst_28906;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28904,inst_28898,inst_28902,inst_28901,inst_28906,inst_28921,state_val_28986,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28922){
var map__29054 = p__28922;
var map__29054__$1 = (((((!((map__29054 == null))))?(((((map__29054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29054):map__29054);
var namespace = cljs.core.get.call(null,map__29054__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29054__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28904,inst_28898,inst_28902,inst_28901,inst_28906,inst_28921,state_val_28986,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28924 = cljs.core.map.call(null,inst_28923,inst_28902);
var inst_28925 = cljs.core.pr_str.call(null,inst_28924);
var inst_28926 = figwheel.client.utils.log.call(null,inst_28925);
var inst_28927 = (function (){var all_files = inst_28898;
var res_SINGLEQUOTE_ = inst_28901;
var res = inst_28902;
var files_not_loaded = inst_28904;
var dependencies_that_loaded = inst_28906;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28904,inst_28898,inst_28902,inst_28901,inst_28906,inst_28921,inst_28923,inst_28924,inst_28925,inst_28926,state_val_28986,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28904,inst_28898,inst_28902,inst_28901,inst_28906,inst_28921,inst_28923,inst_28924,inst_28925,inst_28926,state_val_28986,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28928 = setTimeout(inst_28927,(10));
var state_28985__$1 = (function (){var statearr_29056 = state_28985;
(statearr_29056[(33)] = inst_28921);

(statearr_29056[(34)] = inst_28926);

return statearr_29056;
})();
var statearr_29057_29120 = state_28985__$1;
(statearr_29057_29120[(2)] = inst_28928);

(statearr_29057_29120[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (16))){
var state_28985__$1 = state_28985;
var statearr_29058_29121 = state_28985__$1;
(statearr_29058_29121[(2)] = reload_dependents);

(statearr_29058_29121[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (38))){
var inst_28938 = (state_28985[(16)]);
var inst_28956 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28938);
var state_28985__$1 = state_28985;
var statearr_29059_29122 = state_28985__$1;
(statearr_29059_29122[(2)] = inst_28956);

(statearr_29059_29122[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (30))){
var state_28985__$1 = state_28985;
var statearr_29060_29123 = state_28985__$1;
(statearr_29060_29123[(2)] = null);

(statearr_29060_29123[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (10))){
var inst_28858 = (state_28985[(22)]);
var inst_28860 = cljs.core.chunked_seq_QMARK_.call(null,inst_28858);
var state_28985__$1 = state_28985;
if(inst_28860){
var statearr_29061_29124 = state_28985__$1;
(statearr_29061_29124[(1)] = (13));

} else {
var statearr_29062_29125 = state_28985__$1;
(statearr_29062_29125[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (18))){
var inst_28892 = (state_28985[(2)]);
var state_28985__$1 = state_28985;
if(cljs.core.truth_(inst_28892)){
var statearr_29063_29126 = state_28985__$1;
(statearr_29063_29126[(1)] = (19));

} else {
var statearr_29064_29127 = state_28985__$1;
(statearr_29064_29127[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (42))){
var state_28985__$1 = state_28985;
var statearr_29065_29128 = state_28985__$1;
(statearr_29065_29128[(2)] = null);

(statearr_29065_29128[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (37))){
var inst_28951 = (state_28985[(2)]);
var state_28985__$1 = state_28985;
var statearr_29066_29129 = state_28985__$1;
(statearr_29066_29129[(2)] = inst_28951);

(statearr_29066_29129[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28986 === (8))){
var inst_28858 = (state_28985[(22)]);
var inst_28845 = (state_28985[(8)]);
var inst_28858__$1 = cljs.core.seq.call(null,inst_28845);
var state_28985__$1 = (function (){var statearr_29067 = state_28985;
(statearr_29067[(22)] = inst_28858__$1);

return statearr_29067;
})();
if(inst_28858__$1){
var statearr_29068_29130 = state_28985__$1;
(statearr_29068_29130[(1)] = (10));

} else {
var statearr_29069_29131 = state_28985__$1;
(statearr_29069_29131[(1)] = (11));

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
});})(c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22856__auto__,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto____0 = (function (){
var statearr_29070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29070[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto__);

(statearr_29070[(1)] = (1));

return statearr_29070;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto____1 = (function (state_28985){
while(true){
var ret_value__22858__auto__ = (function (){try{while(true){
var result__22859__auto__ = switch__22856__auto__.call(null,state_28985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22859__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22859__auto__;
}
break;
}
}catch (e29071){if((e29071 instanceof Object)){
var ex__22860__auto__ = e29071;
var statearr_29072_29132 = state_28985;
(statearr_29072_29132[(5)] = ex__22860__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22858__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29133 = state_28985;
state_28985 = G__29133;
continue;
} else {
return ret_value__22858__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto__ = function(state_28985){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto____1.call(this,state_28985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22857__auto__;
})()
;})(switch__22856__auto__,c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22953__auto__ = (function (){var statearr_29073 = f__22952__auto__.call(null);
(statearr_29073[(6)] = c__22951__auto__);

return statearr_29073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22953__auto__);
});})(c__22951__auto__,map__28830,map__28830__$1,opts,before_jsload,on_jsload,reload_dependents,map__28831,map__28831__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22951__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29136,link){
var map__29137 = p__29136;
var map__29137__$1 = (((((!((map__29137 == null))))?(((((map__29137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29137):map__29137);
var file = cljs.core.get.call(null,map__29137__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__29137,map__29137__$1,file){
return (function (p1__29134_SHARP_,p2__29135_SHARP_){
if(cljs.core._EQ_.call(null,p1__29134_SHARP_,p2__29135_SHARP_)){
return p1__29134_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__29137,map__29137__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29140){
var map__29141 = p__29140;
var map__29141__$1 = (((((!((map__29141 == null))))?(((((map__29141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29141):map__29141);
var match_length = cljs.core.get.call(null,map__29141__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29141__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29139_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29139_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29143_SHARP_,p2__29144_SHARP_){
return cljs.core.assoc.call(null,p1__29143_SHARP_,cljs.core.get.call(null,p2__29144_SHARP_,key),p2__29144_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29145 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29145);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29145);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29146,p__29147){
var map__29148 = p__29146;
var map__29148__$1 = (((((!((map__29148 == null))))?(((((map__29148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29148):map__29148);
var on_cssload = cljs.core.get.call(null,map__29148__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29149 = p__29147;
var map__29149__$1 = (((((!((map__29149 == null))))?(((((map__29149.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29149.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29149):map__29149);
var files_msg = map__29149__$1;
var files = cljs.core.get.call(null,map__29149__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1582812681215
