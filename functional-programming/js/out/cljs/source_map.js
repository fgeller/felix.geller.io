// Compiled by ClojureScript 1.7.134 {}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.call(null,(function (m,p__4792){
var vec__4793 = p__4792;
var i = cljs.core.nth.call(null,vec__4793,(0),null);
var v = cljs.core.nth.call(null,vec__4793,(1),null);
return cljs.core.assoc.call(null,m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources.call(null,sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare.call(null,sources__$1.call(null,a),sources__$1.call(null,b));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__4795 = seg;
var gcol = cljs.core.nth.call(null,vec__4795,(0),null);
var source = cljs.core.nth.call(null,vec__4795,(1),null);
var line = cljs.core.nth.call(null,vec__4795,(2),null);
var col = cljs.core.nth.call(null,vec__4795,(3),null);
var name = cljs.core.nth.call(null,vec__4795,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,seg));
if(temp__4425__auto__){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__4798 = seg;
var gcol = cljs.core.nth.call(null,vec__4798,(0),null);
var source = cljs.core.nth.call(null,vec__4798,(1),null);
var line = cljs.core.nth.call(null,vec__4798,(2),null);
var col = cljs.core.nth.call(null,vec__4798,(3),null);
var name = cljs.core.nth.call(null,vec__4798,(4),null);
var vec__4799 = relseg;
var rgcol = cljs.core.nth.call(null,vec__4799,(0),null);
var rsource = cljs.core.nth.call(null,vec__4799,(1),null);
var rline = cljs.core.nth.call(null,vec__4799,(2),null);
var rcol = cljs.core.nth.call(null,vec__4799,(3),null);
var rname = cljs.core.nth.call(null,vec__4799,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__219__auto__ = source;
if(or__219__auto__){
return or__219__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__219__auto__ = line;
if(or__219__auto__){
return or__219__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__219__auto__ = col;
if(or__219__auto__){
return or__219__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__219__auto__ = name;
if(or__219__auto__){
return or__219__auto__;
} else {
return (0);
}
})() + rname)], null);
if(name){
return cljs.core.with_meta.call(null,nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__4802 = segmap;
var map__4802__$1 = ((((!((map__4802 == null)))?((((map__4802.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4802.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4802):map__4802);
var gcol = cljs.core.get.call(null,map__4802__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4802__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4802__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4802__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4802__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = ((name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.call(null,((function (map__4802,map__4802__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.call(null,((function (map__4802,map__4802__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.call(null,m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.call(null,((function (map__4802,map__4802__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.call(null,v,d__$1);
});})(map__4802,map__4802__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__4802,map__4802__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});})(map__4802,map__4802__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args4804 = [];
var len__1277__auto___4808 = arguments.length;
var i__1278__auto___4809 = (0);
while(true){
if((i__1278__auto___4809 < len__1277__auto___4808)){
args4804.push((arguments[i__1278__auto___4809]));

var G__4810 = (i__1278__auto___4809 + (1));
i__1278__auto___4809 = G__4810;
continue;
} else {
}
break;
}

var G__4806 = args4804.length;
switch (G__4806) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4804.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by.call(null,cljs.source_map.source_compare.call(null,sources));
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__4807 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4812 = cljs.core.next.call(null,segs__$1);
var G__4813 = nrelseg;
var G__4814 = cljs.source_map.update_reverse_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4812;
relseg__$1 = G__4813;
result__$1 = G__4814;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4807,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4807,(1),null);
var G__4815 = (gline + (1));
var G__4816 = cljs.core.next.call(null,lines__$1);
var G__4817 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4818 = result__$1;
gline = G__4815;
lines__$1 = G__4816;
relseg = G__4817;
result = G__4818;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__4822 = segmap;
var map__4822__$1 = ((((!((map__4822 == null)))?((((map__4822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__4822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__4822):map__4822);
var gcol = cljs.core.get.call(null,map__4822__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.call(null,map__4822__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.call(null,map__4822__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.call(null,map__4822__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.call(null,map__4822__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = ((name)?cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.call(null,result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.call(null,((function (map__4822,map__4822__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.call(null,((function (map__4822,map__4822__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__4819_SHARP_){
return cljs.core.conj.call(null,p1__4819_SHARP_,d__$1);
});})(map__4822,map__4822__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__4822,map__4822__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map.call(null)));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args4824 = [];
var len__1277__auto___4828 = arguments.length;
var i__1278__auto___4829 = (0);
while(true){
if((i__1278__auto___4829 < len__1277__auto___4828)){
args4824.push((arguments[i__1278__auto___4829]));

var G__4830 = (i__1278__auto___4829 + (1));
i__1278__auto___4829 = G__4830;
continue;
} else {
}
break;
}

var G__4826 = args4824.length;
switch (G__4826) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args4824.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.call(null,goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq.call(null,clojure.string.split.call(null,mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first.call(null,lines__$1);
var vec__4827 = ((clojure.string.blank_QMARK_.call(null,line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq.call(null,clojure.string.split.call(null,line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first.call(null,segs__$1);
var nrelseg = cljs.source_map.seg_combine.call(null,cljs.source_map.base64_vlq.decode.call(null,seg),relseg__$1);
var G__4832 = cljs.core.next.call(null,segs__$1);
var G__4833 = nrelseg;
var G__4834 = cljs.source_map.update_result.call(null,result__$1,cljs.source_map.seg__GT_map.call(null,nrelseg,source_map),gline);
segs__$1 = G__4832;
relseg__$1 = G__4833;
result__$1 = G__4834;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.call(null,vec__4827,(0),null);
var relseg__$1 = cljs.core.nth.call(null,vec__4827,(1),null);
var G__4835 = (gline + (1));
var G__4836 = cljs.core.next.call(null,lines__$1);
var G__4837 = cljs.core.assoc.call(null,relseg__$1,(0),(0));
var G__4838 = result__$1;
gline = G__4835;
lines__$1 = G__4836;
relseg = G__4837;
result = G__4838;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.call(null,((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.call(null,relseg,((function (relseg){
return (function (p__4845){
var vec__4846 = p__4845;
var _ = cljs.core.nth.call(null,vec__4846,(0),null);
var source = cljs.core.nth.call(null,vec__4846,(1),null);
var line = cljs.core.nth.call(null,vec__4846,(2),null);
var col = cljs.core.nth.call(null,vec__4846,(3),null);
var name = cljs.core.nth.call(null,vec__4846,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.call(null,segs,cljs.core.reduce.call(null,((function (relseg){
return (function (cols__$1,p__4847){
var vec__4848 = p__4847;
var gcol = cljs.core.nth.call(null,vec__4848,(0),null);
var sidx = cljs.core.nth.call(null,vec__4848,(1),null);
var line = cljs.core.nth.call(null,vec__4848,(2),null);
var col = cljs.core.nth.call(null,vec__4848,(3),null);
var name = cljs.core.nth.call(null,vec__4848,(4),null);
var seg = vec__4848;
var offset = cljs.core.map.call(null,cljs.core._,seg,cljs.core.deref.call(null,relseg));
cljs.core.swap_BANG_.call(null,relseg,((function (offset,vec__4848,gcol,sidx,line,col,name,seg,relseg){
return (function (p__4849){
var vec__4850 = p__4849;
var _ = cljs.core.nth.call(null,vec__4850,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__4850,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__4850,(2),null);
var ___$3 = cljs.core.nth.call(null,vec__4850,(3),null);
var lname = cljs.core.nth.call(null,vec__4850,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__219__auto__ = name;
if(or__219__auto__){
return or__219__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__4848,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.call(null,cols__$1,cljs.source_map.base64_vlq.encode.call(null,offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.call(null,(0));
var preamble_lines = cljs.core.take.call(null,(function (){var or__219__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(or__219__auto__){
return or__219__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.call(null,cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(temp__4423__auto__){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.call(null,cljs.core.deref.call(null,names__GT_idx),name);
if(temp__4423__auto____$1){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref.call(null,name_idx);
cljs.core.swap_BANG_.call(null,names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.call(null,name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.call(null,segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__4904 = cljs.core.seq.call(null,infos);
var chunk__4905 = null;
var count__4906 = (0);
var i__4907 = (0);
while(true){
if((i__4907 < count__4906)){
var info = cljs.core._nth.call(null,chunk__4905,i__4907);
var segv_4954 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_4955 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_4956 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_4955 > (lc_4956 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4904,chunk__4905,count__4906,i__4907,segv_4954,gline_4955,lc_4956,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_4955 - (lc_4956 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_4954], null));
});})(seq__4904,chunk__4905,count__4906,i__4907,segv_4954,gline_4955,lc_4956,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4904,chunk__4905,count__4906,i__4907,segv_4954,gline_4955,lc_4956,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4955], null),cljs.core.conj,segv_4954);
});})(seq__4904,chunk__4905,count__4906,i__4907,segv_4954,gline_4955,lc_4956,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__4957 = seq__4904;
var G__4958 = chunk__4905;
var G__4959 = count__4906;
var G__4960 = (i__4907 + (1));
seq__4904 = G__4957;
chunk__4905 = G__4958;
count__4906 = G__4959;
i__4907 = G__4960;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__4904);
if(temp__4425__auto__){
var seq__4904__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4904__$1)){
var c__1022__auto__ = cljs.core.chunk_first.call(null,seq__4904__$1);
var G__4961 = cljs.core.chunk_rest.call(null,seq__4904__$1);
var G__4962 = c__1022__auto__;
var G__4963 = cljs.core.count.call(null,c__1022__auto__);
var G__4964 = (0);
seq__4904 = G__4961;
chunk__4905 = G__4962;
count__4906 = G__4963;
i__4907 = G__4964;
continue;
} else {
var info = cljs.core.first.call(null,seq__4904__$1);
var segv_4965 = info__GT_segv.call(null,info,source_idx,line,col);
var gline_4966 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_4967 = cljs.core.count.call(null,cljs.core.deref.call(null,lines));
if((gline_4966 > (lc_4967 - (1)))){
cljs.core.swap_BANG_.call(null,lines,((function (seq__4904,chunk__4905,count__4906,i__4907,segv_4965,gline_4966,lc_4967,info,seq__4904__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.call(null,cljs.core.into.call(null,lines__$1,cljs.core.repeat.call(null,((gline_4966 - (lc_4967 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_4965], null));
});})(seq__4904,chunk__4905,count__4906,i__4907,segv_4965,gline_4966,lc_4967,info,seq__4904__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.call(null,lines,((function (seq__4904,chunk__4905,count__4906,i__4907,segv_4965,gline_4966,lc_4967,info,seq__4904__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.call(null,lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_4966], null),cljs.core.conj,segv_4965);
});})(seq__4904,chunk__4905,count__4906,i__4907,segv_4965,gline_4966,lc_4967,info,seq__4904__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__4968 = cljs.core.next.call(null,seq__4904__$1);
var G__4969 = null;
var G__4970 = (0);
var G__4971 = (0);
seq__4904 = G__4968;
chunk__4905 = G__4969;
count__4906 = G__4970;
i__4907 = G__4971;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__4908_4972 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__4909_4973 = null;
var count__4910_4974 = (0);
var i__4911_4975 = (0);
while(true){
if((i__4911_4975 < count__4910_4974)){
var vec__4912_4976 = cljs.core._nth.call(null,chunk__4909_4973,i__4911_4975);
var source_idx_4977 = cljs.core.nth.call(null,vec__4912_4976,(0),null);
var vec__4913_4978 = cljs.core.nth.call(null,vec__4912_4976,(1),null);
var __4979 = cljs.core.nth.call(null,vec__4913_4978,(0),null);
var lines_4980__$1 = cljs.core.nth.call(null,vec__4913_4978,(1),null);
var seq__4914_4981 = cljs.core.seq.call(null,lines_4980__$1);
var chunk__4915_4982 = null;
var count__4916_4983 = (0);
var i__4917_4984 = (0);
while(true){
if((i__4917_4984 < count__4916_4983)){
var vec__4918_4985 = cljs.core._nth.call(null,chunk__4915_4982,i__4917_4984);
var line_4986 = cljs.core.nth.call(null,vec__4918_4985,(0),null);
var cols_4987 = cljs.core.nth.call(null,vec__4918_4985,(1),null);
var seq__4919_4988 = cljs.core.seq.call(null,cols_4987);
var chunk__4920_4989 = null;
var count__4921_4990 = (0);
var i__4922_4991 = (0);
while(true){
if((i__4922_4991 < count__4921_4990)){
var vec__4923_4992 = cljs.core._nth.call(null,chunk__4920_4989,i__4922_4991);
var col_4993 = cljs.core.nth.call(null,vec__4923_4992,(0),null);
var infos_4994 = cljs.core.nth.call(null,vec__4923_4992,(1),null);
encode_cols.call(null,infos_4994,source_idx_4977,line_4986,col_4993);

var G__4995 = seq__4919_4988;
var G__4996 = chunk__4920_4989;
var G__4997 = count__4921_4990;
var G__4998 = (i__4922_4991 + (1));
seq__4919_4988 = G__4995;
chunk__4920_4989 = G__4996;
count__4921_4990 = G__4997;
i__4922_4991 = G__4998;
continue;
} else {
var temp__4425__auto___4999 = cljs.core.seq.call(null,seq__4919_4988);
if(temp__4425__auto___4999){
var seq__4919_5000__$1 = temp__4425__auto___4999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4919_5000__$1)){
var c__1022__auto___5001 = cljs.core.chunk_first.call(null,seq__4919_5000__$1);
var G__5002 = cljs.core.chunk_rest.call(null,seq__4919_5000__$1);
var G__5003 = c__1022__auto___5001;
var G__5004 = cljs.core.count.call(null,c__1022__auto___5001);
var G__5005 = (0);
seq__4919_4988 = G__5002;
chunk__4920_4989 = G__5003;
count__4921_4990 = G__5004;
i__4922_4991 = G__5005;
continue;
} else {
var vec__4924_5006 = cljs.core.first.call(null,seq__4919_5000__$1);
var col_5007 = cljs.core.nth.call(null,vec__4924_5006,(0),null);
var infos_5008 = cljs.core.nth.call(null,vec__4924_5006,(1),null);
encode_cols.call(null,infos_5008,source_idx_4977,line_4986,col_5007);

var G__5009 = cljs.core.next.call(null,seq__4919_5000__$1);
var G__5010 = null;
var G__5011 = (0);
var G__5012 = (0);
seq__4919_4988 = G__5009;
chunk__4920_4989 = G__5010;
count__4921_4990 = G__5011;
i__4922_4991 = G__5012;
continue;
}
} else {
}
}
break;
}

var G__5013 = seq__4914_4981;
var G__5014 = chunk__4915_4982;
var G__5015 = count__4916_4983;
var G__5016 = (i__4917_4984 + (1));
seq__4914_4981 = G__5013;
chunk__4915_4982 = G__5014;
count__4916_4983 = G__5015;
i__4917_4984 = G__5016;
continue;
} else {
var temp__4425__auto___5017 = cljs.core.seq.call(null,seq__4914_4981);
if(temp__4425__auto___5017){
var seq__4914_5018__$1 = temp__4425__auto___5017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4914_5018__$1)){
var c__1022__auto___5019 = cljs.core.chunk_first.call(null,seq__4914_5018__$1);
var G__5020 = cljs.core.chunk_rest.call(null,seq__4914_5018__$1);
var G__5021 = c__1022__auto___5019;
var G__5022 = cljs.core.count.call(null,c__1022__auto___5019);
var G__5023 = (0);
seq__4914_4981 = G__5020;
chunk__4915_4982 = G__5021;
count__4916_4983 = G__5022;
i__4917_4984 = G__5023;
continue;
} else {
var vec__4925_5024 = cljs.core.first.call(null,seq__4914_5018__$1);
var line_5025 = cljs.core.nth.call(null,vec__4925_5024,(0),null);
var cols_5026 = cljs.core.nth.call(null,vec__4925_5024,(1),null);
var seq__4926_5027 = cljs.core.seq.call(null,cols_5026);
var chunk__4927_5028 = null;
var count__4928_5029 = (0);
var i__4929_5030 = (0);
while(true){
if((i__4929_5030 < count__4928_5029)){
var vec__4930_5031 = cljs.core._nth.call(null,chunk__4927_5028,i__4929_5030);
var col_5032 = cljs.core.nth.call(null,vec__4930_5031,(0),null);
var infos_5033 = cljs.core.nth.call(null,vec__4930_5031,(1),null);
encode_cols.call(null,infos_5033,source_idx_4977,line_5025,col_5032);

var G__5034 = seq__4926_5027;
var G__5035 = chunk__4927_5028;
var G__5036 = count__4928_5029;
var G__5037 = (i__4929_5030 + (1));
seq__4926_5027 = G__5034;
chunk__4927_5028 = G__5035;
count__4928_5029 = G__5036;
i__4929_5030 = G__5037;
continue;
} else {
var temp__4425__auto___5038__$1 = cljs.core.seq.call(null,seq__4926_5027);
if(temp__4425__auto___5038__$1){
var seq__4926_5039__$1 = temp__4425__auto___5038__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4926_5039__$1)){
var c__1022__auto___5040 = cljs.core.chunk_first.call(null,seq__4926_5039__$1);
var G__5041 = cljs.core.chunk_rest.call(null,seq__4926_5039__$1);
var G__5042 = c__1022__auto___5040;
var G__5043 = cljs.core.count.call(null,c__1022__auto___5040);
var G__5044 = (0);
seq__4926_5027 = G__5041;
chunk__4927_5028 = G__5042;
count__4928_5029 = G__5043;
i__4929_5030 = G__5044;
continue;
} else {
var vec__4931_5045 = cljs.core.first.call(null,seq__4926_5039__$1);
var col_5046 = cljs.core.nth.call(null,vec__4931_5045,(0),null);
var infos_5047 = cljs.core.nth.call(null,vec__4931_5045,(1),null);
encode_cols.call(null,infos_5047,source_idx_4977,line_5025,col_5046);

var G__5048 = cljs.core.next.call(null,seq__4926_5039__$1);
var G__5049 = null;
var G__5050 = (0);
var G__5051 = (0);
seq__4926_5027 = G__5048;
chunk__4927_5028 = G__5049;
count__4928_5029 = G__5050;
i__4929_5030 = G__5051;
continue;
}
} else {
}
}
break;
}

var G__5052 = cljs.core.next.call(null,seq__4914_5018__$1);
var G__5053 = null;
var G__5054 = (0);
var G__5055 = (0);
seq__4914_4981 = G__5052;
chunk__4915_4982 = G__5053;
count__4916_4983 = G__5054;
i__4917_4984 = G__5055;
continue;
}
} else {
}
}
break;
}

var G__5056 = seq__4908_4972;
var G__5057 = chunk__4909_4973;
var G__5058 = count__4910_4974;
var G__5059 = (i__4911_4975 + (1));
seq__4908_4972 = G__5056;
chunk__4909_4973 = G__5057;
count__4910_4974 = G__5058;
i__4911_4975 = G__5059;
continue;
} else {
var temp__4425__auto___5060 = cljs.core.seq.call(null,seq__4908_4972);
if(temp__4425__auto___5060){
var seq__4908_5061__$1 = temp__4425__auto___5060;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4908_5061__$1)){
var c__1022__auto___5062 = cljs.core.chunk_first.call(null,seq__4908_5061__$1);
var G__5063 = cljs.core.chunk_rest.call(null,seq__4908_5061__$1);
var G__5064 = c__1022__auto___5062;
var G__5065 = cljs.core.count.call(null,c__1022__auto___5062);
var G__5066 = (0);
seq__4908_4972 = G__5063;
chunk__4909_4973 = G__5064;
count__4910_4974 = G__5065;
i__4911_4975 = G__5066;
continue;
} else {
var vec__4932_5067 = cljs.core.first.call(null,seq__4908_5061__$1);
var source_idx_5068 = cljs.core.nth.call(null,vec__4932_5067,(0),null);
var vec__4933_5069 = cljs.core.nth.call(null,vec__4932_5067,(1),null);
var __5070 = cljs.core.nth.call(null,vec__4933_5069,(0),null);
var lines_5071__$1 = cljs.core.nth.call(null,vec__4933_5069,(1),null);
var seq__4934_5072 = cljs.core.seq.call(null,lines_5071__$1);
var chunk__4935_5073 = null;
var count__4936_5074 = (0);
var i__4937_5075 = (0);
while(true){
if((i__4937_5075 < count__4936_5074)){
var vec__4938_5076 = cljs.core._nth.call(null,chunk__4935_5073,i__4937_5075);
var line_5077 = cljs.core.nth.call(null,vec__4938_5076,(0),null);
var cols_5078 = cljs.core.nth.call(null,vec__4938_5076,(1),null);
var seq__4939_5079 = cljs.core.seq.call(null,cols_5078);
var chunk__4940_5080 = null;
var count__4941_5081 = (0);
var i__4942_5082 = (0);
while(true){
if((i__4942_5082 < count__4941_5081)){
var vec__4943_5083 = cljs.core._nth.call(null,chunk__4940_5080,i__4942_5082);
var col_5084 = cljs.core.nth.call(null,vec__4943_5083,(0),null);
var infos_5085 = cljs.core.nth.call(null,vec__4943_5083,(1),null);
encode_cols.call(null,infos_5085,source_idx_5068,line_5077,col_5084);

var G__5086 = seq__4939_5079;
var G__5087 = chunk__4940_5080;
var G__5088 = count__4941_5081;
var G__5089 = (i__4942_5082 + (1));
seq__4939_5079 = G__5086;
chunk__4940_5080 = G__5087;
count__4941_5081 = G__5088;
i__4942_5082 = G__5089;
continue;
} else {
var temp__4425__auto___5090__$1 = cljs.core.seq.call(null,seq__4939_5079);
if(temp__4425__auto___5090__$1){
var seq__4939_5091__$1 = temp__4425__auto___5090__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4939_5091__$1)){
var c__1022__auto___5092 = cljs.core.chunk_first.call(null,seq__4939_5091__$1);
var G__5093 = cljs.core.chunk_rest.call(null,seq__4939_5091__$1);
var G__5094 = c__1022__auto___5092;
var G__5095 = cljs.core.count.call(null,c__1022__auto___5092);
var G__5096 = (0);
seq__4939_5079 = G__5093;
chunk__4940_5080 = G__5094;
count__4941_5081 = G__5095;
i__4942_5082 = G__5096;
continue;
} else {
var vec__4944_5097 = cljs.core.first.call(null,seq__4939_5091__$1);
var col_5098 = cljs.core.nth.call(null,vec__4944_5097,(0),null);
var infos_5099 = cljs.core.nth.call(null,vec__4944_5097,(1),null);
encode_cols.call(null,infos_5099,source_idx_5068,line_5077,col_5098);

var G__5100 = cljs.core.next.call(null,seq__4939_5091__$1);
var G__5101 = null;
var G__5102 = (0);
var G__5103 = (0);
seq__4939_5079 = G__5100;
chunk__4940_5080 = G__5101;
count__4941_5081 = G__5102;
i__4942_5082 = G__5103;
continue;
}
} else {
}
}
break;
}

var G__5104 = seq__4934_5072;
var G__5105 = chunk__4935_5073;
var G__5106 = count__4936_5074;
var G__5107 = (i__4937_5075 + (1));
seq__4934_5072 = G__5104;
chunk__4935_5073 = G__5105;
count__4936_5074 = G__5106;
i__4937_5075 = G__5107;
continue;
} else {
var temp__4425__auto___5108__$1 = cljs.core.seq.call(null,seq__4934_5072);
if(temp__4425__auto___5108__$1){
var seq__4934_5109__$1 = temp__4425__auto___5108__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4934_5109__$1)){
var c__1022__auto___5110 = cljs.core.chunk_first.call(null,seq__4934_5109__$1);
var G__5111 = cljs.core.chunk_rest.call(null,seq__4934_5109__$1);
var G__5112 = c__1022__auto___5110;
var G__5113 = cljs.core.count.call(null,c__1022__auto___5110);
var G__5114 = (0);
seq__4934_5072 = G__5111;
chunk__4935_5073 = G__5112;
count__4936_5074 = G__5113;
i__4937_5075 = G__5114;
continue;
} else {
var vec__4945_5115 = cljs.core.first.call(null,seq__4934_5109__$1);
var line_5116 = cljs.core.nth.call(null,vec__4945_5115,(0),null);
var cols_5117 = cljs.core.nth.call(null,vec__4945_5115,(1),null);
var seq__4946_5118 = cljs.core.seq.call(null,cols_5117);
var chunk__4947_5119 = null;
var count__4948_5120 = (0);
var i__4949_5121 = (0);
while(true){
if((i__4949_5121 < count__4948_5120)){
var vec__4950_5122 = cljs.core._nth.call(null,chunk__4947_5119,i__4949_5121);
var col_5123 = cljs.core.nth.call(null,vec__4950_5122,(0),null);
var infos_5124 = cljs.core.nth.call(null,vec__4950_5122,(1),null);
encode_cols.call(null,infos_5124,source_idx_5068,line_5116,col_5123);

var G__5125 = seq__4946_5118;
var G__5126 = chunk__4947_5119;
var G__5127 = count__4948_5120;
var G__5128 = (i__4949_5121 + (1));
seq__4946_5118 = G__5125;
chunk__4947_5119 = G__5126;
count__4948_5120 = G__5127;
i__4949_5121 = G__5128;
continue;
} else {
var temp__4425__auto___5129__$2 = cljs.core.seq.call(null,seq__4946_5118);
if(temp__4425__auto___5129__$2){
var seq__4946_5130__$1 = temp__4425__auto___5129__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__4946_5130__$1)){
var c__1022__auto___5131 = cljs.core.chunk_first.call(null,seq__4946_5130__$1);
var G__5132 = cljs.core.chunk_rest.call(null,seq__4946_5130__$1);
var G__5133 = c__1022__auto___5131;
var G__5134 = cljs.core.count.call(null,c__1022__auto___5131);
var G__5135 = (0);
seq__4946_5118 = G__5132;
chunk__4947_5119 = G__5133;
count__4948_5120 = G__5134;
i__4949_5121 = G__5135;
continue;
} else {
var vec__4951_5136 = cljs.core.first.call(null,seq__4946_5130__$1);
var col_5137 = cljs.core.nth.call(null,vec__4951_5136,(0),null);
var infos_5138 = cljs.core.nth.call(null,vec__4951_5136,(1),null);
encode_cols.call(null,infos_5138,source_idx_5068,line_5116,col_5137);

var G__5139 = cljs.core.next.call(null,seq__4946_5130__$1);
var G__5140 = null;
var G__5141 = (0);
var G__5142 = (0);
seq__4946_5118 = G__5139;
chunk__4947_5119 = G__5140;
count__4948_5120 = G__5141;
i__4949_5121 = G__5142;
continue;
}
} else {
}
}
break;
}

var G__5143 = cljs.core.next.call(null,seq__4934_5109__$1);
var G__5144 = null;
var G__5145 = (0);
var G__5146 = (0);
seq__4934_5072 = G__5143;
chunk__4935_5073 = G__5144;
count__4936_5074 = G__5145;
i__4937_5075 = G__5146;
continue;
}
} else {
}
}
break;
}

var G__5147 = cljs.core.next.call(null,seq__4908_5061__$1);
var G__5148 = null;
var G__5149 = (0);
var G__5150 = (0);
seq__4908_4972 = G__5147;
chunk__4909_4973 = G__5148;
count__4910_4974 = G__5149;
i__4911_4975 = G__5150;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__4952 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys.call(null,m);
var f = cljs.core.comp.call(null,((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4851_SHARP_){
return [cljs.core.str(p1__4851_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4852_SHARP_){
return cljs.core.last.call(null,clojure.string.split.call(null,p1__4852_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.call(null,cljs.core.map.call(null,f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.call(null,";",cljs.core.map.call(null,((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__4853_SHARP_){
return clojure.string.join.call(null,",",p1__4853_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs.call(null,cljs.core.concat.call(null,preamble_lines,cljs.core.deref.call(null,lines))))), "names": cljs.core.into_array.call(null,cljs.core.map.call(null,clojure.set.map_invert.call(null,cljs.core.deref.call(null,names__GT_idx)),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,names__GT_idx)))))};
var G__4952__$1 = ((new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__4953 = G__4952;
goog.object.set(G__4953,"sourcesContent",cljs.core.into_array.call(null,new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__4953;
})():G__4952);
return G__4952__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq.call(null,cljs_map);
var new_lines = cljs.core.sorted_map.call(null);
while(true){
if(line_map_seq){
var vec__5156 = cljs.core.first.call(null,line_map_seq);
var line = cljs.core.nth.call(null,vec__5156,(0),null);
var col_map = cljs.core.nth.call(null,vec__5156,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq.call(null,col_map);
var new_cols = cljs.core.sorted_map.call(null);
while(true){
if(col_map_seq){
var vec__5157 = cljs.core.first.call(null,col_map_seq);
var col = cljs.core.nth.call(null,vec__5157,(0),null);
var infos = cljs.core.nth.call(null,vec__5157,(1),null);
var G__5161 = cljs.core.next.call(null,col_map_seq);
var G__5162 = cljs.core.assoc.call(null,new_cols,col,cljs.core.reduce.call(null,((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__5157,col,infos,vec__5156,line,col_map){
return (function (v,p__5158){
var map__5159 = p__5158;
var map__5159__$1 = ((((!((map__5159 == null)))?((((map__5159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5159):map__5159);
var gline = cljs.core.get.call(null,map__5159__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.call(null,map__5159__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.call(null,v,cljs.core.get_in.call(null,js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__5157,col,infos,vec__5156,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__5161;
new_cols = G__5162;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__5163 = cljs.core.next.call(null,line_map_seq);
var G__5164 = cljs.core.assoc.call(null,new_lines,line,new_cols);
line_map_seq = G__5163;
new_lines = G__5164;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.call(null,cljs.core.sorted_map.call(null));
var seq__5215_5265 = cljs.core.seq.call(null,reverse_map);
var chunk__5216_5266 = null;
var count__5217_5267 = (0);
var i__5218_5268 = (0);
while(true){
if((i__5218_5268 < count__5217_5267)){
var vec__5219_5269 = cljs.core._nth.call(null,chunk__5216_5266,i__5218_5268);
var line_5270 = cljs.core.nth.call(null,vec__5219_5269,(0),null);
var columns_5271 = cljs.core.nth.call(null,vec__5219_5269,(1),null);
var seq__5220_5272 = cljs.core.seq.call(null,columns_5271);
var chunk__5221_5273 = null;
var count__5222_5274 = (0);
var i__5223_5275 = (0);
while(true){
if((i__5223_5275 < count__5222_5274)){
var vec__5224_5276 = cljs.core._nth.call(null,chunk__5221_5273,i__5223_5275);
var column_5277 = cljs.core.nth.call(null,vec__5224_5276,(0),null);
var column_info_5278 = cljs.core.nth.call(null,vec__5224_5276,(1),null);
var seq__5225_5279 = cljs.core.seq.call(null,column_info_5278);
var chunk__5226_5280 = null;
var count__5227_5281 = (0);
var i__5228_5282 = (0);
while(true){
if((i__5228_5282 < count__5227_5281)){
var map__5229_5283 = cljs.core._nth.call(null,chunk__5226_5280,i__5228_5282);
var map__5229_5284__$1 = ((((!((map__5229_5283 == null)))?((((map__5229_5283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5229_5283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5229_5283):map__5229_5283);
var gline_5285 = cljs.core.get.call(null,map__5229_5284__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5286 = cljs.core.get.call(null,map__5229_5284__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5287 = cljs.core.get.call(null,map__5229_5284__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5285], null),cljs.core.fnil.call(null,((function (seq__5225_5279,chunk__5226_5280,count__5227_5281,i__5228_5282,seq__5220_5272,chunk__5221_5273,count__5222_5274,i__5223_5275,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5229_5283,map__5229_5284__$1,gline_5285,gcol_5286,name_5287,vec__5224_5276,column_5277,column_info_5278,vec__5219_5269,line_5270,columns_5271,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_5277], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5270,new cljs.core.Keyword(null,"col","col",-1959363084),column_5277,new cljs.core.Keyword(null,"name","name",1843675177),name_5287], null));
});})(seq__5225_5279,chunk__5226_5280,count__5227_5281,i__5228_5282,seq__5220_5272,chunk__5221_5273,count__5222_5274,i__5223_5275,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5229_5283,map__5229_5284__$1,gline_5285,gcol_5286,name_5287,vec__5224_5276,column_5277,column_info_5278,vec__5219_5269,line_5270,columns_5271,inverted))
,cljs.core.sorted_map.call(null)));

var G__5288 = seq__5225_5279;
var G__5289 = chunk__5226_5280;
var G__5290 = count__5227_5281;
var G__5291 = (i__5228_5282 + (1));
seq__5225_5279 = G__5288;
chunk__5226_5280 = G__5289;
count__5227_5281 = G__5290;
i__5228_5282 = G__5291;
continue;
} else {
var temp__4425__auto___5292 = cljs.core.seq.call(null,seq__5225_5279);
if(temp__4425__auto___5292){
var seq__5225_5293__$1 = temp__4425__auto___5292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5225_5293__$1)){
var c__1022__auto___5294 = cljs.core.chunk_first.call(null,seq__5225_5293__$1);
var G__5295 = cljs.core.chunk_rest.call(null,seq__5225_5293__$1);
var G__5296 = c__1022__auto___5294;
var G__5297 = cljs.core.count.call(null,c__1022__auto___5294);
var G__5298 = (0);
seq__5225_5279 = G__5295;
chunk__5226_5280 = G__5296;
count__5227_5281 = G__5297;
i__5228_5282 = G__5298;
continue;
} else {
var map__5231_5299 = cljs.core.first.call(null,seq__5225_5293__$1);
var map__5231_5300__$1 = ((((!((map__5231_5299 == null)))?((((map__5231_5299.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5231_5299.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5231_5299):map__5231_5299);
var gline_5301 = cljs.core.get.call(null,map__5231_5300__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5302 = cljs.core.get.call(null,map__5231_5300__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5303 = cljs.core.get.call(null,map__5231_5300__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5301], null),cljs.core.fnil.call(null,((function (seq__5225_5279,chunk__5226_5280,count__5227_5281,i__5228_5282,seq__5220_5272,chunk__5221_5273,count__5222_5274,i__5223_5275,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5231_5299,map__5231_5300__$1,gline_5301,gcol_5302,name_5303,seq__5225_5293__$1,temp__4425__auto___5292,vec__5224_5276,column_5277,column_info_5278,vec__5219_5269,line_5270,columns_5271,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_5277], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5270,new cljs.core.Keyword(null,"col","col",-1959363084),column_5277,new cljs.core.Keyword(null,"name","name",1843675177),name_5303], null));
});})(seq__5225_5279,chunk__5226_5280,count__5227_5281,i__5228_5282,seq__5220_5272,chunk__5221_5273,count__5222_5274,i__5223_5275,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5231_5299,map__5231_5300__$1,gline_5301,gcol_5302,name_5303,seq__5225_5293__$1,temp__4425__auto___5292,vec__5224_5276,column_5277,column_info_5278,vec__5219_5269,line_5270,columns_5271,inverted))
,cljs.core.sorted_map.call(null)));

var G__5304 = cljs.core.next.call(null,seq__5225_5293__$1);
var G__5305 = null;
var G__5306 = (0);
var G__5307 = (0);
seq__5225_5279 = G__5304;
chunk__5226_5280 = G__5305;
count__5227_5281 = G__5306;
i__5228_5282 = G__5307;
continue;
}
} else {
}
}
break;
}

var G__5308 = seq__5220_5272;
var G__5309 = chunk__5221_5273;
var G__5310 = count__5222_5274;
var G__5311 = (i__5223_5275 + (1));
seq__5220_5272 = G__5308;
chunk__5221_5273 = G__5309;
count__5222_5274 = G__5310;
i__5223_5275 = G__5311;
continue;
} else {
var temp__4425__auto___5312 = cljs.core.seq.call(null,seq__5220_5272);
if(temp__4425__auto___5312){
var seq__5220_5313__$1 = temp__4425__auto___5312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5220_5313__$1)){
var c__1022__auto___5314 = cljs.core.chunk_first.call(null,seq__5220_5313__$1);
var G__5315 = cljs.core.chunk_rest.call(null,seq__5220_5313__$1);
var G__5316 = c__1022__auto___5314;
var G__5317 = cljs.core.count.call(null,c__1022__auto___5314);
var G__5318 = (0);
seq__5220_5272 = G__5315;
chunk__5221_5273 = G__5316;
count__5222_5274 = G__5317;
i__5223_5275 = G__5318;
continue;
} else {
var vec__5233_5319 = cljs.core.first.call(null,seq__5220_5313__$1);
var column_5320 = cljs.core.nth.call(null,vec__5233_5319,(0),null);
var column_info_5321 = cljs.core.nth.call(null,vec__5233_5319,(1),null);
var seq__5234_5322 = cljs.core.seq.call(null,column_info_5321);
var chunk__5235_5323 = null;
var count__5236_5324 = (0);
var i__5237_5325 = (0);
while(true){
if((i__5237_5325 < count__5236_5324)){
var map__5238_5326 = cljs.core._nth.call(null,chunk__5235_5323,i__5237_5325);
var map__5238_5327__$1 = ((((!((map__5238_5326 == null)))?((((map__5238_5326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5238_5326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5238_5326):map__5238_5326);
var gline_5328 = cljs.core.get.call(null,map__5238_5327__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5329 = cljs.core.get.call(null,map__5238_5327__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5330 = cljs.core.get.call(null,map__5238_5327__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5328], null),cljs.core.fnil.call(null,((function (seq__5234_5322,chunk__5235_5323,count__5236_5324,i__5237_5325,seq__5220_5272,chunk__5221_5273,count__5222_5274,i__5223_5275,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5238_5326,map__5238_5327__$1,gline_5328,gcol_5329,name_5330,vec__5233_5319,column_5320,column_info_5321,seq__5220_5313__$1,temp__4425__auto___5312,vec__5219_5269,line_5270,columns_5271,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_5320], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5270,new cljs.core.Keyword(null,"col","col",-1959363084),column_5320,new cljs.core.Keyword(null,"name","name",1843675177),name_5330], null));
});})(seq__5234_5322,chunk__5235_5323,count__5236_5324,i__5237_5325,seq__5220_5272,chunk__5221_5273,count__5222_5274,i__5223_5275,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5238_5326,map__5238_5327__$1,gline_5328,gcol_5329,name_5330,vec__5233_5319,column_5320,column_info_5321,seq__5220_5313__$1,temp__4425__auto___5312,vec__5219_5269,line_5270,columns_5271,inverted))
,cljs.core.sorted_map.call(null)));

var G__5331 = seq__5234_5322;
var G__5332 = chunk__5235_5323;
var G__5333 = count__5236_5324;
var G__5334 = (i__5237_5325 + (1));
seq__5234_5322 = G__5331;
chunk__5235_5323 = G__5332;
count__5236_5324 = G__5333;
i__5237_5325 = G__5334;
continue;
} else {
var temp__4425__auto___5335__$1 = cljs.core.seq.call(null,seq__5234_5322);
if(temp__4425__auto___5335__$1){
var seq__5234_5336__$1 = temp__4425__auto___5335__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5234_5336__$1)){
var c__1022__auto___5337 = cljs.core.chunk_first.call(null,seq__5234_5336__$1);
var G__5338 = cljs.core.chunk_rest.call(null,seq__5234_5336__$1);
var G__5339 = c__1022__auto___5337;
var G__5340 = cljs.core.count.call(null,c__1022__auto___5337);
var G__5341 = (0);
seq__5234_5322 = G__5338;
chunk__5235_5323 = G__5339;
count__5236_5324 = G__5340;
i__5237_5325 = G__5341;
continue;
} else {
var map__5240_5342 = cljs.core.first.call(null,seq__5234_5336__$1);
var map__5240_5343__$1 = ((((!((map__5240_5342 == null)))?((((map__5240_5342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5240_5342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5240_5342):map__5240_5342);
var gline_5344 = cljs.core.get.call(null,map__5240_5343__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5345 = cljs.core.get.call(null,map__5240_5343__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5346 = cljs.core.get.call(null,map__5240_5343__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5344], null),cljs.core.fnil.call(null,((function (seq__5234_5322,chunk__5235_5323,count__5236_5324,i__5237_5325,seq__5220_5272,chunk__5221_5273,count__5222_5274,i__5223_5275,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5240_5342,map__5240_5343__$1,gline_5344,gcol_5345,name_5346,seq__5234_5336__$1,temp__4425__auto___5335__$1,vec__5233_5319,column_5320,column_info_5321,seq__5220_5313__$1,temp__4425__auto___5312,vec__5219_5269,line_5270,columns_5271,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_5320], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5270,new cljs.core.Keyword(null,"col","col",-1959363084),column_5320,new cljs.core.Keyword(null,"name","name",1843675177),name_5346], null));
});})(seq__5234_5322,chunk__5235_5323,count__5236_5324,i__5237_5325,seq__5220_5272,chunk__5221_5273,count__5222_5274,i__5223_5275,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5240_5342,map__5240_5343__$1,gline_5344,gcol_5345,name_5346,seq__5234_5336__$1,temp__4425__auto___5335__$1,vec__5233_5319,column_5320,column_info_5321,seq__5220_5313__$1,temp__4425__auto___5312,vec__5219_5269,line_5270,columns_5271,inverted))
,cljs.core.sorted_map.call(null)));

var G__5347 = cljs.core.next.call(null,seq__5234_5336__$1);
var G__5348 = null;
var G__5349 = (0);
var G__5350 = (0);
seq__5234_5322 = G__5347;
chunk__5235_5323 = G__5348;
count__5236_5324 = G__5349;
i__5237_5325 = G__5350;
continue;
}
} else {
}
}
break;
}

var G__5351 = cljs.core.next.call(null,seq__5220_5313__$1);
var G__5352 = null;
var G__5353 = (0);
var G__5354 = (0);
seq__5220_5272 = G__5351;
chunk__5221_5273 = G__5352;
count__5222_5274 = G__5353;
i__5223_5275 = G__5354;
continue;
}
} else {
}
}
break;
}

var G__5355 = seq__5215_5265;
var G__5356 = chunk__5216_5266;
var G__5357 = count__5217_5267;
var G__5358 = (i__5218_5268 + (1));
seq__5215_5265 = G__5355;
chunk__5216_5266 = G__5356;
count__5217_5267 = G__5357;
i__5218_5268 = G__5358;
continue;
} else {
var temp__4425__auto___5359 = cljs.core.seq.call(null,seq__5215_5265);
if(temp__4425__auto___5359){
var seq__5215_5360__$1 = temp__4425__auto___5359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5215_5360__$1)){
var c__1022__auto___5361 = cljs.core.chunk_first.call(null,seq__5215_5360__$1);
var G__5362 = cljs.core.chunk_rest.call(null,seq__5215_5360__$1);
var G__5363 = c__1022__auto___5361;
var G__5364 = cljs.core.count.call(null,c__1022__auto___5361);
var G__5365 = (0);
seq__5215_5265 = G__5362;
chunk__5216_5266 = G__5363;
count__5217_5267 = G__5364;
i__5218_5268 = G__5365;
continue;
} else {
var vec__5242_5366 = cljs.core.first.call(null,seq__5215_5360__$1);
var line_5367 = cljs.core.nth.call(null,vec__5242_5366,(0),null);
var columns_5368 = cljs.core.nth.call(null,vec__5242_5366,(1),null);
var seq__5243_5369 = cljs.core.seq.call(null,columns_5368);
var chunk__5244_5370 = null;
var count__5245_5371 = (0);
var i__5246_5372 = (0);
while(true){
if((i__5246_5372 < count__5245_5371)){
var vec__5247_5373 = cljs.core._nth.call(null,chunk__5244_5370,i__5246_5372);
var column_5374 = cljs.core.nth.call(null,vec__5247_5373,(0),null);
var column_info_5375 = cljs.core.nth.call(null,vec__5247_5373,(1),null);
var seq__5248_5376 = cljs.core.seq.call(null,column_info_5375);
var chunk__5249_5377 = null;
var count__5250_5378 = (0);
var i__5251_5379 = (0);
while(true){
if((i__5251_5379 < count__5250_5378)){
var map__5252_5380 = cljs.core._nth.call(null,chunk__5249_5377,i__5251_5379);
var map__5252_5381__$1 = ((((!((map__5252_5380 == null)))?((((map__5252_5380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5252_5380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5252_5380):map__5252_5380);
var gline_5382 = cljs.core.get.call(null,map__5252_5381__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5383 = cljs.core.get.call(null,map__5252_5381__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5384 = cljs.core.get.call(null,map__5252_5381__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5382], null),cljs.core.fnil.call(null,((function (seq__5248_5376,chunk__5249_5377,count__5250_5378,i__5251_5379,seq__5243_5369,chunk__5244_5370,count__5245_5371,i__5246_5372,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5252_5380,map__5252_5381__$1,gline_5382,gcol_5383,name_5384,vec__5247_5373,column_5374,column_info_5375,vec__5242_5366,line_5367,columns_5368,seq__5215_5360__$1,temp__4425__auto___5359,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_5374], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5367,new cljs.core.Keyword(null,"col","col",-1959363084),column_5374,new cljs.core.Keyword(null,"name","name",1843675177),name_5384], null));
});})(seq__5248_5376,chunk__5249_5377,count__5250_5378,i__5251_5379,seq__5243_5369,chunk__5244_5370,count__5245_5371,i__5246_5372,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5252_5380,map__5252_5381__$1,gline_5382,gcol_5383,name_5384,vec__5247_5373,column_5374,column_info_5375,vec__5242_5366,line_5367,columns_5368,seq__5215_5360__$1,temp__4425__auto___5359,inverted))
,cljs.core.sorted_map.call(null)));

var G__5385 = seq__5248_5376;
var G__5386 = chunk__5249_5377;
var G__5387 = count__5250_5378;
var G__5388 = (i__5251_5379 + (1));
seq__5248_5376 = G__5385;
chunk__5249_5377 = G__5386;
count__5250_5378 = G__5387;
i__5251_5379 = G__5388;
continue;
} else {
var temp__4425__auto___5389__$1 = cljs.core.seq.call(null,seq__5248_5376);
if(temp__4425__auto___5389__$1){
var seq__5248_5390__$1 = temp__4425__auto___5389__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5248_5390__$1)){
var c__1022__auto___5391 = cljs.core.chunk_first.call(null,seq__5248_5390__$1);
var G__5392 = cljs.core.chunk_rest.call(null,seq__5248_5390__$1);
var G__5393 = c__1022__auto___5391;
var G__5394 = cljs.core.count.call(null,c__1022__auto___5391);
var G__5395 = (0);
seq__5248_5376 = G__5392;
chunk__5249_5377 = G__5393;
count__5250_5378 = G__5394;
i__5251_5379 = G__5395;
continue;
} else {
var map__5254_5396 = cljs.core.first.call(null,seq__5248_5390__$1);
var map__5254_5397__$1 = ((((!((map__5254_5396 == null)))?((((map__5254_5396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5254_5396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5254_5396):map__5254_5396);
var gline_5398 = cljs.core.get.call(null,map__5254_5397__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5399 = cljs.core.get.call(null,map__5254_5397__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5400 = cljs.core.get.call(null,map__5254_5397__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5398], null),cljs.core.fnil.call(null,((function (seq__5248_5376,chunk__5249_5377,count__5250_5378,i__5251_5379,seq__5243_5369,chunk__5244_5370,count__5245_5371,i__5246_5372,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5254_5396,map__5254_5397__$1,gline_5398,gcol_5399,name_5400,seq__5248_5390__$1,temp__4425__auto___5389__$1,vec__5247_5373,column_5374,column_info_5375,vec__5242_5366,line_5367,columns_5368,seq__5215_5360__$1,temp__4425__auto___5359,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_5374], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5367,new cljs.core.Keyword(null,"col","col",-1959363084),column_5374,new cljs.core.Keyword(null,"name","name",1843675177),name_5400], null));
});})(seq__5248_5376,chunk__5249_5377,count__5250_5378,i__5251_5379,seq__5243_5369,chunk__5244_5370,count__5245_5371,i__5246_5372,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5254_5396,map__5254_5397__$1,gline_5398,gcol_5399,name_5400,seq__5248_5390__$1,temp__4425__auto___5389__$1,vec__5247_5373,column_5374,column_info_5375,vec__5242_5366,line_5367,columns_5368,seq__5215_5360__$1,temp__4425__auto___5359,inverted))
,cljs.core.sorted_map.call(null)));

var G__5401 = cljs.core.next.call(null,seq__5248_5390__$1);
var G__5402 = null;
var G__5403 = (0);
var G__5404 = (0);
seq__5248_5376 = G__5401;
chunk__5249_5377 = G__5402;
count__5250_5378 = G__5403;
i__5251_5379 = G__5404;
continue;
}
} else {
}
}
break;
}

var G__5405 = seq__5243_5369;
var G__5406 = chunk__5244_5370;
var G__5407 = count__5245_5371;
var G__5408 = (i__5246_5372 + (1));
seq__5243_5369 = G__5405;
chunk__5244_5370 = G__5406;
count__5245_5371 = G__5407;
i__5246_5372 = G__5408;
continue;
} else {
var temp__4425__auto___5409__$1 = cljs.core.seq.call(null,seq__5243_5369);
if(temp__4425__auto___5409__$1){
var seq__5243_5410__$1 = temp__4425__auto___5409__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5243_5410__$1)){
var c__1022__auto___5411 = cljs.core.chunk_first.call(null,seq__5243_5410__$1);
var G__5412 = cljs.core.chunk_rest.call(null,seq__5243_5410__$1);
var G__5413 = c__1022__auto___5411;
var G__5414 = cljs.core.count.call(null,c__1022__auto___5411);
var G__5415 = (0);
seq__5243_5369 = G__5412;
chunk__5244_5370 = G__5413;
count__5245_5371 = G__5414;
i__5246_5372 = G__5415;
continue;
} else {
var vec__5256_5416 = cljs.core.first.call(null,seq__5243_5410__$1);
var column_5417 = cljs.core.nth.call(null,vec__5256_5416,(0),null);
var column_info_5418 = cljs.core.nth.call(null,vec__5256_5416,(1),null);
var seq__5257_5419 = cljs.core.seq.call(null,column_info_5418);
var chunk__5258_5420 = null;
var count__5259_5421 = (0);
var i__5260_5422 = (0);
while(true){
if((i__5260_5422 < count__5259_5421)){
var map__5261_5423 = cljs.core._nth.call(null,chunk__5258_5420,i__5260_5422);
var map__5261_5424__$1 = ((((!((map__5261_5423 == null)))?((((map__5261_5423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5261_5423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5261_5423):map__5261_5423);
var gline_5425 = cljs.core.get.call(null,map__5261_5424__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5426 = cljs.core.get.call(null,map__5261_5424__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5427 = cljs.core.get.call(null,map__5261_5424__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5425], null),cljs.core.fnil.call(null,((function (seq__5257_5419,chunk__5258_5420,count__5259_5421,i__5260_5422,seq__5243_5369,chunk__5244_5370,count__5245_5371,i__5246_5372,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5261_5423,map__5261_5424__$1,gline_5425,gcol_5426,name_5427,vec__5256_5416,column_5417,column_info_5418,seq__5243_5410__$1,temp__4425__auto___5409__$1,vec__5242_5366,line_5367,columns_5368,seq__5215_5360__$1,temp__4425__auto___5359,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_5417], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5367,new cljs.core.Keyword(null,"col","col",-1959363084),column_5417,new cljs.core.Keyword(null,"name","name",1843675177),name_5427], null));
});})(seq__5257_5419,chunk__5258_5420,count__5259_5421,i__5260_5422,seq__5243_5369,chunk__5244_5370,count__5245_5371,i__5246_5372,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5261_5423,map__5261_5424__$1,gline_5425,gcol_5426,name_5427,vec__5256_5416,column_5417,column_info_5418,seq__5243_5410__$1,temp__4425__auto___5409__$1,vec__5242_5366,line_5367,columns_5368,seq__5215_5360__$1,temp__4425__auto___5359,inverted))
,cljs.core.sorted_map.call(null)));

var G__5428 = seq__5257_5419;
var G__5429 = chunk__5258_5420;
var G__5430 = count__5259_5421;
var G__5431 = (i__5260_5422 + (1));
seq__5257_5419 = G__5428;
chunk__5258_5420 = G__5429;
count__5259_5421 = G__5430;
i__5260_5422 = G__5431;
continue;
} else {
var temp__4425__auto___5432__$2 = cljs.core.seq.call(null,seq__5257_5419);
if(temp__4425__auto___5432__$2){
var seq__5257_5433__$1 = temp__4425__auto___5432__$2;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__5257_5433__$1)){
var c__1022__auto___5434 = cljs.core.chunk_first.call(null,seq__5257_5433__$1);
var G__5435 = cljs.core.chunk_rest.call(null,seq__5257_5433__$1);
var G__5436 = c__1022__auto___5434;
var G__5437 = cljs.core.count.call(null,c__1022__auto___5434);
var G__5438 = (0);
seq__5257_5419 = G__5435;
chunk__5258_5420 = G__5436;
count__5259_5421 = G__5437;
i__5260_5422 = G__5438;
continue;
} else {
var map__5263_5439 = cljs.core.first.call(null,seq__5257_5433__$1);
var map__5263_5440__$1 = ((((!((map__5263_5439 == null)))?((((map__5263_5439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__5263_5439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__5263_5439):map__5263_5439);
var gline_5441 = cljs.core.get.call(null,map__5263_5440__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_5442 = cljs.core.get.call(null,map__5263_5440__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_5443 = cljs.core.get.call(null,map__5263_5440__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.call(null,inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_5441], null),cljs.core.fnil.call(null,((function (seq__5257_5419,chunk__5258_5420,count__5259_5421,i__5260_5422,seq__5243_5369,chunk__5244_5370,count__5245_5371,i__5246_5372,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5263_5439,map__5263_5440__$1,gline_5441,gcol_5442,name_5443,seq__5257_5433__$1,temp__4425__auto___5432__$2,vec__5256_5416,column_5417,column_info_5418,seq__5243_5410__$1,temp__4425__auto___5409__$1,vec__5242_5366,line_5367,columns_5368,seq__5215_5360__$1,temp__4425__auto___5359,inverted){
return (function (columns__$1){
return cljs.core.update_in.call(null,columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_5417], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_5367,new cljs.core.Keyword(null,"col","col",-1959363084),column_5417,new cljs.core.Keyword(null,"name","name",1843675177),name_5443], null));
});})(seq__5257_5419,chunk__5258_5420,count__5259_5421,i__5260_5422,seq__5243_5369,chunk__5244_5370,count__5245_5371,i__5246_5372,seq__5215_5265,chunk__5216_5266,count__5217_5267,i__5218_5268,map__5263_5439,map__5263_5440__$1,gline_5441,gcol_5442,name_5443,seq__5257_5433__$1,temp__4425__auto___5432__$2,vec__5256_5416,column_5417,column_info_5418,seq__5243_5410__$1,temp__4425__auto___5409__$1,vec__5242_5366,line_5367,columns_5368,seq__5215_5360__$1,temp__4425__auto___5359,inverted))
,cljs.core.sorted_map.call(null)));

var G__5444 = cljs.core.next.call(null,seq__5257_5433__$1);
var G__5445 = null;
var G__5446 = (0);
var G__5447 = (0);
seq__5257_5419 = G__5444;
chunk__5258_5420 = G__5445;
count__5259_5421 = G__5446;
i__5260_5422 = G__5447;
continue;
}
} else {
}
}
break;
}

var G__5448 = cljs.core.next.call(null,seq__5243_5410__$1);
var G__5449 = null;
var G__5450 = (0);
var G__5451 = (0);
seq__5243_5369 = G__5448;
chunk__5244_5370 = G__5449;
count__5245_5371 = G__5450;
i__5246_5372 = G__5451;
continue;
}
} else {
}
}
break;
}

var G__5452 = cljs.core.next.call(null,seq__5215_5360__$1);
var G__5453 = null;
var G__5454 = (0);
var G__5455 = (0);
seq__5215_5265 = G__5452;
chunk__5216_5266 = G__5453;
count__5217_5267 = G__5454;
i__5218_5268 = G__5455;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,inverted);
});

//# sourceMappingURL=source_map.js.map