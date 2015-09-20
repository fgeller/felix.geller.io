// Compiled by ClojureScript 1.7.134 {}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_dependents_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first.call(null,clojure.string.split.call(null,[cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.call(null,get_first_ns_segment,cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__6507 = s;
var map__6507__$1 = ((((!((map__6507 == null)))?((((map__6507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6507):map__6507);
var name = cljs.core.get.call(null,map__6507__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__6507__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__6510 = info;
var map__6511 = G__6510;
var map__6511__$1 = ((((!((map__6511 == null)))?((((map__6511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6511):map__6511);
var shadow = cljs.core.get.call(null,map__6511__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__6510__$1 = G__6510;
while(true){
var d__$2 = d__$1;
var map__6513 = G__6510__$1;
var map__6513__$1 = ((((!((map__6513 == null)))?((((map__6513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6513):map__6513);
var shadow__$1 = cljs.core.get.call(null,map__6513__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__6515 = (d__$2 + (1));
var G__6516 = shadow__$1;
d__$1 = G__6515;
G__6510__$1 = G__6516;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments.call(null)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine.call(null,cljs.core._hash.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s)),cljs.compiler.shadow_depth.call(null,s));
});
cljs.compiler.munge;
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__6517){
var map__6522 = p__6517;
var map__6522__$1 = ((((!((map__6522 == null)))?((((map__6522.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6522.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6522):map__6522);
var name_var = map__6522__$1;
var name = cljs.core.get.call(null,map__6522__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__6522__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__6524 = info;
var map__6524__$1 = ((((!((map__6524 == null)))?((((map__6524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6524):map__6524);
var ns = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__6524__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"_$_",cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.call(null,cljs.compiler.munge.call(null,[cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('')));
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.call(null,reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args6526 = [];
var len__1277__auto___6529 = arguments.length;
var i__1278__auto___6530 = (0);
while(true){
if((i__1278__auto___6530 < len__1277__auto___6529)){
args6526.push((arguments[i__1278__auto___6530]));

var G__6531 = (i__1278__auto___6530 + (1));
i__1278__auto___6530 = G__6531;
continue;
} else {
}
break;
}

var G__6528 = args6526.length;
switch (G__6528) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6526.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.call(null,s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_.call(null,s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name.call(null,s);
} else {
var depth = cljs.compiler.shadow_depth.call(null,s);
var code = cljs.compiler.hash_scope.call(null,s);
var renamed = cljs.core.get.call(null,cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.call(null,name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.call(null,[cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace.call(null,[cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace.call(null,ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved.call(null,reserved);
var ss__$2 = cljs.core.map.call(null,rf,clojure.string.split.call(null,ss__$1,/\./));
var ss__$3 = clojure.string.join.call(null,".",ss__$2);
var ms = cljs.core.munge.call(null,ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.call(null,",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__6534 = cp;
switch (G__6534) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__6540_6544 = cljs.core.seq.call(null,s);
var chunk__6541_6545 = null;
var count__6542_6546 = (0);
var i__6543_6547 = (0);
while(true){
if((i__6543_6547 < count__6542_6546)){
var c_6548 = cljs.core._nth.call(null,chunk__6541_6545,i__6543_6547);
sb.append(cljs.compiler.escape_char.call(null,c_6548));

var G__6549 = seq__6540_6544;
var G__6550 = chunk__6541_6545;
var G__6551 = count__6542_6546;
var G__6552 = (i__6543_6547 + (1));
seq__6540_6544 = G__6549;
chunk__6541_6545 = G__6550;
count__6542_6546 = G__6551;
i__6543_6547 = G__6552;
continue;
} else {
var temp__4425__auto___6553 = cljs.core.seq.call(null,seq__6540_6544);
if(temp__4425__auto___6553){
var seq__6540_6554__$1 = temp__4425__auto___6553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6540_6554__$1)){
var c__1022__auto___6555 = cljs.core.chunk_first.call(null,seq__6540_6554__$1);
var G__6556 = cljs.core.chunk_rest.call(null,seq__6540_6554__$1);
var G__6557 = c__1022__auto___6555;
var G__6558 = cljs.core.count.call(null,c__1022__auto___6555);
var G__6559 = (0);
seq__6540_6544 = G__6556;
chunk__6541_6545 = G__6557;
count__6542_6546 = G__6558;
i__6543_6547 = G__6559;
continue;
} else {
var c_6560 = cljs.core.first.call(null,seq__6540_6554__$1);
sb.append(cljs.compiler.escape_char.call(null,c_6560));

var G__6561 = cljs.core.next.call(null,seq__6540_6554__$1);
var G__6562 = null;
var G__6563 = (0);
var G__6564 = (0);
seq__6540_6544 = G__6561;
chunk__6541_6545 = G__6562;
count__6542_6546 = G__6563;
i__6543_6547 = G__6564;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__1132__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__1133__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__1134__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__1135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__1136__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__1136__auto__,method_table__1132__auto__,prefer_table__1133__auto__,method_cache__1134__auto__,cached_hierarchy__1135__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__1586__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__1586__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__6570_6575 = ast;
var map__6570_6576__$1 = ((((!((map__6570_6575 == null)))?((((map__6570_6575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6570_6575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6570_6575):map__6570_6575);
var env_6577 = cljs.core.get.call(null,map__6570_6576__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_6577))){
var map__6572_6578 = env_6577;
var map__6572_6579__$1 = ((((!((map__6572_6578 == null)))?((((map__6572_6578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6572_6578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6572_6578):map__6572_6578);
var line_6580 = cljs.core.get.call(null,map__6572_6579__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_6581 = cljs.core.get.call(null,map__6572_6579__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__6572_6578,map__6572_6579__$1,line_6580,column_6581,map__6570_6575,map__6570_6576__$1,env_6577,val__1586__auto__){
return (function (m){
var minfo = (function (){var G__6574 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__6574__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.call(null,G__6574,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__6574);
return G__6574__$1;
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_6580 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__6572_6578,map__6572_6579__$1,line_6580,column_6581,map__6570_6575,map__6570_6576__$1,env_6577,val__1586__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_6581)?(column_6581 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__6572_6578,map__6572_6579__$1,line_6580,column_6581,map__6570_6575,map__6570_6576__$1,env_6577,val__1586__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__6572_6578,map__6572_6579__$1,line_6580,column_6581,map__6570_6575,map__6570_6576__$1,env_6577,val__1586__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__6572_6578,map__6572_6579__$1,line_6580,column_6581,map__6570_6575,map__6570_6576__$1,env_6577,val__1586__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__6572_6578,map__6572_6579__$1,line_6580,column_6581,map__6570_6575,map__6570_6576__$1,env_6577,val__1586__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__1586__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__1284__auto__ = [];
var len__1277__auto___6588 = arguments.length;
var i__1278__auto___6589 = (0);
while(true){
if((i__1278__auto___6589 < len__1277__auto___6588)){
args__1284__auto__.push((arguments[i__1278__auto___6589]));

var G__6590 = (i__1278__auto___6589 + (1));
i__1278__auto___6589 = G__6590;
continue;
} else {
}
break;
}

var argseq__1285__auto__ = ((((0) < args__1284__auto__.length))?(new cljs.core.IndexedSeq(args__1284__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__1285__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__6584_6591 = cljs.core.seq.call(null,xs);
var chunk__6585_6592 = null;
var count__6586_6593 = (0);
var i__6587_6594 = (0);
while(true){
if((i__6587_6594 < count__6586_6593)){
var x_6595 = cljs.core._nth.call(null,chunk__6585_6592,i__6587_6594);
if((x_6595 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_6595)){
cljs.compiler.emit.call(null,x_6595);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_6595)){
cljs.core.apply.call(null,cljs.compiler.emits,x_6595);
} else {
if(goog.isFunction(x_6595)){
x_6595.call(null);
} else {
var s_6596 = cljs.core.print_str.call(null,x_6595);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__6584_6591,chunk__6585_6592,count__6586_6593,i__6587_6594,s_6596,x_6595){
return (function (p1__6582_SHARP_){
return (p1__6582_SHARP_ + cljs.core.count.call(null,s_6596));
});})(seq__6584_6591,chunk__6585_6592,count__6586_6593,i__6587_6594,s_6596,x_6595))
);
}

cljs.core.print.call(null,s_6596);

}
}
}
}

var G__6597 = seq__6584_6591;
var G__6598 = chunk__6585_6592;
var G__6599 = count__6586_6593;
var G__6600 = (i__6587_6594 + (1));
seq__6584_6591 = G__6597;
chunk__6585_6592 = G__6598;
count__6586_6593 = G__6599;
i__6587_6594 = G__6600;
continue;
} else {
var temp__4425__auto___6601 = cljs.core.seq.call(null,seq__6584_6591);
if(temp__4425__auto___6601){
var seq__6584_6602__$1 = temp__4425__auto___6601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6584_6602__$1)){
var c__1022__auto___6603 = cljs.core.chunk_first.call(null,seq__6584_6602__$1);
var G__6604 = cljs.core.chunk_rest.call(null,seq__6584_6602__$1);
var G__6605 = c__1022__auto___6603;
var G__6606 = cljs.core.count.call(null,c__1022__auto___6603);
var G__6607 = (0);
seq__6584_6591 = G__6604;
chunk__6585_6592 = G__6605;
count__6586_6593 = G__6606;
i__6587_6594 = G__6607;
continue;
} else {
var x_6608 = cljs.core.first.call(null,seq__6584_6602__$1);
if((x_6608 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_6608)){
cljs.compiler.emit.call(null,x_6608);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_6608)){
cljs.core.apply.call(null,cljs.compiler.emits,x_6608);
} else {
if(goog.isFunction(x_6608)){
x_6608.call(null);
} else {
var s_6609 = cljs.core.print_str.call(null,x_6608);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__6584_6591,chunk__6585_6592,count__6586_6593,i__6587_6594,s_6609,x_6608,seq__6584_6602__$1,temp__4425__auto___6601){
return (function (p1__6582_SHARP_){
return (p1__6582_SHARP_ + cljs.core.count.call(null,s_6609));
});})(seq__6584_6591,chunk__6585_6592,count__6586_6593,i__6587_6594,s_6609,x_6608,seq__6584_6602__$1,temp__4425__auto___6601))
);
}

cljs.core.print.call(null,s_6609);

}
}
}
}

var G__6610 = cljs.core.next.call(null,seq__6584_6602__$1);
var G__6611 = null;
var G__6612 = (0);
var G__6613 = (0);
seq__6584_6591 = G__6610;
chunk__6585_6592 = G__6611;
count__6586_6593 = G__6612;
i__6587_6594 = G__6613;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq6583){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6583));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__1284__auto__ = [];
var len__1277__auto___6618 = arguments.length;
var i__1278__auto___6619 = (0);
while(true){
if((i__1278__auto___6619 < len__1277__auto___6618)){
args__1284__auto__.push((arguments[i__1278__auto___6619]));

var G__6620 = (i__1278__auto___6619 + (1));
i__1278__auto___6619 = G__6620;
continue;
} else {
}
break;
}

var argseq__1285__auto__ = ((((0) < args__1284__auto__.length))?(new cljs.core.IndexedSeq(args__1284__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__1285__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__6615){
var map__6616 = p__6615;
var map__6616__$1 = ((((!((map__6616 == null)))?((((map__6616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6616):map__6616);
var m = map__6616__$1;
var gen_line = cljs.core.get.call(null,map__6616__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq6614){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6614));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__1193__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_6623_6625 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_6624_6626 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_6623_6625,_STAR_print_fn_STAR_6624_6626,sb__1193__auto__){
return (function (x__1194__auto__){
return sb__1193__auto__.append(x__1194__auto__);
});})(_STAR_print_newline_STAR_6623_6625,_STAR_print_fn_STAR_6624_6626,sb__1193__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_6624_6626;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_6623_6625;
}
return [cljs.core.str(sb__1193__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__1132__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__1133__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__1134__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__1135__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__1136__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__1136__auto__,method_table__1132__auto__,prefer_table__1133__auto__,method_cache__1134__auto__,cached_hierarchy__1135__auto__));
})();
}
cljs.core._add_method.call(null,cljs.compiler.emit_constant,null,(function (x){
return cljs.compiler.emits.call(null,"null");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Number,(function (x){
return cljs.compiler.emits.call(null,x);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,String,(function (x){
return cljs.compiler.emits.call(null,cljs.compiler.wrap_in_double_quotes.call(null,cljs.compiler.escape_string.call(null,x)));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Boolean,(function (x){
return cljs.compiler.emits.call(null,(cljs.core.truth_(x)?"true":"false"));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,RegExp,(function (x){
if(cljs.core._EQ_.call(null,"",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.call(null,"(new RegExp(\"\"))");
} else {
var vec__6627 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__6627,(0),null);
var flags = cljs.core.nth.call(null,vec__6627,(1),null);
var pattern = cljs.core.nth.call(null,vec__6627,(2),null);
return cljs.compiler.emits.call(null,pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace.call(null,kw);
var name = cljs.core.name.call(null,kw);
cljs.compiler.emits.call(null,"new cljs.core.Keyword(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,(cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,kw));

return cljs.compiler.emits.call(null,")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace.call(null,sym);
var name = cljs.core.name.call(null,sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.call(null,"new cljs.core.Symbol(");

cljs.compiler.emit_constant.call(null,ns);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,name);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,symstr);

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,cljs.core.hash.call(null,sym));

cljs.compiler.emits.call(null,",");

cljs.compiler.emit_constant.call(null,null);

return cljs.compiler.emits.call(null,")");
});
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_keyword.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))))){
var value = x.call(null,new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return cljs.compiler.emits.call(null,"cljs.core.",value);
} else {
return cljs.compiler.emits_symbol.call(null,x);
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,Date,(function (date){
return cljs.compiler.emits.call(null,"new Date(",date.getTime(),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_constant,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.call(null,"new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash.call(null,uuid_str),")");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__6629){
var map__6630 = p__6629;
var map__6630__$1 = ((((!((map__6630 == null)))?((((map__6630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6630):map__6630);
var arg = map__6630__$1;
var info = cljs.core.get.call(null,map__6630__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__6630__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__6630__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__219__auto__ = js_module_name;
if(cljs.core.truth_(or__219__auto__)){
return or__219__auto__;
} else {
return cljs.core.name.call(null,var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.call(null,cljs.compiler.munge.call(null,arg));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__6632 = info__$1;
var G__6632__$1 = ((cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.call(null,G__6632):G__6632);
return G__6632__$1;
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__6633){
var map__6634 = p__6633;
var map__6634__$1 = ((((!((map__6634 == null)))?((((map__6634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6634):map__6634);
var arg = map__6634__$1;
var env = cljs.core.get.call(null,map__6634__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__6634__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__6634__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__6634__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))))].join('')));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))))].join('')));
}

var map__6636 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__6636__$1 = ((((!((map__6636 == null)))?((((map__6636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6636):map__6636);
var name = cljs.core.get.call(null,map__6636__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__6638){
var map__6639 = p__6638;
var map__6639__$1 = ((((!((map__6639 == null)))?((((map__6639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6639):map__6639);
var expr = cljs.core.get.call(null,map__6639__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__6639__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__6639__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__6641_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__6641_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__6642){
var map__6643 = p__6642;
var map__6643__$1 = ((((!((map__6643 == null)))?((((map__6643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6643):map__6643);
var env = cljs.core.get.call(null,map__6643__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__6643__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__6643__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if((cljs.core.count.call(null,keys) === (0))){
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count.call(null,keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_.call(null,keys))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,keys),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,keys,vals)),"], true, false)");
}
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep.call(null,keys),"],[",cljs.compiler.comma_sep.call(null,vals),"])");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__6645){
var map__6646 = p__6645;
var map__6646__$1 = ((((!((map__6646 == null)))?((((map__6646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6646):map__6646);
var items = cljs.core.get.call(null,map__6646__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6646__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__6648){
var map__6649 = p__6648;
var map__6649__$1 = ((((!((map__6649 == null)))?((((map__6649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6649):map__6649);
var items = cljs.core.get.call(null,map__6649__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6649__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_6651 = cljs.core.count.call(null,items);
if((cnt_6651 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_6651,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__6652_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__6652_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__6653){
var map__6654 = p__6653;
var map__6654__$1 = ((((!((map__6654 == null)))?((((map__6654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6654):map__6654);
var items = cljs.core.get.call(null,map__6654__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__6654__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_.call(null,items))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count.call(null,items),", [",cljs.compiler.comma_sep.call(null,cljs.core.interleave.call(null,items,cljs.core.repeat.call(null,"null"))),"], null), null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");

}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__6656){
var map__6657 = p__6656;
var map__6657__$1 = ((((!((map__6657 == null)))?((((map__6657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6657):map__6657);
var items = cljs.core.get.call(null,map__6657__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__6657__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__6657__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"{");

var temp__4425__auto___6667 = cljs.core.seq.call(null,items);
if(temp__4425__auto___6667){
var items_6668__$1 = temp__4425__auto___6667;
var vec__6659_6669 = items_6668__$1;
var vec__6660_6670 = cljs.core.nth.call(null,vec__6659_6669,(0),null);
var k_6671 = cljs.core.nth.call(null,vec__6660_6670,(0),null);
var v_6672 = cljs.core.nth.call(null,vec__6660_6670,(1),null);
var r_6673 = cljs.core.nthnext.call(null,vec__6659_6669,(1));
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_6671),"\": ",v_6672);

var seq__6661_6674 = cljs.core.seq.call(null,r_6673);
var chunk__6662_6675 = null;
var count__6663_6676 = (0);
var i__6664_6677 = (0);
while(true){
if((i__6664_6677 < count__6663_6676)){
var vec__6665_6678 = cljs.core._nth.call(null,chunk__6662_6675,i__6664_6677);
var k_6679__$1 = cljs.core.nth.call(null,vec__6665_6678,(0),null);
var v_6680__$1 = cljs.core.nth.call(null,vec__6665_6678,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_6679__$1),"\": ",v_6680__$1);

var G__6681 = seq__6661_6674;
var G__6682 = chunk__6662_6675;
var G__6683 = count__6663_6676;
var G__6684 = (i__6664_6677 + (1));
seq__6661_6674 = G__6681;
chunk__6662_6675 = G__6682;
count__6663_6676 = G__6683;
i__6664_6677 = G__6684;
continue;
} else {
var temp__4425__auto___6685__$1 = cljs.core.seq.call(null,seq__6661_6674);
if(temp__4425__auto___6685__$1){
var seq__6661_6686__$1 = temp__4425__auto___6685__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6661_6686__$1)){
var c__1022__auto___6687 = cljs.core.chunk_first.call(null,seq__6661_6686__$1);
var G__6688 = cljs.core.chunk_rest.call(null,seq__6661_6686__$1);
var G__6689 = c__1022__auto___6687;
var G__6690 = cljs.core.count.call(null,c__1022__auto___6687);
var G__6691 = (0);
seq__6661_6674 = G__6688;
chunk__6662_6675 = G__6689;
count__6663_6676 = G__6690;
i__6664_6677 = G__6691;
continue;
} else {
var vec__6666_6692 = cljs.core.first.call(null,seq__6661_6686__$1);
var k_6693__$1 = cljs.core.nth.call(null,vec__6666_6692,(0),null);
var v_6694__$1 = cljs.core.nth.call(null,vec__6666_6692,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_6693__$1),"\": ",v_6694__$1);

var G__6695 = cljs.core.next.call(null,seq__6661_6686__$1);
var G__6696 = null;
var G__6697 = (0);
var G__6698 = (0);
seq__6661_6674 = G__6695;
chunk__6662_6675 = G__6696;
count__6663_6676 = G__6697;
i__6664_6677 = G__6698;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.call(null,"}");
} else {
cljs.compiler.emits.call(null,"[",cljs.compiler.comma_sep.call(null,items),"]");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__6699){
var map__6700 = p__6699;
var map__6700__$1 = ((((!((map__6700 == null)))?((((map__6700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6700):map__6700);
var form = cljs.core.get.call(null,map__6700__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__6700__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__6702){
var map__6705 = p__6702;
var map__6705__$1 = ((((!((map__6705 == null)))?((((map__6705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6705):map__6705);
var op = cljs.core.get.call(null,map__6705__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__6705__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__207__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__207__auto__){
var and__207__auto____$1 = form;
if(cljs.core.truth_(and__207__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__207__auto____$1;
}
} else {
return and__207__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__6707){
var map__6710 = p__6707;
var map__6710__$1 = ((((!((map__6710 == null)))?((((map__6710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6710):map__6710);
var op = cljs.core.get.call(null,map__6710__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__6710__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__219__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__219__auto__)){
return or__219__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__6712){
var map__6713 = p__6712;
var map__6713__$1 = ((((!((map__6713 == null)))?((((map__6713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6713):map__6713);
var test = cljs.core.get.call(null,map__6713__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__6713__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__6713__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__6713__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__6713__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__219__auto__ = unchecked;
if(cljs.core.truth_(or__219__auto__)){
return or__219__auto__;
} else {
return cljs.compiler.safe_test_QMARK_.call(null,env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_.call(null,test))){
return cljs.compiler.emitln.call(null,else$);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")");
} else {
if(checked){
cljs.compiler.emitln.call(null,"if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.call(null,"if(",test,"){");
}

cljs.compiler.emitln.call(null,then,"} else {");

return cljs.compiler.emitln.call(null,else$,"}");
}

}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__6715){
var map__6716 = p__6715;
var map__6716__$1 = ((((!((map__6716 == null)))?((((map__6716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6716):map__6716);
var v = cljs.core.get.call(null,map__6716__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__6716__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__6716__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__6716__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__6716__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.call(null,"(function(){");
} else {
}

var gs = cljs.core.gensym.call(null,"caseval__");
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"var ",gs,";");
} else {
}

cljs.compiler.emitln.call(null,"switch (",v,") {");

var seq__6718_6732 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__6719_6733 = null;
var count__6720_6734 = (0);
var i__6721_6735 = (0);
while(true){
if((i__6721_6735 < count__6720_6734)){
var vec__6722_6736 = cljs.core._nth.call(null,chunk__6719_6733,i__6721_6735);
var ts_6737 = cljs.core.nth.call(null,vec__6722_6736,(0),null);
var then_6738 = cljs.core.nth.call(null,vec__6722_6736,(1),null);
var seq__6723_6739 = cljs.core.seq.call(null,ts_6737);
var chunk__6724_6740 = null;
var count__6725_6741 = (0);
var i__6726_6742 = (0);
while(true){
if((i__6726_6742 < count__6725_6741)){
var test_6743 = cljs.core._nth.call(null,chunk__6724_6740,i__6726_6742);
cljs.compiler.emitln.call(null,"case ",test_6743,":");

var G__6744 = seq__6723_6739;
var G__6745 = chunk__6724_6740;
var G__6746 = count__6725_6741;
var G__6747 = (i__6726_6742 + (1));
seq__6723_6739 = G__6744;
chunk__6724_6740 = G__6745;
count__6725_6741 = G__6746;
i__6726_6742 = G__6747;
continue;
} else {
var temp__4425__auto___6748 = cljs.core.seq.call(null,seq__6723_6739);
if(temp__4425__auto___6748){
var seq__6723_6749__$1 = temp__4425__auto___6748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6723_6749__$1)){
var c__1022__auto___6750 = cljs.core.chunk_first.call(null,seq__6723_6749__$1);
var G__6751 = cljs.core.chunk_rest.call(null,seq__6723_6749__$1);
var G__6752 = c__1022__auto___6750;
var G__6753 = cljs.core.count.call(null,c__1022__auto___6750);
var G__6754 = (0);
seq__6723_6739 = G__6751;
chunk__6724_6740 = G__6752;
count__6725_6741 = G__6753;
i__6726_6742 = G__6754;
continue;
} else {
var test_6755 = cljs.core.first.call(null,seq__6723_6749__$1);
cljs.compiler.emitln.call(null,"case ",test_6755,":");

var G__6756 = cljs.core.next.call(null,seq__6723_6749__$1);
var G__6757 = null;
var G__6758 = (0);
var G__6759 = (0);
seq__6723_6739 = G__6756;
chunk__6724_6740 = G__6757;
count__6725_6741 = G__6758;
i__6726_6742 = G__6759;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_6738);
} else {
cljs.compiler.emitln.call(null,then_6738);
}

cljs.compiler.emitln.call(null,"break;");

var G__6760 = seq__6718_6732;
var G__6761 = chunk__6719_6733;
var G__6762 = count__6720_6734;
var G__6763 = (i__6721_6735 + (1));
seq__6718_6732 = G__6760;
chunk__6719_6733 = G__6761;
count__6720_6734 = G__6762;
i__6721_6735 = G__6763;
continue;
} else {
var temp__4425__auto___6764 = cljs.core.seq.call(null,seq__6718_6732);
if(temp__4425__auto___6764){
var seq__6718_6765__$1 = temp__4425__auto___6764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6718_6765__$1)){
var c__1022__auto___6766 = cljs.core.chunk_first.call(null,seq__6718_6765__$1);
var G__6767 = cljs.core.chunk_rest.call(null,seq__6718_6765__$1);
var G__6768 = c__1022__auto___6766;
var G__6769 = cljs.core.count.call(null,c__1022__auto___6766);
var G__6770 = (0);
seq__6718_6732 = G__6767;
chunk__6719_6733 = G__6768;
count__6720_6734 = G__6769;
i__6721_6735 = G__6770;
continue;
} else {
var vec__6727_6771 = cljs.core.first.call(null,seq__6718_6765__$1);
var ts_6772 = cljs.core.nth.call(null,vec__6727_6771,(0),null);
var then_6773 = cljs.core.nth.call(null,vec__6727_6771,(1),null);
var seq__6728_6774 = cljs.core.seq.call(null,ts_6772);
var chunk__6729_6775 = null;
var count__6730_6776 = (0);
var i__6731_6777 = (0);
while(true){
if((i__6731_6777 < count__6730_6776)){
var test_6778 = cljs.core._nth.call(null,chunk__6729_6775,i__6731_6777);
cljs.compiler.emitln.call(null,"case ",test_6778,":");

var G__6779 = seq__6728_6774;
var G__6780 = chunk__6729_6775;
var G__6781 = count__6730_6776;
var G__6782 = (i__6731_6777 + (1));
seq__6728_6774 = G__6779;
chunk__6729_6775 = G__6780;
count__6730_6776 = G__6781;
i__6731_6777 = G__6782;
continue;
} else {
var temp__4425__auto___6783__$1 = cljs.core.seq.call(null,seq__6728_6774);
if(temp__4425__auto___6783__$1){
var seq__6728_6784__$1 = temp__4425__auto___6783__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6728_6784__$1)){
var c__1022__auto___6785 = cljs.core.chunk_first.call(null,seq__6728_6784__$1);
var G__6786 = cljs.core.chunk_rest.call(null,seq__6728_6784__$1);
var G__6787 = c__1022__auto___6785;
var G__6788 = cljs.core.count.call(null,c__1022__auto___6785);
var G__6789 = (0);
seq__6728_6774 = G__6786;
chunk__6729_6775 = G__6787;
count__6730_6776 = G__6788;
i__6731_6777 = G__6789;
continue;
} else {
var test_6790 = cljs.core.first.call(null,seq__6728_6784__$1);
cljs.compiler.emitln.call(null,"case ",test_6790,":");

var G__6791 = cljs.core.next.call(null,seq__6728_6784__$1);
var G__6792 = null;
var G__6793 = (0);
var G__6794 = (0);
seq__6728_6774 = G__6791;
chunk__6729_6775 = G__6792;
count__6730_6776 = G__6793;
i__6731_6777 = G__6794;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_6773);
} else {
cljs.compiler.emitln.call(null,then_6773);
}

cljs.compiler.emitln.call(null,"break;");

var G__6795 = cljs.core.next.call(null,seq__6718_6765__$1);
var G__6796 = null;
var G__6797 = (0);
var G__6798 = (0);
seq__6718_6732 = G__6795;
chunk__6719_6733 = G__6796;
count__6720_6734 = G__6797;
i__6721_6735 = G__6798;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.call(null,"default:");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",default$);
} else {
cljs.compiler.emitln.call(null,default$);
}
} else {
}

cljs.compiler.emitln.call(null,"}");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.call(null,"return ",gs,";})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__6799){
var map__6800 = p__6799;
var map__6800__$1 = ((((!((map__6800 == null)))?((((map__6800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6800):map__6800);
var throw$ = cljs.core.get.call(null,map__6800__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__6800__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.call(null,"(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.call(null,"throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.call(null,cljs.compiler.mapped_types,t))){
return cljs.core.get.call(null,cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__6805 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__6805,(0),null);
var rstr = cljs.core.nth.call(null,vec__6805,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__6805,fstr,rstr,ret_t,axstr){
return (function (p1__6802_SHARP_){
return cljs$compiler$resolve_type.call(null,env,p1__6802_SHARP_);
});})(idx,vec__6805,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__6806 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
var G__6806__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__6806),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__6806);
return G__6806__$1;
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type.call(null,env,cljs.core.subs.call(null,t,(0),(cljs.core.count.call(null,t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.call(null,[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,cljs.core.symbol.call(null,t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.call(null,clojure.string.trim.call(null,ts),(1),(cljs.core.count.call(null,ts) - (1)));
var xs = clojure.string.split.call(null,ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.call(null,"|",cljs.core.map.call(null,((function (ts__$1,xs){
return (function (p1__6807_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__6807_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__6810 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__6810,(0),null);
var ts = cljs.core.nth.call(null,vec__6810,(1),null);
var n = cljs.core.nth.call(null,vec__6810,(2),null);
var xs = cljs.core.nthnext.call(null,vec__6810,(3));
if(cljs.core.truth_((function (){var and__207__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__207__auto__){
var and__207__auto____$1 = ts;
if(cljs.core.truth_(and__207__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__207__auto____$1;
}
} else {
return and__207__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__6811 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var p = cljs.core.nth.call(null,vec__6811,(0),null);
var ts = cljs.core.nth.call(null,vec__6811,(1),null);
var xs = cljs.core.nthnext.call(null,vec__6811,(2));
if(cljs.core.truth_((function (){var and__207__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__207__auto__){
var and__207__auto____$1 = ts;
if(cljs.core.truth_(and__207__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__207__auto____$1;
}
} else {
return and__207__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args6813 = [];
var len__1277__auto___6840 = arguments.length;
var i__1278__auto___6841 = (0);
while(true){
if((i__1278__auto___6841 < len__1277__auto___6840)){
args6813.push((arguments[i__1278__auto___6841]));

var G__6842 = (i__1278__auto___6841 + (1));
i__1278__auto___6841 = G__6842;
continue;
} else {
}
break;
}

var G__6815 = args6813.length;
switch (G__6815) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6813.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.call(null,null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.call(null,docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__6831 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__6812_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__6812_SHARP_);
} else {
return p1__6812_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var x = cljs.core.nth.call(null,vec__6831,(0),null);
var ys = cljs.core.nthnext.call(null,vec__6831,(1));
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__6832 = cljs.core.seq.call(null,ys);
var chunk__6833 = null;
var count__6834 = (0);
var i__6835 = (0);
while(true){
if((i__6835 < count__6834)){
var next_line = cljs.core._nth.call(null,chunk__6833,i__6835);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__6844 = seq__6832;
var G__6845 = chunk__6833;
var G__6846 = count__6834;
var G__6847 = (i__6835 + (1));
seq__6832 = G__6844;
chunk__6833 = G__6845;
count__6834 = G__6846;
i__6835 = G__6847;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6832);
if(temp__4425__auto__){
var seq__6832__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6832__$1)){
var c__1022__auto__ = cljs.core.chunk_first.call(null,seq__6832__$1);
var G__6848 = cljs.core.chunk_rest.call(null,seq__6832__$1);
var G__6849 = c__1022__auto__;
var G__6850 = cljs.core.count.call(null,c__1022__auto__);
var G__6851 = (0);
seq__6832 = G__6848;
chunk__6833 = G__6849;
count__6834 = G__6850;
i__6835 = G__6851;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__6832__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__6852 = cljs.core.next.call(null,seq__6832__$1);
var G__6853 = null;
var G__6854 = (0);
var G__6855 = (0);
seq__6832 = G__6852;
chunk__6833 = G__6853;
count__6834 = G__6854;
i__6835 = G__6855;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq.call(null,docs__$2)){
cljs.compiler.emitln.call(null,"/**");

var seq__6836_6856 = cljs.core.seq.call(null,docs__$2);
var chunk__6837_6857 = null;
var count__6838_6858 = (0);
var i__6839_6859 = (0);
while(true){
if((i__6839_6859 < count__6838_6858)){
var e_6860 = cljs.core._nth.call(null,chunk__6837_6857,i__6839_6859);
if(cljs.core.truth_(e_6860)){
print_comment_lines.call(null,e_6860);
} else {
}

var G__6861 = seq__6836_6856;
var G__6862 = chunk__6837_6857;
var G__6863 = count__6838_6858;
var G__6864 = (i__6839_6859 + (1));
seq__6836_6856 = G__6861;
chunk__6837_6857 = G__6862;
count__6838_6858 = G__6863;
i__6839_6859 = G__6864;
continue;
} else {
var temp__4425__auto___6865 = cljs.core.seq.call(null,seq__6836_6856);
if(temp__4425__auto___6865){
var seq__6836_6866__$1 = temp__4425__auto___6865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6836_6866__$1)){
var c__1022__auto___6867 = cljs.core.chunk_first.call(null,seq__6836_6866__$1);
var G__6868 = cljs.core.chunk_rest.call(null,seq__6836_6866__$1);
var G__6869 = c__1022__auto___6867;
var G__6870 = cljs.core.count.call(null,c__1022__auto___6867);
var G__6871 = (0);
seq__6836_6856 = G__6868;
chunk__6837_6857 = G__6869;
count__6838_6858 = G__6870;
i__6839_6859 = G__6871;
continue;
} else {
var e_6872 = cljs.core.first.call(null,seq__6836_6866__$1);
if(cljs.core.truth_(e_6872)){
print_comment_lines.call(null,e_6872);
} else {
}

var G__6873 = cljs.core.next.call(null,seq__6836_6866__$1);
var G__6874 = null;
var G__6875 = (0);
var G__6876 = (0);
seq__6836_6856 = G__6873;
chunk__6837_6857 = G__6874;
count__6838_6858 = G__6875;
i__6839_6859 = G__6876;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.call(null," */");
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__207__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__6878_SHARP_){
return goog.string.startsWith(p1__6878_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__207__auto__)){
var and__207__auto____$1 = opts;
if(cljs.core.truth_(and__207__auto____$1)){
var and__207__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__207__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__207__auto____$2;
}
} else {
return and__207__auto____$1;
}
} else {
return and__207__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__6879){
var map__6880 = p__6879;
var map__6880__$1 = ((((!((map__6880 == null)))?((((map__6880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6880):map__6880);
var name = cljs.core.get.call(null,map__6880__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__6880__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__6880__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__6880__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__6880__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__6880__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__6880__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__6880__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__6880__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
var mname = cljs.compiler.munge.call(null,name);
cljs.compiler.emit_comment.call(null,env,doc,cljs.core.concat.call(null,jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"return (");
} else {
}

cljs.compiler.emitln.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.call(null," = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define.call(null,mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,"; return (");

cljs.compiler.emits.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast));

cljs.compiler.emitln.call(null,");})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,")");
} else {
}
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.call(null,";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.call(null,"goog.exportSymbol('",cljs.compiler.munge.call(null,export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__207__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__207__auto__)){
return test;
} else {
return and__207__auto__;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,";");
} else {
}

return cljs.compiler.emitln.call(null,var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__6882){
var map__6899 = p__6882;
var map__6899__$1 = ((((!((map__6899 == null)))?((((map__6899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6899):map__6899);
var name = cljs.core.get.call(null,map__6899__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__6899__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__6899__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__6901_6915 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__6902_6916 = null;
var count__6903_6917 = (0);
var i__6904_6918 = (0);
while(true){
if((i__6904_6918 < count__6903_6917)){
var vec__6905_6919 = cljs.core._nth.call(null,chunk__6902_6916,i__6904_6918);
var i_6920 = cljs.core.nth.call(null,vec__6905_6919,(0),null);
var param_6921 = cljs.core.nth.call(null,vec__6905_6919,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_6921);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__6922 = seq__6901_6915;
var G__6923 = chunk__6902_6916;
var G__6924 = count__6903_6917;
var G__6925 = (i__6904_6918 + (1));
seq__6901_6915 = G__6922;
chunk__6902_6916 = G__6923;
count__6903_6917 = G__6924;
i__6904_6918 = G__6925;
continue;
} else {
var temp__4425__auto___6926 = cljs.core.seq.call(null,seq__6901_6915);
if(temp__4425__auto___6926){
var seq__6901_6927__$1 = temp__4425__auto___6926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6901_6927__$1)){
var c__1022__auto___6928 = cljs.core.chunk_first.call(null,seq__6901_6927__$1);
var G__6929 = cljs.core.chunk_rest.call(null,seq__6901_6927__$1);
var G__6930 = c__1022__auto___6928;
var G__6931 = cljs.core.count.call(null,c__1022__auto___6928);
var G__6932 = (0);
seq__6901_6915 = G__6929;
chunk__6902_6916 = G__6930;
count__6903_6917 = G__6931;
i__6904_6918 = G__6932;
continue;
} else {
var vec__6906_6933 = cljs.core.first.call(null,seq__6901_6927__$1);
var i_6934 = cljs.core.nth.call(null,vec__6906_6933,(0),null);
var param_6935 = cljs.core.nth.call(null,vec__6906_6933,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_6935);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__6936 = cljs.core.next.call(null,seq__6901_6927__$1);
var G__6937 = null;
var G__6938 = (0);
var G__6939 = (0);
seq__6901_6915 = G__6936;
chunk__6902_6916 = G__6937;
count__6903_6917 = G__6938;
i__6904_6918 = G__6939;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count.call(null,params))){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,cljs.core.butlast.call(null,params)));

cljs.compiler.emitln.call(null," = cljs.core.first(",arglist,");");

cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.rest(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__6907_6940 = cljs.core.seq.call(null,params);
var chunk__6908_6941 = null;
var count__6909_6942 = (0);
var i__6910_6943 = (0);
while(true){
if((i__6910_6943 < count__6909_6942)){
var param_6944 = cljs.core._nth.call(null,chunk__6908_6941,i__6910_6943);
cljs.compiler.emit.call(null,param_6944);

if(cljs.core._EQ_.call(null,param_6944,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__6945 = seq__6907_6940;
var G__6946 = chunk__6908_6941;
var G__6947 = count__6909_6942;
var G__6948 = (i__6910_6943 + (1));
seq__6907_6940 = G__6945;
chunk__6908_6941 = G__6946;
count__6909_6942 = G__6947;
i__6910_6943 = G__6948;
continue;
} else {
var temp__4425__auto___6949 = cljs.core.seq.call(null,seq__6907_6940);
if(temp__4425__auto___6949){
var seq__6907_6950__$1 = temp__4425__auto___6949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6907_6950__$1)){
var c__1022__auto___6951 = cljs.core.chunk_first.call(null,seq__6907_6950__$1);
var G__6952 = cljs.core.chunk_rest.call(null,seq__6907_6950__$1);
var G__6953 = c__1022__auto___6951;
var G__6954 = cljs.core.count.call(null,c__1022__auto___6951);
var G__6955 = (0);
seq__6907_6940 = G__6952;
chunk__6908_6941 = G__6953;
count__6909_6942 = G__6954;
i__6910_6943 = G__6955;
continue;
} else {
var param_6956 = cljs.core.first.call(null,seq__6907_6950__$1);
cljs.compiler.emit.call(null,param_6956);

if(cljs.core._EQ_.call(null,param_6956,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__6957 = cljs.core.next.call(null,seq__6907_6950__$1);
var G__6958 = null;
var G__6959 = (0);
var G__6960 = (0);
seq__6907_6940 = G__6957;
chunk__6908_6941 = G__6958;
count__6909_6942 = G__6959;
i__6910_6943 = G__6960;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
} else {
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = cljs.core.seq(",arglist,");");

cljs.compiler.emits.call(null,"return ",delegate_name,"(");

var seq__6911_6961 = cljs.core.seq.call(null,params);
var chunk__6912_6962 = null;
var count__6913_6963 = (0);
var i__6914_6964 = (0);
while(true){
if((i__6914_6964 < count__6913_6963)){
var param_6965 = cljs.core._nth.call(null,chunk__6912_6962,i__6914_6964);
cljs.compiler.emit.call(null,param_6965);

if(cljs.core._EQ_.call(null,param_6965,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__6966 = seq__6911_6961;
var G__6967 = chunk__6912_6962;
var G__6968 = count__6913_6963;
var G__6969 = (i__6914_6964 + (1));
seq__6911_6961 = G__6966;
chunk__6912_6962 = G__6967;
count__6913_6963 = G__6968;
i__6914_6964 = G__6969;
continue;
} else {
var temp__4425__auto___6970 = cljs.core.seq.call(null,seq__6911_6961);
if(temp__4425__auto___6970){
var seq__6911_6971__$1 = temp__4425__auto___6970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6911_6971__$1)){
var c__1022__auto___6972 = cljs.core.chunk_first.call(null,seq__6911_6971__$1);
var G__6973 = cljs.core.chunk_rest.call(null,seq__6911_6971__$1);
var G__6974 = c__1022__auto___6972;
var G__6975 = cljs.core.count.call(null,c__1022__auto___6972);
var G__6976 = (0);
seq__6911_6961 = G__6973;
chunk__6912_6962 = G__6974;
count__6913_6963 = G__6975;
i__6914_6964 = G__6976;
continue;
} else {
var param_6977 = cljs.core.first.call(null,seq__6911_6971__$1);
cljs.compiler.emit.call(null,param_6977);

if(cljs.core._EQ_.call(null,param_6977,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__6978 = cljs.core.next.call(null,seq__6911_6971__$1);
var G__6979 = null;
var G__6980 = (0);
var G__6981 = (0);
seq__6911_6961 = G__6978;
chunk__6912_6962 = G__6979;
count__6913_6963 = G__6980;
i__6914_6964 = G__6981;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,");");
}

return cljs.compiler.emits.call(null,"})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__6986 = cljs.core.seq.call(null,params);
var chunk__6987 = null;
var count__6988 = (0);
var i__6989 = (0);
while(true){
if((i__6989 < count__6988)){
var param = cljs.core._nth.call(null,chunk__6987,i__6989);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__6990 = seq__6986;
var G__6991 = chunk__6987;
var G__6992 = count__6988;
var G__6993 = (i__6989 + (1));
seq__6986 = G__6990;
chunk__6987 = G__6991;
count__6988 = G__6992;
i__6989 = G__6993;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6986);
if(temp__4425__auto__){
var seq__6986__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6986__$1)){
var c__1022__auto__ = cljs.core.chunk_first.call(null,seq__6986__$1);
var G__6994 = cljs.core.chunk_rest.call(null,seq__6986__$1);
var G__6995 = c__1022__auto__;
var G__6996 = cljs.core.count.call(null,c__1022__auto__);
var G__6997 = (0);
seq__6986 = G__6994;
chunk__6987 = G__6995;
count__6988 = G__6996;
i__6989 = G__6997;
continue;
} else {
var param = cljs.core.first.call(null,seq__6986__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__6998 = cljs.core.next.call(null,seq__6986__$1);
var G__6999 = null;
var G__7000 = (0);
var G__7001 = (0);
seq__6986 = G__6998;
chunk__6987 = G__6999;
count__6988 = G__7000;
i__6989 = G__7001;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__7002){
var map__7005 = p__7002;
var map__7005__$1 = ((((!((map__7005 == null)))?((((map__7005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7005):map__7005);
var type = cljs.core.get.call(null,map__7005__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7005__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__7005__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__7005__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__7005__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__7005__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7005__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__7005__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(function ",cljs.compiler.munge.call(null,name),"(");

cljs.compiler.emit_fn_params.call(null,params);

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emits.call(null,"})");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_.call(null,startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))))].join('')));
}

var mname = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.call(null,"var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");");

cljs.compiler.emitln.call(null,"while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}");

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__7007){
var map__7018 = p__7007;
var map__7018__$1 = ((((!((map__7018 == null)))?((((map__7018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7018):map__7018);
var f = map__7018__$1;
var type = cljs.core.get.call(null,map__7018__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__7018__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__7018__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__7018__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__7018__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__7018__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__7018__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__7018__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_7028__$1 = (function (){var or__219__auto__ = name;
if(cljs.core.truth_(or__219__auto__)){
return or__219__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7029 = cljs.compiler.munge.call(null,name_7028__$1);
var delegate_name_7030 = [cljs.core.str(mname_7029),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_7030," = function (");

var seq__7020_7031 = cljs.core.seq.call(null,params);
var chunk__7021_7032 = null;
var count__7022_7033 = (0);
var i__7023_7034 = (0);
while(true){
if((i__7023_7034 < count__7022_7033)){
var param_7035 = cljs.core._nth.call(null,chunk__7021_7032,i__7023_7034);
cljs.compiler.emit.call(null,param_7035);

if(cljs.core._EQ_.call(null,param_7035,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7036 = seq__7020_7031;
var G__7037 = chunk__7021_7032;
var G__7038 = count__7022_7033;
var G__7039 = (i__7023_7034 + (1));
seq__7020_7031 = G__7036;
chunk__7021_7032 = G__7037;
count__7022_7033 = G__7038;
i__7023_7034 = G__7039;
continue;
} else {
var temp__4425__auto___7040 = cljs.core.seq.call(null,seq__7020_7031);
if(temp__4425__auto___7040){
var seq__7020_7041__$1 = temp__4425__auto___7040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7020_7041__$1)){
var c__1022__auto___7042 = cljs.core.chunk_first.call(null,seq__7020_7041__$1);
var G__7043 = cljs.core.chunk_rest.call(null,seq__7020_7041__$1);
var G__7044 = c__1022__auto___7042;
var G__7045 = cljs.core.count.call(null,c__1022__auto___7042);
var G__7046 = (0);
seq__7020_7031 = G__7043;
chunk__7021_7032 = G__7044;
count__7022_7033 = G__7045;
i__7023_7034 = G__7046;
continue;
} else {
var param_7047 = cljs.core.first.call(null,seq__7020_7041__$1);
cljs.compiler.emit.call(null,param_7047);

if(cljs.core._EQ_.call(null,param_7047,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7048 = cljs.core.next.call(null,seq__7020_7041__$1);
var G__7049 = null;
var G__7050 = (0);
var G__7051 = (0);
seq__7020_7031 = G__7048;
chunk__7021_7032 = G__7049;
count__7022_7033 = G__7050;
i__7023_7034 = G__7051;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"){");

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,"var ",mname_7029," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_7052 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_7052,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_7030,".call(this,");

var seq__7024_7053 = cljs.core.seq.call(null,params);
var chunk__7025_7054 = null;
var count__7026_7055 = (0);
var i__7027_7056 = (0);
while(true){
if((i__7027_7056 < count__7026_7055)){
var param_7057 = cljs.core._nth.call(null,chunk__7025_7054,i__7027_7056);
cljs.compiler.emit.call(null,param_7057);

if(cljs.core._EQ_.call(null,param_7057,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7058 = seq__7024_7053;
var G__7059 = chunk__7025_7054;
var G__7060 = count__7026_7055;
var G__7061 = (i__7027_7056 + (1));
seq__7024_7053 = G__7058;
chunk__7025_7054 = G__7059;
count__7026_7055 = G__7060;
i__7027_7056 = G__7061;
continue;
} else {
var temp__4425__auto___7062 = cljs.core.seq.call(null,seq__7024_7053);
if(temp__4425__auto___7062){
var seq__7024_7063__$1 = temp__4425__auto___7062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7024_7063__$1)){
var c__1022__auto___7064 = cljs.core.chunk_first.call(null,seq__7024_7063__$1);
var G__7065 = cljs.core.chunk_rest.call(null,seq__7024_7063__$1);
var G__7066 = c__1022__auto___7064;
var G__7067 = cljs.core.count.call(null,c__1022__auto___7064);
var G__7068 = (0);
seq__7024_7053 = G__7065;
chunk__7025_7054 = G__7066;
count__7026_7055 = G__7067;
i__7027_7056 = G__7068;
continue;
} else {
var param_7069 = cljs.core.first.call(null,seq__7024_7063__$1);
cljs.compiler.emit.call(null,param_7069);

if(cljs.core._EQ_.call(null,param_7069,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__7070 = cljs.core.next.call(null,seq__7024_7063__$1);
var G__7071 = null;
var G__7072 = (0);
var G__7073 = (0);
seq__7024_7053 = G__7070;
chunk__7025_7054 = G__7071;
count__7026_7055 = G__7072;
i__7027_7056 = G__7073;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_7029,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_7029,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_7028__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_7029,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_7030,";");

cljs.compiler.emitln.call(null,"return ",mname_7029,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__7077){
var map__7078 = p__7077;
var map__7078__$1 = ((((!((map__7078 == null)))?((((map__7078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7078):map__7078);
var name = cljs.core.get.call(null,map__7078__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__7078__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__7078__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__7078__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__7078__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__7078__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__7078__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__7078,map__7078__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__7074_SHARP_){
var and__207__auto__ = p1__7074_SHARP_;
if(cljs.core.truth_(and__207__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__7074_SHARP_));
} else {
return and__207__auto__;
}
});})(map__7078,map__7078__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)),cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),loop_lets))));
if(loop_locals){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"((function (",cljs.compiler.comma_sep.call(null,cljs.core.map.call(null,cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.call(null,"return ");
}
} else {
}

if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method.call(null,cljs.core.assoc.call(null,cljs.core.first.call(null,methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_7099__$1 = (function (){var or__219__auto__ = name;
if(cljs.core.truth_(or__219__auto__)){
return or__219__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_7100 = cljs.compiler.munge.call(null,name_7099__$1);
var maxparams_7101 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_7102 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_7099__$1,mname_7100,maxparams_7101,loop_locals,map__7078,map__7078__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_7100),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_7099__$1,mname_7100,maxparams_7101,loop_locals,map__7078,map__7078__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_7103 = cljs.core.sort_by.call(null,((function (name_7099__$1,mname_7100,maxparams_7101,mmap_7102,loop_locals,map__7078,map__7078__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__7075_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__7075_SHARP_)));
});})(name_7099__$1,mname_7100,maxparams_7101,mmap_7102,loop_locals,map__7078,map__7078__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_7102));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_7100," = null;");

var seq__7080_7104 = cljs.core.seq.call(null,ms_7103);
var chunk__7081_7105 = null;
var count__7082_7106 = (0);
var i__7083_7107 = (0);
while(true){
if((i__7083_7107 < count__7082_7106)){
var vec__7084_7108 = cljs.core._nth.call(null,chunk__7081_7105,i__7083_7107);
var n_7109 = cljs.core.nth.call(null,vec__7084_7108,(0),null);
var meth_7110 = cljs.core.nth.call(null,vec__7084_7108,(1),null);
cljs.compiler.emits.call(null,"var ",n_7109," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7110))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7110);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7110);
}

cljs.compiler.emitln.call(null,";");

var G__7111 = seq__7080_7104;
var G__7112 = chunk__7081_7105;
var G__7113 = count__7082_7106;
var G__7114 = (i__7083_7107 + (1));
seq__7080_7104 = G__7111;
chunk__7081_7105 = G__7112;
count__7082_7106 = G__7113;
i__7083_7107 = G__7114;
continue;
} else {
var temp__4425__auto___7115 = cljs.core.seq.call(null,seq__7080_7104);
if(temp__4425__auto___7115){
var seq__7080_7116__$1 = temp__4425__auto___7115;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7080_7116__$1)){
var c__1022__auto___7117 = cljs.core.chunk_first.call(null,seq__7080_7116__$1);
var G__7118 = cljs.core.chunk_rest.call(null,seq__7080_7116__$1);
var G__7119 = c__1022__auto___7117;
var G__7120 = cljs.core.count.call(null,c__1022__auto___7117);
var G__7121 = (0);
seq__7080_7104 = G__7118;
chunk__7081_7105 = G__7119;
count__7082_7106 = G__7120;
i__7083_7107 = G__7121;
continue;
} else {
var vec__7085_7122 = cljs.core.first.call(null,seq__7080_7116__$1);
var n_7123 = cljs.core.nth.call(null,vec__7085_7122,(0),null);
var meth_7124 = cljs.core.nth.call(null,vec__7085_7122,(1),null);
cljs.compiler.emits.call(null,"var ",n_7123," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7124))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_7124);
} else {
cljs.compiler.emit_fn_method.call(null,meth_7124);
}

cljs.compiler.emitln.call(null,";");

var G__7125 = cljs.core.next.call(null,seq__7080_7116__$1);
var G__7126 = null;
var G__7127 = (0);
var G__7128 = (0);
seq__7080_7104 = G__7125;
chunk__7081_7105 = G__7126;
count__7082_7106 = G__7127;
i__7083_7107 = G__7128;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_7100," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_7101),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_7101)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_7101));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__7086_7129 = cljs.core.seq.call(null,ms_7103);
var chunk__7087_7130 = null;
var count__7088_7131 = (0);
var i__7089_7132 = (0);
while(true){
if((i__7089_7132 < count__7088_7131)){
var vec__7090_7133 = cljs.core._nth.call(null,chunk__7087_7130,i__7089_7132);
var n_7134 = cljs.core.nth.call(null,vec__7090_7133,(0),null);
var meth_7135 = cljs.core.nth.call(null,vec__7090_7133,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7135))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7136 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7136," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7137 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7136," = new cljs.core.IndexedSeq(",a_7137,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7134,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7101)),(((cljs.core.count.call(null,maxparams_7101) > (1)))?", ":null),restarg_7136,");");
} else {
var pcnt_7138 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7135));
cljs.compiler.emitln.call(null,"case ",pcnt_7138,":");

cljs.compiler.emitln.call(null,"return ",n_7134,".call(this",(((pcnt_7138 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7138,maxparams_7101))),",")),");");
}

var G__7139 = seq__7086_7129;
var G__7140 = chunk__7087_7130;
var G__7141 = count__7088_7131;
var G__7142 = (i__7089_7132 + (1));
seq__7086_7129 = G__7139;
chunk__7087_7130 = G__7140;
count__7088_7131 = G__7141;
i__7089_7132 = G__7142;
continue;
} else {
var temp__4425__auto___7143 = cljs.core.seq.call(null,seq__7086_7129);
if(temp__4425__auto___7143){
var seq__7086_7144__$1 = temp__4425__auto___7143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7086_7144__$1)){
var c__1022__auto___7145 = cljs.core.chunk_first.call(null,seq__7086_7144__$1);
var G__7146 = cljs.core.chunk_rest.call(null,seq__7086_7144__$1);
var G__7147 = c__1022__auto___7145;
var G__7148 = cljs.core.count.call(null,c__1022__auto___7145);
var G__7149 = (0);
seq__7086_7129 = G__7146;
chunk__7087_7130 = G__7147;
count__7088_7131 = G__7148;
i__7089_7132 = G__7149;
continue;
} else {
var vec__7091_7150 = cljs.core.first.call(null,seq__7086_7144__$1);
var n_7151 = cljs.core.nth.call(null,vec__7091_7150,(0),null);
var meth_7152 = cljs.core.nth.call(null,vec__7091_7150,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7152))){
cljs.compiler.emitln.call(null,"default:");

var restarg_7153 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_7153," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_7154 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_7153," = new cljs.core.IndexedSeq(",a_7154,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_7151,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_7101)),(((cljs.core.count.call(null,maxparams_7101) > (1)))?", ":null),restarg_7153,");");
} else {
var pcnt_7155 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7152));
cljs.compiler.emitln.call(null,"case ",pcnt_7155,":");

cljs.compiler.emitln.call(null,"return ",n_7151,".call(this",(((pcnt_7155 === (0)))?null:cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_7155,maxparams_7101))),",")),");");
}

var G__7156 = cljs.core.next.call(null,seq__7086_7144__$1);
var G__7157 = null;
var G__7158 = (0);
var G__7159 = (0);
seq__7086_7129 = G__7156;
chunk__7087_7130 = G__7157;
count__7088_7131 = G__7158;
i__7089_7132 = G__7159;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"throw(new Error('Invalid arity: ' + arguments.length));");

cljs.compiler.emitln.call(null,"};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.call(null,mname_7100,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_7100,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_7099__$1,mname_7100,maxparams_7101,mmap_7102,ms_7103,loop_locals,map__7078,map__7078__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__7076_SHARP_){
var vec__7092 = p1__7076_SHARP_;
var n = cljs.core.nth.call(null,vec__7092,(0),null);
var m = cljs.core.nth.call(null,vec__7092,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_7099__$1,mname_7100,maxparams_7101,mmap_7102,ms_7103,loop_locals,map__7078,map__7078__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_7103),".cljs$lang$applyTo;");
} else {
}

var seq__7093_7160 = cljs.core.seq.call(null,ms_7103);
var chunk__7094_7161 = null;
var count__7095_7162 = (0);
var i__7096_7163 = (0);
while(true){
if((i__7096_7163 < count__7095_7162)){
var vec__7097_7164 = cljs.core._nth.call(null,chunk__7094_7161,i__7096_7163);
var n_7165 = cljs.core.nth.call(null,vec__7097_7164,(0),null);
var meth_7166 = cljs.core.nth.call(null,vec__7097_7164,(1),null);
var c_7167 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7166));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7166))){
cljs.compiler.emitln.call(null,mname_7100,".cljs$core$IFn$_invoke$arity$variadic = ",n_7165,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7100,".cljs$core$IFn$_invoke$arity$",c_7167," = ",n_7165,";");
}

var G__7168 = seq__7093_7160;
var G__7169 = chunk__7094_7161;
var G__7170 = count__7095_7162;
var G__7171 = (i__7096_7163 + (1));
seq__7093_7160 = G__7168;
chunk__7094_7161 = G__7169;
count__7095_7162 = G__7170;
i__7096_7163 = G__7171;
continue;
} else {
var temp__4425__auto___7172 = cljs.core.seq.call(null,seq__7093_7160);
if(temp__4425__auto___7172){
var seq__7093_7173__$1 = temp__4425__auto___7172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7093_7173__$1)){
var c__1022__auto___7174 = cljs.core.chunk_first.call(null,seq__7093_7173__$1);
var G__7175 = cljs.core.chunk_rest.call(null,seq__7093_7173__$1);
var G__7176 = c__1022__auto___7174;
var G__7177 = cljs.core.count.call(null,c__1022__auto___7174);
var G__7178 = (0);
seq__7093_7160 = G__7175;
chunk__7094_7161 = G__7176;
count__7095_7162 = G__7177;
i__7096_7163 = G__7178;
continue;
} else {
var vec__7098_7179 = cljs.core.first.call(null,seq__7093_7173__$1);
var n_7180 = cljs.core.nth.call(null,vec__7098_7179,(0),null);
var meth_7181 = cljs.core.nth.call(null,vec__7098_7179,(1),null);
var c_7182 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_7181));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_7181))){
cljs.compiler.emitln.call(null,mname_7100,".cljs$core$IFn$_invoke$arity$variadic = ",n_7180,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_7100,".cljs$core$IFn$_invoke$arity$",c_7182," = ",n_7180,";");
}

var G__7183 = cljs.core.next.call(null,seq__7093_7173__$1);
var G__7184 = null;
var G__7185 = (0);
var G__7186 = (0);
seq__7093_7160 = G__7183;
chunk__7094_7161 = G__7184;
count__7095_7162 = G__7185;
i__7096_7163 = G__7186;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_7100,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__7187){
var map__7188 = p__7187;
var map__7188__$1 = ((((!((map__7188 == null)))?((((map__7188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7188):map__7188);
var statements = cljs.core.get.call(null,map__7188__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__7188__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__7188__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__207__auto__ = statements;
if(cljs.core.truth_(and__207__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__207__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__7190_7194 = cljs.core.seq.call(null,statements);
var chunk__7191_7195 = null;
var count__7192_7196 = (0);
var i__7193_7197 = (0);
while(true){
if((i__7193_7197 < count__7192_7196)){
var s_7198 = cljs.core._nth.call(null,chunk__7191_7195,i__7193_7197);
cljs.compiler.emitln.call(null,s_7198);

var G__7199 = seq__7190_7194;
var G__7200 = chunk__7191_7195;
var G__7201 = count__7192_7196;
var G__7202 = (i__7193_7197 + (1));
seq__7190_7194 = G__7199;
chunk__7191_7195 = G__7200;
count__7192_7196 = G__7201;
i__7193_7197 = G__7202;
continue;
} else {
var temp__4425__auto___7203 = cljs.core.seq.call(null,seq__7190_7194);
if(temp__4425__auto___7203){
var seq__7190_7204__$1 = temp__4425__auto___7203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7190_7204__$1)){
var c__1022__auto___7205 = cljs.core.chunk_first.call(null,seq__7190_7204__$1);
var G__7206 = cljs.core.chunk_rest.call(null,seq__7190_7204__$1);
var G__7207 = c__1022__auto___7205;
var G__7208 = cljs.core.count.call(null,c__1022__auto___7205);
var G__7209 = (0);
seq__7190_7194 = G__7206;
chunk__7191_7195 = G__7207;
count__7192_7196 = G__7208;
i__7193_7197 = G__7209;
continue;
} else {
var s_7210 = cljs.core.first.call(null,seq__7190_7204__$1);
cljs.compiler.emitln.call(null,s_7210);

var G__7211 = cljs.core.next.call(null,seq__7190_7204__$1);
var G__7212 = null;
var G__7213 = (0);
var G__7214 = (0);
seq__7190_7194 = G__7211;
chunk__7191_7195 = G__7212;
count__7192_7196 = G__7213;
i__7193_7197 = G__7214;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__207__auto__ = statements;
if(cljs.core.truth_(and__207__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__207__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__7215){
var map__7216 = p__7215;
var map__7216__$1 = ((((!((map__7216 == null)))?((((map__7216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7216):map__7216);
var env = cljs.core.get.call(null,map__7216__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__7216__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__7216__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__7216__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__7216__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__219__auto__ = name;
if(cljs.core.truth_(or__219__auto__)){
return or__219__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

cljs.compiler.emits.call(null,"try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.call(null,"catch (",cljs.compiler.munge.call(null,name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))))].join('')));
}

cljs.compiler.emits.call(null,"finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.call(null,try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__7218,is_loop){
var map__7230 = p__7218;
var map__7230__$1 = ((((!((map__7230 == null)))?((((map__7230.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7230.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7230):map__7230);
var bindings = cljs.core.get.call(null,map__7230__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__7230__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__7230__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_7232_7241 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_7232_7241,context,map__7230,map__7230__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_7232_7241,context,map__7230,map__7230__$1,bindings,expr,env))
,bindings):null));

try{var seq__7233_7242 = cljs.core.seq.call(null,bindings);
var chunk__7234_7243 = null;
var count__7235_7244 = (0);
var i__7236_7245 = (0);
while(true){
if((i__7236_7245 < count__7235_7244)){
var map__7237_7246 = cljs.core._nth.call(null,chunk__7234_7243,i__7236_7245);
var map__7237_7247__$1 = ((((!((map__7237_7246 == null)))?((((map__7237_7246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7237_7246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7237_7246):map__7237_7246);
var binding_7248 = map__7237_7247__$1;
var init_7249 = cljs.core.get.call(null,map__7237_7247__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7248);

cljs.compiler.emitln.call(null," = ",init_7249,";");

var G__7250 = seq__7233_7242;
var G__7251 = chunk__7234_7243;
var G__7252 = count__7235_7244;
var G__7253 = (i__7236_7245 + (1));
seq__7233_7242 = G__7250;
chunk__7234_7243 = G__7251;
count__7235_7244 = G__7252;
i__7236_7245 = G__7253;
continue;
} else {
var temp__4425__auto___7254 = cljs.core.seq.call(null,seq__7233_7242);
if(temp__4425__auto___7254){
var seq__7233_7255__$1 = temp__4425__auto___7254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7233_7255__$1)){
var c__1022__auto___7256 = cljs.core.chunk_first.call(null,seq__7233_7255__$1);
var G__7257 = cljs.core.chunk_rest.call(null,seq__7233_7255__$1);
var G__7258 = c__1022__auto___7256;
var G__7259 = cljs.core.count.call(null,c__1022__auto___7256);
var G__7260 = (0);
seq__7233_7242 = G__7257;
chunk__7234_7243 = G__7258;
count__7235_7244 = G__7259;
i__7236_7245 = G__7260;
continue;
} else {
var map__7239_7261 = cljs.core.first.call(null,seq__7233_7255__$1);
var map__7239_7262__$1 = ((((!((map__7239_7261 == null)))?((((map__7239_7261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7239_7261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7239_7261):map__7239_7261);
var binding_7263 = map__7239_7262__$1;
var init_7264 = cljs.core.get.call(null,map__7239_7262__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_7263);

cljs.compiler.emitln.call(null," = ",init_7264,";");

var G__7265 = cljs.core.next.call(null,seq__7233_7255__$1);
var G__7266 = null;
var G__7267 = (0);
var G__7268 = (0);
seq__7233_7242 = G__7265;
chunk__7234_7243 = G__7266;
count__7235_7244 = G__7267;
i__7236_7245 = G__7268;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"while(true){");
} else {
}

cljs.compiler.emits.call(null,expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.call(null,"break;");

cljs.compiler.emitln.call(null,"}");
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_7232_7241;
}
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let.call(null,ast,false);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let.call(null,ast,true);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__7269){
var map__7270 = p__7269;
var map__7270__$1 = ((((!((map__7270 == null)))?((((map__7270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7270):map__7270);
var frame = cljs.core.get.call(null,map__7270__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__7270__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__7270__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__1122__auto___7272 = cljs.core.count.call(null,exprs);
var i_7273 = (0);
while(true){
if((i_7273 < n__1122__auto___7272)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_7273)," = ",exprs.call(null,i_7273),";");

var G__7274 = (i_7273 + (1));
i_7273 = G__7274;
continue;
} else {
}
break;
}

var n__1122__auto___7275 = cljs.core.count.call(null,exprs);
var i_7276 = (0);
while(true){
if((i_7276 < n__1122__auto___7275)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_7276))," = ",temps.call(null,i_7276),";");

var G__7277 = (i_7276 + (1));
i_7276 = G__7277;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__7278){
var map__7279 = p__7278;
var map__7279__$1 = ((((!((map__7279 == null)))?((((map__7279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7279):map__7279);
var bindings = cljs.core.get.call(null,map__7279__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__7279__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__7279__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__7281_7289 = cljs.core.seq.call(null,bindings);
var chunk__7282_7290 = null;
var count__7283_7291 = (0);
var i__7284_7292 = (0);
while(true){
if((i__7284_7292 < count__7283_7291)){
var map__7285_7293 = cljs.core._nth.call(null,chunk__7282_7290,i__7284_7292);
var map__7285_7294__$1 = ((((!((map__7285_7293 == null)))?((((map__7285_7293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7285_7293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7285_7293):map__7285_7293);
var binding_7295 = map__7285_7294__$1;
var init_7296 = cljs.core.get.call(null,map__7285_7294__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7295)," = ",init_7296,";");

var G__7297 = seq__7281_7289;
var G__7298 = chunk__7282_7290;
var G__7299 = count__7283_7291;
var G__7300 = (i__7284_7292 + (1));
seq__7281_7289 = G__7297;
chunk__7282_7290 = G__7298;
count__7283_7291 = G__7299;
i__7284_7292 = G__7300;
continue;
} else {
var temp__4425__auto___7301 = cljs.core.seq.call(null,seq__7281_7289);
if(temp__4425__auto___7301){
var seq__7281_7302__$1 = temp__4425__auto___7301;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7281_7302__$1)){
var c__1022__auto___7303 = cljs.core.chunk_first.call(null,seq__7281_7302__$1);
var G__7304 = cljs.core.chunk_rest.call(null,seq__7281_7302__$1);
var G__7305 = c__1022__auto___7303;
var G__7306 = cljs.core.count.call(null,c__1022__auto___7303);
var G__7307 = (0);
seq__7281_7289 = G__7304;
chunk__7282_7290 = G__7305;
count__7283_7291 = G__7306;
i__7284_7292 = G__7307;
continue;
} else {
var map__7287_7308 = cljs.core.first.call(null,seq__7281_7302__$1);
var map__7287_7309__$1 = ((((!((map__7287_7308 == null)))?((((map__7287_7308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7287_7308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7287_7308):map__7287_7308);
var binding_7310 = map__7287_7309__$1;
var init_7311 = cljs.core.get.call(null,map__7287_7309__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_7310)," = ",init_7311,";");

var G__7312 = cljs.core.next.call(null,seq__7281_7302__$1);
var G__7313 = null;
var G__7314 = (0);
var G__7315 = (0);
seq__7281_7289 = G__7312;
chunk__7282_7290 = G__7313;
count__7283_7291 = G__7314;
i__7284_7292 = G__7315;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,expr);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.call(null,"})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.call(null,[cljs.core.str([cljs.core.str(psym)].join('').replace(".","$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__7318){
var map__7319 = p__7318;
var map__7319__$1 = ((((!((map__7319 == null)))?((((map__7319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7319):map__7319);
var expr = map__7319__$1;
var f = cljs.core.get.call(null,map__7319__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__7319__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7319__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__207__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__207__auto__)){
var and__207__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__207__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__207__auto____$1;
}
} else {
return and__207__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__207__auto__ = protocol;
if(cljs.core.truth_(and__207__auto__)){
var and__207__auto____$1 = tag;
if(cljs.core.truth_(and__207__auto____$1)){
var or__219__auto__ = (function (){var and__207__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__207__auto____$2)){
var and__207__auto____$3 = protocol;
if(cljs.core.truth_(and__207__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__207__auto____$3;
}
} else {
return and__207__auto____$2;
}
})();
if(cljs.core.truth_(or__219__auto__)){
return or__219__auto__;
} else {
var and__207__auto____$2 = (function (){var or__219__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__219__auto____$1)){
return or__219__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__207__auto____$2)){
var or__219__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__219__auto____$1){
return or__219__auto____$1;
} else {
var and__207__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__207__auto____$3){
var and__207__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__207__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__207__auto____$4;
}
} else {
return and__207__auto____$3;
}
}
} else {
return and__207__auto____$2;
}
}
} else {
return and__207__auto____$1;
}
} else {
return and__207__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__219__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__219__auto__){
return or__219__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.call(null,cljs.core.get.call(null,clojure.string.split.call(null,ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__7321 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__207__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__207__auto__)){
return (arity > mfa);
} else {
return and__207__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7319,map__7319__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7319,map__7319__$1,expr,f,args,env){
return (function (p1__7316_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7316_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7319,map__7319__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7319,map__7319__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7319,map__7319__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7319,map__7319__$1,expr,f,args,env){
return (function (p1__7317_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__7317_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7319,map__7319__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__7319,map__7319__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__7321,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__7321,(1),null);
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_7322 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_7322,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_7323 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_7323,args)),(((mfa_7323 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_7323,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__219__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__219__auto__)){
return or__219__auto__;
} else {
var or__219__auto____$1 = js_QMARK_;
if(or__219__auto____$1){
return or__219__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__207__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__207__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__207__auto__;
}
})())){
var fprop_7324 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_7324," ? ",f__$1,fprop_7324,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__7325){
var map__7326 = p__7325;
var map__7326__$1 = ((((!((map__7326 == null)))?((((map__7326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7326):map__7326);
var ctor = cljs.core.get.call(null,map__7326__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__7326__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7326__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__7328){
var map__7329 = p__7328;
var map__7329__$1 = ((((!((map__7329 == null)))?((((map__7329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7329):map__7329);
var target = cljs.core.get.call(null,map__7329__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__7329__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__7329__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.call(null,cljs.core.gensym.call(null,new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();");

cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.set();");
} else {
}

var seq__7335_7339 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__7336_7340 = null;
var count__7337_7341 = (0);
var i__7338_7342 = (0);
while(true){
if((i__7338_7342 < count__7337_7341)){
var lib_7343 = cljs.core._nth.call(null,chunk__7336_7340,i__7338_7342);
if(cljs.core.truth_((function (){var or__219__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__219__auto__)){
return or__219__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7343),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7343),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__219__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__219__auto__)){
return or__219__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7343),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7343),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7343),"');");

}
}

var G__7344 = seq__7335_7339;
var G__7345 = chunk__7336_7340;
var G__7346 = count__7337_7341;
var G__7347 = (i__7338_7342 + (1));
seq__7335_7339 = G__7344;
chunk__7336_7340 = G__7345;
count__7337_7341 = G__7346;
i__7338_7342 = G__7347;
continue;
} else {
var temp__4425__auto___7348 = cljs.core.seq.call(null,seq__7335_7339);
if(temp__4425__auto___7348){
var seq__7335_7349__$1 = temp__4425__auto___7348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7335_7349__$1)){
var c__1022__auto___7350 = cljs.core.chunk_first.call(null,seq__7335_7349__$1);
var G__7351 = cljs.core.chunk_rest.call(null,seq__7335_7349__$1);
var G__7352 = c__1022__auto___7350;
var G__7353 = cljs.core.count.call(null,c__1022__auto___7350);
var G__7354 = (0);
seq__7335_7339 = G__7351;
chunk__7336_7340 = G__7352;
count__7337_7341 = G__7353;
i__7338_7342 = G__7354;
continue;
} else {
var lib_7355 = cljs.core.first.call(null,seq__7335_7349__$1);
if(cljs.core.truth_((function (){var or__219__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__219__auto__)){
return or__219__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7355),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7355),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__219__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__219__auto__)){
return or__219__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_7355),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7355),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_7355),"');");

}
}

var G__7356 = cljs.core.next.call(null,seq__7335_7349__$1);
var G__7357 = null;
var G__7358 = (0);
var G__7359 = (0);
seq__7335_7339 = G__7356;
chunk__7336_7340 = G__7357;
count__7337_7341 = G__7358;
i__7338_7342 = G__7359;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs)))){
return cljs.compiler.emitln.call(null,"if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");");
} else {
return null;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__7360){
var map__7361 = p__7360;
var map__7361__$1 = ((((!((map__7361 == null)))?((((map__7361.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7361.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7361):map__7361);
var name = cljs.core.get.call(null,map__7361__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__7361__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__7361__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__7361__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__7361__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__7361__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__7363){
var map__7364 = p__7363;
var map__7364__$1 = ((((!((map__7364 == null)))?((((map__7364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7364):map__7364);
var t = cljs.core.get.call(null,map__7364__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__7364__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__7364__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__7364__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__7364__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__7366_7380 = cljs.core.seq.call(null,protocols);
var chunk__7367_7381 = null;
var count__7368_7382 = (0);
var i__7369_7383 = (0);
while(true){
if((i__7369_7383 < count__7368_7382)){
var protocol_7384 = cljs.core._nth.call(null,chunk__7367_7381,i__7369_7383);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_7384)].join('')),"}");

var G__7385 = seq__7366_7380;
var G__7386 = chunk__7367_7381;
var G__7387 = count__7368_7382;
var G__7388 = (i__7369_7383 + (1));
seq__7366_7380 = G__7385;
chunk__7367_7381 = G__7386;
count__7368_7382 = G__7387;
i__7369_7383 = G__7388;
continue;
} else {
var temp__4425__auto___7389 = cljs.core.seq.call(null,seq__7366_7380);
if(temp__4425__auto___7389){
var seq__7366_7390__$1 = temp__4425__auto___7389;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7366_7390__$1)){
var c__1022__auto___7391 = cljs.core.chunk_first.call(null,seq__7366_7390__$1);
var G__7392 = cljs.core.chunk_rest.call(null,seq__7366_7390__$1);
var G__7393 = c__1022__auto___7391;
var G__7394 = cljs.core.count.call(null,c__1022__auto___7391);
var G__7395 = (0);
seq__7366_7380 = G__7392;
chunk__7367_7381 = G__7393;
count__7368_7382 = G__7394;
i__7369_7383 = G__7395;
continue;
} else {
var protocol_7396 = cljs.core.first.call(null,seq__7366_7390__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_7396)].join('')),"}");

var G__7397 = cljs.core.next.call(null,seq__7366_7390__$1);
var G__7398 = null;
var G__7399 = (0);
var G__7400 = (0);
seq__7366_7380 = G__7397;
chunk__7367_7381 = G__7398;
count__7368_7382 = G__7399;
i__7369_7383 = G__7400;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__7370_7401 = cljs.core.seq.call(null,fields__$1);
var chunk__7371_7402 = null;
var count__7372_7403 = (0);
var i__7373_7404 = (0);
while(true){
if((i__7373_7404 < count__7372_7403)){
var fld_7405 = cljs.core._nth.call(null,chunk__7371_7402,i__7373_7404);
cljs.compiler.emitln.call(null,"this.",fld_7405," = ",fld_7405,";");

var G__7406 = seq__7370_7401;
var G__7407 = chunk__7371_7402;
var G__7408 = count__7372_7403;
var G__7409 = (i__7373_7404 + (1));
seq__7370_7401 = G__7406;
chunk__7371_7402 = G__7407;
count__7372_7403 = G__7408;
i__7373_7404 = G__7409;
continue;
} else {
var temp__4425__auto___7410 = cljs.core.seq.call(null,seq__7370_7401);
if(temp__4425__auto___7410){
var seq__7370_7411__$1 = temp__4425__auto___7410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7370_7411__$1)){
var c__1022__auto___7412 = cljs.core.chunk_first.call(null,seq__7370_7411__$1);
var G__7413 = cljs.core.chunk_rest.call(null,seq__7370_7411__$1);
var G__7414 = c__1022__auto___7412;
var G__7415 = cljs.core.count.call(null,c__1022__auto___7412);
var G__7416 = (0);
seq__7370_7401 = G__7413;
chunk__7371_7402 = G__7414;
count__7372_7403 = G__7415;
i__7373_7404 = G__7416;
continue;
} else {
var fld_7417 = cljs.core.first.call(null,seq__7370_7411__$1);
cljs.compiler.emitln.call(null,"this.",fld_7417," = ",fld_7417,";");

var G__7418 = cljs.core.next.call(null,seq__7370_7411__$1);
var G__7419 = null;
var G__7420 = (0);
var G__7421 = (0);
seq__7370_7401 = G__7418;
chunk__7371_7402 = G__7419;
count__7372_7403 = G__7420;
i__7373_7404 = G__7421;
continue;
}
} else {
}
}
break;
}

var seq__7374_7422 = cljs.core.seq.call(null,pmasks);
var chunk__7375_7423 = null;
var count__7376_7424 = (0);
var i__7377_7425 = (0);
while(true){
if((i__7377_7425 < count__7376_7424)){
var vec__7378_7426 = cljs.core._nth.call(null,chunk__7375_7423,i__7377_7425);
var pno_7427 = cljs.core.nth.call(null,vec__7378_7426,(0),null);
var pmask_7428 = cljs.core.nth.call(null,vec__7378_7426,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7427,"$ = ",pmask_7428,";");

var G__7429 = seq__7374_7422;
var G__7430 = chunk__7375_7423;
var G__7431 = count__7376_7424;
var G__7432 = (i__7377_7425 + (1));
seq__7374_7422 = G__7429;
chunk__7375_7423 = G__7430;
count__7376_7424 = G__7431;
i__7377_7425 = G__7432;
continue;
} else {
var temp__4425__auto___7433 = cljs.core.seq.call(null,seq__7374_7422);
if(temp__4425__auto___7433){
var seq__7374_7434__$1 = temp__4425__auto___7433;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7374_7434__$1)){
var c__1022__auto___7435 = cljs.core.chunk_first.call(null,seq__7374_7434__$1);
var G__7436 = cljs.core.chunk_rest.call(null,seq__7374_7434__$1);
var G__7437 = c__1022__auto___7435;
var G__7438 = cljs.core.count.call(null,c__1022__auto___7435);
var G__7439 = (0);
seq__7374_7422 = G__7436;
chunk__7375_7423 = G__7437;
count__7376_7424 = G__7438;
i__7377_7425 = G__7439;
continue;
} else {
var vec__7379_7440 = cljs.core.first.call(null,seq__7374_7434__$1);
var pno_7441 = cljs.core.nth.call(null,vec__7379_7440,(0),null);
var pmask_7442 = cljs.core.nth.call(null,vec__7379_7440,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7441,"$ = ",pmask_7442,";");

var G__7443 = cljs.core.next.call(null,seq__7374_7434__$1);
var G__7444 = null;
var G__7445 = (0);
var G__7446 = (0);
seq__7374_7422 = G__7443;
chunk__7375_7423 = G__7444;
count__7376_7424 = G__7445;
i__7377_7425 = G__7446;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__7447){
var map__7448 = p__7447;
var map__7448__$1 = ((((!((map__7448 == null)))?((((map__7448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7448):map__7448);
var t = cljs.core.get.call(null,map__7448__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__7448__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__7448__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__7448__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__7448__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__7450_7464 = cljs.core.seq.call(null,protocols);
var chunk__7451_7465 = null;
var count__7452_7466 = (0);
var i__7453_7467 = (0);
while(true){
if((i__7453_7467 < count__7452_7466)){
var protocol_7468 = cljs.core._nth.call(null,chunk__7451_7465,i__7453_7467);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_7468)].join('')),"}");

var G__7469 = seq__7450_7464;
var G__7470 = chunk__7451_7465;
var G__7471 = count__7452_7466;
var G__7472 = (i__7453_7467 + (1));
seq__7450_7464 = G__7469;
chunk__7451_7465 = G__7470;
count__7452_7466 = G__7471;
i__7453_7467 = G__7472;
continue;
} else {
var temp__4425__auto___7473 = cljs.core.seq.call(null,seq__7450_7464);
if(temp__4425__auto___7473){
var seq__7450_7474__$1 = temp__4425__auto___7473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7450_7474__$1)){
var c__1022__auto___7475 = cljs.core.chunk_first.call(null,seq__7450_7474__$1);
var G__7476 = cljs.core.chunk_rest.call(null,seq__7450_7474__$1);
var G__7477 = c__1022__auto___7475;
var G__7478 = cljs.core.count.call(null,c__1022__auto___7475);
var G__7479 = (0);
seq__7450_7464 = G__7476;
chunk__7451_7465 = G__7477;
count__7452_7466 = G__7478;
i__7453_7467 = G__7479;
continue;
} else {
var protocol_7480 = cljs.core.first.call(null,seq__7450_7474__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_7480)].join('')),"}");

var G__7481 = cljs.core.next.call(null,seq__7450_7474__$1);
var G__7482 = null;
var G__7483 = (0);
var G__7484 = (0);
seq__7450_7464 = G__7481;
chunk__7451_7465 = G__7482;
count__7452_7466 = G__7483;
i__7453_7467 = G__7484;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__7454_7485 = cljs.core.seq.call(null,fields__$1);
var chunk__7455_7486 = null;
var count__7456_7487 = (0);
var i__7457_7488 = (0);
while(true){
if((i__7457_7488 < count__7456_7487)){
var fld_7489 = cljs.core._nth.call(null,chunk__7455_7486,i__7457_7488);
cljs.compiler.emitln.call(null,"this.",fld_7489," = ",fld_7489,";");

var G__7490 = seq__7454_7485;
var G__7491 = chunk__7455_7486;
var G__7492 = count__7456_7487;
var G__7493 = (i__7457_7488 + (1));
seq__7454_7485 = G__7490;
chunk__7455_7486 = G__7491;
count__7456_7487 = G__7492;
i__7457_7488 = G__7493;
continue;
} else {
var temp__4425__auto___7494 = cljs.core.seq.call(null,seq__7454_7485);
if(temp__4425__auto___7494){
var seq__7454_7495__$1 = temp__4425__auto___7494;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7454_7495__$1)){
var c__1022__auto___7496 = cljs.core.chunk_first.call(null,seq__7454_7495__$1);
var G__7497 = cljs.core.chunk_rest.call(null,seq__7454_7495__$1);
var G__7498 = c__1022__auto___7496;
var G__7499 = cljs.core.count.call(null,c__1022__auto___7496);
var G__7500 = (0);
seq__7454_7485 = G__7497;
chunk__7455_7486 = G__7498;
count__7456_7487 = G__7499;
i__7457_7488 = G__7500;
continue;
} else {
var fld_7501 = cljs.core.first.call(null,seq__7454_7495__$1);
cljs.compiler.emitln.call(null,"this.",fld_7501," = ",fld_7501,";");

var G__7502 = cljs.core.next.call(null,seq__7454_7495__$1);
var G__7503 = null;
var G__7504 = (0);
var G__7505 = (0);
seq__7454_7485 = G__7502;
chunk__7455_7486 = G__7503;
count__7456_7487 = G__7504;
i__7457_7488 = G__7505;
continue;
}
} else {
}
}
break;
}

var seq__7458_7506 = cljs.core.seq.call(null,pmasks);
var chunk__7459_7507 = null;
var count__7460_7508 = (0);
var i__7461_7509 = (0);
while(true){
if((i__7461_7509 < count__7460_7508)){
var vec__7462_7510 = cljs.core._nth.call(null,chunk__7459_7507,i__7461_7509);
var pno_7511 = cljs.core.nth.call(null,vec__7462_7510,(0),null);
var pmask_7512 = cljs.core.nth.call(null,vec__7462_7510,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7511,"$ = ",pmask_7512,";");

var G__7513 = seq__7458_7506;
var G__7514 = chunk__7459_7507;
var G__7515 = count__7460_7508;
var G__7516 = (i__7461_7509 + (1));
seq__7458_7506 = G__7513;
chunk__7459_7507 = G__7514;
count__7460_7508 = G__7515;
i__7461_7509 = G__7516;
continue;
} else {
var temp__4425__auto___7517 = cljs.core.seq.call(null,seq__7458_7506);
if(temp__4425__auto___7517){
var seq__7458_7518__$1 = temp__4425__auto___7517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7458_7518__$1)){
var c__1022__auto___7519 = cljs.core.chunk_first.call(null,seq__7458_7518__$1);
var G__7520 = cljs.core.chunk_rest.call(null,seq__7458_7518__$1);
var G__7521 = c__1022__auto___7519;
var G__7522 = cljs.core.count.call(null,c__1022__auto___7519);
var G__7523 = (0);
seq__7458_7506 = G__7520;
chunk__7459_7507 = G__7521;
count__7460_7508 = G__7522;
i__7461_7509 = G__7523;
continue;
} else {
var vec__7463_7524 = cljs.core.first.call(null,seq__7458_7518__$1);
var pno_7525 = cljs.core.nth.call(null,vec__7463_7524,(0),null);
var pmask_7526 = cljs.core.nth.call(null,vec__7463_7524,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_7525,"$ = ",pmask_7526,";");

var G__7527 = cljs.core.next.call(null,seq__7458_7518__$1);
var G__7528 = null;
var G__7529 = (0);
var G__7530 = (0);
seq__7458_7506 = G__7527;
chunk__7459_7507 = G__7528;
count__7460_7508 = G__7529;
i__7461_7509 = G__7530;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"})");

return cljs.compiler.emit.call(null,body);
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__7531){
var map__7532 = p__7531;
var map__7532__$1 = ((((!((map__7532 == null)))?((((map__7532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7532):map__7532);
var target = cljs.core.get.call(null,map__7532__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__7532__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__7532__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__7532__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__7532__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__7534){
var map__7535 = p__7534;
var map__7535__$1 = ((((!((map__7535 == null)))?((((map__7535.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7535.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7535):map__7535);
var op = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__7535__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__207__auto__ = code;
if(cljs.core.truth_(and__207__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__207__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__2331__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__2331__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__7545 = cljs.core.seq.call(null,table);
var chunk__7546 = null;
var count__7547 = (0);
var i__7548 = (0);
while(true){
if((i__7548 < count__7547)){
var vec__7549 = cljs.core._nth.call(null,chunk__7546,i__7548);
var sym = cljs.core.nth.call(null,vec__7549,(0),null);
var value = cljs.core.nth.call(null,vec__7549,(1),null);
var ns_7551 = cljs.core.namespace.call(null,sym);
var name_7552 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__7553 = seq__7545;
var G__7554 = chunk__7546;
var G__7555 = count__7547;
var G__7556 = (i__7548 + (1));
seq__7545 = G__7553;
chunk__7546 = G__7554;
count__7547 = G__7555;
i__7548 = G__7556;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7545);
if(temp__4425__auto__){
var seq__7545__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7545__$1)){
var c__1022__auto__ = cljs.core.chunk_first.call(null,seq__7545__$1);
var G__7557 = cljs.core.chunk_rest.call(null,seq__7545__$1);
var G__7558 = c__1022__auto__;
var G__7559 = cljs.core.count.call(null,c__1022__auto__);
var G__7560 = (0);
seq__7545 = G__7557;
chunk__7546 = G__7558;
count__7547 = G__7559;
i__7548 = G__7560;
continue;
} else {
var vec__7550 = cljs.core.first.call(null,seq__7545__$1);
var sym = cljs.core.nth.call(null,vec__7550,(0),null);
var value = cljs.core.nth.call(null,vec__7550,(1),null);
var ns_7561 = cljs.core.namespace.call(null,sym);
var name_7562 = cljs.core.name.call(null,sym);
cljs.compiler.emits.call(null,"cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword.call(null,sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol.call(null,sym);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type.call(null,sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.call(null,";\n");

var G__7563 = cljs.core.next.call(null,seq__7545__$1);
var G__7564 = null;
var G__7565 = (0);
var G__7566 = (0);
seq__7545 = G__7563;
chunk__7546 = G__7564;
count__7547 = G__7565;
i__7548 = G__7566;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map