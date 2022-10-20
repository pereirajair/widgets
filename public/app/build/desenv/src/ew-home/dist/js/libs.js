/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */!function(a,b){"use strict";"object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&"object"==babelHelpers.typeof(module.exports)?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function r(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function v(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function toArray(){return f.call(this)},get:function get(a){return null==a?f.call(this):0>a?this[a+this.length]:this[a]},pushStack:function pushStack(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function each(a){return r.each(this,a)},map:function map(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function slice(){return this.pushStack(f.apply(this,arguments))},first:function first(){return this.eq(0)},last:function last(){return this.eq(-1)},eq:function eq(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(0<=c&&c<b?[this[c]]:[])},end:function end(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==babelHelpers.typeof(g)||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++){if(null!=(a=arguments[h]))for(b in a){c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d))}}return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function error(a){throw new Error(a)},noop:function noop(){},isFunction:function isFunction(a){return"function"===r.type(a)},isWindow:function isWindow(a){return null!=a&&a===a.window},isNumeric:function isNumeric(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function isPlainObject(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function isEmptyObject(a){var b;for(b in a){return!1}return!0},type:function type(a){return null==a?a+"":"object"==babelHelpers.typeof(a)||"function"==typeof a?j[k.call(a)]||"object":babelHelpers.typeof(a)},globalEval:function globalEval(a){p(a)},camelCase:function camelCase(a){return a.replace(t,"ms-").replace(u,v)},each:function each(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++){if(!1===b.call(a[d],d,a[d]))break}}else for(d in a){if(!1===b.call(a[d],d,a[d]))break}return a},trim:function trim(a){return null==a?"":(a+"").replace(s,"")},makeArray:function makeArray(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function inArray(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function merge(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++){a[e++]=b[d]}return a.length=e,a},grep:function grep(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++){d=!b(a[f],f),d!==h&&e.push(a[f])}return e},map:function map(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++){e=b(a[f],f,c),null!=e&&h.push(e)}else for(f in a){e=b(a[f],f,c),null!=e&&h.push(e)}return g.apply([],h)},guid:1,proxy:function proxy(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function e(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&0<b&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function B(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function I(a,b){for(var c=0,d=a.length;c<d;c++){if(a[c]===b)return c}return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=/[\x20\t\r\n\f]+/g,P=/^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,Q=/^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,R=/^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,S=/=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,T=/:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,U=/^(?:\\.|[\w-]|[^\0-\xa0])+$/,V={ID:/^#((?:\\.|[\w-]|[^\0-\xa0])+)/,CLASS:/^\.((?:\\.|[\w-]|[^\0-\xa0])+)/,TAG:/^((?:\\.|[\w-]|[^\0-\xa0])+|[*])/,ATTR:/^\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\]/,PSEUDO:/^:((?:\\.|[\w-]|[^\0-\xa0])+)(?:\((('((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)")|((?:\\.|[^\\()[\]]|\[[\x20\t\r\n\f]*((?:\\.|[\w-]|[^\0-\xa0])+)(?:[\x20\t\r\n\f]*([*^$|!~]?=)[\x20\t\r\n\f]*(?:'((?:\\.|[^\\'])*)'|"((?:\\.|[^\\"])*)"|((?:\\.|[\w-]|[^\0-\xa0])+))|)[\x20\t\r\n\f]*\])*)|.*)\)|)/,CHILD:/^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,bool:/^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,needsContext:/^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/ig,aa=function aa(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(55296|d>>10,56320|1023&d)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function ca(a,b){return b?"\0"===a?"\uFFFD":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function da(){m()},ea=ta(function(a){return!0===a.disabled&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]){;}a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--){o[h]="#"+k+" "+sa(o[h])}r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--){d.attrHandle[c[e]]=b}}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling){if(c===b)return-1}return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&!1===b.disabled?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--){c[e=f[g]]&&(c[e]=!(d[e]=c[e]))}})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++]){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++]){1===c.nodeType&&d.push(c)}return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode){if(b===a)return!0}return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode){g.unshift(c)}c=b;while(c=c.parentNode){h.unshift(c)}while(g[d]===h[d]){d++}return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return 0<ga(b,n,null,[a]).length},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++]){b===a[f]&&(e=d.push(f))}while(e--){a.splice(d[e],1)}}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling){c+=e(a)}}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++]){c+=e(b)}return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function ATTR(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function CHILD(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function PSEUDO(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function TAG(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function CLASS(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function ATTR(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&-1<e.indexOf(c):"$="===b?c&&e.slice(-c.length)===c:"~="===b?-1<(" "+e.replace(O," ")+" ").indexOf(c):"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function CHILD(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p]){if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1}o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop()){if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),!1===t)while(m=++n&&m&&m[p]||(t=n=0)||o.pop()){if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break}return t-=e,t===d||0===t%d&&0<=t/d}}},PSEUDO:function PSEUDO(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):1<e.length?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--){d=I(a,f[g]),a[d]=!(c[d]=f[g])}}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--){(f=g[h])&&(a[h]=!(b[h]=f))}}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return 0<ga(a,b).length}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return-1<(b.textContent||b.innerText||e(b)).indexOf(a)}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do{if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-")}while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function target(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function root(a){return a===o},focus:function focus(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function checked(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function selected(a){return a.parentNode&&a.parentNode.selectedIndex,!0===a.selected},empty:function empty(a){for(a=a.firstChild;a;a=a.nextSibling){if(6>a.nodeType)return!1}return!0},parent:function parent(a){return!d.pseudos.empty(a)},header:function header(a){return X.test(a.nodeName)},input:function input(a){return W.test(a.nodeName)},button:function button(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function text(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[0>c?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2){a.push(c)}return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2){a.push(c)}return a}),lt:pa(function(a,b,c){for(var d=0>c?c+b:c;0<=--d;){a.push(d)}return a}),gt:pa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;){a.push(d)}return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){d.pseudos[b]=ma(b)}for(b in{submit:!0,reset:!0}){d.pseudos[b]=na(b)}function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter){(e=V[g].exec(h))&&(!j[g]||(e=j[g](e)))&&(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length))}if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++){d+=a[b].value}return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d]){if(1===b.nodeType||g)return a(b,c,e)}return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d]){if((1===b.nodeType||g)&&a(b,c,i))return!0}}else while(b=b[d]){if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}}return!1}}function ua(a){return 1<a.length?function(b,c,d){var e=a.length;while(e--){if(!a[e](b,c,d))return!1}return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++){ga(a,b[d],c)}return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++){(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)))}return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--){(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}}if(f){if(e||a){if(e){j=[],k=r.length;while(k--){(l=r[k])&&j.push(q[k]=l)}e(null,r=[],j,i)}k=r.length;while(k--){(l=r[k])&&-1<(j=e?I(f,l):m[k])&&(f[j]=!(g[j]=l))}}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return-1<I(b,a)},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++){if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++){if(d.relative[a[e].type])break}return xa(1<i&&ua(m),1<i&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}}return ua(m)}function za(a,b){var c=0<b.length,e=0<a.length,f=function f(_f,g,h,i,k){var l,o,q,r=0,s="0",t=_f&&[],u=[],v=j,x=_f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++]){if(q(l,g||n,h)){i.push(l);break}}k&&(w=y)}c&&((l=!q&&l)&&r--,_f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++]){q(t,u,g,h)}if(_f){if(0<r)while(s--){t[s]||u[s]||(u[s]=E.call(i))}u=wa(u)}G.apply(i,u),k&&!_f&&0<u.length&&1<r+b.length&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--){f=ya(b[c]),f[u]?d.push(f):e.push(f)}f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),2<i.length&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return!0===a[b]?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function y(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType){if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}}return d},z=function z(a,b){for(var c=[];a;a=a.nextSibling){1===a.nodeType&&a!==b&&c.push(a)}return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return-1<i.call(b,a)!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return-1<i.call(b,a)!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function find(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++){if(r.contains(e[b],this))return!0}}));for(c=this.pushStack([]),b=0;b<d;b++){r.find(a,e[b],c)}return 1<d?r.uniqueSort(c):c},filter:function filter(a){return this.pushStack(E(this,a||[],!1))},not:function not(a){return this.pushStack(E(this,a||[],!0))},is:function is(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&3<=a.length?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=babelHelpers.instanceof(b,r)?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b){r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e])}return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function has(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++){if(r.contains(this,b[a]))return!0}})},closest:function closest(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++){for(c=this[d];c&&c!==b;c=c.parentNode){if(11>c.nodeType&&(g?-1<g.index(c):1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}}}return this.pushStack(1<f.length?r.uniqueSort(f):f)},index:function index(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function add(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function addBack(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType){;}return a}r.each({parent:function parent(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function parents(a){return y(a,"parentNode")},parentsUntil:function parentsUntil(a,b,c){return y(a,"parentNode",c)},next:function next(a){return K(a,"nextSibling")},prev:function prev(a){return K(a,"previousSibling")},nextAll:function nextAll(a){return y(a,"nextSibling")},prevAll:function prevAll(a){return y(a,"previousSibling")},nextUntil:function nextUntil(a,b,c){return y(a,"nextSibling",c)},prevUntil:function prevUntil(a,b,c){return y(a,"previousSibling",c)},siblings:function siblings(a){return z((a.parentNode||{}).firstChild,a)},children:function children(a){return z(a.firstChild)},contents:function contents(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),1<this.length&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function i(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length){!1===f[h].apply(c[0],c[1])&&a.stopOnFalse&&(h=f.length,c=!1)}}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function add(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function remove(){return r.each(arguments,function(a,b){var c;while(-1<(c=r.inArray(b,f,c))){f.splice(c,1),c<=h&&h--}}),this},has:function has(a){return a?-1<r.inArray(a,f):0<f.length},empty:function empty(){return f&&(f=[]),this},disable:function disable(){return e=g=[],f=c="",this},disabled:function disabled(){return!f},lock:function lock(){return e=g=[],c||b||(f=c=""),this},locked:function locked(){return!!e},fireWith:function fireWith(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function fire(){return j.fireWith(this,arguments),this},fired:function fired(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function Deferred(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function state(){return d},always:function always(){return f.done(arguments).fail(arguments),this},catch:function _catch(a){return e.then(null,a)},pipe:function pipe(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function then(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function j(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==babelHelpers.typeof(a)||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function promise(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function when(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function h(a){return function(c){d[a]=this,e[a]=1<arguments.length?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(1>=b&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--){P(e[c],h(c),g.reject)}return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function ready(a){(!0===a?--r.readyWait:r.isReady)||(r.isReady=!0,!0!==a&&0<--r.readyWait||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function T(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c){T(a,b,h,c[h],!0,f,g)}}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function b(a,_b,c){return j.call(r(a),c)})),b))for(;h<i;h++){b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)))}return e?a:j?b.call(a):i?b(a[0],c):f},U=function U(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function cache(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function set(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b){e[r.camelCase(d)]=b[d]}return e},get:function get(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function access(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function remove(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--){delete d[b[c]]}}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function hasData(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function hasData(a){return X.hasData(a)||W.hasData(a)},data:function data(a,b,c){return X.access(a,b,c)},removeData:function removeData(a,b){X.remove(a,b)},_data:function _data(a,b,c){return W.access(a,b,c)},_removeData:function _removeData(a,b){W.remove(a,b)}}),r.fn.extend({data:function data(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--){g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])))}W.set(f,"hasDataAttrs",!0)}return e}return"object"==babelHelpers.typeof(a)?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,1<arguments.length,null,!0)},removeData:function removeData(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function queue(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function dequeue(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function g(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function _queueHooks(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function queue(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function dequeue(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function clearQueue(a){return this.queue(a||"fx",[])},promise:function promise(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function h(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--){c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h))}return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function da(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function ea(a,b,c,d){var e,f,g={};for(f in b){g[f]=a.style[f],a.style[f]=b[f]}e=c.apply(a,d||[]);for(f in b){a.style[f]=g[f]}return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do{f=f||".5",k/=f,r.style(a,b,k+j)}while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++){d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)))}for(f=0;f<g;f++){null!=e[f]&&(a[f].style.display=e[f])}return a}r.fn.extend({show:function show(){return ia(this,!0)},hide:function hide(){return ia(this)},toggle:function toggle(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++){W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++){if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--){g=g.lastChild}r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f))}l.textContent="",n=0;while(f=m[n++]){if(d&&-1<r.inArray(f,d))e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++]){la.test(f.type||"")&&c.push(f)}}}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==babelHelpers.typeof(b)){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b){ya(a,h,c,d,b[h],f)}return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),!1===e)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function e(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function add(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--){h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&!1!==l.setup.call(a,d,o,g)||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}}},remove:function remove(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--){if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--){k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k))}g&&!m.length&&(l.teardown&&!1!==l.teardown.call(a,o,q.handle)||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i){r.event.remove(a,n+b[j],c,d,!0)}}r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function dispatch(a){var b=r.event.fix(a),c,d,e,f,g,h,i=Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++){i[c]=arguments[c]}if(b.delegateTarget=this,!k.preDispatch||!1!==k.preDispatch.call(this,b)){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped()){b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&!1===(b.result=e)&&(b.preventDefault(),b.stopPropagation()))}}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function handlers(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&1<=a.button))for(;j!==this;j=j.parentNode||this){if(1===j.nodeType&&("click"!==a.type||!0!==j.disabled)){for(f=[],g={},c=0;c<i;c++){d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?-1<r(e,this).index(j):r.find(e,this,null,[j]).length),g[e]&&f.push(d)}f.length&&h.push({elem:j,handlers:f})}}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function addProp(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function set(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function fix(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function trigger(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function trigger(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function trigger(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function _default(a){return B(a.target,"a")}},beforeunload:{postDispatch:function postDispatch(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return babelHelpers.instanceof(this,r.Event)?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&!1===a.returnValue?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function preventDefault(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function stopPropagation(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function stopImmediatePropagation(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function which(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function handle(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function on(a,b,c,d){return ya(this,a,b,c,d)},one:function one(a,b,c,d){return ya(this,a,b,c,d,1)},off:function off(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==babelHelpers.typeof(a)){for(e in a){this.off(e,b,a[e])}return this}return!1!==b&&"function"!=typeof b||(c=b,b=void 0),!1===c&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j){for(c=0,d=j[e].length;c<d;c++){r.event.add(b,e,j[e][c])}}}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||1<m&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++){j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l)}if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++){j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++){c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d))}return a}r.extend({htmlPrefilter:function htmlPrefilter(a){return a.replace(za,"<$1></$2>")},clone:function clone(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++){Ia(f[d],g[d])}if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++){Ha(f[d],g[d])}else Ha(a,h);return g=na(h,"script"),0<g.length&&oa(g,!i&&na(a,"script")),h},cleanData:function cleanData(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++){if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events){e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle)}c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}}),r.fn.extend({detach:function detach(a){return Ka(this,a,!0)},remove:function remove(a){return Ka(this,a)},text:function text(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function append(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function prepend(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function before(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function after(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function empty(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="")}return this},clone:function clone(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function html(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++){b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a)}b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function replaceWith(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;0>r.inArray(this,a)&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++){c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get())}return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function Na(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function pixelPosition(){return b(),c},boxSizingReliable:function boxSizingReliable(){return b(),e},pixelMarginRight:function pixelMarginRight(){return b(),f},reliableMarginLeft:function reliableMarginLeft(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function get(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--){if(a=Ua[c]+b,a in Va)return a}}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;4>f;f+=2){"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)))}return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function get(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function style(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=babelHelpers.typeof(c),"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function css(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),!0===c||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function get(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function set(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function expand(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++){e[a+ca[d]+b]=f[d]||f[d-2]||f[0]}return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function css(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++){f[b[g]]=r.css(a,b[g],!1,d)}return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,1<arguments.length)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function init(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function cur(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function run(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function get(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function set(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function set(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function linear(a){return a},swing:function swing(a){return .5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(!1===d.hidden&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b){c=ca[d],e["margin"+c]=e["padding"+c]=a}return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++){if(d=e[f].call(c,b,a))return d}}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b){if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n){i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n){r.style(a,d,n[d])}})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}}function jb(a,b){var c,d,e,f,g;for(c in a){if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f){c in a||(a[c]=f[c],b[c]=e)}}else b[d]=e}}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function i(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++){j.tweens[g].run(f)}return h.notifyWith(a,[j,f,c]),1>f&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function createTween(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function stop(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++){j.tweens[c].run(1)}return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++){if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d}return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function tweener(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++){c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)}},prefilters:[ib],prefilter:function prefilter(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==babelHelpers.typeof(a)?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&!0!==d.queue||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function fadeTo(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function animate(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function g(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||!1===f.queue?this.each(g):this.queue(f.queue,g)},stop:function stop(a,b,c){var d=function d(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&!1!==a&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g){g[e]&&g[e].stop&&db.test(e)&&d(g[e])}for(e=f.length;e--;){f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1))}!b&&c||r.dequeue(this,a)})},finish:function finish(a){return!1!==a&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;){f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1))}for(b=0;b<g;b++){d[b]&&d[b].finish&&d[b].finish.call(this)}delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++){a=c[b],a()||c[b]!==a||c.splice(b--,1)}c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function attr(a,b){return T(this,r.attr,a,b,1<arguments.length)},removeAttr:function removeAttr(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function attr(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function set(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function removeAttr(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++]){a.removeAttribute(c)}}}),lb={set:function set(a,b,c){return!1===b?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function prop(a,b){return T(this,r.prop,a,b,1<arguments.length)},removeProp:function removeProp(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function prop(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function get(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),o.optSelected||(r.propHooks.selected={get:function get(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function set(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function addClass(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++]){if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++]){0>d.indexOf(" "+f+" ")&&(d+=f+" ")}h=pb(d),e!==h&&c.setAttribute("class",h)}}}return this},removeClass:function removeClass(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++]){if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++]){while(-1<d.indexOf(" "+f+" ")){d=d.replace(" "+f+" "," ")}}h=pb(d),e!==h&&c.setAttribute("class",h)}}}return this},toggleClass:function toggleClass(a,b){var c=babelHelpers.typeof(a);return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++]){e.hasClass(b)?e.removeClass(b):e.addClass(b)}}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||!1===a?"":W.get(this,"__className__")||""))})},hasClass:function hasClass(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++]){if(1===c.nodeType&&-1<(" "+pb(qb(c))+" ").indexOf(b))return!0}return!1}});var rb=/\r/g;r.fn.extend({val:function val(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function get(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function get(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=0>f?i:g?f:0;d<i;d++){if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}}return h},set:function set(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--){d=e[g],(d.selected=-1<r.inArray(r.valHooks.option.get(d),f))&&(c=!0)}return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function set(a,b){if(Array.isArray(b))return a.checked=-1<r.inArray(r(a).val(),b)}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function trigger(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(-1<p.indexOf(".")&&(q=p.split("."),p=q.shift(),q.sort()),k=0>p.indexOf(":")&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==babelHelpers.typeof(b)&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||!1!==n.trigger.apply(e,c))){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode){o.push(h),i=h}i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped()){b.type=1<g?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),!1===b.result&&b.preventDefault())}return b.type=p,f||b.isDefaultPrevented()||n._default&&!1!==n._default.apply(o.pop(),c)||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function simulate(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function trigger(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function triggerHandler(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return 0<arguments.length?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function hover(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function c(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function setup(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function teardown(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=new a.DOMParser().parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==babelHelpers.typeof(e)&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b){Ab(a+"["+e+"]",b[e],c,d)}}r.param=function(a,b){var c,d=[],e=function e(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a){Ab(c,a[c],b,e)}return d.join("&")},r.fn.extend({serialize:function serialize(){return r.param(this.serializeArray())},serializeArray:function serializeArray(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++]){"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b){void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c])}return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0]){i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"))}if(d)for(e in h){if(h[e]&&h[e].test(d)){i.unshift(e);break}}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters){j[g.toLowerCase()]=a.converters[g]}f=k.shift();while(f){if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j){if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){!0===g?g=j[e]:!0!==j[e]&&(f=h[0],k.unshift(h[1]));break}}if(!0!==g)if(g&&a.throws)b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function ajaxSetup(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function ajax(b,c){"object"==babelHelpers.typeof(b)&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function getResponseHeader(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g)){h[b[1].toLowerCase()]=b[2]}}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function getAllResponseHeaders(){return k?g:null},setRequestHeader:function setRequestHeader(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function overrideMimeType(a){return null==k&&(o.mimeType=a),this},statusCode:function statusCode(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a){u[b]=[u[b],a[b]]}return this},abort:function abort(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),!1===o.cache&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&!1!==o.contentType||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers){y.setRequestHeader(m,o.headers[m])}if(o.beforeSend&&(!1===o.beforeSend.call(p,y,o)||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&0<o.timeout&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=0<b?4:0,j=200<=b&&300>b||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",0>b&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function getJSON(a,b,c){return r.get(a,b,c,"json")},getScript:function getScript(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},r.fn.extend({wrapAll:function wrapAll(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild){a=a.firstElementChild}return a}).append(this)),this},wrapInner:function wrapInner(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function wrap(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function unwrap(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var _c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function send(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields){h[g]=b.xhrFields[g]}b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e){h.setRequestHeader(g,e[g])}_c=function c(a){return function(){_c&&(_c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=_c(),d=h.onerror=_c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){_c&&d()})},_c=_c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(_c)throw i}},abort:function abort(){_c&&_c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,_c2;return{send:function send(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",_c2=function c(a){b.remove(),_c2=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function abort(){_c2&&_c2()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=!1!==b.jsonp&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):!1!==b.jsonp&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return-1<h&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==babelHelpers.typeof(b)&&(e="POST"),0<g.length&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function setOffset(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&-1<(f+i).indexOf("auto"),j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function offset(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function position(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function offsetParent(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position")){a=a.offsetParent}return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(!0===e||!0===f?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function bind(a,b,c){return this.on(a,null,b,c)},unbind:function unbind(a,b){return this.off(a,null,b)},delegate:function delegate(a,b,c,d){return this.on(b,a,c,d)},undelegate:function undelegate(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});/*!
 * Packery PACKAGED v2.1.2
 * Gapless, draggable grid layouts
 *
 * Licensed GPLv3 for open source use
 * or Packery Commercial License for commercial use
 *
 * http://packery.metafizzy.co
 * Copyright 2013-2018 Metafizzy
 */ /**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */ /* jshint browser: true, strict: true, undef: true, unused: true */(function(window,factory){// universal module definition
/*jshint strict: false */ /* globals define, module, require */if("function"==typeof define&&define.amd){// AMD
define("jquery-bridget/jquery-bridget",["jquery"],function(jQuery){return factory(window,jQuery)})}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS
module.exports=factory(window,require("jquery"))}else{// browser global
window.jQueryBridget=factory(window,window.jQuery)}})(window,function factory(window,jQuery){'use strict';// ----- utils ----- //
var arraySlice=Array.prototype.slice,console=window.console,logError="undefined"==typeof console?function(){}:function(message){console.error(message)};// helper function for logging errors
// $.error breaks jQuery chaining
// ----- jQueryBridget ----- //
function jQueryBridget(namespace,PluginClass,$){$=$||jQuery||window.jQuery;if(!$){return}// add option method -> $().plugin('option', {...})
if(!PluginClass.prototype.option){// option setter
PluginClass.prototype.option=function(opts){// bail out if not an object
if(!$.isPlainObject(opts)){return}this.options=$.extend(!0/* ignoreName */ /* skipSlots */,this.options,opts)}}// make jQuery plugin
$.fn[namespace]=function(arg0/*, arg1 */){if("string"==typeof arg0){// method call $().plugin( 'methodName', { options } )
// shift arguments by 1
var args=arraySlice.call(arguments,1);return methodCall(this,arg0,args)}// just $().plugin({ options })
plainCall(this,arg0);return this};// $().plugin('methodName')
function methodCall($elems,methodName,args){var returnValue,pluginMethodStr="$()."+namespace+"(\""+methodName+"\")";$elems.each(function(i,elem){// get instance
var instance=$.data(elem,namespace);if(!instance){logError(namespace+" not initialized. Cannot call methods, i.e. "+pluginMethodStr);return}var method=instance[methodName];if(!method||"_"==methodName.charAt(0)){logError(pluginMethodStr+" is not a valid method");return}// apply method, get return value
var value=method.apply(instance,args);// set return value if value is returned, use only first value
returnValue=returnValue===void 0?value:returnValue});return returnValue!==void 0?returnValue:$elems}function plainCall($elems,options){$elems.each(function(i,elem){var instance=$.data(elem,namespace);if(instance){// set options & init
instance.option(options);instance._init()}else{// initialize new instance
instance=new PluginClass(elem,options);$.data(elem,namespace,instance)}})}updateJQuery($)}// ----- updateJQuery ----- //
// set $.bridget for v1 backwards compatibility
function updateJQuery($){if(!$||$&&$.bridget){return}$.bridget=jQueryBridget}updateJQuery(jQuery||window.jQuery);// -----  ----- //
return jQueryBridget});/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */ /* jshint browser: true, strict: true, undef: true, unused: true */ /* globals console: false */(function(window,factory){/* jshint strict: false */ /* globals define, module */if("function"==typeof define&&define.amd){// AMD
define("get-size/get-size",factory)}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS
module.exports=factory()}else{// browser global
window.getSize=factory()}})(window,function factory(){'use strict';// -------------------------- helpers -------------------------- //
// get a number from a string, not a percentage
function getStyleSize(value){var num=parseFloat(value),isValid=-1==value.indexOf("%")&&!isNaN(num);// not a percent like '100%', and a number
return isValid&&num}function noop(){}var logError="undefined"==typeof console?noop:function(message){console.error(message)},measurements=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],measurementsLength=measurements.length;// -------------------------- measurements -------------------------- //
function getZeroSize(){for(var size={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},i=0,measurement;i<measurementsLength;i++){measurement=measurements[i];size[measurement]=0}return size}// -------------------------- getStyle -------------------------- //
/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */function getStyle(elem){var style=getComputedStyle(elem);if(!style){logError("Style returned "+style+". Are you running this code in a hidden iframe on Firefox? "+"See https://bit.ly/getsizebug1")}return style}// -------------------------- setup -------------------------- //
var isSetup=/* ignoreName */!1/* skipSlots */ /* skipSlots */,isBoxSizeOuter;/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */function setup(){// setup once
if(isSetup){return}isSetup=!0;// -------------------------- box sizing -------------------------- //
/**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */var div=document.createElement("div");div.style.width="200px";div.style.padding="1px 2px 3px 4px";div.style.borderStyle="solid";div.style.borderWidth="1px 2px 3px 4px";div.style.boxSizing="border-box";var body=document.body||document.documentElement;body.appendChild(div);var style=getStyle(div);// round value for browser zoom. desandro/masonry#928
isBoxSizeOuter=200==Math.round(getStyleSize(style.width));getSize.isBoxSizeOuter=isBoxSizeOuter;body.removeChild(div)}// -------------------------- getSize -------------------------- //
function getSize(elem){setup();// use querySeletor if elem is string
if("string"==typeof elem){elem=document.querySelector(elem)}// do not proceed on non-objects
if(!elem||"object"!=babelHelpers.typeof(elem)||!elem.nodeType){return}var style=getStyle(elem);// if hidden, everything is 0
if("none"==style.display){return getZeroSize()}// get all measurements
for(var size={width:elem.offsetWidth,height:elem.offsetHeight},isBorderBox=size.isBorderBox="border-box"==style.boxSizing,i=0;i<measurementsLength;i++){var measurement=measurements[i],value=style[measurement],num=parseFloat(value);// any 'auto', 'medium' value will be 0
size[measurement]=!isNaN(num)?num:0}var paddingWidth=size.paddingLeft+size.paddingRight,paddingHeight=size.paddingTop+size.paddingBottom,marginWidth=size.marginLeft+size.marginRight,marginHeight=size.marginTop+size.marginBottom,borderWidth=size.borderLeftWidth+size.borderRightWidth,borderHeight=size.borderTopWidth+size.borderBottomWidth,isBorderBoxSizeOuter=isBorderBox&&isBoxSizeOuter,styleWidth=getStyleSize(style.width);if(!1!==styleWidth){size.width=styleWidth+(// add padding and border unless it's already including it
isBorderBoxSizeOuter?0:paddingWidth+borderWidth)}var styleHeight=getStyleSize(style.height);if(!1!==styleHeight){size.height=styleHeight+(// add padding and border unless it's already including it
isBorderBoxSizeOuter?0:paddingHeight+borderHeight)}size.innerWidth=size.width-(paddingWidth+borderWidth);size.innerHeight=size.height-(paddingHeight+borderHeight);size.outerWidth=size.width+marginWidth;size.outerHeight=size.height+marginHeight;return size}return getSize});/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */ /* jshint unused: true, undef: true, strict: true */(function(global,factory){// universal module definition
/* jshint strict: false */ /* globals define, module, window */if("function"==typeof define&&define.amd){// AMD - RequireJS
define("ev-emitter/ev-emitter",factory)}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS - Browserify, Webpack
module.exports=factory()}else{// Browser globals
global.EvEmitter=factory()}})("undefined"!=typeof window?window:this,function(){function EvEmitter(){}var proto=EvEmitter.prototype;proto.on=function(eventName,listener){if(!eventName||!listener){return}// set events hash
var events=this._events=this._events||{},listeners=events[eventName]=events[eventName]||[];// set listeners array
// only add once
if(-1==listeners.indexOf(listener)){listeners.push(listener)}return this};proto.once=function(eventName,listener){if(!eventName||!listener){return}// add event
this.on(eventName,listener);// set once flag
// set onceEvents hash
var onceEvents=this._onceEvents=this._onceEvents||{},onceListeners=onceEvents[eventName]=onceEvents[eventName]||{};// set onceListeners object
// set flag
onceListeners[listener]=!0;return this};proto.off=function(eventName,listener){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return}var index=listeners.indexOf(listener);if(-1!=index){listeners.splice(index,1)}return this};proto.emitEvent=function(eventName,args){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return}// copy over to avoid interference if .off() in listener
listeners=listeners.slice(0);args=args||[];// once stuff
for(var onceListeners=this._onceEvents&&this._onceEvents[eventName],i=0;i<listeners.length;i++){var listener=listeners[i],isOnce=onceListeners&&onceListeners[listener];if(isOnce){// remove listener
// remove before trigger to prevent recursion
this.off(eventName,listener);// unset once flag
delete onceListeners[listener]}// trigger listener
listener.apply(this,args)}return this};proto.allOff=function(){delete this._events;delete this._onceEvents};return EvEmitter});/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */ /*jshint browser: true, strict: true, undef: true, unused: true */(function(window,factory){/*global define: false, module: false */'use strict';// universal module definition
if("function"==typeof define&&define.amd){// AMD
define("desandro-matches-selector/matches-selector",factory)}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS
module.exports=factory()}else{// browser global
window.matchesSelector=factory()}})(window,function factory(){'use strict';var matchesMethod=function(){var ElemProto=window.Element.prototype;// check for the standard method name first
if(ElemProto.matches){return"matches"}// check un-prefixed
if(ElemProto.matchesSelector){return"matchesSelector"}// check vendor prefixes
for(var prefixes=["webkit","moz","ms","o"],i=0;i<prefixes.length;i++){var prefix=prefixes[i],method=prefix+"MatchesSelector";if(ElemProto[method]){return method}}}();return function matchesSelector(elem,selector){return elem[matchesMethod](selector)}});/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */ /*jshint browser: true, undef: true, unused: true, strict: true */(function(window,factory){// universal module definition
/*jshint strict: false */ /*globals define, module, require */if("function"==typeof define&&define.amd){// AMD
define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(matchesSelector){return factory(window,matchesSelector)})}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS
module.exports=factory(window,require("desandro-matches-selector"))}else{// browser global
window.fizzyUIUtils=factory(window,window.matchesSelector)}})(window,function factory(window,matchesSelector){var utils={extend:function(a,b){for(var prop in b){a[prop]=b[prop]}return a},modulo:function(num,div){return(num%div+div)%div}},arraySlice=Array.prototype.slice;// ----- extend ----- //
// extends objects
// turn element or nodeList into an array
utils.makeArray=function(obj){if(Array.isArray(obj)){// use object if already an array
return obj}// return empty array if undefined or null. #6
if(null===obj||obj===void 0){return[]}var isArrayLike="object"==babelHelpers.typeof(obj)&&"number"==typeof obj.length;if(isArrayLike){// convert nodeList to array
return arraySlice.call(obj)}// array of single index
return[obj]};// ----- removeFrom ----- //
utils.removeFrom=function(ary,obj){var index=ary.indexOf(obj);if(-1!=index){ary.splice(index,1)}};// ----- getParent ----- //
utils.getParent=function(elem,selector){while(elem.parentNode&&elem!=document.body){elem=elem.parentNode;if(matchesSelector(elem,selector)){return elem}}};// ----- getQueryElement ----- //
// use element as selector string
utils.getQueryElement=function(elem){if("string"==typeof elem){return document.querySelector(elem)}return elem};// ----- handleEvent ----- //
// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent=function(event){var method="on"+event.type;if(this[method]){this[method](event)}};// ----- filterFindElements ----- //
utils.filterFindElements=function(elems,selector){// make array of elems
elems=utils.makeArray(elems);var ffElems=[];elems.forEach(function(elem){// check that elem is an actual element
if(!babelHelpers.instanceof(elem,HTMLElement)){return}// add elem if no selector
if(!selector){ffElems.push(elem);return}// filter & find items if we have a selector
// filter
if(matchesSelector(elem,selector)){ffElems.push(elem)}// find children
// concat childElems to filterFound array
for(var childElems=elem.querySelectorAll(selector),i=0;i<childElems.length;i++){ffElems.push(childElems[i])}});return ffElems};// ----- debounceMethod ----- //
utils.debounceMethod=function(_class,methodName,threshold){threshold=threshold||100;// original method
var method=_class.prototype[methodName],timeoutName=methodName+"Timeout";_class.prototype[methodName]=function(){var timeout=this[timeoutName];clearTimeout(timeout);var args=arguments,_this=this;this[timeoutName]=setTimeout(function(){method.apply(_this,args);delete _this[timeoutName]},threshold)}};// ----- docReady ----- //
utils.docReady=function(callback){var readyState=document.readyState;if("complete"==readyState||"interactive"==readyState){// do async to allow for other scripts to run. metafizzy/flickity#441
setTimeout(callback)}else{document.addEventListener("DOMContentLoaded",callback)}};// ----- htmlInit ----- //
// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed=function(str){return str.replace(/(.)([A-Z])/g,function(match,$1,$2){return $1+"-"+$2}).toLowerCase()};var console=window.console;/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */utils.htmlInit=function(WidgetClass,namespace){utils.docReady(function(){var dashedNamespace=utils.toDashed(namespace),dataAttr="data-"+dashedNamespace,dataAttrElems=document.querySelectorAll("["+dataAttr+"]"),jsDashElems=document.querySelectorAll(".js-"+dashedNamespace),elems=utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems)),dataOptionsAttr=dataAttr+"-options",jQuery=window.jQuery;elems.forEach(function(elem){var attr=elem.getAttribute(dataAttr)||elem.getAttribute(dataOptionsAttr),options;try{options=attr&&JSON.parse(attr)}catch(error){// log error, do not initialize
if(console){console.error("Error parsing "+dataAttr+" on "+elem.className+": "+error)}return}// initialize
var instance=new WidgetClass(elem,options);// make available via $().data('namespace')
if(jQuery){jQuery.data(elem,namespace,instance)}})})};// -----  ----- //
return utils});/**
 * Outlayer Item
 */(function(window,factory){// universal module definition
/* jshint strict: false */ /* globals define, module, require */if("function"==typeof define&&define.amd){// AMD - RequireJS
define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],factory)}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS - Browserify, Webpack
module.exports=factory(require("ev-emitter"),require("get-size"))}else{// browser global
window.Outlayer={};window.Outlayer.Item=factory(window.EvEmitter,window.getSize)}})(window,function factory(EvEmitter,getSize){'use strict';// ----- helpers ----- //
function isEmptyObj(obj){for(var prop in obj){return!1}prop=null;return!0}// -------------------------- CSS3 support -------------------------- //
var docElemStyle=document.documentElement.style,transitionProperty="string"==typeof docElemStyle.transition?"transition":"WebkitTransition",transformProperty="string"==typeof docElemStyle.transform?"transform":"WebkitTransform",transitionEndEvent={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[transitionProperty],vendorProperties={transform:transformProperty,transition:transitionProperty,transitionDuration:transitionProperty+"Duration",transitionProperty:transitionProperty+"Property",transitionDelay:transitionProperty+"Delay"};// -------------------------- Item -------------------------- //
function Item(element,layout){if(!element){return}this.element=element;// parent layout class, i.e. Masonry, Isotope, or Packery
this.layout=layout;this.position={x:0,y:0};this._create()}// inherit EvEmitter
var proto=Item.prototype=Object.create(EvEmitter.prototype);proto.constructor=Item;proto._create=function(){// transition objects
this._transn={ingProperties:{},clean:{},onEnd:{}};this.css({position:"absolute"})};// trigger specified handler for event type
proto.handleEvent=function(event){var method="on"+event.type;if(this[method]){this[method](event)}};proto.getSize=function(){this.size=getSize(this.element)};/**
 * apply CSS styles to element
 * @param {Object} style
 */proto.css=function(style){var elemStyle=this.element.style;for(var prop in style){// use vendor property if available
var supportedProp=vendorProperties[prop]||prop;elemStyle[supportedProp]=style[prop]}};// measure position, and sets it
proto.getPosition=function(){var style=getComputedStyle(this.element),isOriginLeft=this.layout._getOption("originLeft"),isOriginTop=this.layout._getOption("originTop"),xValue=style[isOriginLeft?"left":"right"],yValue=style[isOriginTop?"top":"bottom"],x=parseFloat(xValue),y=parseFloat(yValue),layoutSize=this.layout.size;if(-1!=xValue.indexOf("%")){x=x/100*layoutSize.width}if(-1!=yValue.indexOf("%")){y=y/100*layoutSize.height}// clean up 'auto' or other non-integer values
x=isNaN(x)?0:x;y=isNaN(y)?0:y;// remove padding from measurement
x-=isOriginLeft?layoutSize.paddingLeft:layoutSize.paddingRight;y-=isOriginTop?layoutSize.paddingTop:layoutSize.paddingBottom;this.position.x=x;this.position.y=y};// set settled position, apply padding
proto.layoutPosition=function(){var layoutSize=this.layout.size,style={},isOriginLeft=this.layout._getOption("originLeft"),isOriginTop=this.layout._getOption("originTop"),xPadding=isOriginLeft?"paddingLeft":"paddingRight",xProperty=isOriginLeft?"left":"right",xResetProperty=isOriginLeft?"right":"left",x=this.position.x+layoutSize[xPadding];// set in percentage or pixels
style[xProperty]=this.getXValue(x);// reset other property
style[xResetProperty]="";// y
var yPadding=isOriginTop?"paddingTop":"paddingBottom",yProperty=isOriginTop?"top":"bottom",yResetProperty=isOriginTop?"bottom":"top",y=this.position.y+layoutSize[yPadding];// set in percentage or pixels
style[yProperty]=this.getYValue(y);// reset other property
style[yResetProperty]="";this.css(style);this.emitEvent("layout",[this])};proto.getXValue=function(x){var isHorizontal=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!isHorizontal?100*(x/this.layout.size.width)+"%":x+"px"};proto.getYValue=function(y){var isHorizontal=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&isHorizontal?100*(y/this.layout.size.height)+"%":y+"px"};proto._transitionTo=function(x,y){this.getPosition();// get current x & y from top/left
var curX=this.position.x,curY=this.position.y,didNotMove=x==this.position.x&&y==this.position.y;// save end position
this.setPosition(x,y);// if did not move and not transitioning, just go to layout
if(didNotMove&&!this.isTransitioning){this.layoutPosition();return}var transX=x-curX,transY=y-curY,transitionStyle={};transitionStyle.transform=this.getTranslate(transX,transY);this.transition({to:transitionStyle,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})};proto.getTranslate=function(x,y){// flip cooridinates if origin on right or bottom
var isOriginLeft=this.layout._getOption("originLeft"),isOriginTop=this.layout._getOption("originTop");x=isOriginLeft?x:-x;y=isOriginTop?y:-y;return"translate3d("+x+"px, "+y+"px, 0)"};// non transition + transform support
proto.goTo=function(x,y){this.setPosition(x,y);this.layoutPosition()};proto.moveTo=proto._transitionTo;proto.setPosition=function(x,y){this.position.x=parseFloat(x);this.position.y=parseFloat(y)};// ----- transition ----- //
/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */ // non transition, just trigger callback
proto._nonTransition=function(args){this.css(args.to);if(args.isCleaning){this._removeStyles(args.to)}for(var prop in args.onTransitionEnd){args.onTransitionEnd[prop].call(this)}};/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */proto.transition=function(args){// redirect to nonTransition if no transition duration
if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(args);return}var _transition=this._transn;// keep track of onTransitionEnd callback by css property
for(var prop in args.onTransitionEnd){_transition.onEnd[prop]=args.onTransitionEnd[prop]}// keep track of properties that are transitioning
for(prop in args.to){_transition.ingProperties[prop]=!0;// keep track of properties to clean up when transition is done
if(args.isCleaning){_transition.clean[prop]=!0}}// set from styles
if(args.from){this.css(args.from);// force redraw. http://blog.alexmaccaw.com/css-transitions
var h=this.element.offsetHeight;// hack for JSHint to hush about unused var
h=null}// enable transition
this.enableTransition(args.to);// set styles that are transitioning
this.css(args.to);this.isTransitioning=!0};// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll(str){return str.replace(/([A-Z])/g,function($1){return"-"+$1.toLowerCase()})}var transitionProps="opacity,"+toDashedAll(transformProperty);proto.enableTransition=function()/* style */{// HACK changing transitionProperty during a transition
// will cause transition to jump
if(this.isTransitioning){return}// make `transition: foo, bar, baz` from style object
// HACK un-comment this when enableTransition can work
// while a transition is happening
// var transitionValues = [];
// for ( var prop in style ) {
//   // dash-ify camelCased properties like WebkitTransition
//   prop = vendorProperties[ prop ] || prop;
//   transitionValues.push( toDashedAll( prop ) );
// }
// munge number to millisecond, to match stagger
var duration=this.layout.options.transitionDuration;duration="number"==typeof duration?duration+"ms":duration;// enable transition styles
this.css({transitionProperty:transitionProps,transitionDuration:duration,transitionDelay:this.staggerDelay||0});// listen for transition end event
this.element.addEventListener(transitionEndEvent,this,!1)};// ----- events ----- //
proto.onwebkitTransitionEnd=function(event){this.ontransitionend(event)};proto.onotransitionend=function(event){this.ontransitionend(event)};// properties that I munge to make my life easier
var dashedVendorProperties={"-webkit-transform":"transform"};proto.ontransitionend=function(event){// disregard bubbled events from children
if(event.target!==this.element){return}var _transition=this._transn,propertyName=dashedVendorProperties[event.propertyName]||event.propertyName;// get property name of transitioned property, convert to prefix-free
// remove property that has completed transitioning
delete _transition.ingProperties[propertyName];// check if any properties are still transitioning
if(isEmptyObj(_transition.ingProperties)){// all properties have completed transitioning
this.disableTransition()}// clean style
if(propertyName in _transition.clean){// clean up style
this.element.style[event.propertyName]="";delete _transition.clean[propertyName]}// trigger onTransitionEnd callback
if(propertyName in _transition.onEnd){var onTransitionEnd=_transition.onEnd[propertyName];onTransitionEnd.call(this);delete _transition.onEnd[propertyName]}this.emitEvent("transitionEnd",[this])};proto.disableTransition=function(){this.removeTransitionStyles();this.element.removeEventListener(transitionEndEvent,this,!1);this.isTransitioning=!1};/**
 * removes style property from element
 * @param {Object} style
**/proto._removeStyles=function(style){// clean up transition styles
var cleanStyle={};for(var prop in style){cleanStyle[prop]=""}this.css(cleanStyle)};var cleanTransitionStyle={transitionProperty:"",transitionDuration:"",transitionDelay:""};proto.removeTransitionStyles=function(){// remove transition
this.css(cleanTransitionStyle)};// ----- stagger ----- //
proto.stagger=function(delay){delay=isNaN(delay)?0:delay;this.staggerDelay=delay+"ms"};// ----- show/hide/remove ----- //
// remove element from DOM
proto.removeElem=function(){this.element.parentNode.removeChild(this.element);// remove display: none
this.css({display:""});this.emitEvent("remove",[this])};proto.remove=function(){// just remove element if no transition support or no transition
if(!transitionProperty||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return}// start transition
this.once("transitionEnd",function(){this.removeElem()});this.hide()};proto.reveal=function(){delete this.isHidden;// remove display: none
this.css({display:""});var options=this.layout.options,onTransitionEnd={},transitionEndProperty=this.getHideRevealTransitionEndProperty("visibleStyle");onTransitionEnd[transitionEndProperty]=this.onRevealTransitionEnd;this.transition({from:options.hiddenStyle,to:options.visibleStyle,isCleaning:!0,onTransitionEnd:onTransitionEnd})};proto.onRevealTransitionEnd=function(){// check if still visible
// during transition, item may have been hidden
if(!this.isHidden){this.emitEvent("reveal")}};/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */proto.getHideRevealTransitionEndProperty=function(styleProperty){var optionStyle=this.layout.options[styleProperty];// use opacity
if(optionStyle.opacity){return"opacity"}// get first property
for(var prop in optionStyle){return prop}};proto.hide=function(){// set flag
this.isHidden=!0;// remove display: none
this.css({display:""});var options=this.layout.options,onTransitionEnd={},transitionEndProperty=this.getHideRevealTransitionEndProperty("hiddenStyle");onTransitionEnd[transitionEndProperty]=this.onHideTransitionEnd;this.transition({from:options.visibleStyle,to:options.hiddenStyle,// keep hidden stuff hidden
isCleaning:!0,onTransitionEnd:onTransitionEnd})};proto.onHideTransitionEnd=function(){// check if still hidden
// during transition, item may have been un-hidden
if(this.isHidden){this.css({display:"none"});this.emitEvent("hide")}};proto.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})};return Item});/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */(function(window,factory){'use strict';// universal module definition
/* jshint strict: false */ /* globals define, module, require */if("function"==typeof define&&define.amd){// AMD - RequireJS
define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(EvEmitter,getSize,utils,Item){return factory(window,EvEmitter,getSize,utils,Item)})}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS - Browserify, Webpack
module.exports=factory(window,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item"))}else{// browser global
window.Outlayer=factory(window,window.EvEmitter,window.getSize,window.fizzyUIUtils,window.Outlayer.Item)}})(window,function factory(window,EvEmitter,getSize,utils,Item){'use strict';// ----- vars ----- //
var console=window.console,jQuery=window.jQuery,noop=function noop(){},GUID=0,instances={};/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */function Outlayer(element,options){var queryElement=utils.getQueryElement(element);if(!queryElement){if(console){console.error("Bad element for "+this.constructor.namespace+": "+(queryElement||element))}return}this.element=queryElement;// add jQuery
if(jQuery){this.$element=jQuery(this.element)}// options
this.options=utils.extend({},this.constructor.defaults);this.option(options);// add id for Outlayer.getFromElement
var id=++GUID;this.element.outlayerGUID=id;// expando
instances[id]=this;// associate via id
// kick it off
this._create();var isInitLayout=this._getOption("initLayout");if(isInitLayout){this.layout()}}// settings are for internal use only
Outlayer.namespace="outlayer";Outlayer.Item=Item;// default options
Outlayer.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,// item options
transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var proto=Outlayer.prototype;// inherit EvEmitter
utils.extend(proto,EvEmitter.prototype);/**
 * set options
 * @param {Object} opts
 */proto.option=function(opts){utils.extend(this.options,opts)};/**
 * get backwards compatible option value, check old name
 */proto._getOption=function(option){var oldOption=this.constructor.compatOptions[option];return oldOption&&this.options[oldOption]!==void 0?this.options[oldOption]:this.options[option]};Outlayer.compatOptions={// currentName: oldName
initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"};proto._create=function(){// get items from children
this.reloadItems();// elements that affect layout, but are not laid out
this.stamps=[];this.stamp(this.options.stamp);// set container style
utils.extend(this.element.style,this.options.containerStyle);// bind resize method
var canBindResize=this._getOption("resize");if(canBindResize){this.bindResize()}};// goes through all children again and gets bricks in proper order
proto.reloadItems=function(){// collection of item elements
this.items=this._itemize(this.element.children)};/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */proto._itemize=function(elems){for(var itemElems=this._filterFindItemElements(elems),Item=this.constructor.Item,items=[],i=0;i<itemElems.length;i++){var elem=itemElems[i],item=new Item(elem,this);items.push(item)}return items};/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */proto._filterFindItemElements=function(elems){return utils.filterFindElements(elems,this.options.itemSelector)};/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */proto.getItemElements=function(){return this.items.map(function(item){return item.element})};// ----- init & layout ----- //
/**
 * lays out all items
 */proto.layout=function(){this._resetLayout();this._manageStamps();// don't animate first layout
var layoutInstant=this._getOption("layoutInstant"),isInstant=layoutInstant!==void 0?layoutInstant:!this._isLayoutInited;this.layoutItems(this.items,isInstant);// flag for initalized
this._isLayoutInited=!0};// _init is alias for layout
proto._init=proto.layout;/**
 * logic before any new layout
 */proto._resetLayout=function(){this.getSize()};proto.getSize=function(){this.size=getSize(this.element)};/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */proto._getMeasurement=function(measurement,size){var option=this.options[measurement],elem;if(!option){// default to 0
this[measurement]=0}else{// use option as an element
if("string"==typeof option){elem=this.element.querySelector(option)}else if(babelHelpers.instanceof(option,HTMLElement)){elem=option}// use size of element, if element
this[measurement]=elem?getSize(elem)[size]:option}};/**
 * layout a collection of item elements
 * @api public
 */proto.layoutItems=function(items,isInstant){items=this._getItemsForLayout(items);this._layoutItems(items,isInstant);this._postLayout()};/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */proto._getItemsForLayout=function(items){return items.filter(function(item){return!item.isIgnored})};/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */proto._layoutItems=function(items,isInstant){this._emitCompleteOnItems("layout",items);if(!items||!items.length){// no items, emit event with empty array
return}var queue=[];items.forEach(function(item){// get x/y object from method
var position=this._getItemLayoutPosition(item);// enqueue
position.item=item;position.isInstant=isInstant||item.isLayoutInstant;queue.push(position)},this);this._processLayoutQueue(queue)};/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */proto._getItemLayoutPosition=function()/* item */{return{x:0,y:0}};/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */proto._processLayoutQueue=function(queue){this.updateStagger();queue.forEach(function(obj,i){this._positionItem(obj.item,obj.x,obj.y,obj.isInstant,i)},this)};// set stagger from option in milliseconds number
proto.updateStagger=function(){var stagger=this.options.stagger;if(null===stagger||stagger===void 0){this.stagger=0;return}this.stagger=getMilliseconds(stagger);return this.stagger};/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */proto._positionItem=function(item,x,y,isInstant,i){if(isInstant){// if not transition, just set CSS
item.goTo(x,y)}else{item.stagger(i*this.stagger);item.moveTo(x,y)}};/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */proto._postLayout=function(){this.resizeContainer()};proto.resizeContainer=function(){var isResizingContainer=this._getOption("resizeContainer");if(!isResizingContainer){return}var size=this._getContainerSize();if(size){this._setContainerMeasure(size.width,!0);this._setContainerMeasure(size.height,!1)}};/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */proto._getContainerSize=noop;/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */proto._setContainerMeasure=function(measure,isWidth){if(measure===void 0){return}var elemSize=this.size;// add padding and border width if border box
if(elemSize.isBorderBox){measure+=isWidth?elemSize.paddingLeft+elemSize.paddingRight+elemSize.borderLeftWidth+elemSize.borderRightWidth:elemSize.paddingBottom+elemSize.paddingTop+elemSize.borderTopWidth+elemSize.borderBottomWidth}measure=Math.max(measure,0);this.element.style[isWidth?"width":"height"]=measure+"px"};/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */proto._emitCompleteOnItems=function(eventName,items){var _this=this;function onComplete(){_this.dispatchEvent(eventName+"Complete",null,[items])}var count=items.length;if(!items||!count){onComplete();return}var doneCount=0;function tick(){doneCount++;if(doneCount==count){onComplete()}}// bind callback
items.forEach(function(item){item.once(eventName,tick)})};/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */proto.dispatchEvent=function(type,event,args){// add original event to arguments
var emitArgs=event?[event].concat(args):args;this.emitEvent(type,emitArgs);if(jQuery){// set this.$element
this.$element=this.$element||jQuery(this.element);if(event){// create jQuery event
var $event=jQuery.Event(event);$event.type=type;this.$element.trigger($event,args)}else{// just trigger with type if no event available
this.$element.trigger(type,args)}}};// -------------------------- ignore & stamps -------------------------- //
/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */proto.ignore=function(elem){var item=this.getItem(elem);if(item){item.isIgnored=!0}};/**
 * return item to layout collection
 * @param {Element} elem
 */proto.unignore=function(elem){var item=this.getItem(elem);if(item){delete item.isIgnored}};/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */proto.stamp=function(elems){elems=this._find(elems);if(!elems){return}this.stamps=this.stamps.concat(elems);// ignore
elems.forEach(this.ignore,this)};/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */proto.unstamp=function(elems){elems=this._find(elems);if(!elems){return}elems.forEach(function(elem){// filter out removed stamp elements
utils.removeFrom(this.stamps,elem);this.unignore(elem)},this)};/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */proto._find=function(elems){if(!elems){return}// if string, use argument as selector string
if("string"==typeof elems){elems=this.element.querySelectorAll(elems)}elems=utils.makeArray(elems);return elems};proto._manageStamps=function(){if(!this.stamps||!this.stamps.length){return}this._getBoundingRect();this.stamps.forEach(this._manageStamp,this)};// update boundingLeft / Top
proto._getBoundingRect=function(){// get bounding rect for container element
var boundingRect=this.element.getBoundingClientRect(),size=this.size;this._boundingRect={left:boundingRect.left+size.paddingLeft+size.borderLeftWidth,top:boundingRect.top+size.paddingTop+size.borderTopWidth,right:boundingRect.right-(size.paddingRight+size.borderRightWidth),bottom:boundingRect.bottom-(size.paddingBottom+size.borderBottomWidth)}};/**
 * @param {Element} stamp
**/proto._manageStamp=noop;/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */proto._getElementOffset=function(elem){var boundingRect=elem.getBoundingClientRect(),thisRect=this._boundingRect,size=getSize(elem),offset={left:boundingRect.left-thisRect.left-size.marginLeft,top:boundingRect.top-thisRect.top-size.marginTop,right:thisRect.right-boundingRect.right-size.marginRight,bottom:thisRect.bottom-boundingRect.bottom-size.marginBottom};return offset};// -------------------------- resize -------------------------- //
// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent=utils.handleEvent;/**
 * Bind layout to window resizing
 */proto.bindResize=function(){window.addEventListener("resize",this);this.isResizeBound=!0};/**
 * Unbind layout to window resizing
 */proto.unbindResize=function(){window.removeEventListener("resize",this);this.isResizeBound=!1};proto.onresize=function(){this.resize()};utils.debounceMethod(Outlayer,"onresize",100);proto.resize=function(){// don't trigger if size did not change
// or if resize was unbound. See #9
if(!this.isResizeBound||!this.needsResizeLayout()){return}this.layout()};/**
 * check if layout is needed post layout
 * @returns Boolean
 */proto.needsResizeLayout=function(){var size=getSize(this.element),hasSizes=this.size&&size;// check that this.size and size are there
// IE8 triggers resize on body size change, so they might not be
return hasSizes&&size.innerWidth!==this.size.innerWidth};// -------------------------- methods -------------------------- //
/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/proto.addItems=function(elems){var items=this._itemize(elems);// add items to collection
if(items.length){this.items=this.items.concat(items)}return items};/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */proto.appended=function(elems){var items=this.addItems(elems);if(!items.length){return}// layout and reveal just the new items
this.layoutItems(items,!0);this.reveal(items)};/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */proto.prepended=function(elems){var items=this._itemize(elems);if(!items.length){return}// add items to beginning of collection
var previousItems=this.items.slice(0);this.items=items.concat(previousItems);// start new layout
this._resetLayout();this._manageStamps();// layout new stuff without transition
this.layoutItems(items,!0);this.reveal(items);// layout previous items
this.layoutItems(previousItems)};/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */proto.reveal=function(items){this._emitCompleteOnItems("reveal",items);if(!items||!items.length){return}var stagger=this.updateStagger();items.forEach(function(item,i){item.stagger(i*stagger);item.reveal()})};/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */proto.hide=function(items){this._emitCompleteOnItems("hide",items);if(!items||!items.length){return}var stagger=this.updateStagger();items.forEach(function(item,i){item.stagger(i*stagger);item.hide()})};/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */proto.revealItemElements=function(elems){var items=this.getItems(elems);this.reveal(items)};/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */proto.hideItemElements=function(elems){var items=this.getItems(elems);this.hide(items)};/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */proto.getItem=function(elem){// loop through items to get the one that matches
for(var i=0,item;i<this.items.length;i++){item=this.items[i];if(item.element==elem){// return item
return item}}};/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */proto.getItems=function(elems){elems=utils.makeArray(elems);var items=[];elems.forEach(function(elem){var item=this.getItem(elem);if(item){items.push(item)}},this);return items};/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */proto.remove=function(elems){var removeItems=this.getItems(elems);this._emitCompleteOnItems("remove",removeItems);// bail if no items to remove
if(!removeItems||!removeItems.length){return}removeItems.forEach(function(item){item.remove();// remove item from collection
utils.removeFrom(this.items,item)},this)};// ----- destroy ----- //
// remove and disable Outlayer instance
proto.destroy=function(){// clean up dynamic styles
var style=this.element.style;style.height="";style.position="";style.width="";// destroy items
this.items.forEach(function(item){item.destroy()});this.unbindResize();var id=this.element.outlayerGUID;delete instances[id];// remove reference to instance by id
delete this.element.outlayerGUID;// remove data for jQuery
if(jQuery){jQuery.removeData(this.element,this.constructor.namespace)}};// -------------------------- data -------------------------- //
/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */Outlayer.data=function(elem){elem=utils.getQueryElement(elem);var id=elem&&elem.outlayerGUID;return id&&instances[id]};// -------------------------- create Outlayer class -------------------------- //
/**
 * create a layout class
 * @param {String} namespace
 */Outlayer.create=function(namespace,options){// sub-class Outlayer
var Layout=subclass(Outlayer);// apply new options and compatOptions
Layout.defaults=utils.extend({},Outlayer.defaults);utils.extend(Layout.defaults,options);Layout.compatOptions=utils.extend({},Outlayer.compatOptions);Layout.namespace=namespace;Layout.data=Outlayer.data;// sub-class Item
Layout.Item=subclass(Item);// -------------------------- declarative -------------------------- //
utils.htmlInit(Layout,namespace);// -------------------------- jQuery bridge -------------------------- //
// make into jQuery plugin
if(jQuery&&jQuery.bridget){jQuery.bridget(namespace,Layout)}return Layout};function subclass(Parent){function SubClass(){Parent.apply(this,arguments)}SubClass.prototype=Object.create(Parent.prototype);SubClass.prototype.constructor=SubClass;return SubClass}// ----- helpers ----- //
// how many milliseconds are in each unit
var msUnits={ms:1,s:1e3};// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds(time){if("number"==typeof time){return time}var matches=time.match(/(^\d*\.?\d*)(\w*)/),num=matches&&matches[1],unit=matches&&matches[2];if(!num.length){return 0}num=parseFloat(num);var mult=msUnits[unit]||1;return num*mult}// ----- fin ----- //
// back in global
Outlayer.Item=Item;return Outlayer});/**
 * Rect
 * low-level utility class for basic geometry
 */(function(window,factory){// universal module definition
/* jshint strict: false */ /* globals define, module */if("function"==typeof define&&define.amd){// AMD
define("packery/js/rect",factory)}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS
module.exports=factory()}else{// browser global
window.Packery=window.Packery||{};window.Packery.Rect=factory()}})(window,function factory(){'use strict';// -------------------------- Rect -------------------------- //
function Rect(props){// extend properties from defaults
for(var prop in Rect.defaults){this[prop]=Rect.defaults[prop]}for(prop in props){this[prop]=props[prop]}}Rect.defaults={x:0,y:0,width:0,height:0};var proto=Rect.prototype;/**
 * Determines whether or not this rectangle wholly encloses another rectangle or point.
 * @param {Rect} rect
 * @returns {Boolean}
**/proto.contains=function(rect){// points don't have width or height
var otherWidth=rect.width||0,otherHeight=rect.height||0;return this.x<=rect.x&&this.y<=rect.y&&this.x+this.width>=rect.x+otherWidth&&this.y+this.height>=rect.y+otherHeight};/**
 * Determines whether or not the rectangle intersects with another.
 * @param {Rect} rect
 * @returns {Boolean}
**/proto.overlaps=function(rect){var thisRight=this.x+this.width,thisBottom=this.y+this.height,rectRight=rect.x+rect.width,rectBottom=rect.y+rect.height;// http://stackoverflow.com/a/306332
return this.x<rectRight&&thisRight>rect.x&&this.y<rectBottom&&thisBottom>rect.y};/**
 * @param {Rect} rect - the overlapping rect
 * @returns {Array} freeRects - rects representing the area around the rect
**/proto.getMaximalFreeRects=function(rect){// if no intersection, return false
if(!this.overlaps(rect)){return!1}var freeRects=[],freeRect,thisRight=this.x+this.width,thisBottom=this.y+this.height,rectRight=rect.x+rect.width,rectBottom=rect.y+rect.height;// top
if(this.y<rect.y){freeRect=new Rect({x:this.x,y:this.y,width:this.width,height:rect.y-this.y});freeRects.push(freeRect)}// right
if(thisRight>rectRight){freeRect=new Rect({x:rectRight,y:this.y,width:thisRight-rectRight,height:this.height});freeRects.push(freeRect)}// bottom
if(thisBottom>rectBottom){freeRect=new Rect({x:this.x,y:rectBottom,width:this.width,height:thisBottom-rectBottom});freeRects.push(freeRect)}// left
if(this.x<rect.x){freeRect=new Rect({x:this.x,y:this.y,width:rect.x-this.x,height:this.height});freeRects.push(freeRect)}return freeRects};proto.canFit=function(rect){return this.width>=rect.width&&this.height>=rect.height};return Rect});/**
 * Packer
 * bin-packing algorithm
 */(function(window,factory){// universal module definition
/* jshint strict: false */ /* globals define, module, require */if("function"==typeof define&&define.amd){// AMD
define("packery/js/packer",["./rect"],factory)}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS
module.exports=factory(require("./rect"))}else{// browser global
var Packery=window.Packery=window.Packery||{};Packery.Packer=factory(Packery.Rect)}})(window,function factory(Rect){'use strict';// -------------------------- Packer -------------------------- //
/**
 * @param {Number} width
 * @param {Number} height
 * @param {String} sortDirection
 *   topLeft for vertical, leftTop for horizontal
 */function Packer(width,height,sortDirection){this.width=width||0;this.height=height||0;this.sortDirection=sortDirection||"downwardLeftToRight";this.reset()}var proto=Packer.prototype;proto.reset=function(){this.spaces=[];var initialSpace=new Rect({x:0,y:0,width:this.width,height:this.height});this.spaces.push(initialSpace);// set sorter
this.sorter=sorters[this.sortDirection]||sorters.downwardLeftToRight};// change x and y of rect to fit with in Packer's available spaces
proto.pack=function(rect){for(var i=0,space;i<this.spaces.length;i++){space=this.spaces[i];if(space.canFit(rect)){this.placeInSpace(rect,space);break}}};proto.columnPack=function(rect){for(var i=0;i<this.spaces.length;i++){var space=this.spaces[i],canFitInSpaceColumn=space.x<=rect.x&&space.x+space.width>=rect.x+rect.width&&space.height>=rect.height-.01;// fudge number for rounding error
if(canFitInSpaceColumn){rect.y=space.y;this.placed(rect);break}}};proto.rowPack=function(rect){for(var i=0;i<this.spaces.length;i++){var space=this.spaces[i],canFitInSpaceRow=space.y<=rect.y&&space.y+space.height>=rect.y+rect.height&&space.width>=rect.width-.01;// fudge number for rounding error
if(canFitInSpaceRow){rect.x=space.x;this.placed(rect);break}}};proto.placeInSpace=function(rect,space){// place rect in space
rect.x=space.x;rect.y=space.y;this.placed(rect)};// update spaces with placed rect
proto.placed=function(rect){// update spaces
for(var revisedSpaces=[],i=0;i<this.spaces.length;i++){var space=this.spaces[i],newSpaces=space.getMaximalFreeRects(rect);// add either the original space or the new spaces to the revised spaces
if(newSpaces){revisedSpaces.push.apply(revisedSpaces,newSpaces)}else{revisedSpaces.push(space)}}this.spaces=revisedSpaces;this.mergeSortSpaces()};proto.mergeSortSpaces=function(){// remove redundant spaces
Packer.mergeRects(this.spaces);this.spaces.sort(this.sorter)};// add a space back
proto.addSpace=function(rect){this.spaces.push(rect);this.mergeSortSpaces()};// -------------------------- utility functions -------------------------- //
/**
 * Remove redundant rectangle from array of rectangles
 * @param {Array} rects: an array of Rects
 * @returns {Array} rects: an array of Rects
**/Packer.mergeRects=function(rects){var i=0,rect=rects[i];rectLoop:while(rect){var j=0,compareRect=rects[i+j];while(compareRect){if(compareRect==rect){j++;// next
}else if(compareRect.contains(rect)){// remove rect
rects.splice(i,1);rect=rects[i];// set next rect
continue rectLoop;// bail on compareLoop
}else if(rect.contains(compareRect)){// remove compareRect
rects.splice(i+j,1)}else{j++}compareRect=rects[i+j];// set next compareRect
}i++;rect=rects[i]}return rects};// -------------------------- sorters -------------------------- //
// functions for sorting rects in order
var sorters={// top down, then left to right
downwardLeftToRight:function downwardLeftToRight(a,b){return a.y-b.y||a.x-b.x},// left to right, then top down
rightwardTopToBottom:function rightwardTopToBottom(a,b){return a.x-b.x||a.y-b.y}};// --------------------------  -------------------------- //
return Packer});/**
 * Packery Item Element
**/(function(window,factory){// universal module definition
/* jshint strict: false */ /* globals define, module, require */if("function"==typeof define&&define.amd){// AMD
define("packery/js/item",["outlayer/outlayer","./rect"],factory)}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS
module.exports=factory(require("outlayer"),require("./rect"))}else{// browser global
window.Packery.Item=factory(window.Outlayer,window.Packery.Rect)}})(window,function factory(Outlayer,Rect){'use strict';// -------------------------- Item -------------------------- //
var docElemStyle=document.documentElement.style,transformProperty="string"==typeof docElemStyle.transform?"transform":"WebkitTransform",Item=function PackeryItem(){Outlayer.Item.apply(this,arguments)},proto=Item.prototype=Object.create(Outlayer.Item.prototype),__create=proto._create;proto._create=function(){// call default _create logic
__create.call(this);this.rect=new Rect};var _moveTo=proto.moveTo;proto.moveTo=function(x,y){// don't shift 1px while dragging
var dx=Math.abs(this.position.x-x),dy=Math.abs(this.position.y-y),canHackGoTo=this.layout.dragItemCount&&!this.isPlacing&&!this.isTransitioning&&1>dx&&1>dy;if(canHackGoTo){this.goTo(x,y);return}_moveTo.apply(this,arguments)};// -------------------------- placing -------------------------- //
proto.enablePlacing=function(){this.removeTransitionStyles();// remove transform property from transition
if(this.isTransitioning&&transformProperty){this.element.style[transformProperty]="none"}this.isTransitioning=!1;this.getSize();this.layout._setRectSize(this.element,this.rect);this.isPlacing=!0};proto.disablePlacing=function(){this.isPlacing=!1};// -----  ----- //
// remove element from DOM
proto.removeElem=function(){var parent=this.element.parentNode;if(parent){parent.removeChild(this.element)}// add space back to packer
this.layout.packer.addSpace(this.rect);this.emitEvent("remove",[this])};// ----- dropPlaceholder ----- //
proto.showDropPlaceholder=function(){var dropPlaceholder=this.dropPlaceholder;if(!dropPlaceholder){// create dropPlaceholder
dropPlaceholder=this.dropPlaceholder=document.createElement("div");dropPlaceholder.className="packery-drop-placeholder";dropPlaceholder.style.position="absolute"}dropPlaceholder.style.width=this.size.width+"px";dropPlaceholder.style.height=this.size.height+"px";this.positionDropPlaceholder();this.layout.element.appendChild(dropPlaceholder)};proto.positionDropPlaceholder=function(){this.dropPlaceholder.style[transformProperty]="translate("+this.rect.x+"px, "+this.rect.y+"px)"};proto.hideDropPlaceholder=function(){// only remove once, #333
var parent=this.dropPlaceholder.parentNode;if(parent){parent.removeChild(this.dropPlaceholder)}};// -----  ----- //
return Item});/*!
 * Packery v2.1.2
 * Gapless, draggable grid layouts
 *
 * Licensed GPLv3 for open source use
 * or Packery Commercial License for commercial use
 *
 * http://packery.metafizzy.co
 * Copyright 2013-2018 Metafizzy
 */(function(window,factory){// universal module definition
/* jshint strict: false */ /* globals define, module, require */if("function"==typeof define&&define.amd){// AMD
define(["get-size/get-size","outlayer/outlayer","packery/js/rect","packery/js/packer","packery/js/item"],factory)}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS
module.exports=factory(require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item"))}else{// browser global
window.Packery=factory(window.getSize,window.Outlayer,window.Packery.Rect,window.Packery.Packer,window.Packery.Item)}})(window,function factory(getSize,Outlayer,Rect,Packer,Item){'use strict';// ----- Rect ----- //
// allow for pixel rounding errors IE8-IE11 & Firefox; #227
Rect.prototype.canFit=function(rect){return this.width>=rect.width-1&&this.height>=rect.height-1};// -------------------------- Packery -------------------------- //
// create an Outlayer layout class
var Packery=Outlayer.create("packery");Packery.Item=Item;var proto=Packery.prototype;proto._create=function(){// call super
Outlayer.prototype._create.call(this);// initial properties
this.packer=new Packer;// packer for drop targets
this.shiftPacker=new Packer;this.isEnabled=!0;this.dragItemCount=0;// create drag handlers
var _this=this;this.handleDraggabilly={dragStart:function dragStart(){_this.itemDragStart(this.element)},dragMove:function dragMove(){_this.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function dragEnd(){_this.itemDragEnd(this.element)}};this.handleUIDraggable={start:function handleUIDraggableStart(event,ui){// HTML5 may trigger dragstart, dismiss HTML5 dragging
if(!ui){return}_this.itemDragStart(event.currentTarget)},drag:function handleUIDraggableDrag(event,ui){if(!ui){return}_this.itemDragMove(event.currentTarget,ui.position.left,ui.position.top)},stop:function handleUIDraggableStop(event,ui){if(!ui){return}_this.itemDragEnd(event.currentTarget)}}};// ----- init & layout ----- //
/**
 * logic before any new layout
 */proto._resetLayout=function(){this.getSize();this._getMeasurements();// reset packer
var width,height,sortDirection;// packer settings, if horizontal or vertical
if(this._getOption("horizontal")){width=1/0;height=this.size.innerHeight+this.gutter;sortDirection="rightwardTopToBottom"}else{width=this.size.innerWidth+this.gutter;height=1/0;sortDirection="downwardLeftToRight"}this.packer.width=this.shiftPacker.width=width;this.packer.height=this.shiftPacker.height=height;this.packer.sortDirection=this.shiftPacker.sortDirection=sortDirection;this.packer.reset();// layout
this.maxY=0;this.maxX=0};/**
 * update columnWidth, rowHeight, & gutter
 * @private
 */proto._getMeasurements=function(){this._getMeasurement("columnWidth","width");this._getMeasurement("rowHeight","height");this._getMeasurement("gutter","width")};proto._getItemLayoutPosition=function(item){this._setRectSize(item.element,item.rect);if(this.isShifting||0<this.dragItemCount){var packMethod=this._getPackMethod();this.packer[packMethod](item.rect)}else{this.packer.pack(item.rect)}this._setMaxXY(item.rect);return item.rect};proto.shiftLayout=function(){this.isShifting=!0;this.layout();delete this.isShifting};proto._getPackMethod=function(){return this._getOption("horizontal")?"rowPack":"columnPack"};/**
 * set max X and Y value, for size of container
 * @param {Packery.Rect} rect
 * @private
 */proto._setMaxXY=function(rect){this.maxX=Math.max(rect.x+rect.width,this.maxX);this.maxY=Math.max(rect.y+rect.height,this.maxY)};/**
 * set the width and height of a rect, applying columnWidth and rowHeight
 * @param {Element} elem
 * @param {Packery.Rect} rect
 */proto._setRectSize=function(elem,rect){var size=getSize(elem),w=size.outerWidth,h=size.outerHeight;// size for columnWidth and rowHeight, if available
// only check if size is non-zero, #177
if(w||h){w=this._applyGridGutter(w,this.columnWidth);h=this._applyGridGutter(h,this.rowHeight)}// rect must fit in packer
rect.width=Math.min(w,this.packer.width);rect.height=Math.min(h,this.packer.height)};/**
 * fits item to columnWidth/rowHeight and adds gutter
 * @param {Number} measurement - item width or height
 * @param {Number} gridSize - columnWidth or rowHeight
 * @returns measurement
 */proto._applyGridGutter=function(measurement,gridSize){// just add gutter if no gridSize
if(!gridSize){return measurement+this.gutter}gridSize+=this.gutter;// fit item to columnWidth/rowHeight
var remainder=measurement%gridSize,mathMethod=remainder&&1>remainder?"round":"ceil";measurement=Math[mathMethod](measurement/gridSize)*gridSize;return measurement};proto._getContainerSize=function(){if(this._getOption("horizontal")){return{width:this.maxX-this.gutter}}else{return{height:this.maxY-this.gutter}}};// -------------------------- stamp -------------------------- //
/**
 * makes space for element
 * @param {Element} elem
 */proto._manageStamp=function(elem){var item=this.getItem(elem),rect;if(item&&item.isPlacing){rect=item.rect}else{var offset=this._getElementOffset(elem);rect=new Rect({x:this._getOption("originLeft")?offset.left:offset.right,y:this._getOption("originTop")?offset.top:offset.bottom})}this._setRectSize(elem,rect);// save its space in the packer
this.packer.placed(rect);this._setMaxXY(rect)};// -------------------------- methods -------------------------- //
function verticalSorter(a,b){return a.position.y-b.position.y||a.position.x-b.position.x}function horizontalSorter(a,b){return a.position.x-b.position.x||a.position.y-b.position.y}proto.sortItemsByPosition=function(){var sorter=this._getOption("horizontal")?horizontalSorter:verticalSorter;this.items.sort(sorter)};/**
 * Fit item element in its current position
 * Packery will position elements around it
 * useful for expanding elements
 *
 * @param {Element} elem
 * @param {Number} x - horizontal destination position, optional
 * @param {Number} y - vertical destination position, optional
 */proto.fit=function(elem,x,y){var item=this.getItem(elem);if(!item){return}// stamp item to get it out of layout
this.stamp(item.element);// set placing flag
item.enablePlacing();this.updateShiftTargets(item);// fall back to current position for fitting
x=x===void 0?item.rect.x:x;y=y===void 0?item.rect.y:y;// position it best at its destination
this.shift(item,x,y);this._bindFitEvents(item);item.moveTo(item.rect.x,item.rect.y);// layout everything else
this.shiftLayout();// return back to regularly scheduled programming
this.unstamp(item.element);this.sortItemsByPosition();item.disablePlacing()};/**
 * emit event when item is fit and other items are laid out
 * @param {Packery.Item} item
 * @private
 */proto._bindFitEvents=function(item){var _this=this,ticks=0;function onLayout(){ticks++;if(2!=ticks){return}_this.dispatchEvent("fitComplete",null,[item])}// when item is laid out
item.once("layout",onLayout);// when all items are laid out
this.once("layoutComplete",onLayout)};// -------------------------- resize -------------------------- //
// debounced, layout on resize
proto.resize=function(){// don't trigger if size did not change
// or if resize was unbound. See #285, outlayer#9
if(!this.isResizeBound||!this.needsResizeLayout()){return}if(this.options.shiftPercentResize){this.resizeShiftPercentLayout()}else{this.layout()}};/**
 * check if layout is needed post layout
 * @returns Boolean
 */proto.needsResizeLayout=function(){var size=getSize(this.element),innerSize=this._getOption("horizontal")?"innerHeight":"innerWidth";return size[innerSize]!=this.size[innerSize]};proto.resizeShiftPercentLayout=function(){var items=this._getItemsForLayout(this.items),isHorizontal=this._getOption("horizontal"),coord=isHorizontal?"y":"x",measure=isHorizontal?"height":"width",segmentName=isHorizontal?"rowHeight":"columnWidth",innerSize=isHorizontal?"innerHeight":"innerWidth",previousSegment=this[segmentName];previousSegment=previousSegment&&previousSegment+this.gutter;if(previousSegment){this._getMeasurements();var currentSegment=this[segmentName]+this.gutter;items.forEach(function(item){var seg=Math.round(item.rect[coord]/previousSegment);item.rect[coord]=seg*currentSegment})}else{var currentSize=getSize(this.element)[innerSize]+this.gutter,previousSize=this.packer[measure];items.forEach(function(item){item.rect[coord]=item.rect[coord]/previousSize*currentSize})}this.shiftLayout()};// -------------------------- drag -------------------------- //
/**
 * handle an item drag start event
 * @param {Element} elem
 */proto.itemDragStart=function(elem){if(!this.isEnabled){return}this.stamp(elem);// this.ignore( elem );
var item=this.getItem(elem);if(!item){return}item.enablePlacing();item.showDropPlaceholder();this.dragItemCount++;this.updateShiftTargets(item)};proto.updateShiftTargets=function(dropItem){this.shiftPacker.reset();// pack stamps
this._getBoundingRect();var isOriginLeft=this._getOption("originLeft"),isOriginTop=this._getOption("originTop");this.stamps.forEach(function(stamp){// ignore dragged item
var item=this.getItem(stamp);if(item&&item.isPlacing){return}var offset=this._getElementOffset(stamp),rect=new Rect({x:isOriginLeft?offset.left:offset.right,y:isOriginTop?offset.top:offset.bottom});this._setRectSize(stamp,rect);// save its space in the packer
this.shiftPacker.placed(rect)},this);// reset shiftTargets
var isHorizontal=this._getOption("horizontal"),segmentName=isHorizontal?"rowHeight":"columnWidth",measure=isHorizontal?"height":"width";this.shiftTargetKeys=[];this.shiftTargets=[];var boundsSize,segment=this[segmentName];segment=segment&&segment+this.gutter;if(segment){var segmentSpan=Math.ceil(dropItem.rect[measure]/segment),segs=Math.floor((this.shiftPacker[measure]+this.gutter)/segment);boundsSize=(segs-segmentSpan)*segment;// add targets on top
for(var i=0;i<segs;i++){var initialX=isHorizontal?0:i*segment,initialY=isHorizontal?i*segment:0;this._addShiftTarget(initialX,initialY,boundsSize)}}else{boundsSize=this.shiftPacker[measure]+this.gutter-dropItem.rect[measure];this._addShiftTarget(0,0,boundsSize)}// pack each item to measure where shiftTargets are
var items=this._getItemsForLayout(this.items),packMethod=this._getPackMethod();items.forEach(function(item){var rect=item.rect;this._setRectSize(item.element,rect);this.shiftPacker[packMethod](rect);// add top left corner
this._addShiftTarget(rect.x,rect.y,boundsSize);// add bottom left / top right corner
var cornerX=isHorizontal?rect.x+rect.width:rect.x,cornerY=isHorizontal?rect.y:rect.y+rect.height;this._addShiftTarget(cornerX,cornerY,boundsSize);if(segment){// add targets for each column on bottom / row on right
for(var segSpan=Math.round(rect[measure]/segment),i=1;i<segSpan;i++){var segX=isHorizontal?cornerX:rect.x+segment*i,segY=isHorizontal?rect.y+segment*i:cornerY;this._addShiftTarget(segX,segY,boundsSize)}}},this)};proto._addShiftTarget=function(x,y,boundsSize){var checkCoord=this._getOption("horizontal")?y:x;if(0!==checkCoord&&checkCoord>boundsSize){return}// create string for a key, easier to keep track of what targets
var key=x+","+y,hasKey=-1!=this.shiftTargetKeys.indexOf(key);if(hasKey){return}this.shiftTargetKeys.push(key);this.shiftTargets.push({x:x,y:y})};// -------------------------- drop -------------------------- //
proto.shift=function(item,x,y){var shiftPosition,minDistance=1/0,position={x:x,y:y};this.shiftTargets.forEach(function(target){var distance=getDistance(target,position);if(distance<minDistance){shiftPosition=target;minDistance=distance}});item.rect.x=shiftPosition.x;item.rect.y=shiftPosition.y};function getDistance(a,b){var dx=b.x-a.x,dy=b.y-a.y;return Math.sqrt(dx*dx+dy*dy)}// -------------------------- drag move -------------------------- //
var DRAG_THROTTLE_TIME=120;/**
 * handle an item drag move event
 * @param {Element} elem
 * @param {Number} x - horizontal change in position
 * @param {Number} y - vertical change in position
 */proto.itemDragMove=function(elem,x,y){var item=this.isEnabled&&this.getItem(elem);if(!item){return}x-=this.size.paddingLeft;y-=this.size.paddingTop;var _this=this;function onDrag(){_this.shift(item,x,y);item.positionDropPlaceholder();_this.layout()}// throttle
var now=new Date,isThrottled=this._itemDragTime&&now-this._itemDragTime<DRAG_THROTTLE_TIME;if(isThrottled){clearTimeout(this.dragTimeout);this.dragTimeout=setTimeout(onDrag,DRAG_THROTTLE_TIME)}else{onDrag();this._itemDragTime=now}};// -------------------------- drag end -------------------------- //
/**
 * handle an item drag end event
 * @param {Element} elem
 */proto.itemDragEnd=function(elem){var item=this.isEnabled&&this.getItem(elem);if(!item){return}clearTimeout(this.dragTimeout);item.element.classList.add("is-positioning-post-drag");var completeCount=0,_this=this;function onDragEndLayoutComplete(){completeCount++;if(2!=completeCount){return}// reset drag item
item.element.classList.remove("is-positioning-post-drag");item.hideDropPlaceholder();_this.dispatchEvent("dragItemPositioned",null,[item])}item.once("layout",onDragEndLayoutComplete);this.once("layoutComplete",onDragEndLayoutComplete);item.moveTo(item.rect.x,item.rect.y);this.layout();this.dragItemCount=Math.max(0,this.dragItemCount-1);this.sortItemsByPosition();item.disablePlacing();this.unstamp(item.element)};/**
 * binds Draggabilly events
 * @param {Draggabilly} draggie
 */proto.bindDraggabillyEvents=function(draggie){this._bindDraggabillyEvents(draggie,"on")};proto.unbindDraggabillyEvents=function(draggie){this._bindDraggabillyEvents(draggie,"off")};proto._bindDraggabillyEvents=function(draggie,method){var handlers=this.handleDraggabilly;draggie[method]("dragStart",handlers.dragStart);draggie[method]("dragMove",handlers.dragMove);draggie[method]("dragEnd",handlers.dragEnd)};/**
 * binds jQuery UI Draggable events
 * @param {jQuery} $elems
 */proto.bindUIDraggableEvents=function($elems){this._bindUIDraggableEvents($elems,"on")};proto.unbindUIDraggableEvents=function($elems){this._bindUIDraggableEvents($elems,"off")};proto._bindUIDraggableEvents=function($elems,method){var handlers=this.handleUIDraggable;$elems[method]("dragstart",handlers.start)[method]("drag",handlers.drag)[method]("dragstop",handlers.stop)};// ----- destroy ----- //
var _destroy=proto.destroy;proto.destroy=function(){_destroy.apply(this,arguments);// disable flag; prevent drag events from triggering. #72
this.isEnabled=!1};// -----  ----- //
Packery.Rect=Rect;Packery.Packer=Packer;return Packery});/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */ /* jshint browser: true, strict: true, undef: true, unused: true */(function(window,factory){// universal module definition
/*jshint strict: false */ /* globals define, module, require */if("function"==typeof define&&define.amd){// AMD
define(["jquery"],function(jQuery){return factory(window,jQuery)})}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS
module.exports=factory(window,require("jquery"))}else{// browser global
window.jQueryBridget=factory(window,window.jQuery)}})(window,function factory(window,jQuery){'use strict';// ----- utils ----- //
var arraySlice=Array.prototype.slice,console=window.console,logError="undefined"==typeof console?function(){}:function(message){console.error(message)};// helper function for logging errors
// $.error breaks jQuery chaining
// ----- jQueryBridget ----- //
function jQueryBridget(namespace,PluginClass,$){$=$||jQuery||window.jQuery;if(!$){return}// add option method -> $().plugin('option', {...})
if(!PluginClass.prototype.option){// option setter
PluginClass.prototype.option=function(opts){// bail out if not an object
if(!$.isPlainObject(opts)){return}this.options=$.extend(!0,this.options,opts)}}// make jQuery plugin
$.fn[namespace]=function(arg0/*, arg1 */){if("string"==typeof arg0){// method call $().plugin( 'methodName', { options } )
// shift arguments by 1
var args=arraySlice.call(arguments,1);return methodCall(this,arg0,args)}// just $().plugin({ options })
plainCall(this,arg0);return this};// $().plugin('methodName')
function methodCall($elems,methodName,args){var returnValue,pluginMethodStr="$()."+namespace+"(\""+methodName+"\")";$elems.each(function(i,elem){// get instance
var instance=$.data(elem,namespace);if(!instance){logError(namespace+" not initialized. Cannot call methods, i.e. "+pluginMethodStr);return}var method=instance[methodName];if(!method||"_"==methodName.charAt(0)){logError(pluginMethodStr+" is not a valid method");return}// apply method, get return value
var value=method.apply(instance,args);// set return value if value is returned, use only first value
returnValue=returnValue===void 0?value:returnValue});return returnValue!==void 0?returnValue:$elems}function plainCall($elems,options){$elems.each(function(i,elem){var instance=$.data(elem,namespace);if(instance){// set options & init
instance.option(options);instance._init()}else{// initialize new instance
instance=new PluginClass(elem,options);$.data(elem,namespace,instance)}})}updateJQuery($)}// ----- updateJQuery ----- //
// set $.bridget for v1 backwards compatibility
function updateJQuery($){if(!$||$&&$.bridget){return}$.bridget=jQueryBridget}updateJQuery(jQuery||window.jQuery);// -----  ----- //
return jQueryBridget});/*!
 * Draggabilly PACKAGED v2.1.1
 * Make that shiz draggable
 * http://draggabilly.desandro.com
 * MIT license
 */ /**
 * Bridget makes jQuery widgets
 * v2.0.0
 * MIT license
 */ /* jshint browser: true, strict: true, undef: true, unused: true */(function(window,factory){/* globals define: false, module: false, require: false */if("function"==typeof define&&define.amd){// AMD
define("jquery-bridget/jquery-bridget",["jquery"],function(jQuery){factory(window,jQuery)})}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS
module.exports=factory(window,require("jquery"))}else{// browser global
window.jQueryBridget=factory(window,window.jQuery)}})(window,function factory(window,jQuery){// ----- utils ----- //
var arraySlice=Array.prototype.slice,console=window.console,logError="undefined"==typeof console?function(){}:function(message){console.error(message)};// helper function for logging errors
// $.error breaks jQuery chaining
// ----- jQueryBridget ----- //
function jQueryBridget(namespace,PluginClass,$){$=$||jQuery||window.jQuery;if(!$){return}// add option method -> $().plugin('option', {...})
if(!PluginClass.prototype.option){// option setter
PluginClass.prototype.option=function(opts){// bail out if not an object
if(!$.isPlainObject(opts)){return}this.options=$.extend(!0,this.options,opts)}}// make jQuery plugin
$.fn[namespace]=function(arg0/*, arg1 */){if("string"==typeof arg0){// method call $().plugin( 'methodName', { options } )
// shift arguments by 1
var args=arraySlice.call(arguments,1);return methodCall(this,arg0,args)}// just $().plugin({ options })
plainCall(this,arg0);return this};// $().plugin('methodName')
function methodCall($elems,methodName,args){var returnValue,pluginMethodStr="$()."+namespace+"(\""+methodName+"\")";$elems.each(function(i,elem){// get instance
var instance=$.data(elem,namespace);if(!instance){logError(namespace+" not initialized. Cannot call methods, i.e. "+pluginMethodStr);return}var method=instance[methodName];if(!method||"_"==methodName.charAt(0)){logError(pluginMethodStr+" is not a valid method");return}// apply method, get return value
var value=method.apply(instance,args);// set return value if value is returned, use only first value
returnValue=returnValue===void 0?value:returnValue});return returnValue!==void 0?returnValue:$elems}function plainCall($elems,options){$elems.each(function(i,elem){var instance=$.data(elem,namespace);if(instance){// set options & init
instance.option(options);instance._init()}else{// initialize new instance
instance=new PluginClass(elem,options);$.data(elem,namespace,instance)}})}updateJQuery($)}// ----- updateJQuery ----- //
// set $.bridget for v1 backwards compatibility
function updateJQuery($){if(!$||$&&$.bridget){return}$.bridget=jQueryBridget}updateJQuery(jQuery||window.jQuery);// -----  ----- //
return jQueryBridget});/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */ /*jshint browser: true, strict: true, undef: true, unused: true */ /*global define: false, module: false, console: false */(function(window,factory){if("function"==typeof define&&define.amd){// AMD
define("get-size/get-size",[],function(){return factory()})}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS
module.exports=factory()}else{// browser global
window.getSize=factory()}})(window,function factory(){// -------------------------- helpers -------------------------- //
// get a number from a string, not a percentage
function getStyleSize(value){var num=parseFloat(value),isValid=-1==value.indexOf("%")&&!isNaN(num);// not a percent like '100%', and a number
return isValid&&num}function noop(){}var logError="undefined"==typeof console?noop:function(message){console.error(message)},measurements=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],measurementsLength=measurements.length;// -------------------------- measurements -------------------------- //
function getZeroSize(){for(var size={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},i=0,measurement;i<measurementsLength;i++){measurement=measurements[i];size[measurement]=0}return size}// -------------------------- getStyle -------------------------- //
/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */function getStyle(elem){var style=getComputedStyle(elem);if(!style){logError("Style returned "+style+". Are you running this code in a hidden iframe on Firefox? "+"See http://bit.ly/getsizebug1")}return style}// -------------------------- setup -------------------------- //
var isSetup=!1,isBoxSizeOuter;/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */function setup(){// setup once
if(isSetup){return}isSetup=!0;// -------------------------- box sizing -------------------------- //
/**
   * WebKit measures the outer-width on style.width on border-box elems
   * IE & Firefox<29 measures the inner-width
   */var div=document.createElement("div");div.style.width="200px";div.style.padding="1px 2px 3px 4px";div.style.borderStyle="solid";div.style.borderWidth="1px 2px 3px 4px";div.style.boxSizing="border-box";var body=document.body||document.documentElement;body.appendChild(div);var style=getStyle(div);getSize.isBoxSizeOuter=isBoxSizeOuter=200==getStyleSize(style.width);body.removeChild(div)}// -------------------------- getSize -------------------------- //
function getSize(elem){setup();// use querySeletor if elem is string
if("string"==typeof elem){elem=document.querySelector(elem)}// do not proceed on non-objects
if(!elem||"object"!=babelHelpers.typeof(elem)||!elem.nodeType){return}var style=getStyle(elem);// if hidden, everything is 0
if("none"==style.display){return getZeroSize()}// get all measurements
for(var size={width:elem.offsetWidth,height:elem.offsetHeight},isBorderBox=size.isBorderBox="border-box"==style.boxSizing,i=0;i<measurementsLength;i++){var measurement=measurements[i],value=style[measurement],num=parseFloat(value);// any 'auto', 'medium' value will be 0
size[measurement]=!isNaN(num)?num:0}var paddingWidth=size.paddingLeft+size.paddingRight,paddingHeight=size.paddingTop+size.paddingBottom,marginWidth=size.marginLeft+size.marginRight,marginHeight=size.marginTop+size.marginBottom,borderWidth=size.borderLeftWidth+size.borderRightWidth,borderHeight=size.borderTopWidth+size.borderBottomWidth,isBorderBoxSizeOuter=isBorderBox&&isBoxSizeOuter,styleWidth=getStyleSize(style.width);if(!1!==styleWidth){size.width=styleWidth+(// add padding and border unless it's already including it
isBorderBoxSizeOuter?0:paddingWidth+borderWidth)}var styleHeight=getStyleSize(style.height);if(!1!==styleHeight){size.height=styleHeight+(// add padding and border unless it's already including it
isBorderBoxSizeOuter?0:paddingHeight+borderHeight)}size.innerWidth=size.width-(paddingWidth+borderWidth);size.innerHeight=size.height-(paddingHeight+borderHeight);size.outerWidth=size.width+marginWidth;size.outerHeight=size.height+marginHeight;return size}return getSize});/**
 * EvEmitter v1.0.3
 * Lil' event emitter
 * MIT License
 */ /* jshint unused: true, undef: true, strict: true */(function(global,factory){// universal module definition
/* jshint strict: false */ /* globals define, module, window */if("function"==typeof define&&define.amd){// AMD - RequireJS
define("ev-emitter/ev-emitter",factory)}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS - Browserify, Webpack
module.exports=factory()}else{// Browser globals
global.EvEmitter=factory()}})("undefined"!=typeof window?window:this,function(){function EvEmitter(){}var proto=EvEmitter.prototype;proto.on=function(eventName,listener){if(!eventName||!listener){return}// set events hash
var events=this._events=this._events||{},listeners=events[eventName]=events[eventName]||[];// set listeners array
// only add once
if(-1==listeners.indexOf(listener)){listeners.push(listener)}return this};proto.once=function(eventName,listener){if(!eventName||!listener){return}// add event
this.on(eventName,listener);// set once flag
// set onceEvents hash
var onceEvents=this._onceEvents=this._onceEvents||{},onceListeners=onceEvents[eventName]=onceEvents[eventName]||{};// set onceListeners object
// set flag
onceListeners[listener]=!0;return this};proto.off=function(eventName,listener){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return}var index=listeners.indexOf(listener);if(-1!=index){listeners.splice(index,1)}return this};proto.emitEvent=function(eventName,args){var listeners=this._events&&this._events[eventName];if(!listeners||!listeners.length){return}var i=0,listener=listeners[i];args=args||[];// once stuff
var onceListeners=this._onceEvents&&this._onceEvents[eventName];while(listener){var isOnce=onceListeners&&onceListeners[listener];if(isOnce){// remove listener
// remove before trigger to prevent recursion
this.off(eventName,listener);// unset once flag
delete onceListeners[listener]}// trigger listener
listener.apply(this,args);// get next listener
i+=isOnce?0:1;listener=listeners[i]}return this};return EvEmitter});/*!
 * Unipointer v2.1.0
 * base class for doing one thing with pointer event
 * MIT license
 */ /*jshint browser: true, undef: true, unused: true, strict: true */(function(window,factory){// universal module definition
/* jshint strict: false */ /*global define, module, require */if("function"==typeof define&&define.amd){// AMD
define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(EvEmitter){return factory(window,EvEmitter)})}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS
module.exports=factory(window,require("ev-emitter"))}else{// browser global
window.Unipointer=factory(window,window.EvEmitter)}})(window,function factory(window,EvEmitter){function noop(){}function Unipointer(){}// inherit EvEmitter
var proto=Unipointer.prototype=Object.create(EvEmitter.prototype);proto.bindStartEvent=function(elem){this._bindStartEvent(elem,!0)};proto.unbindStartEvent=function(elem){this._bindStartEvent(elem,!1)};/**
 * works as unbinder, as you can ._bindStart( false ) to unbind
 * @param {Boolean} isBind - will unbind if falsey
 */proto._bindStartEvent=function(elem,isBind){// munge isBind, default to true
isBind=isBind===void 0?!0:!!isBind;var bindMethod=isBind?"addEventListener":"removeEventListener";if(window.navigator.pointerEnabled){// W3C Pointer Events, IE11. See https://coderwall.com/p/mfreca
elem[bindMethod]("pointerdown",this)}else if(window.navigator.msPointerEnabled){// IE10 Pointer Events
elem[bindMethod]("MSPointerDown",this)}else{// listen for both, for devices like Chrome Pixel
elem[bindMethod]("mousedown",this);elem[bindMethod]("touchstart",this)}};// trigger handler methods for events
proto.handleEvent=function(event){var method="on"+event.type;if(this[method]){this[method](event)}};// returns the touch that we're keeping track of
proto.getTouch=function(touches){for(var i=0,touch;i<touches.length;i++){touch=touches[i];if(touch.identifier==this.pointerIdentifier){return touch}}};// ----- start event ----- //
proto.onmousedown=function(event){// dismiss clicks from right or middle buttons
var button=event.button;if(button&&0!==button&&1!==button){return}this._pointerDown(event,event)};proto.ontouchstart=function(event){this._pointerDown(event,event.changedTouches[0])};proto.onMSPointerDown=proto.onpointerdown=function(event){this._pointerDown(event,event)};/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */proto._pointerDown=function(event,pointer){// dismiss other pointers
if(this.isPointerDown){return}this.isPointerDown=!0;// save pointer identifier to match up touch events
this.pointerIdentifier=pointer.pointerId!==void 0?// pointerId for pointer events, touch.indentifier for touch events
pointer.pointerId:pointer.identifier;this.pointerDown(event,pointer)};proto.pointerDown=function(event,pointer){this._bindPostStartEvents(event);this.emitEvent("pointerDown",[event,pointer])};// hash of events to be bound after start event
var postStartEvents={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"],MSPointerDown:["MSPointerMove","MSPointerUp","MSPointerCancel"]};proto._bindPostStartEvents=function(event){if(!event){return}// get proper events to match start event
var events=postStartEvents[event.type];// bind events to node
events.forEach(function(eventName){window.addEventListener(eventName,this)},this);// save these arguments
this._boundPointerEvents=events};proto._unbindPostStartEvents=function(){// check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
if(!this._boundPointerEvents){return}this._boundPointerEvents.forEach(function(eventName){window.removeEventListener(eventName,this)},this);delete this._boundPointerEvents};// ----- move event ----- //
proto.onmousemove=function(event){this._pointerMove(event,event)};proto.onMSPointerMove=proto.onpointermove=function(event){if(event.pointerId==this.pointerIdentifier){this._pointerMove(event,event)}};proto.ontouchmove=function(event){var touch=this.getTouch(event.changedTouches);if(touch){this._pointerMove(event,touch)}};/**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */proto._pointerMove=function(event,pointer){this.pointerMove(event,pointer)};// public
proto.pointerMove=function(event,pointer){this.emitEvent("pointerMove",[event,pointer])};// ----- end event ----- //
proto.onmouseup=function(event){this._pointerUp(event,event)};proto.onMSPointerUp=proto.onpointerup=function(event){if(event.pointerId==this.pointerIdentifier){this._pointerUp(event,event)}};proto.ontouchend=function(event){var touch=this.getTouch(event.changedTouches);if(touch){this._pointerUp(event,touch)}};/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */proto._pointerUp=function(event,pointer){this._pointerDone();this.pointerUp(event,pointer)};// public
proto.pointerUp=function(event,pointer){this.emitEvent("pointerUp",[event,pointer])};// ----- pointer done ----- //
// triggered on pointer up & pointer cancel
proto._pointerDone=function(){// reset properties
this.isPointerDown=!1;delete this.pointerIdentifier;// remove events
this._unbindPostStartEvents();this.pointerDone()};proto.pointerDone=noop;// ----- pointer cancel ----- //
proto.onMSPointerCancel=proto.onpointercancel=function(event){if(event.pointerId==this.pointerIdentifier){this._pointerCancel(event,event)}};proto.ontouchcancel=function(event){var touch=this.getTouch(event.changedTouches);if(touch){this._pointerCancel(event,touch)}};/**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */proto._pointerCancel=function(event,pointer){this._pointerDone();this.pointerCancel(event,pointer)};// public
proto.pointerCancel=function(event,pointer){this.emitEvent("pointerCancel",[event,pointer])};// -----  ----- //
// utility function for getting x/y coords from event
Unipointer.getPointerPoint=function(pointer){return{x:pointer.pageX,y:pointer.pageY}};// -----  ----- //
return Unipointer});/*!
 * Unidragger v2.1.0
 * Draggable base class
 * MIT license
 */ /*jshint browser: true, unused: true, undef: true, strict: true */(function(window,factory){// universal module definition
/*jshint strict: false */ /*globals define, module, require */if("function"==typeof define&&define.amd){// AMD
define("unidragger/unidragger",["unipointer/unipointer"],function(Unipointer){return factory(window,Unipointer)})}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS
module.exports=factory(window,require("unipointer"))}else{// browser global
window.Unidragger=factory(window,window.Unipointer)}})(window,function factory(window,Unipointer){// -----  ----- //
function noop(){}// -------------------------- Unidragger -------------------------- //
function Unidragger(){}// inherit Unipointer & EvEmitter
var proto=Unidragger.prototype=Object.create(Unipointer.prototype);// ----- bind start ----- //
proto.bindHandles=function(){this._bindHandles(!0)};proto.unbindHandles=function(){this._bindHandles(!1)};var navigator=window.navigator;/**
 * works as unbinder, as you can .bindHandles( false ) to unbind
 * @param {Boolean} isBind - will unbind if falsey
 */proto._bindHandles=function(isBind){// munge isBind, default to true
isBind=isBind===void 0?!0:!!isBind;// extra bind logic
var binderExtra;if(navigator.pointerEnabled){binderExtra=function binderExtra(handle){// disable scrolling on the element
handle.style.touchAction=isBind?"none":""}}else if(navigator.msPointerEnabled){binderExtra=function binderExtra(handle){// disable scrolling on the element
handle.style.msTouchAction=isBind?"none":""}}else{binderExtra=noop}// bind each handle
for(var bindMethod=isBind?"addEventListener":"removeEventListener",i=0,handle;i<this.handles.length;i++){handle=this.handles[i];this._bindStartEvent(handle,isBind);binderExtra(handle);handle[bindMethod]("click",this)}};// ----- start event ----- //
/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */proto.pointerDown=function(event,pointer){// dismiss range sliders
if("INPUT"==event.target.nodeName&&"range"==event.target.type){// reset pointerDown logic
this.isPointerDown=!1;delete this.pointerIdentifier;return}this._dragPointerDown(event,pointer);// kludge to blur focused inputs in dragger
var focused=document.activeElement;if(focused&&focused.blur){focused.blur()}// bind move and end events
this._bindPostStartEvents(event);this.emitEvent("pointerDown",[event,pointer])};// base pointer down logic
proto._dragPointerDown=function(event,pointer){// track to see when dragging starts
this.pointerDownPoint=Unipointer.getPointerPoint(pointer);var canPreventDefault=this.canPreventDefaultOnPointerDown(event,pointer);if(canPreventDefault){event.preventDefault()}};// overwriteable method so Flickity can prevent for scrolling
proto.canPreventDefaultOnPointerDown=function(event){// prevent default, unless touchstart or <select>
return"SELECT"!=event.target.nodeName};// ----- move event ----- //
/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */proto.pointerMove=function(event,pointer){var moveVector=this._dragPointerMove(event,pointer);this.emitEvent("pointerMove",[event,pointer,moveVector]);this._dragMove(event,pointer,moveVector)};// base pointer move logic
proto._dragPointerMove=function(event,pointer){var movePoint=Unipointer.getPointerPoint(pointer),moveVector={x:movePoint.x-this.pointerDownPoint.x,y:movePoint.y-this.pointerDownPoint.y};// start drag if pointer has moved far enough to start drag
if(!this.isDragging&&this.hasDragStarted(moveVector)){this._dragStart(event,pointer)}return moveVector};// condition if pointer has moved far enough to start drag
proto.hasDragStarted=function(moveVector){return 3<Math.abs(moveVector.x)||3<Math.abs(moveVector.y)};// ----- end event ----- //
/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */proto.pointerUp=function(event,pointer){this.emitEvent("pointerUp",[event,pointer]);this._dragPointerUp(event,pointer)};proto._dragPointerUp=function(event,pointer){if(this.isDragging){this._dragEnd(event,pointer)}else{// pointer didn't move enough for drag to start
this._staticClick(event,pointer)}};// -------------------------- drag -------------------------- //
// dragStart
proto._dragStart=function(event,pointer){this.isDragging=!0;this.dragStartPoint=Unipointer.getPointerPoint(pointer);// prevent clicks
this.isPreventingClicks=!0;this.dragStart(event,pointer)};proto.dragStart=function(event,pointer){this.emitEvent("dragStart",[event,pointer])};// dragMove
proto._dragMove=function(event,pointer,moveVector){// do not drag if not dragging yet
if(!this.isDragging){return}this.dragMove(event,pointer,moveVector)};proto.dragMove=function(event,pointer,moveVector){event.preventDefault();this.emitEvent("dragMove",[event,pointer,moveVector])};// dragEnd
proto._dragEnd=function(event,pointer){// set flags
this.isDragging=!1;// re-enable clicking async
setTimeout(function(){delete this.isPreventingClicks}.bind(this));this.dragEnd(event,pointer)};proto.dragEnd=function(event,pointer){this.emitEvent("dragEnd",[event,pointer])};// ----- onclick ----- //
// handle all clicks and prevent clicks when dragging
proto.onclick=function(event){if(this.isPreventingClicks){event.preventDefault()}};// ----- staticClick ----- //
// triggered after pointer down & up with no/tiny movement
proto._staticClick=function(event,pointer){// ignore emulated mouse up clicks
if(this.isIgnoringMouseUp&&"mouseup"==event.type){return}// allow click in <input>s and <textarea>s
var nodeName=event.target.nodeName;if("INPUT"==nodeName||"TEXTAREA"==nodeName){event.target.focus()}this.staticClick(event,pointer);// set flag for emulated clicks 300ms after touchend
if("mouseup"!=event.type){this.isIgnoringMouseUp=!0;// reset flag after 300ms
setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)}};proto.staticClick=function(event,pointer){this.emitEvent("staticClick",[event,pointer])};// ----- utils ----- //
Unidragger.getPointerPoint=Unipointer.getPointerPoint;// -----  ----- //
return Unidragger});/*!
 * Draggabilly v2.1.1
 * Make that shiz draggable
 * http://draggabilly.desandro.com
 * MIT license
 */ /*jshint browser: true, strict: true, undef: true, unused: true */(function(window,factory){// universal module definition
/* jshint strict: false */ /*globals define, module, require */if("function"==typeof define&&define.amd){// AMD
define(["get-size/get-size","unidragger/unidragger"],function(getSize,Unidragger){return factory(window,getSize,Unidragger)})}else if("object"==("undefined"===typeof module?"undefined":babelHelpers.typeof(module))&&module.exports){// CommonJS
module.exports=factory(window,require("get-size"),require("unidragger"))}else{// browser global
window.Draggabilly=factory(window,window.getSize,window.Unidragger)}})(window,function factory(window,getSize,Unidragger){// vars
var document=window.document;function noop(){}// -------------------------- helpers -------------------------- //
// extend objects
function extend(a,b){for(var prop in b){a[prop]=b[prop]}return a}function isElement(obj){return babelHelpers.instanceof(obj,HTMLElement)}// -------------------------- requestAnimationFrame -------------------------- //
// get rAF, prefixed, if present
var requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,lastTime=0;// fallback to setTimeout
if(!requestAnimationFrame){requestAnimationFrame=function requestAnimationFrame(callback){var currTime=new Date().getTime(),timeToCall=Math.max(0,16-(currTime-lastTime)),id=setTimeout(callback,timeToCall);lastTime=currTime+timeToCall;return id}}// -------------------------- support -------------------------- //
var docElem=document.documentElement,transformProperty="string"==typeof docElem.style.transform?"transform":"WebkitTransform",jQuery=window.jQuery;// --------------------------  -------------------------- //
function Draggabilly(element,options){// querySelector if string
this.element="string"==typeof element?document.querySelector(element):element;if(jQuery){this.$element=jQuery(this.element)}// options
this.options=extend({},this.constructor.defaults);this.option(options);this._create()}// inherit Unidragger methods
var proto=Draggabilly.prototype=Object.create(Unidragger.prototype);Draggabilly.defaults={};/**
 * set options
 * @param {Object} opts
 */proto.option=function(opts){extend(this.options,opts)};// css position values that don't need to be set
var positionValues={relative:!0,absolute:!0,fixed:!0};proto._create=function(){// properties
this.position={};this._getPosition();this.startPoint={x:0,y:0};this.dragPoint={x:0,y:0};this.startPosition=extend({},this.position);// set relative positioning
var style=getComputedStyle(this.element);if(!positionValues[style.position]){this.element.style.position="relative"}this.enable();this.setHandles()};/**
 * set this.handles and bind start events to 'em
 */proto.setHandles=function(){this.handles=this.options.handle?this.element.querySelectorAll(this.options.handle):[this.element];this.bindHandles()};/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */proto.dispatchEvent=function(type,event,args){var emitArgs=[event].concat(args);this.emitEvent(type,emitArgs);var jQuery=window.jQuery;// trigger jQuery event
if(jQuery&&this.$element){if(event){// create jQuery event
var $event=jQuery.Event(event);$event.type=type;this.$element.trigger($event,args)}else{// just trigger with type if no event available
this.$element.trigger(type,args)}}};// -------------------------- position -------------------------- //
// get x/y position from style
proto._getPosition=function(){var style=getComputedStyle(this.element),x=this._getPositionCoord(style.left,"width"),y=this._getPositionCoord(style.top,"height");// clean up 'auto' or other non-integer values
this.position.x=isNaN(x)?0:x;this.position.y=isNaN(y)?0:y;this._addTransformPosition(style)};proto._getPositionCoord=function(styleSide,measure){if(-1!=styleSide.indexOf("%")){// convert percent into pixel for Safari, #75
var parentSize=getSize(this.element.parentNode);// prevent not-in-DOM element throwing bug, #131
return!parentSize?0:parseFloat(styleSide)/100*parentSize[measure]}return parseInt(styleSide,10)};// add transform: translate( x, y ) to position
proto._addTransformPosition=function(style){var transform=style[transformProperty];// bail out if value is 'none'
if(0!==transform.indexOf("matrix")){return}// split matrix(1, 0, 0, 1, x, y)
var matrixValues=transform.split(","),xIndex=0===transform.indexOf("matrix3d")?12:4,translateX=parseInt(matrixValues[xIndex],10),translateY=parseInt(matrixValues[xIndex+1],10);// translate X value is in 12th or 4th position
this.position.x+=translateX;this.position.y+=translateY};// -------------------------- events -------------------------- //
/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */proto.pointerDown=function(event,pointer){this._dragPointerDown(event,pointer);// kludge to blur focused inputs in dragger
var focused=document.activeElement;// do not blur body for IE10, metafizzy/flickity#117
if(focused&&focused.blur&&focused!=document.body){focused.blur()}// bind move and end events
this._bindPostStartEvents(event);this.element.classList.add("is-pointer-down");this.dispatchEvent("pointerDown",event,[pointer])};/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */proto.pointerMove=function(event,pointer){var moveVector=this._dragPointerMove(event,pointer);this.dispatchEvent("pointerMove",event,[pointer,moveVector]);this._dragMove(event,pointer,moveVector)};/**
 * drag start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */proto.dragStart=function(event,pointer){if(!this.isEnabled){return}this._getPosition();this.measureContainment();// position _when_ drag began
this.startPosition.x=this.position.x;this.startPosition.y=this.position.y;// reset left/top style
this.setLeftTop();this.dragPoint.x=0;this.dragPoint.y=0;this.element.classList.add("is-dragging");this.dispatchEvent("dragStart",event,[pointer]);// start animation
this.animate()};proto.measureContainment=function(){var containment=this.options.containment;if(!containment){return}// use element if element
var container=isElement(containment)?containment:// fallback to querySelector if string
"string"==typeof containment?document.querySelector(containment):// otherwise just `true`, use the parent
this.element.parentNode,elemSize=getSize(this.element),containerSize=getSize(container),elemRect=this.element.getBoundingClientRect(),containerRect=container.getBoundingClientRect(),borderSizeX=containerSize.borderLeftWidth+containerSize.borderRightWidth,borderSizeY=containerSize.borderTopWidth+containerSize.borderBottomWidth,position=this.relativeStartPosition={x:elemRect.left-(containerRect.left+containerSize.borderLeftWidth),y:elemRect.top-(containerRect.top+containerSize.borderTopWidth)};this.containSize={width:containerSize.width-borderSizeX-position.x-elemSize.width,height:containerSize.height-borderSizeY-position.y-elemSize.height}};// ----- move event ----- //
/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */proto.dragMove=function(event,pointer,moveVector){if(!this.isEnabled){return}var dragX=moveVector.x,dragY=moveVector.y,grid=this.options.grid,gridX=grid&&grid[0],gridY=grid&&grid[1];dragX=applyGrid(dragX,gridX);dragY=applyGrid(dragY,gridY);dragX=this.containDrag("x",dragX,gridX);dragY=this.containDrag("y",dragY,gridY);// constrain to axis
dragX="y"==this.options.axis?0:dragX;dragY="x"==this.options.axis?0:dragY;this.position.x=this.startPosition.x+dragX;this.position.y=this.startPosition.y+dragY;// set dragPoint properties
this.dragPoint.x=dragX;this.dragPoint.y=dragY;this.dispatchEvent("dragMove",event,[pointer,moveVector])};function applyGrid(value,grid,method){method=method||"round";return grid?Math[method](value/grid)*grid:value}proto.containDrag=function(axis,drag,grid){if(!this.options.containment){return drag}var measure="x"==axis?"width":"height",rel=this.relativeStartPosition[axis],min=applyGrid(-rel,grid,"ceil"),max=this.containSize[measure];max=applyGrid(max,grid,"floor");return Math.min(max,Math.max(min,drag))};// ----- end event ----- //
/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */proto.pointerUp=function(event,pointer){this.element.classList.remove("is-pointer-down");this.dispatchEvent("pointerUp",event,[pointer]);this._dragPointerUp(event,pointer)};/**
 * drag end
 * @param {Event} event
 * @param {Event or Touch} pointer
 */proto.dragEnd=function(event,pointer){if(!this.isEnabled){return}// use top left position when complete
if(transformProperty){this.element.style[transformProperty]="";this.setLeftTop()}this.element.classList.remove("is-dragging");this.dispatchEvent("dragEnd",event,[pointer])};// -------------------------- animation -------------------------- //
proto.animate=function(){// only render and animate if dragging
if(!this.isDragging){return}this.positionDrag();var _this=this;requestAnimationFrame(function animateFrame(){_this.animate()})};// left/top positioning
proto.setLeftTop=function(){this.element.style.left=this.position.x+"px";this.element.style.top=this.position.y+"px"};proto.positionDrag=function(){this.element.style[transformProperty]="translate3d( "+this.dragPoint.x+"px, "+this.dragPoint.y+"px, 0)"};// ----- staticClick ----- //
proto.staticClick=function(event,pointer){this.dispatchEvent("staticClick",event,[pointer])};// ----- methods ----- //
proto.enable=function(){this.isEnabled=!0};proto.disable=function(){this.isEnabled=!1;if(this.isDragging){this.dragEnd()}};proto.destroy=function(){this.disable();// reset styles
this.element.style[transformProperty]="";this.element.style.left="";this.element.style.top="";this.element.style.position="";// unbind handles
this.unbindHandles();// remove jQuery data
if(this.$element){this.$element.removeData("draggabilly")}};// ----- jQuery bridget ----- //
// required for jQuery bridget
proto._init=noop;if(jQuery&&jQuery.bridget){jQuery.bridget("draggabilly",Draggabilly)}// -----  ----- //
return Draggabilly});//! moment.js
//! version : 2.9.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(undefined){/************************************
        Constants
    ************************************/var moment,VERSION="2.9.0",// the global-scope this is NOT the global object in Node.js
globalScope="undefined"!==typeof global&&("undefined"===typeof window||window===global.window)?global:this,oldGlobalMoment,round=Math.round,hasOwnProperty=Object.prototype.hasOwnProperty,i,YEAR=0,MONTH=1,DATE=2,HOUR=3,MINUTE=4,SECOND=5,MILLISECOND=6,// internal storage for locale config files
locales={},// extra moment internal properties (plugins register props here)
momentProperties=[],// check for nodeJS
hasModule="undefined"!==typeof module&&module&&module.exports,// ASP.NET json date format regex
aspNetJsonRegex=/^\/?Date\((\-?\d+)/i,aspNetTimeSpanJsonRegex=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
isoDurationRegex=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,// format tokens
formattingTokens=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g,localFormattingTokens=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,// parsing token regexes
parseTokenOneOrTwoDigits=/\d\d?/,// 0 - 99
parseTokenOneToThreeDigits=/\d{1,3}/,// 0 - 999
parseTokenOneToFourDigits=/\d{1,4}/,// 0 - 9999
parseTokenOneToSixDigits=/[+\-]?\d{1,6}/,// -999,999 - 999,999
parseTokenDigits=/\d+/,// nonzero number of digits
parseTokenWord=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,// any word (or two) characters or numbers including two/three word month in arabic.
parseTokenTimezone=/Z|[\+\-]\d\d:?\d\d/gi,// +00:00 -00:00 +0000 -0000 or Z
parseTokenT=/T/i,// T (ISO separator)
parseTokenOffsetMs=/[\+\-]?\d+/,// 1234567890123
parseTokenTimestampMs=/[\+\-]?\d+(\.\d{1,3})?/,// 123456789 123456789.123
//strict parsing regexes
parseTokenOneDigit=/\d/,// 0 - 9
parseTokenTwoDigits=/\d\d/,// 00 - 99
parseTokenThreeDigits=/\d{3}/,// 000 - 999
parseTokenFourDigits=/\d{4}/,// 0000 - 9999
parseTokenSixDigits=/[+-]?\d{6}/,// -999,999 - 999,999
parseTokenSignedNumber=/[+-]?\d+/,// -inf - inf
// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
isoRegex=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,isoFormat="YYYY-MM-DDTHH:mm:ssZ",isoDates=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],// iso time formats and regexes
isoTimes=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],// timezone chunker '+10:00' > ['10', '00'] or '-1530' > ['-', '15', '30']
parseTimezoneChunker=/([\+\-]|\d\d)/gi,// getter and setter names
proxyGettersAndSetters="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),unitMillisecondFactors={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},unitAliases={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",Q:"quarter",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},camelFunctions={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},// format function strings
formatFunctions={},// default relative time thresholds
relativeTimeThresholds={s:45,// seconds to minute
m:45,// minutes to hour
h:22,// hours to day
d:26,// days to month
M:11// months to year
},// tokens to ordinalize and pad
ordinalizeTokens="DDD w W M D d".split(" "),paddedTokens="M D H h m s w W".split(" "),formatTokenFunctions={M:function M(){return this.month()+1},MMM:function MMM(format){return this.localeData().monthsShort(this,format)},MMMM:function MMMM(format){return this.localeData().months(this,format)},D:function D(){return this.date()},DDD:function DDD(){return this.dayOfYear()},d:function d(){return this.day()},dd:function dd(format){return this.localeData().weekdaysMin(this,format)},ddd:function ddd(format){return this.localeData().weekdaysShort(this,format)},dddd:function dddd(format){return this.localeData().weekdays(this,format)},w:function w(){return this.week()},W:function W(){return this.isoWeek()},YY:function YY(){return leftZeroFill(this.year()%100,2)},YYYY:function YYYY(){return leftZeroFill(this.year(),4)},YYYYY:function YYYYY(){return leftZeroFill(this.year(),5)},YYYYYY:function YYYYYY(){var y=this.year(),sign=0<=y?"+":"-";return sign+leftZeroFill(Math.abs(y),6)},gg:function gg(){return leftZeroFill(this.weekYear()%100,2)},gggg:function gggg(){return leftZeroFill(this.weekYear(),4)},ggggg:function ggggg(){return leftZeroFill(this.weekYear(),5)},GG:function GG(){return leftZeroFill(this.isoWeekYear()%100,2)},GGGG:function GGGG(){return leftZeroFill(this.isoWeekYear(),4)},GGGGG:function GGGGG(){return leftZeroFill(this.isoWeekYear(),5)},e:function e(){return this.weekday()},E:function E(){return this.isoWeekday()},a:function a(){return this.localeData().meridiem(this.hours(),this.minutes(),!0)},A:function A(){return this.localeData().meridiem(this.hours(),this.minutes(),!1)},H:function H(){return this.hours()},h:function h(){return this.hours()%12||12},m:function m(){return this.minutes()},s:function s(){return this.seconds()},S:function S(){return toInt(this.milliseconds()/100)},SS:function SS(){return leftZeroFill(toInt(this.milliseconds()/10),2)},SSS:function SSS(){return leftZeroFill(this.milliseconds(),3)},SSSS:function SSSS(){return leftZeroFill(this.milliseconds(),3)},Z:function Z(){var a=this.utcOffset(),b="+";if(0>a){a=-a;b="-"}return b+leftZeroFill(toInt(a/60),2)+":"+leftZeroFill(toInt(a)%60,2)},ZZ:function ZZ(){var a=this.utcOffset(),b="+";if(0>a){a=-a;b="-"}return b+leftZeroFill(toInt(a/60),2)+leftZeroFill(toInt(a)%60,2)},z:function z(){return this.zoneAbbr()},zz:function zz(){return this.zoneName()},x:function x(){return this.valueOf()},X:function X(){return this.unix()},Q:function Q(){return this.quarter()}},deprecations={},lists=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"],updateInProgress=!1;// Pick the first defined of two or three arguments. dfl comes from
// default.
function dfl(a,b,c){switch(arguments.length){case 2:return null!=a?a:b;case 3:return null!=a?a:null!=b?b:c;default:throw new Error("Implement me");}}function hasOwnProp(a,b){return hasOwnProperty.call(a,b)}function defaultParsingFlags(){// We need to deep clone this object, and es5 standard is not very
// helpful.
return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function printMsg(msg){if(!1===moment.suppressDeprecationWarnings&&"undefined"!==typeof console&&console.warn){console.warn("Deprecation warning: "+msg)}}function deprecate(msg,fn){var firstTime=!0;return extend(function(){if(firstTime){printMsg(msg);firstTime=!1}return fn.apply(this,arguments)},fn)}function deprecateSimple(name,msg){if(!deprecations[name]){printMsg(msg);deprecations[name]=!0}}function padToken(func,count){return function(a){return leftZeroFill(func.call(this,a),count)}}function ordinalizeToken(func,period){return function(a){return this.localeData().ordinal(func.call(this,a),period)}}function monthDiff(a,b){// difference in months
var wholeMonthDiff=12*(b.year()-a.year())+(b.month()-a.month()),// b is in (anchor - 1 month, anchor + 1 month)
anchor=a.clone().add(wholeMonthDiff,"months"),anchor2,adjust;if(0>b-anchor){anchor2=a.clone().add(wholeMonthDiff-1,"months");// linear across the month
adjust=(b-anchor)/(anchor-anchor2)}else{anchor2=a.clone().add(wholeMonthDiff+1,"months");// linear across the month
adjust=(b-anchor)/(anchor2-anchor)}return-(wholeMonthDiff+adjust)}while(ordinalizeTokens.length){i=ordinalizeTokens.pop();formatTokenFunctions[i+"o"]=ordinalizeToken(formatTokenFunctions[i],i)}while(paddedTokens.length){i=paddedTokens.pop();formatTokenFunctions[i+i]=padToken(formatTokenFunctions[i],2)}formatTokenFunctions.DDDD=padToken(formatTokenFunctions.DDD,3);function meridiemFixWrap(locale,hour,meridiem){var isPm;if(null==meridiem){// nothing to do
return hour}if(null!=locale.meridiemHour){return locale.meridiemHour(hour,meridiem)}else if(null!=locale.isPM){// Fallback
isPm=locale.isPM(meridiem);if(isPm&&12>hour){hour+=12}if(!isPm&&12===hour){hour=0}return hour}else{// thie is not supposed to happen
return hour}}/************************************
        Constructors
    ************************************/function Locale(){}// Moment prototype object
function Moment(config,skipOverflow){if(!1!==skipOverflow){checkOverflow(config)}copyConfig(this,config);this._d=new Date(+config._d);// Prevent infinite loop in case updateOffset creates new moment
// objects.
if(!1===updateInProgress){updateInProgress=!0;moment.updateOffset(this);updateInProgress=!1}}// Duration Constructor
function Duration(duration){var normalizedInput=normalizeObjectUnits(duration),years=normalizedInput.year||0,quarters=normalizedInput.quarter||0,months=normalizedInput.month||0,weeks=normalizedInput.week||0,days=normalizedInput.day||0,hours=normalizedInput.hour||0,minutes=normalizedInput.minute||0,seconds=normalizedInput.second||0,milliseconds=normalizedInput.millisecond||0;// representation for dateAddRemove
this._milliseconds=+milliseconds+1e3*seconds+// 1000
6e4*minutes+// 1000 * 60
36e5*hours;// 1000 * 60 * 60
// Because of dateAddRemove treats 24 hours as different from a
// day when working around DST, we need to store them separately
this._days=+days+7*weeks;// It is impossible translate months into days without knowing
// which months you are are talking about, so we have to store
// it separately.
this._months=+months+3*quarters+12*years;this._data={};this._locale=moment.localeData();this._bubble()}/************************************
        Helpers
    ************************************/function extend(a,b){for(var i in b){if(hasOwnProp(b,i)){a[i]=b[i]}}if(hasOwnProp(b,"toString")){a.toString=b.toString}if(hasOwnProp(b,"valueOf")){a.valueOf=b.valueOf}return a}function copyConfig(to,from){var i,prop,val;if("undefined"!==typeof from._isAMomentObject){to._isAMomentObject=from._isAMomentObject}if("undefined"!==typeof from._i){to._i=from._i}if("undefined"!==typeof from._f){to._f=from._f}if("undefined"!==typeof from._l){to._l=from._l}if("undefined"!==typeof from._strict){to._strict=from._strict}if("undefined"!==typeof from._tzm){to._tzm=from._tzm}if("undefined"!==typeof from._isUTC){to._isUTC=from._isUTC}if("undefined"!==typeof from._offset){to._offset=from._offset}if("undefined"!==typeof from._pf){to._pf=from._pf}if("undefined"!==typeof from._locale){to._locale=from._locale}if(0<momentProperties.length){for(i in momentProperties){prop=momentProperties[i];val=from[prop];if("undefined"!==typeof val){to[prop]=val}}}return to}function absRound(number){if(0>number){return Math.ceil(number)}else{return Math.floor(number)}}// left zero fill a number
// see http://jsperf.com/left-zero-filling for performance comparison
function leftZeroFill(number,targetLength,forceSign){var output=""+Math.abs(number),sign=0<=number;while(output.length<targetLength){output="0"+output}return(sign?forceSign?"+":"":"-")+output}function positiveMomentsDifference(base,other){var res={milliseconds:0,months:0,months:other.month()-base.month()+12*(other.year()-base.year())};if(base.clone().add(res.months,"M").isAfter(other)){--res.months}res.milliseconds=+other-+base.clone().add(res.months,"M");return res}function momentsDifference(base,other){var res;other=makeAs(other,base);if(base.isBefore(other)){res=positiveMomentsDifference(base,other)}else{res=positiveMomentsDifference(other,base);res.milliseconds=-res.milliseconds;res.months=-res.months}return res}// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction,name){return function(val,period){var dur,tmp;//invert the arguments, but complain about it
if(null!==period&&!isNaN(+period)){deprecateSimple(name,"moment()."+name+"(period, number) is deprecated. Please use moment()."+name+"(number, period).");tmp=val;val=period;period=tmp}val="string"===typeof val?+val:val;dur=moment.duration(val,period);addOrSubtractDurationFromMoment(this,dur,direction);return this}}function addOrSubtractDurationFromMoment(mom,duration,isAdding,updateOffset){var milliseconds=duration._milliseconds,days=duration._days,months=duration._months;updateOffset=null==updateOffset?!0:updateOffset;if(milliseconds){mom._d.setTime(+mom._d+milliseconds*isAdding)}if(days){rawSetter(mom,"Date",rawGetter(mom,"Date")+days*isAdding)}if(months){rawMonthSetter(mom,rawGetter(mom,"Month")+months*isAdding)}if(updateOffset){moment.updateOffset(mom,days||months)}}// check if is an array
function isArray(input){return"[object Array]"===Object.prototype.toString.call(input)}function isDate(input){return"[object Date]"===Object.prototype.toString.call(input)||babelHelpers.instanceof(input,Date)}// compare two arrays, return the number of differences
function compareArrays(array1,array2,dontConvert){var len=Math.min(array1.length,array2.length),lengthDiff=Math.abs(array1.length-array2.length),diffs=0,i;for(i=0;i<len;i++){if(dontConvert&&array1[i]!==array2[i]||!dontConvert&&toInt(array1[i])!==toInt(array2[i])){diffs++}}return diffs+lengthDiff}function normalizeUnits(units){if(units){var lowered=units.toLowerCase().replace(/(.)s$/,"$1");units=unitAliases[units]||camelFunctions[lowered]||lowered}return units}function normalizeObjectUnits(inputObject){var normalizedInput={},normalizedProp,prop;for(prop in inputObject){if(hasOwnProp(inputObject,prop)){normalizedProp=normalizeUnits(prop);if(normalizedProp){normalizedInput[normalizedProp]=inputObject[prop]}}}return normalizedInput}function makeList(field){var count,setter;if(0===field.indexOf("week")){count=7;setter="day"}else if(0===field.indexOf("month")){count=12;setter="month"}else{return}moment[field]=function(format,index){var i,getter,method=moment._locale[field],results=[];if("number"===typeof format){index=format;format=void 0}getter=function getter(i){var m=moment().utc().set(setter,i);return method.call(moment._locale,m,format||"")};if(null!=index){return getter(index)}else{for(i=0;i<count;i++){results.push(getter(i))}return results}}}function toInt(argumentForCoercion){var coercedNumber=+argumentForCoercion,value=0;if(0!==coercedNumber&&isFinite(coercedNumber)){if(0<=coercedNumber){value=Math.floor(coercedNumber)}else{value=Math.ceil(coercedNumber)}}return value}function _daysInMonth(year,month){return new Date(Date.UTC(year,month+1,0)).getUTCDate()}function _weeksInYear(year,dow,doy){return weekOfYear(moment([year,11,31+dow-doy]),dow,doy).week}function daysInYear(year){return _isLeapYear(year)?366:365}function _isLeapYear(year){return 0===year%4&&0!==year%100||0===year%400}function checkOverflow(m){var overflow;if(m._a&&-2===m._pf.overflow){overflow=0>m._a[MONTH]||11<m._a[MONTH]?MONTH:1>m._a[DATE]||m._a[DATE]>_daysInMonth(m._a[YEAR],m._a[MONTH])?DATE:0>m._a[HOUR]||24<m._a[HOUR]||24===m._a[HOUR]&&(0!==m._a[MINUTE]||0!==m._a[SECOND]||0!==m._a[MILLISECOND])?HOUR:0>m._a[MINUTE]||59<m._a[MINUTE]?MINUTE:0>m._a[SECOND]||59<m._a[SECOND]?SECOND:0>m._a[MILLISECOND]||999<m._a[MILLISECOND]?MILLISECOND:-1;if(m._pf._overflowDayOfYear&&(overflow<YEAR||overflow>DATE)){overflow=DATE}m._pf.overflow=overflow}}function _isValid(m){if(null==m._isValid){m._isValid=!isNaN(m._d.getTime())&&0>m._pf.overflow&&!m._pf.empty&&!m._pf.invalidMonth&&!m._pf.nullInput&&!m._pf.invalidFormat&&!m._pf.userInvalidated;if(m._strict){m._isValid=m._isValid&&0===m._pf.charsLeftOver&&0===m._pf.unusedTokens.length&&m._pf.bigHour===void 0}}return m._isValid}function normalizeLocale(key){return key?key.toLowerCase().replace("_","-"):key}// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names){var i=0,j,next,locale,split;while(i<names.length){split=normalizeLocale(names[i]).split("-");j=split.length;next=normalizeLocale(names[i+1]);next=next?next.split("-"):null;while(0<j){locale=loadLocale(split.slice(0,j).join("-"));if(locale){return locale}if(next&&next.length>=j&&compareArrays(split,next,!0)>=j-1){//the next array item is better than a shallower substring of this one
break}j--}i++}return null}function loadLocale(name){var oldLocale=null;if(!locales[name]&&hasModule){try{oldLocale=moment.locale();require("./locale/"+name);// because defineLocale currently also sets the global locale, we want to undo that for lazy loaded locales
moment.locale(oldLocale)}catch(e){}}return locales[name]}// Return a moment from input, that is local/utc/utcOffset equivalent to
// model.
function makeAs(input,model){var res,diff;if(model._isUTC){res=model.clone();diff=(moment.isMoment(input)||isDate(input)?+input:+moment(input))-+res;// Use low-level api, because this fn is low-level api.
res._d.setTime(+res._d+diff);moment.updateOffset(res,!1);return res}else{return moment(input).local()}}/************************************
        Locale
    ************************************/extend(Locale.prototype,{set:function set(config){var prop,i;for(i in config){prop=config[i];if("function"===typeof prop){this[i]=prop}else{this["_"+i]=prop}}// Lenient ordinal parsing accepts just a number in addition to
// number + (possibly) stuff coming from _ordinalParseLenient.
this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function months(m){return this._months[m.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function monthsShort(m){return this._monthsShort[m.month()]},monthsParse:function monthsParse(monthName,format,strict){var i,mom,regex;if(!this._monthsParse){this._monthsParse=[];this._longMonthsParse=[];this._shortMonthsParse=[]}for(i=0;12>i;i++){// make the regex if we don't have it already
mom=moment.utc([2e3,i]);if(strict&&!this._longMonthsParse[i]){this._longMonthsParse[i]=new RegExp("^"+this.months(mom,"").replace(".","")+"$","i");this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(mom,"").replace(".","")+"$","i")}if(!strict&&!this._monthsParse[i]){regex="^"+this.months(mom,"")+"|^"+this.monthsShort(mom,"");this._monthsParse[i]=new RegExp(regex.replace(".",""),"i")}// test the regex
if(strict&&"MMMM"===format&&this._longMonthsParse[i].test(monthName)){return i}else if(strict&&"MMM"===format&&this._shortMonthsParse[i].test(monthName)){return i}else if(!strict&&this._monthsParse[i].test(monthName)){return i}}},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function weekdays(m){return this._weekdays[m.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function weekdaysShort(m){return this._weekdaysShort[m.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function weekdaysMin(m){return this._weekdaysMin[m.day()]},weekdaysParse:function weekdaysParse(weekdayName){var i,mom,regex;if(!this._weekdaysParse){this._weekdaysParse=[]}for(i=0;7>i;i++){// make the regex if we don't have it already
if(!this._weekdaysParse[i]){mom=moment([2e3,1]).day(i);regex="^"+this.weekdays(mom,"")+"|^"+this.weekdaysShort(mom,"")+"|^"+this.weekdaysMin(mom,"");this._weekdaysParse[i]=new RegExp(regex.replace(".",""),"i")}// test the regex
if(this._weekdaysParse[i].test(weekdayName)){return i}}},_longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY LT",LLLL:"dddd, MMMM D, YYYY LT"},longDateFormat:function longDateFormat(key){var output=this._longDateFormat[key];if(!output&&this._longDateFormat[key.toUpperCase()]){output=this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(val){return val.slice(1)});this._longDateFormat[key]=output}return output},isPM:function isPM(input){// IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
// Using charAt should be more compatible.
return"p"===(input+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function meridiem(hours,minutes,isLower){if(11<hours){return isLower?"pm":"PM"}else{return isLower?"am":"AM"}},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function calendar(key,mom,now){var output=this._calendar[key];return"function"===typeof output?output.apply(mom,[now]):output},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function relativeTime(number,withoutSuffix,string,isFuture){var output=this._relativeTime[string];return"function"===typeof output?output(number,withoutSuffix,string,isFuture):output.replace(/%d/i,number)},pastFuture:function pastFuture(diff,output){var format=this._relativeTime[0<diff?"future":"past"];return"function"===typeof format?format(output):format.replace(/%s/i,output)},ordinal:function ordinal(number){return this._ordinal.replace("%d",number)},_ordinal:"%d",_ordinalParse:/\d{1,2}/,preparse:function preparse(string){return string},postformat:function postformat(string){return string},week:function week(mom){return weekOfYear(mom,this._week.dow,this._week.doy).week},_week:{dow:0,// Sunday is the first day of the week.
doy:6// The week that contains Jan 1st is the first week of the year.
},firstDayOfWeek:function firstDayOfWeek(){return this._week.dow},firstDayOfYear:function firstDayOfYear(){return this._week.doy},_invalidDate:"Invalid date",invalidDate:function invalidDate(){return this._invalidDate}});/************************************
        Formatting
    ************************************/function removeFormattingTokens(input){if(input.match(/\[[\s\S]/)){return input.replace(/^\[|\]$/g,"")}return input.replace(/\\/g,"")}function makeFormatFunction(format){var array=format.match(formattingTokens),i,length;for(i=0,length=array.length;i<length;i++){if(formatTokenFunctions[array[i]]){array[i]=formatTokenFunctions[array[i]]}else{array[i]=removeFormattingTokens(array[i])}}return function(mom){var output="";for(i=0;i<length;i++){output+=babelHelpers.instanceof(array[i],Function)?array[i].call(mom,format):array[i]}return output}}// format date using native date object
function formatMoment(m,format){if(!m.isValid()){return m.localeData().invalidDate()}format=expandFormat(format,m.localeData());if(!formatFunctions[format]){formatFunctions[format]=makeFormatFunction(format)}return formatFunctions[format](m)}function expandFormat(format,locale){var i=5;function replaceLongDateFormatTokens(input){return locale.longDateFormat(input)||input}localFormattingTokens.lastIndex=0;while(0<=i&&localFormattingTokens.test(format)){format=format.replace(localFormattingTokens,replaceLongDateFormatTokens);localFormattingTokens.lastIndex=0;i-=1}return format}/************************************
        Parsing
    ************************************/ // get the regex to find the next token
function getParseRegexForToken(token,config){var a,strict=config._strict;switch(token){case"Q":return parseTokenOneDigit;case"DDDD":return parseTokenThreeDigits;case"YYYY":case"GGGG":case"gggg":return strict?parseTokenFourDigits:parseTokenOneToFourDigits;case"Y":case"G":case"g":return parseTokenSignedNumber;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return strict?parseTokenSixDigits:parseTokenOneToSixDigits;case"S":if(strict){return parseTokenOneDigit}/* falls through */case"SS":if(strict){return parseTokenTwoDigits}/* falls through */case"SSS":if(strict){return parseTokenThreeDigits}/* falls through */case"DDD":return parseTokenOneToThreeDigits;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return parseTokenWord;case"a":case"A":return config._locale._meridiemParse;case"x":return parseTokenOffsetMs;case"X":return parseTokenTimestampMs;case"Z":case"ZZ":return parseTokenTimezone;case"T":return parseTokenT;case"SSSS":return parseTokenDigits;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return strict?parseTokenTwoDigits:parseTokenOneOrTwoDigits;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return parseTokenOneOrTwoDigits;case"Do":return strict?config._locale._ordinalParse:config._locale._ordinalParseLenient;default:a=new RegExp(regexpEscape(unescapeFormat(token.replace("\\","")),"i"));return a;}}function utcOffsetFromString(string){string=string||"";var possibleTzMatches=string.match(parseTokenTimezone)||[],tzChunk=possibleTzMatches[possibleTzMatches.length-1]||[],parts=(tzChunk+"").match(parseTimezoneChunker)||["-",0,0],minutes=+(60*parts[1])+toInt(parts[2]);return"+"===parts[0]?minutes:-minutes}// function to convert string input to date
function addTimeToArrayFromToken(token,input,config){var a,datePartArray=config._a;switch(token){// QUARTER
case"Q":if(null!=input){datePartArray[MONTH]=3*(toInt(input)-1)}break;// MONTH
case"M":// fall through to MM
case"MM":if(null!=input){datePartArray[MONTH]=toInt(input)-1}break;case"MMM":// fall through to MMMM
case"MMMM":a=config._locale.monthsParse(input,token,config._strict);// if we didn't find a month name, mark the date as invalid.
if(null!=a){datePartArray[MONTH]=a}else{config._pf.invalidMonth=input}break;// DAY OF MONTH
case"D":// fall through to DD
case"DD":if(null!=input){datePartArray[DATE]=toInt(input)}break;case"Do":if(null!=input){datePartArray[DATE]=toInt(parseInt(input.match(/\d{1,2}/)[0],10))}break;// DAY OF YEAR
case"DDD":// fall through to DDDD
case"DDDD":if(null!=input){config._dayOfYear=toInt(input)}break;// YEAR
case"YY":datePartArray[YEAR]=moment.parseTwoDigitYear(input);break;case"YYYY":case"YYYYY":case"YYYYYY":datePartArray[YEAR]=toInt(input);break;// AM / PM
case"a":// fall through to A
case"A":config._meridiem=input;// config._isPm = config._locale.isPM(input);
break;// HOUR
case"h":// fall through to hh
case"hh":config._pf.bigHour=!0;/* falls through */case"H":// fall through to HH
case"HH":datePartArray[HOUR]=toInt(input);break;// MINUTE
case"m":// fall through to mm
case"mm":datePartArray[MINUTE]=toInt(input);break;// SECOND
case"s":// fall through to ss
case"ss":datePartArray[SECOND]=toInt(input);break;// MILLISECOND
case"S":case"SS":case"SSS":case"SSSS":datePartArray[MILLISECOND]=toInt(1e3*("0."+input));break;// UNIX OFFSET (MILLISECONDS)
case"x":config._d=new Date(toInt(input));break;// UNIX TIMESTAMP WITH MS
case"X":config._d=new Date(1e3*parseFloat(input));break;// TIMEZONE
case"Z":// fall through to ZZ
case"ZZ":config._useUTC=!0;config._tzm=utcOffsetFromString(input);break;// WEEKDAY - human
case"dd":case"ddd":case"dddd":a=config._locale.weekdaysParse(input);// if we didn't get a weekday name, mark the date as invalid
if(null!=a){config._w=config._w||{};config._w.d=a}else{config._pf.invalidWeekday=input}break;// WEEK, WEEK DAY - numeric
case"w":case"ww":case"W":case"WW":case"d":case"e":case"E":token=token.substr(0,1);/* falls through */case"gggg":case"GGGG":case"GGGGG":token=token.substr(0,2);if(input){config._w=config._w||{};config._w[token]=toInt(input)}break;case"gg":case"GG":config._w=config._w||{};config._w[token]=moment.parseTwoDigitYear(input);}}function dayOfYearFromWeekInfo(config){var w,weekYear,week,weekday,dow,doy,temp;w=config._w;if(null!=w.GG||null!=w.W||null!=w.E){dow=1;doy=4;// TODO: We need to take the current isoWeekYear, but that depends on
// how we interpret now (local, utc, fixed offset). So create
// a now version of current config (take local/utc/offset flags, and
// create now).
weekYear=dfl(w.GG,config._a[YEAR],weekOfYear(moment(),1,4).year);week=dfl(w.W,1);weekday=dfl(w.E,1)}else{dow=config._locale._week.dow;doy=config._locale._week.doy;weekYear=dfl(w.gg,config._a[YEAR],weekOfYear(moment(),dow,doy).year);week=dfl(w.w,1);if(null!=w.d){// weekday -- low day numbers are considered next week
weekday=w.d;if(weekday<dow){++week}}else if(null!=w.e){// local weekday -- counting starts from begining of week
weekday=w.e+dow}else{// default to begining of week
weekday=dow}}temp=dayOfYearFromWeeks(weekYear,week,weekday,doy,dow);config._a[YEAR]=temp.year;config._dayOfYear=temp.dayOfYear}// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function dateFromConfig(config){var i,date,input=[],currentDate,yearToUse;if(config._d){return}currentDate=currentDateArray(config);//compute day of the year from weeks and weekdays
if(config._w&&null==config._a[DATE]&&null==config._a[MONTH]){dayOfYearFromWeekInfo(config)}//if the day of the year is set, figure out what it is
if(config._dayOfYear){yearToUse=dfl(config._a[YEAR],currentDate[YEAR]);if(config._dayOfYear>daysInYear(yearToUse)){config._pf._overflowDayOfYear=!0}date=makeUTCDate(yearToUse,0,config._dayOfYear);config._a[MONTH]=date.getUTCMonth();config._a[DATE]=date.getUTCDate()}// Default to current date.
// * if no year, month, day of month are given, default to today
// * if day of month is given, default month and year
// * if month is given, default only year
// * if year is given, don't default anything
for(i=0;3>i&&null==config._a[i];++i){config._a[i]=input[i]=currentDate[i]}// Zero out whatever was not defaulted, including time
for(;7>i;i++){config._a[i]=input[i]=null==config._a[i]?2===i?1:0:config._a[i]}// Check for 24:00:00.000
if(24===config._a[HOUR]&&0===config._a[MINUTE]&&0===config._a[SECOND]&&0===config._a[MILLISECOND]){config._nextDay=!0;config._a[HOUR]=0}config._d=(config._useUTC?makeUTCDate:makeDate).apply(null,input);// Apply timezone offset from input. The actual utcOffset can be changed
// with parseZone.
if(null!=config._tzm){config._d.setUTCMinutes(config._d.getUTCMinutes()-config._tzm)}if(config._nextDay){config._a[HOUR]=24}}function dateFromObject(config){var normalizedInput;if(config._d){return}normalizedInput=normalizeObjectUnits(config._i);config._a=[normalizedInput.year,normalizedInput.month,normalizedInput.day||normalizedInput.date,normalizedInput.hour,normalizedInput.minute,normalizedInput.second,normalizedInput.millisecond];dateFromConfig(config)}function currentDateArray(config){var now=new Date;if(config._useUTC){return[now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate()]}else{return[now.getFullYear(),now.getMonth(),now.getDate()]}}// date from string and format string
function makeDateFromStringAndFormat(config){if(config._f===moment.ISO_8601){parseISO(config);return}config._a=[];config._pf.empty=!0;// This array is used to make a Date, either with `new Date` or `Date.UTC`
var string=""+config._i,i,parsedInput,tokens,token,skipped,stringLength=string.length,totalParsedInputLength=0;tokens=expandFormat(config._f,config._locale).match(formattingTokens)||[];for(i=0;i<tokens.length;i++){token=tokens[i];parsedInput=(string.match(getParseRegexForToken(token,config))||[])[0];if(parsedInput){skipped=string.substr(0,string.indexOf(parsedInput));if(0<skipped.length){config._pf.unusedInput.push(skipped)}string=string.slice(string.indexOf(parsedInput)+parsedInput.length);totalParsedInputLength+=parsedInput.length}// don't parse if it's not a known token
if(formatTokenFunctions[token]){if(parsedInput){config._pf.empty=!1}else{config._pf.unusedTokens.push(token)}addTimeToArrayFromToken(token,parsedInput,config)}else if(config._strict&&!parsedInput){config._pf.unusedTokens.push(token)}}// add remaining unparsed input length to the string
config._pf.charsLeftOver=stringLength-totalParsedInputLength;if(0<string.length){config._pf.unusedInput.push(string)}// clear _12h flag if hour is <= 12
if(!0===config._pf.bigHour&&12>=config._a[HOUR]){config._pf.bigHour=void 0}// handle meridiem
config._a[HOUR]=meridiemFixWrap(config._locale,config._a[HOUR],config._meridiem);dateFromConfig(config);checkOverflow(config)}function unescapeFormat(s){return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(matched,p1,p2,p3,p4){return p1||p2||p3||p4})}// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function regexpEscape(s){return s.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}// date from string and array of format strings
function makeDateFromStringAndArray(config){var tempConfig,bestMoment,scoreToBeat,i,currentScore;if(0===config._f.length){config._pf.invalidFormat=!0;config._d=new Date(NaN);return}for(i=0;i<config._f.length;i++){currentScore=0;tempConfig=copyConfig({},config);if(null!=config._useUTC){tempConfig._useUTC=config._useUTC}tempConfig._pf=defaultParsingFlags();tempConfig._f=config._f[i];makeDateFromStringAndFormat(tempConfig);if(!_isValid(tempConfig)){continue}// if there is any input that was not parsed add a penalty for that format
currentScore+=tempConfig._pf.charsLeftOver;//or tokens
currentScore+=10*tempConfig._pf.unusedTokens.length;tempConfig._pf.score=currentScore;if(null==scoreToBeat||currentScore<scoreToBeat){scoreToBeat=currentScore;bestMoment=tempConfig}}extend(config,bestMoment||tempConfig)}// date from iso format
function parseISO(config){var i,l,string=config._i,match=isoRegex.exec(string);if(match){config._pf.iso=!0;for(i=0,l=isoDates.length;i<l;i++){if(isoDates[i][1].exec(string)){// match[5] should be 'T' or undefined
config._f=isoDates[i][0]+(match[6]||" ");break}}for(i=0,l=isoTimes.length;i<l;i++){if(isoTimes[i][1].exec(string)){config._f+=isoTimes[i][0];break}}if(string.match(parseTokenTimezone)){config._f+="Z"}makeDateFromStringAndFormat(config)}else{config._isValid=!1}}// date from iso format or fallback
function makeDateFromString(config){parseISO(config);if(!1===config._isValid){delete config._isValid;moment.createFromInputFallback(config)}}function map(arr,fn){var res=[],i;for(i=0;i<arr.length;++i){res.push(fn(arr[i],i))}return res}function makeDateFromInput(config){var input=config._i,matched;if(input===void 0){config._d=new Date}else if(isDate(input)){config._d=new Date(+input)}else if(null!==(matched=aspNetJsonRegex.exec(input))){config._d=new Date(+matched[1])}else if("string"===typeof input){makeDateFromString(config)}else if(isArray(input)){config._a=map(input.slice(0),function(obj){return parseInt(obj,10)});dateFromConfig(config)}else if("object"===babelHelpers.typeof(input)){dateFromObject(config)}else if("number"===typeof input){// from milliseconds
config._d=new Date(input)}else{moment.createFromInputFallback(config)}}function makeDate(y,m,d,h,M,s,ms){//can't just apply() to create a date:
//http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
var date=new Date(y,m,d,h,M,s,ms);//the date constructor doesn't accept years < 1970
if(1970>y){date.setFullYear(y)}return date}function makeUTCDate(y){var date=new Date(Date.UTC.apply(null,arguments));if(1970>y){date.setUTCFullYear(y)}return date}function parseWeekday(input,locale){if("string"===typeof input){if(!isNaN(input)){input=parseInt(input,10)}else{input=locale.weekdaysParse(input);if("number"!==typeof input){return null}}}return input}/************************************
        Relative Time
    ************************************/ // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string,number,withoutSuffix,isFuture,locale){return locale.relativeTime(number||1,!!withoutSuffix,string,isFuture)}function relativeTime(posNegDuration,withoutSuffix,locale){var duration=moment.duration(posNegDuration).abs(),seconds=round(duration.as("s")),minutes=round(duration.as("m")),hours=round(duration.as("h")),days=round(duration.as("d")),months=round(duration.as("M")),years=round(duration.as("y")),args=seconds<relativeTimeThresholds.s&&["s",seconds]||1===minutes&&["m"]||minutes<relativeTimeThresholds.m&&["mm",minutes]||1===hours&&["h"]||hours<relativeTimeThresholds.h&&["hh",hours]||1===days&&["d"]||days<relativeTimeThresholds.d&&["dd",days]||1===months&&["M"]||months<relativeTimeThresholds.M&&["MM",months]||1===years&&["y"]||["yy",years];args[2]=withoutSuffix;args[3]=0<+posNegDuration;args[4]=locale;return substituteTimeAgo.apply({},args)}/************************************
        Week of Year
    ************************************/ // firstDayOfWeek       0 = sun, 6 = sat
//                      the day of the week that starts the week
//                      (usually sunday or monday)
// firstDayOfWeekOfYear 0 = sun, 6 = sat
//                      the first week is the week that contains the first
//                      of this day of the week
//                      (eg. ISO weeks use thursday (4))
function weekOfYear(mom,firstDayOfWeek,firstDayOfWeekOfYear){var end=firstDayOfWeekOfYear-firstDayOfWeek,daysToDayOfWeek=firstDayOfWeekOfYear-mom.day(),adjustedMoment;if(daysToDayOfWeek>end){daysToDayOfWeek-=7}if(daysToDayOfWeek<end-7){daysToDayOfWeek+=7}adjustedMoment=moment(mom).add(daysToDayOfWeek,"d");return{week:Math.ceil(adjustedMoment.dayOfYear()/7),year:adjustedMoment.year()}}//http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year,week,weekday,firstDayOfWeekOfYear,firstDayOfWeek){var d=makeUTCDate(year,0,1).getUTCDay(),daysToAdd,dayOfYear;d=0===d?7:d;weekday=null!=weekday?weekday:firstDayOfWeek;daysToAdd=firstDayOfWeek-d+(d>firstDayOfWeekOfYear?7:0)-(d<firstDayOfWeek?7:0);dayOfYear=7*(week-1)+(weekday-firstDayOfWeek)+daysToAdd+1;return{year:0<dayOfYear?year:year-1,dayOfYear:0<dayOfYear?dayOfYear:daysInYear(year-1)+dayOfYear}}/************************************
        Top Level Functions
    ************************************/function makeMoment(config){var input=config._i,format=config._f,res;config._locale=config._locale||moment.localeData(config._l);if(null===input||format===void 0&&""===input){return moment.invalid({nullInput:!0})}if("string"===typeof input){config._i=input=config._locale.preparse(input)}if(moment.isMoment(input)){return new Moment(input,!0)}else if(format){if(isArray(format)){makeDateFromStringAndArray(config)}else{makeDateFromStringAndFormat(config)}}else{makeDateFromInput(config)}res=new Moment(config);if(res._nextDay){// Adding is smart enough around DST
res.add(1,"d");res._nextDay=void 0}return res}moment=function moment(input,format,locale,strict){var c;if("boolean"===typeof locale){strict=locale;locale=void 0}// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
c={};c._isAMomentObject=!0;c._i=input;c._f=format;c._l=locale;c._strict=strict;c._isUTC=!1;c._pf=defaultParsingFlags();return makeMoment(c)};moment.suppressDeprecationWarnings=!1;moment.createFromInputFallback=deprecate("moment construction falls back to js Date. This is "+"discouraged and will be removed in upcoming major "+"release. Please refer to "+"https://github.com/moment/moment/issues/1407 for more info.",function(config){config._d=new Date(config._i+(config._useUTC?" UTC":""))});// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn,moments){var res,i;if(1===moments.length&&isArray(moments[0])){moments=moments[0]}if(!moments.length){return moment()}res=moments[0];for(i=1;i<moments.length;++i){if(moments[i][fn](res)){res=moments[i]}}return res}moment.min=function(){var args=[].slice.call(arguments,0);return pickBy("isBefore",args)};moment.max=function(){var args=[].slice.call(arguments,0);return pickBy("isAfter",args)};// creating with utc
moment.utc=function(input,format,locale,strict){var c;if("boolean"===typeof locale){strict=locale;locale=void 0}// object construction must be done this way.
// https://github.com/moment/moment/issues/1423
c={};c._isAMomentObject=!0;c._useUTC=!0;c._isUTC=!0;c._l=locale;c._i=input;c._f=format;c._strict=strict;c._pf=defaultParsingFlags();return makeMoment(c).utc()};// creating with unix timestamp (in seconds)
moment.unix=function(input){return moment(1e3*input)};// duration
moment.duration=function(input,key){var duration=input,// matching against regexp is expensive, do it on demand
match=null,sign,ret,parseIso,diffRes;if(moment.isDuration(input)){duration={ms:input._milliseconds,d:input._days,M:input._months}}else if("number"===typeof input){duration={};if(key){duration[key]=input}else{duration.milliseconds=input}}else if(!!(match=aspNetTimeSpanJsonRegex.exec(input))){sign="-"===match[1]?-1:1;duration={y:0,d:toInt(match[DATE])*sign,h:toInt(match[HOUR])*sign,m:toInt(match[MINUTE])*sign,s:toInt(match[SECOND])*sign,ms:toInt(match[MILLISECOND])*sign}}else if(!!(match=isoDurationRegex.exec(input))){sign="-"===match[1]?-1:1;parseIso=function parseIso(inp){// We'd normally use ~~inp for this, but unfortunately it also
// converts floats to ints.
// inp may be undefined, so careful calling replace on it.
var res=inp&&parseFloat(inp.replace(",","."));// apply sign while we're at it
return(isNaN(res)?0:res)*sign};duration={y:parseIso(match[2]),M:parseIso(match[3]),d:parseIso(match[4]),h:parseIso(match[5]),m:parseIso(match[6]),s:parseIso(match[7]),w:parseIso(match[8])}}else if(null==duration){// checks for null or undefined
duration={}}else if("object"===babelHelpers.typeof(duration)&&("from"in duration||"to"in duration)){diffRes=momentsDifference(moment(duration.from),moment(duration.to));duration={};duration.ms=diffRes.milliseconds;duration.M=diffRes.months}ret=new Duration(duration);if(moment.isDuration(input)&&hasOwnProp(input,"_locale")){ret._locale=input._locale}return ret};// version number
moment.version=VERSION;// default format
moment.defaultFormat=isoFormat;// constant that refers to the ISO standard
moment.ISO_8601=function(){};// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
moment.momentProperties=momentProperties;// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
moment.updateOffset=function(){};// This function allows you to set a threshold for relative time strings
moment.relativeTimeThreshold=function(threshold,limit){if(relativeTimeThresholds[threshold]===void 0){return!1}if(limit===void 0){return relativeTimeThresholds[threshold]}relativeTimeThresholds[threshold]=limit;return!0};moment.lang=deprecate("moment.lang is deprecated. Use moment.locale instead.",function(key,value){return moment.locale(key,value)});// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
moment.locale=function(key,values){var data;if(key){if("undefined"!==typeof values){data=moment.defineLocale(key,values)}else{data=moment.localeData(key)}if(data){moment.duration._locale=moment._locale=data}}return moment._locale._abbr};moment.defineLocale=function(name,values){if(null!==values){values.abbr=name;if(!locales[name]){locales[name]=new Locale}locales[name].set(values);// backwards compat for now: also set the locale
moment.locale(name);return locales[name]}else{// useful for testing
delete locales[name];return null}};moment.langData=deprecate("moment.langData is deprecated. Use moment.localeData instead.",function(key){return moment.localeData(key)});// returns locale data
moment.localeData=function(key){var locale;if(key&&key._locale&&key._locale._abbr){key=key._locale._abbr}if(!key){return moment._locale}if(!isArray(key)){//short-circuit everything else
locale=loadLocale(key);if(locale){return locale}key=[key]}return chooseLocale(key)};// compare moment object
moment.isMoment=function(obj){return babelHelpers.instanceof(obj,Moment)||null!=obj&&hasOwnProp(obj,"_isAMomentObject")};// for typechecking Duration objects
moment.isDuration=function(obj){return babelHelpers.instanceof(obj,Duration)};for(i=lists.length-1;0<=i;--i){makeList(lists[i])}moment.normalizeUnits=function(units){return normalizeUnits(units)};moment.invalid=function(flags){var m=moment.utc(NaN);if(null!=flags){extend(m._pf,flags)}else{m._pf.userInvalidated=!0}return m};moment.parseZone=function(){return moment.apply(null,arguments).parseZone()};moment.parseTwoDigitYear=function(input){return toInt(input)+(68<toInt(input)?1900:2e3)};moment.isDate=isDate;/************************************
        Moment Prototype
    ************************************/extend(moment.fn=Moment.prototype,{clone:function clone(){return moment(this)},valueOf:function valueOf(){return+this._d-6e4*(this._offset||0)},unix:function unix(){return Math.floor(+this/1e3)},toString:function toString(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function toDate(){return this._offset?new Date(+this):this._d},toISOString:function toISOString(){var m=moment(this).utc();if(0<m.year()&&9999>=m.year()){if("function"===typeof Date.prototype.toISOString){// native implementation is ~50x faster, use it when we can
return this.toDate().toISOString()}else{return formatMoment(m,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}}else{return formatMoment(m,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}},toArray:function toArray(){var m=this;return[m.year(),m.month(),m.date(),m.hours(),m.minutes(),m.seconds(),m.milliseconds()]},isValid:function isValid(){return _isValid(this)},isDSTShifted:function isDSTShifted(){if(this._a){return this.isValid()&&0<compareArrays(this._a,(this._isUTC?moment.utc(this._a):moment(this._a)).toArray())}return!1},parsingFlags:function parsingFlags(){return extend({},this._pf)},invalidAt:function invalidAt(){return this._pf.overflow},utc:function utc(keepLocalTime){return this.utcOffset(0,keepLocalTime)},local:function local(keepLocalTime){if(this._isUTC){this.utcOffset(0,keepLocalTime);this._isUTC=!1;if(keepLocalTime){this.subtract(this._dateUtcOffset(),"m")}}return this},format:function format(inputString){var output=formatMoment(this,inputString||moment.defaultFormat);return this.localeData().postformat(output)},add:createAdder(1,"add"),subtract:createAdder(-1,"subtract"),diff:function diff(input,units,asFloat){var that=makeAs(input,this),zoneDiff=6e4*(that.utcOffset()-this.utcOffset()),anchor,diff,output,daysAdjust;units=normalizeUnits(units);if("year"===units||"month"===units||"quarter"===units){output=monthDiff(this,that);if("quarter"===units){output=output/3}else if("year"===units){output=output/12}}else{diff=this-that;output="second"===units?diff/1e3:// 1000
"minute"===units?diff/6e4:// 1000 * 60
"hour"===units?diff/36e5:// 1000 * 60 * 60
"day"===units?(diff-zoneDiff)/864e5:// 1000 * 60 * 60 * 24, negate dst
"week"===units?(diff-zoneDiff)/6048e5:// 1000 * 60 * 60 * 24 * 7, negate dst
diff}return asFloat?output:absRound(output)},from:function from(time,withoutSuffix){return moment.duration({to:this,from:time}).locale(this.locale()).humanize(!withoutSuffix)},fromNow:function fromNow(withoutSuffix){return this.from(moment(),withoutSuffix)},calendar:function calendar(time){// We want to compare the start of today, vs this.
// Getting start-of-today depends on whether we're locat/utc/offset
// or not.
var now=time||moment(),sod=makeAs(now,this).startOf("day"),diff=this.diff(sod,"days",!0),format=-6>diff?"sameElse":-1>diff?"lastWeek":0>diff?"lastDay":1>diff?"sameDay":2>diff?"nextDay":7>diff?"nextWeek":"sameElse";return this.format(this.localeData().calendar(format,this,moment(now)))},isLeapYear:function isLeapYear(){return _isLeapYear(this.year())},isDST:function isDST(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},day:function day(input){var day=this._isUTC?this._d.getUTCDay():this._d.getDay();if(null!=input){input=parseWeekday(input,this.localeData());return this.add(input-day,"d")}else{return day}},month:makeAccessor("Month",!0),startOf:function startOf(units){units=normalizeUnits(units);// the following switch intentionally omits break keywords
// to utilize falling through the cases.
switch(units){case"year":this.month(0);/* falls through */case"quarter":case"month":this.date(1);/* falls through */case"week":case"isoWeek":case"day":this.hours(0);/* falls through */case"hour":this.minutes(0);/* falls through */case"minute":this.seconds(0);/* falls through */case"second":this.milliseconds(0);/* falls through */}// weeks are a special case
if("week"===units){this.weekday(0)}else if("isoWeek"===units){this.isoWeekday(1)}// quarters are also special
if("quarter"===units){this.month(3*Math.floor(this.month()/3))}return this},endOf:function endOf(units){units=normalizeUnits(units);if(units===void 0||"millisecond"===units){return this}return this.startOf(units).add(1,"isoWeek"===units?"week":units).subtract(1,"ms")},isAfter:function isAfter(input,units){var inputMs;units=normalizeUnits("undefined"!==typeof units?units:"millisecond");if("millisecond"===units){input=moment.isMoment(input)?input:moment(input);return+this>+input}else{inputMs=moment.isMoment(input)?+input:+moment(input);return inputMs<+this.clone().startOf(units)}},isBefore:function isBefore(input,units){var inputMs;units=normalizeUnits("undefined"!==typeof units?units:"millisecond");if("millisecond"===units){input=moment.isMoment(input)?input:moment(input);return+this<+input}else{inputMs=moment.isMoment(input)?+input:+moment(input);return+this.clone().endOf(units)<inputMs}},isBetween:function isBetween(from,to,units){return this.isAfter(from,units)&&this.isBefore(to,units)},isSame:function isSame(input,units){var inputMs;units=normalizeUnits(units||"millisecond");if("millisecond"===units){input=moment.isMoment(input)?input:moment(input);return+this===+input}else{inputMs=+moment(input);return+this.clone().startOf(units)<=inputMs&&inputMs<=+this.clone().endOf(units)}},min:deprecate("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548",function(other){other=moment.apply(null,arguments);return other<this?this:other}),max:deprecate("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548",function(other){other=moment.apply(null,arguments);return other>this?this:other}),zone:deprecate("moment().zone is deprecated, use moment().utcOffset instead. "+"https://github.com/moment/moment/issues/1779",function(input,keepLocalTime){if(null!=input){if("string"!==typeof input){input=-input}this.utcOffset(input,keepLocalTime);return this}else{return-this.utcOffset()}}),// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
utcOffset:function utcOffset(input,keepLocalTime){var offset=this._offset||0,localAdjust;if(null!=input){if("string"===typeof input){input=utcOffsetFromString(input)}if(16>Math.abs(input)){input=60*input}if(!this._isUTC&&keepLocalTime){localAdjust=this._dateUtcOffset()}this._offset=input;this._isUTC=!0;if(null!=localAdjust){this.add(localAdjust,"m")}if(offset!==input){if(!keepLocalTime||this._changeInProgress){addOrSubtractDurationFromMoment(this,moment.duration(input-offset,"m"),1,!1)}else if(!this._changeInProgress){this._changeInProgress=!0;moment.updateOffset(this,!0);this._changeInProgress=null}}return this}else{return this._isUTC?offset:this._dateUtcOffset()}},isLocal:function isLocal(){return!this._isUTC},isUtcOffset:function isUtcOffset(){return this._isUTC},isUtc:function isUtc(){return this._isUTC&&0===this._offset},zoneAbbr:function zoneAbbr(){return this._isUTC?"UTC":""},zoneName:function zoneName(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function parseZone(){if(this._tzm){this.utcOffset(this._tzm)}else if("string"===typeof this._i){this.utcOffset(utcOffsetFromString(this._i))}return this},hasAlignedHourOffset:function hasAlignedHourOffset(input){if(!input){input=0}else{input=moment(input).utcOffset()}return 0===(this.utcOffset()-input)%60},daysInMonth:function daysInMonth(){return _daysInMonth(this.year(),this.month())},dayOfYear:function dayOfYear(input){var dayOfYear=round((moment(this).startOf("day")-moment(this).startOf("year"))/864e5)+1;return null==input?dayOfYear:this.add(input-dayOfYear,"d")},quarter:function quarter(input){return null==input?Math.ceil((this.month()+1)/3):this.month(3*(input-1)+this.month()%3)},weekYear:function weekYear(input){var year=weekOfYear(this,this.localeData()._week.dow,this.localeData()._week.doy).year;return null==input?year:this.add(input-year,"y")},isoWeekYear:function isoWeekYear(input){var year=weekOfYear(this,1,4).year;return null==input?year:this.add(input-year,"y")},week:function week(input){var week=this.localeData().week(this);return null==input?week:this.add(7*(input-week),"d")},isoWeek:function isoWeek(input){var week=weekOfYear(this,1,4).week;return null==input?week:this.add(7*(input-week),"d")},weekday:function weekday(input){var weekday=(this.day()+7-this.localeData()._week.dow)%7;return null==input?weekday:this.add(input-weekday,"d")},isoWeekday:function isoWeekday(input){// behaves the same as moment#day except
// as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
// as a setter, sunday should belong to the previous week.
return null==input?this.day()||7:this.day(this.day()%7?input:input-7)},isoWeeksInYear:function isoWeeksInYear(){return _weeksInYear(this.year(),1,4)},weeksInYear:function weeksInYear(){var weekInfo=this.localeData()._week;return _weeksInYear(this.year(),weekInfo.dow,weekInfo.doy)},get:function get(units){units=normalizeUnits(units);return this[units]()},set:function set(units,value){var unit;if("object"===babelHelpers.typeof(units)){for(unit in units){this.set(unit,units[unit])}}else{units=normalizeUnits(units);if("function"===typeof this[units]){this[units](value)}}return this},// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
locale:function locale(key){var newLocaleData;if(key===void 0){return this._locale._abbr}else{newLocaleData=moment.localeData(key);if(null!=newLocaleData){this._locale=newLocaleData}return this}},lang:deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(key){if(key===void 0){return this.localeData()}else{return this.locale(key)}}),localeData:function localeData(){return this._locale},_dateUtcOffset:function _dateUtcOffset(){// On Firefox.24 Date#getTimezoneOffset returns a floating point.
// https://github.com/moment/moment/pull/1871
return 15*-Math.round(this._d.getTimezoneOffset()/15)}});function rawMonthSetter(mom,value){var dayOfMonth;// TODO: Move this out of here!
if("string"===typeof value){value=mom.localeData().monthsParse(value);// TODO: Another silent failure?
if("number"!==typeof value){return mom}}dayOfMonth=Math.min(mom.date(),_daysInMonth(mom.year(),value));mom._d["set"+(mom._isUTC?"UTC":"")+"Month"](value,dayOfMonth);return mom}function rawGetter(mom,unit){return mom._d["get"+(mom._isUTC?"UTC":"")+unit]()}function rawSetter(mom,unit,value){if("Month"===unit){return rawMonthSetter(mom,value)}else{return mom._d["set"+(mom._isUTC?"UTC":"")+unit](value)}}function makeAccessor(unit,keepTime){return function(value){if(null!=value){rawSetter(this,unit,value);moment.updateOffset(this,keepTime);return this}else{return rawGetter(this,unit)}}}moment.fn.millisecond=moment.fn.milliseconds=makeAccessor("Milliseconds",!1);moment.fn.second=moment.fn.seconds=makeAccessor("Seconds",!1);moment.fn.minute=moment.fn.minutes=makeAccessor("Minutes",!1);// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
moment.fn.hour=moment.fn.hours=makeAccessor("Hours",!0);// moment.fn.month is defined separately
moment.fn.date=makeAccessor("Date",!0);moment.fn.dates=deprecate("dates accessor is deprecated. Use date instead.",makeAccessor("Date",!0));moment.fn.year=makeAccessor("FullYear",!0);moment.fn.years=deprecate("years accessor is deprecated. Use year instead.",makeAccessor("FullYear",!0));// add plural methods
moment.fn.days=moment.fn.day;moment.fn.months=moment.fn.month;moment.fn.weeks=moment.fn.week;moment.fn.isoWeeks=moment.fn.isoWeek;moment.fn.quarters=moment.fn.quarter;// add aliased format methods
moment.fn.toJSON=moment.fn.toISOString;// alias isUtc for dev-friendliness
moment.fn.isUTC=moment.fn.isUtc;/************************************
        Duration Prototype
    ************************************/function daysToYears(days){// 400 years have 146097 days (taking into account leap year rules)
return 400*days/146097}function yearsToDays(years){// years * 365 + absRound(years / 4) -
//     absRound(years / 100) + absRound(years / 400);
return 146097*years/400}extend(moment.duration.fn=Duration.prototype,{_bubble:function _bubble(){var milliseconds=this._milliseconds,days=this._days,months=this._months,data=this._data,seconds,minutes,hours,years=0;// The following code bubbles up values, see the tests for
// examples of what that means.
data.milliseconds=milliseconds%1e3;seconds=absRound(milliseconds/1e3);data.seconds=seconds%60;minutes=absRound(seconds/60);data.minutes=minutes%60;hours=absRound(minutes/60);data.hours=hours%24;days+=absRound(hours/24);// Accurately convert days to years, assume start from year 0.
years=absRound(daysToYears(days));days-=absRound(yearsToDays(years));// 30 days to a month
// TODO (iskren): Use anchor date (like 1st Jan) to compute this.
months+=absRound(days/30);days%=30;// 12 months -> 1 year
years+=absRound(months/12);months%=12;data.days=days;data.months=months;data.years=years},abs:function abs(){this._milliseconds=Math.abs(this._milliseconds);this._days=Math.abs(this._days);this._months=Math.abs(this._months);this._data.milliseconds=Math.abs(this._data.milliseconds);this._data.seconds=Math.abs(this._data.seconds);this._data.minutes=Math.abs(this._data.minutes);this._data.hours=Math.abs(this._data.hours);this._data.months=Math.abs(this._data.months);this._data.years=Math.abs(this._data.years);return this},weeks:function weeks(){return absRound(this.days()/7)},valueOf:function valueOf(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*toInt(this._months/12)},humanize:function humanize(withSuffix){var output=relativeTime(this,!withSuffix,this.localeData());if(withSuffix){output=this.localeData().pastFuture(+this,output)}return this.localeData().postformat(output)},add:function add(input,val){// supports only 2.0-style add(1, 's') or add(moment)
var dur=moment.duration(input,val);this._milliseconds+=dur._milliseconds;this._days+=dur._days;this._months+=dur._months;this._bubble();return this},subtract:function subtract(input,val){var dur=moment.duration(input,val);this._milliseconds-=dur._milliseconds;this._days-=dur._days;this._months-=dur._months;this._bubble();return this},get:function get(units){units=normalizeUnits(units);return this[units.toLowerCase()+"s"]()},as:function as(units){var days,months;units=normalizeUnits(units);if("month"===units||"year"===units){days=this._days+this._milliseconds/864e5;months=this._months+12*daysToYears(days);return"month"===units?months:months/12}else{// handle milliseconds separately because of floating point math errors (issue #1867)
days=this._days+Math.round(yearsToDays(this._months/12));switch(units){case"week":return days/7+this._milliseconds/6048e5;case"day":return days+this._milliseconds/864e5;case"hour":return 24*days+this._milliseconds/36e5;case"minute":return 60*(24*days)+this._milliseconds/6e4;case"second":return 60*(60*(24*days))+this._milliseconds/1e3;// Math.floor prevents floating point math errors here
case"millisecond":return Math.floor(1e3*(60*(60*(24*days))))+this._milliseconds;default:throw new Error("Unknown unit "+units);}}},lang:moment.fn.lang,locale:moment.fn.locale,toIsoString:deprecate("toIsoString() is deprecated. Please use toISOString() instead "+"(notice the capitals)",function(){return this.toISOString()}),toISOString:function toISOString(){// inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
var years=Math.abs(this.years()),months=Math.abs(this.months()),days=Math.abs(this.days()),hours=Math.abs(this.hours()),minutes=Math.abs(this.minutes()),seconds=Math.abs(this.seconds()+this.milliseconds()/1e3);if(!this.asSeconds()){// this is the same as C#'s (Noda) and python (isodate)...
// but not other JS (goog.date)
return"P0D"}return(0>this.asSeconds()?"-":"")+"P"+(years?years+"Y":"")+(months?months+"M":"")+(days?days+"D":"")+(hours||minutes||seconds?"T":"")+(hours?hours+"H":"")+(minutes?minutes+"M":"")+(seconds?seconds+"S":"")},localeData:function localeData(){return this._locale},toJSON:function toJSON(){return this.toISOString()}});moment.duration.fn.toString=moment.duration.fn.toISOString;function makeDurationGetter(name){moment.duration.fn[name]=function(){return this._data[name]}}for(i in unitMillisecondFactors){if(hasOwnProp(unitMillisecondFactors,i)){makeDurationGetter(i.toLowerCase())}}moment.duration.fn.asMilliseconds=function(){return this.as("ms")};moment.duration.fn.asSeconds=function(){return this.as("s")};moment.duration.fn.asMinutes=function(){return this.as("m")};moment.duration.fn.asHours=function(){return this.as("h")};moment.duration.fn.asDays=function(){return this.as("d")};moment.duration.fn.asWeeks=function(){return this.as("weeks")};moment.duration.fn.asMonths=function(){return this.as("M")};moment.duration.fn.asYears=function(){return this.as("y")};/************************************
        Default Locale
    ************************************/ // Set default locale, other locale will inherit from English.
moment.locale("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function ordinal(number){var b=number%10,output=1===toInt(number%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return number+output}});/* EMBED_LOCALES */ /************************************
        Exposing Moment
    ************************************/function makeGlobal(shouldDeprecate){/*global ender:false */if("undefined"!==typeof ender){return}oldGlobalMoment=globalScope.moment;if(shouldDeprecate){globalScope.moment=deprecate("Accessing Moment through the global scope is "+"deprecated, and will be removed in an upcoming "+"release.",moment)}else{globalScope.moment=moment}}// CommonJS module is defined
if(hasModule){module.exports=moment}else if("function"===typeof define&&define.amd){define(function(require,exports,module){if(module.config&&module.config()&&!0===module.config().noGlobal){// release the global variable
globalScope.moment=oldGlobalMoment}return moment});makeGlobal(!0)}else{makeGlobal()}}).call(this);!function(a,b){"function"==typeof define&&define.amd?define(["moment"],function(c){return a.DateRange=b(c)}):"object"==("undefined"===typeof exports?"undefined":babelHelpers.typeof(exports))?module.exports=b(require("moment")):a.DateRange=b(moment)}(this,function(a){function b(b,c){var d,e=b,f=c;(1===arguments.length||void 0===c)&&("object"==babelHelpers.typeof(b)&&2===b.length?(e=b[0],f=b[1]):"string"==typeof b&&(d=b.split("/"),e=d[0],f=d[1])),this.start=a(null===e?-864e13:e),this.end=a(null===f?864e13:f)}function c(b,c,d){for(var e=a(this.start);this.contains(e,d);){c.call(this,e.clone()),e.add(1,b)}}function d(b,c,d){var e=this/b,f=Math.floor(e);if(f!==1/0){f===e&&d&&f--;for(var g=0;f>=g;g++){c.call(this,a(this.start.valueOf()+b.valueOf()*g))}}}var e={year:!0,month:!0,week:!0,day:!0,hour:!0,minute:!0,second:!0};return b.prototype.constructor=b,b.prototype.clone=function(){return a().range(this.start,this.end)},b.prototype.contains=function(a,c){var d=this.start,e=this.end;return babelHelpers.instanceof(a,b)?d<=a.start&&(e>a.end||e.isSame(a.end)&&!c):a>=d&&(e>a||e.isSame(a)&&!c)},b.prototype.overlaps=function(a){return null!==this.intersect(a)},b.prototype.intersect=function(a){var c=this.start,d=this.end;return c<=a.start&&a.start<d&&d<a.end?new b(a.start,d):a.start<c&&c<a.end&&a.end<=d?new b(c,a.end):a.start<c&&d>=c&&d<a.end?this:c<=a.start&&a.start<=a.end&&a.end<=d?a:null},b.prototype.add=function(c){return this.overlaps(c)?new b(a.min(this.start,c.start),a.max(this.end,c.end)):null},b.prototype.subtract=function(a){var c=this.start,d=this.end;return null===this.intersect(a)?[this]:a.start<=c&&d>c&&d<=a.end?[]:a.start<=c&&c<a.end&&a.end<d?[new b(a.end,d)]:c<a.start&&a.start<d&&d<=a.end?[new b(c,a.start)]:c<a.start&&a.start<a.end&&a.end<d?[new b(c,a.start),new b(a.end,d)]:c<a.start&&a.start<d&&a.end<d?[new b(c,a.start),new b(a.start,d)]:void 0},b.prototype.toArray=function(a,b){var c=[];return this.by(a,function(a){c.push(a)},b),c},b.prototype.by=function(a,b,e){return"string"==typeof a?c.call(this,a,b,e):d.call(this,a,b,e),this},b.prototype.toString=function(){return this.start.format()+"/"+this.end.format()},b.prototype.valueOf=function(){return this.end-this.start},b.prototype.center=function(){var b=this.start+this.diff()/2;return a(b)},b.prototype.toDate=function(){return[this.start.toDate(),this.end.toDate()]},b.prototype.isSame=function(a){return this.start.isSame(a.start)&&this.end.isSame(a.end)},b.prototype.diff=function(a){return this.end.diff(this.start,a)},a.range=function(c,d){return c in e?new b(a(this).startOf(c),a(this).endOf(c)):new b(c,d)},a.range.constructor=b,a.fn.range=a.range,a.fn.within=function(a){return a.contains(this._d)},b});