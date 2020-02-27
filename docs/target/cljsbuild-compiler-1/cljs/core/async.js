// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__23704 = arguments.length;
switch (G__23704) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23705 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23705 = (function (f,blockable,meta23706){
this.f = f;
this.blockable = blockable;
this.meta23706 = meta23706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23707,meta23706__$1){
var self__ = this;
var _23707__$1 = this;
return (new cljs.core.async.t_cljs$core$async23705(self__.f,self__.blockable,meta23706__$1));
});

cljs.core.async.t_cljs$core$async23705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23707){
var self__ = this;
var _23707__$1 = this;
return self__.meta23706;
});

cljs.core.async.t_cljs$core$async23705.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23705.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async23705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async23705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta23706","meta23706",462669072,null)], null);
});

cljs.core.async.t_cljs$core$async23705.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23705";

cljs.core.async.t_cljs$core$async23705.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23705");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23705.
 */
cljs.core.async.__GT_t_cljs$core$async23705 = (function cljs$core$async$__GT_t_cljs$core$async23705(f__$1,blockable__$1,meta23706){
return (new cljs.core.async.t_cljs$core$async23705(f__$1,blockable__$1,meta23706));
});

}

return (new cljs.core.async.t_cljs$core$async23705(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__23711 = arguments.length;
switch (G__23711) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__23714 = arguments.length;
switch (G__23714) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__23717 = arguments.length;
switch (G__23717) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_23719 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_23719);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_23719,ret){
return (function (){
return fn1.call(null,val_23719);
});})(val_23719,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__23721 = arguments.length;
switch (G__23721) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___23723 = n;
var x_23724 = (0);
while(true){
if((x_23724 < n__4607__auto___23723)){
(a[x_23724] = x_23724);

var G__23725 = (x_23724 + (1));
x_23724 = G__23725;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23726 = (function (flag,meta23727){
this.flag = flag;
this.meta23727 = meta23727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_23728,meta23727__$1){
var self__ = this;
var _23728__$1 = this;
return (new cljs.core.async.t_cljs$core$async23726(self__.flag,meta23727__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async23726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_23728){
var self__ = this;
var _23728__$1 = this;
return self__.meta23727;
});})(flag))
;

cljs.core.async.t_cljs$core$async23726.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23726.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async23726.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23726.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async23726.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta23727","meta23727",-20857166,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async23726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23726";

cljs.core.async.t_cljs$core$async23726.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23726");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23726.
 */
cljs.core.async.__GT_t_cljs$core$async23726 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async23726(flag__$1,meta23727){
return (new cljs.core.async.t_cljs$core$async23726(flag__$1,meta23727));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async23726(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23729 = (function (flag,cb,meta23730){
this.flag = flag;
this.cb = cb;
this.meta23730 = meta23730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23731,meta23730__$1){
var self__ = this;
var _23731__$1 = this;
return (new cljs.core.async.t_cljs$core$async23729(self__.flag,self__.cb,meta23730__$1));
});

cljs.core.async.t_cljs$core$async23729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23731){
var self__ = this;
var _23731__$1 = this;
return self__.meta23730;
});

cljs.core.async.t_cljs$core$async23729.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23729.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async23729.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async23729.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async23729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta23730","meta23730",3055233,null)], null);
});

cljs.core.async.t_cljs$core$async23729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23729";

cljs.core.async.t_cljs$core$async23729.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23729");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23729.
 */
cljs.core.async.__GT_t_cljs$core$async23729 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async23729(flag__$1,cb__$1,meta23730){
return (new cljs.core.async.t_cljs$core$async23729(flag__$1,cb__$1,meta23730));
});

}

return (new cljs.core.async.t_cljs$core$async23729(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23732_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23732_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__23733_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23733_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__23734 = (i + (1));
i = G__23734;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23740 = arguments.length;
var i__4731__auto___23741 = (0);
while(true){
if((i__4731__auto___23741 < len__4730__auto___23740)){
args__4736__auto__.push((arguments[i__4731__auto___23741]));

var G__23742 = (i__4731__auto___23741 + (1));
i__4731__auto___23741 = G__23742;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__23737){
var map__23738 = p__23737;
var map__23738__$1 = (((((!((map__23738 == null))))?(((((map__23738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23738):map__23738);
var opts = map__23738__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq23735){
var G__23736 = cljs.core.first.call(null,seq23735);
var seq23735__$1 = cljs.core.next.call(null,seq23735);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23736,seq23735__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__23744 = arguments.length;
switch (G__23744) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__23644__auto___23790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto___23790){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto___23790){
return (function (state_23768){
var state_val_23769 = (state_23768[(1)]);
if((state_val_23769 === (7))){
var inst_23764 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23770_23791 = state_23768__$1;
(statearr_23770_23791[(2)] = inst_23764);

(statearr_23770_23791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (1))){
var state_23768__$1 = state_23768;
var statearr_23771_23792 = state_23768__$1;
(statearr_23771_23792[(2)] = null);

(statearr_23771_23792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (4))){
var inst_23747 = (state_23768[(7)]);
var inst_23747__$1 = (state_23768[(2)]);
var inst_23748 = (inst_23747__$1 == null);
var state_23768__$1 = (function (){var statearr_23772 = state_23768;
(statearr_23772[(7)] = inst_23747__$1);

return statearr_23772;
})();
if(cljs.core.truth_(inst_23748)){
var statearr_23773_23793 = state_23768__$1;
(statearr_23773_23793[(1)] = (5));

} else {
var statearr_23774_23794 = state_23768__$1;
(statearr_23774_23794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (13))){
var state_23768__$1 = state_23768;
var statearr_23775_23795 = state_23768__$1;
(statearr_23775_23795[(2)] = null);

(statearr_23775_23795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (6))){
var inst_23747 = (state_23768[(7)]);
var state_23768__$1 = state_23768;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23768__$1,(11),to,inst_23747);
} else {
if((state_val_23769 === (3))){
var inst_23766 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23768__$1,inst_23766);
} else {
if((state_val_23769 === (12))){
var state_23768__$1 = state_23768;
var statearr_23776_23796 = state_23768__$1;
(statearr_23776_23796[(2)] = null);

(statearr_23776_23796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (2))){
var state_23768__$1 = state_23768;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23768__$1,(4),from);
} else {
if((state_val_23769 === (11))){
var inst_23757 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
if(cljs.core.truth_(inst_23757)){
var statearr_23777_23797 = state_23768__$1;
(statearr_23777_23797[(1)] = (12));

} else {
var statearr_23778_23798 = state_23768__$1;
(statearr_23778_23798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (9))){
var state_23768__$1 = state_23768;
var statearr_23779_23799 = state_23768__$1;
(statearr_23779_23799[(2)] = null);

(statearr_23779_23799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (5))){
var state_23768__$1 = state_23768;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23780_23800 = state_23768__$1;
(statearr_23780_23800[(1)] = (8));

} else {
var statearr_23781_23801 = state_23768__$1;
(statearr_23781_23801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (14))){
var inst_23762 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23782_23802 = state_23768__$1;
(statearr_23782_23802[(2)] = inst_23762);

(statearr_23782_23802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (10))){
var inst_23754 = (state_23768[(2)]);
var state_23768__$1 = state_23768;
var statearr_23783_23803 = state_23768__$1;
(statearr_23783_23803[(2)] = inst_23754);

(statearr_23783_23803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23769 === (8))){
var inst_23751 = cljs.core.async.close_BANG_.call(null,to);
var state_23768__$1 = state_23768;
var statearr_23784_23804 = state_23768__$1;
(statearr_23784_23804[(2)] = inst_23751);

(statearr_23784_23804[(1)] = (10));


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
});})(c__23644__auto___23790))
;
return ((function (switch__23549__auto__,c__23644__auto___23790){
return (function() {
var cljs$core$async$state_machine__23550__auto__ = null;
var cljs$core$async$state_machine__23550__auto____0 = (function (){
var statearr_23785 = [null,null,null,null,null,null,null,null];
(statearr_23785[(0)] = cljs$core$async$state_machine__23550__auto__);

(statearr_23785[(1)] = (1));

return statearr_23785;
});
var cljs$core$async$state_machine__23550__auto____1 = (function (state_23768){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_23768);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e23786){if((e23786 instanceof Object)){
var ex__23553__auto__ = e23786;
var statearr_23787_23805 = state_23768;
(statearr_23787_23805[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23768);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23806 = state_23768;
state_23768 = G__23806;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$state_machine__23550__auto__ = function(state_23768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23550__auto____1.call(this,state_23768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23550__auto____0;
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23550__auto____1;
return cljs$core$async$state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto___23790))
})();
var state__23646__auto__ = (function (){var statearr_23788 = f__23645__auto__.call(null);
(statearr_23788[(6)] = c__23644__auto___23790);

return statearr_23788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto___23790))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__23807){
var vec__23808 = p__23807;
var v = cljs.core.nth.call(null,vec__23808,(0),null);
var p = cljs.core.nth.call(null,vec__23808,(1),null);
var job = vec__23808;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23644__auto___23979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto___23979,res,vec__23808,v,p,job,jobs,results){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto___23979,res,vec__23808,v,p,job,jobs,results){
return (function (state_23815){
var state_val_23816 = (state_23815[(1)]);
if((state_val_23816 === (1))){
var state_23815__$1 = state_23815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23815__$1,(2),res,v);
} else {
if((state_val_23816 === (2))){
var inst_23812 = (state_23815[(2)]);
var inst_23813 = cljs.core.async.close_BANG_.call(null,res);
var state_23815__$1 = (function (){var statearr_23817 = state_23815;
(statearr_23817[(7)] = inst_23812);

return statearr_23817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23815__$1,inst_23813);
} else {
return null;
}
}
});})(c__23644__auto___23979,res,vec__23808,v,p,job,jobs,results))
;
return ((function (switch__23549__auto__,c__23644__auto___23979,res,vec__23808,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____0 = (function (){
var statearr_23818 = [null,null,null,null,null,null,null,null];
(statearr_23818[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__);

(statearr_23818[(1)] = (1));

return statearr_23818;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____1 = (function (state_23815){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_23815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e23819){if((e23819 instanceof Object)){
var ex__23553__auto__ = e23819;
var statearr_23820_23980 = state_23815;
(statearr_23820_23980[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23981 = state_23815;
state_23815 = G__23981;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__ = function(state_23815){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____1.call(this,state_23815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto___23979,res,vec__23808,v,p,job,jobs,results))
})();
var state__23646__auto__ = (function (){var statearr_23821 = f__23645__auto__.call(null);
(statearr_23821[(6)] = c__23644__auto___23979);

return statearr_23821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto___23979,res,vec__23808,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23822){
var vec__23823 = p__23822;
var v = cljs.core.nth.call(null,vec__23823,(0),null);
var p = cljs.core.nth.call(null,vec__23823,(1),null);
var job = vec__23823;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___23982 = n;
var __23983 = (0);
while(true){
if((__23983 < n__4607__auto___23982)){
var G__23826_23984 = type;
var G__23826_23985__$1 = (((G__23826_23984 instanceof cljs.core.Keyword))?G__23826_23984.fqn:null);
switch (G__23826_23985__$1) {
case "compute":
var c__23644__auto___23987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23983,c__23644__auto___23987,G__23826_23984,G__23826_23985__$1,n__4607__auto___23982,jobs,results,process,async){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (__23983,c__23644__auto___23987,G__23826_23984,G__23826_23985__$1,n__4607__auto___23982,jobs,results,process,async){
return (function (state_23839){
var state_val_23840 = (state_23839[(1)]);
if((state_val_23840 === (1))){
var state_23839__$1 = state_23839;
var statearr_23841_23988 = state_23839__$1;
(statearr_23841_23988[(2)] = null);

(statearr_23841_23988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (2))){
var state_23839__$1 = state_23839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23839__$1,(4),jobs);
} else {
if((state_val_23840 === (3))){
var inst_23837 = (state_23839[(2)]);
var state_23839__$1 = state_23839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23839__$1,inst_23837);
} else {
if((state_val_23840 === (4))){
var inst_23829 = (state_23839[(2)]);
var inst_23830 = process.call(null,inst_23829);
var state_23839__$1 = state_23839;
if(cljs.core.truth_(inst_23830)){
var statearr_23842_23989 = state_23839__$1;
(statearr_23842_23989[(1)] = (5));

} else {
var statearr_23843_23990 = state_23839__$1;
(statearr_23843_23990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (5))){
var state_23839__$1 = state_23839;
var statearr_23844_23991 = state_23839__$1;
(statearr_23844_23991[(2)] = null);

(statearr_23844_23991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (6))){
var state_23839__$1 = state_23839;
var statearr_23845_23992 = state_23839__$1;
(statearr_23845_23992[(2)] = null);

(statearr_23845_23992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23840 === (7))){
var inst_23835 = (state_23839[(2)]);
var state_23839__$1 = state_23839;
var statearr_23846_23993 = state_23839__$1;
(statearr_23846_23993[(2)] = inst_23835);

(statearr_23846_23993[(1)] = (3));


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
});})(__23983,c__23644__auto___23987,G__23826_23984,G__23826_23985__$1,n__4607__auto___23982,jobs,results,process,async))
;
return ((function (__23983,switch__23549__auto__,c__23644__auto___23987,G__23826_23984,G__23826_23985__$1,n__4607__auto___23982,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____0 = (function (){
var statearr_23847 = [null,null,null,null,null,null,null];
(statearr_23847[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__);

(statearr_23847[(1)] = (1));

return statearr_23847;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____1 = (function (state_23839){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_23839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e23848){if((e23848 instanceof Object)){
var ex__23553__auto__ = e23848;
var statearr_23849_23994 = state_23839;
(statearr_23849_23994[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23995 = state_23839;
state_23839 = G__23995;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__ = function(state_23839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____1.call(this,state_23839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__;
})()
;})(__23983,switch__23549__auto__,c__23644__auto___23987,G__23826_23984,G__23826_23985__$1,n__4607__auto___23982,jobs,results,process,async))
})();
var state__23646__auto__ = (function (){var statearr_23850 = f__23645__auto__.call(null);
(statearr_23850[(6)] = c__23644__auto___23987);

return statearr_23850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(__23983,c__23644__auto___23987,G__23826_23984,G__23826_23985__$1,n__4607__auto___23982,jobs,results,process,async))
);


break;
case "async":
var c__23644__auto___23996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23983,c__23644__auto___23996,G__23826_23984,G__23826_23985__$1,n__4607__auto___23982,jobs,results,process,async){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (__23983,c__23644__auto___23996,G__23826_23984,G__23826_23985__$1,n__4607__auto___23982,jobs,results,process,async){
return (function (state_23863){
var state_val_23864 = (state_23863[(1)]);
if((state_val_23864 === (1))){
var state_23863__$1 = state_23863;
var statearr_23865_23997 = state_23863__$1;
(statearr_23865_23997[(2)] = null);

(statearr_23865_23997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23864 === (2))){
var state_23863__$1 = state_23863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23863__$1,(4),jobs);
} else {
if((state_val_23864 === (3))){
var inst_23861 = (state_23863[(2)]);
var state_23863__$1 = state_23863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23863__$1,inst_23861);
} else {
if((state_val_23864 === (4))){
var inst_23853 = (state_23863[(2)]);
var inst_23854 = async.call(null,inst_23853);
var state_23863__$1 = state_23863;
if(cljs.core.truth_(inst_23854)){
var statearr_23866_23998 = state_23863__$1;
(statearr_23866_23998[(1)] = (5));

} else {
var statearr_23867_23999 = state_23863__$1;
(statearr_23867_23999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23864 === (5))){
var state_23863__$1 = state_23863;
var statearr_23868_24000 = state_23863__$1;
(statearr_23868_24000[(2)] = null);

(statearr_23868_24000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23864 === (6))){
var state_23863__$1 = state_23863;
var statearr_23869_24001 = state_23863__$1;
(statearr_23869_24001[(2)] = null);

(statearr_23869_24001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23864 === (7))){
var inst_23859 = (state_23863[(2)]);
var state_23863__$1 = state_23863;
var statearr_23870_24002 = state_23863__$1;
(statearr_23870_24002[(2)] = inst_23859);

(statearr_23870_24002[(1)] = (3));


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
});})(__23983,c__23644__auto___23996,G__23826_23984,G__23826_23985__$1,n__4607__auto___23982,jobs,results,process,async))
;
return ((function (__23983,switch__23549__auto__,c__23644__auto___23996,G__23826_23984,G__23826_23985__$1,n__4607__auto___23982,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____0 = (function (){
var statearr_23871 = [null,null,null,null,null,null,null];
(statearr_23871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__);

(statearr_23871[(1)] = (1));

return statearr_23871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____1 = (function (state_23863){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_23863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e23872){if((e23872 instanceof Object)){
var ex__23553__auto__ = e23872;
var statearr_23873_24003 = state_23863;
(statearr_23873_24003[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23872;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24004 = state_23863;
state_23863 = G__24004;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__ = function(state_23863){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____1.call(this,state_23863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__;
})()
;})(__23983,switch__23549__auto__,c__23644__auto___23996,G__23826_23984,G__23826_23985__$1,n__4607__auto___23982,jobs,results,process,async))
})();
var state__23646__auto__ = (function (){var statearr_23874 = f__23645__auto__.call(null);
(statearr_23874[(6)] = c__23644__auto___23996);

return statearr_23874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(__23983,c__23644__auto___23996,G__23826_23984,G__23826_23985__$1,n__4607__auto___23982,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23826_23985__$1)].join('')));

}

var G__24005 = (__23983 + (1));
__23983 = G__24005;
continue;
} else {
}
break;
}

var c__23644__auto___24006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto___24006,jobs,results,process,async){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto___24006,jobs,results,process,async){
return (function (state_23896){
var state_val_23897 = (state_23896[(1)]);
if((state_val_23897 === (7))){
var inst_23892 = (state_23896[(2)]);
var state_23896__$1 = state_23896;
var statearr_23898_24007 = state_23896__$1;
(statearr_23898_24007[(2)] = inst_23892);

(statearr_23898_24007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (1))){
var state_23896__$1 = state_23896;
var statearr_23899_24008 = state_23896__$1;
(statearr_23899_24008[(2)] = null);

(statearr_23899_24008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (4))){
var inst_23877 = (state_23896[(7)]);
var inst_23877__$1 = (state_23896[(2)]);
var inst_23878 = (inst_23877__$1 == null);
var state_23896__$1 = (function (){var statearr_23900 = state_23896;
(statearr_23900[(7)] = inst_23877__$1);

return statearr_23900;
})();
if(cljs.core.truth_(inst_23878)){
var statearr_23901_24009 = state_23896__$1;
(statearr_23901_24009[(1)] = (5));

} else {
var statearr_23902_24010 = state_23896__$1;
(statearr_23902_24010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (6))){
var inst_23877 = (state_23896[(7)]);
var inst_23882 = (state_23896[(8)]);
var inst_23882__$1 = cljs.core.async.chan.call(null,(1));
var inst_23883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23884 = [inst_23877,inst_23882__$1];
var inst_23885 = (new cljs.core.PersistentVector(null,2,(5),inst_23883,inst_23884,null));
var state_23896__$1 = (function (){var statearr_23903 = state_23896;
(statearr_23903[(8)] = inst_23882__$1);

return statearr_23903;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23896__$1,(8),jobs,inst_23885);
} else {
if((state_val_23897 === (3))){
var inst_23894 = (state_23896[(2)]);
var state_23896__$1 = state_23896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23896__$1,inst_23894);
} else {
if((state_val_23897 === (2))){
var state_23896__$1 = state_23896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23896__$1,(4),from);
} else {
if((state_val_23897 === (9))){
var inst_23889 = (state_23896[(2)]);
var state_23896__$1 = (function (){var statearr_23904 = state_23896;
(statearr_23904[(9)] = inst_23889);

return statearr_23904;
})();
var statearr_23905_24011 = state_23896__$1;
(statearr_23905_24011[(2)] = null);

(statearr_23905_24011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (5))){
var inst_23880 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23896__$1 = state_23896;
var statearr_23906_24012 = state_23896__$1;
(statearr_23906_24012[(2)] = inst_23880);

(statearr_23906_24012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23897 === (8))){
var inst_23882 = (state_23896[(8)]);
var inst_23887 = (state_23896[(2)]);
var state_23896__$1 = (function (){var statearr_23907 = state_23896;
(statearr_23907[(10)] = inst_23887);

return statearr_23907;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23896__$1,(9),results,inst_23882);
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
});})(c__23644__auto___24006,jobs,results,process,async))
;
return ((function (switch__23549__auto__,c__23644__auto___24006,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____0 = (function (){
var statearr_23908 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__);

(statearr_23908[(1)] = (1));

return statearr_23908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____1 = (function (state_23896){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_23896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e23909){if((e23909 instanceof Object)){
var ex__23553__auto__ = e23909;
var statearr_23910_24013 = state_23896;
(statearr_23910_24013[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24014 = state_23896;
state_23896 = G__24014;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__ = function(state_23896){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____1.call(this,state_23896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto___24006,jobs,results,process,async))
})();
var state__23646__auto__ = (function (){var statearr_23911 = f__23645__auto__.call(null);
(statearr_23911[(6)] = c__23644__auto___24006);

return statearr_23911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto___24006,jobs,results,process,async))
);


var c__23644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto__,jobs,results,process,async){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto__,jobs,results,process,async){
return (function (state_23949){
var state_val_23950 = (state_23949[(1)]);
if((state_val_23950 === (7))){
var inst_23945 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
var statearr_23951_24015 = state_23949__$1;
(statearr_23951_24015[(2)] = inst_23945);

(statearr_23951_24015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (20))){
var state_23949__$1 = state_23949;
var statearr_23952_24016 = state_23949__$1;
(statearr_23952_24016[(2)] = null);

(statearr_23952_24016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (1))){
var state_23949__$1 = state_23949;
var statearr_23953_24017 = state_23949__$1;
(statearr_23953_24017[(2)] = null);

(statearr_23953_24017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (4))){
var inst_23914 = (state_23949[(7)]);
var inst_23914__$1 = (state_23949[(2)]);
var inst_23915 = (inst_23914__$1 == null);
var state_23949__$1 = (function (){var statearr_23954 = state_23949;
(statearr_23954[(7)] = inst_23914__$1);

return statearr_23954;
})();
if(cljs.core.truth_(inst_23915)){
var statearr_23955_24018 = state_23949__$1;
(statearr_23955_24018[(1)] = (5));

} else {
var statearr_23956_24019 = state_23949__$1;
(statearr_23956_24019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (15))){
var inst_23927 = (state_23949[(8)]);
var state_23949__$1 = state_23949;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23949__$1,(18),to,inst_23927);
} else {
if((state_val_23950 === (21))){
var inst_23940 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
var statearr_23957_24020 = state_23949__$1;
(statearr_23957_24020[(2)] = inst_23940);

(statearr_23957_24020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (13))){
var inst_23942 = (state_23949[(2)]);
var state_23949__$1 = (function (){var statearr_23958 = state_23949;
(statearr_23958[(9)] = inst_23942);

return statearr_23958;
})();
var statearr_23959_24021 = state_23949__$1;
(statearr_23959_24021[(2)] = null);

(statearr_23959_24021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (6))){
var inst_23914 = (state_23949[(7)]);
var state_23949__$1 = state_23949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23949__$1,(11),inst_23914);
} else {
if((state_val_23950 === (17))){
var inst_23935 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
if(cljs.core.truth_(inst_23935)){
var statearr_23960_24022 = state_23949__$1;
(statearr_23960_24022[(1)] = (19));

} else {
var statearr_23961_24023 = state_23949__$1;
(statearr_23961_24023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (3))){
var inst_23947 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23949__$1,inst_23947);
} else {
if((state_val_23950 === (12))){
var inst_23924 = (state_23949[(10)]);
var state_23949__$1 = state_23949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23949__$1,(14),inst_23924);
} else {
if((state_val_23950 === (2))){
var state_23949__$1 = state_23949;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23949__$1,(4),results);
} else {
if((state_val_23950 === (19))){
var state_23949__$1 = state_23949;
var statearr_23962_24024 = state_23949__$1;
(statearr_23962_24024[(2)] = null);

(statearr_23962_24024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (11))){
var inst_23924 = (state_23949[(2)]);
var state_23949__$1 = (function (){var statearr_23963 = state_23949;
(statearr_23963[(10)] = inst_23924);

return statearr_23963;
})();
var statearr_23964_24025 = state_23949__$1;
(statearr_23964_24025[(2)] = null);

(statearr_23964_24025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (9))){
var state_23949__$1 = state_23949;
var statearr_23965_24026 = state_23949__$1;
(statearr_23965_24026[(2)] = null);

(statearr_23965_24026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (5))){
var state_23949__$1 = state_23949;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23966_24027 = state_23949__$1;
(statearr_23966_24027[(1)] = (8));

} else {
var statearr_23967_24028 = state_23949__$1;
(statearr_23967_24028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (14))){
var inst_23927 = (state_23949[(8)]);
var inst_23929 = (state_23949[(11)]);
var inst_23927__$1 = (state_23949[(2)]);
var inst_23928 = (inst_23927__$1 == null);
var inst_23929__$1 = cljs.core.not.call(null,inst_23928);
var state_23949__$1 = (function (){var statearr_23968 = state_23949;
(statearr_23968[(8)] = inst_23927__$1);

(statearr_23968[(11)] = inst_23929__$1);

return statearr_23968;
})();
if(inst_23929__$1){
var statearr_23969_24029 = state_23949__$1;
(statearr_23969_24029[(1)] = (15));

} else {
var statearr_23970_24030 = state_23949__$1;
(statearr_23970_24030[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (16))){
var inst_23929 = (state_23949[(11)]);
var state_23949__$1 = state_23949;
var statearr_23971_24031 = state_23949__$1;
(statearr_23971_24031[(2)] = inst_23929);

(statearr_23971_24031[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (10))){
var inst_23921 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
var statearr_23972_24032 = state_23949__$1;
(statearr_23972_24032[(2)] = inst_23921);

(statearr_23972_24032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (18))){
var inst_23932 = (state_23949[(2)]);
var state_23949__$1 = state_23949;
var statearr_23973_24033 = state_23949__$1;
(statearr_23973_24033[(2)] = inst_23932);

(statearr_23973_24033[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23950 === (8))){
var inst_23918 = cljs.core.async.close_BANG_.call(null,to);
var state_23949__$1 = state_23949;
var statearr_23974_24034 = state_23949__$1;
(statearr_23974_24034[(2)] = inst_23918);

(statearr_23974_24034[(1)] = (10));


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
});})(c__23644__auto__,jobs,results,process,async))
;
return ((function (switch__23549__auto__,c__23644__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____0 = (function (){
var statearr_23975 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__);

(statearr_23975[(1)] = (1));

return statearr_23975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____1 = (function (state_23949){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_23949);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e23976){if((e23976 instanceof Object)){
var ex__23553__auto__ = e23976;
var statearr_23977_24035 = state_23949;
(statearr_23977_24035[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23949);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24036 = state_23949;
state_23949 = G__24036;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__ = function(state_23949){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____1.call(this,state_23949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23550__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto__,jobs,results,process,async))
})();
var state__23646__auto__ = (function (){var statearr_23978 = f__23645__auto__.call(null);
(statearr_23978[(6)] = c__23644__auto__);

return statearr_23978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto__,jobs,results,process,async))
);

return c__23644__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__24038 = arguments.length;
switch (G__24038) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__24041 = arguments.length;
switch (G__24041) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__24044 = arguments.length;
switch (G__24044) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23644__auto___24093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto___24093,tc,fc){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto___24093,tc,fc){
return (function (state_24070){
var state_val_24071 = (state_24070[(1)]);
if((state_val_24071 === (7))){
var inst_24066 = (state_24070[(2)]);
var state_24070__$1 = state_24070;
var statearr_24072_24094 = state_24070__$1;
(statearr_24072_24094[(2)] = inst_24066);

(statearr_24072_24094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (1))){
var state_24070__$1 = state_24070;
var statearr_24073_24095 = state_24070__$1;
(statearr_24073_24095[(2)] = null);

(statearr_24073_24095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (4))){
var inst_24047 = (state_24070[(7)]);
var inst_24047__$1 = (state_24070[(2)]);
var inst_24048 = (inst_24047__$1 == null);
var state_24070__$1 = (function (){var statearr_24074 = state_24070;
(statearr_24074[(7)] = inst_24047__$1);

return statearr_24074;
})();
if(cljs.core.truth_(inst_24048)){
var statearr_24075_24096 = state_24070__$1;
(statearr_24075_24096[(1)] = (5));

} else {
var statearr_24076_24097 = state_24070__$1;
(statearr_24076_24097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (13))){
var state_24070__$1 = state_24070;
var statearr_24077_24098 = state_24070__$1;
(statearr_24077_24098[(2)] = null);

(statearr_24077_24098[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (6))){
var inst_24047 = (state_24070[(7)]);
var inst_24053 = p.call(null,inst_24047);
var state_24070__$1 = state_24070;
if(cljs.core.truth_(inst_24053)){
var statearr_24078_24099 = state_24070__$1;
(statearr_24078_24099[(1)] = (9));

} else {
var statearr_24079_24100 = state_24070__$1;
(statearr_24079_24100[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (3))){
var inst_24068 = (state_24070[(2)]);
var state_24070__$1 = state_24070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24070__$1,inst_24068);
} else {
if((state_val_24071 === (12))){
var state_24070__$1 = state_24070;
var statearr_24080_24101 = state_24070__$1;
(statearr_24080_24101[(2)] = null);

(statearr_24080_24101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (2))){
var state_24070__$1 = state_24070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24070__$1,(4),ch);
} else {
if((state_val_24071 === (11))){
var inst_24047 = (state_24070[(7)]);
var inst_24057 = (state_24070[(2)]);
var state_24070__$1 = state_24070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24070__$1,(8),inst_24057,inst_24047);
} else {
if((state_val_24071 === (9))){
var state_24070__$1 = state_24070;
var statearr_24081_24102 = state_24070__$1;
(statearr_24081_24102[(2)] = tc);

(statearr_24081_24102[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (5))){
var inst_24050 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24051 = cljs.core.async.close_BANG_.call(null,fc);
var state_24070__$1 = (function (){var statearr_24082 = state_24070;
(statearr_24082[(8)] = inst_24050);

return statearr_24082;
})();
var statearr_24083_24103 = state_24070__$1;
(statearr_24083_24103[(2)] = inst_24051);

(statearr_24083_24103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (14))){
var inst_24064 = (state_24070[(2)]);
var state_24070__$1 = state_24070;
var statearr_24084_24104 = state_24070__$1;
(statearr_24084_24104[(2)] = inst_24064);

(statearr_24084_24104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (10))){
var state_24070__$1 = state_24070;
var statearr_24085_24105 = state_24070__$1;
(statearr_24085_24105[(2)] = fc);

(statearr_24085_24105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24071 === (8))){
var inst_24059 = (state_24070[(2)]);
var state_24070__$1 = state_24070;
if(cljs.core.truth_(inst_24059)){
var statearr_24086_24106 = state_24070__$1;
(statearr_24086_24106[(1)] = (12));

} else {
var statearr_24087_24107 = state_24070__$1;
(statearr_24087_24107[(1)] = (13));

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
});})(c__23644__auto___24093,tc,fc))
;
return ((function (switch__23549__auto__,c__23644__auto___24093,tc,fc){
return (function() {
var cljs$core$async$state_machine__23550__auto__ = null;
var cljs$core$async$state_machine__23550__auto____0 = (function (){
var statearr_24088 = [null,null,null,null,null,null,null,null,null];
(statearr_24088[(0)] = cljs$core$async$state_machine__23550__auto__);

(statearr_24088[(1)] = (1));

return statearr_24088;
});
var cljs$core$async$state_machine__23550__auto____1 = (function (state_24070){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_24070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e24089){if((e24089 instanceof Object)){
var ex__23553__auto__ = e24089;
var statearr_24090_24108 = state_24070;
(statearr_24090_24108[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24109 = state_24070;
state_24070 = G__24109;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$state_machine__23550__auto__ = function(state_24070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23550__auto____1.call(this,state_24070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23550__auto____0;
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23550__auto____1;
return cljs$core$async$state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto___24093,tc,fc))
})();
var state__23646__auto__ = (function (){var statearr_24091 = f__23645__auto__.call(null);
(statearr_24091[(6)] = c__23644__auto___24093);

return statearr_24091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto___24093,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto__){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto__){
return (function (state_24130){
var state_val_24131 = (state_24130[(1)]);
if((state_val_24131 === (7))){
var inst_24126 = (state_24130[(2)]);
var state_24130__$1 = state_24130;
var statearr_24132_24150 = state_24130__$1;
(statearr_24132_24150[(2)] = inst_24126);

(statearr_24132_24150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24131 === (1))){
var inst_24110 = init;
var state_24130__$1 = (function (){var statearr_24133 = state_24130;
(statearr_24133[(7)] = inst_24110);

return statearr_24133;
})();
var statearr_24134_24151 = state_24130__$1;
(statearr_24134_24151[(2)] = null);

(statearr_24134_24151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24131 === (4))){
var inst_24113 = (state_24130[(8)]);
var inst_24113__$1 = (state_24130[(2)]);
var inst_24114 = (inst_24113__$1 == null);
var state_24130__$1 = (function (){var statearr_24135 = state_24130;
(statearr_24135[(8)] = inst_24113__$1);

return statearr_24135;
})();
if(cljs.core.truth_(inst_24114)){
var statearr_24136_24152 = state_24130__$1;
(statearr_24136_24152[(1)] = (5));

} else {
var statearr_24137_24153 = state_24130__$1;
(statearr_24137_24153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24131 === (6))){
var inst_24110 = (state_24130[(7)]);
var inst_24117 = (state_24130[(9)]);
var inst_24113 = (state_24130[(8)]);
var inst_24117__$1 = f.call(null,inst_24110,inst_24113);
var inst_24118 = cljs.core.reduced_QMARK_.call(null,inst_24117__$1);
var state_24130__$1 = (function (){var statearr_24138 = state_24130;
(statearr_24138[(9)] = inst_24117__$1);

return statearr_24138;
})();
if(inst_24118){
var statearr_24139_24154 = state_24130__$1;
(statearr_24139_24154[(1)] = (8));

} else {
var statearr_24140_24155 = state_24130__$1;
(statearr_24140_24155[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24131 === (3))){
var inst_24128 = (state_24130[(2)]);
var state_24130__$1 = state_24130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24130__$1,inst_24128);
} else {
if((state_val_24131 === (2))){
var state_24130__$1 = state_24130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24130__$1,(4),ch);
} else {
if((state_val_24131 === (9))){
var inst_24117 = (state_24130[(9)]);
var inst_24110 = inst_24117;
var state_24130__$1 = (function (){var statearr_24141 = state_24130;
(statearr_24141[(7)] = inst_24110);

return statearr_24141;
})();
var statearr_24142_24156 = state_24130__$1;
(statearr_24142_24156[(2)] = null);

(statearr_24142_24156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24131 === (5))){
var inst_24110 = (state_24130[(7)]);
var state_24130__$1 = state_24130;
var statearr_24143_24157 = state_24130__$1;
(statearr_24143_24157[(2)] = inst_24110);

(statearr_24143_24157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24131 === (10))){
var inst_24124 = (state_24130[(2)]);
var state_24130__$1 = state_24130;
var statearr_24144_24158 = state_24130__$1;
(statearr_24144_24158[(2)] = inst_24124);

(statearr_24144_24158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24131 === (8))){
var inst_24117 = (state_24130[(9)]);
var inst_24120 = cljs.core.deref.call(null,inst_24117);
var state_24130__$1 = state_24130;
var statearr_24145_24159 = state_24130__$1;
(statearr_24145_24159[(2)] = inst_24120);

(statearr_24145_24159[(1)] = (10));


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
});})(c__23644__auto__))
;
return ((function (switch__23549__auto__,c__23644__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23550__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23550__auto____0 = (function (){
var statearr_24146 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24146[(0)] = cljs$core$async$reduce_$_state_machine__23550__auto__);

(statearr_24146[(1)] = (1));

return statearr_24146;
});
var cljs$core$async$reduce_$_state_machine__23550__auto____1 = (function (state_24130){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_24130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e24147){if((e24147 instanceof Object)){
var ex__23553__auto__ = e24147;
var statearr_24148_24160 = state_24130;
(statearr_24148_24160[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24161 = state_24130;
state_24130 = G__24161;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23550__auto__ = function(state_24130){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23550__auto____1.call(this,state_24130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23550__auto____0;
cljs$core$async$reduce_$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23550__auto____1;
return cljs$core$async$reduce_$_state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto__))
})();
var state__23646__auto__ = (function (){var statearr_24149 = f__23645__auto__.call(null);
(statearr_24149[(6)] = c__23644__auto__);

return statearr_24149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto__))
);

return c__23644__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__23644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto__,f__$1){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto__,f__$1){
return (function (state_24167){
var state_val_24168 = (state_24167[(1)]);
if((state_val_24168 === (1))){
var inst_24162 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_24167__$1 = state_24167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24167__$1,(2),inst_24162);
} else {
if((state_val_24168 === (2))){
var inst_24164 = (state_24167[(2)]);
var inst_24165 = f__$1.call(null,inst_24164);
var state_24167__$1 = state_24167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24167__$1,inst_24165);
} else {
return null;
}
}
});})(c__23644__auto__,f__$1))
;
return ((function (switch__23549__auto__,c__23644__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23550__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23550__auto____0 = (function (){
var statearr_24169 = [null,null,null,null,null,null,null];
(statearr_24169[(0)] = cljs$core$async$transduce_$_state_machine__23550__auto__);

(statearr_24169[(1)] = (1));

return statearr_24169;
});
var cljs$core$async$transduce_$_state_machine__23550__auto____1 = (function (state_24167){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_24167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e24170){if((e24170 instanceof Object)){
var ex__23553__auto__ = e24170;
var statearr_24171_24173 = state_24167;
(statearr_24171_24173[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24174 = state_24167;
state_24167 = G__24174;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23550__auto__ = function(state_24167){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23550__auto____1.call(this,state_24167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23550__auto____0;
cljs$core$async$transduce_$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23550__auto____1;
return cljs$core$async$transduce_$_state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto__,f__$1))
})();
var state__23646__auto__ = (function (){var statearr_24172 = f__23645__auto__.call(null);
(statearr_24172[(6)] = c__23644__auto__);

return statearr_24172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto__,f__$1))
);

return c__23644__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__24176 = arguments.length;
switch (G__24176) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__23644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto__){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto__){
return (function (state_24201){
var state_val_24202 = (state_24201[(1)]);
if((state_val_24202 === (7))){
var inst_24183 = (state_24201[(2)]);
var state_24201__$1 = state_24201;
var statearr_24203_24224 = state_24201__$1;
(statearr_24203_24224[(2)] = inst_24183);

(statearr_24203_24224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (1))){
var inst_24177 = cljs.core.seq.call(null,coll);
var inst_24178 = inst_24177;
var state_24201__$1 = (function (){var statearr_24204 = state_24201;
(statearr_24204[(7)] = inst_24178);

return statearr_24204;
})();
var statearr_24205_24225 = state_24201__$1;
(statearr_24205_24225[(2)] = null);

(statearr_24205_24225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (4))){
var inst_24178 = (state_24201[(7)]);
var inst_24181 = cljs.core.first.call(null,inst_24178);
var state_24201__$1 = state_24201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24201__$1,(7),ch,inst_24181);
} else {
if((state_val_24202 === (13))){
var inst_24195 = (state_24201[(2)]);
var state_24201__$1 = state_24201;
var statearr_24206_24226 = state_24201__$1;
(statearr_24206_24226[(2)] = inst_24195);

(statearr_24206_24226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (6))){
var inst_24186 = (state_24201[(2)]);
var state_24201__$1 = state_24201;
if(cljs.core.truth_(inst_24186)){
var statearr_24207_24227 = state_24201__$1;
(statearr_24207_24227[(1)] = (8));

} else {
var statearr_24208_24228 = state_24201__$1;
(statearr_24208_24228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (3))){
var inst_24199 = (state_24201[(2)]);
var state_24201__$1 = state_24201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24201__$1,inst_24199);
} else {
if((state_val_24202 === (12))){
var state_24201__$1 = state_24201;
var statearr_24209_24229 = state_24201__$1;
(statearr_24209_24229[(2)] = null);

(statearr_24209_24229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (2))){
var inst_24178 = (state_24201[(7)]);
var state_24201__$1 = state_24201;
if(cljs.core.truth_(inst_24178)){
var statearr_24210_24230 = state_24201__$1;
(statearr_24210_24230[(1)] = (4));

} else {
var statearr_24211_24231 = state_24201__$1;
(statearr_24211_24231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (11))){
var inst_24192 = cljs.core.async.close_BANG_.call(null,ch);
var state_24201__$1 = state_24201;
var statearr_24212_24232 = state_24201__$1;
(statearr_24212_24232[(2)] = inst_24192);

(statearr_24212_24232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (9))){
var state_24201__$1 = state_24201;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24213_24233 = state_24201__$1;
(statearr_24213_24233[(1)] = (11));

} else {
var statearr_24214_24234 = state_24201__$1;
(statearr_24214_24234[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (5))){
var inst_24178 = (state_24201[(7)]);
var state_24201__$1 = state_24201;
var statearr_24215_24235 = state_24201__$1;
(statearr_24215_24235[(2)] = inst_24178);

(statearr_24215_24235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (10))){
var inst_24197 = (state_24201[(2)]);
var state_24201__$1 = state_24201;
var statearr_24216_24236 = state_24201__$1;
(statearr_24216_24236[(2)] = inst_24197);

(statearr_24216_24236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24202 === (8))){
var inst_24178 = (state_24201[(7)]);
var inst_24188 = cljs.core.next.call(null,inst_24178);
var inst_24178__$1 = inst_24188;
var state_24201__$1 = (function (){var statearr_24217 = state_24201;
(statearr_24217[(7)] = inst_24178__$1);

return statearr_24217;
})();
var statearr_24218_24237 = state_24201__$1;
(statearr_24218_24237[(2)] = null);

(statearr_24218_24237[(1)] = (2));


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
});})(c__23644__auto__))
;
return ((function (switch__23549__auto__,c__23644__auto__){
return (function() {
var cljs$core$async$state_machine__23550__auto__ = null;
var cljs$core$async$state_machine__23550__auto____0 = (function (){
var statearr_24219 = [null,null,null,null,null,null,null,null];
(statearr_24219[(0)] = cljs$core$async$state_machine__23550__auto__);

(statearr_24219[(1)] = (1));

return statearr_24219;
});
var cljs$core$async$state_machine__23550__auto____1 = (function (state_24201){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_24201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e24220){if((e24220 instanceof Object)){
var ex__23553__auto__ = e24220;
var statearr_24221_24238 = state_24201;
(statearr_24221_24238[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24239 = state_24201;
state_24201 = G__24239;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$state_machine__23550__auto__ = function(state_24201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23550__auto____1.call(this,state_24201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23550__auto____0;
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23550__auto____1;
return cljs$core$async$state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto__))
})();
var state__23646__auto__ = (function (){var statearr_24222 = f__23645__auto__.call(null);
(statearr_24222[(6)] = c__23644__auto__);

return statearr_24222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto__))
);

return c__23644__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24240 = (function (ch,cs,meta24241){
this.ch = ch;
this.cs = cs;
this.meta24241 = meta24241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24242,meta24241__$1){
var self__ = this;
var _24242__$1 = this;
return (new cljs.core.async.t_cljs$core$async24240(self__.ch,self__.cs,meta24241__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24240.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24242){
var self__ = this;
var _24242__$1 = this;
return self__.meta24241;
});})(cs))
;

cljs.core.async.t_cljs$core$async24240.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24240.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24240.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24240.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24240.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24240.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24240.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24241","meta24241",2128398696,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24240.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24240";

cljs.core.async.t_cljs$core$async24240.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24240");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24240.
 */
cljs.core.async.__GT_t_cljs$core$async24240 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24240(ch__$1,cs__$1,meta24241){
return (new cljs.core.async.t_cljs$core$async24240(ch__$1,cs__$1,meta24241));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24240(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23644__auto___24462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto___24462,cs,m,dchan,dctr,done){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto___24462,cs,m,dchan,dctr,done){
return (function (state_24377){
var state_val_24378 = (state_24377[(1)]);
if((state_val_24378 === (7))){
var inst_24373 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24379_24463 = state_24377__$1;
(statearr_24379_24463[(2)] = inst_24373);

(statearr_24379_24463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (20))){
var inst_24276 = (state_24377[(7)]);
var inst_24288 = cljs.core.first.call(null,inst_24276);
var inst_24289 = cljs.core.nth.call(null,inst_24288,(0),null);
var inst_24290 = cljs.core.nth.call(null,inst_24288,(1),null);
var state_24377__$1 = (function (){var statearr_24380 = state_24377;
(statearr_24380[(8)] = inst_24289);

return statearr_24380;
})();
if(cljs.core.truth_(inst_24290)){
var statearr_24381_24464 = state_24377__$1;
(statearr_24381_24464[(1)] = (22));

} else {
var statearr_24382_24465 = state_24377__$1;
(statearr_24382_24465[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (27))){
var inst_24320 = (state_24377[(9)]);
var inst_24318 = (state_24377[(10)]);
var inst_24325 = (state_24377[(11)]);
var inst_24245 = (state_24377[(12)]);
var inst_24325__$1 = cljs.core._nth.call(null,inst_24318,inst_24320);
var inst_24326 = cljs.core.async.put_BANG_.call(null,inst_24325__$1,inst_24245,done);
var state_24377__$1 = (function (){var statearr_24383 = state_24377;
(statearr_24383[(11)] = inst_24325__$1);

return statearr_24383;
})();
if(cljs.core.truth_(inst_24326)){
var statearr_24384_24466 = state_24377__$1;
(statearr_24384_24466[(1)] = (30));

} else {
var statearr_24385_24467 = state_24377__$1;
(statearr_24385_24467[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (1))){
var state_24377__$1 = state_24377;
var statearr_24386_24468 = state_24377__$1;
(statearr_24386_24468[(2)] = null);

(statearr_24386_24468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (24))){
var inst_24276 = (state_24377[(7)]);
var inst_24295 = (state_24377[(2)]);
var inst_24296 = cljs.core.next.call(null,inst_24276);
var inst_24254 = inst_24296;
var inst_24255 = null;
var inst_24256 = (0);
var inst_24257 = (0);
var state_24377__$1 = (function (){var statearr_24387 = state_24377;
(statearr_24387[(13)] = inst_24255);

(statearr_24387[(14)] = inst_24295);

(statearr_24387[(15)] = inst_24257);

(statearr_24387[(16)] = inst_24256);

(statearr_24387[(17)] = inst_24254);

return statearr_24387;
})();
var statearr_24388_24469 = state_24377__$1;
(statearr_24388_24469[(2)] = null);

(statearr_24388_24469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (39))){
var state_24377__$1 = state_24377;
var statearr_24392_24470 = state_24377__$1;
(statearr_24392_24470[(2)] = null);

(statearr_24392_24470[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (4))){
var inst_24245 = (state_24377[(12)]);
var inst_24245__$1 = (state_24377[(2)]);
var inst_24246 = (inst_24245__$1 == null);
var state_24377__$1 = (function (){var statearr_24393 = state_24377;
(statearr_24393[(12)] = inst_24245__$1);

return statearr_24393;
})();
if(cljs.core.truth_(inst_24246)){
var statearr_24394_24471 = state_24377__$1;
(statearr_24394_24471[(1)] = (5));

} else {
var statearr_24395_24472 = state_24377__$1;
(statearr_24395_24472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (15))){
var inst_24255 = (state_24377[(13)]);
var inst_24257 = (state_24377[(15)]);
var inst_24256 = (state_24377[(16)]);
var inst_24254 = (state_24377[(17)]);
var inst_24272 = (state_24377[(2)]);
var inst_24273 = (inst_24257 + (1));
var tmp24389 = inst_24255;
var tmp24390 = inst_24256;
var tmp24391 = inst_24254;
var inst_24254__$1 = tmp24391;
var inst_24255__$1 = tmp24389;
var inst_24256__$1 = tmp24390;
var inst_24257__$1 = inst_24273;
var state_24377__$1 = (function (){var statearr_24396 = state_24377;
(statearr_24396[(13)] = inst_24255__$1);

(statearr_24396[(18)] = inst_24272);

(statearr_24396[(15)] = inst_24257__$1);

(statearr_24396[(16)] = inst_24256__$1);

(statearr_24396[(17)] = inst_24254__$1);

return statearr_24396;
})();
var statearr_24397_24473 = state_24377__$1;
(statearr_24397_24473[(2)] = null);

(statearr_24397_24473[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (21))){
var inst_24299 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24401_24474 = state_24377__$1;
(statearr_24401_24474[(2)] = inst_24299);

(statearr_24401_24474[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (31))){
var inst_24325 = (state_24377[(11)]);
var inst_24329 = done.call(null,null);
var inst_24330 = cljs.core.async.untap_STAR_.call(null,m,inst_24325);
var state_24377__$1 = (function (){var statearr_24402 = state_24377;
(statearr_24402[(19)] = inst_24329);

return statearr_24402;
})();
var statearr_24403_24475 = state_24377__$1;
(statearr_24403_24475[(2)] = inst_24330);

(statearr_24403_24475[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (32))){
var inst_24320 = (state_24377[(9)]);
var inst_24318 = (state_24377[(10)]);
var inst_24319 = (state_24377[(20)]);
var inst_24317 = (state_24377[(21)]);
var inst_24332 = (state_24377[(2)]);
var inst_24333 = (inst_24320 + (1));
var tmp24398 = inst_24318;
var tmp24399 = inst_24319;
var tmp24400 = inst_24317;
var inst_24317__$1 = tmp24400;
var inst_24318__$1 = tmp24398;
var inst_24319__$1 = tmp24399;
var inst_24320__$1 = inst_24333;
var state_24377__$1 = (function (){var statearr_24404 = state_24377;
(statearr_24404[(9)] = inst_24320__$1);

(statearr_24404[(10)] = inst_24318__$1);

(statearr_24404[(20)] = inst_24319__$1);

(statearr_24404[(22)] = inst_24332);

(statearr_24404[(21)] = inst_24317__$1);

return statearr_24404;
})();
var statearr_24405_24476 = state_24377__$1;
(statearr_24405_24476[(2)] = null);

(statearr_24405_24476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (40))){
var inst_24345 = (state_24377[(23)]);
var inst_24349 = done.call(null,null);
var inst_24350 = cljs.core.async.untap_STAR_.call(null,m,inst_24345);
var state_24377__$1 = (function (){var statearr_24406 = state_24377;
(statearr_24406[(24)] = inst_24349);

return statearr_24406;
})();
var statearr_24407_24477 = state_24377__$1;
(statearr_24407_24477[(2)] = inst_24350);

(statearr_24407_24477[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (33))){
var inst_24336 = (state_24377[(25)]);
var inst_24338 = cljs.core.chunked_seq_QMARK_.call(null,inst_24336);
var state_24377__$1 = state_24377;
if(inst_24338){
var statearr_24408_24478 = state_24377__$1;
(statearr_24408_24478[(1)] = (36));

} else {
var statearr_24409_24479 = state_24377__$1;
(statearr_24409_24479[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (13))){
var inst_24266 = (state_24377[(26)]);
var inst_24269 = cljs.core.async.close_BANG_.call(null,inst_24266);
var state_24377__$1 = state_24377;
var statearr_24410_24480 = state_24377__$1;
(statearr_24410_24480[(2)] = inst_24269);

(statearr_24410_24480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (22))){
var inst_24289 = (state_24377[(8)]);
var inst_24292 = cljs.core.async.close_BANG_.call(null,inst_24289);
var state_24377__$1 = state_24377;
var statearr_24411_24481 = state_24377__$1;
(statearr_24411_24481[(2)] = inst_24292);

(statearr_24411_24481[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (36))){
var inst_24336 = (state_24377[(25)]);
var inst_24340 = cljs.core.chunk_first.call(null,inst_24336);
var inst_24341 = cljs.core.chunk_rest.call(null,inst_24336);
var inst_24342 = cljs.core.count.call(null,inst_24340);
var inst_24317 = inst_24341;
var inst_24318 = inst_24340;
var inst_24319 = inst_24342;
var inst_24320 = (0);
var state_24377__$1 = (function (){var statearr_24412 = state_24377;
(statearr_24412[(9)] = inst_24320);

(statearr_24412[(10)] = inst_24318);

(statearr_24412[(20)] = inst_24319);

(statearr_24412[(21)] = inst_24317);

return statearr_24412;
})();
var statearr_24413_24482 = state_24377__$1;
(statearr_24413_24482[(2)] = null);

(statearr_24413_24482[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (41))){
var inst_24336 = (state_24377[(25)]);
var inst_24352 = (state_24377[(2)]);
var inst_24353 = cljs.core.next.call(null,inst_24336);
var inst_24317 = inst_24353;
var inst_24318 = null;
var inst_24319 = (0);
var inst_24320 = (0);
var state_24377__$1 = (function (){var statearr_24414 = state_24377;
(statearr_24414[(9)] = inst_24320);

(statearr_24414[(10)] = inst_24318);

(statearr_24414[(20)] = inst_24319);

(statearr_24414[(21)] = inst_24317);

(statearr_24414[(27)] = inst_24352);

return statearr_24414;
})();
var statearr_24415_24483 = state_24377__$1;
(statearr_24415_24483[(2)] = null);

(statearr_24415_24483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (43))){
var state_24377__$1 = state_24377;
var statearr_24416_24484 = state_24377__$1;
(statearr_24416_24484[(2)] = null);

(statearr_24416_24484[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (29))){
var inst_24361 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24417_24485 = state_24377__$1;
(statearr_24417_24485[(2)] = inst_24361);

(statearr_24417_24485[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (44))){
var inst_24370 = (state_24377[(2)]);
var state_24377__$1 = (function (){var statearr_24418 = state_24377;
(statearr_24418[(28)] = inst_24370);

return statearr_24418;
})();
var statearr_24419_24486 = state_24377__$1;
(statearr_24419_24486[(2)] = null);

(statearr_24419_24486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (6))){
var inst_24309 = (state_24377[(29)]);
var inst_24308 = cljs.core.deref.call(null,cs);
var inst_24309__$1 = cljs.core.keys.call(null,inst_24308);
var inst_24310 = cljs.core.count.call(null,inst_24309__$1);
var inst_24311 = cljs.core.reset_BANG_.call(null,dctr,inst_24310);
var inst_24316 = cljs.core.seq.call(null,inst_24309__$1);
var inst_24317 = inst_24316;
var inst_24318 = null;
var inst_24319 = (0);
var inst_24320 = (0);
var state_24377__$1 = (function (){var statearr_24420 = state_24377;
(statearr_24420[(9)] = inst_24320);

(statearr_24420[(10)] = inst_24318);

(statearr_24420[(20)] = inst_24319);

(statearr_24420[(30)] = inst_24311);

(statearr_24420[(21)] = inst_24317);

(statearr_24420[(29)] = inst_24309__$1);

return statearr_24420;
})();
var statearr_24421_24487 = state_24377__$1;
(statearr_24421_24487[(2)] = null);

(statearr_24421_24487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (28))){
var inst_24336 = (state_24377[(25)]);
var inst_24317 = (state_24377[(21)]);
var inst_24336__$1 = cljs.core.seq.call(null,inst_24317);
var state_24377__$1 = (function (){var statearr_24422 = state_24377;
(statearr_24422[(25)] = inst_24336__$1);

return statearr_24422;
})();
if(inst_24336__$1){
var statearr_24423_24488 = state_24377__$1;
(statearr_24423_24488[(1)] = (33));

} else {
var statearr_24424_24489 = state_24377__$1;
(statearr_24424_24489[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (25))){
var inst_24320 = (state_24377[(9)]);
var inst_24319 = (state_24377[(20)]);
var inst_24322 = (inst_24320 < inst_24319);
var inst_24323 = inst_24322;
var state_24377__$1 = state_24377;
if(cljs.core.truth_(inst_24323)){
var statearr_24425_24490 = state_24377__$1;
(statearr_24425_24490[(1)] = (27));

} else {
var statearr_24426_24491 = state_24377__$1;
(statearr_24426_24491[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (34))){
var state_24377__$1 = state_24377;
var statearr_24427_24492 = state_24377__$1;
(statearr_24427_24492[(2)] = null);

(statearr_24427_24492[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (17))){
var state_24377__$1 = state_24377;
var statearr_24428_24493 = state_24377__$1;
(statearr_24428_24493[(2)] = null);

(statearr_24428_24493[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (3))){
var inst_24375 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24377__$1,inst_24375);
} else {
if((state_val_24378 === (12))){
var inst_24304 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24429_24494 = state_24377__$1;
(statearr_24429_24494[(2)] = inst_24304);

(statearr_24429_24494[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (2))){
var state_24377__$1 = state_24377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24377__$1,(4),ch);
} else {
if((state_val_24378 === (23))){
var state_24377__$1 = state_24377;
var statearr_24430_24495 = state_24377__$1;
(statearr_24430_24495[(2)] = null);

(statearr_24430_24495[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (35))){
var inst_24359 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24431_24496 = state_24377__$1;
(statearr_24431_24496[(2)] = inst_24359);

(statearr_24431_24496[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (19))){
var inst_24276 = (state_24377[(7)]);
var inst_24280 = cljs.core.chunk_first.call(null,inst_24276);
var inst_24281 = cljs.core.chunk_rest.call(null,inst_24276);
var inst_24282 = cljs.core.count.call(null,inst_24280);
var inst_24254 = inst_24281;
var inst_24255 = inst_24280;
var inst_24256 = inst_24282;
var inst_24257 = (0);
var state_24377__$1 = (function (){var statearr_24432 = state_24377;
(statearr_24432[(13)] = inst_24255);

(statearr_24432[(15)] = inst_24257);

(statearr_24432[(16)] = inst_24256);

(statearr_24432[(17)] = inst_24254);

return statearr_24432;
})();
var statearr_24433_24497 = state_24377__$1;
(statearr_24433_24497[(2)] = null);

(statearr_24433_24497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (11))){
var inst_24276 = (state_24377[(7)]);
var inst_24254 = (state_24377[(17)]);
var inst_24276__$1 = cljs.core.seq.call(null,inst_24254);
var state_24377__$1 = (function (){var statearr_24434 = state_24377;
(statearr_24434[(7)] = inst_24276__$1);

return statearr_24434;
})();
if(inst_24276__$1){
var statearr_24435_24498 = state_24377__$1;
(statearr_24435_24498[(1)] = (16));

} else {
var statearr_24436_24499 = state_24377__$1;
(statearr_24436_24499[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (9))){
var inst_24306 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24437_24500 = state_24377__$1;
(statearr_24437_24500[(2)] = inst_24306);

(statearr_24437_24500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (5))){
var inst_24252 = cljs.core.deref.call(null,cs);
var inst_24253 = cljs.core.seq.call(null,inst_24252);
var inst_24254 = inst_24253;
var inst_24255 = null;
var inst_24256 = (0);
var inst_24257 = (0);
var state_24377__$1 = (function (){var statearr_24438 = state_24377;
(statearr_24438[(13)] = inst_24255);

(statearr_24438[(15)] = inst_24257);

(statearr_24438[(16)] = inst_24256);

(statearr_24438[(17)] = inst_24254);

return statearr_24438;
})();
var statearr_24439_24501 = state_24377__$1;
(statearr_24439_24501[(2)] = null);

(statearr_24439_24501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (14))){
var state_24377__$1 = state_24377;
var statearr_24440_24502 = state_24377__$1;
(statearr_24440_24502[(2)] = null);

(statearr_24440_24502[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (45))){
var inst_24367 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24441_24503 = state_24377__$1;
(statearr_24441_24503[(2)] = inst_24367);

(statearr_24441_24503[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (26))){
var inst_24309 = (state_24377[(29)]);
var inst_24363 = (state_24377[(2)]);
var inst_24364 = cljs.core.seq.call(null,inst_24309);
var state_24377__$1 = (function (){var statearr_24442 = state_24377;
(statearr_24442[(31)] = inst_24363);

return statearr_24442;
})();
if(inst_24364){
var statearr_24443_24504 = state_24377__$1;
(statearr_24443_24504[(1)] = (42));

} else {
var statearr_24444_24505 = state_24377__$1;
(statearr_24444_24505[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (16))){
var inst_24276 = (state_24377[(7)]);
var inst_24278 = cljs.core.chunked_seq_QMARK_.call(null,inst_24276);
var state_24377__$1 = state_24377;
if(inst_24278){
var statearr_24445_24506 = state_24377__$1;
(statearr_24445_24506[(1)] = (19));

} else {
var statearr_24446_24507 = state_24377__$1;
(statearr_24446_24507[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (38))){
var inst_24356 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24447_24508 = state_24377__$1;
(statearr_24447_24508[(2)] = inst_24356);

(statearr_24447_24508[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (30))){
var state_24377__$1 = state_24377;
var statearr_24448_24509 = state_24377__$1;
(statearr_24448_24509[(2)] = null);

(statearr_24448_24509[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (10))){
var inst_24255 = (state_24377[(13)]);
var inst_24257 = (state_24377[(15)]);
var inst_24265 = cljs.core._nth.call(null,inst_24255,inst_24257);
var inst_24266 = cljs.core.nth.call(null,inst_24265,(0),null);
var inst_24267 = cljs.core.nth.call(null,inst_24265,(1),null);
var state_24377__$1 = (function (){var statearr_24449 = state_24377;
(statearr_24449[(26)] = inst_24266);

return statearr_24449;
})();
if(cljs.core.truth_(inst_24267)){
var statearr_24450_24510 = state_24377__$1;
(statearr_24450_24510[(1)] = (13));

} else {
var statearr_24451_24511 = state_24377__$1;
(statearr_24451_24511[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (18))){
var inst_24302 = (state_24377[(2)]);
var state_24377__$1 = state_24377;
var statearr_24452_24512 = state_24377__$1;
(statearr_24452_24512[(2)] = inst_24302);

(statearr_24452_24512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (42))){
var state_24377__$1 = state_24377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24377__$1,(45),dchan);
} else {
if((state_val_24378 === (37))){
var inst_24245 = (state_24377[(12)]);
var inst_24336 = (state_24377[(25)]);
var inst_24345 = (state_24377[(23)]);
var inst_24345__$1 = cljs.core.first.call(null,inst_24336);
var inst_24346 = cljs.core.async.put_BANG_.call(null,inst_24345__$1,inst_24245,done);
var state_24377__$1 = (function (){var statearr_24453 = state_24377;
(statearr_24453[(23)] = inst_24345__$1);

return statearr_24453;
})();
if(cljs.core.truth_(inst_24346)){
var statearr_24454_24513 = state_24377__$1;
(statearr_24454_24513[(1)] = (39));

} else {
var statearr_24455_24514 = state_24377__$1;
(statearr_24455_24514[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24378 === (8))){
var inst_24257 = (state_24377[(15)]);
var inst_24256 = (state_24377[(16)]);
var inst_24259 = (inst_24257 < inst_24256);
var inst_24260 = inst_24259;
var state_24377__$1 = state_24377;
if(cljs.core.truth_(inst_24260)){
var statearr_24456_24515 = state_24377__$1;
(statearr_24456_24515[(1)] = (10));

} else {
var statearr_24457_24516 = state_24377__$1;
(statearr_24457_24516[(1)] = (11));

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
});})(c__23644__auto___24462,cs,m,dchan,dctr,done))
;
return ((function (switch__23549__auto__,c__23644__auto___24462,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23550__auto__ = null;
var cljs$core$async$mult_$_state_machine__23550__auto____0 = (function (){
var statearr_24458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24458[(0)] = cljs$core$async$mult_$_state_machine__23550__auto__);

(statearr_24458[(1)] = (1));

return statearr_24458;
});
var cljs$core$async$mult_$_state_machine__23550__auto____1 = (function (state_24377){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_24377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e24459){if((e24459 instanceof Object)){
var ex__23553__auto__ = e24459;
var statearr_24460_24517 = state_24377;
(statearr_24460_24517[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24518 = state_24377;
state_24377 = G__24518;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23550__auto__ = function(state_24377){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23550__auto____1.call(this,state_24377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23550__auto____0;
cljs$core$async$mult_$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23550__auto____1;
return cljs$core$async$mult_$_state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto___24462,cs,m,dchan,dctr,done))
})();
var state__23646__auto__ = (function (){var statearr_24461 = f__23645__auto__.call(null);
(statearr_24461[(6)] = c__23644__auto___24462);

return statearr_24461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto___24462,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__24520 = arguments.length;
switch (G__24520) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24532 = arguments.length;
var i__4731__auto___24533 = (0);
while(true){
if((i__4731__auto___24533 < len__4730__auto___24532)){
args__4736__auto__.push((arguments[i__4731__auto___24533]));

var G__24534 = (i__4731__auto___24533 + (1));
i__4731__auto___24533 = G__24534;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24526){
var map__24527 = p__24526;
var map__24527__$1 = (((((!((map__24527 == null))))?(((((map__24527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24527):map__24527);
var opts = map__24527__$1;
var statearr_24529_24535 = state;
(statearr_24529_24535[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__24527,map__24527__$1,opts){
return (function (val){
var statearr_24530_24536 = state;
(statearr_24530_24536[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24527,map__24527__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_24531_24537 = state;
(statearr_24531_24537[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24522){
var G__24523 = cljs.core.first.call(null,seq24522);
var seq24522__$1 = cljs.core.next.call(null,seq24522);
var G__24524 = cljs.core.first.call(null,seq24522__$1);
var seq24522__$2 = cljs.core.next.call(null,seq24522__$1);
var G__24525 = cljs.core.first.call(null,seq24522__$2);
var seq24522__$3 = cljs.core.next.call(null,seq24522__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24523,G__24524,G__24525,seq24522__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24538 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24538 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24539){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24539 = meta24539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24540,meta24539__$1){
var self__ = this;
var _24540__$1 = this;
return (new cljs.core.async.t_cljs$core$async24538(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24539__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24540){
var self__ = this;
var _24540__$1 = this;
return self__.meta24539;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24538.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24538.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24539","meta24539",272357320,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24538.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24538.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24538";

cljs.core.async.t_cljs$core$async24538.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24538");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24538.
 */
cljs.core.async.__GT_t_cljs$core$async24538 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24538(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24539){
return (new cljs.core.async.t_cljs$core$async24538(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24539));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24538(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23644__auto___24702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto___24702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto___24702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24642){
var state_val_24643 = (state_24642[(1)]);
if((state_val_24643 === (7))){
var inst_24557 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
var statearr_24644_24703 = state_24642__$1;
(statearr_24644_24703[(2)] = inst_24557);

(statearr_24644_24703[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (20))){
var inst_24569 = (state_24642[(7)]);
var state_24642__$1 = state_24642;
var statearr_24645_24704 = state_24642__$1;
(statearr_24645_24704[(2)] = inst_24569);

(statearr_24645_24704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (27))){
var state_24642__$1 = state_24642;
var statearr_24646_24705 = state_24642__$1;
(statearr_24646_24705[(2)] = null);

(statearr_24646_24705[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (1))){
var inst_24544 = (state_24642[(8)]);
var inst_24544__$1 = calc_state.call(null);
var inst_24546 = (inst_24544__$1 == null);
var inst_24547 = cljs.core.not.call(null,inst_24546);
var state_24642__$1 = (function (){var statearr_24647 = state_24642;
(statearr_24647[(8)] = inst_24544__$1);

return statearr_24647;
})();
if(inst_24547){
var statearr_24648_24706 = state_24642__$1;
(statearr_24648_24706[(1)] = (2));

} else {
var statearr_24649_24707 = state_24642__$1;
(statearr_24649_24707[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (24))){
var inst_24593 = (state_24642[(9)]);
var inst_24602 = (state_24642[(10)]);
var inst_24616 = (state_24642[(11)]);
var inst_24616__$1 = inst_24593.call(null,inst_24602);
var state_24642__$1 = (function (){var statearr_24650 = state_24642;
(statearr_24650[(11)] = inst_24616__$1);

return statearr_24650;
})();
if(cljs.core.truth_(inst_24616__$1)){
var statearr_24651_24708 = state_24642__$1;
(statearr_24651_24708[(1)] = (29));

} else {
var statearr_24652_24709 = state_24642__$1;
(statearr_24652_24709[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (4))){
var inst_24560 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
if(cljs.core.truth_(inst_24560)){
var statearr_24653_24710 = state_24642__$1;
(statearr_24653_24710[(1)] = (8));

} else {
var statearr_24654_24711 = state_24642__$1;
(statearr_24654_24711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (15))){
var inst_24587 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
if(cljs.core.truth_(inst_24587)){
var statearr_24655_24712 = state_24642__$1;
(statearr_24655_24712[(1)] = (19));

} else {
var statearr_24656_24713 = state_24642__$1;
(statearr_24656_24713[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (21))){
var inst_24592 = (state_24642[(12)]);
var inst_24592__$1 = (state_24642[(2)]);
var inst_24593 = cljs.core.get.call(null,inst_24592__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24594 = cljs.core.get.call(null,inst_24592__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24595 = cljs.core.get.call(null,inst_24592__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24642__$1 = (function (){var statearr_24657 = state_24642;
(statearr_24657[(12)] = inst_24592__$1);

(statearr_24657[(13)] = inst_24594);

(statearr_24657[(9)] = inst_24593);

return statearr_24657;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24642__$1,(22),inst_24595);
} else {
if((state_val_24643 === (31))){
var inst_24624 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
if(cljs.core.truth_(inst_24624)){
var statearr_24658_24714 = state_24642__$1;
(statearr_24658_24714[(1)] = (32));

} else {
var statearr_24659_24715 = state_24642__$1;
(statearr_24659_24715[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (32))){
var inst_24601 = (state_24642[(14)]);
var state_24642__$1 = state_24642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24642__$1,(35),out,inst_24601);
} else {
if((state_val_24643 === (33))){
var inst_24592 = (state_24642[(12)]);
var inst_24569 = inst_24592;
var state_24642__$1 = (function (){var statearr_24660 = state_24642;
(statearr_24660[(7)] = inst_24569);

return statearr_24660;
})();
var statearr_24661_24716 = state_24642__$1;
(statearr_24661_24716[(2)] = null);

(statearr_24661_24716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (13))){
var inst_24569 = (state_24642[(7)]);
var inst_24576 = inst_24569.cljs$lang$protocol_mask$partition0$;
var inst_24577 = (inst_24576 & (64));
var inst_24578 = inst_24569.cljs$core$ISeq$;
var inst_24579 = (cljs.core.PROTOCOL_SENTINEL === inst_24578);
var inst_24580 = ((inst_24577) || (inst_24579));
var state_24642__$1 = state_24642;
if(cljs.core.truth_(inst_24580)){
var statearr_24662_24717 = state_24642__$1;
(statearr_24662_24717[(1)] = (16));

} else {
var statearr_24663_24718 = state_24642__$1;
(statearr_24663_24718[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (22))){
var inst_24601 = (state_24642[(14)]);
var inst_24602 = (state_24642[(10)]);
var inst_24600 = (state_24642[(2)]);
var inst_24601__$1 = cljs.core.nth.call(null,inst_24600,(0),null);
var inst_24602__$1 = cljs.core.nth.call(null,inst_24600,(1),null);
var inst_24603 = (inst_24601__$1 == null);
var inst_24604 = cljs.core._EQ_.call(null,inst_24602__$1,change);
var inst_24605 = ((inst_24603) || (inst_24604));
var state_24642__$1 = (function (){var statearr_24664 = state_24642;
(statearr_24664[(14)] = inst_24601__$1);

(statearr_24664[(10)] = inst_24602__$1);

return statearr_24664;
})();
if(cljs.core.truth_(inst_24605)){
var statearr_24665_24719 = state_24642__$1;
(statearr_24665_24719[(1)] = (23));

} else {
var statearr_24666_24720 = state_24642__$1;
(statearr_24666_24720[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (36))){
var inst_24592 = (state_24642[(12)]);
var inst_24569 = inst_24592;
var state_24642__$1 = (function (){var statearr_24667 = state_24642;
(statearr_24667[(7)] = inst_24569);

return statearr_24667;
})();
var statearr_24668_24721 = state_24642__$1;
(statearr_24668_24721[(2)] = null);

(statearr_24668_24721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (29))){
var inst_24616 = (state_24642[(11)]);
var state_24642__$1 = state_24642;
var statearr_24669_24722 = state_24642__$1;
(statearr_24669_24722[(2)] = inst_24616);

(statearr_24669_24722[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (6))){
var state_24642__$1 = state_24642;
var statearr_24670_24723 = state_24642__$1;
(statearr_24670_24723[(2)] = false);

(statearr_24670_24723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (28))){
var inst_24612 = (state_24642[(2)]);
var inst_24613 = calc_state.call(null);
var inst_24569 = inst_24613;
var state_24642__$1 = (function (){var statearr_24671 = state_24642;
(statearr_24671[(15)] = inst_24612);

(statearr_24671[(7)] = inst_24569);

return statearr_24671;
})();
var statearr_24672_24724 = state_24642__$1;
(statearr_24672_24724[(2)] = null);

(statearr_24672_24724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (25))){
var inst_24638 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
var statearr_24673_24725 = state_24642__$1;
(statearr_24673_24725[(2)] = inst_24638);

(statearr_24673_24725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (34))){
var inst_24636 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
var statearr_24674_24726 = state_24642__$1;
(statearr_24674_24726[(2)] = inst_24636);

(statearr_24674_24726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (17))){
var state_24642__$1 = state_24642;
var statearr_24675_24727 = state_24642__$1;
(statearr_24675_24727[(2)] = false);

(statearr_24675_24727[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (3))){
var state_24642__$1 = state_24642;
var statearr_24676_24728 = state_24642__$1;
(statearr_24676_24728[(2)] = false);

(statearr_24676_24728[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (12))){
var inst_24640 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24642__$1,inst_24640);
} else {
if((state_val_24643 === (2))){
var inst_24544 = (state_24642[(8)]);
var inst_24549 = inst_24544.cljs$lang$protocol_mask$partition0$;
var inst_24550 = (inst_24549 & (64));
var inst_24551 = inst_24544.cljs$core$ISeq$;
var inst_24552 = (cljs.core.PROTOCOL_SENTINEL === inst_24551);
var inst_24553 = ((inst_24550) || (inst_24552));
var state_24642__$1 = state_24642;
if(cljs.core.truth_(inst_24553)){
var statearr_24677_24729 = state_24642__$1;
(statearr_24677_24729[(1)] = (5));

} else {
var statearr_24678_24730 = state_24642__$1;
(statearr_24678_24730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (23))){
var inst_24601 = (state_24642[(14)]);
var inst_24607 = (inst_24601 == null);
var state_24642__$1 = state_24642;
if(cljs.core.truth_(inst_24607)){
var statearr_24679_24731 = state_24642__$1;
(statearr_24679_24731[(1)] = (26));

} else {
var statearr_24680_24732 = state_24642__$1;
(statearr_24680_24732[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (35))){
var inst_24627 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
if(cljs.core.truth_(inst_24627)){
var statearr_24681_24733 = state_24642__$1;
(statearr_24681_24733[(1)] = (36));

} else {
var statearr_24682_24734 = state_24642__$1;
(statearr_24682_24734[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (19))){
var inst_24569 = (state_24642[(7)]);
var inst_24589 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24569);
var state_24642__$1 = state_24642;
var statearr_24683_24735 = state_24642__$1;
(statearr_24683_24735[(2)] = inst_24589);

(statearr_24683_24735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (11))){
var inst_24569 = (state_24642[(7)]);
var inst_24573 = (inst_24569 == null);
var inst_24574 = cljs.core.not.call(null,inst_24573);
var state_24642__$1 = state_24642;
if(inst_24574){
var statearr_24684_24736 = state_24642__$1;
(statearr_24684_24736[(1)] = (13));

} else {
var statearr_24685_24737 = state_24642__$1;
(statearr_24685_24737[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (9))){
var inst_24544 = (state_24642[(8)]);
var state_24642__$1 = state_24642;
var statearr_24686_24738 = state_24642__$1;
(statearr_24686_24738[(2)] = inst_24544);

(statearr_24686_24738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (5))){
var state_24642__$1 = state_24642;
var statearr_24687_24739 = state_24642__$1;
(statearr_24687_24739[(2)] = true);

(statearr_24687_24739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (14))){
var state_24642__$1 = state_24642;
var statearr_24688_24740 = state_24642__$1;
(statearr_24688_24740[(2)] = false);

(statearr_24688_24740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (26))){
var inst_24602 = (state_24642[(10)]);
var inst_24609 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24602);
var state_24642__$1 = state_24642;
var statearr_24689_24741 = state_24642__$1;
(statearr_24689_24741[(2)] = inst_24609);

(statearr_24689_24741[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (16))){
var state_24642__$1 = state_24642;
var statearr_24690_24742 = state_24642__$1;
(statearr_24690_24742[(2)] = true);

(statearr_24690_24742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (38))){
var inst_24632 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
var statearr_24691_24743 = state_24642__$1;
(statearr_24691_24743[(2)] = inst_24632);

(statearr_24691_24743[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (30))){
var inst_24594 = (state_24642[(13)]);
var inst_24593 = (state_24642[(9)]);
var inst_24602 = (state_24642[(10)]);
var inst_24619 = cljs.core.empty_QMARK_.call(null,inst_24593);
var inst_24620 = inst_24594.call(null,inst_24602);
var inst_24621 = cljs.core.not.call(null,inst_24620);
var inst_24622 = ((inst_24619) && (inst_24621));
var state_24642__$1 = state_24642;
var statearr_24692_24744 = state_24642__$1;
(statearr_24692_24744[(2)] = inst_24622);

(statearr_24692_24744[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (10))){
var inst_24544 = (state_24642[(8)]);
var inst_24565 = (state_24642[(2)]);
var inst_24566 = cljs.core.get.call(null,inst_24565,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24567 = cljs.core.get.call(null,inst_24565,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24568 = cljs.core.get.call(null,inst_24565,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24569 = inst_24544;
var state_24642__$1 = (function (){var statearr_24693 = state_24642;
(statearr_24693[(16)] = inst_24567);

(statearr_24693[(17)] = inst_24568);

(statearr_24693[(7)] = inst_24569);

(statearr_24693[(18)] = inst_24566);

return statearr_24693;
})();
var statearr_24694_24745 = state_24642__$1;
(statearr_24694_24745[(2)] = null);

(statearr_24694_24745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (18))){
var inst_24584 = (state_24642[(2)]);
var state_24642__$1 = state_24642;
var statearr_24695_24746 = state_24642__$1;
(statearr_24695_24746[(2)] = inst_24584);

(statearr_24695_24746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (37))){
var state_24642__$1 = state_24642;
var statearr_24696_24747 = state_24642__$1;
(statearr_24696_24747[(2)] = null);

(statearr_24696_24747[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24643 === (8))){
var inst_24544 = (state_24642[(8)]);
var inst_24562 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24544);
var state_24642__$1 = state_24642;
var statearr_24697_24748 = state_24642__$1;
(statearr_24697_24748[(2)] = inst_24562);

(statearr_24697_24748[(1)] = (10));


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
});})(c__23644__auto___24702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23549__auto__,c__23644__auto___24702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23550__auto__ = null;
var cljs$core$async$mix_$_state_machine__23550__auto____0 = (function (){
var statearr_24698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24698[(0)] = cljs$core$async$mix_$_state_machine__23550__auto__);

(statearr_24698[(1)] = (1));

return statearr_24698;
});
var cljs$core$async$mix_$_state_machine__23550__auto____1 = (function (state_24642){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_24642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e24699){if((e24699 instanceof Object)){
var ex__23553__auto__ = e24699;
var statearr_24700_24749 = state_24642;
(statearr_24700_24749[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24750 = state_24642;
state_24642 = G__24750;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23550__auto__ = function(state_24642){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23550__auto____1.call(this,state_24642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23550__auto____0;
cljs$core$async$mix_$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23550__auto____1;
return cljs$core$async$mix_$_state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto___24702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23646__auto__ = (function (){var statearr_24701 = f__23645__auto__.call(null);
(statearr_24701[(6)] = c__23644__auto___24702);

return statearr_24701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto___24702,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__24752 = arguments.length;
switch (G__24752) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__24756 = arguments.length;
switch (G__24756) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__24754_SHARP_){
if(cljs.core.truth_(p1__24754_SHARP_.call(null,topic))){
return p1__24754_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24754_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async24757 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24757 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24758){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24758 = meta24758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24759,meta24758__$1){
var self__ = this;
var _24759__$1 = this;
return (new cljs.core.async.t_cljs$core$async24757(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24758__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24759){
var self__ = this;
var _24759__$1 = this;
return self__.meta24758;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24757.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24757.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24758","meta24758",-518829566,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24757.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24757.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24757";

cljs.core.async.t_cljs$core$async24757.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async24757");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async24757.
 */
cljs.core.async.__GT_t_cljs$core$async24757 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24757(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24758){
return (new cljs.core.async.t_cljs$core$async24757(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24758));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24757(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23644__auto___24877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto___24877,mults,ensure_mult,p){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto___24877,mults,ensure_mult,p){
return (function (state_24831){
var state_val_24832 = (state_24831[(1)]);
if((state_val_24832 === (7))){
var inst_24827 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24833_24878 = state_24831__$1;
(statearr_24833_24878[(2)] = inst_24827);

(statearr_24833_24878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (20))){
var state_24831__$1 = state_24831;
var statearr_24834_24879 = state_24831__$1;
(statearr_24834_24879[(2)] = null);

(statearr_24834_24879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (1))){
var state_24831__$1 = state_24831;
var statearr_24835_24880 = state_24831__$1;
(statearr_24835_24880[(2)] = null);

(statearr_24835_24880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (24))){
var inst_24810 = (state_24831[(7)]);
var inst_24819 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24810);
var state_24831__$1 = state_24831;
var statearr_24836_24881 = state_24831__$1;
(statearr_24836_24881[(2)] = inst_24819);

(statearr_24836_24881[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (4))){
var inst_24762 = (state_24831[(8)]);
var inst_24762__$1 = (state_24831[(2)]);
var inst_24763 = (inst_24762__$1 == null);
var state_24831__$1 = (function (){var statearr_24837 = state_24831;
(statearr_24837[(8)] = inst_24762__$1);

return statearr_24837;
})();
if(cljs.core.truth_(inst_24763)){
var statearr_24838_24882 = state_24831__$1;
(statearr_24838_24882[(1)] = (5));

} else {
var statearr_24839_24883 = state_24831__$1;
(statearr_24839_24883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (15))){
var inst_24804 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24840_24884 = state_24831__$1;
(statearr_24840_24884[(2)] = inst_24804);

(statearr_24840_24884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (21))){
var inst_24824 = (state_24831[(2)]);
var state_24831__$1 = (function (){var statearr_24841 = state_24831;
(statearr_24841[(9)] = inst_24824);

return statearr_24841;
})();
var statearr_24842_24885 = state_24831__$1;
(statearr_24842_24885[(2)] = null);

(statearr_24842_24885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (13))){
var inst_24786 = (state_24831[(10)]);
var inst_24788 = cljs.core.chunked_seq_QMARK_.call(null,inst_24786);
var state_24831__$1 = state_24831;
if(inst_24788){
var statearr_24843_24886 = state_24831__$1;
(statearr_24843_24886[(1)] = (16));

} else {
var statearr_24844_24887 = state_24831__$1;
(statearr_24844_24887[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (22))){
var inst_24816 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
if(cljs.core.truth_(inst_24816)){
var statearr_24845_24888 = state_24831__$1;
(statearr_24845_24888[(1)] = (23));

} else {
var statearr_24846_24889 = state_24831__$1;
(statearr_24846_24889[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (6))){
var inst_24812 = (state_24831[(11)]);
var inst_24762 = (state_24831[(8)]);
var inst_24810 = (state_24831[(7)]);
var inst_24810__$1 = topic_fn.call(null,inst_24762);
var inst_24811 = cljs.core.deref.call(null,mults);
var inst_24812__$1 = cljs.core.get.call(null,inst_24811,inst_24810__$1);
var state_24831__$1 = (function (){var statearr_24847 = state_24831;
(statearr_24847[(11)] = inst_24812__$1);

(statearr_24847[(7)] = inst_24810__$1);

return statearr_24847;
})();
if(cljs.core.truth_(inst_24812__$1)){
var statearr_24848_24890 = state_24831__$1;
(statearr_24848_24890[(1)] = (19));

} else {
var statearr_24849_24891 = state_24831__$1;
(statearr_24849_24891[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (25))){
var inst_24821 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24850_24892 = state_24831__$1;
(statearr_24850_24892[(2)] = inst_24821);

(statearr_24850_24892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (17))){
var inst_24786 = (state_24831[(10)]);
var inst_24795 = cljs.core.first.call(null,inst_24786);
var inst_24796 = cljs.core.async.muxch_STAR_.call(null,inst_24795);
var inst_24797 = cljs.core.async.close_BANG_.call(null,inst_24796);
var inst_24798 = cljs.core.next.call(null,inst_24786);
var inst_24772 = inst_24798;
var inst_24773 = null;
var inst_24774 = (0);
var inst_24775 = (0);
var state_24831__$1 = (function (){var statearr_24851 = state_24831;
(statearr_24851[(12)] = inst_24775);

(statearr_24851[(13)] = inst_24797);

(statearr_24851[(14)] = inst_24774);

(statearr_24851[(15)] = inst_24773);

(statearr_24851[(16)] = inst_24772);

return statearr_24851;
})();
var statearr_24852_24893 = state_24831__$1;
(statearr_24852_24893[(2)] = null);

(statearr_24852_24893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (3))){
var inst_24829 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24831__$1,inst_24829);
} else {
if((state_val_24832 === (12))){
var inst_24806 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24853_24894 = state_24831__$1;
(statearr_24853_24894[(2)] = inst_24806);

(statearr_24853_24894[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (2))){
var state_24831__$1 = state_24831;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24831__$1,(4),ch);
} else {
if((state_val_24832 === (23))){
var state_24831__$1 = state_24831;
var statearr_24854_24895 = state_24831__$1;
(statearr_24854_24895[(2)] = null);

(statearr_24854_24895[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (19))){
var inst_24812 = (state_24831[(11)]);
var inst_24762 = (state_24831[(8)]);
var inst_24814 = cljs.core.async.muxch_STAR_.call(null,inst_24812);
var state_24831__$1 = state_24831;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24831__$1,(22),inst_24814,inst_24762);
} else {
if((state_val_24832 === (11))){
var inst_24786 = (state_24831[(10)]);
var inst_24772 = (state_24831[(16)]);
var inst_24786__$1 = cljs.core.seq.call(null,inst_24772);
var state_24831__$1 = (function (){var statearr_24855 = state_24831;
(statearr_24855[(10)] = inst_24786__$1);

return statearr_24855;
})();
if(inst_24786__$1){
var statearr_24856_24896 = state_24831__$1;
(statearr_24856_24896[(1)] = (13));

} else {
var statearr_24857_24897 = state_24831__$1;
(statearr_24857_24897[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (9))){
var inst_24808 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24858_24898 = state_24831__$1;
(statearr_24858_24898[(2)] = inst_24808);

(statearr_24858_24898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (5))){
var inst_24769 = cljs.core.deref.call(null,mults);
var inst_24770 = cljs.core.vals.call(null,inst_24769);
var inst_24771 = cljs.core.seq.call(null,inst_24770);
var inst_24772 = inst_24771;
var inst_24773 = null;
var inst_24774 = (0);
var inst_24775 = (0);
var state_24831__$1 = (function (){var statearr_24859 = state_24831;
(statearr_24859[(12)] = inst_24775);

(statearr_24859[(14)] = inst_24774);

(statearr_24859[(15)] = inst_24773);

(statearr_24859[(16)] = inst_24772);

return statearr_24859;
})();
var statearr_24860_24899 = state_24831__$1;
(statearr_24860_24899[(2)] = null);

(statearr_24860_24899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (14))){
var state_24831__$1 = state_24831;
var statearr_24864_24900 = state_24831__$1;
(statearr_24864_24900[(2)] = null);

(statearr_24864_24900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (16))){
var inst_24786 = (state_24831[(10)]);
var inst_24790 = cljs.core.chunk_first.call(null,inst_24786);
var inst_24791 = cljs.core.chunk_rest.call(null,inst_24786);
var inst_24792 = cljs.core.count.call(null,inst_24790);
var inst_24772 = inst_24791;
var inst_24773 = inst_24790;
var inst_24774 = inst_24792;
var inst_24775 = (0);
var state_24831__$1 = (function (){var statearr_24865 = state_24831;
(statearr_24865[(12)] = inst_24775);

(statearr_24865[(14)] = inst_24774);

(statearr_24865[(15)] = inst_24773);

(statearr_24865[(16)] = inst_24772);

return statearr_24865;
})();
var statearr_24866_24901 = state_24831__$1;
(statearr_24866_24901[(2)] = null);

(statearr_24866_24901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (10))){
var inst_24775 = (state_24831[(12)]);
var inst_24774 = (state_24831[(14)]);
var inst_24773 = (state_24831[(15)]);
var inst_24772 = (state_24831[(16)]);
var inst_24780 = cljs.core._nth.call(null,inst_24773,inst_24775);
var inst_24781 = cljs.core.async.muxch_STAR_.call(null,inst_24780);
var inst_24782 = cljs.core.async.close_BANG_.call(null,inst_24781);
var inst_24783 = (inst_24775 + (1));
var tmp24861 = inst_24774;
var tmp24862 = inst_24773;
var tmp24863 = inst_24772;
var inst_24772__$1 = tmp24863;
var inst_24773__$1 = tmp24862;
var inst_24774__$1 = tmp24861;
var inst_24775__$1 = inst_24783;
var state_24831__$1 = (function (){var statearr_24867 = state_24831;
(statearr_24867[(17)] = inst_24782);

(statearr_24867[(12)] = inst_24775__$1);

(statearr_24867[(14)] = inst_24774__$1);

(statearr_24867[(15)] = inst_24773__$1);

(statearr_24867[(16)] = inst_24772__$1);

return statearr_24867;
})();
var statearr_24868_24902 = state_24831__$1;
(statearr_24868_24902[(2)] = null);

(statearr_24868_24902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (18))){
var inst_24801 = (state_24831[(2)]);
var state_24831__$1 = state_24831;
var statearr_24869_24903 = state_24831__$1;
(statearr_24869_24903[(2)] = inst_24801);

(statearr_24869_24903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24832 === (8))){
var inst_24775 = (state_24831[(12)]);
var inst_24774 = (state_24831[(14)]);
var inst_24777 = (inst_24775 < inst_24774);
var inst_24778 = inst_24777;
var state_24831__$1 = state_24831;
if(cljs.core.truth_(inst_24778)){
var statearr_24870_24904 = state_24831__$1;
(statearr_24870_24904[(1)] = (10));

} else {
var statearr_24871_24905 = state_24831__$1;
(statearr_24871_24905[(1)] = (11));

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
});})(c__23644__auto___24877,mults,ensure_mult,p))
;
return ((function (switch__23549__auto__,c__23644__auto___24877,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23550__auto__ = null;
var cljs$core$async$state_machine__23550__auto____0 = (function (){
var statearr_24872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24872[(0)] = cljs$core$async$state_machine__23550__auto__);

(statearr_24872[(1)] = (1));

return statearr_24872;
});
var cljs$core$async$state_machine__23550__auto____1 = (function (state_24831){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_24831);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e24873){if((e24873 instanceof Object)){
var ex__23553__auto__ = e24873;
var statearr_24874_24906 = state_24831;
(statearr_24874_24906[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24907 = state_24831;
state_24831 = G__24907;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$state_machine__23550__auto__ = function(state_24831){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23550__auto____1.call(this,state_24831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23550__auto____0;
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23550__auto____1;
return cljs$core$async$state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto___24877,mults,ensure_mult,p))
})();
var state__23646__auto__ = (function (){var statearr_24875 = f__23645__auto__.call(null);
(statearr_24875[(6)] = c__23644__auto___24877);

return statearr_24875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto___24877,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__24909 = arguments.length;
switch (G__24909) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__24912 = arguments.length;
switch (G__24912) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__24915 = arguments.length;
switch (G__24915) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23644__auto___24982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto___24982,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto___24982,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24954){
var state_val_24955 = (state_24954[(1)]);
if((state_val_24955 === (7))){
var state_24954__$1 = state_24954;
var statearr_24956_24983 = state_24954__$1;
(statearr_24956_24983[(2)] = null);

(statearr_24956_24983[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (1))){
var state_24954__$1 = state_24954;
var statearr_24957_24984 = state_24954__$1;
(statearr_24957_24984[(2)] = null);

(statearr_24957_24984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (4))){
var inst_24918 = (state_24954[(7)]);
var inst_24920 = (inst_24918 < cnt);
var state_24954__$1 = state_24954;
if(cljs.core.truth_(inst_24920)){
var statearr_24958_24985 = state_24954__$1;
(statearr_24958_24985[(1)] = (6));

} else {
var statearr_24959_24986 = state_24954__$1;
(statearr_24959_24986[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (15))){
var inst_24950 = (state_24954[(2)]);
var state_24954__$1 = state_24954;
var statearr_24960_24987 = state_24954__$1;
(statearr_24960_24987[(2)] = inst_24950);

(statearr_24960_24987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (13))){
var inst_24943 = cljs.core.async.close_BANG_.call(null,out);
var state_24954__$1 = state_24954;
var statearr_24961_24988 = state_24954__$1;
(statearr_24961_24988[(2)] = inst_24943);

(statearr_24961_24988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (6))){
var state_24954__$1 = state_24954;
var statearr_24962_24989 = state_24954__$1;
(statearr_24962_24989[(2)] = null);

(statearr_24962_24989[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (3))){
var inst_24952 = (state_24954[(2)]);
var state_24954__$1 = state_24954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24954__$1,inst_24952);
} else {
if((state_val_24955 === (12))){
var inst_24940 = (state_24954[(8)]);
var inst_24940__$1 = (state_24954[(2)]);
var inst_24941 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24940__$1);
var state_24954__$1 = (function (){var statearr_24963 = state_24954;
(statearr_24963[(8)] = inst_24940__$1);

return statearr_24963;
})();
if(cljs.core.truth_(inst_24941)){
var statearr_24964_24990 = state_24954__$1;
(statearr_24964_24990[(1)] = (13));

} else {
var statearr_24965_24991 = state_24954__$1;
(statearr_24965_24991[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (2))){
var inst_24917 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24918 = (0);
var state_24954__$1 = (function (){var statearr_24966 = state_24954;
(statearr_24966[(7)] = inst_24918);

(statearr_24966[(9)] = inst_24917);

return statearr_24966;
})();
var statearr_24967_24992 = state_24954__$1;
(statearr_24967_24992[(2)] = null);

(statearr_24967_24992[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (11))){
var inst_24918 = (state_24954[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24954,(10),Object,null,(9));
var inst_24927 = chs__$1.call(null,inst_24918);
var inst_24928 = done.call(null,inst_24918);
var inst_24929 = cljs.core.async.take_BANG_.call(null,inst_24927,inst_24928);
var state_24954__$1 = state_24954;
var statearr_24968_24993 = state_24954__$1;
(statearr_24968_24993[(2)] = inst_24929);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24954__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (9))){
var inst_24918 = (state_24954[(7)]);
var inst_24931 = (state_24954[(2)]);
var inst_24932 = (inst_24918 + (1));
var inst_24918__$1 = inst_24932;
var state_24954__$1 = (function (){var statearr_24969 = state_24954;
(statearr_24969[(7)] = inst_24918__$1);

(statearr_24969[(10)] = inst_24931);

return statearr_24969;
})();
var statearr_24970_24994 = state_24954__$1;
(statearr_24970_24994[(2)] = null);

(statearr_24970_24994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (5))){
var inst_24938 = (state_24954[(2)]);
var state_24954__$1 = (function (){var statearr_24971 = state_24954;
(statearr_24971[(11)] = inst_24938);

return statearr_24971;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24954__$1,(12),dchan);
} else {
if((state_val_24955 === (14))){
var inst_24940 = (state_24954[(8)]);
var inst_24945 = cljs.core.apply.call(null,f,inst_24940);
var state_24954__$1 = state_24954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24954__$1,(16),out,inst_24945);
} else {
if((state_val_24955 === (16))){
var inst_24947 = (state_24954[(2)]);
var state_24954__$1 = (function (){var statearr_24972 = state_24954;
(statearr_24972[(12)] = inst_24947);

return statearr_24972;
})();
var statearr_24973_24995 = state_24954__$1;
(statearr_24973_24995[(2)] = null);

(statearr_24973_24995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (10))){
var inst_24922 = (state_24954[(2)]);
var inst_24923 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24954__$1 = (function (){var statearr_24974 = state_24954;
(statearr_24974[(13)] = inst_24922);

return statearr_24974;
})();
var statearr_24975_24996 = state_24954__$1;
(statearr_24975_24996[(2)] = inst_24923);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24954__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24955 === (8))){
var inst_24936 = (state_24954[(2)]);
var state_24954__$1 = state_24954;
var statearr_24976_24997 = state_24954__$1;
(statearr_24976_24997[(2)] = inst_24936);

(statearr_24976_24997[(1)] = (5));


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
});})(c__23644__auto___24982,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23549__auto__,c__23644__auto___24982,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23550__auto__ = null;
var cljs$core$async$state_machine__23550__auto____0 = (function (){
var statearr_24977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24977[(0)] = cljs$core$async$state_machine__23550__auto__);

(statearr_24977[(1)] = (1));

return statearr_24977;
});
var cljs$core$async$state_machine__23550__auto____1 = (function (state_24954){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_24954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e24978){if((e24978 instanceof Object)){
var ex__23553__auto__ = e24978;
var statearr_24979_24998 = state_24954;
(statearr_24979_24998[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24999 = state_24954;
state_24954 = G__24999;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$state_machine__23550__auto__ = function(state_24954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23550__auto____1.call(this,state_24954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23550__auto____0;
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23550__auto____1;
return cljs$core$async$state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto___24982,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23646__auto__ = (function (){var statearr_24980 = f__23645__auto__.call(null);
(statearr_24980[(6)] = c__23644__auto___24982);

return statearr_24980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto___24982,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__25002 = arguments.length;
switch (G__25002) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23644__auto___25056 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto___25056,out){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto___25056,out){
return (function (state_25034){
var state_val_25035 = (state_25034[(1)]);
if((state_val_25035 === (7))){
var inst_25013 = (state_25034[(7)]);
var inst_25014 = (state_25034[(8)]);
var inst_25013__$1 = (state_25034[(2)]);
var inst_25014__$1 = cljs.core.nth.call(null,inst_25013__$1,(0),null);
var inst_25015 = cljs.core.nth.call(null,inst_25013__$1,(1),null);
var inst_25016 = (inst_25014__$1 == null);
var state_25034__$1 = (function (){var statearr_25036 = state_25034;
(statearr_25036[(7)] = inst_25013__$1);

(statearr_25036[(8)] = inst_25014__$1);

(statearr_25036[(9)] = inst_25015);

return statearr_25036;
})();
if(cljs.core.truth_(inst_25016)){
var statearr_25037_25057 = state_25034__$1;
(statearr_25037_25057[(1)] = (8));

} else {
var statearr_25038_25058 = state_25034__$1;
(statearr_25038_25058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (1))){
var inst_25003 = cljs.core.vec.call(null,chs);
var inst_25004 = inst_25003;
var state_25034__$1 = (function (){var statearr_25039 = state_25034;
(statearr_25039[(10)] = inst_25004);

return statearr_25039;
})();
var statearr_25040_25059 = state_25034__$1;
(statearr_25040_25059[(2)] = null);

(statearr_25040_25059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (4))){
var inst_25004 = (state_25034[(10)]);
var state_25034__$1 = state_25034;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25034__$1,(7),inst_25004);
} else {
if((state_val_25035 === (6))){
var inst_25030 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
var statearr_25041_25060 = state_25034__$1;
(statearr_25041_25060[(2)] = inst_25030);

(statearr_25041_25060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (3))){
var inst_25032 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25034__$1,inst_25032);
} else {
if((state_val_25035 === (2))){
var inst_25004 = (state_25034[(10)]);
var inst_25006 = cljs.core.count.call(null,inst_25004);
var inst_25007 = (inst_25006 > (0));
var state_25034__$1 = state_25034;
if(cljs.core.truth_(inst_25007)){
var statearr_25043_25061 = state_25034__$1;
(statearr_25043_25061[(1)] = (4));

} else {
var statearr_25044_25062 = state_25034__$1;
(statearr_25044_25062[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (11))){
var inst_25004 = (state_25034[(10)]);
var inst_25023 = (state_25034[(2)]);
var tmp25042 = inst_25004;
var inst_25004__$1 = tmp25042;
var state_25034__$1 = (function (){var statearr_25045 = state_25034;
(statearr_25045[(11)] = inst_25023);

(statearr_25045[(10)] = inst_25004__$1);

return statearr_25045;
})();
var statearr_25046_25063 = state_25034__$1;
(statearr_25046_25063[(2)] = null);

(statearr_25046_25063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (9))){
var inst_25014 = (state_25034[(8)]);
var state_25034__$1 = state_25034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25034__$1,(11),out,inst_25014);
} else {
if((state_val_25035 === (5))){
var inst_25028 = cljs.core.async.close_BANG_.call(null,out);
var state_25034__$1 = state_25034;
var statearr_25047_25064 = state_25034__$1;
(statearr_25047_25064[(2)] = inst_25028);

(statearr_25047_25064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (10))){
var inst_25026 = (state_25034[(2)]);
var state_25034__$1 = state_25034;
var statearr_25048_25065 = state_25034__$1;
(statearr_25048_25065[(2)] = inst_25026);

(statearr_25048_25065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25035 === (8))){
var inst_25013 = (state_25034[(7)]);
var inst_25004 = (state_25034[(10)]);
var inst_25014 = (state_25034[(8)]);
var inst_25015 = (state_25034[(9)]);
var inst_25018 = (function (){var cs = inst_25004;
var vec__25009 = inst_25013;
var v = inst_25014;
var c = inst_25015;
return ((function (cs,vec__25009,v,c,inst_25013,inst_25004,inst_25014,inst_25015,state_val_25035,c__23644__auto___25056,out){
return (function (p1__25000_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25000_SHARP_);
});
;})(cs,vec__25009,v,c,inst_25013,inst_25004,inst_25014,inst_25015,state_val_25035,c__23644__auto___25056,out))
})();
var inst_25019 = cljs.core.filterv.call(null,inst_25018,inst_25004);
var inst_25004__$1 = inst_25019;
var state_25034__$1 = (function (){var statearr_25049 = state_25034;
(statearr_25049[(10)] = inst_25004__$1);

return statearr_25049;
})();
var statearr_25050_25066 = state_25034__$1;
(statearr_25050_25066[(2)] = null);

(statearr_25050_25066[(1)] = (2));


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
});})(c__23644__auto___25056,out))
;
return ((function (switch__23549__auto__,c__23644__auto___25056,out){
return (function() {
var cljs$core$async$state_machine__23550__auto__ = null;
var cljs$core$async$state_machine__23550__auto____0 = (function (){
var statearr_25051 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25051[(0)] = cljs$core$async$state_machine__23550__auto__);

(statearr_25051[(1)] = (1));

return statearr_25051;
});
var cljs$core$async$state_machine__23550__auto____1 = (function (state_25034){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_25034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e25052){if((e25052 instanceof Object)){
var ex__23553__auto__ = e25052;
var statearr_25053_25067 = state_25034;
(statearr_25053_25067[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25052;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25068 = state_25034;
state_25034 = G__25068;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$state_machine__23550__auto__ = function(state_25034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23550__auto____1.call(this,state_25034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23550__auto____0;
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23550__auto____1;
return cljs$core$async$state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto___25056,out))
})();
var state__23646__auto__ = (function (){var statearr_25054 = f__23645__auto__.call(null);
(statearr_25054[(6)] = c__23644__auto___25056);

return statearr_25054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto___25056,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__25070 = arguments.length;
switch (G__25070) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23644__auto___25115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto___25115,out){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto___25115,out){
return (function (state_25094){
var state_val_25095 = (state_25094[(1)]);
if((state_val_25095 === (7))){
var inst_25076 = (state_25094[(7)]);
var inst_25076__$1 = (state_25094[(2)]);
var inst_25077 = (inst_25076__$1 == null);
var inst_25078 = cljs.core.not.call(null,inst_25077);
var state_25094__$1 = (function (){var statearr_25096 = state_25094;
(statearr_25096[(7)] = inst_25076__$1);

return statearr_25096;
})();
if(inst_25078){
var statearr_25097_25116 = state_25094__$1;
(statearr_25097_25116[(1)] = (8));

} else {
var statearr_25098_25117 = state_25094__$1;
(statearr_25098_25117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (1))){
var inst_25071 = (0);
var state_25094__$1 = (function (){var statearr_25099 = state_25094;
(statearr_25099[(8)] = inst_25071);

return statearr_25099;
})();
var statearr_25100_25118 = state_25094__$1;
(statearr_25100_25118[(2)] = null);

(statearr_25100_25118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (4))){
var state_25094__$1 = state_25094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25094__$1,(7),ch);
} else {
if((state_val_25095 === (6))){
var inst_25089 = (state_25094[(2)]);
var state_25094__$1 = state_25094;
var statearr_25101_25119 = state_25094__$1;
(statearr_25101_25119[(2)] = inst_25089);

(statearr_25101_25119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (3))){
var inst_25091 = (state_25094[(2)]);
var inst_25092 = cljs.core.async.close_BANG_.call(null,out);
var state_25094__$1 = (function (){var statearr_25102 = state_25094;
(statearr_25102[(9)] = inst_25091);

return statearr_25102;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25094__$1,inst_25092);
} else {
if((state_val_25095 === (2))){
var inst_25071 = (state_25094[(8)]);
var inst_25073 = (inst_25071 < n);
var state_25094__$1 = state_25094;
if(cljs.core.truth_(inst_25073)){
var statearr_25103_25120 = state_25094__$1;
(statearr_25103_25120[(1)] = (4));

} else {
var statearr_25104_25121 = state_25094__$1;
(statearr_25104_25121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (11))){
var inst_25071 = (state_25094[(8)]);
var inst_25081 = (state_25094[(2)]);
var inst_25082 = (inst_25071 + (1));
var inst_25071__$1 = inst_25082;
var state_25094__$1 = (function (){var statearr_25105 = state_25094;
(statearr_25105[(8)] = inst_25071__$1);

(statearr_25105[(10)] = inst_25081);

return statearr_25105;
})();
var statearr_25106_25122 = state_25094__$1;
(statearr_25106_25122[(2)] = null);

(statearr_25106_25122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (9))){
var state_25094__$1 = state_25094;
var statearr_25107_25123 = state_25094__$1;
(statearr_25107_25123[(2)] = null);

(statearr_25107_25123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (5))){
var state_25094__$1 = state_25094;
var statearr_25108_25124 = state_25094__$1;
(statearr_25108_25124[(2)] = null);

(statearr_25108_25124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (10))){
var inst_25086 = (state_25094[(2)]);
var state_25094__$1 = state_25094;
var statearr_25109_25125 = state_25094__$1;
(statearr_25109_25125[(2)] = inst_25086);

(statearr_25109_25125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25095 === (8))){
var inst_25076 = (state_25094[(7)]);
var state_25094__$1 = state_25094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25094__$1,(11),out,inst_25076);
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
});})(c__23644__auto___25115,out))
;
return ((function (switch__23549__auto__,c__23644__auto___25115,out){
return (function() {
var cljs$core$async$state_machine__23550__auto__ = null;
var cljs$core$async$state_machine__23550__auto____0 = (function (){
var statearr_25110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25110[(0)] = cljs$core$async$state_machine__23550__auto__);

(statearr_25110[(1)] = (1));

return statearr_25110;
});
var cljs$core$async$state_machine__23550__auto____1 = (function (state_25094){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_25094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e25111){if((e25111 instanceof Object)){
var ex__23553__auto__ = e25111;
var statearr_25112_25126 = state_25094;
(statearr_25112_25126[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25127 = state_25094;
state_25094 = G__25127;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$state_machine__23550__auto__ = function(state_25094){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23550__auto____1.call(this,state_25094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23550__auto____0;
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23550__auto____1;
return cljs$core$async$state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto___25115,out))
})();
var state__23646__auto__ = (function (){var statearr_25113 = f__23645__auto__.call(null);
(statearr_25113[(6)] = c__23644__auto___25115);

return statearr_25113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto___25115,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25129 = (function (f,ch,meta25130){
this.f = f;
this.ch = ch;
this.meta25130 = meta25130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25131,meta25130__$1){
var self__ = this;
var _25131__$1 = this;
return (new cljs.core.async.t_cljs$core$async25129(self__.f,self__.ch,meta25130__$1));
});

cljs.core.async.t_cljs$core$async25129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25131){
var self__ = this;
var _25131__$1 = this;
return self__.meta25130;
});

cljs.core.async.t_cljs$core$async25129.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25129.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25129.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25132 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25132 = (function (f,ch,meta25130,_,fn1,meta25133){
this.f = f;
this.ch = ch;
this.meta25130 = meta25130;
this._ = _;
this.fn1 = fn1;
this.meta25133 = meta25133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25134,meta25133__$1){
var self__ = this;
var _25134__$1 = this;
return (new cljs.core.async.t_cljs$core$async25132(self__.f,self__.ch,self__.meta25130,self__._,self__.fn1,meta25133__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25134){
var self__ = this;
var _25134__$1 = this;
return self__.meta25133;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25128_SHARP_){
return f1.call(null,(((p1__25128_SHARP_ == null))?null:self__.f.call(null,p1__25128_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25132.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25130","meta25130",519405823,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25129","cljs.core.async/t_cljs$core$async25129",1826092177,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25133","meta25133",-947729399,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25132";

cljs.core.async.t_cljs$core$async25132.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25132");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25132.
 */
cljs.core.async.__GT_t_cljs$core$async25132 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25132(f__$1,ch__$1,meta25130__$1,___$2,fn1__$1,meta25133){
return (new cljs.core.async.t_cljs$core$async25132(f__$1,ch__$1,meta25130__$1,___$2,fn1__$1,meta25133));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25132(self__.f,self__.ch,self__.meta25130,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25129.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25130","meta25130",519405823,null)], null);
});

cljs.core.async.t_cljs$core$async25129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25129";

cljs.core.async.t_cljs$core$async25129.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25129");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25129.
 */
cljs.core.async.__GT_t_cljs$core$async25129 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25129(f__$1,ch__$1,meta25130){
return (new cljs.core.async.t_cljs$core$async25129(f__$1,ch__$1,meta25130));
});

}

return (new cljs.core.async.t_cljs$core$async25129(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25135 = (function (f,ch,meta25136){
this.f = f;
this.ch = ch;
this.meta25136 = meta25136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25137,meta25136__$1){
var self__ = this;
var _25137__$1 = this;
return (new cljs.core.async.t_cljs$core$async25135(self__.f,self__.ch,meta25136__$1));
});

cljs.core.async.t_cljs$core$async25135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25137){
var self__ = this;
var _25137__$1 = this;
return self__.meta25136;
});

cljs.core.async.t_cljs$core$async25135.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25135.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25135.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25135.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25135.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25135.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25136","meta25136",1468676959,null)], null);
});

cljs.core.async.t_cljs$core$async25135.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25135";

cljs.core.async.t_cljs$core$async25135.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25135");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25135.
 */
cljs.core.async.__GT_t_cljs$core$async25135 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25135(f__$1,ch__$1,meta25136){
return (new cljs.core.async.t_cljs$core$async25135(f__$1,ch__$1,meta25136));
});

}

return (new cljs.core.async.t_cljs$core$async25135(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25138 = (function (p,ch,meta25139){
this.p = p;
this.ch = ch;
this.meta25139 = meta25139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25140,meta25139__$1){
var self__ = this;
var _25140__$1 = this;
return (new cljs.core.async.t_cljs$core$async25138(self__.p,self__.ch,meta25139__$1));
});

cljs.core.async.t_cljs$core$async25138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25140){
var self__ = this;
var _25140__$1 = this;
return self__.meta25139;
});

cljs.core.async.t_cljs$core$async25138.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25138.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25138.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25138.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25138.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25138.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25138.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25139","meta25139",1610459269,null)], null);
});

cljs.core.async.t_cljs$core$async25138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25138";

cljs.core.async.t_cljs$core$async25138.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async25138");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25138.
 */
cljs.core.async.__GT_t_cljs$core$async25138 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25138(p__$1,ch__$1,meta25139){
return (new cljs.core.async.t_cljs$core$async25138(p__$1,ch__$1,meta25139));
});

}

return (new cljs.core.async.t_cljs$core$async25138(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__25142 = arguments.length;
switch (G__25142) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23644__auto___25182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto___25182,out){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto___25182,out){
return (function (state_25163){
var state_val_25164 = (state_25163[(1)]);
if((state_val_25164 === (7))){
var inst_25159 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
var statearr_25165_25183 = state_25163__$1;
(statearr_25165_25183[(2)] = inst_25159);

(statearr_25165_25183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (1))){
var state_25163__$1 = state_25163;
var statearr_25166_25184 = state_25163__$1;
(statearr_25166_25184[(2)] = null);

(statearr_25166_25184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (4))){
var inst_25145 = (state_25163[(7)]);
var inst_25145__$1 = (state_25163[(2)]);
var inst_25146 = (inst_25145__$1 == null);
var state_25163__$1 = (function (){var statearr_25167 = state_25163;
(statearr_25167[(7)] = inst_25145__$1);

return statearr_25167;
})();
if(cljs.core.truth_(inst_25146)){
var statearr_25168_25185 = state_25163__$1;
(statearr_25168_25185[(1)] = (5));

} else {
var statearr_25169_25186 = state_25163__$1;
(statearr_25169_25186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (6))){
var inst_25145 = (state_25163[(7)]);
var inst_25150 = p.call(null,inst_25145);
var state_25163__$1 = state_25163;
if(cljs.core.truth_(inst_25150)){
var statearr_25170_25187 = state_25163__$1;
(statearr_25170_25187[(1)] = (8));

} else {
var statearr_25171_25188 = state_25163__$1;
(statearr_25171_25188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (3))){
var inst_25161 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25163__$1,inst_25161);
} else {
if((state_val_25164 === (2))){
var state_25163__$1 = state_25163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25163__$1,(4),ch);
} else {
if((state_val_25164 === (11))){
var inst_25153 = (state_25163[(2)]);
var state_25163__$1 = state_25163;
var statearr_25172_25189 = state_25163__$1;
(statearr_25172_25189[(2)] = inst_25153);

(statearr_25172_25189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (9))){
var state_25163__$1 = state_25163;
var statearr_25173_25190 = state_25163__$1;
(statearr_25173_25190[(2)] = null);

(statearr_25173_25190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (5))){
var inst_25148 = cljs.core.async.close_BANG_.call(null,out);
var state_25163__$1 = state_25163;
var statearr_25174_25191 = state_25163__$1;
(statearr_25174_25191[(2)] = inst_25148);

(statearr_25174_25191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (10))){
var inst_25156 = (state_25163[(2)]);
var state_25163__$1 = (function (){var statearr_25175 = state_25163;
(statearr_25175[(8)] = inst_25156);

return statearr_25175;
})();
var statearr_25176_25192 = state_25163__$1;
(statearr_25176_25192[(2)] = null);

(statearr_25176_25192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25164 === (8))){
var inst_25145 = (state_25163[(7)]);
var state_25163__$1 = state_25163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25163__$1,(11),out,inst_25145);
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
});})(c__23644__auto___25182,out))
;
return ((function (switch__23549__auto__,c__23644__auto___25182,out){
return (function() {
var cljs$core$async$state_machine__23550__auto__ = null;
var cljs$core$async$state_machine__23550__auto____0 = (function (){
var statearr_25177 = [null,null,null,null,null,null,null,null,null];
(statearr_25177[(0)] = cljs$core$async$state_machine__23550__auto__);

(statearr_25177[(1)] = (1));

return statearr_25177;
});
var cljs$core$async$state_machine__23550__auto____1 = (function (state_25163){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_25163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e25178){if((e25178 instanceof Object)){
var ex__23553__auto__ = e25178;
var statearr_25179_25193 = state_25163;
(statearr_25179_25193[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25194 = state_25163;
state_25163 = G__25194;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$state_machine__23550__auto__ = function(state_25163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23550__auto____1.call(this,state_25163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23550__auto____0;
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23550__auto____1;
return cljs$core$async$state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto___25182,out))
})();
var state__23646__auto__ = (function (){var statearr_25180 = f__23645__auto__.call(null);
(statearr_25180[(6)] = c__23644__auto___25182);

return statearr_25180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto___25182,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__25196 = arguments.length;
switch (G__25196) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23644__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto__){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto__){
return (function (state_25259){
var state_val_25260 = (state_25259[(1)]);
if((state_val_25260 === (7))){
var inst_25255 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
var statearr_25261_25299 = state_25259__$1;
(statearr_25261_25299[(2)] = inst_25255);

(statearr_25261_25299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (20))){
var inst_25225 = (state_25259[(7)]);
var inst_25236 = (state_25259[(2)]);
var inst_25237 = cljs.core.next.call(null,inst_25225);
var inst_25211 = inst_25237;
var inst_25212 = null;
var inst_25213 = (0);
var inst_25214 = (0);
var state_25259__$1 = (function (){var statearr_25262 = state_25259;
(statearr_25262[(8)] = inst_25214);

(statearr_25262[(9)] = inst_25236);

(statearr_25262[(10)] = inst_25211);

(statearr_25262[(11)] = inst_25213);

(statearr_25262[(12)] = inst_25212);

return statearr_25262;
})();
var statearr_25263_25300 = state_25259__$1;
(statearr_25263_25300[(2)] = null);

(statearr_25263_25300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (1))){
var state_25259__$1 = state_25259;
var statearr_25264_25301 = state_25259__$1;
(statearr_25264_25301[(2)] = null);

(statearr_25264_25301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (4))){
var inst_25200 = (state_25259[(13)]);
var inst_25200__$1 = (state_25259[(2)]);
var inst_25201 = (inst_25200__$1 == null);
var state_25259__$1 = (function (){var statearr_25265 = state_25259;
(statearr_25265[(13)] = inst_25200__$1);

return statearr_25265;
})();
if(cljs.core.truth_(inst_25201)){
var statearr_25266_25302 = state_25259__$1;
(statearr_25266_25302[(1)] = (5));

} else {
var statearr_25267_25303 = state_25259__$1;
(statearr_25267_25303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (15))){
var state_25259__$1 = state_25259;
var statearr_25271_25304 = state_25259__$1;
(statearr_25271_25304[(2)] = null);

(statearr_25271_25304[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (21))){
var state_25259__$1 = state_25259;
var statearr_25272_25305 = state_25259__$1;
(statearr_25272_25305[(2)] = null);

(statearr_25272_25305[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (13))){
var inst_25214 = (state_25259[(8)]);
var inst_25211 = (state_25259[(10)]);
var inst_25213 = (state_25259[(11)]);
var inst_25212 = (state_25259[(12)]);
var inst_25221 = (state_25259[(2)]);
var inst_25222 = (inst_25214 + (1));
var tmp25268 = inst_25211;
var tmp25269 = inst_25213;
var tmp25270 = inst_25212;
var inst_25211__$1 = tmp25268;
var inst_25212__$1 = tmp25270;
var inst_25213__$1 = tmp25269;
var inst_25214__$1 = inst_25222;
var state_25259__$1 = (function (){var statearr_25273 = state_25259;
(statearr_25273[(8)] = inst_25214__$1);

(statearr_25273[(14)] = inst_25221);

(statearr_25273[(10)] = inst_25211__$1);

(statearr_25273[(11)] = inst_25213__$1);

(statearr_25273[(12)] = inst_25212__$1);

return statearr_25273;
})();
var statearr_25274_25306 = state_25259__$1;
(statearr_25274_25306[(2)] = null);

(statearr_25274_25306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (22))){
var state_25259__$1 = state_25259;
var statearr_25275_25307 = state_25259__$1;
(statearr_25275_25307[(2)] = null);

(statearr_25275_25307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (6))){
var inst_25200 = (state_25259[(13)]);
var inst_25209 = f.call(null,inst_25200);
var inst_25210 = cljs.core.seq.call(null,inst_25209);
var inst_25211 = inst_25210;
var inst_25212 = null;
var inst_25213 = (0);
var inst_25214 = (0);
var state_25259__$1 = (function (){var statearr_25276 = state_25259;
(statearr_25276[(8)] = inst_25214);

(statearr_25276[(10)] = inst_25211);

(statearr_25276[(11)] = inst_25213);

(statearr_25276[(12)] = inst_25212);

return statearr_25276;
})();
var statearr_25277_25308 = state_25259__$1;
(statearr_25277_25308[(2)] = null);

(statearr_25277_25308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (17))){
var inst_25225 = (state_25259[(7)]);
var inst_25229 = cljs.core.chunk_first.call(null,inst_25225);
var inst_25230 = cljs.core.chunk_rest.call(null,inst_25225);
var inst_25231 = cljs.core.count.call(null,inst_25229);
var inst_25211 = inst_25230;
var inst_25212 = inst_25229;
var inst_25213 = inst_25231;
var inst_25214 = (0);
var state_25259__$1 = (function (){var statearr_25278 = state_25259;
(statearr_25278[(8)] = inst_25214);

(statearr_25278[(10)] = inst_25211);

(statearr_25278[(11)] = inst_25213);

(statearr_25278[(12)] = inst_25212);

return statearr_25278;
})();
var statearr_25279_25309 = state_25259__$1;
(statearr_25279_25309[(2)] = null);

(statearr_25279_25309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (3))){
var inst_25257 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25259__$1,inst_25257);
} else {
if((state_val_25260 === (12))){
var inst_25245 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
var statearr_25280_25310 = state_25259__$1;
(statearr_25280_25310[(2)] = inst_25245);

(statearr_25280_25310[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (2))){
var state_25259__$1 = state_25259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25259__$1,(4),in$);
} else {
if((state_val_25260 === (23))){
var inst_25253 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
var statearr_25281_25311 = state_25259__$1;
(statearr_25281_25311[(2)] = inst_25253);

(statearr_25281_25311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (19))){
var inst_25240 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
var statearr_25282_25312 = state_25259__$1;
(statearr_25282_25312[(2)] = inst_25240);

(statearr_25282_25312[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (11))){
var inst_25225 = (state_25259[(7)]);
var inst_25211 = (state_25259[(10)]);
var inst_25225__$1 = cljs.core.seq.call(null,inst_25211);
var state_25259__$1 = (function (){var statearr_25283 = state_25259;
(statearr_25283[(7)] = inst_25225__$1);

return statearr_25283;
})();
if(inst_25225__$1){
var statearr_25284_25313 = state_25259__$1;
(statearr_25284_25313[(1)] = (14));

} else {
var statearr_25285_25314 = state_25259__$1;
(statearr_25285_25314[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (9))){
var inst_25247 = (state_25259[(2)]);
var inst_25248 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25259__$1 = (function (){var statearr_25286 = state_25259;
(statearr_25286[(15)] = inst_25247);

return statearr_25286;
})();
if(cljs.core.truth_(inst_25248)){
var statearr_25287_25315 = state_25259__$1;
(statearr_25287_25315[(1)] = (21));

} else {
var statearr_25288_25316 = state_25259__$1;
(statearr_25288_25316[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (5))){
var inst_25203 = cljs.core.async.close_BANG_.call(null,out);
var state_25259__$1 = state_25259;
var statearr_25289_25317 = state_25259__$1;
(statearr_25289_25317[(2)] = inst_25203);

(statearr_25289_25317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (14))){
var inst_25225 = (state_25259[(7)]);
var inst_25227 = cljs.core.chunked_seq_QMARK_.call(null,inst_25225);
var state_25259__$1 = state_25259;
if(inst_25227){
var statearr_25290_25318 = state_25259__$1;
(statearr_25290_25318[(1)] = (17));

} else {
var statearr_25291_25319 = state_25259__$1;
(statearr_25291_25319[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (16))){
var inst_25243 = (state_25259[(2)]);
var state_25259__$1 = state_25259;
var statearr_25292_25320 = state_25259__$1;
(statearr_25292_25320[(2)] = inst_25243);

(statearr_25292_25320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25260 === (10))){
var inst_25214 = (state_25259[(8)]);
var inst_25212 = (state_25259[(12)]);
var inst_25219 = cljs.core._nth.call(null,inst_25212,inst_25214);
var state_25259__$1 = state_25259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25259__$1,(13),out,inst_25219);
} else {
if((state_val_25260 === (18))){
var inst_25225 = (state_25259[(7)]);
var inst_25234 = cljs.core.first.call(null,inst_25225);
var state_25259__$1 = state_25259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25259__$1,(20),out,inst_25234);
} else {
if((state_val_25260 === (8))){
var inst_25214 = (state_25259[(8)]);
var inst_25213 = (state_25259[(11)]);
var inst_25216 = (inst_25214 < inst_25213);
var inst_25217 = inst_25216;
var state_25259__$1 = state_25259;
if(cljs.core.truth_(inst_25217)){
var statearr_25293_25321 = state_25259__$1;
(statearr_25293_25321[(1)] = (10));

} else {
var statearr_25294_25322 = state_25259__$1;
(statearr_25294_25322[(1)] = (11));

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
});})(c__23644__auto__))
;
return ((function (switch__23549__auto__,c__23644__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23550__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23550__auto____0 = (function (){
var statearr_25295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25295[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23550__auto__);

(statearr_25295[(1)] = (1));

return statearr_25295;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23550__auto____1 = (function (state_25259){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_25259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e25296){if((e25296 instanceof Object)){
var ex__23553__auto__ = e25296;
var statearr_25297_25323 = state_25259;
(statearr_25297_25323[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25324 = state_25259;
state_25259 = G__25324;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23550__auto__ = function(state_25259){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23550__auto____1.call(this,state_25259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23550__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23550__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto__))
})();
var state__23646__auto__ = (function (){var statearr_25298 = f__23645__auto__.call(null);
(statearr_25298[(6)] = c__23644__auto__);

return statearr_25298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto__))
);

return c__23644__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__25326 = arguments.length;
switch (G__25326) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__25329 = arguments.length;
switch (G__25329) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__25332 = arguments.length;
switch (G__25332) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23644__auto___25379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto___25379,out){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto___25379,out){
return (function (state_25356){
var state_val_25357 = (state_25356[(1)]);
if((state_val_25357 === (7))){
var inst_25351 = (state_25356[(2)]);
var state_25356__$1 = state_25356;
var statearr_25358_25380 = state_25356__$1;
(statearr_25358_25380[(2)] = inst_25351);

(statearr_25358_25380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (1))){
var inst_25333 = null;
var state_25356__$1 = (function (){var statearr_25359 = state_25356;
(statearr_25359[(7)] = inst_25333);

return statearr_25359;
})();
var statearr_25360_25381 = state_25356__$1;
(statearr_25360_25381[(2)] = null);

(statearr_25360_25381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (4))){
var inst_25336 = (state_25356[(8)]);
var inst_25336__$1 = (state_25356[(2)]);
var inst_25337 = (inst_25336__$1 == null);
var inst_25338 = cljs.core.not.call(null,inst_25337);
var state_25356__$1 = (function (){var statearr_25361 = state_25356;
(statearr_25361[(8)] = inst_25336__$1);

return statearr_25361;
})();
if(inst_25338){
var statearr_25362_25382 = state_25356__$1;
(statearr_25362_25382[(1)] = (5));

} else {
var statearr_25363_25383 = state_25356__$1;
(statearr_25363_25383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (6))){
var state_25356__$1 = state_25356;
var statearr_25364_25384 = state_25356__$1;
(statearr_25364_25384[(2)] = null);

(statearr_25364_25384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (3))){
var inst_25353 = (state_25356[(2)]);
var inst_25354 = cljs.core.async.close_BANG_.call(null,out);
var state_25356__$1 = (function (){var statearr_25365 = state_25356;
(statearr_25365[(9)] = inst_25353);

return statearr_25365;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25356__$1,inst_25354);
} else {
if((state_val_25357 === (2))){
var state_25356__$1 = state_25356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25356__$1,(4),ch);
} else {
if((state_val_25357 === (11))){
var inst_25336 = (state_25356[(8)]);
var inst_25345 = (state_25356[(2)]);
var inst_25333 = inst_25336;
var state_25356__$1 = (function (){var statearr_25366 = state_25356;
(statearr_25366[(7)] = inst_25333);

(statearr_25366[(10)] = inst_25345);

return statearr_25366;
})();
var statearr_25367_25385 = state_25356__$1;
(statearr_25367_25385[(2)] = null);

(statearr_25367_25385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (9))){
var inst_25336 = (state_25356[(8)]);
var state_25356__$1 = state_25356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25356__$1,(11),out,inst_25336);
} else {
if((state_val_25357 === (5))){
var inst_25333 = (state_25356[(7)]);
var inst_25336 = (state_25356[(8)]);
var inst_25340 = cljs.core._EQ_.call(null,inst_25336,inst_25333);
var state_25356__$1 = state_25356;
if(inst_25340){
var statearr_25369_25386 = state_25356__$1;
(statearr_25369_25386[(1)] = (8));

} else {
var statearr_25370_25387 = state_25356__$1;
(statearr_25370_25387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (10))){
var inst_25348 = (state_25356[(2)]);
var state_25356__$1 = state_25356;
var statearr_25371_25388 = state_25356__$1;
(statearr_25371_25388[(2)] = inst_25348);

(statearr_25371_25388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25357 === (8))){
var inst_25333 = (state_25356[(7)]);
var tmp25368 = inst_25333;
var inst_25333__$1 = tmp25368;
var state_25356__$1 = (function (){var statearr_25372 = state_25356;
(statearr_25372[(7)] = inst_25333__$1);

return statearr_25372;
})();
var statearr_25373_25389 = state_25356__$1;
(statearr_25373_25389[(2)] = null);

(statearr_25373_25389[(1)] = (2));


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
});})(c__23644__auto___25379,out))
;
return ((function (switch__23549__auto__,c__23644__auto___25379,out){
return (function() {
var cljs$core$async$state_machine__23550__auto__ = null;
var cljs$core$async$state_machine__23550__auto____0 = (function (){
var statearr_25374 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25374[(0)] = cljs$core$async$state_machine__23550__auto__);

(statearr_25374[(1)] = (1));

return statearr_25374;
});
var cljs$core$async$state_machine__23550__auto____1 = (function (state_25356){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_25356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e25375){if((e25375 instanceof Object)){
var ex__23553__auto__ = e25375;
var statearr_25376_25390 = state_25356;
(statearr_25376_25390[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25375;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25391 = state_25356;
state_25356 = G__25391;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$state_machine__23550__auto__ = function(state_25356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23550__auto____1.call(this,state_25356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23550__auto____0;
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23550__auto____1;
return cljs$core$async$state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto___25379,out))
})();
var state__23646__auto__ = (function (){var statearr_25377 = f__23645__auto__.call(null);
(statearr_25377[(6)] = c__23644__auto___25379);

return statearr_25377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto___25379,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__25393 = arguments.length;
switch (G__25393) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23644__auto___25459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto___25459,out){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto___25459,out){
return (function (state_25431){
var state_val_25432 = (state_25431[(1)]);
if((state_val_25432 === (7))){
var inst_25427 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
var statearr_25433_25460 = state_25431__$1;
(statearr_25433_25460[(2)] = inst_25427);

(statearr_25433_25460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (1))){
var inst_25394 = (new Array(n));
var inst_25395 = inst_25394;
var inst_25396 = (0);
var state_25431__$1 = (function (){var statearr_25434 = state_25431;
(statearr_25434[(7)] = inst_25396);

(statearr_25434[(8)] = inst_25395);

return statearr_25434;
})();
var statearr_25435_25461 = state_25431__$1;
(statearr_25435_25461[(2)] = null);

(statearr_25435_25461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (4))){
var inst_25399 = (state_25431[(9)]);
var inst_25399__$1 = (state_25431[(2)]);
var inst_25400 = (inst_25399__$1 == null);
var inst_25401 = cljs.core.not.call(null,inst_25400);
var state_25431__$1 = (function (){var statearr_25436 = state_25431;
(statearr_25436[(9)] = inst_25399__$1);

return statearr_25436;
})();
if(inst_25401){
var statearr_25437_25462 = state_25431__$1;
(statearr_25437_25462[(1)] = (5));

} else {
var statearr_25438_25463 = state_25431__$1;
(statearr_25438_25463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (15))){
var inst_25421 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
var statearr_25439_25464 = state_25431__$1;
(statearr_25439_25464[(2)] = inst_25421);

(statearr_25439_25464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (13))){
var state_25431__$1 = state_25431;
var statearr_25440_25465 = state_25431__$1;
(statearr_25440_25465[(2)] = null);

(statearr_25440_25465[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (6))){
var inst_25396 = (state_25431[(7)]);
var inst_25417 = (inst_25396 > (0));
var state_25431__$1 = state_25431;
if(cljs.core.truth_(inst_25417)){
var statearr_25441_25466 = state_25431__$1;
(statearr_25441_25466[(1)] = (12));

} else {
var statearr_25442_25467 = state_25431__$1;
(statearr_25442_25467[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (3))){
var inst_25429 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25431__$1,inst_25429);
} else {
if((state_val_25432 === (12))){
var inst_25395 = (state_25431[(8)]);
var inst_25419 = cljs.core.vec.call(null,inst_25395);
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25431__$1,(15),out,inst_25419);
} else {
if((state_val_25432 === (2))){
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25431__$1,(4),ch);
} else {
if((state_val_25432 === (11))){
var inst_25411 = (state_25431[(2)]);
var inst_25412 = (new Array(n));
var inst_25395 = inst_25412;
var inst_25396 = (0);
var state_25431__$1 = (function (){var statearr_25443 = state_25431;
(statearr_25443[(10)] = inst_25411);

(statearr_25443[(7)] = inst_25396);

(statearr_25443[(8)] = inst_25395);

return statearr_25443;
})();
var statearr_25444_25468 = state_25431__$1;
(statearr_25444_25468[(2)] = null);

(statearr_25444_25468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (9))){
var inst_25395 = (state_25431[(8)]);
var inst_25409 = cljs.core.vec.call(null,inst_25395);
var state_25431__$1 = state_25431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25431__$1,(11),out,inst_25409);
} else {
if((state_val_25432 === (5))){
var inst_25399 = (state_25431[(9)]);
var inst_25396 = (state_25431[(7)]);
var inst_25404 = (state_25431[(11)]);
var inst_25395 = (state_25431[(8)]);
var inst_25403 = (inst_25395[inst_25396] = inst_25399);
var inst_25404__$1 = (inst_25396 + (1));
var inst_25405 = (inst_25404__$1 < n);
var state_25431__$1 = (function (){var statearr_25445 = state_25431;
(statearr_25445[(11)] = inst_25404__$1);

(statearr_25445[(12)] = inst_25403);

return statearr_25445;
})();
if(cljs.core.truth_(inst_25405)){
var statearr_25446_25469 = state_25431__$1;
(statearr_25446_25469[(1)] = (8));

} else {
var statearr_25447_25470 = state_25431__$1;
(statearr_25447_25470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (14))){
var inst_25424 = (state_25431[(2)]);
var inst_25425 = cljs.core.async.close_BANG_.call(null,out);
var state_25431__$1 = (function (){var statearr_25449 = state_25431;
(statearr_25449[(13)] = inst_25424);

return statearr_25449;
})();
var statearr_25450_25471 = state_25431__$1;
(statearr_25450_25471[(2)] = inst_25425);

(statearr_25450_25471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (10))){
var inst_25415 = (state_25431[(2)]);
var state_25431__$1 = state_25431;
var statearr_25451_25472 = state_25431__$1;
(statearr_25451_25472[(2)] = inst_25415);

(statearr_25451_25472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25432 === (8))){
var inst_25404 = (state_25431[(11)]);
var inst_25395 = (state_25431[(8)]);
var tmp25448 = inst_25395;
var inst_25395__$1 = tmp25448;
var inst_25396 = inst_25404;
var state_25431__$1 = (function (){var statearr_25452 = state_25431;
(statearr_25452[(7)] = inst_25396);

(statearr_25452[(8)] = inst_25395__$1);

return statearr_25452;
})();
var statearr_25453_25473 = state_25431__$1;
(statearr_25453_25473[(2)] = null);

(statearr_25453_25473[(1)] = (2));


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
});})(c__23644__auto___25459,out))
;
return ((function (switch__23549__auto__,c__23644__auto___25459,out){
return (function() {
var cljs$core$async$state_machine__23550__auto__ = null;
var cljs$core$async$state_machine__23550__auto____0 = (function (){
var statearr_25454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25454[(0)] = cljs$core$async$state_machine__23550__auto__);

(statearr_25454[(1)] = (1));

return statearr_25454;
});
var cljs$core$async$state_machine__23550__auto____1 = (function (state_25431){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_25431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e25455){if((e25455 instanceof Object)){
var ex__23553__auto__ = e25455;
var statearr_25456_25474 = state_25431;
(statearr_25456_25474[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25475 = state_25431;
state_25431 = G__25475;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$state_machine__23550__auto__ = function(state_25431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23550__auto____1.call(this,state_25431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23550__auto____0;
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23550__auto____1;
return cljs$core$async$state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto___25459,out))
})();
var state__23646__auto__ = (function (){var statearr_25457 = f__23645__auto__.call(null);
(statearr_25457[(6)] = c__23644__auto___25459);

return statearr_25457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto___25459,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__25477 = arguments.length;
switch (G__25477) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23644__auto___25547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23644__auto___25547,out){
return (function (){
var f__23645__auto__ = (function (){var switch__23549__auto__ = ((function (c__23644__auto___25547,out){
return (function (state_25519){
var state_val_25520 = (state_25519[(1)]);
if((state_val_25520 === (7))){
var inst_25515 = (state_25519[(2)]);
var state_25519__$1 = state_25519;
var statearr_25521_25548 = state_25519__$1;
(statearr_25521_25548[(2)] = inst_25515);

(statearr_25521_25548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25520 === (1))){
var inst_25478 = [];
var inst_25479 = inst_25478;
var inst_25480 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25519__$1 = (function (){var statearr_25522 = state_25519;
(statearr_25522[(7)] = inst_25480);

(statearr_25522[(8)] = inst_25479);

return statearr_25522;
})();
var statearr_25523_25549 = state_25519__$1;
(statearr_25523_25549[(2)] = null);

(statearr_25523_25549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25520 === (4))){
var inst_25483 = (state_25519[(9)]);
var inst_25483__$1 = (state_25519[(2)]);
var inst_25484 = (inst_25483__$1 == null);
var inst_25485 = cljs.core.not.call(null,inst_25484);
var state_25519__$1 = (function (){var statearr_25524 = state_25519;
(statearr_25524[(9)] = inst_25483__$1);

return statearr_25524;
})();
if(inst_25485){
var statearr_25525_25550 = state_25519__$1;
(statearr_25525_25550[(1)] = (5));

} else {
var statearr_25526_25551 = state_25519__$1;
(statearr_25526_25551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25520 === (15))){
var inst_25509 = (state_25519[(2)]);
var state_25519__$1 = state_25519;
var statearr_25527_25552 = state_25519__$1;
(statearr_25527_25552[(2)] = inst_25509);

(statearr_25527_25552[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25520 === (13))){
var state_25519__$1 = state_25519;
var statearr_25528_25553 = state_25519__$1;
(statearr_25528_25553[(2)] = null);

(statearr_25528_25553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25520 === (6))){
var inst_25479 = (state_25519[(8)]);
var inst_25504 = inst_25479.length;
var inst_25505 = (inst_25504 > (0));
var state_25519__$1 = state_25519;
if(cljs.core.truth_(inst_25505)){
var statearr_25529_25554 = state_25519__$1;
(statearr_25529_25554[(1)] = (12));

} else {
var statearr_25530_25555 = state_25519__$1;
(statearr_25530_25555[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25520 === (3))){
var inst_25517 = (state_25519[(2)]);
var state_25519__$1 = state_25519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25519__$1,inst_25517);
} else {
if((state_val_25520 === (12))){
var inst_25479 = (state_25519[(8)]);
var inst_25507 = cljs.core.vec.call(null,inst_25479);
var state_25519__$1 = state_25519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25519__$1,(15),out,inst_25507);
} else {
if((state_val_25520 === (2))){
var state_25519__$1 = state_25519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25519__$1,(4),ch);
} else {
if((state_val_25520 === (11))){
var inst_25483 = (state_25519[(9)]);
var inst_25487 = (state_25519[(10)]);
var inst_25497 = (state_25519[(2)]);
var inst_25498 = [];
var inst_25499 = inst_25498.push(inst_25483);
var inst_25479 = inst_25498;
var inst_25480 = inst_25487;
var state_25519__$1 = (function (){var statearr_25531 = state_25519;
(statearr_25531[(11)] = inst_25499);

(statearr_25531[(7)] = inst_25480);

(statearr_25531[(8)] = inst_25479);

(statearr_25531[(12)] = inst_25497);

return statearr_25531;
})();
var statearr_25532_25556 = state_25519__$1;
(statearr_25532_25556[(2)] = null);

(statearr_25532_25556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25520 === (9))){
var inst_25479 = (state_25519[(8)]);
var inst_25495 = cljs.core.vec.call(null,inst_25479);
var state_25519__$1 = state_25519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25519__$1,(11),out,inst_25495);
} else {
if((state_val_25520 === (5))){
var inst_25480 = (state_25519[(7)]);
var inst_25483 = (state_25519[(9)]);
var inst_25487 = (state_25519[(10)]);
var inst_25487__$1 = f.call(null,inst_25483);
var inst_25488 = cljs.core._EQ_.call(null,inst_25487__$1,inst_25480);
var inst_25489 = cljs.core.keyword_identical_QMARK_.call(null,inst_25480,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25490 = ((inst_25488) || (inst_25489));
var state_25519__$1 = (function (){var statearr_25533 = state_25519;
(statearr_25533[(10)] = inst_25487__$1);

return statearr_25533;
})();
if(cljs.core.truth_(inst_25490)){
var statearr_25534_25557 = state_25519__$1;
(statearr_25534_25557[(1)] = (8));

} else {
var statearr_25535_25558 = state_25519__$1;
(statearr_25535_25558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25520 === (14))){
var inst_25512 = (state_25519[(2)]);
var inst_25513 = cljs.core.async.close_BANG_.call(null,out);
var state_25519__$1 = (function (){var statearr_25537 = state_25519;
(statearr_25537[(13)] = inst_25512);

return statearr_25537;
})();
var statearr_25538_25559 = state_25519__$1;
(statearr_25538_25559[(2)] = inst_25513);

(statearr_25538_25559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25520 === (10))){
var inst_25502 = (state_25519[(2)]);
var state_25519__$1 = state_25519;
var statearr_25539_25560 = state_25519__$1;
(statearr_25539_25560[(2)] = inst_25502);

(statearr_25539_25560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25520 === (8))){
var inst_25479 = (state_25519[(8)]);
var inst_25483 = (state_25519[(9)]);
var inst_25487 = (state_25519[(10)]);
var inst_25492 = inst_25479.push(inst_25483);
var tmp25536 = inst_25479;
var inst_25479__$1 = tmp25536;
var inst_25480 = inst_25487;
var state_25519__$1 = (function (){var statearr_25540 = state_25519;
(statearr_25540[(7)] = inst_25480);

(statearr_25540[(8)] = inst_25479__$1);

(statearr_25540[(14)] = inst_25492);

return statearr_25540;
})();
var statearr_25541_25561 = state_25519__$1;
(statearr_25541_25561[(2)] = null);

(statearr_25541_25561[(1)] = (2));


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
});})(c__23644__auto___25547,out))
;
return ((function (switch__23549__auto__,c__23644__auto___25547,out){
return (function() {
var cljs$core$async$state_machine__23550__auto__ = null;
var cljs$core$async$state_machine__23550__auto____0 = (function (){
var statearr_25542 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25542[(0)] = cljs$core$async$state_machine__23550__auto__);

(statearr_25542[(1)] = (1));

return statearr_25542;
});
var cljs$core$async$state_machine__23550__auto____1 = (function (state_25519){
while(true){
var ret_value__23551__auto__ = (function (){try{while(true){
var result__23552__auto__ = switch__23549__auto__.call(null,state_25519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23552__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23552__auto__;
}
break;
}
}catch (e25543){if((e25543 instanceof Object)){
var ex__23553__auto__ = e25543;
var statearr_25544_25562 = state_25519;
(statearr_25544_25562[(5)] = ex__23553__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23551__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25563 = state_25519;
state_25519 = G__25563;
continue;
} else {
return ret_value__23551__auto__;
}
break;
}
});
cljs$core$async$state_machine__23550__auto__ = function(state_25519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23550__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23550__auto____1.call(this,state_25519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23550__auto____0;
cljs$core$async$state_machine__23550__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23550__auto____1;
return cljs$core$async$state_machine__23550__auto__;
})()
;})(switch__23549__auto__,c__23644__auto___25547,out))
})();
var state__23646__auto__ = (function (){var statearr_25545 = f__23645__auto__.call(null);
(statearr_25545[(6)] = c__23644__auto___25547);

return statearr_25545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23646__auto__);
});})(c__23644__auto___25547,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
