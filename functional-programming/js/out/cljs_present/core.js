// Compiled by ClojureScript 1.7.134 {}
goog.provide('cljs_present.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('markdown.core');
goog.require('goog.net.XhrIo');
goog.require('goog.events.KeyHandler');
goog.require('goog.events');
goog.require('cljs_present.code');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
cljs_present.core.idx = cljs.core.atom.call(null,(0));
cljs_present.core.slide_pre = (function cljs_present$core$slide_pre(idx){
return [cljs.core.str("<div id=\"slide-"),cljs.core.str(idx),cljs.core.str("\" class=\"slide\"><div class=\"content\">")].join('');
});
cljs_present.core.slide_post = (function cljs_present$core$slide_post(){
return "</div></div>";
});
cljs_present.core.slides__GT_html = (function cljs_present$core$slides__GT_html(slides){
var html = cljs.core.map_indexed.call(null,(function (idx,s){
return [cljs.core.str(cljs_present.core.slide_pre.call(null,idx)),cljs.core.str(markdown.core.md__GT_html.call(null,s)),cljs.core.str(cljs_present.core.slide_post.call(null))].join('');
}),slides);
return clojure.string.join.call(null,html);
});
cljs_present.core.next_slide = (function cljs_present$core$next_slide(slide_count){
return (function (e){
var active = document.activeElement;
var slide = goog.dom.getElement([cljs.core.str("slide-"),cljs.core.str(cljs.core.deref.call(null,cljs_present.core.idx))].join(''));
var input = goog.dom.getElementByClass("CodeMirror",slide);
if((cljs.core.not.call(null,(function (){var and__207__auto__ = active;
if(cljs.core.truth_(and__207__auto__)){
return input;
} else {
return and__207__auto__;
}
})())) || (cljs.core.not.call(null,goog.dom.contains(input,active)))){
var diff = (function (){var G__8155 = e.keyCode;
switch (G__8155) {
case (37):
return (-1);

break;
case (39):
return (1);

break;
default:
return (0);

}
})();
var next_idx = cljs.core.mod.call(null,(cljs.core.deref.call(null,cljs_present.core.idx) + diff),slide_count);
var next = goog.dom.getElement([cljs.core.str("slide-"),cljs.core.str(next_idx)].join(''));
goog.dom.setProperties(slide,{"class": "hidden slide"});

goog.dom.setProperties(next,{"class": "current slide"});

return cljs.core.reset_BANG_.call(null,cljs_present.core.idx,next_idx);
} else {
return null;
}
});
});
cljs_present.core.hide_all_slides = (function cljs_present$core$hide_all_slides(count){
var seq__8161 = cljs.core.seq.call(null,cljs.core.range.call(null,count));
var chunk__8162 = null;
var count__8163 = (0);
var i__8164 = (0);
while(true){
if((i__8164 < count__8163)){
var i = cljs.core._nth.call(null,chunk__8162,i__8164);
var slide_8165 = goog.dom.getElement([cljs.core.str("slide-"),cljs.core.str(i)].join(''));
goog.dom.setProperties(slide_8165,{"class": "hidden slide"});

var G__8166 = seq__8161;
var G__8167 = chunk__8162;
var G__8168 = count__8163;
var G__8169 = (i__8164 + (1));
seq__8161 = G__8166;
chunk__8162 = G__8167;
count__8163 = G__8168;
i__8164 = G__8169;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8161);
if(temp__4425__auto__){
var seq__8161__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8161__$1)){
var c__1022__auto__ = cljs.core.chunk_first.call(null,seq__8161__$1);
var G__8170 = cljs.core.chunk_rest.call(null,seq__8161__$1);
var G__8171 = c__1022__auto__;
var G__8172 = cljs.core.count.call(null,c__1022__auto__);
var G__8173 = (0);
seq__8161 = G__8170;
chunk__8162 = G__8171;
count__8163 = G__8172;
i__8164 = G__8173;
continue;
} else {
var i = cljs.core.first.call(null,seq__8161__$1);
var slide_8174 = goog.dom.getElement([cljs.core.str("slide-"),cljs.core.str(i)].join(''));
goog.dom.setProperties(slide_8174,{"class": "hidden slide"});

var G__8175 = cljs.core.next.call(null,seq__8161__$1);
var G__8176 = null;
var G__8177 = (0);
var G__8178 = (0);
seq__8161 = G__8175;
chunk__8162 = G__8176;
count__8163 = G__8177;
i__8164 = G__8178;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs_present.core.setup_listener = (function cljs_present$core$setup_listener(slide_count){
var doc_kh = (new goog.events.KeyHandler(document));
return goog.events.listen(doc_kh,"key",cljs_present.core.next_slide.call(null,slide_count));
});
cljs_present.core.create_slides = (function cljs_present$core$create_slides(slides){
var slides__$1 = clojure.string.split.call(null,slides,/%/);
var html = cljs_present.core.slides__GT_html.call(null,slides__$1);
var body = document.body;
body.insertAdjacentHTML("afterbegin",html);

cljs_present.code.setup.call(null,cljs.core.count.call(null,slides__$1));

cljs_present.core.hide_all_slides.call(null,cljs.core.count.call(null,slides__$1));

cljs_present.core.setup_listener.call(null,cljs.core.count.call(null,slides__$1));

return goog.dom.setProperties(goog.dom.getElement("slide-0"),{"class": "current slide"});
});
cljs_present.core.load_slides = (function cljs_present$core$load_slides(uri){
return goog.net.XhrIo.send(uri,(function (e){
var result = e.target.getResponseText();
return cljs_present.core.create_slides.call(null,result);
}));
});
cljs_present.core.load_slides.call(null,"slides.md");

//# sourceMappingURL=core.js.map