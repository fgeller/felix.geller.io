// Compiled by ClojureScript 1.7.134 {}
goog.provide('cljs_present.code');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.js');
goog.require('goog.ui.Button');
goog.require('goog.events.EventType');
goog.require('goog.events');
goog.require('module$resources$public$js$libs$codemirror_5_5$mode$clojure$clojure');
goog.require('module$resources$public$js$libs$codemirror_5_5$lib$codemirror');
window.cljs.user = {};
cljs_present.code.st = cljs.js.empty_state.call(null);
cljs_present.code.cb = (function cljs_present$code$cb(output){
return (function (p__8112){
var map__8113 = p__8112;
var map__8113__$1 = ((((!((map__8113 == null)))?((((map__8113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8113):map__8113);
var value = cljs.core.get.call(null,map__8113__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.call(null,map__8113__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.not.call(null,error)){
return output.value = [cljs.core.str(value)].join('');
} else {
output.value = "ERROR";

return console.error(error);
}
});
});
cljs_present.code.cm_opts = {"lineNumbers": true, "mode": "clojure"};
cljs_present.code.setup_listeners = (function cljs_present$code$setup_listeners(slide_count){
var slides = (function (){var iter__991__auto__ = (function cljs_present$code$setup_listeners_$_iter__8123(s__8124){
return (new cljs.core.LazySeq(null,(function (){
var s__8124__$1 = s__8124;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__8124__$1);
if(temp__4425__auto__){
var s__8124__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__8124__$2)){
var c__989__auto__ = cljs.core.chunk_first.call(null,s__8124__$2);
var size__990__auto__ = cljs.core.count.call(null,c__989__auto__);
var b__8126 = cljs.core.chunk_buffer.call(null,size__990__auto__);
if((function (){var i__8125 = (0);
while(true){
if((i__8125 < size__990__auto__)){
var idx = cljs.core._nth.call(null,c__989__auto__,i__8125);
cljs.core.chunk_append.call(null,b__8126,goog.dom.getElement([cljs.core.str("slide-"),cljs.core.str(idx)].join('')));

var G__8131 = (i__8125 + (1));
i__8125 = G__8131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8126),cljs_present$code$setup_listeners_$_iter__8123.call(null,cljs.core.chunk_rest.call(null,s__8124__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8126),null);
}
} else {
var idx = cljs.core.first.call(null,s__8124__$2);
return cljs.core.cons.call(null,goog.dom.getElement([cljs.core.str("slide-"),cljs.core.str(idx)].join('')),cljs_present$code$setup_listeners_$_iter__8123.call(null,cljs.core.rest.call(null,s__8124__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__991__auto__.call(null,cljs.core.range.call(null,slide_count));
})();
var seq__8127 = cljs.core.seq.call(null,slides);
var chunk__8128 = null;
var count__8129 = (0);
var i__8130 = (0);
while(true){
if((i__8130 < count__8129)){
var slide = cljs.core._nth.call(null,chunk__8128,i__8130);
var input_8132 = goog.dom.getElementByClass("cljs-code",slide);
var run_8133 = goog.dom.getElementByClass("cljs-run",slide);
var output_8134 = goog.dom.getElementByClass("cljs-result",slide);
if(cljs.core.truth_((function (){var and__207__auto__ = input_8132;
if(cljs.core.truth_(and__207__auto__)){
var and__207__auto____$1 = run_8133;
if(cljs.core.truth_(and__207__auto____$1)){
return output_8134;
} else {
return and__207__auto____$1;
}
} else {
return and__207__auto__;
}
})())){
var cm_8135 = module$resources$public$js$libs$codemirror_5_5$lib$codemirror.fromTextArea(input_8132,cljs_present.code.cm_opts);
(new goog.ui.Button("Run")).render(run_8133);

goog.events.listen(run_8133,goog.events.EventType.CLICK,((function (seq__8127,chunk__8128,count__8129,i__8130,cm_8135,input_8132,run_8133,output_8134,slide,slides){
return (function (e){
return cljs.js.eval_str.call(null,cljs_present.code.st,cm_8135.getValue(),new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval], null),cljs_present.code.cb.call(null,output_8134));
});})(seq__8127,chunk__8128,count__8129,i__8130,cm_8135,input_8132,run_8133,output_8134,slide,slides))
);
} else {
}

var G__8136 = seq__8127;
var G__8137 = chunk__8128;
var G__8138 = count__8129;
var G__8139 = (i__8130 + (1));
seq__8127 = G__8136;
chunk__8128 = G__8137;
count__8129 = G__8138;
i__8130 = G__8139;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8127);
if(temp__4425__auto__){
var seq__8127__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8127__$1)){
var c__1022__auto__ = cljs.core.chunk_first.call(null,seq__8127__$1);
var G__8140 = cljs.core.chunk_rest.call(null,seq__8127__$1);
var G__8141 = c__1022__auto__;
var G__8142 = cljs.core.count.call(null,c__1022__auto__);
var G__8143 = (0);
seq__8127 = G__8140;
chunk__8128 = G__8141;
count__8129 = G__8142;
i__8130 = G__8143;
continue;
} else {
var slide = cljs.core.first.call(null,seq__8127__$1);
var input_8144 = goog.dom.getElementByClass("cljs-code",slide);
var run_8145 = goog.dom.getElementByClass("cljs-run",slide);
var output_8146 = goog.dom.getElementByClass("cljs-result",slide);
if(cljs.core.truth_((function (){var and__207__auto__ = input_8144;
if(cljs.core.truth_(and__207__auto__)){
var and__207__auto____$1 = run_8145;
if(cljs.core.truth_(and__207__auto____$1)){
return output_8146;
} else {
return and__207__auto____$1;
}
} else {
return and__207__auto__;
}
})())){
var cm_8147 = module$resources$public$js$libs$codemirror_5_5$lib$codemirror.fromTextArea(input_8144,cljs_present.code.cm_opts);
(new goog.ui.Button("Run")).render(run_8145);

goog.events.listen(run_8145,goog.events.EventType.CLICK,((function (seq__8127,chunk__8128,count__8129,i__8130,cm_8147,input_8144,run_8145,output_8146,slide,seq__8127__$1,temp__4425__auto__,slides){
return (function (e){
return cljs.js.eval_str.call(null,cljs_present.code.st,cm_8147.getValue(),new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval], null),cljs_present.code.cb.call(null,output_8146));
});})(seq__8127,chunk__8128,count__8129,i__8130,cm_8147,input_8144,run_8145,output_8146,slide,seq__8127__$1,temp__4425__auto__,slides))
);
} else {
}

var G__8148 = cljs.core.next.call(null,seq__8127__$1);
var G__8149 = null;
var G__8150 = (0);
var G__8151 = (0);
seq__8127 = G__8148;
chunk__8128 = G__8149;
count__8129 = G__8150;
i__8130 = G__8151;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_present.code.setup = (function cljs_present$code$setup(slide_count){
return cljs_present.code.setup_listeners.call(null,slide_count);
});

//# sourceMappingURL=code.js.map