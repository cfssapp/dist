(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"+QRC":function(R,c,e){"use strict";var v=e("E9nw"),f={"text/plain":"Text","text/html":"Url",default:"Text"},g="Copy to clipboard: #{key}, Enter";function m(b){var O=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return b.replace(/#{\s*key\s*}/g,O)}function a(b,O){var z,I,S,te,J,T,se=!1;O||(O={}),z=O.debug||!1;try{S=v(),te=document.createRange(),J=document.getSelection(),T=document.createElement("span"),T.textContent=b,T.style.all="unset",T.style.position="fixed",T.style.top=0,T.style.clip="rect(0, 0, 0, 0)",T.style.whiteSpace="pre",T.style.webkitUserSelect="text",T.style.MozUserSelect="text",T.style.msUserSelect="text",T.style.userSelect="text",T.addEventListener("copy",function(W){if(W.stopPropagation(),O.format)if(W.preventDefault(),typeof W.clipboardData=="undefined"){z&&console.warn("unable to use e.clipboardData"),z&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var K=f[O.format]||f.default;window.clipboardData.setData(K,b)}else W.clipboardData.clearData(),W.clipboardData.setData(O.format,b);O.onCopy&&(W.preventDefault(),O.onCopy(W.clipboardData))}),document.body.appendChild(T),te.selectNodeContents(T),J.addRange(te);var ve=document.execCommand("copy");if(!ve)throw new Error("copy command was unsuccessful");se=!0}catch(W){z&&console.error("unable to copy using execCommand: ",W),z&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(O.format||"text",b),O.onCopy&&O.onCopy(window.clipboardData),se=!0}catch(K){z&&console.error("unable to copy using clipboardData: ",K),z&&console.error("falling back to prompt"),I=m("message"in O?O.message:g),window.prompt(I,b)}}finally{J&&(typeof J.removeRange=="function"?J.removeRange(te):J.removeAllRanges()),T&&document.body.removeChild(T),S()}return se}R.exports=a},"/qDX":function(R,c,e){},"/thR":function(R,c,e){"use strict";var v=e("TqRt"),f=e("284h");Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var g=f(e("q1tI")),m=v(e("YCuv")),a=v(e("KQxl")),b=function(I,S){return g.createElement(a.default,Object.assign({},I,{ref:S,icon:m.default}))};b.displayName="EnterOutlined";var O=g.forwardRef(b);c.default=O},"0OKo":function(R,c,e){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var v=f(e("TdNH"));function f(m){return m&&m.__esModule?m:{default:m}}var g=v;c.default=g,R.exports=g},"14J3":function(R,c,e){"use strict";var v=e("cIOH"),f=e.n(v),g=e("1GLa")},BMrR:function(R,c,e){"use strict";var v=e("qrJ5");c.a=v.a},E9nw:function(R,c){R.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var v=document.activeElement,f=[],g=0;g<e.rangeCount;g++)f.push(e.getRangeAt(g));switch(v.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":v.blur();break;default:v=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||f.forEach(function(m){e.addRange(m)}),v&&v.focus()}}},FMes:function(R,c,e){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var v=f(e("/thR"));function f(m){return m&&m.__esModule?m:{default:m}}var g=v;c.default=g,R.exports=g},IzEo:function(R,c,e){"use strict";var v=e("cIOH"),f=e.n(v),g=e("lnY3"),m=e.n(g),a=e("Znn+"),b=e("14J3"),O=e("jCWc")},MUZu:function(R,c,e){"use strict";var v=e("TqRt"),f=e("284h");Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var g=f(e("q1tI")),m=v(e("ZxNd")),a=v(e("KQxl")),b=function(I,S){return g.createElement(a.default,Object.assign({},I,{ref:S,icon:m.default}))};b.displayName="EditOutlined";var O=g.forwardRef(b);c.default=O},TdNH:function(R,c,e){"use strict";var v=e("TqRt"),f=e("284h");Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var g=f(e("q1tI")),m=v(e("m546")),a=v(e("KQxl")),b=function(I,S){return g.createElement(a.default,Object.assign({},I,{ref:S,icon:m.default}))};b.displayName="CopyOutlined";var O=g.forwardRef(b);c.default=O},YCuv:function(R,c,e){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};c.default=v},ZxNd:function(R,c,e){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"};c.default=v},bx4M:function(R,c,e){"use strict";var v=e("lSNA"),f=e.n(v),g=e("pVnL"),m=e.n(g),a=e("q1tI"),b=e("TSYQ"),O=e.n(b),z=e("BGR+"),I=e("H84U"),S=function(C,u){var P={};for(var s in C)Object.prototype.hasOwnProperty.call(C,s)&&u.indexOf(s)<0&&(P[s]=C[s]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,s=Object.getOwnPropertySymbols(C);h<s.length;h++)u.indexOf(s[h])<0&&Object.prototype.propertyIsEnumerable.call(C,s[h])&&(P[s[h]]=C[s[h]]);return P},te=function(u){var P=u.prefixCls,s=u.className,h=u.hoverable,de=h===void 0?!0:h,ne=S(u,["prefixCls","className","hoverable"]);return a.createElement(I.a,null,function(ae){var re=ae.getPrefixCls,le=re("card",P),Z=O()("".concat(le,"-grid"),s,f()({},"".concat(le,"-grid-hoverable"),de));return a.createElement("div",m()({},ne,{className:Z}))})},J=te,T=function(C,u){var P={};for(var s in C)Object.prototype.hasOwnProperty.call(C,s)&&u.indexOf(s)<0&&(P[s]=C[s]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,s=Object.getOwnPropertySymbols(C);h<s.length;h++)u.indexOf(s[h])<0&&Object.prototype.propertyIsEnumerable.call(C,s[h])&&(P[s[h]]=C[s[h]]);return P},se=function(u){return a.createElement(I.a,null,function(P){var s=P.getPrefixCls,h=u.prefixCls,de=u.className,ne=u.avatar,ae=u.title,re=u.description,le=T(u,["prefixCls","className","avatar","title","description"]),Z=s("card",h),Re=O()("".concat(Z,"-meta"),de),ce=ne?a.createElement("div",{className:"".concat(Z,"-meta-avatar")},ne):null,ue=ae?a.createElement("div",{className:"".concat(Z,"-meta-title")},ae):null,me=re?a.createElement("div",{className:"".concat(Z,"-meta-description")},re):null,ye=ue||me?a.createElement("div",{className:"".concat(Z,"-meta-detail")},ue,me):null;return a.createElement("div",m()({},le,{className:Re}),ce,ye)})},ve=se,W=e("ZTPi"),K=e("BMrR"),Y=e("kPKH"),Xe=e("3Nzz"),ze=function(C,u){var P={};for(var s in C)Object.prototype.hasOwnProperty.call(C,s)&&u.indexOf(s)<0&&(P[s]=C[s]);if(C!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,s=Object.getOwnPropertySymbols(C);h<s.length;h++)u.indexOf(s[h])<0&&Object.prototype.propertyIsEnumerable.call(C,s[h])&&(P[s[h]]=C[s[h]]);return P};function We(C){var u=C.map(function(P,s){return a.createElement("li",{style:{width:"".concat(100/C.length,"%")},key:"action-".concat(s)},a.createElement("span",null,P))});return u}var xe=function(u){var P,s,h=a.useContext(I.b),de=h.getPrefixCls,ne=h.direction,ae=a.useContext(Xe.b),re=function(Ce){u.onTabChange&&u.onTabChange(Ce)},le=function(){var Ce;return a.Children.forEach(u.children,function(Le){Le&&Le.type&&Le.type===J&&(Ce=!0)}),Ce},Z=u.prefixCls,Re=u.className,ce=u.extra,ue=u.headStyle,me=ue===void 0?{}:ue,ye=u.bodyStyle,Pe=ye===void 0?{}:ye,_e=u.title,he=u.loading,ge=u.bordered,rt=ge===void 0?!0:ge,De=u.size,Me=u.type,Ae=u.cover,Oe=u.actions,fe=u.tabList,He=u.children,je=u.activeTabKey,$e=u.defaultActiveTabKey,Fe=u.tabBarExtraContent,be=u.hoverable,Se=u.tabProps,Ge=Se===void 0?{}:Se,ke=ze(u,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),E=de("card",Z),Ue=Pe.padding===0||Pe.padding==="0px"?{padding:24}:void 0,H=a.createElement("div",{className:"".concat(E,"-loading-block")}),Ye=a.createElement("div",{className:"".concat(E,"-loading-content"),style:Ue},a.createElement(K.a,{gutter:8},a.createElement(Y.a,{span:22},H)),a.createElement(K.a,{gutter:8},a.createElement(Y.a,{span:8},H),a.createElement(Y.a,{span:15},H)),a.createElement(K.a,{gutter:8},a.createElement(Y.a,{span:6},H),a.createElement(Y.a,{span:18},H)),a.createElement(K.a,{gutter:8},a.createElement(Y.a,{span:13},H),a.createElement(Y.a,{span:9},H)),a.createElement(K.a,{gutter:8},a.createElement(Y.a,{span:4},H),a.createElement(Y.a,{span:3},H),a.createElement(Y.a,{span:16},H))),Ie=je!==void 0,Qe=m()(m()({},Ge),(P={},f()(P,Ie?"activeKey":"defaultActiveKey",Ie?je:$e),f()(P,"tabBarExtraContent",Fe),P)),Ke,we=fe&&fe.length?a.createElement(W.a,m()({size:"large"},Qe,{className:"".concat(E,"-head-tabs"),onChange:re}),fe.map(function(Ee){return a.createElement(W.a.TabPane,{tab:Ee.tab,disabled:Ee.disabled,key:Ee.key})})):null;(_e||ce||we)&&(Ke=a.createElement("div",{className:"".concat(E,"-head"),style:me},a.createElement("div",{className:"".concat(E,"-head-wrapper")},_e&&a.createElement("div",{className:"".concat(E,"-head-title")},_e),ce&&a.createElement("div",{className:"".concat(E,"-extra")},ce)),we));var Je=Ae?a.createElement("div",{className:"".concat(E,"-cover")},Ae):null,Ze=a.createElement("div",{className:"".concat(E,"-body"),style:Pe},he?Ye:He),Be=Oe&&Oe.length?a.createElement("ul",{className:"".concat(E,"-actions")},We(Oe)):null,Te=Object(z.a)(ke,["onTabChange"]),pe=De||ae,Ve=O()(E,(s={},f()(s,"".concat(E,"-loading"),he),f()(s,"".concat(E,"-bordered"),rt),f()(s,"".concat(E,"-hoverable"),be),f()(s,"".concat(E,"-contain-grid"),le()),f()(s,"".concat(E,"-contain-tabs"),fe&&fe.length),f()(s,"".concat(E,"-").concat(pe),pe),f()(s,"".concat(E,"-type-").concat(Me),!!Me),f()(s,"".concat(E,"-rtl"),ne==="rtl"),s),Re);return a.createElement("div",m()({},Te,{className:Ve}),Ke,Je,Ze,Be)};xe.Grid=J,xe.Meta=ve;var at=c.a=xe},jCWc:function(R,c,e){"use strict";var v=e("cIOH"),f=e.n(v),g=e("1GLa")},kPKH:function(R,c,e){"use strict";var v=e("/kpp");c.a=v.a},lnY3:function(R,c,e){},m546:function(R,c,e){"use strict";Object.defineProperty(c,"__esModule",{value:!0});var v={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};c.default=v},"s/wZ":function(R,c,e){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var v=f(e("MUZu"));function f(m){return m&&m.__esModule?m:{default:m}}var g=v;c.default=g,R.exports=g},tU7J:function(R,c,e){"use strict";var v=e("cIOH"),f=e.n(v),g=e("/qDX"),m=e.n(g),a=e("5Dmo"),b=e("5NDa")},wFql:function(R,c,e){"use strict";var v=e("pVnL"),f=e.n(v),g=e("lSNA"),m=e.n(g),a=e("q1tI"),b=e("TSYQ"),O=e.n(b),z=e("c+Xe"),I=e("H84U"),S=e("uaoM"),te=function(l,r){var i={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&r.indexOf(t)<0&&(i[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(i[t[n]]=l[t[n]]);return i},J=function(r,i){var t=r.prefixCls,n=r.component,o=n===void 0?"article":n,d=r.className,y=r["aria-label"],p=r.setContentRef,_=r.children,L=te(r,["prefixCls","component","className","aria-label","setContentRef","children"]),x=i;return p&&(Object(S.a)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),x=Object(z.a)(i,p)),a.createElement(I.a,null,function($){var D=$.getPrefixCls,Q=$.direction,V=o,w=D("typography",t),G=O()(w,m()({},"".concat(w,"-rtl"),Q==="rtl"),d);return a.createElement(V,f()({className:G,"aria-label":y,ref:x},L),_)})},T=a.forwardRef(J);T.displayName="Typography";var se=T,ve=se,W=e("cDf5"),K=e.n(W),Y=e("RIqP"),Xe=e.n(Y),ze=e("lwsE"),We=e.n(ze),xe=e("W8MJ"),at=e.n(xe),C=e("7W2i"),u=e.n(C),P=e("LQ03"),s=e.n(P),h=e("Zm9Q"),de=e("+QRC"),ne=e.n(de),ae=e("BGR+"),re=e("s/wZ"),le=e.n(re),Z=e("NAnI"),Re=e.n(Z),ce=e("0OKo"),ue=e.n(ce),me=e("t23M"),ye=e("wEI+"),Pe=e("YMnH"),_e=e("gDlH"),he=e("oHiP"),ge=function(r){if(typeof window!="undefined"&&window.document&&window.document.documentElement){var i=Array.isArray(r)?r:[r],t=window.document.documentElement;return i.some(function(n){return n in t.style})}return!1},rt=ge(["flex","webkitFlex","Flex","msFlex"]),De=e("3S7+"),Me=e("J4zp"),Ae=e.n(Me),Oe=e("4IlW"),fe=e("FMes"),He=e.n(fe),je=e("whJP"),$e=function(r){var i=r.prefixCls,t=r["aria-label"],n=r.className,o=r.style,d=r.direction,y=r.maxLength,p=r.autoSize,_=p===void 0?!0:p,L=r.value,x=r.onSave,$=r.onCancel,D=a.useRef(),Q=a.useRef(!1),V=a.useRef(),w=a.useState(L),G=Ae()(w,2),oe=G[0],k=G[1];a.useEffect(function(){k(L)},[L]),a.useEffect(function(){if(D.current&&D.current.resizableTextArea){var A=D.current.resizableTextArea.textArea;A.focus();var U=A.value.length;A.setSelectionRange(U,U)}},[D.current]);var ie=function(U){var j=U.target;k(j.value.replace(/[\n\r]/g,""))},q=function(){Q.current=!0},N=function(){Q.current=!1},M=function(U){var j=U.keyCode;if(Q.current)return;V.current=j},B=function(){x(oe.trim())},F=function(U){var j=U.keyCode,qe=U.ctrlKey,et=U.altKey,tt=U.metaKey,nt=U.shiftKey;V.current===j&&!Q.current&&!qe&&!et&&!tt&&!nt&&(j===Oe.a.ENTER?B():j===Oe.a.ESC&&$())},X=function(){B()},ee=O()(i,"".concat(i,"-edit-content"),m()({},"".concat(i,"-rtl"),d==="rtl"),n);return a.createElement("div",{className:ee,style:o},a.createElement(je.a,{ref:D,maxLength:y,value:oe,onChange:ie,onKeyDown:M,onKeyUp:F,onCompositionStart:q,onCompositionEnd:N,onBlur:X,"aria-label":t,autoSize:_}),a.createElement(He.a,{className:"".concat(i,"-edit-content-confirm")}))},Fe=$e,be=e("i8i4"),Se=1,Ge=3,ke=8,E,Ue={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function H(l){if(!l)return 0;var r=l.match(/^\d*(\.\d*)?/);return r?Number(r[0]):0}function Ye(l){var r=Array.prototype.slice.apply(l);return r.map(function(i){return"".concat(i,": ").concat(l.getPropertyValue(i),";")}).join("")}function Ie(l){var r=[];return l.forEach(function(i){var t=r[r.length-1];typeof i=="string"&&typeof t=="string"?r[r.length-1]+=i:r.push(i)}),r}var Qe=function(l,r,i,t,n){E||(E=document.createElement("div"),E.setAttribute("aria-hidden","true"),document.body.appendChild(E));var o=r.rows,d=r.suffix,y=d===void 0?"":d,p=window.getComputedStyle(l),_=Ye(p),L=H(p.lineHeight),x=Math.round(L*(o+1)+H(p.paddingTop)+H(p.paddingBottom));E.setAttribute("style",_),E.style.position="fixed",E.style.left="0",E.style.height="auto",E.style.minHeight="auto",E.style.maxHeight="auto",E.style.top="-999999px",E.style.zIndex="-1000",E.style.textOverflow="clip",E.style.whiteSpace="normal",E.style.webkitLineClamp="none";var $=Ie(Object(h.a)(i));Object(be.render)(a.createElement("div",{style:Ue},a.createElement("span",{style:Ue},$,y),a.createElement("span",{style:Ue},t)),E);function D(){return E.offsetHeight<x}if(D())return Object(be.unmountComponentAtNode)(E),{content:i,text:E.innerHTML,ellipsis:!1};var Q=Array.prototype.slice.apply(E.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(N){var M=N.nodeType;return M!==ke}),V=Array.prototype.slice.apply(E.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Object(be.unmountComponentAtNode)(E);var w=[];E.innerHTML="";var G=document.createElement("span");E.appendChild(G);var oe=document.createTextNode(n+y);G.appendChild(oe),V.forEach(function(N){E.appendChild(N)});function k(N){G.insertBefore(N,oe)}function ie(N,M){var B=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,F=arguments.length>3&&arguments[3]!==void 0?arguments[3]:M.length,X=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,ee=Math.floor((B+F)/2),A=M.slice(0,ee);if(N.textContent=A,B>=F-1)for(var U=F;U>=B;U-=1){var j=M.slice(0,U);if(N.textContent=j,D()||!j)return U===M.length?{finished:!1,reactNode:M}:{finished:!0,reactNode:j}}return D()?ie(N,M,ee,F,ee):ie(N,M,B,ee,X)}function q(N,M){var B=N.nodeType;if(B===Se)return k(N),D()?{finished:!1,reactNode:$[M]}:(G.removeChild(N),{finished:!0,reactNode:null});if(B===Ge){var F=N.textContent||"",X=document.createTextNode(F);return k(X),ie(X,F)}return{finished:!1,reactNode:null}}return Q.some(function(N,M){var B=q(N,M),F=B.finished,X=B.reactNode;return X&&w.push(X),F}),{content:w,text:E.innerHTML,ellipsis:!0}},Ke=function(l,r){var i={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&r.indexOf(t)<0&&(i[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(i[t[n]]=l[t[n]]);return i},we=ge("webkitLineClamp"),Je=ge("textOverflow");function Ze(l,r){var i=l.mark,t=l.code,n=l.underline,o=l.delete,d=l.strong,y=l.keyboard,p=r;function _(L,x){if(!L)return;p=a.createElement(x,{},p)}return _(d,"strong"),_(n,"u"),_(o,"del"),_(t,"code"),_(i,"mark"),_(y,"kbd"),p}var Be="...",Te=function(l){u()(i,l);var r=s()(i);function i(){var t;return We()(this,i),t=r.apply(this,arguments),t.contentRef=a.createRef(),t.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},t.getPrefixCls=function(){var n=t.props.prefixCls,o=t.context.getPrefixCls;return o("typography",n)},t.onExpandClick=function(n){var o=t.getEllipsis(),d=o.onExpand;t.setState({expanded:!0}),d&&d(n)},t.onEditClick=function(){t.triggerEdit(!0)},t.onEditChange=function(n){var o=t.getEditable(),d=o.onChange;d&&d(n),t.triggerEdit(!1)},t.onEditCancel=function(){t.triggerEdit(!1)},t.onCopyClick=function(n){n.preventDefault();var o=t.props,d=o.children,y=o.copyable,p=f()({},K()(y)==="object"?y:null);p.text===void 0&&(p.text=String(d)),ne()(p.text||""),t.setState({copied:!0},function(){p.onCopy&&p.onCopy(),t.copyId=window.setTimeout(function(){t.setState({copied:!1})},3e3)})},t.setEditRef=function(n){t.editIcon=n},t.triggerEdit=function(n){var o=t.getEditable(),d=o.onStart;n&&d&&d(),t.setState({edit:n},function(){!n&&t.editIcon&&t.editIcon.focus()})},t.resizeOnNextFrame=function(){he.a.cancel(t.rafId),t.rafId=Object(he.a)(function(){t.syncEllipsis()})},t}return at()(i,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(n){var o=this.props.children,d=this.getEllipsis(),y=this.getEllipsis(n);(o!==n.children||d.rows!==y.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),he.a.cancel(this.rafId)}},{key:"getEditable",value:function(n){var o=this.state.edit,d=n||this.props,y=d.editable;return y?f()({editing:o},K()(y)==="object"?y:null):{editing:o}}},{key:"getEllipsis",value:function(n){var o=n||this.props,d=o.ellipsis;return d?f()({rows:1,expandable:!1},K()(d)==="object"?d:null):{}}},{key:"canUseCSSEllipsis",value:function(){var n=this.state.clientRendered,o=this.props,d=o.editable,y=o.copyable,p=this.getEllipsis(),_=p.rows,L=p.expandable,x=p.suffix,$=p.onEllipsis;return x||(d||y||L||!n||$)?!1:_===1?Je:we}},{key:"syncEllipsis",value:function(){var n=this.state,o=n.ellipsisText,d=n.isEllipsis,y=n.expanded,p=this.getEllipsis(),_=p.rows,L=p.suffix,x=p.onEllipsis,$=this.props.children;if(!_||_<0||!this.contentRef.current||y)return;if(this.canUseCSSEllipsis())return;Object(S.a)(Object(h.a)($).every(function(G){return typeof G=="string"}),"Typography","`ellipsis` should use string as children only.");var D=Qe(this.contentRef.current,{rows:_,suffix:L},$,this.renderOperations(!0),Be),Q=D.content,V=D.text,w=D.ellipsis;(o!==V||d!==w)&&(this.setState({ellipsisText:V,ellipsisContent:Q,isEllipsis:w}),d!==w&&x&&x(w))}},{key:"renderExpand",value:function(n){var o=this.getEllipsis(),d=o.expandable,y=o.symbol,p=this.state,_=p.expanded,L=p.isEllipsis;if(!d)return null;if(!n&&(_||!L))return null;var x;return y?x=y:x=this.expandStr,a.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},x)}},{key:"renderEdit",value:function(){var n=this.props.editable;if(!n)return;var o=n.icon,d=n.tooltip,y=Object(h.a)(d)[0]||this.editStr,p=typeof y=="string"?y:"";return a.createElement(De.a,{key:"edit",title:d===!1?"":y},a.createElement(_e.a,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":p},o||a.createElement(le.a,{role:"button"})))}},{key:"renderCopy",value:function(){var n=this.state.copied,o=this.props.copyable;if(!o)return;var d=this.getPrefixCls(),y=o.tooltips,p=Object(h.a)(y);p.length===0&&(p=[this.copyStr,this.copiedStr]);var _=n?p[1]:p[0],L=typeof _=="string"?_:"",x=Object(h.a)(o.icon);return a.createElement(De.a,{key:"copy",title:y===!1?"":_},a.createElement(_e.a,{className:O()("".concat(d,"-copy"),n&&"".concat(d,"-copy-success")),onClick:this.onCopyClick,"aria-label":L},n?x[1]||a.createElement(Re.a,null):x[0]||a.createElement(ue.a,null)))}},{key:"renderEditInput",value:function(){var n=this.props,o=n.children,d=n.className,y=n.style,p=this.context.direction,_=this.getEditable(),L=_.maxLength,x=_.autoSize;return a.createElement(Fe,{value:typeof o=="string"?o:"",onSave:this.onEditChange,onCancel:this.onEditCancel,prefixCls:this.getPrefixCls(),className:d,style:y,direction:p,maxLength:L,autoSize:x})}},{key:"renderOperations",value:function(n){return[this.renderExpand(n),this.renderEdit(),this.renderCopy()].filter(function(o){return o})}},{key:"renderContent",value:function(){var n=this,o=this.state,d=o.ellipsisContent,y=o.isEllipsis,p=o.expanded,_=this.props,L=_.component,x=_.children,$=_.className,D=_.type,Q=_.disabled,V=_.style,w=Ke(_,["component","children","className","type","disabled","style"]),G=this.context.direction,oe=this.getEllipsis(),k=oe.rows,ie=oe.suffix,q=this.getPrefixCls(),N=Object(ae.a)(w,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard"].concat(Xe()(ye.a))),M=this.canUseCSSEllipsis(),B=k===1&&M,F=k&&k>1&&M,X=x;if(k&&y&&!p&&!M){var ee=w.title,A=ee||"";!ee&&(typeof x=="string"||typeof x=="number")&&(A=String(x)),A=A==null?void 0:A.slice(String(d||"").length),X=a.createElement(a.Fragment,null,d,a.createElement("span",{title:A,"aria-hidden":"true"},Be),ie)}else X=a.createElement(a.Fragment,null,x,ie);return X=Ze(this.props,X),a.createElement(Pe.a,{componentName:"Text"},function(U){var j,qe=U.edit,et=U.copy,tt=U.copied,nt=U.expand;return n.editStr=qe,n.copyStr=et,n.copiedStr=tt,n.expandStr=nt,a.createElement(me.a,{onResize:n.resizeOnNextFrame,disabled:!k},a.createElement(ve,f()({className:O()((j={},m()(j,"".concat(q,"-").concat(D),D),m()(j,"".concat(q,"-disabled"),Q),m()(j,"".concat(q,"-ellipsis"),k),m()(j,"".concat(q,"-ellipsis-single-line"),B),m()(j,"".concat(q,"-ellipsis-multiple-line"),F),j),$),style:f()(f()({},V),{WebkitLineClamp:F?k:null}),component:L,ref:n.contentRef,direction:G},N),X,n.renderOperations()))})}},{key:"render",value:function(){var n=this.getEditable(),o=n.editing;return o?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(n){var o=n.children,d=n.editable;return Object(S.a)(!d||typeof o=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),i}(a.Component);Te.contextType=I.b,Te.defaultProps={children:""};var pe=Te,Ve=function(l,r){var i={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&r.indexOf(t)<0&&(i[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(i[t[n]]=l[t[n]]);return i},Ee=function(r){var i=r.ellipsis,t=Ve(r,["ellipsis"]);return Object(S.a)(K()(i)!=="object","Typography.Text","`ellipsis` only supports boolean value."),a.createElement(pe,f()({},t,{ellipsis:!!i,component:"span"}))},Ce=Ee,Le=function(l,r){var i={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&r.indexOf(t)<0&&(i[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(i[t[n]]=l[t[n]]);return i},lt=function(r,i){var t=r.ellipsis,n=r.rel,o=Le(r,["ellipsis","rel"]);Object(S.a)(K()(t)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var d=a.useRef(null);a.useImperativeHandle(i,function(){var p;return(p=d.current)===null||p===void 0?void 0:p.contentRef.current});var y=f()(f()({},o),{rel:n===void 0&&o.target==="_blank"?"noopener noreferrer":n});return delete y.navigate,a.createElement(pe,f()({},y,{ref:d,ellipsis:!!t,component:"a"}))},ot=a.forwardRef(lt),it=e("CWQg"),st=function(l,r){var i={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&r.indexOf(t)<0&&(i[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(i[t[n]]=l[t[n]]);return i},dt=Object(it.b)(1,2,3,4,5),ct=function(r){var i=r.level,t=i===void 0?1:i,n=st(r,["level"]),o;return dt.indexOf(t)!==-1?o="h".concat(t):(Object(S.a)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),o="h1"),a.createElement(pe,f()({},n,{component:o}))},ut=ct,ft=function(r){return a.createElement(pe,f()({},r,{component:"div"}))},pt=ft,Ne=ve;Ne.Text=Ce,Ne.Link=ot,Ne.Title=ut,Ne.Paragraph=pt;var Et=c.a=Ne}}]);
