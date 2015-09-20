// Compiled by ClojureScript 1.7.134 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__7618){
var map__7625 = p__7618;
var map__7625__$1 = ((((!((map__7625 == null)))?((((map__7625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7625):map__7625);
var replacement_transformers = cljs.core.get.call(null,map__7625__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__7625__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__7625,map__7625__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_7627 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__7628 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_7627,map__7625,map__7625__$1,replacement_transformers,custom_transformers){
return (function (p__7629,transformer){
var vec__7630 = p__7629;
var text = cljs.core.nth.call(null,vec__7630,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__7630,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_7627,map__7625,map__7625__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__219__auto__ = replacement_transformers;
if(cljs.core.truth_(or__219__auto__)){
return or__219__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__7628,(0),null);
var new_state = cljs.core.nth.call(null,vec__7628,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_7627;
}});
;})(map__7625,map__7625__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__1284__auto__ = [];
var len__1277__auto___7633 = arguments.length;
var i__1278__auto___7634 = (0);
while(true){
if((i__1278__auto___7634 < len__1277__auto___7633)){
args__1284__auto__.push((arguments[i__1278__auto___7634]));

var G__7635 = (i__1278__auto___7634 + (1));
i__1278__auto___7634 = G__7635;
continue;
} else {
}
break;
}

var argseq__1285__auto__ = ((((1) < args__1284__auto__.length))?(new cljs.core.IndexedSeq(args__1284__auto__.slice((1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1285__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq7631){
var G__7632 = cljs.core.first.call(null,seq7631);
var seq7631__$1 = cljs.core.next.call(null,seq7631);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__7632,seq7631__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__7640_7644 = cljs.core.seq.call(null,lines);
var chunk__7641_7645 = null;
var count__7642_7646 = (0);
var i__7643_7647 = (0);
while(true){
if((i__7643_7647 < count__7642_7646)){
var line_7648 = cljs.core._nth.call(null,chunk__7641_7645,i__7643_7647);
markdown.transformers.parse_reference_link.call(null,line_7648,references);

var G__7649 = seq__7640_7644;
var G__7650 = chunk__7641_7645;
var G__7651 = count__7642_7646;
var G__7652 = (i__7643_7647 + (1));
seq__7640_7644 = G__7649;
chunk__7641_7645 = G__7650;
count__7642_7646 = G__7651;
i__7643_7647 = G__7652;
continue;
} else {
var temp__4425__auto___7653 = cljs.core.seq.call(null,seq__7640_7644);
if(temp__4425__auto___7653){
var seq__7640_7654__$1 = temp__4425__auto___7653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7640_7654__$1)){
var c__1022__auto___7655 = cljs.core.chunk_first.call(null,seq__7640_7654__$1);
var G__7656 = cljs.core.chunk_rest.call(null,seq__7640_7654__$1);
var G__7657 = c__1022__auto___7655;
var G__7658 = cljs.core.count.call(null,c__1022__auto___7655);
var G__7659 = (0);
seq__7640_7644 = G__7656;
chunk__7641_7645 = G__7657;
count__7642_7646 = G__7658;
i__7643_7647 = G__7659;
continue;
} else {
var line_7660 = cljs.core.first.call(null,seq__7640_7654__$1);
markdown.transformers.parse_reference_link.call(null,line_7660,references);

var G__7661 = cljs.core.next.call(null,seq__7640_7654__$1);
var G__7662 = null;
var G__7663 = (0);
var G__7664 = (0);
seq__7640_7644 = G__7661;
chunk__7641_7645 = G__7662;
count__7642_7646 = G__7663;
i__7643_7647 = G__7664;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__1284__auto__ = [];
var len__1277__auto___7673 = arguments.length;
var i__1278__auto___7674 = (0);
while(true){
if((i__1278__auto___7674 < len__1277__auto___7673)){
args__1284__auto__.push((arguments[i__1278__auto___7674]));

var G__7675 = (i__1278__auto___7674 + (1));
i__1278__auto___7674 = G__7675;
continue;
} else {
}
break;
}

var argseq__1285__auto__ = ((((1) < args__1284__auto__.length))?(new cljs.core.IndexedSeq(args__1284__auto__.slice((1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__1285__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
var _STAR_substring_STAR_7667 = markdown.transformers._STAR_substring_STAR_;
var formatter7668 = markdown.transformers.formatter;
markdown.transformers._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_7667,formatter7668){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_7667,formatter7668))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = text.split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__7670_7676 = lines;
var vec__7671_7677 = G__7670_7676;
var line_7678 = cljs.core.nth.call(null,vec__7671_7677,(0),null);
var more_7679 = cljs.core.nthnext.call(null,vec__7671_7677,(1));
var state_7680 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__7670_7681__$1 = G__7670_7676;
var state_7682__$1 = state_7680;
while(true){
var vec__7672_7683 = G__7670_7681__$1;
var line_7684__$1 = cljs.core.nth.call(null,vec__7672_7683,(0),null);
var more_7685__$1 = cljs.core.nthnext.call(null,vec__7672_7683,(1));
var state_7686__$2 = state_7682__$1;
var state_7687__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_7686__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_7686__$2),cljs.core.first.call(null,more_7685__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_7686__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_7686__$2);
if(cljs.core.truth_(cljs.core.first.call(null,more_7685__$1))){
var G__7688 = more_7685__$1;
var G__7689 = cljs.core.assoc.call(null,transformer.call(null,html,line_7684__$1,cljs.core.first.call(null,more_7685__$1),state_7687__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_7684__$1));
G__7670_7681__$1 = G__7688;
state_7682__$1 = G__7689;
continue;
} else {
transformer.call(null,html,line_7684__$1,"",cljs.core.assoc.call(null,state_7687__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return html.toString();
}finally {markdown.transformers.formatter = formatter7668;

markdown.transformers._STAR_substring_STAR_ = _STAR_substring_STAR_7667;
}});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq7665){
var G__7666 = cljs.core.first.call(null,seq7665);
var seq7665__$1 = cljs.core.next.call(null,seq7665);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__7666,seq7665__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__1284__auto__ = [];
var len__1277__auto___7691 = arguments.length;
var i__1278__auto___7692 = (0);
while(true){
if((i__1278__auto___7692 < len__1277__auto___7691)){
args__1284__auto__.push((arguments[i__1278__auto___7692]));

var G__7693 = (i__1278__auto___7692 + (1));
i__1278__auto___7692 = G__7693;
continue;
} else {
}
break;
}

var argseq__1285__auto__ = ((((0) < args__1284__auto__.length))?(new cljs.core.IndexedSeq(args__1284__auto__.slice((0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__1285__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq7690){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7690));
});

//# sourceMappingURL=core.js.map