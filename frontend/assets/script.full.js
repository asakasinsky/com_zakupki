function _log(e, t) {
    if (!_canLog) {
        return
    }
    var n = Array.prototype.slice.apply(arguments, [1]);
    var r = new Date;
    var i = r.getHours() + ":" + r.getMinutes() + ":" + r.getSeconds() + "." + r.getMilliseconds();
    n[0] = i + " - " + n[0];
    try {
        switch (e) {
            case "info":
                window.console.info.apply(window.console, n);
                break;
            case "warn":
                window.console.warn.apply(window.console, n);
                break;
            default:
                window.console.log.apply(window.console, n);
                break
        }
    } catch (s) {
        if (!window.console) {
            _canLog = false
        }
    }
}

function logMsg(e) {
    Array.prototype.unshift.apply(arguments, ["debug"]);
    _log.apply(this, arguments)
}

if(!window.jQuery)
{
console.log('internal jQuery loaded');
!function(e,t){function n(e){var t=ht[e]={};return K.each(e.split(tt),function(e,n){t[n]=!0}),t}function r(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(mt,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:gt.test(r)?K.parseJSON(r):r}catch(o){}K.data(e,n,r)}else r=t}return r}function i(e){var t;for(t in e)if(("data"!==t||!K.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function o(){return!1}function a(){return!0}function s(e){return!e||!e.parentNode||11===e.parentNode.nodeType}function l(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function u(e,t,n){if(t=t||0,K.isFunction(t))return K.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return K.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=K.grep(e,function(e){return 1===e.nodeType});if(_t.test(t))return K.filter(t,r,!n);t=K.filter(t,r)}return K.grep(e,function(e){return K.inArray(e,t)>=0===n})}function c(e){var t=Wt.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function f(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function p(e,t){if(1===t.nodeType&&K.hasData(e)){var n,r,i,o=K._data(e),a=K._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)K.event.add(t,n,s[n][r])}a.data&&(a.data=K.extend({},a.data))}}function d(e,t){var n;1===t.nodeType&&(t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),K.support.html5Clone&&e.innerHTML&&!K.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Vt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.selected=e.defaultSelected:"input"===n||"textarea"===n?t.defaultValue=e.defaultValue:"script"===n&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(K.expando))}function h(e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName("*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll("*"):[]}function g(e){Vt.test(e.type)&&(e.defaultChecked=e.checked)}function m(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=vn.length;i--;)if(t=vn[i]+n,t in e)return t;return r}function y(e,t){return e=t||e,"none"===K.css(e,"display")||!K.contains(e.ownerDocument,e)}function v(e,t){for(var n,r,i=[],o=0,a=e.length;a>o;o++)n=e[o],n.style&&(i[o]=K._data(n,"olddisplay"),t?(i[o]||"none"!==n.style.display||(n.style.display=""),""===n.style.display&&y(n)&&(i[o]=K._data(n,"olddisplay",T(n.nodeName)))):(r=nn(n,"display"),i[o]||"none"===r||K._data(n,"olddisplay",r)));for(o=0;a>o;o++)n=e[o],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?i[o]||"":"none"));return e}function b(e,t,n){var r=fn.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function x(e,t,n,r){for(var i=n===(r?"border":"content")?4:"width"===t?1:0,o=0;4>i;i+=2)"margin"===n&&(o+=K.css(e,n+yn[i],!0)),r?("content"===n&&(o-=parseFloat(nn(e,"padding"+yn[i]))||0),"margin"!==n&&(o-=parseFloat(nn(e,"border"+yn[i]+"Width"))||0)):(o+=parseFloat(nn(e,"padding"+yn[i]))||0,"padding"!==n&&(o+=parseFloat(nn(e,"border"+yn[i]+"Width"))||0));return o}function w(e,t,n){var r="width"===t?e.offsetWidth:e.offsetHeight,i=!0,o=K.support.boxSizing&&"border-box"===K.css(e,"boxSizing");if(0>=r||null==r){if(r=nn(e,t),(0>r||null==r)&&(r=e.style[t]),pn.test(r))return r;i=o&&(K.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+x(e,t,n||(o?"border":"content"),i)+"px"}function T(e){if(hn[e])return hn[e];var t=K("<"+e+">").appendTo(R.body),n=t.css("display");return t.remove(),("none"===n||""===n)&&(rn=R.body.appendChild(rn||K.extend(R.createElement("iframe"),{frameBorder:0,width:0,height:0})),on&&rn.createElement||(on=(rn.contentWindow||rn.contentDocument).document,on.write("<!doctype html><html><body>"),on.close()),t=on.body.appendChild(on.createElement(e)),n=nn(t,"display"),R.body.removeChild(rn)),hn[e]=n,n}function N(e,t,n,r){var i;if(K.isArray(t))K.each(t,function(t,i){n||wn.test(e)?r(e,i):N(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==K.type(t))r(e,t);else for(i in t)N(e+"["+i+"]",t[i],n,r)}function C(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i,o,a=t.toLowerCase().split(tt),s=0,l=a.length;if(K.isFunction(n))for(;l>s;s++)r=a[s],o=/^\+/.test(r),o&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[o?"unshift":"push"](n)}}function k(e,n,r,i,o,a){o=o||n.dataTypes[0],a=a||{},a[o]=!0;for(var s,l=e[o],u=0,c=l?l.length:0,f=e===qn;c>u&&(f||!s);u++)s=l[u](n,r,i),"string"==typeof s&&(!f||a[s]?s=t:(n.dataTypes.unshift(s),s=k(e,n,r,i,s,a)));return!f&&s||a["*"]||(s=k(e,n,r,i,"*",a)),s}function E(e,n){var r,i,o=K.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r]);i&&K.extend(!0,e,i)}function S(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes,c=e.responseFields;for(o in c)o in r&&(n[c[o]]=r[o]);for(;"*"===u[0];)u.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(o in l)if(l[o]&&l[o].test(i)){u.unshift(o);break}if(u[0]in r)a=u[0];else{for(o in r){if(!u[0]||e.converters[o+" "+u[0]]){a=o;break}s||(s=o)}a=a||s}return a?(a!==u[0]&&u.unshift(a),r[a]):void 0}function A(e,t){var n,r,i,o,a=e.dataTypes.slice(),s=a[0],l={},u=0;if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),a[1])for(n in e.converters)l[n.toLowerCase()]=e.converters[n];for(;i=a[++u];)if("*"!==i){if("*"!==s&&s!==i){if(n=l[s+" "+i]||l["* "+i],!n)for(r in l)if(o=r.split(" "),o[1]===i&&(n=l[s+" "+o[0]]||l["* "+o[0]])){n===!0?n=l[r]:l[r]!==!0&&(i=o[0],a.splice(u--,0,i));break}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(c){return{state:"parsererror",error:n?c:"No conversion from "+s+" to "+i}}}s=i}return{state:"success",data:t}}function j(){try{return new e.XMLHttpRequest}catch(t){}}function D(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function L(){return setTimeout(function(){Jn=t},0),Jn=K.now()}function H(e,t){K.each(t,function(t,n){for(var r=(er[t]||[]).concat(er["*"]),i=0,o=r.length;o>i;i++)if(r[i].call(e,t,n))return})}function F(e,t,n){var r,i=0,o=Zn.length,a=K.Deferred().always(function(){delete s.elem}),s=function(){for(var t=Jn||L(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),i=0,o=l.tweens.length;o>i;i++)l.tweens[i].run(r);return a.notifyWith(e,[l,r,n]),1>r&&o?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:K.extend({},t),opts:K.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Jn||L(),duration:n.duration,tweens:[],createTween:function(t,n){var r=K.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){for(var n=0,r=t?l.tweens.length:0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),u=l.props;for(M(u,l.opts.specialEasing);o>i;i++)if(r=Zn[i].call(l,e,u,l.opts))return r;return H(l,u),K.isFunction(l.opts.start)&&l.opts.start.call(e,l),K.fx.timer(K.extend(s,{anim:l,queue:l.opts.queue,elem:e})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function M(e,t){var n,r,i,o,a;for(n in e)if(r=K.camelCase(n),i=t[r],o=e[n],K.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=K.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function O(e,t,n){var r,i,o,a,s,l,u,c,f=this,p=e.style,d={},h=[],g=e.nodeType&&y(e);n.queue||(u=K._queueHooks(e,"fx"),null==u.unqueued&&(u.unqueued=0,c=u.empty.fire,u.empty.fire=function(){u.unqueued||c()}),u.unqueued++,f.always(function(){f.always(function(){u.unqueued--,K.queue(e,"fx").length||u.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===K.css(e,"display")&&"none"===K.css(e,"float")&&(K.support.inlineBlockNeedsLayout&&"inline"!==T(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",K.support.shrinkWrapBlocks||f.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(o=t[r],Gn.exec(o)){if(delete t[r],o===(g?"hide":"show"))continue;h.push(r)}if(a=h.length)for(s=K._data(e,"fxshow")||K._data(e,"fxshow",{}),g?K(e).show():f.done(function(){K(e).hide()}),f.done(function(){var t;K.removeData(e,"fxshow",!0);for(t in d)K.style(e,t,d[t])}),r=0;a>r;r++)i=h[r],l=f.createTween(i,g?s[i]:0),d[i]=s[i]||K.style(e,i),i in s||(s[i]=l.start,g&&(l.end=l.start,l.start="width"===i||"height"===i?1:0))}function _(e,t,n,r,i){return new _.prototype.init(e,t,n,r,i)}function q(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=yn[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function B(e){return K.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var W,P,R=e.document,$=e.location,I=e.navigator,z=e.jQuery,X=e.$,U=Array.prototype.push,Y=Array.prototype.slice,J=Array.prototype.indexOf,V=Object.prototype.toString,G=Object.prototype.hasOwnProperty,Q=String.prototype.trim,K=function(e,t){return new K.fn.init(e,t,W)},Z=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,et=/\S/,tt=/\s+/,nt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rt=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,it=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ot=/^[\],:{}\s]*$/,at=/(?:^|:|,)(?:\s*\[)+/g,st=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,lt=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,ut=/^-ms-/,ct=/-([\da-z])/gi,ft=function(e,t){return(t+"").toUpperCase()},pt=function(){R.addEventListener?(R.removeEventListener("DOMContentLoaded",pt,!1),K.ready()):"complete"===R.readyState&&(R.detachEvent("onreadystatechange",pt),K.ready())},dt={};K.fn=K.prototype={constructor:K,init:function(e,n,r){var i,o,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:rt.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1])return n=n instanceof K?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:R,e=K.parseHTML(i[1],a,!0),it.test(i[1])&&K.isPlainObject(n)&&this.attr.call(e,n,!0),K.merge(this,e);if(o=R.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=R,this.selector=e,this}return K.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),K.makeArray(e,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return Y.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=K.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,"find"===t?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return K.each(this,e,t)},ready:function(e){return K.ready.promise().done(e),this},eq:function(e){return e=+e,-1===e?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(Y.apply(this,arguments),"slice",Y.call(arguments).join(","))},map:function(e){return this.pushStack(K.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:U,sort:[].sort,splice:[].splice},K.fn.init.prototype=K.fn,K.extend=K.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||K.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(e=arguments[l]))for(n in e)r=s[n],i=e[n],s!==i&&(c&&i&&(K.isPlainObject(i)||(o=K.isArray(i)))?(o?(o=!1,a=r&&K.isArray(r)?r:[]):a=r&&K.isPlainObject(r)?r:{},s[n]=K.extend(c,a,i)):i!==t&&(s[n]=i));return s},K.extend({noConflict:function(t){return e.$===K&&(e.$=X),t&&e.jQuery===K&&(e.jQuery=z),K},isReady:!1,readyWait:1,holdReady:function(e){e?K.readyWait++:K.ready(!0)},ready:function(e){if(e===!0?!--K.readyWait:!K.isReady){if(!R.body)return setTimeout(K.ready,1);K.isReady=!0,e!==!0&&--K.readyWait>0||(P.resolveWith(R,[K]),K.fn.trigger&&K(R).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===K.type(e)},isArray:Array.isArray||function(e){return"array"===K.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?String(e):dt[V.call(e)]||"object"},isPlainObject:function(e){if(!e||"object"!==K.type(e)||e.nodeType||K.isWindow(e))return!1;try{if(e.constructor&&!G.call(e,"constructor")&&!G.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||G.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return e&&"string"==typeof e?("boolean"==typeof t&&(n=t,t=0),t=t||R,(r=it.exec(e))?[t.createElement(r[1])]:(r=K.buildFragment([e],t,n?null:[]),K.merge([],(r.cacheable?K.clone(r.fragment):r.fragment).childNodes))):null},parseJSON:function(t){return t&&"string"==typeof t?(t=K.trim(t),e.JSON&&e.JSON.parse?e.JSON.parse(t):ot.test(t.replace(st,"@").replace(lt,"]").replace(at,""))?new Function("return "+t)():(K.error("Invalid JSON: "+t),void 0)):null},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||K.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&et.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(ut,"ms-").replace(ct,ft)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,o=0,a=e.length,s=a===t||K.isFunction(e);if(r)if(s){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;a>o&&n.apply(e[o++],r)!==!1;);else if(s){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;a>o&&n.call(e[o],o,e[o++])!==!1;);return e},trim:Q&&!Q.call("﻿ ")?function(e){return null==e?"":Q.call(e)}:function(e){return null==e?"":(e+"").replace(nt,"")},makeArray:function(e,t){var n,r=t||[];return null!=e&&(n=K.type(e),null==e.length||"string"===n||"function"===n||"regexp"===n||K.isWindow(e)?U.call(r,e):K.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(J)return J.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,n,r){var i,o,a=[],s=0,l=e.length,u=e instanceof K||l!==t&&"number"==typeof l&&(l>0&&e[0]&&e[l-1]||0===l||K.isArray(e));if(u)for(;l>s;s++)i=n(e[s],s,r),null!=i&&(a[a.length]=i);else for(o in e)i=n(e[o],o,r),null!=i&&(a[a.length]=i);return a.concat.apply([],a)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(r=e[n],n=e,e=r),K.isFunction(e)?(i=Y.call(arguments,2),o=function(){return e.apply(n,i.concat(Y.call(arguments)))},o.guid=e.guid=e.guid||K.guid++,o):t},access:function(e,n,r,i,o,a,s){var l,u=null==r,c=0,f=e.length;if(r&&"object"==typeof r){for(c in r)K.access(e,n,c,r[c],1,a,i);o=1}else if(i!==t){if(l=s===t&&K.isFunction(i),u&&(l?(l=n,n=function(e,t,n){return l.call(K(e),n)}):(n.call(e,i),n=null)),n)for(;f>c;c++)n(e[c],r,l?i.call(e[c],c,n(e[c],r)):i,s);o=1}return o?e:u?n.call(e):f?n(e[0],r):a},now:function(){return(new Date).getTime()}}),K.ready.promise=function(t){if(!P)if(P=K.Deferred(),"complete"===R.readyState)setTimeout(K.ready,1);else if(R.addEventListener)R.addEventListener("DOMContentLoaded",pt,!1),e.addEventListener("load",K.ready,!1);else{R.attachEvent("onreadystatechange",pt),e.attachEvent("onload",K.ready);var n=!1;try{n=null==e.frameElement&&R.documentElement}catch(r){}n&&n.doScroll&&!function i(){if(!K.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}K.ready()}}()}return P.promise(t)},K.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){dt["[object "+t+"]"]=t.toLowerCase()}),W=K(R);var ht={};K.Callbacks=function(e){e="string"==typeof e?ht[e]||n(e):K.extend({},e);var r,i,o,a,s,l,u=[],c=!e.once&&[],f=function(t){for(r=e.memory&&t,i=!0,l=a||0,a=0,s=u.length,o=!0;u&&s>l;l++)if(u[l].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}o=!1,u&&(c?c.length&&f(c.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;!function n(t){K.each(t,function(t,r){var i=K.type(r);"function"!==i||e.unique&&p.has(r)?r&&r.length&&"string"!==i&&n(r):u.push(r)})}(arguments),o?s=u.length:r&&(a=t,f(r))}return this},remove:function(){return u&&K.each(arguments,function(e,t){for(var n;(n=K.inArray(t,u,n))>-1;)u.splice(n,1),o&&(s>=n&&s--,l>=n&&l--)}),this},has:function(e){return K.inArray(e,u)>-1},empty:function(){return u=[],this},disable:function(){return u=c=r=t,this},disabled:function(){return!u},lock:function(){return c=t,r||p.disable(),this},locked:function(){return!c},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!c||(o?c.push(t):f(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},K.extend({Deferred:function(e){var t=[["resolve","done",K.Callbacks("once memory"),"resolved"],["reject","fail",K.Callbacks("once memory"),"rejected"],["notify","progress",K.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return K.Deferred(function(n){K.each(t,function(t,r){var o=r[0],a=e[t];i[r[1]](K.isFunction(a)?function(){var e=a.apply(this,arguments);e&&K.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o+"With"](this===i?n:this,[e])}:n[o])}),e=null}).promise()},promise:function(e){return null!=e?K.extend(e,r):r}},i={};return r.pipe=r.then,K.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=a.fire,i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=Y.call(arguments),a=o.length,s=1!==a||e&&K.isFunction(e.promise)?a:0,l=1===s?e:K.Deferred(),u=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?Y.call(arguments):i,r===t?l.notifyWith(n,r):--s||l.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);a>i;i++)o[i]&&K.isFunction(o[i].promise)?o[i].promise().done(u(i,r,o)).fail(l.reject).progress(u(i,n,t)):--s;return s||l.resolveWith(r,o),l.promise()}}),K.support=function(){var t,n,r,i,o,a,s,l,u,c,f,p=R.createElement("div");if(p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0],r.style.cssText="top:1px;float:left;opacity:.5",!n||!n.length)return{};i=R.createElement("select"),o=i.appendChild(R.createElement("option")),a=p.getElementsByTagName("input")[0],t={leadingWhitespace:3===p.firstChild.nodeType,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:"on"===a.value,optSelected:o.selected,getSetAttribute:"t"!==p.className,enctype:!!R.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==R.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===R.compatMode,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,i.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}if(!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",f=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",f)),a=R.createElement("input"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","checked"),a.setAttribute("name","t"),p.appendChild(a),s=R.createDocumentFragment(),s.appendChild(p.lastChild),t.checkClone=s.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=a.checked,s.removeChild(a),s.appendChild(p),p.attachEvent)for(u in{submit:!0,change:!0,focusin:!0})l="on"+u,c=l in p,c||(p.setAttribute(l,"return;"),c="function"==typeof p[l]),t[u+"Bubbles"]=c;return K(function(){var n,r,i,o,a="padding:0;margin:0;border:0;display:block;overflow:hidden;",s=R.getElementsByTagName("body")[0];s&&(n=R.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",s.insertBefore(n,s.firstChild),r=R.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=r.getElementsByTagName("td"),i[0].style.cssText="padding:0;margin:0;border:0;display:none",c=0===i[0].offsetHeight,i[0].style.display="",i[1].style.display="none",t.reliableHiddenOffsets=c&&0===i[0].offsetHeight,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===r.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==s.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(r,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(r,null)||{width:"4px"}).width,o=R.createElement("div"),o.style.cssText=r.style.cssText=a,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),"undefined"!=typeof r.style.zoom&&(r.innerHTML="",r.style.cssText=a+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===r.offsetWidth,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==r.offsetWidth,n.style.zoom=1),s.removeChild(n),n=r=i=o=null)}),s.removeChild(p),n=r=i=o=a=s=p=null,t}();var gt=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,mt=/([A-Z])/g;K.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(K.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?K.cache[e[K.expando]]:e[K.expando],!!e&&!i(e)},data:function(e,n,r,i){if(K.acceptData(e)){var o,a,s=K.expando,l="string"==typeof n,u=e.nodeType,c=u?K.cache:e,f=u?e[s]:e[s]&&s;if(f&&c[f]&&(i||c[f].data)||!l||r!==t)return f||(u?e[s]=f=K.deletedIds.pop()||K.guid++:f=s),c[f]||(c[f]={},u||(c[f].toJSON=K.noop)),("object"==typeof n||"function"==typeof n)&&(i?c[f]=K.extend(c[f],n):c[f].data=K.extend(c[f].data,n)),o=c[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[K.camelCase(n)]=r),l?(a=o[n],null==a&&(a=o[K.camelCase(n)])):a=o,a}},removeData:function(e,t,n){if(K.acceptData(e)){var r,o,a,s=e.nodeType,l=s?K.cache:e,u=s?e[K.expando]:K.expando;if(l[u]){if(t&&(r=n?l[u]:l[u].data)){K.isArray(t)||(t in r?t=[t]:(t=K.camelCase(t),t=t in r?[t]:t.split(" ")));for(o=0,a=t.length;a>o;o++)delete r[t[o]];if(!(n?i:K.isEmptyObject)(r))return}(n||(delete l[u].data,i(l[u])))&&(s?K.cleanData([e],!0):K.support.deleteExpando||l!=l.window?delete l[u]:l[u]=null)}}},_data:function(e,t,n){return K.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&K.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),K.fn.extend({data:function(e,n){var i,o,a,s,l,u=this[0],c=0,f=null;if(e===t){if(this.length&&(f=K.data(u),1===u.nodeType&&!K._data(u,"parsedAttrs"))){for(a=u.attributes,l=a.length;l>c;c++)s=a[c].name,s.indexOf("data-")||(s=K.camelCase(s.substring(5)),r(u,s,f[s]));K._data(u,"parsedAttrs",!0)}return f}return"object"==typeof e?this.each(function(){K.data(this,e)}):(i=e.split(".",2),i[1]=i[1]?"."+i[1]:"",o=i[1]+"!",K.access(this,function(n){return n===t?(f=this.triggerHandler("getData"+o,[i[0]]),f===t&&u&&(f=K.data(u,e),f=r(u,e,f)),f===t&&i[1]?this.data(i[0]):f):(i[1]=n,this.each(function(){var t=K(this);t.triggerHandler("setData"+o,i),K.data(this,e,n),t.triggerHandler("changeData"+o,i)}),void 0)},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){K.removeData(this,e)})}}),K.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=K._data(e,t),n&&(!r||K.isArray(n)?r=K._data(e,t,K.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=K.queue(e,t),r=n.length,i=n.shift(),o=K._queueHooks(e,t),a=function(){K.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return K._data(e,n)||K._data(e,n,{empty:K.Callbacks("once memory").add(function(){K.removeData(e,t+"queue",!0),K.removeData(e,n,!0)})})}}),K.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),arguments.length<r?K.queue(this[0],e):n===t?this:this.each(function(){var t=K.queue(this,e,n);K._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&K.dequeue(this,e)})},dequeue:function(e){return this.each(function(){K.dequeue(this,e)})},delay:function(e,t){return e=K.fx?K.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=K.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)r=K._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var yt,vt,bt,xt=/[\t\r\n]/g,wt=/\r/g,Tt=/^(?:button|input)$/i,Nt=/^(?:button|input|object|select|textarea)$/i,Ct=/^a(?:rea|)$/i,kt=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,Et=K.support.getSetAttribute;K.fn.extend({attr:function(e,t){return K.access(this,K.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){K.removeAttr(this,e)})},prop:function(e,t){return K.access(this,K.prop,e,t,arguments.length>1)},removeProp:function(e){return e=K.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a,s;if(K.isFunction(e))return this.each(function(t){K(this).addClass(e.call(this,t,this.className))});if(e&&"string"==typeof e)for(t=e.split(tt),n=0,r=this.length;r>n;n++)if(i=this[n],1===i.nodeType)if(i.className||1!==t.length){for(o=" "+i.className+" ",a=0,s=t.length;s>a;a++)o.indexOf(" "+t[a]+" ")<0&&(o+=t[a]+" ");i.className=K.trim(o)}else i.className=e;return this},removeClass:function(e){var n,r,i,o,a,s,l;if(K.isFunction(e))return this.each(function(t){K(this).removeClass(e.call(this,t,this.className))});if(e&&"string"==typeof e||e===t)for(n=(e||"").split(tt),s=0,l=this.length;l>s;s++)if(i=this[s],1===i.nodeType&&i.className){for(r=(" "+i.className+" ").replace(xt," "),o=0,a=n.length;a>o;o++)for(;r.indexOf(" "+n[o]+" ")>=0;)r=r.replace(" "+n[o]+" "," ");i.className=e?K.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return K.isFunction(e)?this.each(function(n){K(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var i,o=0,a=K(this),s=t,l=e.split(tt);i=l[o++];)s=r?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);else("undefined"===n||"boolean"===n)&&(this.className&&K._data(this,"__className__",this.className),this.className=this.className||e===!1?"":K._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(xt," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=K.isFunction(e),this.each(function(r){var o,a=K(this);1===this.nodeType&&(o=i?e.call(this,r,a.val()):e,null==o?o="":"number"==typeof o?o+="":K.isArray(o)&&(o=K.map(o,function(e){return null==e?"":e+""})),n=K.valHooks[this.type]||K.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&n.set(this,o,"value")!==t||(this.value=o))});if(o)return n=K.valHooks[o.type]||K.valHooks[o.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(o,"value"))!==t?r:(r=o.value,"string"==typeof r?r.replace(wt,""):null==r?"":r)}}}),K.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r,i,o=e.selectedIndex,a=[],s=e.options,l="select-one"===e.type;if(0>o)return null;for(n=l?o:0,r=l?o+1:s.length;r>n;n++)if(i=s[n],!(!i.selected||(K.support.optDisabled?i.disabled:null!==i.getAttribute("disabled"))||i.parentNode.disabled&&K.nodeName(i.parentNode,"optgroup"))){if(t=K(i).val(),l)return t;a.push(t)}return l&&!a.length&&s.length?K(s[o]).val():a},set:function(e,t){var n=K.makeArray(t);return K(e).find("option").each(function(){this.selected=K.inArray(K(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var o,a,s,l=e.nodeType;if(e&&3!==l&&8!==l&&2!==l)return i&&K.isFunction(K.fn[n])?K(e)[n](r):"undefined"==typeof e.getAttribute?K.prop(e,n,r):(s=1!==l||!K.isXMLDoc(e),s&&(n=n.toLowerCase(),a=K.attrHooks[n]||(kt.test(n)?vt:yt)),r!==t?null===r?(K.removeAttr(e,n),void 0):a&&"set"in a&&s&&(o=a.set(e,r,n))!==t?o:(e.setAttribute(n,r+""),r):a&&"get"in a&&s&&null!==(o=a.get(e,n))?o:(o=e.getAttribute(n),null===o?t:o))},removeAttr:function(e,t){var n,r,i,o,a=0;if(t&&1===e.nodeType)for(r=t.split(tt);a<r.length;a++)i=r[a],i&&(n=K.propFix[i]||i,o=kt.test(i),o||K.attr(e,i,""),e.removeAttribute(Et?i:n),o&&n in e&&(e[n]=!1))},attrHooks:{type:{set:function(e,t){if(Tt.test(e.nodeName)&&e.parentNode)K.error("type property can't be changed");else if(!K.support.radioValue&&"radio"===t&&K.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return yt&&K.nodeName(e,"button")?yt.get(e,t):t in e?e.value:null},set:function(e,t,n){return yt&&K.nodeName(e,"button")?yt.set(e,t,n):(e.value=t,void 0)}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!K.isXMLDoc(e),a&&(n=K.propFix[n]||n,o=K.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):Nt.test(e.nodeName)||Ct.test(e.nodeName)&&e.href?0:t}}}}),vt={get:function(e,n){var r,i=K.prop(e,n);return i===!0||"boolean"!=typeof i&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?K.removeAttr(e,n):(r=K.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},Et||(bt={name:!0,id:!0,coords:!0},yt=K.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(bt[n]?""!==r.value:r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=R.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},K.each(["width","height"],function(e,t){K.attrHooks[t]=K.extend(K.attrHooks[t],{set:function(e,n){return""===n?(e.setAttribute(t,"auto"),n):void 0
}})}),K.attrHooks.contenteditable={get:yt.get,set:function(e,t,n){""===t&&(t="false"),yt.set(e,t,n)}}),K.support.hrefNormalized||K.each(["href","src","width","height"],function(e,n){K.attrHooks[n]=K.extend(K.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null===r?t:r}})}),K.support.style||(K.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),K.support.optSelected||(K.propHooks.selected=K.extend(K.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),K.support.enctype||(K.propFix.enctype="encoding"),K.support.checkOn||K.each(["radio","checkbox"],function(){K.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),K.each(["radio","checkbox"],function(){K.valHooks[this]=K.extend(K.valHooks[this],{set:function(e,t){return K.isArray(t)?e.checked=K.inArray(K(e).val(),t)>=0:void 0}})});var St=/^(?:textarea|input|select)$/i,At=/^([^\.]*|)(?:\.(.+)|)$/,jt=/(?:^|\s)hover(\.\S+|)\b/,Dt=/^key/,Lt=/^(?:mouse|contextmenu)|click/,Ht=/^(?:focusinfocus|focusoutblur)$/,Ft=function(e){return K.event.special.hover?e:e.replace(jt,"mouseenter$1 mouseleave$1")};K.event={add:function(e,n,r,i,o){var a,s,l,u,c,f,p,d,h,g,m;if(3!==e.nodeType&&8!==e.nodeType&&n&&r&&(a=K._data(e))){for(r.handler&&(h=r,r=h.handler,o=h.selector),r.guid||(r.guid=K.guid++),l=a.events,l||(a.events=l={}),s=a.handle,s||(a.handle=s=function(e){return"undefined"==typeof K||e&&K.event.triggered===e.type?t:K.event.dispatch.apply(s.elem,arguments)},s.elem=e),n=K.trim(Ft(n)).split(" "),u=0;u<n.length;u++)c=At.exec(n[u])||[],f=c[1],p=(c[2]||"").split(".").sort(),m=K.event.special[f]||{},f=(o?m.delegateType:m.bindType)||f,m=K.event.special[f]||{},d=K.extend({type:f,origType:c[1],data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&K.expr.match.needsContext.test(o),namespace:p.join(".")},h),g=l[f],g||(g=l[f]=[],g.delegateCount=0,m.setup&&m.setup.call(e,i,p,s)!==!1||(e.addEventListener?e.addEventListener(f,s,!1):e.attachEvent&&e.attachEvent("on"+f,s))),m.add&&(m.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),o?g.splice(g.delegateCount++,0,d):g.push(d),K.event.global[f]=!0;e=null}},global:{},remove:function(e,t,n,r,i){var o,a,s,l,u,c,f,p,d,h,g,m=K.hasData(e)&&K._data(e);if(m&&(p=m.events)){for(t=K.trim(Ft(t||"")).split(" "),o=0;o<t.length;o++)if(a=At.exec(t[o])||[],s=l=a[1],u=a[2],s){for(d=K.event.special[s]||{},s=(r?d.delegateType:d.bindType)||s,h=p[s]||[],c=h.length,u=u?new RegExp("(^|\\.)"+u.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null,f=0;f<h.length;f++)g=h[f],!i&&l!==g.origType||n&&n.guid!==g.guid||u&&!u.test(g.namespace)||r&&r!==g.selector&&("**"!==r||!g.selector)||(h.splice(f--,1),g.selector&&h.delegateCount--,d.remove&&d.remove.call(e,g));0===h.length&&c!==h.length&&(d.teardown&&d.teardown.call(e,u,m.handle)!==!1||K.removeEvent(e,s,m.handle),delete p[s])}else for(s in p)K.event.remove(e,s+t[o],n,r,!0);K.isEmptyObject(p)&&(delete m.handle,K.removeData(e,"events",!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,i,o){if(!i||3!==i.nodeType&&8!==i.nodeType){var a,s,l,u,c,f,p,d,h,g,m=n.type||n,y=[];if(!Ht.test(m+K.event.triggered)&&(m.indexOf("!")>=0&&(m=m.slice(0,-1),s=!0),m.indexOf(".")>=0&&(y=m.split("."),m=y.shift(),y.sort()),i&&!K.event.customEvent[m]||K.event.global[m]))if(n="object"==typeof n?n[K.expando]?n:new K.Event(m,n):new K.Event(m),n.type=m,n.isTrigger=!0,n.exclusive=s,n.namespace=y.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+y.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,f=m.indexOf(":")<0?"on"+m:"",i){if(n.result=t,n.target||(n.target=i),r=null!=r?K.makeArray(r):[],r.unshift(n),p=K.event.special[m]||{},!p.trigger||p.trigger.apply(i,r)!==!1){if(h=[[i,p.bindType||m]],!o&&!p.noBubble&&!K.isWindow(i)){for(g=p.delegateType||m,u=Ht.test(g+m)?i:i.parentNode,c=i;u;u=u.parentNode)h.push([u,g]),c=u;c===(i.ownerDocument||R)&&h.push([c.defaultView||c.parentWindow||e,g])}for(l=0;l<h.length&&!n.isPropagationStopped();l++)u=h[l][0],n.type=h[l][1],d=(K._data(u,"events")||{})[n.type]&&K._data(u,"handle"),d&&d.apply(u,r),d=f&&u[f],d&&K.acceptData(u)&&d.apply&&d.apply(u,r)===!1&&n.preventDefault();return n.type=m,o||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===m&&K.nodeName(i,"a")||!K.acceptData(i)||f&&i[m]&&("focus"!==m&&"blur"!==m||0!==n.target.offsetWidth)&&!K.isWindow(i)&&(c=i[f],c&&(i[f]=null),K.event.triggered=m,i[m](),K.event.triggered=t,c&&(i[f]=c)),n.result}}else{a=K.cache;for(l in a)a[l].events&&a[l].events[m]&&K.event.trigger(n,r,a[l].handle.elem,!0)}}},dispatch:function(n){n=K.event.fix(n||e.event);var r,i,o,a,s,l,u,c,f,p=(K._data(this,"events")||{})[n.type]||[],d=p.delegateCount,h=Y.call(arguments),g=!n.exclusive&&!n.namespace,m=K.event.special[n.type]||{},y=[];if(h[0]=n,n.delegateTarget=this,!m.preDispatch||m.preDispatch.call(this,n)!==!1){if(d&&(!n.button||"click"!==n.type))for(o=n.target;o!=this;o=o.parentNode||this)if(o.disabled!==!0||"click"!==n.type){for(s={},u=[],r=0;d>r;r++)c=p[r],f=c.selector,s[f]===t&&(s[f]=c.needsContext?K(f,this).index(o)>=0:K.find(f,this,null,[o]).length),s[f]&&u.push(c);u.length&&y.push({elem:o,matches:u})}for(p.length>d&&y.push({elem:this,matches:p.slice(d)}),r=0;r<y.length&&!n.isPropagationStopped();r++)for(l=y[r],n.currentTarget=l.elem,i=0;i<l.matches.length&&!n.isImmediatePropagationStopped();i++)c=l.matches[i],(g||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))&&(n.data=c.data,n.handleObj=c,a=((K.event.special[c.origType]||{}).handle||c.handler).apply(l.elem,h),a!==t&&(n.result=a,a===!1&&(n.preventDefault(),n.stopPropagation())));return m.postDispatch&&m.postDispatch.call(this,n),n.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,a=n.button,s=n.fromElement;return null==e.pageX&&null!=n.clientX&&(r=e.target.ownerDocument||R,i=r.documentElement,o=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),e.which||a===t||(e.which=1&a?1:2&a?3:4&a?2:0),e}},fix:function(e){if(e[K.expando])return e;var t,n,r=e,i=K.event.fixHooks[e.type]||{},o=i.props?this.props.concat(i.props):this.props;for(e=K.Event(r),t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||R),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,i.filter?i.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){K.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=K.extend(new K.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?K.event.trigger(i,null,t):K.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},K.event.handle=K.event.dispatch,K.removeEvent=R.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&("undefined"==typeof e[r]&&(e[r]=null),e.detachEvent(r,n))},K.Event=function(e,t){return this instanceof K.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?a:o):this.type=e,t&&K.extend(this,t),this.timeStamp=e&&e.timeStamp||K.now(),this[K.expando]=!0,void 0):new K.Event(e,t)},K.Event.prototype={preventDefault:function(){this.isDefaultPrevented=a;var e=this.originalEvent;e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=a;var e=this.originalEvent;e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=a,this.stopPropagation()},isDefaultPrevented:o,isPropagationStopped:o,isImmediatePropagationStopped:o},K.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){K.event.special[e]={delegateType:t,bindType:t,handle:function(e){{var n,r=this,i=e.relatedTarget,o=e.handleObj;o.selector}return(!i||i!==r&&!K.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),K.support.submitBubbles||(K.event.special.submit={setup:function(){return K.nodeName(this,"form")?!1:(K.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=K.nodeName(n,"input")||K.nodeName(n,"button")?n.form:t;r&&!K._data(r,"_submit_attached")&&(K.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),K._data(r,"_submit_attached",!0))}),void 0)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&K.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return K.nodeName(this,"form")?!1:(K.event.remove(this,"._submit"),void 0)}}),K.support.changeBubbles||(K.event.special.change={setup:function(){return St.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(K.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),K.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),K.event.simulate("change",this,e,!0)})),!1):(K.event.add(this,"beforeactivate._change",function(e){var t=e.target;St.test(t.nodeName)&&!K._data(t,"_change_attached")&&(K.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||K.event.simulate("change",this.parentNode,e,!0)}),K._data(t,"_change_attached",!0))}),void 0)},handle:function(e){var t=e.target;return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return K.event.remove(this,"._change"),!St.test(this.nodeName)}}),K.support.focusinBubbles||K.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){K.event.simulate(t,e.target,K.event.fix(e),!0)};K.event.special[t]={setup:function(){0===n++&&R.addEventListener(e,r,!0)},teardown:function(){0===--n&&R.removeEventListener(e,r,!0)}}}),K.fn.extend({on:function(e,n,r,i,a){var s,l;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(l in e)this.on(l,n,r,e[l],a);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=o;else if(!i)return this;return 1===a&&(s=i,i=function(e){return K().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=K.guid++)),this.each(function(){K.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,a;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,K(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(a in e)this.off(a,n,e[a]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=o),this.each(function(){K.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return K(this.context).on(e,this.selector,t,n),this},die:function(e,t){return K(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){K.event.trigger(e,t,this)})},triggerHandler:function(e,t){return this[0]?K.event.trigger(e,t,this[0],!0):void 0},toggle:function(e){var t=arguments,n=e.guid||K.guid++,r=0,i=function(n){var i=(K._data(this,"lastToggle"+e.guid)||0)%r;return K._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};for(i.guid=n;r<t.length;)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){K.fn[t]=function(e,n){return null==n&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Dt.test(t)&&(K.event.fixHooks[t]=K.event.keyHooks),Lt.test(t)&&(K.event.fixHooks[t]=K.event.mouseHooks)}),function(e,t){function n(e,t,n,r){n=n||[],t=t||L;var i,o,a,s,l=t.nodeType;if(!e||"string"!=typeof e)return n;if(1!==l&&9!==l)return[];if(a=w(t),!a&&!r&&(i=nt.exec(e)))if(s=i[1]){if(9===l){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&T(t,o)&&o.id===s)return n.push(o),n}else{if(i[2])return _.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((s=i[3])&&pt&&t.getElementsByClassName)return _.apply(n,q.call(t.getElementsByClassName(s),0)),n}return g(e.replace(Q,"$1"),t,n,r,a)}function r(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function i(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function o(e){return W(function(t){return t=+t,W(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function a(e,t,n){if(e===t)return n;for(var r=e.nextSibling;r;){if(r===t)return-1;r=r.nextSibling}return 1}function s(e,t){var r,i,o,a,s,l,u,c=$[j][e];if(c)return t?0:c.slice(0);for(s=e,l=[],u=b.preFilter;s;){(!r||(i=Z.exec(s)))&&(i&&(s=s.slice(i[0].length)),l.push(o=[])),r=!1,(i=et.exec(s))&&(o.push(r=new D(i.shift())),s=s.slice(r.length),r.type=i[0].replace(Q," "));for(a in b.filter)!(i=st[a].exec(s))||u[a]&&!(i=u[a](i,L,!0))||(o.push(r=new D(i.shift())),s=s.slice(r.length),r.type=a,r.matches=i);if(!r)break}return t?s.length:s?n.error(e):$(e,l).slice(0)}function l(e,t,n){var r=t.dir,i=n&&"parentNode"===t.dir,o=M++;return t.first?function(t,n,o){for(;t=t[r];)if(i||1===t.nodeType)return e(t,n,o)}:function(t,n,a){if(a){for(;t=t[r];)if((i||1===t.nodeType)&&e(t,n,a))return t}else for(var s,l=F+" "+o+" ",u=l+y;t=t[r];)if(i||1===t.nodeType){if((s=t[j])===u)return t.sizset;if("string"==typeof s&&0===s.indexOf(l)){if(t.sizset)return t}else{if(t[j]=u,e(t,n,a))return t.sizset=!0,t;t.sizset=!1}}}}function u(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function c(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function f(e,t,n,r,i,o){return r&&!r[j]&&(r=f(r)),i&&!i[j]&&(i=f(i,o)),W(function(o,a,s,l){if(!o||!i){var u,f,p,d=[],g=[],m=a.length,y=o||h(t||"*",s.nodeType?[s]:s,[],o),v=!e||!o&&t?y:c(y,d,e,s,l),b=n?i||(o?e:m||r)?[]:a:v;if(n&&n(v,b,s,l),r)for(p=c(b,g),r(p,[],s,l),u=p.length;u--;)(f=p[u])&&(b[g[u]]=!(v[g[u]]=f));if(o)for(u=e&&b.length;u--;)(f=b[u])&&(o[d[u]]=!(a[d[u]]=f));else b=c(b===a?b.splice(m,b.length):b),i?i(null,a,b,l):_.apply(a,b)}})}function p(e){for(var t,n,r,i=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,c=l(function(e){return e===t},a,!0),d=l(function(e){return B.call(t,e)>-1},a,!0),h=[function(e,n,r){return!o&&(r||n!==E)||((t=n).nodeType?c(e,n,r):d(e,n,r))}];i>s;s++)if(n=b.relative[e[s].type])h=[l(u(h),n)];else{if(n=b.filter[e[s].type].apply(null,e[s].matches),n[j]){for(r=++s;i>r&&!b.relative[e[r].type];r++);return f(s>1&&u(h),s>1&&e.slice(0,s-1).join("").replace(Q,"$1"),n,r>s&&p(e.slice(s,r)),i>r&&p(e=e.slice(r)),i>r&&e.join(""))}h.push(n)}return u(h)}function d(e,t){var r=t.length>0,i=e.length>0,o=function(a,s,l,u,f){var p,d,h,g=[],m=0,v="0",x=a&&[],w=null!=f,T=E,N=a||i&&b.find.TAG("*",f&&s.parentNode||s),C=F+=null==T?1:Math.E;for(w&&(E=s!==L&&s,y=o.el);null!=(p=N[v]);v++){if(i&&p){for(d=0;h=e[d];d++)if(h(p,s,l)){u.push(p);break}w&&(F=C,y=++o.el)}r&&((p=!h&&p)&&m--,a&&x.push(p))}if(m+=v,r&&v!==m){for(d=0;h=t[d];d++)h(x,g,s,l);if(a){if(m>0)for(;v--;)x[v]||g[v]||(g[v]=O.call(u));g=c(g)}_.apply(u,g),w&&!a&&g.length>0&&m+t.length>1&&n.uniqueSort(u)}return w&&(F=C,E=T),x};return o.el=0,r?W(o):o}function h(e,t,r,i){for(var o=0,a=t.length;a>o;o++)n(e,t[o],r,i);return r}function g(e,t,n,r,i){{var o,a,l,u,c,f=s(e);f.length}if(!r&&1===f.length){if(a=f[0]=f[0].slice(0),a.length>2&&"ID"===(l=a[0]).type&&9===t.nodeType&&!i&&b.relative[a[1].type]){if(t=b.find.ID(l.matches[0].replace(at,""),t,i)[0],!t)return n;e=e.slice(a.shift().length)}for(o=st.POS.test(e)?-1:a.length-1;o>=0&&(l=a[o],!b.relative[u=l.type]);o--)if((c=b.find[u])&&(r=c(l.matches[0].replace(at,""),rt.test(a[0].type)&&t.parentNode||t,i))){if(a.splice(o,1),e=r.length&&a.join(""),!e)return _.apply(n,q.call(r,0)),n;break}}return N(e,f)(r,t,i,n,rt.test(e)),n}function m(){}var y,v,b,x,w,T,N,C,k,E,S=!0,A="undefined",j=("sizcache"+Math.random()).replace(".",""),D=String,L=e.document,H=L.documentElement,F=0,M=0,O=[].pop,_=[].push,q=[].slice,B=[].indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},W=function(e,t){return e[j]=null==t||t,e},P=function(){var e={},t=[];return W(function(n,r){return t.push(n)>b.cacheLength&&delete e[t.shift()],e[n]=r},e)},R=P(),$=P(),I=P(),z="[\\x20\\t\\r\\n\\f]",X="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",U=X.replace("w","w#"),Y="([*^$|!~]?=)",J="\\["+z+"*("+X+")"+z+"*(?:"+Y+z+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+U+")|)|)"+z+"*\\]",V=":("+X+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+J+")|[^:]|\\\\.)*|.*))\\)|)",G=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+z+"*((?:-\\d)?\\d*)"+z+"*\\)|)(?=[^-]|$)",Q=new RegExp("^"+z+"+|((?:^|[^\\\\])(?:\\\\.)*)"+z+"+$","g"),Z=new RegExp("^"+z+"*,"+z+"*"),et=new RegExp("^"+z+"*([\\x20\\t\\r\\n\\f>+~])"+z+"*"),tt=new RegExp(V),nt=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,rt=/[\x20\t\r\n\f]*[+~]/,it=/h\d/i,ot=/input|select|textarea|button/i,at=/\\(?!\\)/g,st={ID:new RegExp("^#("+X+")"),CLASS:new RegExp("^\\.("+X+")"),NAME:new RegExp("^\\[name=['\"]?("+X+")['\"]?\\]"),TAG:new RegExp("^("+X.replace("w","w*")+")"),ATTR:new RegExp("^"+J),PSEUDO:new RegExp("^"+V),POS:new RegExp(G,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+z+"*(even|odd|(([+-]|)(\\d*)n|)"+z+"*(?:([+-]|)"+z+"*(\\d+)|))"+z+"*\\)|)","i"),needsContext:new RegExp("^"+z+"*[>+~]|"+G,"i")},lt=function(e){var t=L.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},ut=lt(function(e){return e.appendChild(L.createComment("")),!e.getElementsByTagName("*").length}),ct=lt(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")}),ft=lt(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),pt=lt(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),dt=lt(function(e){e.id=j+0,e.innerHTML="<a name='"+j+"'></a><div name='"+j+"'></div>",H.insertBefore(e,H.firstChild);var t=L.getElementsByName&&L.getElementsByName(j).length===2+L.getElementsByName(j+0).length;return v=!L.getElementById(j),H.removeChild(e),t});try{q.call(H.childNodes,0)[0].nodeType}catch(ht){q=function(e){for(var t,n=[];t=this[e];e++)n.push(t);return n}}n.matches=function(e,t){return n(e,null,null,t)},n.matchesSelector=function(e,t){return n(t,null,null,[e]).length>0},x=n.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=x(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=x(t);return n},w=n.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},T=n.contains=H.contains?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&1===r.nodeType&&n.contains&&n.contains(r))}:H.compareDocumentPosition?function(e,t){return t&&!!(16&e.compareDocumentPosition(t))}:function(e,t){for(;t=t.parentNode;)if(t===e)return!0;return!1},n.attr=function(e,t){var n,r=w(e);return r||(t=t.toLowerCase()),(n=b.attrHandle[t])?n(e):r||ft?e.getAttribute(t):(n=e.getAttributeNode(t),n?"boolean"==typeof e[t]?e[t]?t:null:n.specified?n.value:null:null)},b=n.selectors={cacheLength:50,createPseudo:W,match:st,attrHandle:ct?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:v?function(e,t,n){if(typeof t.getElementById!==A&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==A&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==A&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:ut?function(e,t){return typeof t.getElementsByTagName!==A?t.getElementsByTagName(e):void 0}:function(e,t){var n=t.getElementsByTagName(e);if("*"===e){for(var r,i=[],o=0;r=n[o];o++)1===r.nodeType&&i.push(r);return i}return n},NAME:dt&&function(e,t){return typeof t.getElementsByName!==A?t.getElementsByName(name):void 0},CLASS:pt&&function(e,t,n){return typeof t.getElementsByClassName===A||n?void 0:t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(at,""),e[3]=(e[4]||e[5]||"").replace(at,""),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1]?(e[2]||n.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*("even"===e[2]||"odd"===e[2])),e[4]=+(e[6]+e[7]||"odd"===e[2])):e[2]&&n.error(e[0]),e},PSEUDO:function(e){var t,n;return st.CHILD.test(e[0])?null:(e[3]?e[2]=e[3]:(t=e[4])&&(tt.test(t)&&(n=s(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t),e.slice(0,3))}},filter:{ID:v?function(e){return e=e.replace(at,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace(at,""),function(t){var n=typeof t.getAttributeNode!==A&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(at,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=R[j][e];return t||(t=R(e,new RegExp("(^|"+z+")"+e+"("+z+"|$)"))),function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")}},ATTR:function(e,t,r){return function(i){var o=n.attr(i,e);return null==o?"!="===t:t?(o+="","="===t?o===r:"!="===t?o!==r:"^="===t?r&&0===o.indexOf(r):"*="===t?r&&o.indexOf(r)>-1:"$="===t?r&&o.substr(o.length-r.length)===r:"~="===t?(" "+o+" ").indexOf(r)>-1:"|="===t?o===r||o.substr(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r){return"nth"===e?function(e){var t,i,o=e.parentNode;if(1===n&&0===r)return!0;if(o)for(i=0,t=o.firstChild;t&&(1!==t.nodeType||(i++,e!==t));t=t.nextSibling);return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":for(;n=n.previousSibling;)if(1===n.nodeType)return!1;if("first"===e)return!0;n=t;case"last":for(;n=n.nextSibling;)if(1===n.nodeType)return!1;return!0}}},PSEUDO:function(e,t){var r,i=b.pseudos[e]||b.setFilters[e.toLowerCase()]||n.error("unsupported pseudo: "+e);return i[j]?i(t):i.length>1?(r=[e,e,"",t],b.setFilters.hasOwnProperty(e.toLowerCase())?W(function(e,n){for(var r,o=i(e,t),a=o.length;a--;)r=B.call(e,o[a]),e[r]=!(n[r]=o[a])}):function(e){return i(e,0,r)}):i}},pseudos:{not:W(function(e){var t=[],n=[],r=N(e.replace(Q,"$1"));return r[j]?W(function(e,t,n,i){for(var o,a=r(e,null,i,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:W(function(e){return function(t){return n(e,t).length>0}}),contains:W(function(e){return function(t){return(t.textContent||t.innerText||x(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!b.pseudos.empty(e)},empty:function(e){var t;for(e=e.firstChild;e;){if(e.nodeName>"@"||3===(t=e.nodeType)||4===t)return!1;e=e.nextSibling}return!0},header:function(e){return it.test(e.nodeName)},text:function(e){var t,n;return"input"===e.nodeName.toLowerCase()&&"text"===(t=e.type)&&(null==(n=e.getAttribute("type"))||n.toLowerCase()===t)},radio:r("radio"),checkbox:r("checkbox"),file:r("file"),password:r("password"),image:r("image"),submit:i("submit"),reset:i("reset"),button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},input:function(e){return ot.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return!(e!==t.activeElement||t.hasFocus&&!t.hasFocus()||!e.type&&!e.href)},active:function(e){return e===e.ownerDocument.activeElement},first:o(function(){return[0]}),last:o(function(e,t){return[t-1]}),eq:o(function(e,t,n){return[0>n?n+t:n]}),even:o(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:o(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:o(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:o(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},C=H.compareDocumentPosition?function(e,t){return e===t?(k=!0,0):(e.compareDocumentPosition&&t.compareDocumentPosition?4&e.compareDocumentPosition(t):e.compareDocumentPosition)?-1:1}:function(e,t){if(e===t)return k=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],o=[],s=e.parentNode,l=t.parentNode,u=s;if(s===l)return a(e,t);if(!s)return-1;if(!l)return 1;for(;u;)i.unshift(u),u=u.parentNode;for(u=l;u;)o.unshift(u),u=u.parentNode;n=i.length,r=o.length;for(var c=0;n>c&&r>c;c++)if(i[c]!==o[c])return a(i[c],o[c]);return c===n?a(e,o[c],-1):a(i[c],t,1)},[0,0].sort(C),S=!k,n.uniqueSort=function(e){var t,n=1;if(k=S,e.sort(C),k)for(;t=e[n];n++)t===e[n-1]&&e.splice(n--,1);return e},n.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},N=n.compile=function(e,t){var n,r=[],i=[],o=I[j][e];if(!o){for(t||(t=s(e)),n=t.length;n--;)o=p(t[n]),o[j]?r.push(o):i.push(o);o=I(e,d(i,r))}return o},L.querySelectorAll&&!function(){var e,t=g,r=/'|\\/g,i=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,o=[":focus"],a=[":active",":focus"],l=H.matchesSelector||H.mozMatchesSelector||H.webkitMatchesSelector||H.oMatchesSelector||H.msMatchesSelector;lt(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||o.push("\\["+z+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||o.push(":checked")}),lt(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&o.push("[*^$]="+z+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||o.push(":enabled",":disabled")}),o=new RegExp(o.join("|")),g=function(e,n,i,a,l){if(!(a||l||o&&o.test(e))){var u,c,f=!0,p=j,d=n,h=9===n.nodeType&&e;if(1===n.nodeType&&"object"!==n.nodeName.toLowerCase()){for(u=s(e),(f=n.getAttribute("id"))?p=f.replace(r,"\\$&"):n.setAttribute("id",p),p="[id='"+p+"'] ",c=u.length;c--;)u[c]=p+u[c].join("");d=rt.test(e)&&n.parentNode||n,h=u.join(",")}if(h)try{return _.apply(i,q.call(d.querySelectorAll(h),0)),i}catch(g){}finally{f||n.removeAttribute("id")}}return t(e,n,i,a,l)},l&&(lt(function(t){e=l.call(t,"div");try{l.call(t,"[test!='']:sizzle"),a.push("!=",V)}catch(n){}}),a=new RegExp(a.join("|")),n.matchesSelector=function(t,r){if(r=r.replace(i,"='$1']"),!(w(t)||a.test(r)||o&&o.test(r)))try{var s=l.call(t,r);if(s||e||t.document&&11!==t.document.nodeType)return s}catch(u){}return n(r,null,null,[t]).length>0})}(),b.pseudos.nth=b.pseudos.eq,b.filters=m.prototype=b.pseudos,b.setFilters=new m,n.attr=K.attr,K.find=n,K.expr=n.selectors,K.expr[":"]=K.expr.pseudos,K.unique=n.uniqueSort,K.text=n.getText,K.isXMLDoc=n.isXML,K.contains=n.contains}(e);var Mt=/Until$/,Ot=/^(?:parents|prev(?:Until|All))/,_t=/^.[^:#\[\.,]*$/,qt=K.expr.match.needsContext,Bt={children:!0,contents:!0,next:!0,prev:!0};K.fn.extend({find:function(e){var t,n,r,i,o,a,s=this;if("string"!=typeof e)return K(e).filter(function(){for(t=0,n=s.length;n>t;t++)if(K.contains(s[t],this))return!0});for(a=this.pushStack("","find",e),t=0,n=this.length;n>t;t++)if(r=a.length,K.find(e,this[t],a),t>0)for(i=r;i<a.length;i++)for(o=0;r>o;o++)if(a[o]===a[i]){a.splice(i--,1);break}return a},has:function(e){var t,n=K(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(K.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(u(this,e,!1),"not",e)},filter:function(e){return this.pushStack(u(this,e,!0),"filter",e)},is:function(e){return!!e&&("string"==typeof e?qt.test(e)?K(e,this.context).index(this[0])>=0:K.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=qt.test(e)||"string"!=typeof e?K(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(a?a.index(n)>-1:K.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}return o=o.length>1?K.unique(o):o,this.pushStack(o,"closest",e)},index:function(e){return e?"string"==typeof e?K.inArray(this[0],K(e)):K.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n="string"==typeof e?K(e,t):K.makeArray(e&&e.nodeType?[e]:e),r=K.merge(this.get(),n);return this.pushStack(s(n[0])||s(r[0])?r:K.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),K.fn.andSelf=K.fn.addBack,K.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return K.dir(e,"parentNode")},parentsUntil:function(e,t,n){return K.dir(e,"parentNode",n)},next:function(e){return l(e,"nextSibling")},prev:function(e){return l(e,"previousSibling")},nextAll:function(e){return K.dir(e,"nextSibling")},prevAll:function(e){return K.dir(e,"previousSibling")},nextUntil:function(e,t,n){return K.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return K.dir(e,"previousSibling",n)},siblings:function(e){return K.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return K.sibling(e.firstChild)},contents:function(e){return K.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:K.merge([],e.childNodes)}},function(e,t){K.fn[e]=function(n,r){var i=K.map(this,t,n);return Mt.test(e)||(r=n),r&&"string"==typeof r&&(i=K.filter(r,i)),i=this.length>1&&!Bt[e]?K.unique(i):i,this.length>1&&Ot.test(e)&&(i=i.reverse()),this.pushStack(i,e,Y.call(arguments).join(","))}}),K.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?K.find.matchesSelector(t[0],e)?[t[0]]:[]:K.find.matches(e,t)},dir:function(e,n,r){for(var i=[],o=e[n];o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!K(o).is(r));)1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var Wt="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Pt=/ jQuery\d+="(?:null|\d+)"/g,Rt=/^\s+/,$t=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,It=/<([\w:]+)/,zt=/<tbody/i,Xt=/<|&#?\w+;/,Ut=/<(?:script|style|link)/i,Yt=/<(?:script|object|embed|option|style)/i,Jt=new RegExp("<(?:"+Wt+")[\\s/>]","i"),Vt=/^(?:checkbox|radio)$/,Gt=/checked\s*(?:[^=]|=\s*.checked.)/i,Qt=/\/(java|ecma)script/i,Kt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Zt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},en=c(R),tn=en.appendChild(R.createElement("div"));
Zt.optgroup=Zt.option,Zt.tbody=Zt.tfoot=Zt.colgroup=Zt.caption=Zt.thead,Zt.th=Zt.td,K.support.htmlSerialize||(Zt._default=[1,"X<div>","</div>"]),K.fn.extend({text:function(e){return K.access(this,function(e){return e===t?K.text(this):this.empty().append((this[0]&&this[0].ownerDocument||R).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(K.isFunction(e))return this.each(function(t){K(this).wrapAll(e.call(this,t))});if(this[0]){var t=K(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return K.isFunction(e)?this.each(function(t){K(this).wrapInner(e.call(this,t))}):this.each(function(){var t=K(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=K.isFunction(e);return this.each(function(n){K(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){K.nodeName(this,"body")||K(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!s(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=K.clean(arguments);return this.pushStack(K.merge(e,this),"before",this.selector)}},after:function(){if(!s(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=K.clean(arguments);return this.pushStack(K.merge(this,e),"after",this.selector)}},remove:function(e,t){for(var n,r=0;null!=(n=this[r]);r++)(!e||K.filter(e,[n]).length)&&(t||1!==n.nodeType||(K.cleanData(n.getElementsByTagName("*")),K.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)for(1===e.nodeType&&K.cleanData(e.getElementsByTagName("*"));e.firstChild;)e.removeChild(e.firstChild);return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return K.clone(this,e,t)})},html:function(e){return K.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(Pt,""):t;if(!("string"!=typeof e||Ut.test(e)||!K.support.htmlSerialize&&Jt.test(e)||!K.support.leadingWhitespace&&Rt.test(e)||Zt[(It.exec(e)||["",""])[1].toLowerCase()])){e=e.replace($t,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(K.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return s(this[0])?this.length?this.pushStack(K(K.isFunction(e)?e():e),"replaceWith",e):this:K.isFunction(e)?this.each(function(t){var n=K(this),r=n.html();n.replaceWith(e.call(this,t,r))}):("string"!=typeof e&&(e=K(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;K(this).remove(),t?K(t).before(e):K(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,o,a,s,l=0,u=e[0],c=[],p=this.length;if(!K.support.checkClone&&p>1&&"string"==typeof u&&Gt.test(u))return this.each(function(){K(this).domManip(e,n,r)});if(K.isFunction(u))return this.each(function(i){var o=K(this);e[0]=u.call(this,i,n?o.html():t),o.domManip(e,n,r)});if(this[0]){if(i=K.buildFragment(e,this,c),a=i.fragment,o=a.firstChild,1===a.childNodes.length&&(a=o),o)for(n=n&&K.nodeName(o,"tr"),s=i.cacheable||p-1;p>l;l++)r.call(n&&K.nodeName(this[l],"table")?f(this[l],"tbody"):this[l],l===s?a:K.clone(a,!0,!0));a=o=null,c.length&&K.each(c,function(e,t){t.src?K.ajax?K.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):K.error("no ajax"):K.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Kt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),K.buildFragment=function(e,n,r){var i,o,a,s=e[0];return n=n||R,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,!(1===e.length&&"string"==typeof s&&s.length<512&&n===R&&"<"===s.charAt(0))||Yt.test(s)||!K.support.checkClone&&Gt.test(s)||!K.support.html5Clone&&Jt.test(s)||(o=!0,i=K.fragments[s],a=i!==t),i||(i=n.createDocumentFragment(),K.clean(e,n,i,r),o&&(K.fragments[s]=a&&i)),{fragment:i,cacheable:o}},K.fragments={},K.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){K.fn[e]=function(n){var r,i=0,o=[],a=K(n),s=a.length,l=1===this.length&&this[0].parentNode;if((null==l||l&&11===l.nodeType&&1===l.childNodes.length)&&1===s)return a[t](this[0]),this;for(;s>i;i++)r=(i>0?this.clone(!0):this).get(),K(a[i])[t](r),o=o.concat(r);return this.pushStack(o,e,a.selector)}}),K.extend({clone:function(e,t,n){var r,i,o,a;if(K.support.html5Clone||K.isXMLDoc(e)||!Jt.test("<"+e.nodeName+">")?a=e.cloneNode(!0):(tn.innerHTML=e.outerHTML,tn.removeChild(a=tn.firstChild)),!(K.support.noCloneEvent&&K.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||K.isXMLDoc(e)))for(d(e,a),r=h(e),i=h(a),o=0;r[o];++o)i[o]&&d(r[o],i[o]);if(t&&(p(e,a),n))for(r=h(e),i=h(a),o=0;r[o];++o)p(r[o],i[o]);return r=i=null,a},clean:function(e,t,n,r){var i,o,a,s,l,u,f,p,d,h,m,y=t===R&&en,v=[];for(t&&"undefined"!=typeof t.createDocumentFragment||(t=R),i=0;null!=(a=e[i]);i++)if("number"==typeof a&&(a+=""),a){if("string"==typeof a)if(Xt.test(a)){for(y=y||c(t),f=t.createElement("div"),y.appendChild(f),a=a.replace($t,"<$1></$2>"),s=(It.exec(a)||["",""])[1].toLowerCase(),l=Zt[s]||Zt._default,u=l[0],f.innerHTML=l[1]+a+l[2];u--;)f=f.lastChild;if(!K.support.tbody)for(p=zt.test(a),d="table"!==s||p?"<table>"!==l[1]||p?[]:f.childNodes:f.firstChild&&f.firstChild.childNodes,o=d.length-1;o>=0;--o)K.nodeName(d[o],"tbody")&&!d[o].childNodes.length&&d[o].parentNode.removeChild(d[o]);!K.support.leadingWhitespace&&Rt.test(a)&&f.insertBefore(t.createTextNode(Rt.exec(a)[0]),f.firstChild),a=f.childNodes,f.parentNode.removeChild(f)}else a=t.createTextNode(a);a.nodeType?v.push(a):K.merge(v,a)}if(f&&(a=f=y=null),!K.support.appendChecked)for(i=0;null!=(a=v[i]);i++)K.nodeName(a,"input")?g(a):"undefined"!=typeof a.getElementsByTagName&&K.grep(a.getElementsByTagName("input"),g);if(n)for(h=function(e){return!e.type||Qt.test(e.type)?r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e):void 0},i=0;null!=(a=v[i]);i++)K.nodeName(a,"script")&&h(a)||(n.appendChild(a),"undefined"!=typeof a.getElementsByTagName&&(m=K.grep(K.merge([],a.getElementsByTagName("script")),h),v.splice.apply(v,[i+1,0].concat(m)),i+=m.length));return v},cleanData:function(e,t){for(var n,r,i,o,a=0,s=K.expando,l=K.cache,u=K.support.deleteExpando,c=K.event.special;null!=(i=e[a]);a++)if((t||K.acceptData(i))&&(r=i[s],n=r&&l[r])){if(n.events)for(o in n.events)c[o]?K.event.remove(i,o):K.removeEvent(i,o,n.handle);l[r]&&(delete l[r],u?delete i[s]:i.removeAttribute?i.removeAttribute(s):i[s]=null,K.deletedIds.push(r))}}}),function(){var e,t;K.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=K.uaMatch(I.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),K.browser=t,K.sub=function(){function e(t,n){return new e.fn.init(t,n)}K.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(n,r){return r&&r instanceof K&&!(r instanceof e)&&(r=e(r)),K.fn.init.call(this,n,r,t)},e.fn.init.prototype=e.fn;var t=e(R);return e}}();var nn,rn,on,an=/alpha\([^)]*\)/i,sn=/opacity=([^)]*)/,ln=/^(top|right|bottom|left)$/,un=/^(none|table(?!-c[ea]).+)/,cn=/^margin/,fn=new RegExp("^("+Z+")(.*)$","i"),pn=new RegExp("^("+Z+")(?!px)[a-z%]+$","i"),dn=new RegExp("^([-+])=("+Z+")","i"),hn={},gn={position:"absolute",visibility:"hidden",display:"block"},mn={letterSpacing:0,fontWeight:400},yn=["Top","Right","Bottom","Left"],vn=["Webkit","O","Moz","ms"],bn=K.fn.toggle;K.fn.extend({css:function(e,n){return K.access(this,function(e,n,r){return r!==t?K.style(e,n,r):K.css(e,n)},e,n,arguments.length>1)},show:function(){return v(this,!0)},hide:function(){return v(this)},toggle:function(e,t){var n="boolean"==typeof e;return K.isFunction(e)&&K.isFunction(t)?bn.apply(this,arguments):this.each(function(){(n?e:y(this))?K(this).show():K(this).hide()})}}),K.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=nn(e,"opacity");return""===n?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":K.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=K.camelCase(n),u=e.style;if(n=K.cssProps[l]||(K.cssProps[l]=m(u,l)),s=K.cssHooks[n]||K.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=dn.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(K.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||K.cssNumber[l]||(r+="px"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=K.camelCase(n);return n=K.cssProps[l]||(K.cssProps[l]=m(e.style,l)),s=K.cssHooks[n]||K.cssHooks[l],s&&"get"in s&&(o=s.get(e,!0,i)),o===t&&(o=nn(e,n)),"normal"===o&&n in mn&&(o=mn[n]),r||i!==t?(a=parseFloat(o),r||K.isNumeric(a)?a||0:o):o},swap:function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=o[i];return r}}),e.getComputedStyle?nn=function(t,n){var r,i,o,a,s=e.getComputedStyle(t,null),l=t.style;return s&&(r=s[n],""!==r||K.contains(t.ownerDocument,t)||(r=K.style(t,n)),pn.test(r)&&cn.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=r,r=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),r}:R.documentElement.currentStyle&&(nn=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],o=e.style;return null==i&&o&&o[t]&&(i=o[t]),pn.test(i)&&!ln.test(t)&&(n=o.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),o.left="fontSize"===t?"1em":i,i=o.pixelLeft+"px",o.left=n,r&&(e.runtimeStyle.left=r)),""===i?"auto":i}),K.each(["height","width"],function(e,t){K.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&un.test(nn(e,"display"))?K.swap(e,gn,function(){return w(e,t,r)}):w(e,t,r):void 0},set:function(e,n,r){return b(e,n,r?x(e,t,r,K.support.boxSizing&&"border-box"===K.css(e,"boxSizing")):0)}}}),K.support.opacity||(K.cssHooks.opacity={get:function(e,t){return sn.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=K.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,t>=1&&""===K.trim(o.replace(an,""))&&n.removeAttribute&&(n.removeAttribute("filter"),r&&!r.filter)||(n.filter=an.test(o)?o.replace(an,i):o+" "+i)}}),K(function(){K.support.reliableMarginRight||(K.cssHooks.marginRight={get:function(e,t){return K.swap(e,{display:"inline-block"},function(){return t?nn(e,"marginRight"):void 0})}}),!K.support.pixelPosition&&K.fn.position&&K.each(["top","left"],function(e,t){K.cssHooks[t]={get:function(e,n){if(n){var r=nn(e,t);return pn.test(r)?K(e).position()[t]+"px":r}}}})}),K.expr&&K.expr.filters&&(K.expr.filters.hidden=function(e){return 0===e.offsetWidth&&0===e.offsetHeight||!K.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||nn(e,"display"))},K.expr.filters.visible=function(e){return!K.expr.filters.hidden(e)}),K.each({margin:"",padding:"",border:"Width"},function(e,t){K.cssHooks[e+t]={expand:function(n){var r,i="string"==typeof n?n.split(" "):[n],o={};for(r=0;4>r;r++)o[e+yn[r]+t]=i[r]||i[r-2]||i[0];return o}},cn.test(e)||(K.cssHooks[e+t].set=b)});var xn=/%20/g,wn=/\[\]$/,Tn=/\r?\n/g,Nn=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Cn=/^(?:select|textarea)/i;K.fn.extend({serialize:function(){return K.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?K.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||Cn.test(this.nodeName)||Nn.test(this.type))}).map(function(e,t){var n=K(this).val();return null==n?null:K.isArray(n)?K.map(n,function(e){return{name:t.name,value:e.replace(Tn,"\r\n")}}):{name:t.name,value:n.replace(Tn,"\r\n")}}).get()}}),K.param=function(e,n){var r,i=[],o=function(e,t){t=K.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=K.ajaxSettings&&K.ajaxSettings.traditional),K.isArray(e)||e.jquery&&!K.isPlainObject(e))K.each(e,function(){o(this.name,this.value)});else for(r in e)N(r,e[r],n,o);return i.join("&").replace(xn,"+")};var kn,En,Sn=/#.*$/,An=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,jn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Dn=/^(?:GET|HEAD)$/,Ln=/^\/\//,Hn=/\?/,Fn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Mn=/([?&])_=[^&]*/,On=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,_n=K.fn.load,qn={},Bn={},Wn=["*/"]+["*"];try{En=$.href}catch(Pn){En=R.createElement("a"),En.href="",En=En.href}kn=On.exec(En.toLowerCase())||[],K.fn.load=function(e,n,r){if("string"!=typeof e&&_n)return _n.apply(this,arguments);if(!this.length)return this;var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),K.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(o="POST"),K.ajax({url:e,type:o,dataType:"html",data:n,complete:function(e,t){r&&s.each(r,a||[e.responseText,t,e])}}).done(function(e){a=arguments,s.html(i?K("<div>").append(e.replace(Fn,"")).find(i):e)}),this},K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){K.fn[t]=function(e){return this.on(t,e)}}),K.each(["get","post"],function(e,n){K[n]=function(e,r,i,o){return K.isFunction(r)&&(o=o||i,i=r,r=t),K.ajax({type:n,url:e,data:r,success:i,dataType:o})}}),K.extend({getScript:function(e,n){return K.get(e,t,n,"script")},getJSON:function(e,t,n){return K.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?E(e,K.ajaxSettings):(t=e,e=K.ajaxSettings),E(e,t),e},ajaxSettings:{url:En,isLocal:jn.test(kn[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Wn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":K.parseJSON,"text xml":K.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:C(qn),ajaxTransport:C(Bn),ajax:function(e,n){function r(e,n,r,a){var u,f,v,b,w,N=n;2!==x&&(x=2,l&&clearTimeout(l),s=t,o=a||"",T.readyState=e>0?4:0,r&&(b=S(p,T,r)),e>=200&&300>e||304===e?(p.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(K.lastModified[i]=w),w=T.getResponseHeader("Etag"),w&&(K.etag[i]=w)),304===e?(N="notmodified",u=!0):(u=A(p,b),N=u.state,f=u.data,v=u.error,u=!v)):(v=N,(!N||e)&&(N="error",0>e&&(e=0))),T.status=e,T.statusText=(n||N)+"",u?g.resolveWith(d,[f,N,T]):g.rejectWith(d,[T,N,v]),T.statusCode(y),y=t,c&&h.trigger("ajax"+(u?"Success":"Error"),[T,p,u?f:v]),m.fireWith(d,[T,N]),c&&(h.trigger("ajaxComplete",[T,p]),--K.active||K.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var i,o,a,s,l,u,c,f,p=K.ajaxSetup({},n),d=p.context||p,h=d!==p&&(d.nodeType||d instanceof K)?K(d):K.event,g=K.Deferred(),m=K.Callbacks("once memory"),y=p.statusCode||{},v={},b={},x=0,w="canceled",T={readyState:0,setRequestHeader:function(e,t){if(!x){var n=e.toLowerCase();e=b[n]=b[n]||e,v[e]=t}return this},getAllResponseHeaders:function(){return 2===x?o:null},getResponseHeader:function(e){var n;if(2===x){if(!a)for(a={};n=An.exec(o);)a[n[1].toLowerCase()]=n[2];n=a[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return x||(p.mimeType=e),this},abort:function(e){return e=e||w,s&&s.abort(e),r(0,e),this}};if(g.promise(T),T.success=T.done,T.error=T.fail,T.complete=m.add,T.statusCode=function(e){if(e){var t;if(2>x)for(t in e)y[t]=[y[t],e[t]];else t=e[T.status],T.always(t)}return this},p.url=((e||p.url)+"").replace(Sn,"").replace(Ln,kn[1]+"//"),p.dataTypes=K.trim(p.dataType||"*").toLowerCase().split(tt),null==p.crossDomain&&(u=On.exec(p.url.toLowerCase())||!1,p.crossDomain=u&&u.join(":")+(u[3]?"":"http:"===u[1]?80:443)!==kn.join(":")+(kn[3]?"":"http:"===kn[1]?80:443)),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=K.param(p.data,p.traditional)),k(qn,p,n,T),2===x)return T;if(c=p.global,p.type=p.type.toUpperCase(),p.hasContent=!Dn.test(p.type),c&&0===K.active++&&K.event.trigger("ajaxStart"),!p.hasContent&&(p.data&&(p.url+=(Hn.test(p.url)?"&":"?")+p.data,delete p.data),i=p.url,p.cache===!1)){var N=K.now(),C=p.url.replace(Mn,"$1_="+N);p.url=C+(C===p.url?(Hn.test(p.url)?"&":"?")+"_="+N:"")}(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&T.setRequestHeader("Content-Type",p.contentType),p.ifModified&&(i=i||p.url,K.lastModified[i]&&T.setRequestHeader("If-Modified-Since",K.lastModified[i]),K.etag[i]&&T.setRequestHeader("If-None-Match",K.etag[i])),T.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Wn+"; q=0.01":""):p.accepts["*"]);for(f in p.headers)T.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(p.beforeSend.call(d,T,p)===!1||2===x))return T.abort();w="abort";for(f in{success:1,error:1,complete:1})T[f](p[f]);if(s=k(Bn,p,n,T)){T.readyState=1,c&&h.trigger("ajaxSend",[T,p]),p.async&&p.timeout>0&&(l=setTimeout(function(){T.abort("timeout")},p.timeout));try{x=1,s.send(v,r)}catch(E){if(!(2>x))throw E;r(-1,E)}}else r(-1,"No Transport");return T},active:0,lastModified:{},etag:{}});var Rn=[],$n=/\?/,In=/(=)\?(?=&|$)|\?\?/,zn=K.now();K.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Rn.pop()||K.expando+"_"+zn++;return this[e]=!0,e}}),K.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.data,u=n.url,c=n.jsonp!==!1,f=c&&In.test(u),p=c&&!f&&"string"==typeof l&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&In.test(l);return"jsonp"===n.dataTypes[0]||f||p?(o=n.jsonpCallback=K.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,a=e[o],f?n.url=u.replace(In,"$1"+o):p?n.data=l.replace(In,"$1"+o):c&&(n.url+=($n.test(u)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||K.error(o+" was not called"),s[0]},n.dataTypes[0]="json",e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Rn.push(o)),s&&K.isFunction(a)&&a(s[0]),s=a=t}),"script"):void 0}),K.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return K.globalEval(e),e}}}),K.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),K.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=R.head||R.getElementsByTagName("head")[0]||R.documentElement;return{send:function(i,o){n=R.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){(i||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Xn,Un=e.ActiveXObject?function(){for(var e in Xn)Xn[e](0,1)}:!1,Yn=0;K.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&j()||D()}:j,function(e){K.extend(K.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(K.ajaxSettings.xhr()),K.support.ajax&&K.ajaxTransport(function(n){if(!n.crossDomain||K.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,f,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=K.noop,Un&&delete Xn[a]),i)4!==l.readyState&&l.abort();else{s=l.status,c=l.getAllResponseHeaders(),f={},p=l.responseXML,p&&p.documentElement&&(f.xml=p);try{f.text=l.responseText}catch(e){}try{u=l.statusText}catch(d){u=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(h){i||o(-1,h)}f&&o(s,u,f,c)},n.async?4===l.readyState?setTimeout(r,0):(a=++Yn,Un&&(Xn||(Xn={},K(e).unload(Un)),Xn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var Jn,Vn,Gn=/^(?:toggle|show|hide)$/,Qn=new RegExp("^(?:([-+])=|)("+Z+")([a-z%]*)$","i"),Kn=/queueHooks$/,Zn=[O],er={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Qn.exec(t),a=i.cur(),s=+a||0,l=1,u=20;if(o){if(n=+o[2],r=o[3]||(K.cssNumber[e]?"":"px"),"px"!==r&&s){s=K.css(i.elem,e,!0)||n||1;do l=l||".5",s/=l,K.style(i.elem,e,s+r);while(l!==(l=i.cur()/a)&&1!==l&&--u)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};K.Animation=K.extend(F,{tweener:function(e,t){K.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],er[n]=er[n]||[],er[n].unshift(t)},prefilter:function(e,t){t?Zn.unshift(e):Zn.push(e)}}),K.Tween=_,_.prototype={constructor:_,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(K.cssNumber[n]?"":"px")},cur:function(){var e=_.propHooks[this.prop];return e&&e.get?e.get(this):_.propHooks._default.get(this)},run:function(e){var t,n=_.propHooks[this.prop];return this.pos=t=this.options.duration?K.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):_.propHooks._default.set(this),this}},_.prototype.init.prototype=_.prototype,_.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=K.css(e.elem,e.prop,!1,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){K.fx.step[e.prop]?K.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[K.cssProps[e.prop]]||K.cssHooks[e.prop])?K.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},_.propHooks.scrollTop=_.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},K.each(["toggle","show","hide"],function(e,t){var n=K.fn[t];K.fn[t]=function(r,i,o){return null==r||"boolean"==typeof r||!e&&K.isFunction(r)&&K.isFunction(i)?n.apply(this,arguments):this.animate(q(t,!0),r,i,o)}}),K.fn.extend({fadeTo:function(e,t,n,r){return this.filter(y).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=K.isEmptyObject(e),o=K.speed(t,n,r),a=function(){var t=F(this,K.extend({},e),o);i&&t.stop(!0)};return i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=K.timers,a=K._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Kn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&K.dequeue(this,e)})}}),K.each({slideDown:q("show"),slideUp:q("hide"),slideToggle:q("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){K.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),K.speed=function(e,t,n){var r=e&&"object"==typeof e?K.extend({},e):{complete:n||!n&&t||K.isFunction(e)&&e,duration:e,easing:n&&t||t&&!K.isFunction(t)&&t};return r.duration=K.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in K.fx.speeds?K.fx.speeds[r.duration]:K.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){K.isFunction(r.old)&&r.old.call(this),r.queue&&K.dequeue(this,r.queue)},r},K.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},K.timers=[],K.fx=_.prototype.init,K.fx.tick=function(){for(var e,t=K.timers,n=0;n<t.length;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||K.fx.stop()},K.fx.timer=function(e){e()&&K.timers.push(e)&&!Vn&&(Vn=setInterval(K.fx.tick,K.fx.interval))},K.fx.interval=13,K.fx.stop=function(){clearInterval(Vn),Vn=null},K.fx.speeds={slow:600,fast:200,_default:400},K.fx.step={},K.expr&&K.expr.filters&&(K.expr.filters.animated=function(e){return K.grep(K.timers,function(t){return e===t.elem}).length});var tr=/^(?:body|html)$/i;K.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){K.offset.setOffset(this,e,t)});var n,r,i,o,a,s,l,u={top:0,left:0},c=this[0],f=c&&c.ownerDocument;if(f)return(r=f.body)===c?K.offset.bodyOffset(c):(n=f.documentElement,K.contains(n,c)?("undefined"!=typeof c.getBoundingClientRect&&(u=c.getBoundingClientRect()),i=B(f),o=n.clientTop||r.clientTop||0,a=n.clientLeft||r.clientLeft||0,s=i.pageYOffset||n.scrollTop,l=i.pageXOffset||n.scrollLeft,{top:u.top+s-o,left:u.left+l-a}):u)},K.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return K.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(K.css(e,"marginTop"))||0,n+=parseFloat(K.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=K.css(e,"position");"static"===r&&(e.style.position="relative");var i,o,a=K(e),s=a.offset(),l=K.css(e,"top"),u=K.css(e,"left"),c=("absolute"===r||"fixed"===r)&&K.inArray("auto",[l,u])>-1,f={},p={};c?(p=a.position(),i=p.top,o=p.left):(i=parseFloat(l)||0,o=parseFloat(u)||0),K.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+i),null!=t.left&&(f.left=t.left-s.left+o),"using"in t?t.using.call(e,f):a.css(f)}},K.fn.extend({position:function(){if(this[0]){var e=this[0],t=this.offsetParent(),n=this.offset(),r=tr.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(K.css(e,"marginTop"))||0,n.left-=parseFloat(K.css(e,"marginLeft"))||0,r.top+=parseFloat(K.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(K.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||R.body;e&&!tr.test(e.nodeName)&&"static"===K.css(e,"position");)e=e.offsetParent;return e||R.body})}}),K.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);K.fn[e]=function(i){return K.access(this,function(e,i,o){var a=B(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?K(a).scrollLeft():o,r?o:K(a).scrollTop()):e[i]=o,void 0)},e,i,arguments.length,null)}}),K.each({Height:"height",Width:"width"},function(e,n){K.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){K.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return K.access(this,function(n,r,i){var o;return K.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?K.css(n,r,i,s):K.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=K,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return K})}(window);
} else {
console.log('internal jQuery not loaded');
}

jQuery.noConflict();

if (typeof jQuery.ui === 'undefined') {
    console.log('internal jQuery.UI loaded');
/*!
 * jQuery UI 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a,b){var d=a.nodeName.toLowerCase();if("area"===d){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&l(a)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||b:b)&&l(a)}function l(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.13",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();
b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,
"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",
function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,m,n){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(m)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(n)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,
outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){return k(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var b=c.attr(a,"tabindex"),d=isNaN(b);
return(d||b>=0)&&k(a,!d)}});c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=
0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;
} else {
    console.log('internal jQuery.UI not loaded')
}


// ============================================================================

/*************************************************************************
    jquery.dynatree.js
    Dynamic tree view control, with support for lazy loading of branches.

    Copyright (c) 2008-2011, Martin Wendt (http://wwWendt.de)
    Dual licensed under the MIT or GPL Version 2 licenses.
    http://code.google.com/p/dynatree/wiki/LicenseInfo

    A current version and some documentation is available at
        http://dynatree.googlecode.com/

    $Version: 1.2.0$
    $Revision: 528, 2011-09-17 18:58:59$

    @depends: jquery.js
    @depends: jquery.ui.core.js
    @depends: jquery.cookie.js
*************************************************************************/

// Note: We currently allow eval() to parse the 'data' attribtes, when initializing from HTML.
/*jslint laxbreak: true, browser: true, evil: true, indent: 0, white: false, onevar: false */

/*************************************************************************
 *  Debug functions
 */

var _canLog = true;

function _log(mode, msg) {
    /**
     * Usage: logMsg("%o was toggled", this);
     */
    if( !_canLog ){
        return;
    }
    // Remove first argument
    var args = Array.prototype.slice.apply(arguments, [1]);
    // Prepend timestamp
    var dt = new Date();
    var tag = dt.getHours()+":"+dt.getMinutes()+":"+dt.getSeconds()+"."+dt.getMilliseconds();
    args[0] = tag + " - " + args[0];

    try {
        switch( mode ) {
        case "info":
            window.console.info.apply(window.console, args);
            break;
        case "warn":
            window.console.warn.apply(window.console, args);
            break;
        default:
            window.console.log.apply(window.console, args);
            break;
        }
    } catch(e) {
        if( !window.console ){
            _canLog = false; // Permanently disable, when logging is not supported by the browser
        }
    }
}

function logMsg(msg) {
    Array.prototype.unshift.apply(arguments, ["debug"]);
    _log.apply(this, arguments);
}


// Forward declaration
var getDynaTreePersistData = null;



/*************************************************************************
 *  Constants
 */
var DTNodeStatus_Error   = -1;
var DTNodeStatus_Loading = 1;
var DTNodeStatus_Ok      = 0;


// Start of local namespace
(function(jQuery) {

/*************************************************************************
 *  Common tool functions.
 */

var Class = {
    create: function() {
        return function() {
            this.initialize.apply(this, arguments);
        };
    }
};

// Tool function to get dtnode from the event target:
function getDtNodeFromElement(el) {
    var iMax = 5;
    while( el && iMax-- ) {
        if(el.dtnode) { return el.dtnode; }
        el = el.parentNode;
    }
    return null;
}

function noop() {
}

/*************************************************************************
 *  Class DynaTreeNode
 */
var DynaTreeNode = Class.create();

DynaTreeNode.prototype = {
    initialize: function(parent, tree, data) {
        /**
         * @constructor
         */
        this.parent = parent;
        this.tree = tree;
        if ( typeof data === "string" ){
            data = { title: data };
        }
        if( data.key === undefined ){
            data.key = "_" + tree._nodeCount++;
        }
        this.data = jQuery.extend({}, jQuery.ui.dynatree.nodedatadefaults, data);
        this.li = null; // not yet created
        this.span = null; // not yet created
        this.ul = null; // not yet created
        this.childList = null; // no subnodes yet
        this.isLoading = false; // Lazy content is being loaded
        this.hasSubSel = false;
        this.bExpanded = false;
        this.bSelected = false;

    },

    toString: function() {
        return "DynaTreeNode<" + this.data.key + ">: '" + this.data.title + "'";
    },

    toDict: function(recursive, callback) {
        var dict = jQuery.extend({}, this.data);
        dict.activate = ( this.tree.activeNode === this );
        dict.focus = ( this.tree.focusNode === this );
        dict.expand = this.bExpanded;
        dict.select = this.bSelected;
        if( callback ){
            callback(dict);
        }
        if( recursive && this.childList ) {
            dict.children = [];
            for(var i=0, l=this.childList.length; i<l; i++ ){
                dict.children.push(this.childList[i].toDict(true, callback));
            }
        } else {
            delete dict.children;
        }
        return dict;
    },

    fromDict: function(dict) {
        /**
         * Update node data. If dict contains 'children', then also replace
         * the hole sub tree.
         */
        var children = dict.children;
        if(children === undefined){
            this.data = jQuery.extend(this.data, dict);
            this.render();
            return;
        }
        dict = jQuery.extend({}, dict);
        dict.children = undefined;
        this.data = jQuery.extend(this.data, dict);
        this.removeChildren();
        this.addChild(children);
    },

    _getInnerHtml: function() {
        var tree = this.tree,
            opts = tree.options,
            cache = tree.cache,
            level = this.getLevel(),
            data = this.data,
            res = "";
        // connector (expanded, expandable or simple)
        if( level < opts.minExpandLevel ) {
            if(level > 1){
                res += cache.tagConnector;
            }
            // .. else (i.e. for root level) skip expander/connector altogether
        } else if( this.hasChildren() !== false ) {
            res += cache.tagExpander;
        } else {
            res += cache.tagConnector;
        }
        // Checkbox mode
        if( opts.checkbox && data.hideCheckbox !== true && !data.isStatusNode ) {
            res += cache.tagCheckbox;
        }
        // folder or doctype icon
        /*if ( data.icon ) {
            res += "<img src='" + opts.imagePath + data.icon + "' alt='' />";
        } else if ( data.icon === false ) {
            // icon == false means 'no icon'
            noop(); // keep JSLint happy
        } else {
            // icon == null means 'default icon'
            res += cache.tagNodeIcon;
        }*/
        // node title
        var nodeTitle = "";
        if ( opts.onCustomRender ){
            nodeTitle = opts.onCustomRender.call(tree, this) || "";
        }
        if(!nodeTitle){
            var tooltip = data.tooltip ? " title='" + data.tooltip + "'" : "";
            if( opts.noLink || data.noLink ) {
                nodeTitle = "<span style='display: inline-block;' class='" + opts.classNames.title + "'" + tooltip + ">" + data.title + "</span>";
//              this.tree.logDebug("nodeTitle: " + nodeTitle);
            }else{
                nodeTitle = "<a href='#' class='" + opts.classNames.title + "'" + tooltip + ">" + data.title + "</a>";
            }
        }
        res += nodeTitle;
        return res;
    },


    _fixOrder: function() {
        /**
         * Make sure, that <li> order matches childList order.
         */
        var cl = this.childList;
        if( !cl || !this.ul ){
            return;
        }
        var childLI = this.ul.firstChild;
        for(var i=0, l=cl.length-1; i<l; i++) {
            var childNode1 = cl[i];
            var childNode2 = childLI.dtnode;
            if( childNode1 !== childNode2 ) {
                this.tree.logDebug("_fixOrder: mismatch at index " + i + ": " + childNode1 + " != " + childNode2);
                this.ul.insertBefore(childNode1.li, childNode2.li);
            } else {
                childLI = childLI.nextSibling;
            }
        }
    },


    render: function(useEffects, includeInvisible) {
        /**
         * Create <li><span>..</span> .. </li> tags for this node.
         *
         * <li id='KEY' dtnode=NODE> // This div contains the node's span and list of child div's.
         *   <span class='title'>S S S A</span> // Span contains graphic spans and title <a> tag
         *   <ul> // only present, when node has children
         *       <li id='KEY' dtnode=NODE>child1</li>
         *       <li id='KEY' dtnode=NODE>child2</li>
         *   </ul>
         * </li>
         */
//      this.tree.logDebug("%s.render(%s)", this, useEffects);
        // ---
        var tree = this.tree,
            parent = this.parent,
            data = this.data,
            opts = tree.options,
            cn = opts.classNames,
            isLastSib = this.isLastSibling(),
            firstTime = false;

        if( !parent && !this.ul ) {
            // Root node has only a <ul>
            this.li = this.span = null;
            this.ul = document.createElement("ul");
            if( opts.minExpandLevel > 1 ){
                this.ul.className = cn.container + " " + cn.noConnector;
            }else{
                this.ul.className = cn.container;
            }
        } else if( parent ) {
            // Create <li><span /> </li>
            if( ! this.li ) {
                firstTime = true;
                this.li = document.createElement("li");
                this.li.dtnode = this;
                if( data.key && opts.generateIds ){
                    this.li.id = opts.idPrefix + data.key;
                }
                this.span = document.createElement("span");
                this.span.className = cn.title;
                this.li.appendChild(this.span);

                if( !parent.ul ) {
                    // This is the parent's first child: create UL tag
                    // (Hidden, because it will be
                    parent.ul = document.createElement("ul");
                    parent.ul.style.display = "none";
                    parent.li.appendChild(parent.ul);
//                  if( opts.minExpandLevel > this.getLevel() ){
//                      parent.ul.className = cn.noConnector;
//                  }
                }
                // set node connector images, links and text
//              this.span.innerHTML = this._getInnerHtml();

                parent.ul.appendChild(this.li);
            }
            // set node connector images, links and text
            this.span.innerHTML = this._getInnerHtml();
            // Set classes for current status
            var cnList = [];
            cnList.push(cn.node);
            if( data.isFolder ){
                cnList.push(cn.folder);
            }
            if( this.bExpanded ){
                cnList.push(cn.expanded);
            }
            if( this.hasChildren() !== false ){
                cnList.push(cn.hasChildren);
            }
            if( data.isLazy && this.childList === null ){
                cnList.push(cn.lazy);
            }
            if( isLastSib ){
                cnList.push(cn.lastsib);
            }
            if( this.bSelected ){
                cnList.push(cn.selected);
            }
            if( this.hasSubSel ){
                cnList.push(cn.partsel);
            }
            if( tree.activeNode === this ){
                cnList.push(cn.active);
            }
            if( data.addClass ){
                cnList.push(data.addClass);
            }
            // IE6 doesn't correctly evaluate multiple class names,
            // so we create combined class names that can be used in the CSS
            cnList.push(cn.combinedExpanderPrefix
                    + (this.bExpanded ? "e" : "c")
                    + (data.isLazy && this.childList === null ? "d" : "")
                    + (isLastSib ? "l" : "")
                    );
            cnList.push(cn.combinedIconPrefix
                    + (this.bExpanded ? "e" : "c")
                    + (data.isFolder ? "f" : "")
                    );
            this.span.className = cnList.join(" ");

            // TODO: we should not set this in the <span> tag also, if we set it here:
            this.li.className = isLastSib ? cn.lastsib : "";

            // Allow tweaking, binding, after node was created for the first time
            if(firstTime && opts.onCreate){
                opts.onCreate.call(tree, this, this.span);
            }
            // Hide children, if node is collapsed
//          this.ul.style.display = ( this.bExpanded || !parent ) ? "" : "none";
            // Allow tweaking after node state was rendered
            if(opts.onRender){
                opts.onRender.call(tree, this, this.span);
            }
        }
        // Visit child nodes
        if( (this.bExpanded || includeInvisible === true) && this.childList ) {
            for(var i=0, l=this.childList.length; i<l; i++) {
                this.childList[i].render(false, includeInvisible);
            }
            // Make sure the tag order matches the child array
            this._fixOrder();
        }
        // Hide children, if node is collapsed
        if( this.ul ) {
            var isHidden = (this.ul.style.display === "none");
            var isExpanded = !!this.bExpanded;
//          logMsg("isHidden:%s", isHidden);
            if( useEffects && opts.fx && (isHidden === isExpanded) ) {
                var duration = opts.fx.duration || 200;
                jQuery(this.ul).animate(opts.fx, duration);
            } else {
                this.ul.style.display = ( this.bExpanded || !parent ) ? "" : "none";
            }
        }
    },
    /** Return '/id1/id2/id3'. */
    getKeyPath: function(excludeSelf) {
        var path = [];
        this.visitParents(function(node){
            if(node.parent){
                path.unshift(node.data.key);
            }
        }, !excludeSelf);
        return "/" + path.join(this.tree.options.keyPathSeparator);
    },

    getParent: function() {
        return this.parent;
    },

    getChildren: function() {
        if(this.hasChildren() === undefined){
            return undefined; // Lazy node: unloaded, currently loading, or load error
        }
        return this.childList;
    },

    /** Check if node has children (returns undefined, if not sure). */
    hasChildren: function() {
        if(this.data.isLazy){
            if(this.childList === null || this.childList === undefined){
                // Not yet loaded
                return undefined;
            }else if(this.childList.length === 0){
                // Loaded, but response was empty
                return false;
            }else if(this.childList.length === 1 && this.childList[0].isStatusNode()){
                // Currently loading or load error
                return undefined;
            }
            return true;
        }
        return !!this.childList;
    },

    isFirstSibling: function() {
        var p = this.parent;
        return !p || p.childList[0] === this;
    },

    isLastSibling: function() {
        var p = this.parent;
        return !p || p.childList[p.childList.length-1] === this;
    },

    getPrevSibling: function() {
        if( !this.parent ){
            return null;
        }
        var ac = this.parent.childList;
        for(var i=1, l=ac.length; i<l; i++){ // start with 1, so prev(first) = null
            if( ac[i] === this ){
                return ac[i-1];
            }
        }
        return null;
    },

    getNextSibling: function() {
        if( !this.parent ){
            return null;
        }
        var ac = this.parent.childList;
        for(var i=0, l=ac.length-1; i<l; i++){ // up to length-2, so next(last) = null
            if( ac[i] === this ){
                return ac[i+1];
            }
        }
        return null;
    },

    isStatusNode: function() {
        return (this.data.isStatusNode === true);
    },

    isChildOf: function(otherNode) {
        return (this.parent && this.parent === otherNode);
    },

    isDescendantOf: function(otherNode) {
        if(!otherNode){
            return false;
        }
        var p = this.parent;
        while( p ) {
            if( p === otherNode ){
                return true;
            }
            p = p.parent;
        }
        return false;
    },

    countChildren: function() {
        var cl = this.childList;
        if( !cl ){
            return 0;
        }
        var n = cl.length;
        for(var i=0, l=n; i<l; i++){
            var child = cl[i];
            n += child.countChildren();
        }
        return n;
    },

    /**Sort child list by title.
     * cmd: optional compare function.
     * deep: optional: pass true to sort all descendant nodes.
     */
    sortChildren: function(cmp, deep) {
        var cl = this.childList;
        if( !cl ){
            return;
        }
        cmp = cmp || function(a, b) {
//          return a.data.title === b.data.title ? 0 : a.data.title > b.data.title ? 1 : -1;
            var x = a.data.title.toLowerCase(),
                y = b.data.title.toLowerCase();
            return x === y ? 0 : x > y ? 1 : -1;
            };
        cl.sort(cmp);
        if( deep ){
            for(var i=0, l=cl.length; i<l; i++){
                if( cl[i].childList ){
                    cl[i].sortChildren(cmp, "$norender$");
                }
            }
        }
        if( deep !== "$norender$" ){
            this.render();
        }
    },

    _setStatusNode: function(data) {
        // Create, modify or remove the status child node (pass 'null', to remove it).
        var firstChild = ( this.childList ? this.childList[0] : null );
        if( !data ) {
            if ( firstChild && firstChild.isStatusNode()) {
                try{
                    // I've seen exceptions here with loadKeyPath...
                    if(this.ul){
                        this.ul.removeChild(firstChild.li);
                        firstChild.li = null; // avoid leaks (issue 215)
                    }
                }catch(e){}
                if( this.childList.length === 1 ){
                    this.childList = [];
                }else{
                    this.childList.shift();
                }
            }
        } else if ( firstChild ) {
            data.isStatusNode = true;
            data.key = "_statusNode";
            firstChild.data = data;
            firstChild.render();
        } else {
            data.isStatusNode = true;
            data.key = "_statusNode";
            firstChild = this.addChild(data);
        }
    },

    setLazyNodeStatus: function(lts, opts) {
        var tooltip = (opts && opts.tooltip) ? opts.tooltip : null;
        var info = (opts && opts.info) ? " (" + opts.info + ")" : "";
        switch( lts ) {
            case DTNodeStatus_Ok:
                this._setStatusNode(null);
                jQuery(this.span).removeClass(this.tree.options.classNames.nodeLoading);
                this.isLoading = false;
//              this.render();
                if( this.tree.options.autoFocus ) {
                    if( this === this.tree.tnRoot && this.childList && this.childList.length > 0) {
                        // special case: using ajaxInit
                        this.childList[0].focus();
                    } else {
                        this.focus();
                    }
                }
                break;
            case DTNodeStatus_Loading:
                this.isLoading = true;
                jQuery(this.span).addClass(this.tree.options.classNames.nodeLoading);
                // The root is hidden, so we set a temporary status child
                if(!this.parent){
                    this._setStatusNode({
                        title: this.tree.options.strings.loading + info,
                        tooltip: tooltip,
                        addClass: this.tree.options.classNames.nodeWait
                    });
                }
                break;
            case DTNodeStatus_Error:
                this.isLoading = false;
//              jQuery(this.span).addClass(this.tree.options.classNames.nodeError);
                this._setStatusNode({
                    title: this.tree.options.strings.loadError + info,
                    tooltip: tooltip,
                    addClass: this.tree.options.classNames.nodeError
                });
                break;
            default:
                throw "Bad LazyNodeStatus: '" + lts + "'.";
        }
    },

    _parentList: function(includeRoot, includeSelf) {
        var l = [];
        var dtn = includeSelf ? this : this.parent;
        while( dtn ) {
            if( includeRoot || dtn.parent ){
                l.unshift(dtn);
            }
            dtn = dtn.parent;
        }
        return l;
    },
    getLevel: function() {
        /**
         * Return node depth. 0: System root node, 1: visible top-level node.
         */
        var level = 0;
        var dtn = this.parent;
        while( dtn ) {
            level++;
            dtn = dtn.parent;
        }
        return level;
    },

    _getTypeForOuterNodeEvent: function(event) {
        /** Return the inner node span (title, checkbox or expander) if
         *  event.target points to the outer span.
         *  This function should fix issue #93:
         *  FF2 ignores empty spans, when generating events (returning the parent instead).
         */
        var cns = this.tree.options.classNames;
        var target = event.target;
        // Only process clicks on an outer node span (probably due to a FF2 event handling bug)
        if( target.className.indexOf(cns.node) < 0 ) {
            return null;
        }
        // Event coordinates, relative to outer node span:
        var eventX = event.pageX - target.offsetLeft;
        var eventY = event.pageY - target.offsetTop;

        for(var i=0, l=target.childNodes.length; i<l; i++) {
            var cn = target.childNodes[i];
            var x = cn.offsetLeft - target.offsetLeft;
            var y = cn.offsetTop - target.offsetTop;
            var nx = cn.clientWidth, ny = cn.clientHeight;
//          alert (cn.className + ": " + x + ", " + y + ", s:" + nx + ", " + ny);
            if( eventX >= x && eventX <= (x+nx) && eventY >= y && eventY <= (y+ny) ) {
//              alert("HIT "+ cn.className);
                if( cn.className==cns.title ){
                    return "title";
                }else if( cn.className==cns.expander ){
                    return "expander";
                }else if( cn.className==cns.checkbox ){
                    return "checkbox";
                }else if( cn.className==cns.nodeIcon ){
                    return "icon";
                }
            }
        }
        return "prefix";
    },

    getEventTargetType: function(event) {
        // Return the part of a node, that a click event occured on.
        // Note: there is no check, if the event was fired on TIHS node.
        var tcn = event && event.target ? event.target.className : "";
        var cns = this.tree.options.classNames;

        if( tcn === cns.title ){
            return "title";
        }else if( tcn === cns.expander ){
            return "expander";
        }else if( tcn === cns.checkbox ){
            return "checkbox";
        }else if( tcn === cns.nodeIcon ){
            return "icon";
        }else if( tcn === cns.empty || tcn === cns.vline || tcn === cns.connector ){
            return "prefix";
        }else if( tcn.indexOf(cns.node) >= 0 ){
            // FIX issue #93
            return this._getTypeForOuterNodeEvent(event);
        }
        return null;
    },

    isVisible: function() {
        // Return true, if all parents are expanded.
        var parents = this._parentList(true, false);
        for(var i=0, l=parents.length; i<l; i++){
            if( ! parents[i].bExpanded ){ return false; }
        }
        return true;
    },

    makeVisible: function() {
        // Make sure, all parents are expanded
        var parents = this._parentList(true, false);
        for(var i=0, l=parents.length; i<l; i++){
            parents[i]._expand(true);
        }
    },

    focus: function() {
        // TODO: check, if we already have focus
//      this.tree.logDebug("dtnode.focus(): %o", this);
        this.makeVisible();
        try {
            jQuery(this.span).find(">a").focus();
        } catch(e) { }
    },

    isFocused: function() {
        return (this.tree.tnFocused === this);
    },

    _activate: function(flag, fireEvents) {
        // (De)Activate - but not focus - this node.
        this.tree.logDebug("dtnode._activate(%o, fireEvents=%o) - %o", flag, fireEvents, this);
        var opts = this.tree.options;
        if( this.data.isStatusNode ){
            return;
        }
        if ( fireEvents && opts.onQueryActivate && opts.onQueryActivate.call(this.tree, flag, this) === false ){
            return; // Callback returned false
        }
        if( flag ) {
            // Activate
            if( this.tree.activeNode ) {
                if( this.tree.activeNode === this ){
                    return;
                }
                this.tree.activeNode.deactivate();
            }
            if( opts.activeVisible ){
                this.makeVisible();
            }
            this.tree.activeNode = this;
            if( opts.persist ){
                jQuery.cookie(opts.cookieId+"-active", this.data.key, opts.cookie);
            }
            this.tree.persistence.activeKey = this.data.key;
            jQuery(this.span).addClass(opts.classNames.active);
            if ( fireEvents && opts.onActivate ){
                opts.onActivate.call(this.tree, this);
            }
        } else {
            // Deactivate
            if( this.tree.activeNode === this ) {
                if ( opts.onQueryActivate && opts.onQueryActivate.call(this.tree, false, this) === false ){
                    return; // Callback returned false
                }
                jQuery(this.span).removeClass(opts.classNames.active);
                if( opts.persist ) {
                    // Note: we don't pass null, but ''. So the cookie is not deleted.
                    // If we pass null, we also have to pass a COPY of opts, because $cookie will override opts.expires (issue 84)
                    jQuery.cookie(opts.cookieId+"-active", "", opts.cookie);
                }
                this.tree.persistence.activeKey = null;
                this.tree.activeNode = null;
                if ( fireEvents && opts.onDeactivate ){
                    opts.onDeactivate.call(this.tree, this);
                }
            }
        }
    },

    activate: function() {
        // Select - but not focus - this node.
//      this.tree.logDebug("dtnode.activate(): %o", this);
        this._activate(true, true);
    },

    activateSilently: function() {
        this._activate(true, false);
    },

    deactivate: function() {
//      this.tree.logDebug("dtnode.deactivate(): %o", this);
        this._activate(false, true);
    },

    isActive: function() {
        return (this.tree.activeNode === this);
    },

    _userActivate: function() {
        // Handle user click / [space] / [enter], according to clickFolderMode.
        var activate = true;
        var expand = false;
        if ( this.data.isFolder ) {
            switch( this.tree.options.clickFolderMode ) {
            case 2:
                activate = false;
                expand = true;
                break;
            case 3:
                activate = expand = true;
                break;
            }
        }
        if( this.parent === null ) {
            expand = false;
        }
        if( expand ) {
            this.toggleExpand();
            this.focus();
        }
        if( activate ) {
            this.activate();
        }
    },

    _setSubSel: function(hasSubSel) {
        if( hasSubSel ) {
            this.hasSubSel = true;
            jQuery(this.span).addClass(this.tree.options.classNames.partsel);
        } else {
            this.hasSubSel = false;
            jQuery(this.span).removeClass(this.tree.options.classNames.partsel);
        }
    },
    /**
     * Fix selection and partsel status, of parent nodes, according to current status of
     * end nodes.
     */
    _updatePartSelectionState: function() {
//      alert("_updatePartSelectionState " + this);
//      this.tree.logDebug("_updatePartSelectionState() - %o", this);
        var sel;
        // Return `true` or `false` for end nodes and remove part-sel flag
        if( ! this.hasChildren() ){
            sel = (this.bSelected && !this.data.unselectable && !this.data.isStatusNode);
            this._setSubSel(false);
            return sel;
        }
        // Return `true`, `false`, or `undefined` for parent nodes
        var i, l,
            cl = this.childList,
            allSelected = true,
            allDeselected = true;
        for(i=0, l=cl.length; i<l;  i++) {
            var n = cl[i],
                s = n._updatePartSelectionState();
            if( s !== false){
                allDeselected = false;
            }
            if( s !== true){
                allSelected = false;
            }
        }
        if( allSelected ){
            sel = true;
        } else if ( allDeselected ){
            sel = false;
        } else {
            sel = undefined;
        }
        this._setSubSel(sel === undefined);
        this.bSelected = (sel === true);
        return sel;
    },

    /**
     * Fix selection status, after this node was (de)selected in multi-hier mode.
     * This includes (de)selecting all children.
     */
    _fixSelectionState: function() {
//      alert("_fixSelectionState " + this);
//      this.tree.logDebug("_fixSelectionState(%s) - %o", this.bSelected, this);
        var p, i, l;
        if( this.bSelected ) {
            // Select all children
            this.visit(function(node){
                node.parent._setSubSel(true);
                if(!node.data.unselectable){
                    node._select(true, false, false);
                }
            });
            // Select parents, if all children are selected
            p = this.parent;
            while( p ) {
                p._setSubSel(true);
                var allChildsSelected = true;
                for(i=0, l=p.childList.length; i<l;  i++) {
                    var n = p.childList[i];
                    if( !n.bSelected && !n.data.isStatusNode && !n.data.unselectable) {
                        allChildsSelected = false;
                        break;
                    }
                }
                if( allChildsSelected ){
                    p._select(true, false, false);
                }
                p = p.parent;
            }
        } else {
            // Deselect all children
            this._setSubSel(false);
            this.visit(function(node){
                node._setSubSel(false);
                node._select(false, false, false);
            });
            // Deselect parents, and recalc hasSubSel
            p = this.parent;
            while( p ) {
                p._select(false, false, false);
                var isPartSel = false;
                for(i=0, l=p.childList.length; i<l;  i++) {
                    if( p.childList[i].bSelected || p.childList[i].hasSubSel ) {
                        isPartSel = true;
                        break;
                    }
                }
                p._setSubSel(isPartSel);
                p = p.parent;
            }
        }
    },

    _select: function(sel, fireEvents, deep) {
        // Select - but not focus - this node.
//      this.tree.logDebug("dtnode._select(%o) - %o", sel, this);
        var opts = this.tree.options;
        if( this.data.isStatusNode ){
            return;
        }
        //
        if( this.bSelected === sel ) {
//          this.tree.logDebug("dtnode._select(%o) IGNORED - %o", sel, this);
            return;
        }
        // Allow event listener to abort selection
        if ( fireEvents && opts.onQuerySelect && opts.onQuerySelect.call(this.tree, sel, this) === false ){
            return; // Callback returned false
        }
        // Force single-selection
        if( opts.selectMode==1 && sel ) {
            this.tree.visit(function(node){
                if( node.bSelected ) {
                    // Deselect; assuming that in selectMode:1 there's max. one other selected node
                    node._select(false, false, false);
                    return false;
                }
            });
        }

        this.bSelected = sel;
//        this.tree._changeNodeList("select", this, sel);

        if( sel ) {
            if( opts.persist ){
                this.tree.persistence.addSelect(this.data.key);
            }
            jQuery(this.span).addClass(opts.classNames.selected);

            if( deep && opts.selectMode === 3 ){
                this._fixSelectionState();
            }
            if ( fireEvents && opts.onSelect ){
                opts.onSelect.call(this.tree, true, this);
            }
        } else {
            if( opts.persist ){
                this.tree.persistence.clearSelect(this.data.key);
            }
            jQuery(this.span).removeClass(opts.classNames.selected);

            if( deep && opts.selectMode === 3 ){
                this._fixSelectionState();
            }
            if ( fireEvents && opts.onSelect ){
                opts.onSelect.call(this.tree, false, this);
            }
        }
    },

    select: function(sel) {
        // Select - but not focus - this node.
//      this.tree.logDebug("dtnode.select(%o) - %o", sel, this);
        if( this.data.unselectable ){
            return this.bSelected;
        }
        return this._select(sel!==false, true, true);
    },

    toggleSelect: function() {
//      this.tree.logDebug("dtnode.toggleSelect() - %o", this);
        return this.select(!this.bSelected);
    },

    isSelected: function() {
        return this.bSelected;
    },

    isLazy: function() {
        return !!this.data.isLazy;
    },

    _loadContent: function() {
        try {
            var opts = this.tree.options;
            this.tree.logDebug("_loadContent: start - %o", this);
            this.setLazyNodeStatus(DTNodeStatus_Loading);
            if( true === opts.onLazyRead.call(this.tree, this) ) {
                // If function returns 'true', we assume that the loading is done:
                this.setLazyNodeStatus(DTNodeStatus_Ok);
                // Otherwise (i.e. if the loading was started as an asynchronous process)
                // the onLazyRead(dtnode) handler is expected to call dtnode.setLazyNodeStatus(DTNodeStatus_Ok/_Error) when done.
                this.tree.logDebug("_loadContent: succeeded - %o", this);
            }
        } catch(e) {
            this.tree.logWarning("_loadContent: failed - %o", e);
            this.setLazyNodeStatus(DTNodeStatus_Error, {tooltip: ""+e});
        }
    },

    _expand: function(bExpand, forceSync) {
        if( this.bExpanded === bExpand ) {
            this.tree.logDebug("dtnode._expand(%o) IGNORED - %o", bExpand, this);
            return;
        }
        this.tree.logDebug("dtnode._expand(%o) - %o", bExpand, this);
        var opts = this.tree.options;
        if( !bExpand && this.getLevel() < opts.minExpandLevel ) {
            this.tree.logDebug("dtnode._expand(%o) prevented collapse - %o", bExpand, this);
            return;
        }
        if ( opts.onQueryExpand && opts.onQueryExpand.call(this.tree, bExpand, this) === false ){
            return; // Callback returned false
        }
        this.bExpanded = bExpand;

        // Persist expand state
        if( opts.persist ) {
            if( bExpand ){
                this.tree.persistence.addExpand(this.data.key);
            }else{
                this.tree.persistence.clearExpand(this.data.key);
            }
        }
        // Do not apply animations in init phase, or before lazy-loading
        var allowEffects = !(this.data.isLazy && this.childList === null)
            && !this.isLoading
            && !forceSync;
        this.render(allowEffects);

        // Auto-collapse mode: collapse all siblings
        if( this.bExpanded && this.parent && opts.autoCollapse ) {
            var parents = this._parentList(false, true);
            for(var i=0, l=parents.length; i<l; i++){
                parents[i].collapseSiblings();
            }
        }
        // If the currently active node is now hidden, deactivate it
        if( opts.activeVisible && this.tree.activeNode && ! this.tree.activeNode.isVisible() ) {
            this.tree.activeNode.deactivate();
        }
        // Expanding a lazy node: set 'loading...' and call callback
        if( bExpand && this.data.isLazy && this.childList === null && !this.isLoading ) {
            this._loadContent();
            return;
        }
        if ( opts.onExpand ){
            opts.onExpand.call(this.tree, bExpand, this);
        }
    },

    isExpanded: function() {
        return this.bExpanded;
    },

    expand: function(flag) {
        flag = (flag !== false);
        if( !this.childList && !this.data.isLazy && flag ){
            return; // Prevent expanding empty nodes
        } else if( this.parent === null && !flag ){
            return; // Prevent collapsing the root
        }
        this._expand(flag);
    },

    scheduleAction: function(mode, ms) {
        /** Schedule activity for delayed execution (cancel any pending request).
         *  scheduleAction('cancel') will cancel the request.
         */
        if( this.tree.timer ) {
            clearTimeout(this.tree.timer);
            this.tree.logDebug("clearTimeout(%o)", this.tree.timer);
        }
        var self = this; // required for closures
        switch (mode) {
        case "cancel":
            // Simply made sure that timer was cleared
            break;
        case "expand":
            this.tree.timer = setTimeout(function(){
                self.tree.logDebug("setTimeout: trigger expand");
                self.expand(true);
            }, ms);
            break;
        case "activate":
            this.tree.timer = setTimeout(function(){
                self.tree.logDebug("setTimeout: trigger activate");
                self.activate();
            }, ms);
            break;
        default:
            throw "Invalid mode " + mode;
        }
        this.tree.logDebug("setTimeout(%s, %s): %s", mode, ms, this.tree.timer);
    },

    toggleExpand: function() {
        this.expand(!this.bExpanded);
    },

    collapseSiblings: function() {
        if( this.parent === null ){
            return;
        }
        var ac = this.parent.childList;
        for (var i=0, l=ac.length; i<l; i++) {
            if ( ac[i] !== this && ac[i].bExpanded ){
                ac[i]._expand(false);
            }
        }
    },

    _onClick: function(event) {
//      this.tree.logDebug("dtnode.onClick(" + event.type + "): dtnode:" + this + ", button:" + event.button + ", which: " + event.which);
        var targetType = this.getEventTargetType(event);
        if( targetType === "expander" ) {
            // Clicking the expander icon always expands/collapses
            this.toggleExpand();
            this.focus(); // issue 95
        } else if( targetType === "checkbox" ) {
            // Clicking the checkbox always (de)selects
            this.toggleSelect();
            this.focus(); // issue 95
        } else {
            this._userActivate();
            var aTag = this.span.getElementsByTagName("a");
            if(aTag[0]){
                // issue 154
                // TODO: check if still required on IE 9:
                // Chrome and Safari don't focus the a-tag on click,
                // but calling focus() seem to have problems on IE:
                // http://code.google.com/p/dynatree/issues/detail?id=154
                if(!jQuery.browser.msie){
                    aTag[0].focus();
                }
            }else{
                // 'noLink' option was set
                return true;
            }
        }
        // Make sure that clicks stop, otherwise <a href='#'> jumps to the top
        event.preventDefault();
    },

    _onDblClick: function(event) {
//      this.tree.logDebug("dtnode.onDblClick(" + event.type + "): dtnode:" + this + ", button:" + event.button + ", which: " + event.which);
    },

    _onKeydown: function(event) {
//      this.tree.logDebug("dtnode.onKeydown(" + event.type + "): dtnode:" + this + ", charCode:" + event.charCode + ", keyCode: " + event.keyCode + ", which: " + event.which);
        var handled = true,
            sib;
//      alert("keyDown" + event.which);

        switch( event.which ) {
            // charCodes:
//          case 43: // '+'
            case 107: // '+'
            case 187: // '+' @ Chrome, Safari
                if( !this.bExpanded ){ this.toggleExpand(); }
                break;
//          case 45: // '-'
            case 109: // '-'
            case 189: // '+' @ Chrome, Safari
                if( this.bExpanded ){ this.toggleExpand(); }
                break;
            //~ case 42: // '*'
                //~ break;
            //~ case 47: // '/'
                //~ break;
            // case 13: // <enter>
                // <enter> on a focused <a> tag seems to generate a click-event.
                // this._userActivate();
                // break;
            case 32: // <space>
                this._userActivate();
                break;
            case 8: // <backspace>
                if( this.parent ){
                    this.parent.focus();
                }
                break;
            case 37: // <left>
                if( this.bExpanded ) {
                    this.toggleExpand();
                    this.focus();
//              } else if( this.parent && (this.tree.options.rootVisible || this.parent.parent) ) {
                } else if( this.parent && this.parent.parent ) {
                    this.parent.focus();
                }
                break;
            case 39: // <right>
                if( !this.bExpanded && (this.childList || this.data.isLazy) ) {
                    this.toggleExpand();
                    this.focus();
                } else if( this.childList ) {
                    this.childList[0].focus();
                }
                break;
            case 38: // <up>
                sib = this.getPrevSibling();
                while( sib && sib.bExpanded && sib.childList ){
                    sib = sib.childList[sib.childList.length-1];
                }
//              if( !sib && this.parent && (this.tree.options.rootVisible || this.parent.parent) )
                if( !sib && this.parent && this.parent.parent ){
                    sib = this.parent;
                }
                if( sib ){
                    sib.focus();
                }
                break;
            case 40: // <down>
                if( this.bExpanded && this.childList ) {
                    sib = this.childList[0];
                } else {
                    var parents = this._parentList(false, true);
                    for(var i=parents.length-1; i>=0; i--) {
                        sib = parents[i].getNextSibling();
                        if( sib ){ break; }
                    }
                }
                if( sib ){
                    sib.focus();
                }
                break;
            default:
                handled = false;
        }
        // Return false, if handled, to prevent default processing
//      return !handled;
        if(handled){
            event.preventDefault();
        }
    },

    _onKeypress: function(event) {
        // onKeypress is only hooked to allow user callbacks.
        // We don't process it, because IE and Safari don't fire keypress for cursor keys.
//      this.tree.logDebug("dtnode.onKeypress(" + event.type + "): dtnode:" + this + ", charCode:" + event.charCode + ", keyCode: " + event.keyCode + ", which: " + event.which);
    },

    _onFocus: function(event) {
        // Handles blur and focus events.
//      this.tree.logDebug("dtnode.onFocus(%o): %o", event, this);
        var opts = this.tree.options;
        if ( event.type == "blur" || event.type == "focusout" ) {
            if ( opts.onBlur ){
                opts.onBlur.call(this.tree, this);
            }
            if( this.tree.tnFocused ){
                jQuery(this.tree.tnFocused.span).removeClass(opts.classNames.focused);
            }
            this.tree.tnFocused = null;
            if( opts.persist ){
                jQuery.cookie(opts.cookieId+"-focus", "", opts.cookie);
            }
        } else if ( event.type=="focus" || event.type=="focusin") {
            // Fix: sometimes the blur event is not generated
            if( this.tree.tnFocused && this.tree.tnFocused !== this ) {
                this.tree.logDebug("dtnode.onFocus: out of sync: curFocus: %o", this.tree.tnFocused);
                jQuery(this.tree.tnFocused.span).removeClass(opts.classNames.focused);
            }
            this.tree.tnFocused = this;
            if ( opts.onFocus ){
                opts.onFocus.call(this.tree, this);
            }
            jQuery(this.tree.tnFocused.span).addClass(opts.classNames.focused);
            if( opts.persist ){
                jQuery.cookie(opts.cookieId+"-focus", this.data.key, opts.cookie);
            }
        }
        // TODO: return anything?
//      return false;
    },

    visit: function(fn, includeSelf) {
        // Call fn(node) for all child nodes. Stop iteration, if fn() returns false.
        var res = true;
        if( includeSelf === true ) {
            res = fn(this);
            if( res === false || res == "skip" ){
                return res;
            }
        }
        if(this.childList){
            for(var i=0, l=this.childList.length; i<l; i++){
                res = this.childList[i].visit(fn, true);
                if( res === false ){
                    break;
                }
            }
        }
        return res;
    },

    visitParents: function(fn, includeSelf) {
        // Visit parent nodes (bottom up)
        if(includeSelf && fn(this) === false){
            return false;
        }
        var p = this.parent;
        while( p ) {
            if(fn(p) === false){
                return false;
            }
            p = p.parent;
        }
        return true;
    },

    remove: function() {
        // Remove this node
//      this.tree.logDebug ("%s.remove()", this);
        if ( this === this.tree.root ){
            throw "Cannot remove system root";
        }
        return this.parent.removeChild(this);
    },

    removeChild: function(tn) {
        // Remove tn from list of direct children.
        var ac = this.childList;
        if( ac.length == 1 ) {
            if( tn !== ac[0] ){
                throw "removeChild: invalid child";
            }
            return this.removeChildren();
        }
        if( tn === this.tree.activeNode ){
            tn.deactivate();
        }
        if( this.tree.options.persist ) {
            if( tn.bSelected ){
                this.tree.persistence.clearSelect(tn.data.key);
            }
            if ( tn.bExpanded ){
                this.tree.persistence.clearExpand(tn.data.key);
            }
        }
        tn.removeChildren(true);
//      this.div.removeChild(tn.div);
        this.ul.removeChild(tn.li);
        for(var i=0, l=ac.length; i<l; i++) {
            if( ac[i] === tn ) {
                this.childList.splice(i, 1);
//              delete tn;  // JSLint complained
                break;
            }
        }
    },

    removeChildren: function(isRecursiveCall, retainPersistence) {
        // Remove all child nodes (more efficiently than recursive remove())
        this.tree.logDebug("%s.removeChildren(%o)", this, isRecursiveCall);
        var tree = this.tree;
        var ac = this.childList;
        if( ac ) {
            for(var i=0, l=ac.length; i<l; i++) {
                var tn = ac[i];
                if ( tn === tree.activeNode && !retainPersistence ){
                    tn.deactivate();
                }
                if( this.tree.options.persist && !retainPersistence ) {
                    if( tn.bSelected ){
                        this.tree.persistence.clearSelect(tn.data.key);
                    }
                    if ( tn.bExpanded ){
                        this.tree.persistence.clearExpand(tn.data.key);
                    }
                }
                tn.removeChildren(true, retainPersistence);
                if(this.ul){
                    this.ul.removeChild(tn.li);
                }
/*
                try{
                    this.ul.removeChild(tn.li);
                }catch(e){
                    this.tree.logDebug("%s.removeChildren: couldnt remove LI", this, e);
                }
*/
//              delete tn;  JSLint complained
            }
            // Set to 'null' which is interpreted as 'not yet loaded' for lazy
            // nodes
            this.childList = null;
        }
        if( ! isRecursiveCall ) {
//          this._expand(false);
//          this.isRead = false;
            this.isLoading = false;
            this.render();
        }
    },

    setTitle: function(title) {
        this.fromDict({title: title});
    },

    reload: function(force) {
        throw "Use reloadChildren() instead";
    },

    reloadChildren: function(callback) {
        // Reload lazy content (expansion state is maintained).
        if( this.parent === null ){
            throw "Use tree.reload() instead";
        }else if( ! this.data.isLazy ){
            throw "node.reloadChildren() requires lazy nodes.";
        }
        // appendAjax triggers 'nodeLoaded' event.
        // We listen to this, if a callback was passed to reloadChildren
        if(callback){
            var self = this;
            var eventType = "nodeLoaded.dynatree." + this.tree.$tree.attr("id")
                + "." + this.data.key;
            this.tree.$tree.bind(eventType, function(e, node, isOk){
                self.tree.$tree.unbind(eventType);
                self.tree.logDebug("loaded %o, %o, %o", e, node, isOk);
                if(node !== self){
                    throw "got invalid load event";
                }
                callback.call(self.tree, node, isOk);
            });
        }
        // The expansion state is maintained
        this.removeChildren();
        this._loadContent();
//      if( this.bExpanded ) {
//          // Remove children first, to prevent effects being applied
//          this.removeChildren();
//          // then force re-expand to trigger lazy loading
////            this.expand(false);
////            this.expand(true);
//          this._loadContent();
//      } else {
//          this.removeChildren();
//          this._loadContent();
//      }
    },

    /**
     * Make sure the node with a given key path is available in the tree.
     */
    _loadKeyPath: function(keyPath, callback) {
        var tree = this.tree;
        tree.logDebug("%s._loadKeyPath(%s)", this, keyPath);
        if(keyPath === ""){
            throw "Key path must not be empty";
        }
        var segList = keyPath.split(tree.options.keyPathSeparator);
        if(segList[0] === ""){
            throw "Key path must be relative (don't start with '/')";
        }
        var seg = segList.shift();

        for(var i=0, l=this.childList.length; i < l; i++){
            var child = this.childList[i];
            if( child.data.key === seg ){
                if(segList.length === 0) {
                    // Found the end node
                    callback.call(tree, child, "ok");

                }else if(child.data.isLazy && (child.childList === null || child.childList === undefined)){
                    tree.logDebug("%s._loadKeyPath(%s) -> reloading %s...", this, keyPath, child);
                    var self = this;
                    child.reloadChildren(function(node, isOk){
                        // After loading, look for direct child with that key
                        if(isOk){
                            tree.logDebug("%s._loadKeyPath(%s) -> reloaded %s.", node, keyPath, node);
                            callback.call(tree, child, "loaded");
                            node._loadKeyPath(segList.join(tree.options.keyPathSeparator), callback);
                        }else{
                            tree.logWarning("%s._loadKeyPath(%s) -> reloadChildren() failed.", self, keyPath);
                            callback.call(tree, child, "error");
                        }
                    }); // Note: this line gives a JSLint warning (Don't make functions within a loop)
                    // we can ignore it, since it will only be exectuted once, the the loop is ended
                    // See also http://stackoverflow.com/questions/3037598/how-to-get-around-the-jslint-error-dont-make-functions-within-a-loop
                } else {
                    callback.call(tree, child, "loaded");
                    // Look for direct child with that key
                    child._loadKeyPath(segList.join(tree.options.keyPathSeparator), callback);
                }
                return;
            }
        }
        // Could not find key
        tree.logWarning("Node not found: " + seg);
        return;
    },

    resetLazy: function() {
        // Discard lazy content.
        if( this.parent === null ){
            throw "Use tree.reload() instead";
        }else if( ! this.data.isLazy ){
            throw "node.resetLazy() requires lazy nodes.";
        }
        this.expand(false);
        this.removeChildren();
    },

    _addChildNode: function(dtnode, beforeNode) {
        /**
         * Internal function to add one single DynatreeNode as a child.
         *
         */
        var tree = this.tree,
            opts = tree.options,
            pers = tree.persistence;

//      tree.logDebug("%s._addChildNode(%o)", this, dtnode);

        // --- Update and fix dtnode attributes if necessary
        dtnode.parent = this;
//      if( beforeNode && (beforeNode.parent !== this || beforeNode === dtnode ) )
//          throw "<beforeNode> must be another child of <this>";

        // --- Add dtnode as a child
        if ( this.childList === null ) {
            this.childList = [];
        } else if( ! beforeNode ) {
            // Fix 'lastsib'
            if(this.childList.length > 0) {
                jQuery(this.childList[this.childList.length-1].span).removeClass(opts.classNames.lastsib);
            }
        }
        if( beforeNode ) {
            var iBefore = jQuery.inArray(beforeNode, this.childList);
            if( iBefore < 0 ){
                throw "<beforeNode> must be a child of <this>";
            }
            this.childList.splice(iBefore, 0, dtnode);
        } else {
            // Append node
            this.childList.push(dtnode);
        }

        // --- Handle persistence
        // Initial status is read from cookies, if persistence is active and
        // cookies are already present.
        // Otherwise the status is read from the data attributes and then persisted.
        var isInitializing = tree.isInitializing();
        if( opts.persist && pers.cookiesFound && isInitializing ) {
            // Init status from cookies
//          tree.logDebug("init from cookie, pa=%o, dk=%o", pers.activeKey, dtnode.data.key);
            if( pers.activeKey === dtnode.data.key ){
                tree.activeNode = dtnode;
            }
            if( pers.focusedKey === dtnode.data.key ){
                tree.focusNode = dtnode;
            }
            dtnode.bExpanded = (jQuery.inArray(dtnode.data.key, pers.expandedKeyList) >= 0);
            dtnode.bSelected = (jQuery.inArray(dtnode.data.key, pers.selectedKeyList) >= 0);
//          tree.logDebug("    key=%o, bSelected=%o", dtnode.data.key, dtnode.bSelected);
        } else {
            // Init status from data (Note: we write the cookies after the init phase)
//          tree.logDebug("init from data");
            if( dtnode.data.activate ) {
                tree.activeNode = dtnode;
                if( opts.persist ){
                    pers.activeKey = dtnode.data.key;
                }
            }
            if( dtnode.data.focus ) {
                tree.focusNode = dtnode;
                if( opts.persist ){
                    pers.focusedKey = dtnode.data.key;
                }
            }
            dtnode.bExpanded = ( dtnode.data.expand === true ); // Collapsed by default
            if( dtnode.bExpanded && opts.persist ){
                pers.addExpand(dtnode.data.key);
            }
            dtnode.bSelected = ( dtnode.data.select === true ); // Deselected by default
/*
            Doesn't work, cause pers.selectedKeyList may be null
            if( dtnode.bSelected && opts.selectMode==1
                && pers.selectedKeyList && pers.selectedKeyList.length>0 ) {
                tree.logWarning("Ignored multi-selection in single-mode for %o", dtnode);
                dtnode.bSelected = false; // Fixing bad input data (multi selection for mode:1)
            }
*/
            if( dtnode.bSelected && opts.persist ){
                pers.addSelect(dtnode.data.key);
            }
        }

        // Always expand, if it's below minExpandLevel
//      tree.logDebug ("%s._addChildNode(%o), l=%o", this, dtnode, dtnode.getLevel());
        if ( opts.minExpandLevel >= dtnode.getLevel() ) {
//          tree.logDebug ("Force expand for %o", dtnode);
            this.bExpanded = true;
        }

        // In multi-hier mode, update the parents selection state
        // issue #82: only if not initializing, because the children may not exist yet
//      if( !dtnode.data.isStatusNode && opts.selectMode==3 && !isInitializing )
//          dtnode._fixSelectionState();

        // In multi-hier mode, update the parents selection state
        if( dtnode.bSelected && opts.selectMode==3 ) {
            var p = this;
            while( p ) {
                if( !p.hasSubSel ){
                    p._setSubSel(true);
                }
                p = p.parent;
            }
        }
        // render this node and the new child
        if ( tree.bEnableUpdate ){
            this.render();
        }
        return dtnode;
    },

    addChild: function(obj, beforeNode) {
        /**
         * Add a node object as child.
         *
         * This should be the only place, where a DynaTreeNode is constructed!
         * (Except for the root node creation in the tree constructor)
         *
         * @param obj A JS object (may be recursive) or an array of those.
         * @param {DynaTreeNode} beforeNode (optional) sibling node.
         *
         * Data format: array of node objects, with optional 'children' attributes.
         * [
         *  { title: "t1", isFolder: true, ... }
         *  { title: "t2", isFolder: true, ...,
         *      children: [
         *          {title: "t2.1", ..},
         *          {..}
         *          ]
         *  }
         * ]
         * A simple object is also accepted instead of an array.
         *
         */
//      this.tree.logDebug("%s.addChild(%o, %o)", this, obj, beforeNode);
        if(typeof(obj) == "string"){
            throw "Invalid data type for " + obj;
        }else if( !obj || obj.length === 0 ){ // Passed null or undefined or empty array
            return;
        }else if( obj instanceof DynaTreeNode ){
            return this._addChildNode(obj, beforeNode);
        }

        if( !obj.length ){ // Passed a single data object
            obj = [ obj ];
        }
        var prevFlag = this.tree.enableUpdate(false);

        var tnFirst = null;
        for (var i=0, l=obj.length; i<l; i++) {
            var data = obj[i];
            var dtnode = this._addChildNode(new DynaTreeNode(this, this.tree, data), beforeNode);
            if( !tnFirst ){
                tnFirst = dtnode;
            }
            // Add child nodes recursively
            if( data.children ){
                dtnode.addChild(data.children, null);
            }
        }
        this.tree.enableUpdate(prevFlag);
        return tnFirst;
    },

    append: function(obj) {
        this.tree.logWarning("node.append() is deprecated (use node.addChild() instead).");
        return this.addChild(obj, null);
    },

    appendAjax: function(ajaxOptions) {
        var self = this;
        this.removeChildren(false, true);
        this.setLazyNodeStatus(DTNodeStatus_Loading);
        // Debug feature: force a delay, to simulate slow loading...
        if(ajaxOptions.debugLazyDelay){
            var ms = ajaxOptions.debugLazyDelay;
            ajaxOptions.debugLazyDelay = 0;
            this.tree.logInfo("appendAjax: waiting for debugLazyDelay " + ms);
            setTimeout(function(){self.appendAjax(ajaxOptions);}, ms);
            return;
        }
        // Ajax option inheritance: jQuery.ajaxSetup < jQuery.ui.dynatree.prototype.options.ajaxDefaults < tree.options.ajaxDefaults < ajaxOptions
        var orgSuccess = ajaxOptions.success;
        var orgError = ajaxOptions.error;
        var eventType = "nodeLoaded.dynatree." + this.tree.$tree.attr("id")
            + "." + this.data.key;
        var options = jQuery.extend({}, this.tree.options.ajaxDefaults, ajaxOptions, {
            success: function(data, textStatus){
                // <this> is the request options
//              self.tree.logDebug("appendAjax().success");
                var prevPhase = self.tree.phase;
                self.tree.phase = "init";
                // postProcess is similar to the standard dataFilter hook,
                // but it is also called for JSONP
                if( options.postProcess ){
                    data = options.postProcess.call(this, data, this.dataType);
                }
                // Process ASPX WebMethod JSON object inside "d" property
                // http://code.google.com/p/dynatree/issues/detail?id=202
                else if (data && data.hasOwnProperty("d")) {
                    data = data.d;
                }
                if(!jQuery.isArray(data) || data.length !== 0){
                    self.addChild(data, null);
                }
                self.tree.phase = "postInit";
                if( orgSuccess ){
                    orgSuccess.call(options, self, data, textStatus);
                }
                self.tree.logDebug("trigger " + eventType);
                self.tree.$tree.trigger(eventType, [self, true]);
                self.tree.phase = prevPhase;
                // This should be the last command, so node.isLoading is true
                // while the callbacks run
                self.setLazyNodeStatus(DTNodeStatus_Ok);
                if(jQuery.isArray(data) && data.length === 0){
                    // Set to [] which is interpreted as 'no children' for lazy
                    // nodes
                    self.childList = [];
                    self.render();
                }
                },
            error: function(XMLHttpRequest, textStatus, errorThrown){
                // <this> is the request options
                self.tree.logWarning("appendAjax failed:", textStatus, ":\n", XMLHttpRequest, "\n", errorThrown);
                if( orgError ){
                    orgError.call(options, self, XMLHttpRequest, textStatus, errorThrown);
                }
                self.tree.$tree.trigger(eventType, [self, false]);
                self.setLazyNodeStatus(DTNodeStatus_Error, {info: textStatus, tooltip: ""+errorThrown});
                }
        });
        jQuery.ajax(options);
    },

    move: function(targetNode, mode) {
        /**Move this node to targetNode.
         *  mode 'child': append this node as last child of targetNode.
         *                This is the default. To be compatble with the D'n'd
         *                hitMode, we also accept 'over'.
         *  mode 'before': add this node as sibling before targetNode.
         *  mode 'after': add this node as sibling after targetNode.
         */
        var pos;
        if(this === targetNode){
            return;
        }
        if( !this.parent  ){
            throw "Cannot move system root";
        }
        if(mode === undefined || mode == "over"){
            mode = "child";
        }
        var prevParent = this.parent;
        var targetParent = (mode === "child") ? targetNode : targetNode.parent;
        if( targetParent.isDescendantOf(this) ){
            throw "Cannot move a node to it's own descendant";
        }
        // Unlink this node from current parent
        if( this.parent.childList.length == 1 ) {
            this.parent.childList = null;
            this.parent.bExpanded = false;
        } else {
            pos = jQuery.inArray(this, this.parent.childList);
            if( pos < 0 ){
                throw "Internal error";
            }
            this.parent.childList.splice(pos, 1);
        }
        // Remove from source DOM parent
        this.parent.ul.removeChild(this.li);

        // Insert this node to target parent's child list
        this.parent = targetParent;
        if( targetParent.hasChildren() ) {
            switch(mode) {
            case "child":
                // Append to existing target children
                targetParent.childList.push(this);
                break;
            case "before":
                // Insert this node before target node
                pos = jQuery.inArray(targetNode, targetParent.childList);
                if( pos < 0 ){
                    throw "Internal error";
                }
                targetParent.childList.splice(pos, 0, this);
                break;
            case "after":
                // Insert this node after target node
                pos = jQuery.inArray(targetNode, targetParent.childList);
                if( pos < 0 ){
                    throw "Internal error";
                }
                targetParent.childList.splice(pos+1, 0, this);
                break;
            default:
                throw "Invalid mode " + mode;
            }
        } else {
            targetParent.childList = [ this ];
        }
        // Parent has no <ul> tag yet:
        if( !targetParent.ul ) {
            // This is the parent's first child: create UL tag
            // (Hidden, because it will be
            targetParent.ul = document.createElement("ul");
            targetParent.ul.style.display = "none";
            targetParent.li.appendChild(targetParent.ul);
        }
        // Add to target DOM parent
        targetParent.ul.appendChild(this.li);

        if( this.tree !== targetNode.tree ) {
            // Fix node.tree for all source nodes
            this.visit(function(node){
                node.tree = targetNode.tree;
            }, null, true);
            throw "Not yet implemented.";
        }
        // TODO: fix selection state
        // TODO: fix active state
        if( !prevParent.isDescendantOf(targetParent)) {
            prevParent.render();
        }
        if( !targetParent.isDescendantOf(prevParent) ) {
            targetParent.render();
        }
//      this.tree.redraw();
/*
        var tree = this.tree;
        var opts = tree.options;
        var pers = tree.persistence;


        // Always expand, if it's below minExpandLevel
//      tree.logDebug ("%s._addChildNode(%o), l=%o", this, dtnode, dtnode.getLevel());
        if ( opts.minExpandLevel >= dtnode.getLevel() ) {
//          tree.logDebug ("Force expand for %o", dtnode);
            this.bExpanded = true;
        }

        // In multi-hier mode, update the parents selection state
        // issue #82: only if not initializing, because the children may not exist yet
//      if( !dtnode.data.isStatusNode && opts.selectMode==3 && !isInitializing )
//          dtnode._fixSelectionState();

        // In multi-hier mode, update the parents selection state
        if( dtnode.bSelected && opts.selectMode==3 ) {
            var p = this;
            while( p ) {
                if( !p.hasSubSel )
                    p._setSubSel(true);
                p = p.parent;
            }
        }
        // render this node and the new child
        if ( tree.bEnableUpdate )
            this.render();

        return dtnode;

*/
    },

    // --- end of class
    lastentry: undefined
};

/*************************************************************************
 * class DynaTreeStatus
 */

var DynaTreeStatus = Class.create();


DynaTreeStatus._getTreePersistData = function(cookieId, cookieOpts) {
    // Static member: Return persistence information from cookies
    var ts = new DynaTreeStatus(cookieId, cookieOpts);
    ts.read();
    return ts.toDict();
};
// Make available in global scope
getDynaTreePersistData = DynaTreeStatus._getTreePersistData; // TODO: deprecated


DynaTreeStatus.prototype = {
    // Constructor
    initialize: function(cookieId, cookieOpts) {
//      this._log("DynaTreeStatus: initialize");
        if( cookieId === undefined ){
            cookieId = jQuery.ui.dynatree.prototype.options.cookieId;
        }
        cookieOpts = jQuery.extend({}, jQuery.ui.dynatree.prototype.options.cookie, cookieOpts);

        this.cookieId = cookieId;
        this.cookieOpts = cookieOpts;
        this.cookiesFound = undefined;
        this.activeKey = null;
        this.focusedKey = null;
        this.expandedKeyList = null;
        this.selectedKeyList = null;
    },
    // member functions
    _log: function(msg) {
        //  this.logDebug("_changeNodeList(%o): nodeList:%o, idx:%o", mode, nodeList, idx);
        Array.prototype.unshift.apply(arguments, ["debug"]);
        _log.apply(this, arguments);
    },
    read: function() {
//      this._log("DynaTreeStatus: read");
        // Read or init cookies.
        this.cookiesFound = false;

        var cookie = jQuery.cookie(this.cookieId + "-active");
        this.activeKey = ( cookie === null ) ? "" : cookie;
        if( cookie !== null ){
            this.cookiesFound = true;
        }
        cookie = jQuery.cookie(this.cookieId + "-focus");
        this.focusedKey = ( cookie === null ) ? "" : cookie;
        if( cookie !== null ){
            this.cookiesFound = true;
        }
        cookie = jQuery.cookie(this.cookieId + "-expand");
        this.expandedKeyList = ( cookie === null ) ? [] : cookie.split(",");
        if( cookie !== null ){
            this.cookiesFound = true;
        }
        cookie = jQuery.cookie(this.cookieId + "-select");
        this.selectedKeyList = ( cookie === null ) ? [] : cookie.split(",");
        if( cookie !== null ){
            this.cookiesFound = true;
        }
    },
    write: function() {
//      this._log("DynaTreeStatus: write");
        jQuery.cookie(this.cookieId + "-active", ( this.activeKey === null ) ? "" : this.activeKey, this.cookieOpts);
        jQuery.cookie(this.cookieId + "-focus", ( this.focusedKey === null ) ? "" : this.focusedKey, this.cookieOpts);
        jQuery.cookie(this.cookieId + "-expand", ( this.expandedKeyList === null ) ? "" : this.expandedKeyList.join(","), this.cookieOpts);
        jQuery.cookie(this.cookieId + "-select", ( this.selectedKeyList === null ) ? "" : this.selectedKeyList.join(","), this.cookieOpts);
    },
    addExpand: function(key) {
//      this._log("addExpand(%o)", key);
        if( jQuery.inArray(key, this.expandedKeyList) < 0 ) {
            this.expandedKeyList.push(key);
            jQuery.cookie(this.cookieId + "-expand", this.expandedKeyList.join(","), this.cookieOpts);
        }
    },
    clearExpand: function(key) {
//      this._log("clearExpand(%o)", key);
        var idx = jQuery.inArray(key, this.expandedKeyList);
        if( idx >= 0 ) {
            this.expandedKeyList.splice(idx, 1);
            jQuery.cookie(this.cookieId + "-expand", this.expandedKeyList.join(","), this.cookieOpts);
        }
    },
    addSelect: function(key) {
//      this._log("addSelect(%o)", key);
        if( jQuery.inArray(key, this.selectedKeyList) < 0 ) {
            this.selectedKeyList.push(key);
            jQuery.cookie(this.cookieId + "-select", this.selectedKeyList.join(","), this.cookieOpts);
        }
    },
    clearSelect: function(key) {
//      this._log("clearSelect(%o)", key);
        var idx = jQuery.inArray(key, this.selectedKeyList);
        if( idx >= 0 ) {
            this.selectedKeyList.splice(idx, 1);
            jQuery.cookie(this.cookieId + "-select", this.selectedKeyList.join(","), this.cookieOpts);
        }
    },
    isReloading: function() {
        return this.cookiesFound === true;
    },
    toDict: function() {
        return {
            cookiesFound: this.cookiesFound,
            activeKey: this.activeKey,
            focusedKey: this.activeKey,
            expandedKeyList: this.expandedKeyList,
            selectedKeyList: this.selectedKeyList
        };
    },
    // --- end of class
    lastentry: undefined
};


/*************************************************************************
 * class DynaTree
 */

var DynaTree = Class.create();

// --- Static members ----------------------------------------------------------

DynaTree.version = "$Version: 1.2.0$";

/*
DynaTree._initTree = function() {
};

DynaTree._bind = function() {
};
*/
//--- Class members ------------------------------------------------------------

DynaTree.prototype = {
    // Constructor
//  initialize: function(divContainer, options) {
    initialize: function($widget) {
        // instance members
        this.phase = "init";
        this.$widget = $widget;
        this.options = $widget.options;
        this.$tree = $widget.element;
        this.timer = null;
        // find container element
        this.divTree = this.$tree.get(0);

//      var parentPos = jQuery(this.divTree).parent().offset();
//      this.parentTop = parentPos.top;
//      this.parentLeft = parentPos.left;

        _initDragAndDrop(this);
    },

    // member functions

    _load: function(callback) {
        var $widget = this.$widget;
        var opts = this.options,
            self = this;
        this.bEnableUpdate = true;
        this._nodeCount = 1;
        this.activeNode = null;
        this.focusNode = null;

        // Some deprecation warnings to help with migration
        if( opts.rootVisible !== undefined ){
            this.logWarning("Option 'rootVisible' is no longer supported.");
        }
        if( opts.minExpandLevel < 1 ) {
            this.logWarning("Option 'minExpandLevel' must be >= 1.");
            opts.minExpandLevel = 1;
        }
//      _log("warn", "jQuery.support.boxModel " + jQuery.support.boxModel);

        // If a 'options.classNames' dictionary was passed, still use defaults
        // for undefined classes:
        if( opts.classNames !== jQuery.ui.dynatree.prototype.options.classNames ) {
            opts.classNames = jQuery.extend({}, jQuery.ui.dynatree.prototype.options.classNames, opts.classNames);
        }
        if( opts.ajaxDefaults !== jQuery.ui.dynatree.prototype.options.ajaxDefaults ) {
            opts.ajaxDefaults = jQuery.extend({}, jQuery.ui.dynatree.prototype.options.ajaxDefaults, opts.ajaxDefaults);
        }
        if( opts.dnd !== jQuery.ui.dynatree.prototype.options.dnd ) {
            opts.dnd = jQuery.extend({}, jQuery.ui.dynatree.prototype.options.dnd, opts.dnd);
        }
        // Guess skin path, if not specified
        if(!opts.imagePath) {
            jQuery("script").each( function () {
                var _rexDtLibName = /.*dynatree[^\/]*\.js$/i;
                if( this.src.search(_rexDtLibName) >= 0 ) {
                    if( this.src.indexOf("/")>=0 ){ // issue #47
                        opts.imagePath = this.src.slice(0, this.src.lastIndexOf("/")) + "/skin/";
                    }else{
                        opts.imagePath = "skin/";
                    }
                    self.logDebug("Guessing imagePath from '%s': '%s'", this.src, opts.imagePath);
                    return false; // first match
                }
            });
        }

        this.persistence = new DynaTreeStatus(opts.cookieId, opts.cookie);
        if( opts.persist ) {
            if( !jQuery.cookie ){
                _log("warn", "Please include jquery.cookie.js to use persistence.");
            }
            this.persistence.read();
        }
        this.logDebug("DynaTree.persistence: %o", this.persistence.toDict());

        // Cached tag strings
        this.cache = {
            tagEmpty: "<span class='" + opts.classNames.empty + "'></span>",
            tagVline: "<span class='" + opts.classNames.vline + "'></span>",
            tagExpander: "<span class='" + opts.classNames.expander + "'></span>",
            tagConnector: "<span class='" + opts.classNames.connector + "'></span>",
            tagNodeIcon: "<span class='" + opts.classNames.nodeIcon + "'></span>",
            tagCheckbox: "<span class='" + opts.classNames.checkbox + "'></span>",
            lastentry: undefined
        };

        // Clear container, in case it contained some 'waiting' or 'error' text
        // for clients that don't support JS.
        // We don't do this however, if we try to load from an embedded UL element.
        if( opts.children || (opts.initAjax && opts.initAjax.url) || opts.initId ){
            jQuery(this.divTree).empty();
        }
        var $ulInitialize = this.$tree.find(">ul:first").hide();

        // Create the root element
        this.tnRoot = new DynaTreeNode(null, this, {});
        this.tnRoot.bExpanded = true;
        this.tnRoot.render();
        this.divTree.appendChild(this.tnRoot.ul);

        var root = this.tnRoot;
        var isReloading = ( opts.persist && this.persistence.isReloading() );
        var isLazy = false;
        var prevFlag = this.enableUpdate(false);

        this.logDebug("Dynatree._load(): read tree structure...");

        // Init tree structure
        if( opts.children ) {
            // Read structure from node array
            root.addChild(opts.children);

        } else if( opts.initAjax && opts.initAjax.url ) {
            // Init tree from AJAX request
            isLazy = true;
            root.data.isLazy = true;
            this._reloadAjax(callback);

        } else if( opts.initId ) {
            // Init tree from another UL element
            this._createFromTag(root, jQuery("#"+opts.initId));

        } else {
            // Init tree from the first UL element inside the container <div>
//          var $ul = this.$tree.find(">ul:first").hide();
            this._createFromTag(root, $ulInitialize);
            $ulInitialize.remove();
        }

        this._checkConsistency();
        // Fix part-sel flags
        if(!isLazy && opts.selectMode == 3){
            root._updatePartSelectionState();
        }
        // Render html markup
        this.logDebug("Dynatree._load(): render nodes...");
        this.enableUpdate(prevFlag);

        // bind event handlers
        this.logDebug("Dynatree._load(): bind events...");
        this.$widget.bind();

        // --- Post-load processing
        this.logDebug("Dynatree._load(): postInit...");
        this.phase = "postInit";

        // In persist mode, make sure that cookies are written, even if they are empty
        if( opts.persist ) {
            this.persistence.write();
        }
        // Set focus, if possible (this will also fire an event and write a cookie)
        if( this.focusNode && this.focusNode.isVisible() ) {
            this.logDebug("Focus on init: %o", this.focusNode);
            this.focusNode.focus();
        }
        if( !isLazy ) {
            if( opts.onPostInit ) {
                opts.onPostInit.call(this, isReloading, false);
            }
            if( callback ){
                callback.call(this, "ok");
            }
        }
        this.phase = "idle";
    },

    _reloadAjax: function(callback) {
        // Reload
        var opts = this.options;
        if( ! opts.initAjax || ! opts.initAjax.url ){
            throw "tree.reload() requires 'initAjax' mode.";
        }
        var pers = this.persistence;
        var ajaxOpts = jQuery.extend({}, opts.initAjax);
        // Append cookie info to the request
//      this.logDebug("reloadAjax: key=%o, an.key:%o", pers.activeKey, this.activeNode?this.activeNode.data.key:"?");
        if( ajaxOpts.addActiveKey ){
            ajaxOpts.data.activeKey = pers.activeKey;
        }
        if( ajaxOpts.addFocusedKey ){
            ajaxOpts.data.focusedKey = pers.focusedKey;
        }
        if( ajaxOpts.addExpandedKeyList ){
            ajaxOpts.data.expandedKeyList = pers.expandedKeyList.join(",");
        }
        if( ajaxOpts.addSelectedKeyList ){
            ajaxOpts.data.selectedKeyList = pers.selectedKeyList.join(",");
        }
        // Set up onPostInit callback to be called when Ajax returns
        if( ajaxOpts.success ){
            this.logWarning("initAjax: success callback is ignored; use onPostInit instead.");
        }
        if( ajaxOpts.error ){
            this.logWarning("initAjax: error callback is ignored; use onPostInit instead.");
        }
        var isReloading = pers.isReloading();
        ajaxOpts.success = function(dtnode, data, textStatus) {
            if(opts.selectMode == 3){
                dtnode.tree.tnRoot._updatePartSelectionState();
            }
            if(opts.onPostInit){
                opts.onPostInit.call(dtnode.tree, isReloading, false);
            }
            if(callback){
                callback.call(dtnode.tree, "ok");
            }
        };
        ajaxOpts.error = function(dtnode, XMLHttpRequest, textStatus, errorThrown) {
            if(opts.onPostInit){
                opts.onPostInit.call(dtnode.tree, isReloading, true, XMLHttpRequest, textStatus, errorThrown);
            }
            if(callback){
                callback.call(dtnode.tree, "error", XMLHttpRequest, textStatus, errorThrown);
            }
        };
//      }
        this.logDebug("Dynatree._init(): send Ajax request...");
        this.tnRoot.appendAjax(ajaxOpts);
    },

    toString: function() {
//      return "DynaTree '" + this.options.title + "'";
        return "Dynatree '" + this.$tree.attr("id") + "'";
    },

    toDict: function() {
        return this.tnRoot.toDict(true);
    },

    serializeArray: function(stopOnParents) {
        // Return a JavaScript array of objects, ready to be encoded as a JSON
        // string for selected nodes
        var nodeList = this.getSelectedNodes(stopOnParents),
            name = this.$tree.attr("name") || this.$tree.attr("id"),
            arr = [];
        for(var i=0, l=nodeList.length; i<l; i++){
            arr.push({name: name, value: nodeList[i].data.key});
        }
        return arr;
    },

    getPersistData: function() {
        return this.persistence.toDict();
    },

    logDebug: function(msg) {
        if( this.options.debugLevel >= 2 ) {
            Array.prototype.unshift.apply(arguments, ["debug"]);
            _log.apply(this, arguments);
        }
    },

    logInfo: function(msg) {
        if( this.options.debugLevel >= 1 ) {
            Array.prototype.unshift.apply(arguments, ["info"]);
            _log.apply(this, arguments);
        }
    },

    logWarning: function(msg) {
        Array.prototype.unshift.apply(arguments, ["warn"]);
        _log.apply(this, arguments);
    },

    isInitializing: function() {
        return ( this.phase=="init" || this.phase=="postInit" );
    },
    isReloading: function() {
        return ( this.phase=="init" || this.phase=="postInit" ) && this.options.persist && this.persistence.cookiesFound;
    },
    isUserEvent: function() {
        return ( this.phase=="userEvent" );
    },

    redraw: function() {
//      this.logDebug("dynatree.redraw()...");
        this.tnRoot.render(false, false);
//      this.logDebug("dynatree.redraw() done.");
    },
    renderInvisibleNodes: function() {
        this.tnRoot.render(false, true);
    },
    reload: function(callback) {
        this._load(callback);
    },

    getRoot: function() {
        return this.tnRoot;
    },

    enable: function() {
        this.$widget.enable();
    },

    disable: function() {
        this.$widget.disable();
    },

    getNodeByKey: function(key) {
        // Search the DOM by element ID (assuming this is faster than traversing all nodes).
        // jQuery("#...") has problems, if the key contains '.', so we use getElementById()
        var el = document.getElementById(this.options.idPrefix + key);
        if( el ){
            return el.dtnode ? el.dtnode : null;
        }
        // Not found in the DOM, but still may be in an unrendered part of tree
        var match = null;
        this.visit(function(node){
//          window.console.log("%s", node);
            if(node.data.key == key) {
                match = node;
                return false;
            }
        }, true);
        return match;
    },

    getActiveNode: function() {
        return this.activeNode;
    },

    reactivate: function(setFocus) {
        // Re-fire onQueryActivate and onActivate events.
        var node = this.activeNode;
//      this.logDebug("reactivate %o", node);
        if( node ) {
            this.activeNode = null; // Force re-activating
            node.activate();
            if( setFocus ){
                node.focus();
            }
        }
    },

    getSelectedNodes: function(stopOnParents) {
        var nodeList = [];
        this.tnRoot.visit(function(node){
            if( node.bSelected ) {
                nodeList.push(node);
                if( stopOnParents === true ){
                    return "skip"; // stop processing this branch
                }
            }
        });
        return nodeList;
    },

    activateKey: function(key) {
        var dtnode = (key === null) ? null : this.getNodeByKey(key);
        if( !dtnode ) {
            if( this.activeNode ){
                this.activeNode.deactivate();
            }
            this.activeNode = null;
            return null;
        }
        dtnode.focus();
        dtnode.activate();
        return dtnode;
    },

    loadKeyPath: function(keyPath, callback) {
        var segList = keyPath.split(this.options.keyPathSeparator);
        // Remove leading '/'
        if(segList[0] === ""){
            segList.shift();
        }
        // Remove leading system root key
        if(segList[0] == this.tnRoot.data.key){
            this.logDebug("Removed leading root key.");
            segList.shift();
        }
        keyPath = segList.join(this.options.keyPathSeparator);
        return this.tnRoot._loadKeyPath(keyPath, callback);
    },

    selectKey: function(key, select) {
        var dtnode = this.getNodeByKey(key);
        if( !dtnode ){
            return null;
        }
        dtnode.select(select);
        return dtnode;
    },

    enableUpdate: function(bEnable) {
        if ( this.bEnableUpdate==bEnable ){
            return bEnable;
        }
        this.bEnableUpdate = bEnable;
        if ( bEnable ){
            this.redraw();
        }
        return !bEnable; // return previous value
    },

    count: function() {
        return this.tnRoot.countChildren();
    },

    visit: function(fn, includeRoot) {
        return this.tnRoot.visit(fn, includeRoot);
    },

    _createFromTag: function(parentTreeNode, $ulParent) {
        // Convert a <UL>...</UL> list into children of the parent tree node.
        var self = this;
/*
TODO: better?
        this.$lis = jQuery("li:has(a[href])", this.element);
        this.$tabs = this.$lis.map(function() { return jQuery("a", this)[0]; });
 */
        $ulParent.find(">li").each(function() {
            var $li = jQuery(this),
                $liSpan = $li.find(">span:first"),
                $liA = $li.find(">a:first"),
                title,
                href = null,
                target = null,
                tooltip;
            if( $liSpan.length ) {
                // If a <li><span> tag is specified, use it literally.
                title = $liSpan.html();
            } else if( $liA.length ) {
                title = $liA.html();
                href = $liA.attr("href");
                target = $liA.attr("target");
                tooltip = $liA.attr("title");
            } else {
                // If only a <li> tag is specified, use the trimmed string up to
                // the next child <ul> tag.
                title = $li.html();
                var iPos = title.search(/<ul/i);
                if( iPos >= 0 ){
                    title = jQuery.trim(title.substring(0, iPos));
                }else{
                    title = jQuery.trim(title);
                }
//              self.logDebug("%o", title);
            }
            // Parse node options from ID, title and class attributes
            var data = {
                title: title,
                tooltip: tooltip,
                isFolder: $li.hasClass("folder"),
                isLazy: $li.hasClass("lazy"),
                expand: $li.hasClass("expanded"),
                select: $li.hasClass("selected"),
                activate: $li.hasClass("active"),
                focus: $li.hasClass("focused"),
                noLink: $li.hasClass("noLink")
            };
            if( href ){
                data.href = href;
                data.target = target;
            }
            if( $li.attr("title") ){
                data.tooltip = $li.attr("title"); // overrides <a title='...'>
            }
            if( $li.attr("id") ){
                data.key = $li.attr("id");
            }
            // If a data attribute is present, evaluate as a JavaScript object
            if( $li.attr("data") ) {
                var dataAttr = jQuery.trim($li.attr("data"));
                if( dataAttr ) {
                    if( dataAttr.charAt(0) != "{" ){
                        dataAttr = "{" + dataAttr + "}";
                    }
                    try {
                        jQuery.extend(data, eval("(" + dataAttr + ")"));
                    } catch(e) {
                        throw ("Error parsing node data: " + e + "\ndata:\n'" + dataAttr + "'");
                    }
                }
            }
            var childNode = parentTreeNode.addChild(data);
            // Recursive reading of child nodes, if LI tag contains an UL tag
            var $ul = $li.find(">ul:first");
            if( $ul.length ) {
                self._createFromTag(childNode, $ul); // must use 'self', because 'this' is the each() context
            }
        });
    },

    _checkConsistency: function() {
//      this.logDebug("tree._checkConsistency() NOT IMPLEMENTED - %o", this);
    },

    _setDndStatus: function(sourceNode, targetNode, helper, hitMode, accept) {
        // hitMode: 'after', 'before', 'over', 'out', 'start', 'stop'
        var $source = sourceNode ? jQuery(sourceNode.span) : null,
            $target = jQuery(targetNode.span);
        if( !this.$dndMarker ) {
            this.$dndMarker = jQuery("<div id='dynatree-drop-marker'></div>")
                .hide()
                .prependTo(jQuery(this.divTree).parent());
//              .prependTo("body");
//          logMsg("Creating marker: %o", this.$dndMarker);
        }
/*
        if(hitMode === "start"){
        }
        if(hitMode === "stop"){
//          sourceNode.removeClass("dynatree-drop-target");
        }
*/
//      this.$dndMarker.attr("class", hitMode);
        if(hitMode === "after" || hitMode === "before" || hitMode === "over"){
//          $source && $source.addClass("dynatree-drag-source");
            var pos = $target.offset();
            switch(hitMode){
            case "before":
                this.$dndMarker.removeClass("dynatree-drop-after dynatree-drop-over");
                this.$dndMarker.addClass("dynatree-drop-before");
                pos.top -= 8;
                break;
            case "after":
                this.$dndMarker.removeClass("dynatree-drop-before dynatree-drop-over");
                this.$dndMarker.addClass("dynatree-drop-after");
                pos.top += 8;
                break;
            default:
                this.$dndMarker.removeClass("dynatree-drop-after dynatree-drop-before");
                this.$dndMarker.addClass("dynatree-drop-over");
                $target.addClass("dynatree-drop-target");
                pos.left += 8;
            }
//          logMsg("Creating marker: %o", this.$dndMarker);
//          logMsg("    $target.offset=%o", $target);
//          logMsg("    pos/$target.offset=%o", pos);
//          logMsg("    $target.position=%o", $target.position());
//          logMsg("    $target.offsetParent=%o, ot:%o", $target.offsetParent(), $target.offsetParent().offset());
//          logMsg("    jQuery(this.divTree).offset=%o", jQuery(this.divTree).offset());
//          logMsg("    jQuery(this.divTree).parent=%o", jQuery(this.divTree).parent());

            this.$dndMarker.offset({left: pos.left, top: pos.top})
                .css({
                    "z-index": 1000
                })
                .show();
//          helper.addClass("dynatree-drop-hover");
        } else {
//          $source && $source.removeClass("dynatree-drag-source");
            $target.removeClass("dynatree-drop-target");
            this.$dndMarker.hide();
//          helper.removeClass("dynatree-drop-hover");
        }
        if(hitMode === "after"){
            $target.addClass("dynatree-drop-after");
        } else {
            $target.removeClass("dynatree-drop-after");
        }
        if(hitMode === "before"){
            $target.addClass("dynatree-drop-before");
        } else {
            $target.removeClass("dynatree-drop-before");
        }
        if(accept === true){
            if($source){
                $source.addClass("dynatree-drop-accept");
            }
            $target.addClass("dynatree-drop-accept");
            helper.addClass("dynatree-drop-accept");
        }else{
            if($source){
                $source.removeClass("dynatree-drop-accept");
            }
            $target.removeClass("dynatree-drop-accept");
            helper.removeClass("dynatree-drop-accept");
        }
        if(accept === false){
            if($source){
                $source.addClass("dynatree-drop-reject");
            }
            $target.addClass("dynatree-drop-reject");
            helper.addClass("dynatree-drop-reject");
        }else{
            if($source){
                $source.removeClass("dynatree-drop-reject");
            }
            $target.removeClass("dynatree-drop-reject");
            helper.removeClass("dynatree-drop-reject");
        }
    },

    _onDragEvent: function(eventName, node, otherNode, event, ui, draggable) {
        /**
         * Handles drag'n'drop functionality.
         *
         * A standard jQuery drag-and-drop process may generate these calls:
         *
         * draggable helper():
         *     _onDragEvent("helper", sourceNode, null, event, null, null);
         * start:
         *     _onDragEvent("start", sourceNode, null, event, ui, draggable);
         * drag:
         *     _onDragEvent("leave", prevTargetNode, sourceNode, event, ui, draggable);
         *     _onDragEvent("over", targetNode, sourceNode, event, ui, draggable);
         *     _onDragEvent("enter", targetNode, sourceNode, event, ui, draggable);
         * stop:
         *     _onDragEvent("drop", targetNode, sourceNode, event, ui, draggable);
         *     _onDragEvent("leave", targetNode, sourceNode, event, ui, draggable);
         *     _onDragEvent("stop", sourceNode, null, event, ui, draggable);
         */
//      if(eventName !== "over"){
//          this.logDebug("tree._onDragEvent(%s, %o, %o) - %o", eventName, node, otherNode, this);
//      }
        var opts = this.options;
        var dnd = this.options.dnd;
        var res = null;
        var nodeTag = jQuery(node.span);
        var hitMode;

        switch (eventName) {
        case "helper":
            // Only event and node argument is available
            var helper = jQuery("<div class='dynatree-drag-helper'><span class='dynatree-drag-helper-img' /></div>")
                .append(jQuery(event.target).closest('a').clone());
            // Attach node reference to helper object
            helper.data("dtSourceNode", node);
//          this.logDebug("helper.sourceNode=%o", helper.data("dtSourceNode"));
            res = helper;
            break;
        case "start":
            if(node.isStatusNode()) {
                res = false;
            } else if(dnd.onDragStart) {
                res = dnd.onDragStart(node);
            }
            if(res === false) {
                this.logDebug("tree.onDragStart() cancelled");
                //draggable._clear();
                // NOTE: the return value seems to be ignored (drag is not canceled, when false is returned)
                ui.helper.trigger("mouseup");
                ui.helper.hide();
            } else {
                nodeTag.addClass("dynatree-drag-source");
            }
            break;
        case "enter":
            res = dnd.onDragEnter ? dnd.onDragEnter(node, otherNode) : null;
            res = {
                over: (res !== false) && ((res === true) || (res === "over") || jQuery.inArray("over", res) >= 0),
                before: (res !== false) && ((res === true) || (res === "before") || jQuery.inArray("before", res) >= 0),
                after: (res !== false) && ((res === true) || (res === "after") || jQuery.inArray("after", res) >= 0)
            };
            ui.helper.data("enterResponse", res);
//          this.logDebug("helper.enterResponse: %o", res);
            break;
        case "over":
            var enterResponse = ui.helper.data("enterResponse");
            hitMode = null;
            if(enterResponse === false){
                // Don't call onDragOver if onEnter returned false.
                break;
            } else if(typeof enterResponse === "string") {
                // Use hitMode from onEnter if provided.
                hitMode = enterResponse;
            } else {
                // Calculate hitMode from relative cursor position.
                var nodeOfs = nodeTag.offset();
//              var relPos = { x: event.clientX - nodeOfs.left,
//                          y: event.clientY - nodeOfs.top };
//              nodeOfs.top += this.parentTop;
//              nodeOfs.left += this.parentLeft;
                var relPos = { x: event.pageX - nodeOfs.left,
                               y: event.pageY - nodeOfs.top };
                var relPos2 = { x: relPos.x / nodeTag.width(),
                                y: relPos.y / nodeTag.height() };
//              this.logDebug("event.page: %s/%s", event.pageX, event.pageY);
//              this.logDebug("event.client: %s/%s", event.clientX, event.clientY);
//              this.logDebug("nodeOfs: %s/%s", nodeOfs.left, nodeOfs.top);
////                this.logDebug("parent: %s/%s", this.parentLeft, this.parentTop);
//              this.logDebug("relPos: %s/%s", relPos.x, relPos.y);
//              this.logDebug("relPos2: %s/%s", relPos2.x, relPos2.y);
                if( enterResponse.after && relPos2.y > 0.75 ){
                    hitMode = "after";
                } else if(!enterResponse.over && enterResponse.after && relPos2.y > 0.5 ){
                    hitMode = "after";
                } else if(enterResponse.before && relPos2.y <= 0.25) {
                    hitMode = "before";
                } else if(!enterResponse.over && enterResponse.before && relPos2.y <= 0.5) {
                    hitMode = "before";
                } else if(enterResponse.over) {
                    hitMode = "over";
                }
                // Prevent no-ops like 'before source node'
                // TODO: these are no-ops when moving nodes, but not in copy mode
                if( dnd.preventVoidMoves ){
                    if(node === otherNode){
//                      this.logDebug("    drop over source node prevented");
                        hitMode = null;
                    }else if(hitMode === "before" && otherNode && node === otherNode.getNextSibling()){
//                      this.logDebug("    drop after source node prevented");
                        hitMode = null;
                    }else if(hitMode === "after" && otherNode && node === otherNode.getPrevSibling()){
//                      this.logDebug("    drop before source node prevented");
                        hitMode = null;
                    }else if(hitMode === "over" && otherNode
                            && otherNode.parent === node && otherNode.isLastSibling() ){
//                      this.logDebug("    drop last child over own parent prevented");
                        hitMode = null;
                    }
                }
//              this.logDebug("hitMode: %s - %s - %s", hitMode, (node.parent === otherNode), node.isLastSibling());
                ui.helper.data("hitMode", hitMode);
            }
            // Auto-expand node (only when 'over' the node, not 'before', or 'after')
            if(hitMode === "over"
                && dnd.autoExpandMS && node.hasChildren() !== false && !node.bExpanded) {
                node.scheduleAction("expand", dnd.autoExpandMS);
            }
            if(hitMode && dnd.onDragOver){
                res = dnd.onDragOver(node, otherNode, hitMode);
            }
            this._setDndStatus(otherNode, node, ui.helper, hitMode, res!==false);
            break;
        case "drop":
            hitMode = ui.helper.data("hitMode");
            if(hitMode && dnd.onDrop){
                dnd.onDrop(node, otherNode, hitMode, ui, draggable);
            }
            break;
        case "leave":
            // Cancel pending expand request
            node.scheduleAction("cancel");
            ui.helper.data("enterResponse", null);
            ui.helper.data("hitMode", null);
            this._setDndStatus(otherNode, node, ui.helper, "out", undefined);
            if(dnd.onDragLeave){
                dnd.onDragLeave(node, otherNode);
            }
            break;
        case "stop":
            nodeTag.removeClass("dynatree-drag-source");
            if(dnd.onDragStop){
                dnd.onDragStop(node);
            }
            break;
        default:
            throw "Unsupported drag event: " + eventName;
        }
        return res;
    },

    cancelDrag: function() {
         var dd = jQuery.ui.ddmanager.current;
         if(dd){
             dd.cancel();
         }
    },

    // --- end of class
    lastentry: undefined
};

/*************************************************************************
 * Widget jQuery(..).dynatree
 */

jQuery.widget("ui.dynatree", {
/*
    init: function() {
        // ui.core 1.6 renamed init() to _init(): this stub assures backward compatibility
        _log("warn", "ui.dynatree.init() was called; you should upgrade to jquery.ui.core.js v1.8 or higher.");
        return this._init();
    },
 */
    _init: function() {
        if( parseFloat(jQuery.ui.version) < 1.8 ) {
            // jquery.ui.core 1.8 renamed _init() to _create(): this stub assures backward compatibility
            if(this.options.debugLevel >= 0){
                _log("warn", "ui.dynatree._init() was called; you should upgrade to jquery.ui.core.js v1.8 or higher.");
            }
            return this._create();
        }
        // jquery.ui.core 1.8 still uses _init() to perform "default functionality"
        if(this.options.debugLevel >= 2){
            _log("debug", "ui.dynatree._init() was called; no current default functionality.");
        }
    },

    _create: function() {
        var opts = this.options;
        if(opts.debugLevel >= 1){
            logMsg("Dynatree._create(): version='%s', debugLevel=%o.", jQuery.ui.dynatree.version, this.options.debugLevel);
        }
        // The widget framework supplies this.element and this.options.
        this.options.event += ".dynatree"; // namespace event

        var divTree = this.element.get(0);
/*      // Clear container, in case it contained some 'waiting' or 'error' text
        // for clients that don't support JS
        if( opts.children || (opts.initAjax && opts.initAjax.url) || opts.initId )
            jQuery(divTree).empty();
*/
        // Create the DynaTree object
        this.tree = new DynaTree(this);
        this.tree._load();
        this.tree.logDebug("Dynatree._init(): done.");
    },

    bind: function() {
        // Prevent duplicate binding
        this.unbind();

        var eventNames = "click.dynatree dblclick.dynatree";
        if( this.options.keyboard ){
            // Note: leading ' '!
            eventNames += " keypress.dynatree keydown.dynatree";
        }
        this.element.bind(eventNames, function(event){
            var dtnode = getDtNodeFromElement(event.target);
            if( !dtnode ){
                return true;  // Allow bubbling of other events
            }
            var tree = dtnode.tree;
            var o = tree.options;
            tree.logDebug("event(%s): dtnode: %s", event.type, dtnode);
            var prevPhase = tree.phase;
            tree.phase = "userEvent";
            try {
                switch(event.type) {
                case "click":
                    return ( o.onClick && o.onClick.call(tree, dtnode, event)===false ) ? false : dtnode._onClick(event);
                case "dblclick":
                    return ( o.onDblClick && o.onDblClick.call(tree, dtnode, event)===false ) ? false : dtnode._onDblClick(event);
                case "keydown":
                    return ( o.onKeydown && o.onKeydown.call(tree, dtnode, event)===false ) ? false : dtnode._onKeydown(event);
                case "keypress":
                    return ( o.onKeypress && o.onKeypress.call(tree, dtnode, event)===false ) ? false : dtnode._onKeypress(event);
                }
            } catch(e) {
                var _ = null; // issue 117
                tree.logWarning("bind(%o): dtnode: %o, error: %o", event, dtnode, e);
            } finally {
                tree.phase = prevPhase;
            }
        });

        // focus/blur don't bubble, i.e. are not delegated to parent <div> tags,
        // so we use the addEventListener capturing phase.
        // See http://www.howtocreate.co.uk/tutorials/javascript/domevents
        function __focusHandler(event) {
            // Handles blur and focus.
            // Fix event for IE:
            // doesn't pass JSLint:
//          event = arguments[0] = jQuery.event.fix( event || window.event );
            // what jQuery does:
//          var args = jQuery.makeArray( arguments );
//          event = args[0] = jQuery.event.fix( event || window.event );
            event = jQuery.event.fix( event || window.event );
            var dtnode = getDtNodeFromElement(event.target);
            return dtnode ? dtnode._onFocus(event) : false;
        }
        var div = this.tree.divTree;
        if( div.addEventListener ) {
            div.addEventListener("focus", __focusHandler, true);
            div.addEventListener("blur", __focusHandler, true);
        } else {
            div.onfocusin = div.onfocusout = __focusHandler;
        }
        // EVENTS
        // disable click if event is configured to something else
//      if (!(/^click/).test(o.event))
//          this.$tabs.bind("click.tabs", function() { return false; });

    },

    unbind: function() {
        this.element.unbind(".dynatree");
    },

/* TODO: we could handle option changes during runtime here (maybe to re-render, ...)
    setData: function(key, value) {
        this.tree.logDebug("dynatree.setData('" + key + "', '" + value + "')");
    },
*/
    enable: function() {
        this.bind();
        // Call default disable(): remove -disabled from css:
        jQuery.Widget.prototype.enable.apply(this, arguments);
    },

    disable: function() {
        this.unbind();
        // Call default disable(): add -disabled to css:
        jQuery.Widget.prototype.disable.apply(this, arguments);
    },

    // --- getter methods (i.e. NOT returning a reference to $)
    getTree: function() {
        return this.tree;
    },

    getRoot: function() {
        return this.tree.getRoot();
    },

    getActiveNode: function() {
        return this.tree.getActiveNode();
    },

    getSelectedNodes: function() {
        return this.tree.getSelectedNodes();
    },

    // ------------------------------------------------------------------------
    lastentry: undefined
});


// The following methods return a value (thus breaking the jQuery call chain):
if( parseFloat(jQuery.ui.version) < 1.8 ) {
    jQuery.ui.dynatree.getter = "getTree getRoot getActiveNode getSelectedNodes";
}

/*******************************************************************************
 * Tools in ui.dynatree namespace
 */
jQuery.ui.dynatree.version = "$Version: 1.2.0$";

/**
 * Return a DynaTreeNode object for a given DOM element
 */
jQuery.ui.dynatree.getNode = function(el) {
    if(el instanceof DynaTreeNode){
        return el; // el already was a DynaTreeNode
    }
    // TODO: for some reason $el.parents("[dtnode]") does not work (jQuery 1.6.1)
    // maybe, because dtnode is a property, not an attribute
    var $el = el.selector === undefined ? jQuery(el) : el,
//      parent = $el.closest("[dtnode]"),
        parent = $el.parents("[dtnode]").first(),
        node;
    if(typeof parent.prop == "function"){
        node = parent.prop("dtnode");
    }else{ // pre jQuery 1.6
        node = parent.attr("dtnode");
    }
    return node;
}

/**Return persistence information from cookies.*/
jQuery.ui.dynatree.getPersistData = DynaTreeStatus._getTreePersistData;

/*******************************************************************************
 * Plugin default options:
 */
jQuery.ui.dynatree.prototype.options = {
    title: "Dynatree", // Tree's name (only used for debug outpu)
    minExpandLevel: 1, // 1: root node is not collapsible
    imagePath: null, // Path to a folder containing icons. Defaults to 'skin/' subdirectory.
    children: null, // Init tree structure from this object array.
    initId: null, // Init tree structure from a <ul> element with this ID.
    initAjax: null, // Ajax options used to initialize the tree strucuture.
    autoFocus: true, // Set focus to first child, when expanding or lazy-loading.
    keyboard: true, // Support keyboard navigation.
    persist: false, // Persist expand-status to a cookie
    autoCollapse: false, // Automatically collapse all siblings, when a node is expanded.
    clickFolderMode: 3, // 1:activate, 2:expand, 3:activate and expand
    activeVisible: true, // Make sure, active nodes are visible (expanded).
    checkbox: false, // Show checkboxes.
    selectMode: 2, // 1:single, 2:multi, 3:multi-hier
    fx: null, // Animations, e.g. null or { height: "toggle", duration: 200 }
    noLink: false, // Use <span> instead of <a> tags for all nodes
    // Low level event handlers: onEvent(dtnode, event): return false, to stop default processing
    onClick: null, // null: generate focus, expand, activate, select events.
    onDblClick: null, // (No default actions.)
    onKeydown: null, // null: generate keyboard navigation (focus, expand, activate).
    onKeypress: null, // (No default actions.)
    onFocus: null, // null: set focus to node.
    onBlur: null, // null: remove focus from node.

    // Pre-event handlers onQueryEvent(flag, dtnode): return false, to stop processing
    onQueryActivate: null, // Callback(flag, dtnode) before a node is (de)activated.
    onQuerySelect: null, // Callback(flag, dtnode) before a node is (de)selected.
    onQueryExpand: null, // Callback(flag, dtnode) before a node is expanded/collpsed.

    // High level event handlers
    onPostInit: null, // Callback(isReloading, isError) when tree was (re)loaded.
    onActivate: null, // Callback(dtnode) when a node is activated.
    onDeactivate: null, // Callback(dtnode) when a node is deactivated.
    onSelect: null, // Callback(flag, dtnode) when a node is (de)selected.
    onExpand: null, // Callback(flag, dtnode) when a node is expanded/collapsed.
    onLazyRead: null, // Callback(dtnode) when a lazy node is expanded for the first time.
    onCustomRender: null, // Callback(dtnode) before a node is rendered. Return a HTML string to override.
    onCreate: null, // Callback(dtnode, nodeSpan) after a node was rendered for the first time.
    onRender: null, // Callback(dtnode, nodeSpan) after a node was rendered.

    // Drag'n'drop support
    dnd: {
        // Make tree nodes draggable:
        onDragStart: null, // Callback(sourceNode), return true, to enable dnd
        onDragStop: null, // Callback(sourceNode)
//      helper: null,
        // Make tree nodes accept draggables
        autoExpandMS: 1000, // Expand nodes after n milliseconds of hovering.
        preventVoidMoves: true, // Prevent dropping nodes 'before self', etc.
        onDragEnter: null, // Callback(targetNode, sourceNode)
        onDragOver: null, // Callback(targetNode, sourceNode, hitMode)
        onDrop: null, // Callback(targetNode, sourceNode, hitMode)
        onDragLeave: null // Callback(targetNode, sourceNode)
    },
    ajaxDefaults: { // Used by initAjax option
        cache: false, // false: Append random '_' argument to the request url to prevent caching.
        dataType: "json" // Expect json format and pass json object to callbacks.
    },
    strings: {
        loading: "Loading&#8230;",
        loadError: "Load error!"
    },
    generateIds: false, // Generate id attributes like <span id='dynatree-id-KEY'>
    idPrefix: "dynatree-id-", // Used to generate node id's like <span id="dynatree-id-<key>">.
    keyPathSeparator: "/", // Used by node.getKeyPath() and tree.loadKeyPath().
//    cookieId: "dynatree-cookie", // Choose a more unique name, to allow multiple trees.
    cookieId: "dynatree", // Choose a more unique name, to allow multiple trees.
    cookie: {
        expires: null //7, // Days or Date; null: session cookie
//      path: "/", // Defaults to current page
//      domain: "jquery.com",
//      secure: true
    },
    // Class names used, when rendering the HTML markup.
    // Note: if only single entries are passed for options.classNames, all other
    // values are still set to default.
    classNames: {
        container: "dynatree-container",
        node: "dynatree-node",
        folder: "dynatree-folder",
//      document: "dynatree-document",

        empty: "dynatree-empty",
        vline: "dynatree-vline",
        expander: "dynatree-expander",
        connector: "dynatree-connector",
        checkbox: "dynatree-checkbox",
        nodeIcon: "dynatree-icon",
        title: "dynatree-title",
        noConnector: "dynatree-no-connector",

        nodeError: "dynatree-statusnode-error",
        nodeWait: "dynatree-statusnode-wait",
        hidden: "dynatree-hidden",
        combinedExpanderPrefix: "dynatree-exp-",
        combinedIconPrefix: "dynatree-ico-",
        nodeLoading: "dynatree-loading",
//      disabled: "dynatree-disabled",
        hasChildren: "dynatree-has-children",
        active: "dynatree-active",
        selected: "dynatree-selected",
        expanded: "dynatree-expanded",
        lazy: "dynatree-lazy",
        focused: "dynatree-focused",
        partsel: "dynatree-partsel",
        lastsib: "dynatree-lastsib"
    },
    debugLevel: 1,

    // ------------------------------------------------------------------------
    lastentry: undefined
};
//
if( parseFloat(jQuery.ui.version) < 1.8 ) {
    jQuery.ui.dynatree.defaults = jQuery.ui.dynatree.prototype.options;
}

/*******************************************************************************
 * Reserved data attributes for a tree node.
 */
jQuery.ui.dynatree.nodedatadefaults = {
    title: null, // (required) Displayed name of the node (html is allowed here)
    key: null, // May be used with activate(), select(), find(), ...
    isFolder: false, // Use a folder icon. Also the node is expandable but not selectable.
    isLazy: false, // Call onLazyRead(), when the node is expanded for the first time to allow for delayed creation of children.
    tooltip: null, // Show this popup text.
    icon: null, // Use a custom image (filename relative to tree.options.imagePath). 'null' for default icon, 'false' for no icon.
    addClass: null, // Class name added to the node's span tag.
    noLink: false, // Use <span> instead of <a> tag for this node
    activate: false, // Initial active status.
    focus: false, // Initial focused status.
    expand: false, // Initial expanded status.
    select: false, // Initial selected status.
    hideCheckbox: false, // Suppress checkbox display for this node.
    unselectable: false, // Prevent selection.
//  disabled: false,
    // The following attributes are only valid if passed to some functions:
    children: null, // Array of child nodes.
    // NOTE: we can also add custom attributes here.
    // This may then also be used in the onActivate(), onSelect() or onLazyTree() callbacks.
    // ------------------------------------------------------------------------
    lastentry: undefined
};

/*******************************************************************************
 * Drag and drop support
 */
function _initDragAndDrop(tree) {
    var dnd = tree.options.dnd || null;
    // Register 'connectToDynatree' option with ui.draggable
    if(dnd && (dnd.onDragStart || dnd.onDrop)) {
        _registerDnd();
    }
    // Attach ui.draggable to this Dynatree instance
    if(dnd && dnd.onDragStart ) {
        tree.$tree.draggable({
            addClasses: false,
            appendTo: "body",
            containment: false,
            delay: 0,
            distance: 4,
            revert: false,
            // Delegate draggable.start, drag, and stop events to our handler
            connectToDynatree: true,
            // Let source tree create the helper element
            helper: function(event) {
                var sourceNode = getDtNodeFromElement(event.target);
                return sourceNode.tree._onDragEvent("helper", sourceNode, null, event, null, null);
            },
            _last: null
        });
    }
    // Attach ui.droppable to this Dynatree instance
    if(dnd && dnd.onDrop) {
        tree.$tree.droppable({
            addClasses: false,
            tolerance: "intersect",
            greedy: false,
            _last: null
        });
    }
}

//--- Extend ui.draggable event handling --------------------------------------
var didRegisterDnd = false;
var _registerDnd = function() {
    if(didRegisterDnd){
        return;
    }
    jQuery.ui.plugin.add("draggable", "connectToDynatree", {
        start: function(event, ui) {
            var draggable = jQuery(this).data("draggable");
            var sourceNode = ui.helper.data("dtSourceNode") || null;
//          logMsg("draggable-connectToDynatree.start, %s", sourceNode);
//          logMsg("    this: %o", this);
//          logMsg("    event: %o", event);
//          logMsg("    draggable: %o", draggable);
//          logMsg("    ui: %o", ui);
            if(sourceNode) {
                // Adjust helper offset, so cursor is slightly outside top/left corner
//              draggable.offset.click.top -= event.target.offsetTop;
//              draggable.offset.click.left -= event.target.offsetLeft;
                draggable.offset.click.top = -2;
                draggable.offset.click.left = + 16;
//              logMsg("    draggable.offset.click FIXED: %s/%s", draggable.offset.click.left, draggable.offset.click.top);
                // Trigger onDragStart event
                // TODO: when called as connectTo..., the return value is ignored(?)
                return sourceNode.tree._onDragEvent("start", sourceNode, null, event, ui, draggable);
            }
        },
        drag: function(event, ui) {
            var draggable = jQuery(this).data("draggable");
            var sourceNode = ui.helper.data("dtSourceNode") || null;
            var prevTargetNode = ui.helper.data("dtTargetNode") || null;
            var targetNode = getDtNodeFromElement(event.target);
//          logMsg("getDtNodeFromElement(%o): %s", event.target, targetNode);
            if(event.target && !targetNode){
                // We got a drag event, but the targetNode could not be found
                // at the event location. This may happen, if the mouse
                // jumped over the drag helper, in which case we ignore it:
                var isHelper = jQuery(event.target).closest("div.dynatree-drag-helper,#dynatree-drop-marker").length > 0;
                if(isHelper){
//                  logMsg("Drag event over helper: ignored.");
                    return;
                }
            }
//          logMsg("draggable-connectToDynatree.drag: targetNode(from event): %s, dtTargetNode: %s", targetNode, ui.helper.data("dtTargetNode"));
            ui.helper.data("dtTargetNode", targetNode);
            // Leaving a tree node
            if(prevTargetNode && prevTargetNode !== targetNode ) {
                prevTargetNode.tree._onDragEvent("leave", prevTargetNode, sourceNode, event, ui, draggable);
            }
            if(targetNode){
                if(!targetNode.tree.options.dnd.onDrop) {
                    // not enabled as drop target
                    noop(); // Keep JSLint happy
                } else if(targetNode === prevTargetNode) {
                    // Moving over same node
                    targetNode.tree._onDragEvent("over", targetNode, sourceNode, event, ui, draggable);
                }else{
                    // Entering this node first time
                    targetNode.tree._onDragEvent("enter", targetNode, sourceNode, event, ui, draggable);
                }
            }
            // else go ahead with standard event handling
        },
        stop: function(event, ui) {
            var draggable = jQuery(this).data("draggable");
            var sourceNode = ui.helper.data("dtSourceNode") || null;
            var targetNode = ui.helper.data("dtTargetNode") || null;
//          logMsg("draggable-connectToDynatree.stop: targetNode(from event): %s, dtTargetNode: %s", targetNode, ui.helper.data("dtTargetNode"));
//          logMsg("draggable-connectToDynatree.stop, %s", sourceNode);
            var mouseDownEvent = draggable._mouseDownEvent;
            var eventType = event.type;
//          logMsg("    type: %o, downEvent: %o, upEvent: %o", eventType, mouseDownEvent, event);
//          logMsg("    targetNode: %o", targetNode);
            var dropped = (eventType == "mouseup" && event.which == 1);
            if(!dropped){
                logMsg("Drag was cancelled");
            }
            if(targetNode) {
                if(dropped){
                    targetNode.tree._onDragEvent("drop", targetNode, sourceNode, event, ui, draggable);
                }
                targetNode.tree._onDragEvent("leave", targetNode, sourceNode, event, ui, draggable);
            }
            if(sourceNode){
                sourceNode.tree._onDragEvent("stop", sourceNode, null, event, ui, draggable);
            }
        }
    });
    didRegisterDnd = true;
};

// ---------------------------------------------------------------------------
})(jQuery);

// ===========================================================================

(function(jQuery){
  function trim(el) {
    return (''.trim) ? el.val().trim() : jQuery.trim(el.val());
  }
  jQuery.fn.isHappy = function (config) {
    var fields = [], item;

    function getError(error) {
      return jQuery('<span id="'+error.id+'" class="unhappyMessage">'+error.message+'</span>');
    }
    function handleSubmit() {
      var errors = false, i, l;
      for (i = 0, l = fields.length; i < l; i += 1) {
        if (!fields[i].testValid(true)) {
          errors = true;
        }
      }
      if (errors) {
        if (isFunction(config.unHappy)) config.unHappy();
        return false;
      } else if (config.testMode) {
        if (window.console) console.warn('would have submitted');
        return false;
      }
      return true;
    }
    function isFunction (obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    }
    function processField(opts, selector) {
      var field = jQuery(selector),
        error = {
          message: opts.message,
          id: selector.slice(1) + '_unhappy'
        },
        errorEl = jQuery(error.id).length > 0 ? jQuery(error.id) : getError(error);

      fields.push(field);
      field.testValid = function (submit) {
        var val,
          el = jQuery(this),
          gotFunc,
          error = false,
          temp,
          required = !!el.get(0).attributes.getNamedItem('required') || opts.required,
          password = (field.attr('type') === 'password'),
          arg = isFunction(opts.arg) ? opts.arg() : opts.arg;

        // clean it or trim it
        if (isFunction(opts.clean)) {
          val = opts.clean(el.val());
        } else if (!opts.trim && !password) {
          val = trim(el);
        } else {
          val = el.val();
        }

        // write it back to the field
        el.val(val);

        // get the value
        gotFunc = ((val.length > 0 || required === 'sometimes') && isFunction(opts.test));

        // check if we've got an error on our hands
        if (submit === true && required === true && val.length === 0) {
          error = true;
        } else if (gotFunc) {
          error = !opts.test(val, arg);
        }

        if (error) {
          el.addClass('unhappy').before(errorEl);
          return false;
        } else {
          temp = errorEl.get(0);
          // this is for zepto
          if (temp.parentNode) {
            temp.parentNode.removeChild(temp);
          }
          el.removeClass('unhappy');
          return true;
        }
      };
      field.bind(config.when || 'blur', field.testValid);
    }

    for (item in config.fields) {
      processField(config.fields[item], item);
    }

    if (config.submitButton) {
      jQuery(config.submitButton).click(handleSubmit);
    } else {
      this.bind('submit', handleSubmit);
    }
    return this;
  };
})(this.jQuery || this.Zepto);


// ===========================================================================


// Chosen, a Select Box Enhancer for jQuery and Prototype
// by Patrick Filler for Harvest, http://getharvest.com
//
// Version 1.0.0
// Full source at https://github.com/harvesthq/chosen
// Copyright (c) 2011 Harvest http://getharvest.com

// MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
// This file is generated by `grunt build`, do not edit it by hand.
(function() {
  var $, AbstractChosen, Chosen, SelectParser, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SelectParser = (function() {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }

    SelectParser.prototype.add_node = function(child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };

    SelectParser.prototype.add_group = function(group) {
      var group_position, option, _i, _len, _ref, _results;

      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: this.escapeExpression(group.label),
        children: 0,
        disabled: group.disabled
      });
      _ref = group.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        _results.push(this.add_option(option, group_position, group.disabled));
      }
      return _results;
    };

    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }
        return this.options_index += 1;
      }
    };

    SelectParser.prototype.escapeExpression = function(text) {
      var map, unsafe_chars;

      if ((text == null) || text === false) {
        return "";
      }
      if (!/[\&\<\>\"\'\`]/.test(text)) {
        return text;
      }
      map = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      };
      unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
      return text.replace(unsafe_chars, function(chr) {
        return map[chr] || "&amp;";
      });
    };

    return SelectParser;

  })();

  SelectParser.select_to_array = function(select) {
    var child, parser, _i, _len, _ref;

    parser = new SelectParser();
    _ref = select.childNodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      parser.add_node(child);
    }
    return parser.parsed;
  };

  AbstractChosen = (function() {
    function AbstractChosen(form_field, options) {
      this.form_field = form_field;
      this.options = options != null ? options : {};
      if (!AbstractChosen.browser_is_supported()) {
        return;
      }
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
    }

    AbstractChosen.prototype.set_default_values = function() {
      var _this = this;

      this.click_test_action = function(evt) {
        return _this.test_active_click(evt);
      };
      this.activate_action = function(evt) {
        return _this.activate_field(evt);
      };
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.result_single_selected = null;
      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.group_search = this.options.group_search != null ? this.options.group_search : true;
      this.search_contains = this.options.search_contains || false;
      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      this.inherit_select_classes = this.options.inherit_select_classes || false;
      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
      return this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
    };

    AbstractChosen.prototype.set_default_text = function() {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
      }
      return this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
    };

    AbstractChosen.prototype.mouse_enter = function() {
      return this.mouse_on_container = true;
    };

    AbstractChosen.prototype.mouse_leave = function() {
      return this.mouse_on_container = false;
    };

    AbstractChosen.prototype.input_focus = function(evt) {
      var _this = this;

      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout((function() {
            return _this.container_mousedown();
          }), 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };

    AbstractChosen.prototype.input_blur = function(evt) {
      var _this = this;
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout((function() {
          return _this.blur_test();
        }), 100);
      }
    };

    AbstractChosen.prototype.results_option_build = function(options) {
      var content, data, _i, _len, _ref;

      content = '';
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        data = _ref[_i];
        if (data.group) {
          content += this.result_add_group(data);
        } else {
          content += this.result_add_option(data);
        }
        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(data.text);
          }
        }
      }
      return content;
    };

    AbstractChosen.prototype.result_add_option = function(option) {
      var classes, style;

      if (!option.search_match) {
        return '';
      }
      if (!this.include_option_in_results(option)) {
        return '';
      }
      classes = [];
      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("active-result");
      }
      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("disabled-result");
      }
      if (option.selected) {
        classes.push("result-selected");
      }
      if (option.group_array_index != null) {
        classes.push("group-option");
      }
      if (option.classes !== "") {
        classes.push(option.classes);
      }
      style = option.style.cssText !== "" ? " style=\"" + option.style + "\"" : "";
      return "<li class=\"" + (classes.join(' ')) + "\"" + style + " data-option-array-index=\"" + option.array_index + "\">" + option.search_text + "</li>";
    };

    AbstractChosen.prototype.result_add_group = function(group) {
      if (!(group.search_match || group.group_match)) {
        return '';
      }
      if (!(group.active_options > 0)) {
        return '';
      }
      return "<li class=\"group-result\">" + group.search_text + "</li>";
    };

    AbstractChosen.prototype.results_update_field = function() {
      this.set_default_text();
      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }
      this.result_clear_highlight();
      this.result_single_selected = null;
      this.results_build();
      if (this.results_showing) {
        return this.winnow_results();
      }
    };

    AbstractChosen.prototype.results_toggle = function() {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.results_search = function(evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.winnow_results = function() {
      var escapedSearchText, option, regex, regexAnchor, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref;

      this.no_results_clear();
      results = 0;
      searchText = this.get_search_text();
      escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      regexAnchor = this.search_contains ? "" : "^";
      regex = new RegExp(regexAnchor + escapedSearchText, 'i');
      zregex = new RegExp(escapedSearchText, 'i');
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        option.search_match = false;
        results_group = null;
        if (this.include_option_in_results(option)) {
          if (option.group) {
            option.group_match = false;
            option.active_options = 0;
          }
          if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
            results_group = this.results_data[option.group_array_index];
            if (results_group.active_options === 0 && results_group.search_match) {
              results += 1;
            }
            results_group.active_options += 1;
          }
          if (!(option.group && !this.group_search)) {
            option.search_text = option.group ? option.label : option.html;
            option.search_match = this.search_string_match(option.search_text, regex);
            if (option.search_match && !option.group) {
              results += 1;
            }
            if (option.search_match) {
              if (searchText.length) {
                startpos = option.search_text.search(zregex);
                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
              }
              if (results_group != null) {
                results_group.group_match = true;
              }
            } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
              option.search_match = true;
            }
          }
        }
      }
      this.result_clear_highlight();
      if (results < 1 && searchText.length) {
        this.update_results_content("");
        return this.no_results(searchText);
      } else {
        this.update_results_content(this.results_option_build());
        return this.winnow_results_set_highlight();
      }
    };

    AbstractChosen.prototype.search_string_match = function(search_string, regex) {
      var part, parts, _i, _len;

      if (regex.test(search_string)) {
        return true;
      } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
        parts = search_string.replace(/\[|\]/g, "").split(" ");
        if (parts.length) {
          for (_i = 0, _len = parts.length; _i < _len; _i++) {
            part = parts[_i];
            if (regex.test(part)) {
              return true;
            }
          }
        }
      }
    };

    AbstractChosen.prototype.choices_count = function() {
      var option, _i, _len, _ref;

      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }
      this.selected_option_count = 0;
      _ref = this.form_field.options;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        if (option.selected) {
          this.selected_option_count += 1;
        }
      }
      return this.selected_option_count;
    };

    AbstractChosen.prototype.choices_click = function(evt) {
      evt.preventDefault();
      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.checkval = function(evt) {
        // focus and empty and no options was select
        var focus = this.search_field.is(':focus');

         // && !this.search_field.val() && !this.form_field_jq.val()

      if(focus || this.form_field_jq.val()) {
        this.containerLabel.addClass('show');
      } else {
        this.containerLabel.removeClass('show');
      }

    }

    AbstractChosen.prototype.keyup_checker = function(evt) {
      var stroke, _ref;
      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
            return this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            return this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) {
            return this.result_select(evt);
          }
          break;
        case 27:
          if (this.results_showing) {
            this.results_hide();
          }
          return true;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
          break;
        default:
          return this.results_search();
      }
    };

    AbstractChosen.prototype.container_width = function() {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return "" + this.form_field.offsetWidth + "px";
      }
    };

    AbstractChosen.prototype.include_option_in_results = function(option) {
      if (this.is_multiple && (!this.display_selected_options && option.selected)) {
        return false;
      }
      if (!this.display_disabled_options && option.disabled) {
        return false;
      }
      if (option.empty) {
        return false;
      }
      return true;
    };

    AbstractChosen.browser_is_supported = function() {
      if (window.navigator.appName === "Microsoft Internet Explorer") {
        return document.documentMode >= 8;
      }
      if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
        return false;
      }
      if (/Android/i.test(window.navigator.userAgent)) {
        if (/Mobile/i.test(window.navigator.userAgent)) {
          return false;
        }
      }
      return true;
    };

    AbstractChosen.default_multiple_text = "Select Some Options";

    AbstractChosen.default_single_text = "Select an Option";

    AbstractChosen.default_no_result_text = "No results match";

    return AbstractChosen;

  })();

  $ = jQuery;

  $.fn.extend({
    chosen: function(options) {
      if (!AbstractChosen.browser_is_supported()) {
        return this;
      }
      return this.each(function(input_field) {
        var $this, chosen;

        $this = $(this);
        chosen = $this.data('chosen');
        if (options === 'destroy' && chosen) {
          chosen.destroy();
        } else if (!chosen) {
          $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });

  Chosen = (function(_super) {
    __extends(Chosen, _super);

    function Chosen() {
      _ref = Chosen.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Chosen.prototype.setup = function() {
      this.form_field_jq = $(this.form_field);
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.is_rtl = this.form_field_jq.hasClass("chosen-rtl");
    };

    Chosen.prototype.set_up_html = function() {
      var container_classes, container_props;

      container_classes = ["chosen-container"];
      container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }
      if (this.is_rtl) {
        container_classes.push("chosen-rtl");
      }
      container_props = {
        'class': container_classes.join(' '),
        'style': "width: " + (this.container_width()) + ";",
        'title': this.form_field.title
      };
      if (this.form_field.id.length) {
        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
      }
      this.container = $("<div />", container_props);
      if (this.is_multiple) {
        this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>');
      } else {
        this.container.html('<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
      }
      this.form_field_jq.hide().after(this.container);
      this.containerLabel = this.container.siblings("label");
      this.dropdown = this.container.find('div.chosen-drop').first();
      this.search_field = this.container.find('input').first();
      this.search_results = this.container.find('ul.chosen-results').first();
      this.search_field_scale();
      this.search_no_results = this.container.find('li.no-results').first();
      if (this.is_multiple) {
        this.search_choices = this.container.find('ul.chosen-choices').first();
        this.search_container = this.container.find('li.search-field').first();
      } else {
        this.search_container = this.container.find('div.chosen-search').first();
        this.selected_item = this.container.find('.chosen-single').first();
      }
      this.results_build();
      this.set_tab_index();
      this.set_label_behavior();
      return this.form_field_jq.trigger("chosen:ready", {
        chosen: this
      });
    };

    Chosen.prototype.register_observers = function() {
      var _this = this;

      this.container.bind('mousedown.chosen', function(evt) {
        _this.container_mousedown(evt);
      });
      this.container.bind('mouseup.chosen', function(evt) {
        _this.container_mouseup(evt);
      });
      this.container.bind('mouseenter.chosen', function(evt) {
        _this.mouse_enter(evt);
      });
      this.container.bind('mouseleave.chosen', function(evt) {
        _this.mouse_leave(evt);
      });
      this.search_results.bind('mouseup.chosen', function(evt) {
        _this.search_results_mouseup(evt);
      });
      this.search_results.bind('mouseover.chosen', function(evt) {
        _this.search_results_mouseover(evt);
      });
      this.search_results.bind('mouseout.chosen', function(evt) {
        _this.search_results_mouseout(evt);
      });
      this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen', function(evt) {
        _this.search_results_mousewheel(evt);
      });
      this.form_field_jq.bind("chosen:updated.chosen", function(evt) {
        _this.results_update_field(evt);
      });
      this.form_field_jq.bind("chosen:activate.chosen", function(evt) {
        _this.activate_field(evt);
      });
      this.form_field_jq.bind("chosen:open.chosen", function(evt) {
        _this.container_mousedown(evt);
      });
      this.search_field.bind('blur.chosen', function(evt) {
        _this.input_blur(evt);
      });
      this.search_field.bind('keyup.chosen', function(evt) {
        _this.keyup_checker(evt);
        _this.checkval(evt);
      });
      this.search_field.bind('keydown.chosen', function(evt) {
        _this.keydown_checker(evt);
      });
      this.search_field.bind('focus.chosen', function(evt) {
        _this.input_focus(evt);
      });
      this.search_field.bind('checkval.chosen', function(evt) {
        _this.checkval(evt);
      });
      if (this.is_multiple) {
        return this.search_choices.bind('click.chosen', function(evt) {
          _this.choices_click(evt);
        });
      } else {
        return this.container.bind('click.chosen', function(evt) {
          evt.preventDefault();
        });
      }
    };

    Chosen.prototype.destroy = function() {
      $(document).unbind("click.chosen", this.click_test_action);
      if (this.search_field[0].tabIndex) {
        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
      }
      this.container.remove();
      this.form_field_jq.removeData('chosen');
      return this.form_field_jq.show();
    };

    Chosen.prototype.search_field_disabled = function() {
      this.is_disabled = this.form_field_jq[0].disabled;
      if (this.is_disabled) {
        this.container.addClass('chosen-disabled');
        this.search_field[0].disabled = true;
        if (!this.is_multiple) {
          this.selected_item.unbind("focus.chosen", this.activate_action);
        }
        return this.close_field();
      } else {
        this.container.removeClass('chosen-disabled');
        this.search_field[0].disabled = false;
        if (!this.is_multiple) {
          return this.selected_item.bind("focus.chosen", this.activate_action);
        }
      }
    };

    Chosen.prototype.container_mousedown = function(evt) {
      if (!this.is_disabled) {
        if (evt && evt.type === "mousedown" && !this.results_showing) {
          evt.preventDefault();
        }
        if (!((evt != null) && ($(evt.target)).hasClass("search-choice-close"))) {
          if (!this.active_field) {
            if (this.is_multiple) {
              this.search_field.val("");
            }
            $(document).bind('click.chosen', this.click_test_action);
            this.results_show();
          } else if (!this.is_multiple && evt && (($(evt.target)[0] === this.selected_item[0]) || $(evt.target).parents("a.chosen-single").length)) {
            evt.preventDefault();
            this.results_toggle();
          }
          return this.activate_field();
        }
      }
    };

    Chosen.prototype.container_mouseup = function(evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };

    Chosen.prototype.search_results_mousewheel = function(evt) {
      var delta, _ref1, _ref2;

      delta = -((_ref1 = evt.originalEvent) != null ? _ref1.wheelDelta : void 0) || ((_ref2 = evt.originialEvent) != null ? _ref2.detail : void 0);
      if (delta != null) {
        evt.preventDefault();
        if (evt.type === 'DOMMouseScroll') {
          delta = delta * 40;
        }
        return this.search_results.scrollTop(delta + this.search_results.scrollTop());
      }
    };

    Chosen.prototype.blur_test = function(evt) {
      if (!this.active_field && this.container.hasClass("chosen-container-active")) {
        return this.close_field();
      }
    };

    Chosen.prototype.close_field = function() {
      $(document).unbind("click.chosen", this.click_test_action);
      this.active_field = false;
      this.checkval();
      this.results_hide();
      this.containerLabel.removeClass('on');
      this.container.removeClass("chosen-container-active");
      this.clear_backstroke();
      this.show_search_field_default();
      return this.search_field_scale();
    };

    Chosen.prototype.activate_field = function() {
      this.container.addClass("chosen-container-active");
      this.containerLabel.addClass('on');
      this.active_field = true;
      this.checkval();
      this.search_field.val(this.search_field.val());
      return this.search_field.focus();
    };

    Chosen.prototype.test_active_click = function(evt) {
      if (this.container.is($(evt.target).closest('.chosen-container'))) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };

    Chosen.prototype.results_build = function() {
      this.parsing = true;
      this.selected_option_count = null;
      this.results_data = SelectParser.select_to_array(this.form_field);
      if (this.is_multiple) {
        this.search_choices.find("li.search-choice").remove();
      } else if (!this.is_multiple) {
        this.single_set_selected_text();
        if (this.disable_search || this.form_field.options.length <= this.disable_search_threshold) {
          this.search_field[0].readOnly = true;
          this.container.addClass("chosen-container-single-nosearch");
        } else {
          this.search_field[0].readOnly = false;
          this.container.removeClass("chosen-container-single-nosearch");
        }
      }
      this.update_results_content(this.results_option_build({
        first: true
      }));
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      return this.parsing = false;
    };

    Chosen.prototype.result_do_highlight = function(el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;

      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.addClass("highlighted");
        maxHeight = parseInt(this.search_results.css("maxHeight"), 10);
        visible_top = this.search_results.scrollTop();
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight.position().top + this.search_results.scrollTop();
        high_bottom = high_top + this.result_highlight.outerHeight();
        if (high_bottom >= visible_bottom) {
          return this.search_results.scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          return this.search_results.scrollTop(high_top);
        }
      }
    };

    Chosen.prototype.result_clear_highlight = function() {
      if (this.result_highlight) {
        this.result_highlight.removeClass("highlighted");
      }
      return this.result_highlight = null;
    };

    Chosen.prototype.results_show = function() {
      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
        this.form_field_jq.trigger("chosen:maxselected", {
          chosen: this
        });
        return false;
      }
      this.checkval();
      this.container.addClass("chosen-with-drop");
      this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      });
      this.results_showing = true;
      this.search_field.focus();
      this.search_field.val(this.search_field.val());
      return this.winnow_results();
    };

    Chosen.prototype.update_results_content = function(content) {
      return this.search_results.html(content);
    };

    Chosen.prototype.results_hide = function() {
      if (this.results_showing) {
        this.result_clear_highlight();
        this.container.removeClass("chosen-with-drop");
        this.form_field_jq.trigger("chosen:hiding_dropdown", {
          chosen: this
        });
      }
      return this.results_showing = false;
    };

    Chosen.prototype.set_tab_index = function(el) {
      var ti;

      if (this.form_field.tabIndex) {
        ti = this.form_field.tabIndex;
        this.form_field.tabIndex = -1;
        return this.search_field[0].tabIndex = ti;
      }
    };

    Chosen.prototype.set_label_behavior = function() {
      var _this = this;

      this.form_field_label = this.form_field_jq.parents("label");
      if (!this.form_field_label.length && this.form_field.id.length) {
        this.form_field_label = $("label[for='" + this.form_field.id + "']");
      }
      if (this.form_field_label.length > 0) {
        return this.form_field_label.bind('click.chosen', function(evt) {
          if (_this.is_multiple) {
            return _this.container_mousedown(evt);
          } else {
            return _this.activate_field();
          }
        });
      }
    };

    Chosen.prototype.show_search_field_default = function() {
      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
        this.search_field.val(this.default_text);
        return this.search_field.addClass("default");
      } else {
        this.search_field.val("");
        return this.search_field.removeClass("default");
      }
    };

    Chosen.prototype.search_results_mouseup = function(evt) {
      var target;

      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field.focus();
      }
    };

    Chosen.prototype.search_results_mouseover = function(evt) {
      var target;

      target = $(evt.target).hasClass("active-result") ? $(evt.target) : $(evt.target).parents(".active-result").first();
      if (target) {
        return this.result_do_highlight(target);
      }
    };

    Chosen.prototype.search_results_mouseout = function(evt) {
      if ($(evt.target).hasClass("active-result" || $(evt.target).parents('.active-result').first())) {
        return this.result_clear_highlight();
      }
    };

    Chosen.prototype.choice_build = function(item) {
      var choice, close_link,
        _this = this;

      choice = $('<li />', {
        "class": "search-choice"
      }).html("<span>" + item.html + "</span>");
      if (item.disabled) {
        choice.addClass('search-choice-disabled');
      } else {
        close_link = $('<a />', {
          "class": 'search-choice-close',
          'data-option-array-index': item.array_index
        });
        close_link.bind('click.chosen', function(evt) {
          return _this.choice_destroy_link_click(evt);
        });
        choice.append(close_link);
      }
      return this.search_container.before(choice);
    };

    Chosen.prototype.choice_destroy_link_click = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (!this.is_disabled) {
        return this.choice_destroy($(evt.target));
      }
    };

    Chosen.prototype.choice_destroy = function(link) {
      if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
        this.checkval();
        this.show_search_field_default();
        if (this.is_multiple && this.choices_count() > 0 && this.search_field.val().length < 1) {
          this.results_hide();
        }
        link.parents('li').first().remove();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.results_reset = function() {
      this.form_field.options[0].selected = true;
      this.selected_option_count = null;
      this.single_set_selected_text();
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.form_field_jq.trigger("change");
      if (this.active_field) {
        return this.results_hide();
      }
    };

    Chosen.prototype.results_reset_cleanup = function() {
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.selected_item.find("abbr").remove();
    };

    Chosen.prototype.result_select = function(evt) {
      var high, item, selected_index;

      if (this.result_highlight) {
        high = this.result_highlight;
        this.result_clear_highlight();
        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
          this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
          });
          return false;
        }
        if (this.is_multiple) {
          high.removeClass("active-result");
        } else {
          if (this.result_single_selected) {
            this.result_single_selected.removeClass("result-selected");
            selected_index = this.result_single_selected[0].getAttribute('data-option-array-index');
            this.results_data[selected_index].selected = false;
          }
          this.result_single_selected = high;
        }
        high.addClass("result-selected");
        item = this.results_data[high[0].getAttribute("data-option-array-index")];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        this.selected_option_count = null;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.single_set_selected_text(item.text);
        }
        if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
          this.results_hide();
        }
        this.search_field.val("");
        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
          this.form_field_jq.trigger("change", {
            'selected': this.form_field.options[item.options_index].value
          });
        }
        this.current_selectedIndex = this.form_field.selectedIndex;
        return this.search_field_scale();
      }
    };

    Chosen.prototype.single_set_selected_text = function(text) {
      if (text == null) {
        text = this.default_text;
      }
      if (text === this.default_text) {
        this.selected_item.addClass("chosen-default");
      } else {
        this.single_deselect_control_build();
        this.selected_item.removeClass("chosen-default");
      }
      return this.selected_item.find("span").text(text);
    };

    Chosen.prototype.result_deselect = function(pos) {
      var result_data;

      result_data = this.results_data[pos];
      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        this.selected_option_count = null;
        this.result_clear_highlight();
        if (this.results_showing) {
          this.winnow_results();
        }
        this.form_field_jq.trigger("change", {
          deselected: this.form_field.options[result_data.options_index].value
        });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };

    Chosen.prototype.single_deselect_control_build = function() {
      if (!this.allow_single_deselect) {
        return;
      }
      if (!this.selected_item.find("abbr").length) {
        this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");
      }
      return this.selected_item.addClass("chosen-single-with-deselect");
    };

    Chosen.prototype.get_search_text = function() {
      if (this.search_field.val() === this.default_text) {
        return "";
      } else {
        return $('<div/>').text($.trim(this.search_field.val())).html();
      }
    };

    Chosen.prototype.winnow_results_set_highlight = function() {
      var do_high, selected_results;

      selected_results = !this.is_multiple ? this.search_results.find(".result-selected.active-result") : [];
      do_high = selected_results.length ? selected_results.first() : this.search_results.find(".active-result").first();
      if (do_high != null) {
        return this.result_do_highlight(do_high);
      }
    };

    Chosen.prototype.no_results = function(terms) {
      var no_results_html;

      no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
      no_results_html.find("span").first().html(terms);
      return this.search_results.append(no_results_html);
    };

    Chosen.prototype.no_results_clear = function() {
      return this.search_results.find(".no-results").remove();
    };

    Chosen.prototype.keydown_arrow = function() {
      var next_sib;

      if (this.results_showing && this.result_highlight) {
        next_sib = this.result_highlight.nextAll("li.active-result").first();
        if (next_sib) {
          return this.result_do_highlight(next_sib);
        }
      } else {
        return this.results_show();
      }
    };

    Chosen.prototype.keyup_arrow = function() {
      var prev_sibs;

      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = this.result_highlight.prevAll("li.active-result");
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs.first());
        } else {
          if (this.choices_count() > 0) {
            this.results_hide();
          }
          return this.result_clear_highlight();
        }
      }
    };

    Chosen.prototype.keydown_backstroke = function() {
      var next_available_destroy;

      if (this.pending_backstroke) {
        this.choice_destroy(this.pending_backstroke.find("a").first());
        return this.clear_backstroke();
      } else {
        next_available_destroy = this.search_container.siblings("li.search-choice").last();
        if (next_available_destroy.length && !next_available_destroy.hasClass("search-choice-disabled")) {
          this.pending_backstroke = next_available_destroy;
          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.addClass("search-choice-focus");
          }
        }
      }
    };

    Chosen.prototype.clear_backstroke = function() {
      if (this.pending_backstroke) {
        this.pending_backstroke.removeClass("search-choice-focus");
      }
      return this.pending_backstroke = null;
    };

    Chosen.prototype.keydown_checker = function(evt) {
      var stroke, _ref1;

      stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }
      switch (stroke) {
        case 8:
          this.backstroke_length = this.search_field.val().length;
          break;
        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }
          this.mouse_on_container = false;
          break;
        case 13:
          evt.preventDefault();
          break;
        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;
        case 40:
          evt.preventDefault();
          this.keydown_arrow();
          break;
      }
    };

    Chosen.prototype.search_field_scale = function() {
      var div, f_width, h, style, style_block, styles, w, _i, _len;

      if (this.is_multiple) {
        h = 0;
        w = 0;
        style_block = "position:absolute; left: -1000px; top: -1000px; display:none;";
        styles = ['font-size', 'font-style', 'font-weight', 'font-family', 'line-height', 'text-transform', 'letter-spacing'];
        for (_i = 0, _len = styles.length; _i < _len; _i++) {
          style = styles[_i];
          style_block += style + ":" + this.search_field.css(style) + ";";
        }
        div = $('<div />', {
          'style': style_block
        });
        div.text(this.search_field.val());
        $('body').append(div);
        w = div.width() + 25;
        div.remove();
        f_width = this.container.outerWidth();
        if (w > f_width - 10) {
          w = f_width - 10;
        }
        return this.search_field.css({
          'width': w + 'px'
        });
      }
    };

    return Chosen;

  })(AbstractChosen);

}).call(this);

// ===========================================================================


var russiaJSON = {
    data: {
        districts: [{
            id: "1",
            name: "Центральный федеральный округ",
            areas: [{
                aoguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
                name: "Белгородская обл",
                okato: "14000000000"
            }, {
                aoguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
                name: "Брянская обл",
                okato: "15000000000"
            }, {
                aoguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
                name: "Владимирская обл",
                okato: "17000000000"
            }, {
                aoguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
                name: "Воронежская обл",
                okato: "20000000000"
            }, {
                aoguid: "0824434f-4098-4467-af72-d4f702fed335",
                name: "Ивановская обл",
                okato: "24000000000"
            }, {
                aoguid: "18133adf-90c2-438e-88c4-62c41656de70",
                name: "Калужская обл",
                okato: "29000000000"
            }, {
                aoguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
                name: "Костромская обл",
                okato: "34000000000"
            }, {
                aoguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
                name: "Курская обл",
                okato: "38000000000"
            }, {
                aoguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
                name: "Липецкая обл",
                okato: "42000000000"
            }, {
                aoguid: "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
                name: "Москва г",
                okato: "45000000000"
            }, {
                aoguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
                name: "Московская обл",
                okato: "46000000000"
            }, {
                aoguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
                name: "Орловская обл",
                okato: "54000000000"
            }, {
                aoguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
                name: "Рязанская обл",
                okato: "61000000000"
            }, {
                aoguid: "e8502180-6d08-431b-83ea-c7038f0df905",
                name: "Смоленская обл",
                okato: "66000000000"
            }, {
                aoguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
                name: "Тамбовская обл",
                okato: "68000000000"
            }, {
                aoguid: "61723327-1c20-42fe-8dfa-402638d9b396",
                name: "Тверская обл",
                okato: "28000000000"
            }, {
                aoguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
                name: "Тульская обл",
                okato: "70000000000"
            }, {
                aoguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
                name: "Ярославская обл",
                okato: "78000000000"
            }]
        }, {
            id: "2",
            name: "Южный федеральный округ",
            areas: [{
                aoguid: "d8327a56-80de-4df2-815c-4f6ab1224c50",
                name: "Адыгея Респ",
                okato: "79000000000"
            }, {
                aoguid: "83009239-25cb-4561-af8e-7ee111b1cb73",
                name: "Астраханская обл",
                okato: "12000000000"
            }, {
                aoguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
                name: "Волгоградская обл",
                okato: "18000000000"
            }, {
                aoguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
                name: "Калмыкия Респ",
                okato: "85000000000"
            }, {
                aoguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
                name: "Краснодарский край",
                okato: "03000000000"
            }, {
                aoguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
                name: "Ростовская обл",
                okato: "60000000000"
            }]
        }, {
            id: "3",
            name: "Северо-Западный федеральный округ",
            areas: [{
                aoguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
                name: "Архангельская обл",
                okato: "11000000000"
            }, {
                aoguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
                name: "Вологодская обл",
                okato: "19000000000"
            }, {
                aoguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
                name: "Калининградская обл",
                okato: "27000000000"
            }, {
                aoguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
                name: "Карелия Респ",
                okato: "86000000000"
            }, {
                aoguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
                name: "Коми Респ",
                okato: "87000000000"
            }, {
                aoguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
                name: "Ленинградская обл",
                okato: "41000000000"
            }, {
                aoguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
                name: "Мурманская обл",
                okato: "47000000000"
            }, {
                aoguid: "89db3198-6803-4106-9463-cbf781eff0b8",
                name: "Ненецкий АО",
                okato: "11100000000"
            }, {
                aoguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
                name: "Новгородская обл",
                okato: "49000000000"
            }, {
                aoguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
                name: "Псковская обл",
                okato: "58000000000"
            }, {
                aoguid: "c2deb16a-0330-4f05-821f-1d09c93331e6",
                name: "Санкт-Петербург г",
                okato: "40000000000"
            }]
        }, {
            id: "4",
            name: "Дальневосточный федеральный округ",
            areas: [{
                aoguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
                name: "Амурская обл",
                okato: "10000000000"
            }, {
                aoguid: "1b507b09-48c9-434f-bf6f-65066211c73e",
                name: "Еврейская Аобл",
                okato: "99000000000"
            }, {
                aoguid: "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
                name: "Камчатский край",
                okato: "30000000000"
            }, {
                aoguid: "9c05e812-8679-4710-b8cb-5e8bd43cdf48",
                name: "Магаданская обл",
                okato: "44000000000"
            }, {
                aoguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
                name: "Приморский край",
                okato: "05000000000"
            }, {
                aoguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
                name: "Саха /Якутия/ Респ",
                okato: "98000000000"
            }, {
                aoguid: "aea6280f-4648-460f-b8be-c2bc18923191",
                name: "Сахалинская обл",
                okato: "64000000000"
            }, {
                aoguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
                name: "Хабаровский край",
                okato: "08000000000"
            }, {
                aoguid: "f136159b-404a-4f1f-8d8d-d169e1374d5c",
                name: "Чукотский АО",
                okato: "77000000000"
            }]
        }, {
            id: "5",
            name: "Сибирский федеральный округ",
            areas: [{
                aoguid: "5c48611f-5de6-4771-9695-7e36a4e7529d",
                name: "Алтай Респ",
                okato: "84000000000"
            }, {
                aoguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
                name: "Алтайский край",
                okato: "01000000000"
            }, {
                aoguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
                name: "Бурятия Респ",
                okato: "81000000000"
            }, {
                aoguid: "b6ba5716-eb48-401b-8443-b197c9578734",
                name: "Забайкальский край",
                okato: "76000000000"
            }, {
                aoguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
                name: "Иркутская обл",
                okato: "25000000000"
            }, {
                aoguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
                name: "Кемеровская обл",
                okato: "32000000000"
            }, {
                aoguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
                name: "Красноярский край",
                okato: "04000000000"
            }, {
                aoguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
                name: "Новосибирская обл",
                okato: "50000000000"
            }, {
                aoguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
                name: "Омская обл",
                okato: "52000000000"
            }, {
                aoguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
                name: "Томская обл",
                okato: "69000000000"
            }, {
                aoguid: "026bc56f-3731-48e9-8245-655331f596c0",
                name: "Тыва Респ",
                okato: "93000000000"
            }, {
                aoguid: "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
                name: "Хакасия Респ",
                okato: "95000000000"
            }]
        }, {
            id: "6",
            name: "Уральский федеральный округ",
            areas: [{
                aoguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
                name: "Курганская обл",
                okato: "37000000000"
            }, {
                aoguid: "92b30014-4d52-4e2e-892d-928142b924bf",
                name: "Свердловская обл",
                okato: "65000000000"
            }, {
                aoguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
                name: "Тюменская обл",
                okato: "71000000000"
            }, {
                aoguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
                name: "Ханты-Мансийский Автономный округ - Югра АО",
                okato: "71100000000"
            }, {
                aoguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
                name: "Челябинская обл",
                okato: "75000000000"
            }, {
                aoguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
                name: "Ямало-Ненецкий АО",
                okato: "71140000000"
            }]
        }, {
            id: "7",
            name: "Приволжский федеральный округ",
            areas: [{
                aoguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
                name: "Башкортостан Респ",
                okato: "80000000000"
            }, {
                aoguid: "0b940b96-103f-4248-850c-26b6c7296728",
                name: "Кировская обл",
                okato: "33000000000"
            }, {
                aoguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
                name: "Марий Эл Респ",
                okato: "88000000000"
            }, {
                aoguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
                name: "Мордовия Респ",
                okato: "89000000000"
            }, {
                aoguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
                name: "Нижегородская обл",
                okato: "22000000000"
            }, {
                aoguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
                name: "Оренбургская обл",
                okato: "53000000000"
            }, {
                aoguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
                name: "Пензенская обл",
                okato: "56000000000"
            }, {
                aoguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
                name: "Пермский край",
                okato: "57000000000"
            }, {
                aoguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
                name: "Самарская обл",
                okato: "36000000000"
            }, {
                aoguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
                name: "Саратовская обл",
                okato: "63000000000"
            }, {
                aoguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
                name: "Татарстан Респ",
                okato: "92000000000"
            }, {
                aoguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
                name: "Удмуртская Респ",
                okato: "94000000000"
            }, {
                aoguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
                name: "Ульяновская обл",
                okato: "73000000000"
            }, {
                aoguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
                name: "Чувашская Респ",
                okato: "97000000000"
            }]
        }, {
            id: "8",
            name: "Северо-Кавказский федеральный округ",
            areas: [{
                aoguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
                name: "Дагестан Респ",
                okato: "82000000000"
            }, {
                aoguid: "b2d8cd20-cabc-4deb-afad-f3c4b4d55821",
                name: "Ингушетия Респ",
                okato: "26000000000"
            }, {
                aoguid: "1781f74e-be4a-4697-9c6b-493057c94818",
                name: "Кабардино-Балкарская Респ",
                okato: "83000000000"
            }, {
                aoguid: "61b95807-388a-4cb1-9bee-889f7cf811c8",
                name: "Карачаево-Черкесская Респ",
                okato: "91000000000"
            }, {
                aoguid: "de459e9c-2933-4923-83d1-9c64cfd7a817",
                name: "Северная Осетия - Алания Респ",
                okato: "90000000000"
            }, {
                aoguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
                name: "Ставропольский край",
                okato: "07000000000"
            }, {
                aoguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
                name: "Чеченская Респ",
                okato: "96000000000"
            }]
        }],
        subjects: [{
            aoguid: "d8327a56-80de-4df2-815c-4f6ab1224c50",
            disid: "2",
            name: "Адыгея Респ",
            okato: "79000000000",
            parentguid: "",
            regioncode: "01"
        }, {
            aoguid: "5c48611f-5de6-4771-9695-7e36a4e7529d",
            disid: "5",
            name: "Алтай Респ",
            okato: "84000000000",
            parentguid: "",
            regioncode: "04"
        }, {
            aoguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            disid: "5",
            name: "Алтайский край",
            okato: "01000000000",
            parentguid: "",
            regioncode: "22"
        }, {
            aoguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            disid: "4",
            name: "Амурская обл",
            okato: "10000000000",
            parentguid: "",
            regioncode: "28"
        }, {
            aoguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            disid: "3",
            name: "Архангельская обл",
            okato: "11000000000",
            parentguid: "",
            regioncode: "29"
        }, {
            aoguid: "83009239-25cb-4561-af8e-7ee111b1cb73",
            disid: "2",
            name: "Астраханская обл",
            okato: "12000000000",
            parentguid: "",
            regioncode: "30"
        }, {
            aoguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            disid: "7",
            name: "Башкортостан Респ",
            okato: "80000000000",
            parentguid: "",
            regioncode: "02"
        }, {
            aoguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            disid: "1",
            name: "Белгородская обл",
            okato: "14000000000",
            parentguid: "",
            regioncode: "31"
        }, {
            aoguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            disid: "1",
            name: "Брянская обл",
            okato: "15000000000",
            parentguid: "",
            regioncode: "32"
        }, {
            aoguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            disid: "5",
            name: "Бурятия Респ",
            okato: "81000000000",
            parentguid: "",
            regioncode: "03"
        }, {
            aoguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            disid: "1",
            name: "Владимирская обл",
            okato: "17000000000",
            parentguid: "",
            regioncode: "33"
        }, {
            aoguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            disid: "2",
            name: "Волгоградская обл",
            okato: "18000000000",
            parentguid: "",
            regioncode: "34"
        }, {
            aoguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            disid: "3",
            name: "Вологодская обл",
            okato: "19000000000",
            parentguid: "",
            regioncode: "35"
        }, {
            aoguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            disid: "1",
            name: "Воронежская обл",
            okato: "20000000000",
            parentguid: "",
            regioncode: "36"
        }, {
            aoguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            disid: "8",
            name: "Дагестан Респ",
            okato: "82000000000",
            parentguid: "",
            regioncode: "05"
        }, {
            aoguid: "1b507b09-48c9-434f-bf6f-65066211c73e",
            disid: "4",
            name: "Еврейская Аобл",
            okato: "99000000000",
            parentguid: "",
            regioncode: "79"
        }, {
            aoguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            disid: "5",
            name: "Забайкальский край",
            okato: "76000000000",
            parentguid: "",
            regioncode: "75"
        }, {
            aoguid: "0824434f-4098-4467-af72-d4f702fed335",
            disid: "1",
            name: "Ивановская обл",
            okato: "24000000000",
            parentguid: "",
            regioncode: "37"
        }, {
            aoguid: "b2d8cd20-cabc-4deb-afad-f3c4b4d55821",
            disid: "8",
            name: "Ингушетия Респ",
            okato: "26000000000",
            parentguid: "",
            regioncode: "06"
        }, {
            aoguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            disid: "5",
            name: "Иркутская обл",
            okato: "25000000000",
            parentguid: "",
            regioncode: "38"
        }, {
            aoguid: "1781f74e-be4a-4697-9c6b-493057c94818",
            disid: "8",
            name: "Кабардино-Балкарская Респ",
            okato: "83000000000",
            parentguid: "",
            regioncode: "07"
        }, {
            aoguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            disid: "3",
            name: "Калининградская обл",
            okato: "27000000000",
            parentguid: "",
            regioncode: "39"
        }, {
            aoguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
            disid: "2",
            name: "Калмыкия Респ",
            okato: "85000000000",
            parentguid: "",
            regioncode: "08"
        }, {
            aoguid: "18133adf-90c2-438e-88c4-62c41656de70",
            disid: "1",
            name: "Калужская обл",
            okato: "29000000000",
            parentguid: "",
            regioncode: "40"
        }, {
            aoguid: "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
            disid: "4",
            name: "Камчатский край",
            okato: "30000000000",
            parentguid: "",
            regioncode: "41"
        }, {
            aoguid: "61b95807-388a-4cb1-9bee-889f7cf811c8",
            disid: "8",
            name: "Карачаево-Черкесская Респ",
            okato: "91000000000",
            parentguid: "",
            regioncode: "09"
        }, {
            aoguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            disid: "3",
            name: "Карелия Респ",
            okato: "86000000000",
            parentguid: "",
            regioncode: "10"
        }, {
            aoguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            disid: "5",
            name: "Кемеровская обл",
            okato: "32000000000",
            parentguid: "",
            regioncode: "42"
        }, {
            aoguid: "0b940b96-103f-4248-850c-26b6c7296728",
            disid: "7",
            name: "Кировская обл",
            okato: "33000000000",
            parentguid: "",
            regioncode: "43"
        }, {
            aoguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            disid: "3",
            name: "Коми Респ",
            okato: "87000000000",
            parentguid: "",
            regioncode: "11"
        }, {
            aoguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            disid: "1",
            name: "Костромская обл",
            okato: "34000000000",
            parentguid: "",
            regioncode: "44"
        }, {
            aoguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            disid: "2",
            name: "Краснодарский край",
            okato: "03000000000",
            parentguid: "",
            regioncode: "23"
        }, {
            aoguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            disid: "5",
            name: "Красноярский край",
            okato: "04000000000",
            parentguid: "",
            regioncode: "24"
        }, {
            aoguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            disid: "6",
            name: "Курганская обл",
            okato: "37000000000",
            parentguid: "",
            regioncode: "45"
        }, {
            aoguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            disid: "1",
            name: "Курская обл",
            okato: "38000000000",
            parentguid: "",
            regioncode: "46"
        }, {
            aoguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            disid: "3",
            name: "Ленинградская обл",
            okato: "41000000000",
            parentguid: "",
            regioncode: "47"
        }, {
            aoguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            disid: "1",
            name: "Липецкая обл",
            okato: "42000000000",
            parentguid: "",
            regioncode: "48"
        }, {
            aoguid: "9c05e812-8679-4710-b8cb-5e8bd43cdf48",
            disid: "4",
            name: "Магаданская обл",
            okato: "44000000000",
            parentguid: "",
            regioncode: "49"
        }, {
            aoguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            disid: "7",
            name: "Марий Эл Респ",
            okato: "88000000000",
            parentguid: "",
            regioncode: "12"
        }, {
            aoguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            disid: "7",
            name: "Мордовия Респ",
            okato: "89000000000",
            parentguid: "",
            regioncode: "13"
        }, {
            aoguid: "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
            disid: "1",
            name: "Москва г",
            okato: "45000000000",
            parentguid: "",
            regioncode: "77"
        }, {
            aoguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            disid: "1",
            name: "Московская обл",
            okato: "46000000000",
            parentguid: "",
            regioncode: "50"
        }, {
            aoguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            disid: "3",
            name: "Мурманская обл",
            okato: "47000000000",
            parentguid: "",
            regioncode: "51"
        }, {
            aoguid: "89db3198-6803-4106-9463-cbf781eff0b8",
            disid: "3",
            name: "Ненецкий АО",
            okato: "11100000000",
            parentguid: "",
            regioncode: "83"
        }, {
            aoguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            disid: "7",
            name: "Нижегородская обл",
            okato: "22000000000",
            parentguid: "",
            regioncode: "52"
        }, {
            aoguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            disid: "3",
            name: "Новгородская обл",
            okato: "49000000000",
            parentguid: "",
            regioncode: "53"
        }, {
            aoguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            disid: "5",
            name: "Новосибирская обл",
            okato: "50000000000",
            parentguid: "",
            regioncode: "54"
        }, {
            aoguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            disid: "5",
            name: "Омская обл",
            okato: "52000000000",
            parentguid: "",
            regioncode: "55"
        }, {
            aoguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            disid: "7",
            name: "Оренбургская обл",
            okato: "53000000000",
            parentguid: "",
            regioncode: "56"
        }, {
            aoguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            disid: "1",
            name: "Орловская обл",
            okato: "54000000000",
            parentguid: "",
            regioncode: "57"
        }, {
            aoguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            disid: "7",
            name: "Пензенская обл",
            okato: "56000000000",
            parentguid: "",
            regioncode: "58"
        }, {
            aoguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            disid: "7",
            name: "Пермский край",
            okato: "57000000000",
            parentguid: "",
            regioncode: "59"
        }, {
            aoguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            disid: "4",
            name: "Приморский край",
            okato: "05000000000",
            parentguid: "",
            regioncode: "25"
        }, {
            aoguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            disid: "3",
            name: "Псковская обл",
            okato: "58000000000",
            parentguid: "",
            regioncode: "60"
        }, {
            aoguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            disid: "2",
            name: "Ростовская обл",
            okato: "60000000000",
            parentguid: "",
            regioncode: "61"
        }, {
            aoguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            disid: "1",
            name: "Рязанская обл",
            okato: "61000000000",
            parentguid: "",
            regioncode: "62"
        }, {
            aoguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            disid: "7",
            name: "Самарская обл",
            okato: "36000000000",
            parentguid: "",
            regioncode: "63"
        }, {
            aoguid: "c2deb16a-0330-4f05-821f-1d09c93331e6",
            disid: "3",
            name: "Санкт-Петербург г",
            okato: "40000000000",
            parentguid: "",
            regioncode: "78"
        }, {
            aoguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            disid: "7",
            name: "Саратовская обл",
            okato: "63000000000",
            parentguid: "",
            regioncode: "64"
        }, {
            aoguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            disid: "4",
            name: "Саха /Якутия/ Респ",
            okato: "98000000000",
            parentguid: "",
            regioncode: "14"
        }, {
            aoguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            disid: "4",
            name: "Сахалинская обл",
            okato: "64000000000",
            parentguid: "",
            regioncode: "65"
        }, {
            aoguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            disid: "6",
            name: "Свердловская обл",
            okato: "65000000000",
            parentguid: "",
            regioncode: "66"
        }, {
            aoguid: "de459e9c-2933-4923-83d1-9c64cfd7a817",
            disid: "8",
            name: "Северная Осетия - Алания Респ",
            okato: "90000000000",
            parentguid: "",
            regioncode: "15"
        }, {
            aoguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            disid: "1",
            name: "Смоленская обл",
            okato: "66000000000",
            parentguid: "",
            regioncode: "67"
        }, {
            aoguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            disid: "8",
            name: "Ставропольский край",
            okato: "07000000000",
            parentguid: "",
            regioncode: "26"
        }, {
            aoguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            disid: "1",
            name: "Тамбовская обл",
            okato: "68000000000",
            parentguid: "",
            regioncode: "68"
        }, {
            aoguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            disid: "7",
            name: "Татарстан Респ",
            okato: "92000000000",
            parentguid: "",
            regioncode: "16"
        }, {
            aoguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            disid: "1",
            name: "Тверская обл",
            okato: "28000000000",
            parentguid: "",
            regioncode: "69"
        }, {
            aoguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            disid: "5",
            name: "Томская обл",
            okato: "69000000000",
            parentguid: "",
            regioncode: "70"
        }, {
            aoguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            disid: "1",
            name: "Тульская обл",
            okato: "70000000000",
            parentguid: "",
            regioncode: "71"
        }, {
            aoguid: "026bc56f-3731-48e9-8245-655331f596c0",
            disid: "5",
            name: "Тыва Респ",
            okato: "93000000000",
            parentguid: "",
            regioncode: "17"
        }, {
            aoguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            disid: "6",
            name: "Тюменская обл",
            okato: "71000000000",
            parentguid: "",
            regioncode: "72"
        }, {
            aoguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            disid: "7",
            name: "Удмуртская Респ",
            okato: "94000000000",
            parentguid: "",
            regioncode: "18"
        }, {
            aoguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            disid: "7",
            name: "Ульяновская обл",
            okato: "73000000000",
            parentguid: "",
            regioncode: "73"
        }, {
            aoguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            disid: "4",
            name: "Хабаровский край",
            okato: "08000000000",
            parentguid: "",
            regioncode: "27"
        }, {
            aoguid: "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
            disid: "5",
            name: "Хакасия Респ",
            okato: "95000000000",
            parentguid: "",
            regioncode: "19"
        }, {
            aoguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            disid: "6",
            name: "Ханты-Мансийский Автономный округ - Югра АО",
            okato: "71100000000",
            parentguid: "",
            regioncode: "86"
        }, {
            aoguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            disid: "6",
            name: "Челябинская обл",
            okato: "75000000000",
            parentguid: "",
            regioncode: "74"
        }, {
            aoguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            disid: "8",
            name: "Чеченская Респ",
            okato: "96000000000",
            parentguid: "",
            regioncode: "20"
        }, {
            aoguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            disid: "7",
            name: "Чувашская Респ",
            okato: "97000000000",
            parentguid: "",
            regioncode: "21"
        }, {
            aoguid: "f136159b-404a-4f1f-8d8d-d169e1374d5c",
            disid: "4",
            name: "Чукотский АО",
            okato: "77000000000",
            parentguid: "",
            regioncode: "87"
        }, {
            aoguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
            disid: "6",
            name: "Ямало-Ненецкий АО",
            okato: "71140000000",
            parentguid: "",
            regioncode: "89"
        }, {
            aoguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            disid: "1",
            name: "Ярославская обл",
            okato: "78000000000",
            parentguid: "",
            regioncode: "76"
        }],
        locality: [{
            aoguid: "863a02f2-1082-44b8-852b-8524adfdc5a4",
            disid: "1",
            name: "Алексеевский р-н",
            okato: "14205000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "02e9c019-ab4d-4fa0-928e-d6c0a41dc256",
            disid: "1",
            name: "Белгород г",
            okato: "14401000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "ffd3db1e-a062-442c-8d28-d35378c9e718",
            disid: "1",
            name: "Белгородский р-н",
            okato: "14210000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "e0d1764b-815b-408c-802d-5c4df40c84af",
            disid: "1",
            name: "Борисовский р-н",
            okato: "14215000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "9df691ad-8bff-443f-a42e-7226083401b5",
            disid: "1",
            name: "Валуйский р-н",
            okato: "14220000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "9344bf07-d346-4127-9748-f53784b97ac1",
            disid: "1",
            name: "Вейделевский р-н",
            okato: "14225000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "57c4e156-f815-4ff7-b3cc-aace5cb75451",
            disid: "1",
            name: "Волоконовский р-н",
            okato: "14230000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "f785d5cc-c8f7-4ddf-a611-757c8f91f536",
            disid: "1",
            name: "Грайворонский р-н",
            okato: "14232000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "98b1ec30-6107-4f99-ae3a-9d82492f30a1",
            disid: "1",
            name: "Губкин г",
            okato: "14430000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "2a64d838-3971-4cf4-a79a-bab1cde02af7",
            disid: "1",
            name: "Губкинский р-н",
            okato: "14235000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "a8178358-52f1-4957-8ccc-926b9d0f8b8c",
            disid: "1",
            name: "Ивнянский р-н",
            okato: "14238000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "9616f4cb-25de-4aec-b258-4559b5422c71",
            disid: "1",
            name: "Корочанский р-н",
            okato: "14240000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "aee72466-4cd5-4c31-9186-61eccf5966ae",
            disid: "1",
            name: "Красненский р-н",
            okato: "14241000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "ef70f223-0336-437e-a0c0-b41aaa907781",
            disid: "1",
            name: "Красногвардейский р-н",
            okato: "14242000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "55eb0d00-3ba8-403d-bef7-6f80497bc35d",
            disid: "1",
            name: "Краснояружский р-н",
            okato: "14243000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "6abf96fc-7376-448f-bdce-816bb961d7b5",
            disid: "1",
            name: "Новооскольский р-н",
            okato: "14244000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "15777dba-b9be-4826-beba-17da193eb316",
            disid: "1",
            name: "Прохоровский р-н",
            okato: "14246000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "84a004a4-a9bc-4deb-a8cb-94fdf4964372",
            disid: "1",
            name: "Ракитянский р-н",
            okato: "14248000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "d6ebfb80-ac58-4533-9678-6afaf9423cb1",
            disid: "1",
            name: "Ровеньский р-н",
            okato: "14250000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "fa0976cc-6c53-400b-90fb-1fe82e896dc9",
            disid: "1",
            name: "Старооскольский р-н",
            okato: "14252000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "9f5e86b1-b893-43dc-9dd4-ac66573b17d1",
            disid: "1",
            name: "Старый Оскол г",
            okato: "14440000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "cb8257a7-b4ff-48ad-88fd-27791d4e10bc",
            disid: "1",
            name: "Чернянский р-н",
            okato: "14254000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "dc80ddf0-b1ac-4344-98e8-fcfa5295a0a3",
            disid: "1",
            name: "Шебекино г",
            okato: "14450000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "20f1fc48-2bb1-4bcf-a49d-782b29ec0b70",
            disid: "1",
            name: "Шебекинский р-н",
            okato: "14256000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "a91b4f46-8f66-483a-ba12-5d8ab72b1860",
            disid: "1",
            name: "Яковлевский р-н",
            okato: "14258000000",
            parentguid: "639efe9d-3fc8-4438-8e70-ec4f2321f2a7",
            regioncode: "31"
        }, {
            aoguid: "b02d7238-3e01-44c8-8837-f3b5cb1014c5",
            disid: "1",
            name: "Брасовский р-н",
            okato: "15204000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "414b71cf-921e-4bfc-b6e0-f7395d16aaef",
            disid: "1",
            name: "Брянск г",
            okato: "15401000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "979f391a-a3b4-4407-a267-a1913e1e79ed",
            disid: "1",
            name: "Брянский р-н",
            okato: "15208000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "cf589b01-8377-4703-9503-5a22b8b20c78",
            disid: "1",
            name: "Выгоничский р-н",
            okato: "15210000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "fa2d3c38-feb1-45d4-b00f-b5cfd90adaae",
            disid: "1",
            name: "Гордеевский р-н",
            okato: "15211000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "7b1a5457-2b41-4279-b4fc-a141bd7ab6b2",
            disid: "1",
            name: "Дубровский р-н",
            okato: "15212000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "28a2e2e0-89d4-462c-96eb-a549d88f21c7",
            disid: "1",
            name: "Дятьковский р-н",
            okato: "15216501000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "1784ae4d-7601-4f1e-afa4-9ea0347cfeb0",
            disid: "1",
            name: "Жирятинский р-н",
            okato: "15220000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "10bf74ae-b7bf-4a30-983d-1907ac65078d",
            disid: "1",
            name: "Жуковский р-н",
            okato: "15222000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "f5cc24e9-16f4-4c45-b5bf-7b0093d67d37",
            disid: "1",
            name: "Злынковский р-н",
            okato: "15223000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "4dd7d926-a0c6-4426-9f4b-96463433ef3e",
            disid: "1",
            name: "Карачевский р-н",
            okato: "15224000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "17062c69-2906-469e-9cc9-8129f750b1c7",
            disid: "1",
            name: "Клетнянский р-н",
            okato: "15226000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "e2c14ebe-2081-41ab-8bbf-797c482ba01a",
            disid: "1",
            name: "Климовский р-н",
            okato: "15228000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "8aaa3085-ac6a-46e8-8937-d63e95498a86",
            disid: "1",
            name: "Клинцовский р-н",
            okato: "15230000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "59cb1f1f-16f9-47eb-9487-14a6c00e8621",
            disid: "1",
            name: "Клинцы г",
            okato: "15415000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "734218e6-020f-4ea5-bb75-16db43b5ef4c",
            disid: "1",
            name: "Комаричский р-н",
            okato: "15232000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "f3703a1d-6224-4205-be55-36f48f5303ef",
            disid: "1",
            name: "Красногорский р-н",
            okato: "15234000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "367b3fce-0837-48e9-b92d-7cd0347ca4bd",
            disid: "1",
            name: "Мглинский р-н",
            okato: "15236000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "33e3ac7d-0a23-46ec-bec3-1ec470890033",
            disid: "1",
            name: "Навлинский р-н",
            okato: "15238000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "cf4dd9d7-d152-4140-bed2-59d8be5a4e2c",
            disid: "1",
            name: "Новозыбков г",
            okato: "15420000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "75078a02-9f8f-4454-8b83-0f4c5b72535f",
            disid: "1",
            name: "Новозыбковский р-н",
            okato: "15240000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "c89f1da6-23e7-44d4-a4da-3ff3ba04f63c",
            disid: "1",
            name: "Погарский р-н",
            okato: "15242000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "78c621c8-0bc7-44ea-bab2-fa6da2a37d10",
            disid: "1",
            name: "Почепский р-н",
            okato: "15244000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "b1396873-3a42-4228-b4e1-3d0a3dfddbb1",
            disid: "1",
            name: "Рогнединский р-н",
            okato: "15246000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "2de1a580-336f-4fd4-9902-5fe9170a7fe7",
            disid: "1",
            name: "Севский р-н",
            okato: "15248000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "485f4c4d-aced-4b94-b975-88e72b7dcb72",
            disid: "1",
            name: "Сельцо г",
            okato: "15425000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "2d2846d0-5333-45be-ab49-1804d4d49dad",
            disid: "1",
            name: "Стародубский р-н",
            okato: "15250000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "76ce1af4-cffd-40bc-9399-e0b75e4f1059",
            disid: "1",
            name: "Суземский р-н",
            okato: "15252000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "0f709889-ab7c-486a-89ae-c8995026b535",
            disid: "1",
            name: "Суражский р-н",
            okato: "15254000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "cb79d8a8-7130-4922-b005-83baf9281ff4",
            disid: "1",
            name: "Трубчевский р-н",
            okato: "15256000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "7b930346-d1ba-4cc3-96ca-aa8e1db23777",
            disid: "1",
            name: "Унечский р-н",
            okato: "15258000000",
            parentguid: "f5807226-8be0-4ea8-91fc-39d053aec1e2",
            regioncode: "32"
        }, {
            aoguid: "7377639c-b2ff-408f-963b-954208ffc891",
            disid: "1",
            name: "Александровский р-н",
            okato: "17205000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "f66a00e6-179e-4de9-8ecb-78b0277c9f10",
            disid: "1",
            name: "Владимир г",
            okato: "17401000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "05cd13b8-d0f3-4802-a31e-037ff8d1f24f",
            disid: "1",
            name: "Вязниковский р-н",
            okato: "17210000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "44c9eb8b-3875-4280-9c16-9745374c55e6",
            disid: "1",
            name: "Гороховецкий р-н",
            okato: "17215000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "0c4c15fa-7f27-43ea-83d1-9a5f4d938e53",
            disid: "1",
            name: "Гусь-Хрустальный р-н",
            okato: "17220000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "aa4aa0d7-f97f-4974-9291-c0a530a1ccb6",
            disid: "1",
            name: "Гусь-Хрустальный г",
            okato: "17420000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "2cfe4dcd-dbf7-4dab-b725-8edf47696763",
            disid: "1",
            name: "Камешковский р-н",
            okato: "17225000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "aaac61d9-9f8a-4d5d-b99e-f822409ba13a",
            disid: "1",
            name: "Киржачский р-н",
            okato: "17230000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "0b4978e2-e64c-4db1-b84d-93cf34bdb04b",
            disid: "1",
            name: "Ковров г",
            okato: "17425000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "181600e8-9bf6-4e9c-a00c-dfbca990c0d9",
            disid: "1",
            name: "Ковровский р-н",
            okato: "17235000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "1309495e-71a0-4da2-897c-a6ee5f006e04",
            disid: "1",
            name: "Кольчугинский р-н",
            okato: "17240000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "5bcb047e-0bf0-403d-84a9-1aaf5cbf4f87",
            disid: "1",
            name: "Меленковский р-н",
            okato: "17242000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "0d7d5d87-f0a6-428f-b655-d3be106c64a2",
            disid: "1",
            name: "Муром г",
            okato: "17435000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "e92acfd2-8e96-4b9e-a9ce-45128bd52e88",
            disid: "1",
            name: "Муромский р-н",
            okato: "17244000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "4265d25d-8f14-4f0a-9c1f-9ad765c6c918",
            disid: "1",
            name: "Петушинский р-н",
            okato: "17246000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "c0ac6992-e48e-4648-b176-f56e7bcda57b",
            disid: "1",
            name: "Радужный г",
            okato: "17537000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "0a8e99cd-e96a-45e3-9ae0-866348c2ba42",
            disid: "1",
            name: "Селивановский р-н",
            okato: "17248000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "bc705aef-e0b1-4990-927b-681afd2ca5cd",
            disid: "1",
            name: "Собинский р-н",
            okato: "17250000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "40503592-dc4b-4b3f-a385-36e8ee5f9c78",
            disid: "1",
            name: "Судогодский р-н",
            okato: "17252000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "314ed6d9-4a9f-4fbf-93ba-b0098bea5f57",
            disid: "1",
            name: "Суздальский р-н",
            okato: "17254000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "66ebbe60-29a0-401f-8d6f-775f8376cbc9",
            disid: "1",
            name: "Юрьев-Польский р-н",
            okato: "17256000000",
            parentguid: "b8837188-39ee-4ff9-bc91-fcc9ed451bb3",
            regioncode: "33"
        }, {
            aoguid: "9b26a7ea-f2c5-4529-bada-0c5714c3e829",
            disid: "1",
            name: "Аннинский р-н",
            okato: "20202000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "0ca61edc-ce3c-4ec0-abb1-1a56fd8f9f48",
            disid: "1",
            name: "Бобровский р-н",
            okato: "20204000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "642e494b-ee15-47bb-bc16-59dce0e525fe",
            disid: "1",
            name: "Богучарский р-н",
            okato: "20205000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "dac587d3-17c6-49d3-8949-cc829f947e3f",
            disid: "1",
            name: "Борисоглебский р-н",
            okato: "20206000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "170e9ce1-4eb5-4290-a0e7-786a798b9caa",
            disid: "1",
            name: "Бутурлиновский р-н",
            okato: "20208000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "18f1b4f4-529e-44b4-a960-249a157e163c",
            disid: "1",
            name: "Верхнемамонский р-н",
            okato: "20210000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "4f710c98-fd4e-4511-9dbd-338084033de5",
            disid: "1",
            name: "Верхнехавский р-н",
            okato: "20211000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "8f08ff64-0b66-44ad-af3b-ebeaf7f09243",
            disid: "1",
            name: "Воробьевский р-н",
            okato: "20212000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "5bf5ddff-6353-4a3d-80c4-6fb27f00c6c1",
            disid: "1",
            name: "Воронеж г",
            okato: "20401000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "6bd80725-4a35-4c56-8940-8b17a51e9cfa",
            disid: "1",
            name: "Воронеж-45 г",
            okato: "20213551000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "6d44a022-8d50-4a66-9c7c-0770531bfc0d",
            disid: "1",
            name: "Грибановский р-н",
            okato: "20213000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "86def0f0-7c14-432a-b05f-2b0e95310751",
            disid: "1",
            name: "Калачеевский р-н",
            okato: "20215000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "23568646-4f69-433c-aca9-2e2d0b1f0019",
            disid: "1",
            name: "Каменский р-н",
            okato: "20217000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "2001ae12-b8d9-416d-a432-04c82e12d545",
            disid: "1",
            name: "Кантемировский р-н",
            okato: "20219000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "879310f4-e638-457f-b350-12c09ea7b795",
            disid: "1",
            name: "Каширский р-н",
            okato: "20220000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "d9ca5129-9b3b-40bf-ac92-1a64a0515425",
            disid: "1",
            name: "Лискинский р-н",
            okato: "20221000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "ce787932-178b-45be-9bad-9d2397bb09b6",
            disid: "1",
            name: "Нижнедевицкий р-н",
            okato: "20223000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "c7cdacb9-6a1e-4402-8bc6-6ec36a42d05c",
            disid: "1",
            name: "Нововоронеж г",
            okato: "20427000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "82307e3b-9a60-43ca-a02a-d962a111e7e0",
            disid: "1",
            name: "Новоусманский р-н",
            okato: "20225000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "5fd30fd3-0808-4fc3-8b86-a5c743379de7",
            disid: "1",
            name: "Новохоперский р-н",
            okato: "20227000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "f2dd3176-3b9d-45a8-a31f-19918cb886fa",
            disid: "1",
            name: "Ольховатский р-н",
            okato: "20229000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "924d7c66-4d54-4285-a883-c9c301e7cb67",
            disid: "1",
            name: "Острогожский р-н",
            okato: "20231000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "2faf6b20-b345-4e49-a7a8-a4bc4a783807",
            disid: "1",
            name: "Павловский р-н",
            okato: "20233000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "42569982-54c8-443d-ba6d-1066c4fbc5fb",
            disid: "1",
            name: "Панинский р-н",
            okato: "20235000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "181da23f-c647-4301-8aa3-163b78f429be",
            disid: "1",
            name: "Петропавловский р-н",
            okato: "20237000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "a79eeb05-a4d4-4352-88e3-be0a5548a90f",
            disid: "1",
            name: "Поворинский р-н",
            okato: "20239000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "1ccdcc5c-5749-4408-8add-12f57eb41c2d",
            disid: "1",
            name: "Подгоренский р-н",
            okato: "20241000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "c341a4ac-1295-44a4-9dcc-d560aacd20d6",
            disid: "1",
            name: "Рамонский р-н",
            okato: "20243000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "2e813888-1c82-4ed4-a03d-83ac78f20e79",
            disid: "1",
            name: "Репьевский р-н",
            okato: "20245000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "679f3bda-e2da-4665-99f3-76762ac7656a",
            disid: "1",
            name: "Россошанский р-н",
            okato: "20247000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "3d935fea-609c-47f8-ae0b-f3826b694e40",
            disid: "1",
            name: "Семилукский р-н",
            okato: "20249000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "39ae5dea-ac96-435c-92e8-af972e022ebb",
            disid: "1",
            name: "Таловский р-н",
            okato: "20251000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "d584fe94-ae4c-4cad-9a10-ae5a16877b9f",
            disid: "1",
            name: "Терновский р-н",
            okato: "20254000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "04a264e4-0d97-4425-be3b-49b9edb8a9b3",
            disid: "1",
            name: "Хохольский р-н",
            okato: "20256000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "88d75953-58ab-4996-8f01-8d8c2074ece6",
            disid: "1",
            name: "Эртильский р-н",
            okato: "20258000000",
            parentguid: "b756fe6b-bbd3-44d5-9302-5bfcc740f46e",
            regioncode: "36"
        }, {
            aoguid: "52e8b040-24a6-4585-bb36-790549ee53c6",
            disid: "1",
            name: "Верхнеландеховский р-н",
            okato: "24202000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "b373c14a-16cf-4855-b183-40ed25a8b184",
            disid: "1",
            name: "Вичугский р-н",
            okato: "24201000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "2cf1fe82-8d04-42c9-94bf-6ab1d8dd8046",
            disid: "1",
            name: "Гаврилово-Посадский р-н",
            okato: "24203000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "be3e4c7b-6a13-4f22-ae18-6b087dc0f070",
            disid: "1",
            name: "Заволжский р-н",
            okato: "24205000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "40c6863e-2a5f-4033-a377-3416533948bd",
            disid: "1",
            name: "Иваново г",
            okato: "24401000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "2ee2cecb-e2fe-40b5-a239-4f0a14da7497",
            disid: "1",
            name: "Ивановский р-н",
            okato: "24207000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "b7cfa982-a81a-409a-9a30-3368edfd26ef",
            disid: "1",
            name: "Ильинский р-н",
            okato: "24209000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "155310a1-7787-4ffd-be45-81eefe6f7521",
            disid: "1",
            name: "Кинешемский р-н",
            okato: "24211000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "505c86b1-2268-4e83-b6f3-c49fa4fcbe28",
            disid: "1",
            name: "Комсомольский р-н",
            okato: "24213000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "fe068ab1-3781-4a72-851d-39a4c019cbda",
            disid: "1",
            name: "Лежневский р-н",
            okato: "24214000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "a224603f-2305-4ad8-b26c-9edb8c91be21",
            disid: "1",
            name: "Лухский р-н",
            okato: "24215000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "1fc99be8-c260-4ef7-81d8-87ac37fdd516",
            disid: "1",
            name: "Палехский р-н",
            okato: "24217000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "d54d37cb-7175-4702-af4f-91f61ca939ad",
            disid: "1",
            name: "Пестяковский р-н",
            okato: "24219000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "12c6ba2d-8aa5-495e-a39c-bf587b0990ee",
            disid: "1",
            name: "Приволжский р-н",
            okato: "24220000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "6fd14d94-586e-4a26-908b-65eb79a25614",
            disid: "1",
            name: "Пучежский р-н",
            okato: "24221000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "b0ef2dba-8733-4c7e-8a9f-1dbe74c4981b",
            disid: "1",
            name: "Родниковский р-н",
            okato: "24223000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "24dec59c-37ae-4ad4-a41a-cf7e8310ca48",
            disid: "1",
            name: "Савинский р-н",
            okato: "24225000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "43cf9987-90fb-40ad-982d-3609eace79cd",
            disid: "1",
            name: "Тейковский р-н",
            okato: "24229000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "e19537fc-ff5d-4a91-af59-3949cff834f5",
            disid: "1",
            name: "Фурмановский р-н",
            okato: "24231000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "2bf1780f-88a0-4148-922d-60609b8acce0",
            disid: "1",
            name: "Шуйский р-н",
            okato: "24233000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "5c43874b-4a04-441b-8855-086cc20a4c5f",
            disid: "1",
            name: "Южский р-н",
            okato: "24235000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "718aee0b-4b19-430c-aa2c-6beebb369f8a",
            disid: "1",
            name: "Юрьевецкий р-н",
            okato: "24237000000",
            parentguid: "0824434f-4098-4467-af72-d4f702fed335",
            regioncode: "37"
        }, {
            aoguid: "9e6daf51-64df-482a-8765-28cc2081d0f6",
            disid: "1",
            name: "Бабынинский р-н",
            okato: "29202000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "e6fbf932-7f11-4a00-a374-529cef447f19",
            disid: "1",
            name: "Барятинский р-н",
            okato: "29204000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "5d141523-a76d-448b-a3b8-2d6ddc56eee6",
            disid: "1",
            name: "Боровский р-н",
            okato: "29206000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "093778f4-8378-414b-9905-7a145e4f140f",
            disid: "1",
            name: "Дзержинский р-н",
            okato: "29208000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "a7b2a860-e79a-428f-b017-6c9c0a0f7c84",
            disid: "1",
            name: "Думиничский р-н",
            okato: "29210000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "51978107-d34c-4a89-b010-389aaa1e0889",
            disid: "1",
            name: "Жиздринский р-н",
            okato: "29212000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "70bd2324-8eba-4ff1-bd31-e2dafc10779c",
            disid: "1",
            name: "Жуковский р-н",
            okato: "29213000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "a9b0d30e-fa59-44d1-849e-1ee8acafcfe6",
            disid: "1",
            name: "Износковский р-н",
            okato: "29215000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "b502ae45-897e-4b6f-9776-6ff49740b537",
            disid: "1",
            name: "Калуга г",
            okato: "29401000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "bd20192d-2702-4d5f-bd0c-7db4df7be215",
            disid: "1",
            name: "Кировский р-н",
            okato: "29214000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "e4b94d76-ed28-4421-8c54-4b80098515da",
            disid: "1",
            name: "Козельский р-н",
            okato: "29216000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "0e99e9da-b050-4a31-817e-98bf6defceb7",
            disid: "1",
            name: "Куйбышевский р-н",
            okato: "29218000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "f095f62c-c8d9-44f8-b235-2e92cb4fe427",
            disid: "1",
            name: "Людиновский р-н",
            okato: "29220000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "6ec5a5d0-17d5-4921-9bdb-511e996a5151",
            disid: "1",
            name: "Малоярославецкий р-н",
            okato: "29223000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "40354490-cb9e-43d2-8fee-f6be80d0cceb",
            disid: "1",
            name: "Медынский р-н",
            okato: "29225000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "b6b6786c-67dc-4b49-bc3d-46f0fb230373",
            disid: "1",
            name: "Мещовский р-н",
            okato: "29227000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "330725f9-b35b-453c-a2b3-e7844d2ef172",
            disid: "1",
            name: "Мосальский р-н",
            okato: "29229000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "05a647ff-b859-4c93-8c8e-3590110a0085",
            disid: "1",
            name: "Обнинск г",
            okato: "29415000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "2800afec-b625-47a5-ac00-d31241249d7e",
            disid: "1",
            name: "Перемышльский р-н",
            okato: "29232000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "6ead6700-d3af-4e1f-9ea0-8387d7a82339",
            disid: "1",
            name: "Спас-Деменский р-н",
            okato: "29234000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "973678c4-2b4a-4b0f-b4a4-cf83fd131546",
            disid: "1",
            name: "Сухиничский р-н",
            okato: "29236000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "22c2248f-95a0-4284-9aa6-fa1f8175635f",
            disid: "1",
            name: "Тарусский р-н",
            okato: "29238000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "e39065bd-b5f5-43b3-8826-714eb76565da",
            disid: "1",
            name: "Ульяновский р-н",
            okato: "29242000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "e3cf0e24-3c88-4f4e-8dde-9be6d11d1f22",
            disid: "1",
            name: "Ферзиковский р-н",
            okato: "29244000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "862b8ddf-da38-417f-ade9-4d6db67de957",
            disid: "1",
            name: "Хвастовичский р-н",
            okato: "29246000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "c2e2b85d-d344-4d9e-b58b-403840a25fb1",
            disid: "1",
            name: "Юхновский р-н",
            okato: "29250000000",
            parentguid: "18133adf-90c2-438e-88c4-62c41656de70",
            regioncode: "40"
        }, {
            aoguid: "61cad898-7886-4448-9334-fbfb210e3d20",
            disid: "1",
            name: "Антроповский р-н",
            okato: "34202000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "d7ef1b09-6057-43ae-9fe5-7fdeeb01e106",
            disid: "1",
            name: "Буйский р-н",
            okato: "34204000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "40eb94b1-c51e-455c-92af-7dafaaa92caa",
            disid: "1",
            name: "Волгореченск г",
            okato: "34406000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "56d23a54-5690-423e-acfa-dfd37add902c",
            disid: "1",
            name: "Вохомский р-н",
            okato: "34206000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "25d581a5-c1d8-4d48-bca5-0a08d7d1cdf4",
            disid: "1",
            name: "Галичский р-н",
            okato: "34208000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "2fb4fd4c-8db2-4044-9cd8-a484ef53c84f",
            disid: "1",
            name: "Кадыйский р-н",
            okato: "34210000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "f66f779c-8c9e-44fb-a068-0f78720e4aa2",
            disid: "1",
            name: "Кологривский р-н",
            okato: "34212000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "e5525f12-cd73-48ee-8855-14edf150ec96",
            disid: "1",
            name: "Костромской р-н",
            okato: "34214000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "3071bda7-f162-415f-99fc-da09555a8eaf",
            disid: "1",
            name: "Красносельский р-н",
            okato: "34216000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "7ac76b63-efad-4b46-8c82-2dfdf6a1f2f5",
            disid: "1",
            name: "Макарьевский р-н",
            okato: "34218000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "0c7c1d04-12ef-46d3-9052-f6b3b6d73479",
            disid: "1",
            name: "Мантуровский р-н",
            okato: "34220000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "d4a0d16e-a369-4015-ac25-db375789d41a",
            disid: "1",
            name: "Межевской р-н",
            okato: "34222000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "d8d99aaa-dc30-46c3-a90b-dd6305e80dc6",
            disid: "1",
            name: "Нейский р-н",
            okato: "34224000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "d7649651-6056-40e1-b5af-8827cadbb081",
            disid: "1",
            name: "Нерехтский р-н",
            okato: "34226000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "4d0fe76c-1fa8-4cfb-8c29-cccff3c79272",
            disid: "1",
            name: "Октябрьский р-н",
            okato: "34228000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "8dfe4876-2dae-4f61-9fa5-0f7e907e4262",
            disid: "1",
            name: "Островский р-н",
            okato: "34230000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "95d127ba-613f-477e-8d18-8a3ba065a1c8",
            disid: "1",
            name: "Павинский р-н",
            okato: "34232000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "8294b926-a1c5-448d-a106-6540d0695666",
            disid: "1",
            name: "Парфеньевский р-н",
            okato: "34234000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "39924e34-72e5-4fbc-bba8-7a108037704d",
            disid: "1",
            name: "Поназыревский р-н",
            okato: "34236000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "63132f72-14e6-4e46-a9ae-eb98381bb5b7",
            disid: "1",
            name: "Пыщугский р-н",
            okato: "34238000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "419e3f85-89d9-4e27-a3a7-825c0e5d2c5e",
            disid: "1",
            name: "Солигаличский р-н",
            okato: "34240000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "d93fdbfe-9d60-4972-b28f-84fd95da2535",
            disid: "1",
            name: "Судиславский р-н",
            okato: "34242000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "2c2a98a9-5946-49d1-945e-1fab5b19bf6a",
            disid: "1",
            name: "Сусанинский р-н",
            okato: "34244000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "92703259-411e-410b-b08d-90b587945735",
            disid: "1",
            name: "Чухломский р-н",
            okato: "34246000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "a031240c-d73d-4c40-b839-fd880d6a777c",
            disid: "1",
            name: "Шарьинский р-н",
            okato: "34248000000",
            parentguid: "15784a67-8cea-425b-834a-6afe0e3ed61c",
            regioncode: "44"
        }, {
            aoguid: "ce6d26fd-f15d-436e-852c-63622dbc2972",
            disid: "1",
            name: "Беловский р-н",
            okato: "38202000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "ae959b6b-0865-4a76-bb48-61462b888b88",
            disid: "1",
            name: "Большесолдатский р-н",
            okato: "38203000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "4fd08a71-9136-4cdd-a62d-dfef7d1036b8",
            disid: "1",
            name: "Глушковский р-н",
            okato: "38204000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "4cf24a1d-4640-40de-88f3-3f44f66f975b",
            disid: "1",
            name: "Горшеченский р-н",
            okato: "38206000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "26fc01ec-a272-4c8c-9b16-d23518cc59f5",
            disid: "1",
            name: "Дмитриевский р-н",
            okato: "38208000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "942153ce-3a5b-409d-90d2-29c45f0437ae",
            disid: "1",
            name: "Железногорский р-н",
            okato: "38210000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "7d95faa6-f278-4e97-b050-8534188482cd",
            disid: "1",
            name: "Золотухинский р-н",
            okato: "38212000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "51294c9c-4f55-4b9d-a64f-68310237b4f4",
            disid: "1",
            name: "Касторенский р-н",
            okato: "38214000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "1a83f986-bc6e-468a-bdcc-ac82f5833369",
            disid: "1",
            name: "Конышевский р-н",
            okato: "38216000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "e99955f5-d0b4-4279-a64a-f1c721ed4089",
            disid: "1",
            name: "Кореневский р-н",
            okato: "38218000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "d790c72e-479b-4da2-90d7-842b1712a71c",
            disid: "1",
            name: "Курск г",
            okato: "38401000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "a92c5e46-0c1f-49b1-8741-176cb98ae0fa",
            disid: "1",
            name: "Курский р-н",
            okato: "38220000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "ec4f28fe-6460-49a7-9519-9f6be38b9355",
            disid: "1",
            name: "Курчатовский р-н",
            okato: "38221000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "77962bcd-6417-4216-8179-97c37821f237",
            disid: "1",
            name: "Льговский р-н",
            okato: "38222000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "9b30f945-8d93-47c2-a3cb-5a010bab57fc",
            disid: "1",
            name: "Мантуровский р-н",
            okato: "38223000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "504b5bef-0043-4717-8c4e-c698aafe4d93",
            disid: "1",
            name: "Медвенский р-н",
            okato: "38224000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "df6cb32f-2d5b-48b0-959f-dcd4cc45980b",
            disid: "1",
            name: "Обоянский р-н",
            okato: "38226000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "7fdab3ea-d4c9-43ef-beb7-7d13e1511cb4",
            disid: "1",
            name: "Октябрьский р-н",
            okato: "38228000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "054743d2-cee3-4bcf-aba5-c55cb9ab26bc",
            disid: "1",
            name: "Поныровский р-н",
            okato: "38230000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "cd10da7f-2e09-4665-a380-dcc270d2868c",
            disid: "1",
            name: "Пристенский р-н",
            okato: "38232000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "4f9c6d9b-e97f-44e8-8eec-b382f45ad634",
            disid: "1",
            name: "Рыльский р-н",
            okato: "38234000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "9dd449be-ff98-4b25-90ae-f3aa1f66f1e1",
            disid: "1",
            name: "Советский р-н",
            okato: "38236000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "f6f4ad35-10b6-4529-b4b0-d2c070611982",
            disid: "1",
            name: "Солнцевский р-н",
            okato: "38238000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "7b5749f8-4232-433d-83af-3ac76df0d510",
            disid: "1",
            name: "Суджанский р-н",
            okato: "38240000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "dd740703-749e-4cd2-851c-4d2d79c00ee7",
            disid: "1",
            name: "Тимский р-н",
            okato: "38242000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "4e1c5e7e-267a-47b3-b3e5-4b6b94b78708",
            disid: "1",
            name: "Фатежский р-н",
            okato: "38244000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "8fb85106-c99f-4b1e-b412-07adb051d67e",
            disid: "1",
            name: "Хомутовский р-н",
            okato: "38246000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "e7f7dacc-a9ce-4dab-8e39-374d1eefad62",
            disid: "1",
            name: "Черемисиновский р-н",
            okato: "38248000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "935a7ae2-c583-4f16-8f53-baee25d99c25",
            disid: "1",
            name: "Щигровский р-н",
            okato: "38250000000",
            parentguid: "ee594d5e-30a9-40dc-b9f2-0add1be44ba1",
            regioncode: "46"
        }, {
            aoguid: "eb2888d6-f468-414a-91c9-a24f38f93cd6",
            disid: "1",
            name: "Воловский р-н",
            okato: "42203000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "e23ad948-ac70-40e7-bc90-88935d668086",
            disid: "1",
            name: "Грязинский р-н",
            okato: "42206000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "5e5d5398-7773-4978-a793-32161426b7b6",
            disid: "1",
            name: "Данковский р-н",
            okato: "42209000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "91924097-8611-4038-9f35-557b498945bd",
            disid: "1",
            name: "Добринский р-н",
            okato: "42212000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "b433a007-1fa9-49c1-af8a-68d5641d49c2",
            disid: "1",
            name: "Добровский р-н",
            okato: "42215000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "28897d03-379f-4ba4-9954-54676e7f90d8",
            disid: "1",
            name: "Долгоруковский р-н",
            okato: "42218000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "8261b161-ceac-4fa2-9fe8-593cb2a28210",
            disid: "1",
            name: "Елец г",
            okato: "42415000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "e15784ef-4bce-4699-bb17-db54b56d5e7c",
            disid: "1",
            name: "Елецкий р-н",
            okato: "42221000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "dca0e378-4a29-4d64-a378-4dc96f78da80",
            disid: "1",
            name: "Задонский р-н",
            okato: "42224000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "d9f7f8dd-6424-4704-965f-3802ca184a3e",
            disid: "1",
            name: "Измалковский р-н",
            okato: "42227000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "a5840106-37e7-4b8a-8d87-9d7a45549393",
            disid: "1",
            name: "Краснинский р-н",
            okato: "42230000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "fc010a53-032f-4d21-a25f-7d52e6b2ea32",
            disid: "1",
            name: "Лебедянский р-н",
            okato: "42233000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "38d6b0cc-df87-4742-8920-babc781efe46",
            disid: "1",
            name: "Лев-Толстовский р-н",
            okato: "42236000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "eacb5f15-1a2e-432e-904a-ca56bd635f1b",
            disid: "1",
            name: "Липецк г",
            okato: "42401000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "65369e3d-fa4b-4ada-b8d7-a94b6eb6acf2",
            disid: "1",
            name: "Липецкий р-н",
            okato: "42240000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "c3991222-d8a8-4123-9907-c99427db53d3",
            disid: "1",
            name: "Становлянский р-н",
            okato: "42242000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "b04ae219-6357-4818-bf45-be5a9c6fc3f9",
            disid: "1",
            name: "Тербунский р-н",
            okato: "42245000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "2922596b-f4e7-4093-b59e-4156018615de",
            disid: "1",
            name: "Усманский р-н",
            okato: "42248000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "f8246f20-9999-4e88-a9e3-618387aab142",
            disid: "1",
            name: "Хлевенский р-н",
            okato: "42252000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "142d40fd-9ac7-4d73-85bc-23216b014cdd",
            disid: "1",
            name: "Чаплыгинский р-н",
            okato: "42256000000",
            parentguid: "1490490e-49c5-421c-9572-5673ba5d80c8",
            regioncode: "48"
        }, {
            aoguid: "73e03d76-6e4e-4867-aa11-be6fbd4c1952",
            disid: "1",
            name: "Городское поселение Московский тер",
            okato: "46228505000",
            parentguid: "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
            regioncode: "77"
        }, {
            aoguid: "ec44c0ee-bf24-41c8-9e1c-76136ab05cbf",
            disid: "1",
            name: "Зеленоград г",
            okato: "",
            parentguid: "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
            regioncode: "77"
        }, {
            aoguid: "7dde11f6-f6ab-4a05-8052-78e0cab8fc59",
            disid: "1",
            name: "Троицк г",
            okato: "46475000000",
            parentguid: "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
            regioncode: "77"
        }, {
            aoguid: "b7fc1d20-41d4-44e8-af34-d635f452d74c",
            disid: "1",
            name: "Щербинка г",
            okato: "46489000000",
            parentguid: "0c5b2444-70a0-4932-980c-b4dc0d3f02b5",
            regioncode: "77"
        }, {
            aoguid: "74c0a432-f013-4a19-a99d-0683775f482e",
            disid: "1",
            name: "Балашихинский р-н",
            okato: "46204000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "582fae29-5955-4dba-9f77-ebf9a8e60827",
            disid: "1",
            name: "Бронницы г",
            okato: "46405000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "ebceede7-cea0-48c8-b3ba-97b599feb687",
            disid: "1",
            name: "Волоколамский р-н",
            okato: "46205000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "223bb7e9-9086-47b6-ac2b-45c7004831ed",
            disid: "1",
            name: "Воскресенский р-н",
            okato: "46206000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "6fa8b59c-cda7-4c98-8b41-e0bcb2867e16",
            disid: "1",
            name: "Дзержинский г",
            okato: "46411000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "7fb194dd-553a-4093-8e95-04dc8963d80f",
            disid: "1",
            name: "Дмитровский р-н",
            okato: "46208000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "dcf522ad-e032-4db9-9dbb-e30d2cddfadb",
            disid: "1",
            name: "Долгопрудный г",
            okato: "46416000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "d177d438-ea69-4169-854c-d4512d7c8ebe",
            disid: "1",
            name: "Домодедово г",
            okato: "46209000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "91840e27-ed7f-42ed-929c-1d538f327255",
            disid: "1",
            name: "Домодедовский р-н",
            okato: "46209000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "c86ad06c-c721-4a7e-aa06-f622eed83b6f",
            disid: "1",
            name: "Дубна г",
            okato: "46418000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "96036cfc-7acb-4de8-9004-3ae4c1c232c0",
            disid: "1",
            name: "Егорьевский р-н",
            okato: "46212000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "c8b7d7f3-857f-4acf-aeac-2b6e9aebc760",
            disid: "1",
            name: "Железнодорожный г",
            okato: "46424000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "fd91f393-4820-437f-a50c-907e9856c374",
            disid: "1",
            name: "Жуковский г",
            okato: "46425000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "3fb232e4-8793-4fa9-85da-78eefea6c7ca",
            disid: "1",
            name: "Зарайский р-н",
            okato: "46216000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "4bae8c68-e107-4352-9d4b-f937f90469ac",
            disid: "1",
            name: "Звенигород г",
            okato: "46430000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "e12cf909-779a-4352-af51-7a2a07668f60",
            disid: "1",
            name: "Ивантеевка г",
            okato: "46432000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "f0aeb51c-7a34-4112-a6b4-dafde11d3eef",
            disid: "1",
            name: "Истринский р-н",
            okato: "46218000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "eb563d60-f0d3-4783-a3c2-f26b7cee6cf7",
            disid: "1",
            name: "Каширский р-н",
            okato: "46220501000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "5a11404e-3a4f-4943-b60c-51480729dcfb",
            disid: "1",
            name: "Климовск г",
            okato: "46436000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "fd790f0c-f82c-49df-b7e5-6af9c6e8297a",
            disid: "1",
            name: "Клинский р-н",
            okato: "46221000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "ca714f44-d673-41ae-8bee-f1f60f3459e1",
            disid: "1",
            name: "Коломенский р-н",
            okato: "46222000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "b367fb03-29f9-4dac-8d85-01595cfb6ad9",
            disid: "1",
            name: "Коломна г",
            okato: "46438000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "819d6910-b4d1-474f-ad10-c1fa944dfca4",
            disid: "1",
            name: "Королев г",
            okato: "46434000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "67488a01-ccb7-4638-bcad-117db0fbe9a3",
            disid: "1",
            name: "Котельники г",
            okato: "46444000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "bc5d23ce-e886-4dc7-976c-6b8be6d501d2",
            disid: "1",
            name: "Красноармейск г",
            okato: "46443000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "90c69435-9a82-4965-ac01-d2689e2e535c",
            disid: "1",
            name: "Красногорский р-н",
            okato: "46223000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "6e8a99b2-e6bd-4169-acb3-f7e6cd53be3b",
            disid: "1",
            name: "Краснознаменск г",
            okato: "46505000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "69511bb4-8f25-490d-9c54-0c1c00591af2",
            disid: "1",
            name: "Ленинский р-н",
            okato: "46228000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "67c493d4-d141-407e-868b-dafc289503f3",
            disid: "1",
            name: "Лобня г",
            okato: "46440000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "96c869d9-51a8-4db6-8011-9fc459c9a78c",
            disid: "1",
            name: "Лосино-Петровский г",
            okato: "46259503000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "af6539b1-83c9-47d8-8d03-cda0bcb8ad61",
            disid: "1",
            name: "Лотошинский р-н",
            okato: "46229000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "0c73eed3-32a2-4a62-8b45-cbfc46c80340",
            disid: "1",
            name: "Луховицкий р-н",
            okato: "46230000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "bba16a72-09e1-4f3f-93af-df5ecab6714b",
            disid: "1",
            name: "Лыткарино г",
            okato: "46441000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "fa5172c9-11ca-4e4c-bdb0-ffb9fec9c849",
            disid: "1",
            name: "Люберецкий р-н",
            okato: "46231000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "60a07c29-5fa6-45ce-ab10-5ea17f843736",
            disid: "1",
            name: "Можайский р-н",
            okato: "46233000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "a87ff831-986b-44a7-8405-00fc699de4ce",
            disid: "1",
            name: "Мытищинский р-н",
            okato: "46234000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "60373f03-59b1-438e-90aa-4e1f38c97047",
            disid: "1",
            name: "Наро-Фоминский р-н",
            okato: "46238000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "8bb0a0d8-975e-4a08-bc16-3960a8137992",
            disid: "1",
            name: "Ногинский р-н",
            okato: "46239000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "b89d5190-d1db-47d7-94af-42f1d3ce2f41",
            disid: "1",
            name: "Одинцовский р-н",
            okato: "46241000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "9ab1cf2a-50c3-4ca3-8e11-8f87211c236c",
            disid: "1",
            name: "Озерский р-н",
            okato: "46242000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "0f2f2d09-8e7a-4356-bd4d-0b055d802e7b",
            disid: "1",
            name: "Орехово-Зуево г",
            okato: "46457000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "d4c14df1-093b-4a63-abc9-996497910e7b",
            disid: "1",
            name: "Орехово-Зуевский р-н",
            okato: "46243000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "1b31762d-ea2c-4da7-80e9-2a494a1778db",
            disid: "1",
            name: "Павлово-Посадский р-н",
            okato: "46245000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "b22cf685-e391-42c8-aab5-a9aadb9193d4",
            disid: "1",
            name: "Подольск г",
            okato: "46460000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "c8cede1d-51e7-49ef-b4b9-be5057bb7ec2",
            disid: "1",
            name: "Подольский р-н",
            okato: "46246000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "9990bc45-c7c1-407e-bdd2-5526e4f742d2",
            disid: "1",
            name: "Протвино г",
            okato: "46467000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "2f88bc57-5096-4aee-bcfc-fe26d4dd3a26",
            disid: "1",
            name: "Пушкинский р-н",
            okato: "46247000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "49579edb-77cd-4967-9ef2-5530c4076067",
            disid: "1",
            name: "Пущино г",
            okato: "46462000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "7e51a385-9455-443e-bf57-709df8f48198",
            disid: "1",
            name: "Раменский р-н",
            okato: "46248000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "e0504cf6-4d81-401c-b18b-434457aaaa21",
            disid: "1",
            name: "Реутов г",
            okato: "46464000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "377ca4f0-3268-42b4-bf68-af98c3682503",
            disid: "1",
            name: "Рошаль г",
            okato: "46465000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "3dadd23f-6039-44b9-b109-6f21cddfef68",
            disid: "1",
            name: "Рузский р-н",
            okato: "46249000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "5c7c7022-9d64-4110-89df-d52460b9cd93",
            disid: "1",
            name: "Сергиево-Посадский р-н",
            okato: "46215000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "f321b6d7-b23a-4e53-8625-1af1016bd570",
            disid: "1",
            name: "Серебряно-Прудский р-н",
            okato: "46250000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "efc02a6a-273b-4a49-aef9-a5606ef8591c",
            disid: "1",
            name: "Серпухов г",
            okato: "46470000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "d21d56bd-349c-4cd7-bf88-3b1361f9aa16",
            disid: "1",
            name: "Серпуховский р-н",
            okato: "46251000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "395203ad-a8a5-4708-944c-790ec93bf8a3",
            disid: "1",
            name: "Солнечногорский р-н",
            okato: "46252000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "4df13700-4fed-41e8-a95b-1cac5e8fcb3a",
            disid: "1",
            name: "Ступинский р-н",
            okato: "46253000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "ae843cb3-df6b-41db-954b-1204308256d0",
            disid: "1",
            name: "Талдомский р-н",
            okato: "46254000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "13696e0e-4c75-49aa-9c83-0a6faf5074ee",
            disid: "1",
            name: "Фрязино г",
            okato: "46480000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "d76255c8-3173-4db5-a39b-badd3ebdf851",
            disid: "1",
            name: "Химки г",
            okato: "46483000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "9a7ecd73-a07d-4aab-bffa-3fd03bd213a6",
            disid: "1",
            name: "Химкинский р-н",
            okato: "46255000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "c4ad9fee-ed64-4fab-bf38-ceb051bb4cf9",
            disid: "1",
            name: "Чеховский р-н",
            okato: "46256000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "c1d4c644-fcf8-4bbe-8dd6-4df1e0b200e2",
            disid: "1",
            name: "Шатурский р-н",
            okato: "46257000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "ba088938-a22c-4ae1-9d24-e46fe7c423ec",
            disid: "1",
            name: "Шаховской р-н",
            okato: "46258000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "823b14d2-2e5f-4586-9c7e-a3d6b04daf39",
            disid: "1",
            name: "Щелковский р-н",
            okato: "46259000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "091e36e6-fab6-477b-8b07-9151cbeb9cd5",
            disid: "1",
            name: "Электрогорск г",
            okato: "46245505000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "e0b171b6-bf2e-4d68-ab05-4d42ab2b375a",
            disid: "1",
            name: "Электросталь г",
            okato: "46490000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "ad3c0a1e-78d6-4c58-90cb-f2cc93b173f4",
            disid: "1",
            name: "Юбилейный г",
            okato: "46493000000",
            parentguid: "29251dcf-00a1-4e34-98d4-5c47484a36d4",
            regioncode: "50"
        }, {
            aoguid: "b3ccc7a9-8439-4686-a936-65a2b6212362",
            disid: "1",
            name: "Болховский р-н",
            okato: "54204000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "bf0b5d8d-5e60-4b61-87d5-f428b1b6a6cf",
            disid: "1",
            name: "Верховский р-н",
            okato: "54208000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "a2fc3c1b-3b84-4adb-9a35-58689c29e56b",
            disid: "1",
            name: "Глазуновский р-н",
            okato: "54210000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "5f2ca854-d8a1-44e6-a265-c3f844a32580",
            disid: "1",
            name: "Дмитровский р-н",
            okato: "54212000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "a1104ce9-df57-440c-9cfe-ba2f2cc34563",
            disid: "1",
            name: "Должанский р-н",
            okato: "54215000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "630497e1-24a3-4a3d-b3cd-a4aa5ffc7eea",
            disid: "1",
            name: "Залегощенский р-н",
            okato: "54218000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "8e4a2db5-616b-4d87-84f0-061a9d1c936e",
            disid: "1",
            name: "Знаменский р-н",
            okato: "54220000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "e25a11cb-3f64-4ff6-9591-d5c0470e3645",
            disid: "1",
            name: "Колпнянский р-н",
            okato: "54223000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "d1423e01-0020-42dd-a465-f9cb04151259",
            disid: "1",
            name: "Корсаковский р-н",
            okato: "54226000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "34975622-2cfd-4dfd-863f-c98c6eb2164e",
            disid: "1",
            name: "Краснозоренский р-н",
            okato: "54224000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "0c30014e-dac0-4df7-af5d-bdc251e2254d",
            disid: "1",
            name: "Кромской р-н",
            okato: "54225000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "41859789-303c-43e3-a4dd-c98ef3694fec",
            disid: "1",
            name: "Ливенский р-н",
            okato: "54229000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "aef2c735-2e21-42e5-8638-9667bade6a2b",
            disid: "1",
            name: "Ливны г",
            okato: "54405000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "651efb39-4d81-4965-927a-2fbf3354d517",
            disid: "1",
            name: "Малоархангельский р-н",
            okato: "54232000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "76f2780b-0f1c-4818-98a4-13da5c8a2c80",
            disid: "1",
            name: "Мценск г",
            okato: "54410000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "3588ca22-4913-4e88-9eb6-107aef30fe46",
            disid: "1",
            name: "Мценский р-н",
            okato: "54236000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "5a120630-54b4-42c8-8fd7-e011b7053a99",
            disid: "1",
            name: "Новодеревеньковский р-н",
            okato: "54239000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "b284d1fb-0b62-4568-bf80-ea060a10ffe1",
            disid: "1",
            name: "Новосильский р-н",
            okato: "54243000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "2abed4d9-5565-4885-bc96-f4ffccc6cba4",
            disid: "1",
            name: "Орел г",
            okato: "54401000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "10fc49fc-9cae-47db-9045-3f0375ef11db",
            disid: "1",
            name: "Орловский р-н",
            okato: "54247000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "7fc697a0-b658-46cb-9324-d7492f736672",
            disid: "1",
            name: "Покровский р-н",
            okato: "54250000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "401131ed-ffa6-4487-ab18-2fc93e97e7c9",
            disid: "1",
            name: "Свердловский р-н",
            okato: "54252000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "c33987e5-0aa9-41b8-8b4d-d200a44c495c",
            disid: "1",
            name: "Сосковский р-н",
            okato: "54253000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "ee8afff4-30e1-4c21-a919-d8a0f69d4a5a",
            disid: "1",
            name: "Троснянский р-н",
            okato: "54254000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "dfa80568-f1cb-43aa-9b23-b4780cd7ed5a",
            disid: "1",
            name: "Урицкий р-н",
            okato: "54255000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "86039a0b-45a2-4cc9-9575-b8e73f30706d",
            disid: "1",
            name: "Хотынецкий р-н",
            okato: "54257000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "ed91b059-745a-4321-82de-c2e8581d5f6c",
            disid: "1",
            name: "Шаблыкинский р-н",
            okato: "54259000000",
            parentguid: "5e465691-de23-4c4e-9f46-f35a125b5970",
            regioncode: "57"
        }, {
            aoguid: "3fc75344-6325-453d-b781-4500e5d88747",
            disid: "1",
            name: "Ермишинский р-н",
            okato: "61202000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "b3a43120-35bb-4dc1-a0fc-b65569e27ecd",
            disid: "1",
            name: "Захаровский р-н",
            okato: "61204000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "6513609f-7f58-4da1-9827-6cc65e1c182a",
            disid: "1",
            name: "Кадомский р-н",
            okato: "61206000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "5ad034ad-85b5-4106-be01-3d6e8b08cb2c",
            disid: "1",
            name: "Касимов г",
            okato: "61405000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "4eee6b2e-e18d-418b-9bd6-718dec0df1c0",
            disid: "1",
            name: "Касимовский р-н",
            okato: "61208000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "2d6f9946-c7b5-4213-ad5c-a9018ccdd806",
            disid: "1",
            name: "Клепиковский р-н",
            okato: "61210000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "0a0d1a5f-37f7-482d-b83c-e503426dfd59",
            disid: "1",
            name: "Кораблинский р-н",
            okato: "61212000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "08dd0686-0521-4801-ac22-179d2215be1d",
            disid: "1",
            name: "Милославский р-н",
            okato: "61215000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "94e426a9-229b-460e-b483-ff2f8d4a026d",
            disid: "1",
            name: "Михайловский р-н",
            okato: "61217000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "618933a2-821f-4031-8740-70ddfb3361d9",
            disid: "1",
            name: "Новодеревенский р-н",
            okato: "61220000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "d10b6cc4-f668-4b6c-b4a0-5d3cb9f9fbf6",
            disid: "1",
            name: "Пителинский р-н",
            okato: "61223000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "0b2f6225-49e6-49d0-ab5b-625b9fb94554",
            disid: "1",
            name: "Пронский р-н",
            okato: "61225000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "79f257ad-6cf3-4e6d-a14b-ef7c890585ba",
            disid: "1",
            name: "Путятинский р-н",
            okato: "61226000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "c63df1d5-7dd5-422f-b3ae-d383b291e27d",
            disid: "1",
            name: "Рыбновский р-н",
            okato: "61227000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "30b3abb1-d680-45e2-a294-ba715d5dd6e4",
            disid: "1",
            name: "Ряжский р-н",
            okato: "61230000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "e67849b2-6b35-41b4-9d49-65b69fd45e07",
            disid: "1",
            name: "Рязанский р-н",
            okato: "61234000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "86e5bae4-ef58-4031-b34f-5e9ff914cd55",
            disid: "1",
            name: "Рязань г",
            okato: "61401000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "60695752-560f-4579-91d7-9d07d0abe622",
            disid: "1",
            name: "Сапожковский р-н",
            okato: "61237000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "cc1da627-6ab9-455c-813e-f0515457bce2",
            disid: "1",
            name: "Сараевский р-н",
            okato: "61240000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "23c99789-de53-408e-b38d-09c5539cce2f",
            disid: "1",
            name: "Сасово г",
            okato: "61410000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "81d15db9-03e3-4e6e-b3d4-b1ceaf03a7fa",
            disid: "1",
            name: "Сасовский р-н",
            okato: "61242000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "1ab7c980-83c4-46c6-b6bf-fc0d6b64b56a",
            disid: "1",
            name: "Скопин г",
            okato: "61415000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "a03c70ca-6855-4258-af6e-c56e804bfae7",
            disid: "1",
            name: "Скопинский р-н",
            okato: "61244000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "5fcb6fc7-c498-4a4d-bcd6-ee4634a4399b",
            disid: "1",
            name: "Спасский р-н",
            okato: "61246000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "801ae9ba-4809-4aa5-b045-7791125540d6",
            disid: "1",
            name: "Старожиловский р-н",
            okato: "61248000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "fb1d8d69-259a-4afe-8ed3-fcdb5354c9f6",
            disid: "1",
            name: "Ухоловский р-н",
            okato: "61250000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "49e90f30-3a37-4d42-a3d6-bb59fc19c766",
            disid: "1",
            name: "Чучковский р-н",
            okato: "61253000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "278b7e3f-02ca-493f-913d-9a25203138ff",
            disid: "1",
            name: "Шацкий р-н",
            okato: "61256000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "22773cd1-2b2c-418e-96d0-a9a696cd11ed",
            disid: "1",
            name: "Шиловский р-н",
            okato: "61258000000",
            parentguid: "963073ee-4dfc-48bd-9a70-d2dfc6bd1f31",
            regioncode: "62"
        }, {
            aoguid: "1ceb2e99-0391-4d14-beb2-0e917fa1fe97",
            disid: "1",
            name: "Велижский р-н",
            okato: "66203000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "1257968d-9564-44d1-b914-129559642025",
            disid: "1",
            name: "Вяземский р-н",
            okato: "66205000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "23d70e81-cb1c-45d7-8b74-b89b67864b8c",
            disid: "1",
            name: "Гагаринский р-н",
            okato: "66208000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "9a9bd9cb-8dc2-4437-b05a-30b8613c6798",
            disid: "1",
            name: "Глинковский р-н",
            okato: "66209000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "56824b2b-0186-4991-9ef6-4bdcb8d6b86d",
            disid: "1",
            name: "Демидовский р-н",
            okato: "66211000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "5e2b3d5b-cd14-4116-8837-8878b5ccc057",
            disid: "1",
            name: "Десногорск г",
            okato: "66410000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "d4df5e3c-5a79-4780-9947-58eb77346d1b",
            disid: "1",
            name: "Дорогобужский р-н",
            okato: "66214000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "8dac9a96-4940-4ef6-92fe-e9b16e562462",
            disid: "1",
            name: "Духовщинский р-н",
            okato: "66216000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "8ae69275-b296-425c-9593-8608c0b9cd47",
            disid: "1",
            name: "Ельнинский р-н",
            okato: "66219000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "3c9dce06-9aa8-4a90-a398-7dc0183dcd9f",
            disid: "1",
            name: "Ершичский р-н",
            okato: "66221000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "ad789c45-33d1-4159-9108-a9bcfe36a662",
            disid: "1",
            name: "Кардымовский р-н",
            okato: "66223000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "cd2717ba-7a65-495a-bcdb-e925f1cef0b3",
            disid: "1",
            name: "Краснинский р-н",
            okato: "66224000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "caf5eb48-8ecd-4dfb-acab-81437535a2a8",
            disid: "1",
            name: "Монастырщинский р-н",
            okato: "66227000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "196b9b07-6e13-4b81-ab5d-67d7284c5869",
            disid: "1",
            name: "Новодугинский р-н",
            okato: "66230000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "6829228d-ba24-45c2-af67-87972e5c5622",
            disid: "1",
            name: "Починковский р-н",
            okato: "66233000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "8ac93b54-db33-4693-a9ba-7182c8822a1f",
            disid: "1",
            name: "Рославльский р-н",
            okato: "66236000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "7f6b64d5-f211-4813-b1a8-e687b5e63382",
            disid: "1",
            name: "Руднянский р-н",
            okato: "66238000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "d8549edd-1928-412a-8b17-17dfc25e0a21",
            disid: "1",
            name: "Сафоновский р-н",
            okato: "66241000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "d414a2e8-9e1e-48c1-94a4-7308d5608177",
            disid: "1",
            name: "Смоленск г",
            okato: "66401000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "db6affe3-5b68-46ec-bd7f-03a96d3329fe",
            disid: "1",
            name: "Смоленский р-н",
            okato: "66244000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "55de65cd-3a62-4304-bd72-75cb153b8f33",
            disid: "1",
            name: "Сычевский р-н",
            okato: "66246000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "ef88d16f-7a72-4f9a-b255-0f1f64081b38",
            disid: "1",
            name: "Темкинский р-н",
            okato: "66248000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "ae854b96-7cd0-4db9-b4e4-192921cb8b19",
            disid: "1",
            name: "Угранский р-н",
            okato: "66250000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "b89a5afe-940e-4158-82d0-12b68142a7dd",
            disid: "1",
            name: "Хиславичский р-н",
            okato: "66252000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "528a9073-54aa-4429-9941-0d09ed30447e",
            disid: "1",
            name: "Холм-Жирковский р-н",
            okato: "66254000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "a3bf87b2-5e6c-4bc5-a00e-5f321c6d0a62",
            disid: "1",
            name: "Шумячский р-н",
            okato: "66256000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "33e3d555-c66a-4611-a1c5-4f4002ce578f",
            disid: "1",
            name: "Ярцевский р-н",
            okato: "66258000000",
            parentguid: "e8502180-6d08-431b-83ea-c7038f0df905",
            regioncode: "67"
        }, {
            aoguid: "954949ee-b14b-40ee-8c22-0d6dc0144cb5",
            disid: "1",
            name: "Бондарский р-н",
            okato: "68202000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "6acde0ac-e7ad-45af-840e-1c0f5b324b3e",
            disid: "1",
            name: "Гавриловский р-н",
            okato: "68203000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "8d2dc46b-a306-4702-91f4-977e558eef51",
            disid: "1",
            name: "Жердевский р-н",
            okato: "68204000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "b28e7b19-71b4-43e0-ac8e-22bd2aaedf77",
            disid: "1",
            name: "Знаменский р-н",
            okato: "68206000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "ea3a9d56-e84b-43dd-8974-3564f7e0f8dd",
            disid: "1",
            name: "Инжавинский р-н",
            okato: "68208000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "24694c2c-bab5-4fc7-9666-5ad984536465",
            disid: "1",
            name: "Кирсанов г",
            okato: "68405000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "f2b31a0b-3de1-4daf-8136-c2be4fb2063d",
            disid: "1",
            name: "Кирсановский р-н",
            okato: "68210000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "1cc2ab3c-1791-4771-b332-d2d96f52788e",
            disid: "1",
            name: "Котовск г",
            okato: "68410000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "9bacca6d-4ed5-4fae-a76d-d281ce884d04",
            disid: "1",
            name: "Мичуринск г",
            okato: "68415000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "e0ece83e-fd6c-4770-83ea-a1dae795e945",
            disid: "1",
            name: "Мичуринский р-н",
            okato: "68212000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "7dad8730-11c5-4e61-ba75-0c16043c0234",
            disid: "1",
            name: "Мордовский р-н",
            okato: "68214000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "88bf324d-7303-45c3-ba7f-695f2528490b",
            disid: "1",
            name: "Моршанск г",
            okato: "68420000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "b8436171-8961-4eb2-9dc0-3f001846aaa8",
            disid: "1",
            name: "Моршанский р-н",
            okato: "68216000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "050c2727-55bf-4258-bc7a-094d018a361d",
            disid: "1",
            name: "Мучкапский р-н",
            okato: "68218000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "23206de0-e14b-40b3-89e8-ca79aab070d0",
            disid: "1",
            name: "Никифоровский р-н",
            okato: "68220000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "daa331e3-1528-4c7d-8bd7-910ef73168e1",
            disid: "1",
            name: "Первомайский р-н",
            okato: "68222000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "d616223f-bf7e-4c6c-9834-41a51b56786c",
            disid: "1",
            name: "Петровский р-н",
            okato: "68224000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "651dbe07-0510-4c72-b009-4c0aed3d396c",
            disid: "1",
            name: "Пичаевский р-н",
            okato: "68226000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "f3d1ea5a-4478-4589-bec0-47c558577739",
            disid: "1",
            name: "Рассказово г",
            okato: "68425000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "cda1b9dd-4a8c-486a-ab25-05229c579774",
            disid: "1",
            name: "Рассказовский р-н",
            okato: "68228000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "b72e4efa-7c7f-4503-94c2-cce202a4c528",
            disid: "1",
            name: "Ржаксинский р-н",
            okato: "68230000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "cc23a42b-4fdd-4a8b-9c58-936d586f8e06",
            disid: "1",
            name: "Сампурский р-н",
            okato: "68232000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "0c9ca360-36f1-4819-b0b9-88fba3bc44e4",
            disid: "1",
            name: "Сосновский р-н",
            okato: "68234000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "28695043-ab1b-411d-8259-ce84d46f7c8e",
            disid: "1",
            name: "Староюрьевский р-н",
            okato: "68236000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "ea2a1270-1e19-4224-b1a0-4228b9de3c7a",
            disid: "1",
            name: "Тамбов г",
            okato: "68401000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "70adc4a8-0c93-4940-9605-cf2e772c4133",
            disid: "1",
            name: "Тамбовский р-н",
            okato: "68240000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "f3bf6177-2e72-45b7-b7e2-bea113ed0f9b",
            disid: "1",
            name: "Токаревский р-н",
            okato: "68242000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "5a54fa19-c17f-40a8-9d81-0fc826cba781",
            disid: "1",
            name: "Уварово г",
            okato: "68430000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "7a2e0916-0b08-4759-a337-4a1fe12780fa",
            disid: "1",
            name: "Уваровский р-н",
            okato: "68244000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "057a3a62-9e49-4cda-b9f5-3810e2cd46eb",
            disid: "1",
            name: "Уметский р-н",
            okato: "68246000000",
            parentguid: "a9a71961-9363-44ba-91b5-ddf0463aebc2",
            regioncode: "68"
        }, {
            aoguid: "46f20f8a-e069-487b-934d-7f9ef60d1526",
            disid: "1",
            name: "Андреапольский р-н",
            okato: "28202000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "9e56cb89-d3b1-4140-b141-cd3c94ad21b0",
            disid: "1",
            name: "Бежецкий р-н",
            okato: "28204000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "acc503d1-74e5-4430-8eda-d3e79ade0f37",
            disid: "1",
            name: "Бельский р-н",
            okato: "28206000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "e7cdcffd-c57d-48c4-9503-6788c980243a",
            disid: "1",
            name: "Бологовский р-н",
            okato: "28208000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "572664bf-2d8b-4c74-8a15-10ee2e8505a6",
            disid: "1",
            name: "Весьегонский р-н",
            okato: "28210000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "7781e1b2-318a-46e7-b8b2-5856e8da1a47",
            disid: "1",
            name: "Вышневолоцкий р-н",
            okato: "28212000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "ac45dd91-33c1-4689-a48c-226c75dc752d",
            disid: "1",
            name: "Вышний Волочек г",
            okato: "28414000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "5ae0d543-700a-4f80-ab60-5bd1560059ff",
            disid: "1",
            name: "Жарковский р-н",
            okato: "28214000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "8ebf6e4d-22da-4b42-95be-934125432bfa",
            disid: "1",
            name: "Западнодвинский р-н",
            okato: "28216000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "276164c7-c7ce-4d1d-9762-b82a8e079a14",
            disid: "1",
            name: "Зубцовский р-н",
            okato: "28218000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "df5569f0-3033-423a-89cd-d48cd95e14f3",
            disid: "1",
            name: "Калининский р-н",
            okato: "28220000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "0af30a82-765c-4a40-9777-a55fcd55b1d7",
            disid: "1",
            name: "Калязинский р-н",
            okato: "28222000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "7e816a2d-e205-45f7-9253-44a59fb2cc38",
            disid: "1",
            name: "Кашинский р-н",
            okato: "28224000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "b7cc6ccc-8534-4ee5-91bd-58eee1e4dbd0",
            disid: "1",
            name: "Кесовогорский р-н",
            okato: "28226000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "308b0e8d-720d-45d8-abf7-9b1df375f148",
            disid: "1",
            name: "Кимрский р-н",
            okato: "28228000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "2c02d3e2-f65d-4d7f-b1a3-ffe55d2d4508",
            disid: "1",
            name: "Кимры г",
            okato: "28426000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "e0c911ee-c77a-4719-a5e3-09e99b683570",
            disid: "1",
            name: "Конаковский р-н",
            okato: "28230000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "384ba088-dd3b-4d4b-8423-ebdb2cc5d067",
            disid: "1",
            name: "Краснохолмский р-н",
            okato: "28232000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "c25ac124-c633-4836-ab09-7b6927d546e1",
            disid: "1",
            name: "Кувшиновский р-н",
            okato: "28234000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "9cf32001-5168-4a19-9473-1caaa62a9993",
            disid: "1",
            name: "Лесной р-н",
            okato: "28236000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "091c38e1-e2bd-48cb-904c-7d65cb6069a6",
            disid: "1",
            name: "Лихославльский р-н",
            okato: "28238000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "0d18ee0c-2283-4255-ba9f-89c67f3e862b",
            disid: "1",
            name: "Максатихинский р-н",
            okato: "28240000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "90503ec1-d6db-4d1f-a00c-4bb00544dc94",
            disid: "1",
            name: "Молоковский р-н",
            okato: "28242000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "a38751f3-98fe-4d8d-b9bc-2a4705b887ec",
            disid: "1",
            name: "Нелидово г",
            okato: "28435000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "a0dd8ac9-c407-4cf0-9c0b-825b99db92b4",
            disid: "1",
            name: "Нелидовский р-н",
            okato: "28243000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "6325e4bc-84b9-4dbf-bedd-6469da969350",
            disid: "1",
            name: "Оленинский р-н",
            okato: "28244000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "dc932be3-ef8b-4ee7-bdd4-0701d551caf8",
            disid: "1",
            name: "Осташковский р-н",
            okato: "28245000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "6936e9d5-453c-4a78-884c-250ff296cd1e",
            disid: "1",
            name: "Пеновский р-н",
            okato: "28246000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "112bb61a-40ec-4f48-9422-21c64f6ffbc6",
            disid: "1",
            name: "Рамешковский р-н",
            okato: "28247000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "2553804d-14b9-4f5b-8bd0-25c0fc7315ae",
            disid: "1",
            name: "Ржев г",
            okato: "28445000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "d8621ff5-c45f-47b2-a6ef-15d5f4f1f3aa",
            disid: "1",
            name: "Ржевский р-н",
            okato: "28248000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "6be639db-b434-4e3d-8eef-28ad7ea8e8da",
            disid: "1",
            name: "Сандовский р-н",
            okato: "28249000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "7cd8b4c8-4053-4124-a1e2-c6d98cb6d8fb",
            disid: "1",
            name: "Селижаровский р-н",
            okato: "28250000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "e4af1ceb-fc05-4a56-b275-746d51a69bc0",
            disid: "1",
            name: "Сонковский р-н",
            okato: "28251000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "5ca30888-bcb5-450e-b94f-71be9fb653ac",
            disid: "1",
            name: "Спировский р-н",
            okato: "28252000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "53d1e2ec-b4c6-4670-9373-0bdf56d86d9a",
            disid: "1",
            name: "Старицкий р-н",
            okato: "28253000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "c52ea942-555e-45c6-9751-58897717b02f",
            disid: "1",
            name: "Тверь г",
            okato: "28401000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "4b7047b6-a656-48e7-a247-1433d4a7fb82",
            disid: "1",
            name: "Торжок г",
            okato: "28450000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "fbb44ab2-0d29-4711-a5a9-ffa53730dd28",
            disid: "1",
            name: "Торжокский р-н",
            okato: "28254000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "a8ebeee8-7bd1-4bd1-b9c5-11750ca70701",
            disid: "1",
            name: "Торопецкий р-н",
            okato: "28255000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "3cb1b97c-bdd4-42a0-914a-4d98d096bb77",
            disid: "1",
            name: "Удомельский р-н",
            okato: "28256000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "fbff4ce6-504f-4812-8a59-460f3f8f3917",
            disid: "1",
            name: "Фировский р-н",
            okato: "28257000000",
            parentguid: "61723327-1c20-42fe-8dfa-402638d9b396",
            regioncode: "69"
        }, {
            aoguid: "23f5f088-4463-4cfe-8b1a-3594a12b5dd3",
            disid: "1",
            name: "Алексинский р-н",
            okato: "70202000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "7b9b175b-df47-4d86-b680-0186dd88a38f",
            disid: "1",
            name: "Арсеньевский р-н",
            okato: "70204000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "9258a8ea-eb5b-4826-92c3-f6057e6affe5",
            disid: "1",
            name: "Белевский р-н",
            okato: "70206000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "8680ea1f-524d-4790-a4ee-06e0adc7c1b2",
            disid: "1",
            name: "Богородицкий р-н",
            okato: "70208000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "407c2852-1a4b-49db-8106-96e32cfad5bd",
            disid: "1",
            name: "Веневский р-н",
            okato: "70212000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "38854a1c-3dd1-4698-8fb9-2874513d0d17",
            disid: "1",
            name: "Воловский р-н",
            okato: "70216000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "dc8fbc8d-da2e-4bbb-a55c-94446fa7ad77",
            disid: "1",
            name: "Донской г",
            okato: "70412000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "c31f096a-cb01-4bab-9122-65f312a15e21",
            disid: "1",
            name: "Дубенский р-н",
            okato: "70218000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "6352dcd1-87ee-42f0-b05d-5454e2a0ac17",
            disid: "1",
            name: "Ефремовский р-н",
            okato: "70220800000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "8a985c0d-976b-4553-aa95-d4e7410632bc",
            disid: "1",
            name: "Заокский р-н",
            okato: "70222000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "598b0934-42a7-46fd-8bb0-c0706aabd88e",
            disid: "1",
            name: "Каменский р-н",
            okato: "70224000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "60d4e8c6-f648-47f0-be19-8f9840c0255c",
            disid: "1",
            name: "Кимовский р-н",
            okato: "70226000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "56bdf710-14ab-4313-9fe3-dffa39d80fff",
            disid: "1",
            name: "Киреевский р-н",
            okato: "70228000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "e1b8afb2-3dfb-4e57-99ab-10c1e518dd5c",
            disid: "1",
            name: "Куркинский р-н",
            okato: "70230000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "e879c06b-d180-4177-a6ff-4aad5588c6b3",
            disid: "1",
            name: "Ленинский р-н",
            okato: "70232551000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "6bccfa9d-86e7-4ec2-b2b9-e74c19dbbdc8",
            disid: "1",
            name: "Новомосковский р-н",
            okato: "70234000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "410634d7-39c2-41c2-9f73-58b39b86b2d4",
            disid: "1",
            name: "Одоевский р-н",
            okato: "70236000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "c85410d0-42c0-4163-a652-8c521f464295",
            disid: "1",
            name: "Плавский р-н",
            okato: "70238000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "f6fe8d92-4623-4f35-ae57-a2659644d721",
            disid: "1",
            name: "Суворовский р-н",
            okato: "70240000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "b5445188-e405-4a0f-b554-6a7b399a927e",
            disid: "1",
            name: "Тепло-Огаревский р-н",
            okato: "70242000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "b2601b18-6da2-4789-9fbe-800dde06a2bb",
            disid: "1",
            name: "Тула г",
            okato: "70401000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "f0f20b54-196c-4389-b89c-97a911d0702e",
            disid: "1",
            name: "Узловский р-н",
            okato: "70244000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "329ff35c-749a-4729-9dd6-4e58a0b8a864",
            disid: "1",
            name: "Чернский р-н",
            okato: "70246000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "41b58375-5128-4897-8b0b-0ce8b39acdaa",
            disid: "1",
            name: "Щекинский р-н",
            okato: "70248000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "6279733f-03a1-4459-8a02-aa6a82813aaa",
            disid: "1",
            name: "Ясногорский р-н",
            okato: "70250000000",
            parentguid: "d028ec4f-f6da-4843-ada6-b68b3e0efa3d",
            regioncode: "71"
        }, {
            aoguid: "bb9f2db3-5f5d-46f5-ad9c-c1e22b48b146",
            disid: "1",
            name: "Большесельский р-н",
            okato: "78203000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "97052853-1904-40f2-b04b-058b38b05520",
            disid: "1",
            name: "Борисоглебский р-н",
            okato: "78206000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "f47671d5-461c-4aef-a2a6-b69ffc6d496e",
            disid: "1",
            name: "Брейтовский р-н",
            okato: "78209000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "d34adda2-fcf2-4aa2-bda1-2efa20c6f083",
            disid: "1",
            name: "Гаврилов-Ямский р-н",
            okato: "78212000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "75c2d318-e067-4853-9ecc-c48c76b733a0",
            disid: "1",
            name: "Даниловский р-н",
            okato: "78215000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "78e104fc-31da-47a5-a2f2-d1a9817bef56",
            disid: "1",
            name: "Любимский р-н",
            okato: "78218000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "fa4c835a-3297-40c4-bc84-8ab1eeaf0213",
            disid: "1",
            name: "Мышкинский р-н",
            okato: "78221000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "add926c4-50ae-4f77-98cb-ed44e980e77f",
            disid: "1",
            name: "Некоузский р-н",
            okato: "78223000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "4e864448-447c-49ef-83f6-c9730cbfb809",
            disid: "1",
            name: "Некрасовский р-н",
            okato: "78226000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "6e7d64e5-9fd4-4cd5-9f14-0e22812f25ab",
            disid: "1",
            name: "Первомайский р-н",
            okato: "78229000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "f147ed70-422e-40d0-9088-810f7b57ed59",
            disid: "1",
            name: "Переславль-Залесский г",
            okato: "78405000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "32fb7505-9d6f-4a38-b3bb-4104ce1ca908",
            disid: "1",
            name: "Переславский р-н",
            okato: "78232000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "544de87c-32aa-4df5-98cd-2087e17bf39a",
            disid: "1",
            name: "Пошехонский р-н",
            okato: "78234000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "136ab367-0f6d-4cf2-a9ba-801d84a0b6ae",
            disid: "1",
            name: "Ростовский р-н",
            okato: "78237000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "ecdb11fe-338f-46ba-9c43-c4714117e3ec",
            disid: "1",
            name: "Рыбинский р-н",
            okato: "78240000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "871f7618-87c2-48d0-83ba-0fb05513cc65",
            disid: "1",
            name: "Тутаевский р-н",
            okato: "78417000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "c466bb3d-9727-45c7-bb7e-b492deedbacf",
            disid: "1",
            name: "Угличский р-н",
            okato: "78246000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "6b1bab7d-ee45-4168-a2a6-4ce2880d90d3",
            disid: "1",
            name: "Ярославль г",
            okato: "78401000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "07842df6-2f70-4e43-a177-4701fb3ff10e",
            disid: "1",
            name: "Ярославский р-н",
            okato: "78250000000",
            parentguid: "a84b2ef4-db03-474b-b552-6229e801ae9b",
            regioncode: "76"
        }, {
            aoguid: "ccdfd496-8108-4655-aadd-bd228747306d",
            disid: "2",
            name: "Адыгейск г",
            okato: "79403000000",
            parentguid: "d8327a56-80de-4df2-815c-4f6ab1224c50",
            regioncode: "01"
        }, {
            aoguid: "8a25dc7e-2bf1-443a-800a-024a43b80832",
            disid: "2",
            name: "Гиагинский р-н",
            okato: "79205000000",
            parentguid: "d8327a56-80de-4df2-815c-4f6ab1224c50",
            regioncode: "01"
        }, {
            aoguid: "3a236009-b93a-4eff-be6e-a086688fd045",
            disid: "2",
            name: "Кошехабльский р-н",
            okato: "79215000000",
            parentguid: "d8327a56-80de-4df2-815c-4f6ab1224c50",
            regioncode: "01"
        }, {
            aoguid: "ab2a04b4-44a8-4ce1-aca1-32f97229c3fb",
            disid: "2",
            name: "Красногвардейский р-н",
            okato: "79218000000",
            parentguid: "d8327a56-80de-4df2-815c-4f6ab1224c50",
            regioncode: "01"
        }, {
            aoguid: "8cfbe842-e803-49ca-9347-1ef90481dd98",
            disid: "2",
            name: "Майкоп г",
            okato: "79401000000",
            parentguid: "d8327a56-80de-4df2-815c-4f6ab1224c50",
            regioncode: "01"
        }, {
            aoguid: "e6b470db-a262-4aab-9ca0-2c5d0fc2209e",
            disid: "2",
            name: "Майкопский р-н",
            okato: "79222000000",
            parentguid: "d8327a56-80de-4df2-815c-4f6ab1224c50",
            regioncode: "01"
        }, {
            aoguid: "34a0d847-a43b-421f-86c3-8eaf84c1ce28",
            disid: "2",
            name: "Тахтамукайский р-н",
            okato: "79230000000",
            parentguid: "d8327a56-80de-4df2-815c-4f6ab1224c50",
            regioncode: "01"
        }, {
            aoguid: "a8cf3eb8-4689-4981-b908-9a760aae99d5",
            disid: "2",
            name: "Теучежский р-н",
            okato: "79233000000",
            parentguid: "d8327a56-80de-4df2-815c-4f6ab1224c50",
            regioncode: "01"
        }, {
            aoguid: "3c2b901a-488d-476f-8a6f-1a382a788c75",
            disid: "2",
            name: "Шовгеновский р-н",
            okato: "79240000000",
            parentguid: "d8327a56-80de-4df2-815c-4f6ab1224c50",
            regioncode: "01"
        }, {
            aoguid: "a101dd8b-3aee-4bda-9c61-9df106f145ff",
            disid: "2",
            name: "Астрахань г",
            okato: "12401000000",
            parentguid: "83009239-25cb-4561-af8e-7ee111b1cb73",
            regioncode: "30"
        }, {
            aoguid: "7e684a70-a23a-41b9-9440-302712c3e41d",
            disid: "2",
            name: "Ахтубинский р-н",
            okato: "12205000000",
            parentguid: "83009239-25cb-4561-af8e-7ee111b1cb73",
            regioncode: "30"
        }, {
            aoguid: "3543d36d-4bf6-4caa-a267-b2bad69ccd6c",
            disid: "2",
            name: "Володарский р-н",
            okato: "12210000000",
            parentguid: "83009239-25cb-4561-af8e-7ee111b1cb73",
            regioncode: "30"
        }, {
            aoguid: "67788aa7-bf40-4dba-9574-9b271ccb845c",
            disid: "2",
            name: "Енотаевский р-н",
            okato: "12215000000",
            parentguid: "83009239-25cb-4561-af8e-7ee111b1cb73",
            regioncode: "30"
        }, {
            aoguid: "54ecd5a8-83d9-4a85-ae2c-6fe6976ab716",
            disid: "2",
            name: "Знаменск г",
            okato: "12519000000",
            parentguid: "83009239-25cb-4561-af8e-7ee111b1cb73",
            regioncode: "30"
        }, {
            aoguid: "6d400dc9-cf9a-4dfd-920d-b83261345fd2",
            disid: "2",
            name: "Икрянинский р-н",
            okato: "12220000000",
            parentguid: "83009239-25cb-4561-af8e-7ee111b1cb73",
            regioncode: "30"
        }, {
            aoguid: "201c5a5d-5af2-47bb-b538-c42ffd5927dc",
            disid: "2",
            name: "Камызякский р-н",
            okato: "12225000000",
            parentguid: "83009239-25cb-4561-af8e-7ee111b1cb73",
            regioncode: "30"
        }, {
            aoguid: "dbb24e53-47a5-4a43-aa2e-bdfee433ab00",
            disid: "2",
            name: "Красноярский р-н",
            okato: "12230000000",
            parentguid: "83009239-25cb-4561-af8e-7ee111b1cb73",
            regioncode: "30"
        }, {
            aoguid: "04b18b87-2fb9-49eb-bee4-c660f18f7ea4",
            disid: "2",
            name: "Лиманский р-н",
            okato: "12235000000",
            parentguid: "83009239-25cb-4561-af8e-7ee111b1cb73",
            regioncode: "30"
        }, {
            aoguid: "2b714aee-b462-4243-9b3d-6581b44202da",
            disid: "2",
            name: "Наримановский р-н",
            okato: "12240000000",
            parentguid: "83009239-25cb-4561-af8e-7ee111b1cb73",
            regioncode: "30"
        }, {
            aoguid: "a0b67c5c-0250-47cf-94a5-4c2ca29fe183",
            disid: "2",
            name: "Приволжский р-н",
            okato: "12242000000",
            parentguid: "83009239-25cb-4561-af8e-7ee111b1cb73",
            regioncode: "30"
        }, {
            aoguid: "bc36238f-e341-41b3-81aa-700c30845de8",
            disid: "2",
            name: "Харабалинский р-н",
            okato: "12245000000",
            parentguid: "83009239-25cb-4561-af8e-7ee111b1cb73",
            regioncode: "30"
        }, {
            aoguid: "46c0e38f-d339-4149-acfa-0d6ae968d2b6",
            disid: "2",
            name: "Черноярский р-н",
            okato: "12250000000",
            parentguid: "83009239-25cb-4561-af8e-7ee111b1cb73",
            regioncode: "30"
        }, {
            aoguid: "ae234db4-ea1c-43ef-b766-2c0d58e0d430",
            disid: "2",
            name: "Алексеевский р-н",
            okato: "18202000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "b53db589-40ec-4939-92c1-106c145d1358",
            disid: "2",
            name: "Быковский р-н",
            okato: "18204000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "a52b7389-0cfe-46fb-ae15-298652a64cf8",
            disid: "2",
            name: "Волгоград г",
            okato: "18401000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "bc5ed788-84c8-493e-9598-7a15a9f1e4c1",
            disid: "2",
            name: "Волжский г",
            okato: "18410000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "4731601f-25a5-4903-872b-c91485f84b6d",
            disid: "2",
            name: "Городищенский р-н",
            okato: "18205000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "d46be095-f3e7-4a5f-8f55-571bc0881851",
            disid: "2",
            name: "Даниловский р-н",
            okato: "18206000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "21bdd804-94c8-48fa-9404-785b835e4fbe",
            disid: "2",
            name: "Дубовский р-н",
            okato: "18208000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "98041e5f-9ba2-49df-90fb-bdbc6be9de5b",
            disid: "2",
            name: "Еланский р-н",
            okato: "18210000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "cfecbcf7-d52e-409a-8925-7f3ccd955b51",
            disid: "2",
            name: "Жирновский р-н",
            okato: "18212000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "4668998b-9821-4829-9d44-0440a2aa8b17",
            disid: "2",
            name: "Иловлинский р-н",
            okato: "18214000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "86ab9043-9f8c-48e8-8ecf-f1f7a3830993",
            disid: "2",
            name: "Калачевский р-н",
            okato: "18216000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "0f9fb687-8d03-41a2-968f-033a2ba44f2f",
            disid: "2",
            name: "Камышин г",
            okato: "18415000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "b971eac6-ae45-4cf5-8a9c-cc0b7255fed7",
            disid: "2",
            name: "Камышинский р-н",
            okato: "18218000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "cec0a33f-2aff-4ff7-b7ba-797669049873",
            disid: "2",
            name: "Киквидзенский р-н",
            okato: "18220000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "923aaae2-1bb7-4956-b749-9b3e953331e6",
            disid: "2",
            name: "Клетский р-н",
            okato: "18222000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "0a7614cd-a4bb-4b19-bb56-67350a9c2765",
            disid: "2",
            name: "Котельниковский р-н",
            okato: "18224000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "7134f6ab-18a2-4327-8212-987fc9dbe4be",
            disid: "2",
            name: "Котовский р-н",
            okato: "18226000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "774a68c9-9f93-4118-9fc4-572feb8d9780",
            disid: "2",
            name: "Кумылженский р-н",
            okato: "18246000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "459b5030-4eba-4aa2-803e-5bde00a2eb52",
            disid: "2",
            name: "Ленинский р-н",
            okato: "18230000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "f02dbf6d-57ad-49bc-8011-603bf7126bb5",
            disid: "2",
            name: "Михайловка г",
            okato: "18420000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "9e34eed1-457d-4c40-8146-2cffd15a546c",
            disid: "2",
            name: "Михайловский р-н",
            okato: "18232000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "82c0591f-cf27-4730-b87d-1e71c8a195cb",
            disid: "2",
            name: "Нехаевский р-н",
            okato: "18234000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "362915df-8d3c-4892-b150-5d0a6bd90bb3",
            disid: "2",
            name: "Николаевский р-н",
            okato: "18236000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "426027d4-fb89-4311-ba48-89721904c00f",
            disid: "2",
            name: "Новоаннинский р-н",
            okato: "18238000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "b26778e0-458f-417b-bdd9-f08d30848a79",
            disid: "2",
            name: "Новониколаевский р-н",
            okato: "18240000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "aee24762-d322-42e3-ac00-4b74473d282b",
            disid: "2",
            name: "Октябрьский р-н",
            okato: "18242000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "e967f3e6-582b-4a5d-b58f-325840ee878c",
            disid: "2",
            name: "Ольховский р-н",
            okato: "18243000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "56937de9-4074-42b1-ae9a-4a1168cca8a1",
            disid: "2",
            name: "Палласовский р-н",
            okato: "18245000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "d373e78d-a6c2-4166-9610-5e598c8ceb93",
            disid: "2",
            name: "Руднянский р-н",
            okato: "18247000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "70ccb12a-6995-47aa-a9d5-6522cd8021b6",
            disid: "2",
            name: "Светлоярский р-н",
            okato: "18249000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "78d61cec-9043-48ac-8315-2a7238aac5e1",
            disid: "2",
            name: "Серафимовичский р-н",
            okato: "18250000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "b879553e-9487-4b99-b5ef-5d5c35b855cc",
            disid: "2",
            name: "Среднеахтубинский р-н",
            okato: "18251000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "30a1981b-aa30-4b09-aa3f-7e4d2e42b829",
            disid: "2",
            name: "Старополтавский р-н",
            okato: "18252000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "b5939351-dbb0-4812-8770-2c8c965a5be6",
            disid: "2",
            name: "Суровикинский р-н",
            okato: "18253000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "2e5879fc-35c2-4354-816b-f1fce74ece87",
            disid: "2",
            name: "Урюпинск г",
            okato: "18425000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "a9a41cc8-a7ff-489b-985d-66acfc04f326",
            disid: "2",
            name: "Урюпинский р-н",
            okato: "18254000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "57e3991f-e685-4ba2-9cef-9988e6fa5862",
            disid: "2",
            name: "Фролово г",
            okato: "18428000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "26d90e5a-936a-4df0-b199-9f31a99cf7ec",
            disid: "2",
            name: "Фроловский р-н",
            okato: "18256000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "0f7db80c-af7d-45e9-a8ff-1b5d213bb0ee",
            disid: "2",
            name: "Чернышковский р-н",
            okato: "18258000000",
            parentguid: "da051ec8-da2e-4a66-b542-473b8d221ab4",
            regioncode: "34"
        }, {
            aoguid: "087a3084-c7b2-4ebf-a4dc-9f91e95097a5",
            disid: "2",
            name: "Городовиковский р-н",
            okato: "85205000000",
            parentguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
            regioncode: "08"
        }, {
            aoguid: "83386818-e69a-42c1-8695-dafc116ab823",
            disid: "2",
            name: "Ики-Бурульский р-н",
            okato: "85210000000",
            parentguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
            regioncode: "08"
        }, {
            aoguid: "f04aff1a-c67f-45cf-afee-2005a31ffb2f",
            disid: "2",
            name: "Кетченеровский р-н",
            okato: "85225000000",
            parentguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
            regioncode: "08"
        }, {
            aoguid: "92c30b00-187a-4d5e-9297-49366761187d",
            disid: "2",
            name: "Лаганский р-н",
            okato: "85215000000",
            parentguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
            regioncode: "08"
        }, {
            aoguid: "928f8e16-9676-4c65-a5fc-fde14a3ee144",
            disid: "2",
            name: "Малодербетовский р-н",
            okato: "85220000000",
            parentguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
            regioncode: "08"
        }, {
            aoguid: "19cfe397-be24-4cd8-b67f-f36251906f66",
            disid: "2",
            name: "Октябрьский р-н",
            okato: "85223000000",
            parentguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
            regioncode: "08"
        }, {
            aoguid: "c8002e8b-941b-44fb-bd78-38dc4300490a",
            disid: "2",
            name: "Приютненский р-н",
            okato: "85228000000",
            parentguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
            regioncode: "08"
        }, {
            aoguid: "9562bcd0-9732-4f24-bfe6-f0f3962769cc",
            disid: "2",
            name: "Сарпинский р-н",
            okato: "85232000000",
            parentguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
            regioncode: "08"
        }, {
            aoguid: "1edf7f07-38c3-4f1c-a737-9de9f794bb93",
            disid: "2",
            name: "Целинный р-н",
            okato: "85237000000",
            parentguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
            regioncode: "08"
        }, {
            aoguid: "dc20e560-ef74-4b92-920f-d34137475a70",
            disid: "2",
            name: "Черноземельский р-н",
            okato: "85242000000",
            parentguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
            regioncode: "08"
        }, {
            aoguid: "d5bd18b9-22c1-48e2-9b4a-3b7a4c89a3cb",
            disid: "2",
            name: "Элиста г",
            okato: "85401000000",
            parentguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
            regioncode: "08"
        }, {
            aoguid: "d6805dc8-828f-42e2-a8ad-25bd3cdf958c",
            disid: "2",
            name: "Юстинский р-н",
            okato: "85246000000",
            parentguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
            regioncode: "08"
        }, {
            aoguid: "d4bf3fe0-7e83-48fc-968c-f08733eadab8",
            disid: "2",
            name: "Яшалтинский р-н",
            okato: "85250000000",
            parentguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
            regioncode: "08"
        }, {
            aoguid: "60c10eea-e22e-446e-9468-9f3e8efac0e9",
            disid: "2",
            name: "Яшкульский р-н",
            okato: "85254000000",
            parentguid: "491cde9d-9d76-4591-ab46-ea93c079e686",
            regioncode: "08"
        }, {
            aoguid: "b8c29326-780c-41ac-89ad-023a4681b7d9",
            disid: "2",
            name: "Абинский р-н",
            okato: "03201000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "4504c6b3-f501-4f6b-949f-45704aa3ecdd",
            disid: "2",
            name: "Анапский р-н",
            okato: "03203000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "2105477c-7005-4964-8feb-a0232edb7494",
            disid: "2",
            name: "Апшеронский р-н",
            okato: "03205000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "fc9c55d0-c66e-455e-8034-b0944b025c38",
            disid: "2",
            name: "Армавир г",
            okato: "03405000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "4fc852b0-5e19-4729-9428-fdb9750d7929",
            disid: "2",
            name: "Белоглинский р-н",
            okato: "03207000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "95d58e54-8ac0-4515-9c4f-7047202be885",
            disid: "2",
            name: "Белореченский р-н",
            okato: "03208000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "ac3c96cd-de4e-4e7d-9a88-a3a34c9d3d0c",
            disid: "2",
            name: "Брюховецкий р-н",
            okato: "03210000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "aa5b01f7-e4e7-40cf-93ed-75695e66074d",
            disid: "2",
            name: "Выселковский р-н",
            okato: "03212000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "e157b9c0-f908-48bc-a1d7-39c482a501a5",
            disid: "2",
            name: "Геленджик г",
            okato: "03408000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "298ebb96-d9c3-4809-b466-386c778234a5",
            disid: "2",
            name: "Горячий Ключ г",
            okato: "03409000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "157440b5-ed3e-4b9c-ab41-ab775333fb1c",
            disid: "2",
            name: "Гулькевичский р-н",
            okato: "03213000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "26aa1290-5f68-4fbc-868e-c14af7ee80e3",
            disid: "2",
            name: "Динской р-н",
            okato: "03214000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "337d2da7-c5fc-4286-a85b-68022e40a40b",
            disid: "2",
            name: "Ейский р-н",
            okato: "03216800000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "67daea7a-ac60-473e-9591-b06a94b738dd",
            disid: "2",
            name: "Кавказский р-н",
            okato: "03218000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "67967132-6d18-4482-a4c6-8e47938fb018",
            disid: "2",
            name: "Калининский р-н",
            okato: "03219000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "1055a0e9-5af7-4909-9b59-1f8eb28b1118",
            disid: "2",
            name: "Каневской р-н",
            okato: "03220800000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "c4c8da32-62f3-422e-828b-b3669d0231ea",
            disid: "2",
            name: "Кореновский р-н",
            okato: "03221000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "217c50ae-d647-4c71-a924-024462614d38",
            disid: "2",
            name: "Красноармейский р-н",
            okato: "03223000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "7dfa745e-aa19-4688-b121-b655c11e482f",
            disid: "2",
            name: "Краснодар г",
            okato: "03401000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "a947d303-d312-4328-96aa-f83c6532af45",
            disid: "2",
            name: "Крыловский р-н",
            okato: "03224000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "0af8a5f0-0b4b-4635-b47b-681c451adfca",
            disid: "2",
            name: "Крымский р-н",
            okato: "03225000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "72700ecb-d9cb-4bcf-82f6-b55b06637d0b",
            disid: "2",
            name: "Курганинский р-н",
            okato: "03227000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "5238a201-1524-4759-b69b-8fbd454db279",
            disid: "2",
            name: "Кущевский р-н",
            okato: "03228000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "b481fda5-ce9c-4400-b866-58e183f909a6",
            disid: "2",
            name: "Лабинский р-н",
            okato: "03230800000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "a7c89393-deee-42a3-8d5a-cc614ca8200d",
            disid: "2",
            name: "Ленинградский р-н",
            okato: "03232000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "962d32bd-ee76-41e6-9710-920e5957d26a",
            disid: "2",
            name: "Мостовский р-н",
            okato: "03233000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "caed4250-d7fc-4e45-b431-5e1ae870cac5",
            disid: "2",
            name: "Новокубанский р-н",
            okato: "03234000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "a0d7a03f-8af6-4c61-9f56-c88dffdb2308",
            disid: "2",
            name: "Новопокровский р-н",
            okato: "03235000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "16ac039a-5257-4715-a8c5-d6bd9e617b53",
            disid: "2",
            name: "Новороссийск г",
            okato: "03420000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "cd446c45-fc30-4401-b37f-8511282860b8",
            disid: "2",
            name: "Отрадненский р-н",
            okato: "03237000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "80acf7a9-12f6-45cc-9d7a-61cfc66ce8c6",
            disid: "2",
            name: "Павловский р-н",
            okato: "03239800000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "46982334-3ed3-4c69-bed8-7c68ecba7f10",
            disid: "2",
            name: "Приморско-Ахтарский р-н",
            okato: "03241000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "02464a34-c839-449d-b13c-dcba31a91ccb",
            disid: "2",
            name: "Северский р-н",
            okato: "03243000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "f86e1bda-2165-4dc1-904e-604d2f468702",
            disid: "2",
            name: "Славянский р-н",
            okato: "03245000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "79da737a-603b-4c19-9b54-9114c96fb912",
            disid: "2",
            name: "Сочи г",
            okato: "03426000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "460fb70e-efcd-4e3f-9d88-dcf7560025d3",
            disid: "2",
            name: "Староминский р-н",
            okato: "03247000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "da9cd07d-c41d-4015-810e-46a7d53bbf04",
            disid: "2",
            name: "Тбилисский р-н",
            okato: "03249000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "f4ab6f10-4f56-4ebd-a881-4b767dbf4473",
            disid: "2",
            name: "Темрюкский р-н",
            okato: "03251000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "2b521963-2a08-4198-89a4-23981e86b3fb",
            disid: "2",
            name: "Тимашевский р-н",
            okato: "03253000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "8bd71693-7c44-4550-ae82-f17a0379ebaf",
            disid: "2",
            name: "Тихорецкий р-н",
            okato: "03254000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "06aa3378-7f1a-4d41-9ebf-5d031398f5b8",
            disid: "2",
            name: "Туапсинский р-н",
            okato: "03255000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "0d3d8a3a-434c-41ab-a16a-7d0c8b654a4d",
            disid: "2",
            name: "Успенский р-н",
            okato: "03256000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "85ce31cc-a74c-4c6a-a38f-9c1ef92d256b",
            disid: "2",
            name: "Усть-Лабинский р-н",
            okato: "03257000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "cb344d45-3a8e-4603-aaac-56880396f8a2",
            disid: "2",
            name: "Щербиновский р-н",
            okato: "03259000000",
            parentguid: "d00e1013-16bd-4c09-b3d5-3cb09fc54bd8",
            regioncode: "23"
        }, {
            aoguid: "a216cad5-7027-40b8-b1a1-d64abefbd5cd",
            disid: "2",
            name: "Азов г",
            okato: "60404000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "2232c303-309e-4d51-8090-e5136fb876ac",
            disid: "2",
            name: "Азовский р-н",
            okato: "60201000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "7f6fbe97-ebc2-4f09-9aa8-1ecab6adcdba",
            disid: "2",
            name: "Аксайский р-н",
            okato: "60202000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "8e7ec0d6-b9d4-4866-9ad5-ac7f516614ca",
            disid: "2",
            name: "Багаевский р-н",
            okato: "60205000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "3809afb6-fdfd-4115-9e55-236abf108c81",
            disid: "2",
            name: "Батайск г",
            okato: "60407000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "4c423d13-7115-47a2-b286-e23ac6dfdc46",
            disid: "2",
            name: "Белокалитвинский р-н",
            okato: "60206000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "5577b8b6-c8b0-491c-8206-56f13b6e225f",
            disid: "2",
            name: "Боковский р-н",
            okato: "60207000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "257d5b48-0e0d-4c50-8e0b-e9e1b4de9046",
            disid: "2",
            name: "Верхнедонской р-н",
            okato: "60208000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "88167f47-a5ec-4c92-9aa4-9f52f0b612f8",
            disid: "2",
            name: "Веселовский р-н",
            okato: "60209000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "1a453dcd-8885-4999-923b-1bbaa5a1cec4",
            disid: "2",
            name: "Волгодонск г",
            okato: "60412000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "31b577c3-afe5-4b18-bd5c-2cf68d6c88ec",
            disid: "2",
            name: "Волгодонской р-н",
            okato: "60212000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "eef55456-4d89-4620-b361-d620221ad3a7",
            disid: "2",
            name: "Гуково г",
            okato: "60415000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "8eeb1bf2-9de9-46d5-874f-50344ca9128b",
            disid: "2",
            name: "Донецк г",
            okato: "60417000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "2ed1a96b-81b5-4a3f-b3ea-0d0e19d6df68",
            disid: "2",
            name: "Дубовский р-н",
            okato: "60213000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "b105482c-7cbd-4911-bdbc-42a834877306",
            disid: "2",
            name: "Егорлыкский р-н",
            okato: "60215000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "5256936a-51c3-4f7f-bb6e-487845985896",
            disid: "2",
            name: "Заветинский р-н",
            okato: "60217000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "99f4120c-2af0-4c97-afbc-d17fdf350ba6",
            disid: "2",
            name: "Зверево г",
            okato: "60418000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "fd56a552-3bfc-4bbd-853f-297a8db00034",
            disid: "2",
            name: "Зерноградский р-н",
            okato: "60218000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "bddfd6da-2eed-4d22-92f7-b52ff760ea20",
            disid: "2",
            name: "Зимовниковский р-н",
            okato: "60219000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "8573426d-8c38-4019-923d-127e0a5125d4",
            disid: "2",
            name: "Кагальницкий р-н",
            okato: "60222000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "76cb0cf6-49a5-4852-b45d-99e4ce12a7ea",
            disid: "2",
            name: "Каменск-Шахтинский г",
            okato: "60419000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "f8fa5b30-5020-476d-91b0-dcd6bd0054e6",
            disid: "2",
            name: "Каменский р-н",
            okato: "60223000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "1866ff09-85b7-487a-844f-0c2d0623380d",
            disid: "2",
            name: "Кашарский р-н",
            okato: "60224000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "81be9039-75d2-4bf7-babc-feda7a43c086",
            disid: "2",
            name: "Константиновский р-н",
            okato: "60225000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "c5be62dd-6518-4ec3-968b-88f37734371d",
            disid: "2",
            name: "Красносулинский р-н",
            okato: "60226000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "aceb21ff-08e7-4252-9c9e-5cfaef6fbff4",
            disid: "2",
            name: "Куйбышевский р-н",
            okato: "60227000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "fc9e12c5-642a-4769-bb9f-600eb7ce6f6a",
            disid: "2",
            name: "Мартыновский р-н",
            okato: "60230000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "17577241-5b11-4e3c-99d6-b1074e6aa662",
            disid: "2",
            name: "Матвеево-Курганский р-н",
            okato: "60231000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "667b79ba-670c-44b1-92d6-78dfb54ad821",
            disid: "2",
            name: "Миллеровский р-н",
            okato: "60232000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "a7b50448-5dab-437e-b0dc-68671fa23ee1",
            disid: "2",
            name: "Милютинский р-н",
            okato: "60233000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "3df59ad3-25ad-4348-8a9b-dcf40d8ed3f8",
            disid: "2",
            name: "Морозовский р-н",
            okato: "60234000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "5c91330e-4a81-47db-b88d-586c915fc50b",
            disid: "2",
            name: "Мясниковский р-н",
            okato: "60235000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "7d73b1e7-fe23-468a-895a-f897d5b1f1f8",
            disid: "2",
            name: "Неклиновский р-н",
            okato: "60236000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "28bafcb3-92b2-445b-9443-a341be73fdb9",
            disid: "2",
            name: "Новочеркасск г",
            okato: "60427000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "bce1a4f2-7576-4427-8bd8-8d8b4e35ad11",
            disid: "2",
            name: "Новошахтинск г",
            okato: "60430000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "3e45232a-621c-4f6e-b312-8121389a45ff",
            disid: "2",
            name: "Обливский р-н",
            okato: "60240000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "94d302a1-e0f9-4d41-ad28-f807547ce418",
            disid: "2",
            name: "Октябрьский р-н",
            okato: "60241000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "8c9d59f7-b214-4bfe-a314-75c5087b0afb",
            disid: "2",
            name: "Орловский р-н",
            okato: "60242000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "8d78fb36-a9b1-4cde-b681-bcea2a80b09a",
            disid: "2",
            name: "Песчанокопский р-н",
            okato: "60244000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "5f7cd6d6-6a17-4576-b288-a6593fbf8205",
            disid: "2",
            name: "Пролетарский р-н",
            okato: "60245000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "ca2d931b-20e2-44e6-8d5f-159796324605",
            disid: "2",
            name: "Ремонтненский р-н",
            okato: "60247000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "ff19cb12-1f42-4e56-8e68-6a4f5a6651ed",
            disid: "2",
            name: "Родионово-Несветайский р-н",
            okato: "60248000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "c1cfe4b9-f7c2-423c-abfa-6ed1c05a15c5",
            disid: "2",
            name: "Ростов-на-Дону г",
            okato: "60401000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "65fdb33a-a944-4cc3-8f6b-3c098e6858eb",
            disid: "2",
            name: "Сальский р-н",
            okato: "60250000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "1822e167-88cf-487a-ad2d-8a3782cb1f3c",
            disid: "2",
            name: "Семикаракорский р-н",
            okato: "60251000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "ad9aa4fb-bff7-492a-a573-30f2003e882e",
            disid: "2",
            name: "Советский р-н",
            okato: "60252000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "d72c95ed-9fdd-4f27-b94f-898fc3f1177d",
            disid: "2",
            name: "Таганрог г",
            okato: "60437000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "a0671320-8599-4e11-a4d7-e73aabe7a258",
            disid: "2",
            name: "Тарасовский р-н",
            okato: "60253000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "6257116f-b108-485c-a368-10033b59e85f",
            disid: "2",
            name: "Тацинский р-н",
            okato: "60254000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "a7682f24-57c3-4cc7-ab84-637f3ab9368f",
            disid: "2",
            name: "Усть-Донецкий р-н",
            okato: "60255000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "8909aee7-4896-4e7d-8c21-a572ad6ccbab",
            disid: "2",
            name: "Целинский р-н",
            okato: "60256000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "4541e1c4-8151-49a7-87fd-8be4026f10b8",
            disid: "2",
            name: "Цимлянский р-н",
            okato: "60257000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "bfabff11-198a-465d-8572-0c3399b8dfa4",
            disid: "2",
            name: "Чертковский р-н",
            okato: "60258000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "dee2e80e-f2e1-4a68-93b0-b7b89b6f3e74",
            disid: "2",
            name: "Шахты г",
            okato: "60440000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "7387092d-4b41-4e2e-96dc-4bc0bc4ef8dd",
            disid: "2",
            name: "Шолоховский р-н",
            okato: "60211000000",
            parentguid: "f10763dc-63e3-48db-83e1-9c566fe3092b",
            regioncode: "61"
        }, {
            aoguid: "06814fb6-0dc3-4bec-ba20-11f894a0faf5",
            disid: "3",
            name: "Архангельск г",
            okato: "11401000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "436b8365-a1a4-4acf-9941-a450062fd2f8",
            disid: "3",
            name: "Вельский р-н",
            okato: "11205000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "22cb0691-74fb-43da-af57-22ec4633669e",
            disid: "3",
            name: "Верхнетоемский р-н",
            okato: "11208000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "6cf7d230-2521-4c2c-9304-4e18b7f9f525",
            disid: "3",
            name: "Вилегодский р-н",
            okato: "11211000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "6447c1a3-78b3-4585-bf1a-591b88740b65",
            disid: "3",
            name: "Виноградовский р-н",
            okato: "11214000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "fc568438-f1a5-4b25-8c3b-4e7fb322351a",
            disid: "3",
            name: "Каргопольский р-н",
            okato: "11218000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "ca8e93f0-c097-4966-8962-de599be4e11a",
            disid: "3",
            name: "Коношский р-н",
            okato: "11222000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "782acb50-ddfa-4483-bcbd-a5e667976036",
            disid: "3",
            name: "Коряжма г",
            okato: "11408000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "cfa3b599-159c-49f9-992e-3aa64c675ad6",
            disid: "3",
            name: "Котласский р-н",
            okato: "11227000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "1f36ec14-c3d2-48c4-a9b9-f419e0b1e49a",
            disid: "3",
            name: "Красноборский р-н",
            okato: "11230000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "a2f24745-df98-4663-bc04-47e622257271",
            disid: "3",
            name: "Ленский р-н",
            okato: "11235000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "86a8e8b8-b5a2-4aba-bc90-69b2a2edb4c6",
            disid: "3",
            name: "Лешуконский р-н",
            okato: "11238000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "e06c7692-9cbc-4939-8928-aa1c8af2a37e",
            disid: "3",
            name: "Мезенский р-н",
            okato: "11242000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "977c7606-1b37-4424-84f7-b0c66c3e4b94",
            disid: "3",
            name: "Мирный г",
            okato: "11525000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "3b0ef6c2-9bcd-44a5-afec-2723bd8190bc",
            disid: "3",
            name: "Новодвинск г",
            okato: "11415000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "af1623b3-625a-4f0c-93a9-f43516000d5e",
            disid: "3",
            name: "Няндомский р-н",
            okato: "11244000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "e252789a-4375-4f4b-b83e-ae03de3f915c",
            disid: "3",
            name: "Онежский р-н",
            okato: "11246000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "57d43938-2c4c-43f7-a24d-e0e2fbdd478e",
            disid: "3",
            name: "Пинежский р-н",
            okato: "11248000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "09544d1a-b2d9-4212-acc8-9526105e8f9a",
            disid: "3",
            name: "Плесецкий р-н",
            okato: "11250000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "2dc6e801-e464-4a06-8029-da74aa1f2051",
            disid: "3",
            name: "Приморский р-н",
            okato: "11252000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "32747c72-c08b-4440-b340-91f48d72f9db",
            disid: "3",
            name: "Северодвинск г",
            okato: "11430000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "0720b19e-209f-4fa8-b8d2-024a7bef2ab2",
            disid: "3",
            name: "Соловецкий р-н",
            okato: "11253000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "2e17cc5d-2a60-47b4-926f-ea3d96239307",
            disid: "3",
            name: "Устьянский р-н",
            okato: "11254000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "ad45f38f-a8f4-4927-8f90-d2a38b137235",
            disid: "3",
            name: "Холмогорский р-н",
            okato: "11256000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "dd8dd16c-b7d0-4c37-90a8-f9dd1c24855b",
            disid: "3",
            name: "Шенкурский р-н",
            okato: "11258000000",
            parentguid: "294277aa-e25d-428c-95ad-46719c4ddb44",
            regioncode: "29"
        }, {
            aoguid: "127f8850-9778-4534-8e70-f0fb8f9c7863",
            disid: "3",
            name: "Бабаевский р-н",
            okato: "19205000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "0a06561d-77b8-4a4d-90ee-46f933b425a4",
            disid: "3",
            name: "Бабушкинский р-н",
            okato: "19208000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "95bdbea8-1c2e-4af6-b08a-116919202a7d",
            disid: "3",
            name: "Белозерский р-н",
            okato: "19210000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "7257df68-2b44-46c6-91a3-f01cb7393804",
            disid: "3",
            name: "Вашкинский р-н",
            okato: "19212000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "9d847a27-080a-4c3e-964e-7a4750fd801a",
            disid: "3",
            name: "Великоустюгский р-н",
            okato: "19214000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "617830a8-b304-4674-b64f-eb33830916db",
            disid: "3",
            name: "Верховажский р-н",
            okato: "19216000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "33d8aa72-a08a-4fe7-add2-1b98ae9e7eca",
            disid: "3",
            name: "Вожегодский р-н",
            okato: "19218000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "023484a5-f98d-4849-82e1-b7e0444b54ef",
            disid: "3",
            name: "Вологда г",
            okato: "19401000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "11d2d6e6-0275-4cfa-883e-8e8a43fe1837",
            disid: "3",
            name: "Вологодский р-н",
            okato: "19220000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "26ae93a3-7299-4b81-bdab-fcdc6ca950b0",
            disid: "3",
            name: "Вытегорский р-н",
            okato: "19222000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "dacbb832-9ce6-4c42-8ed5-1558b3c8c46e",
            disid: "3",
            name: "Грязовецкий р-н",
            okato: "19224000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "1bc667c2-7b2f-4caf-86d3-aabb50a0e4bb",
            disid: "3",
            name: "Кадуйский р-н",
            okato: "19226000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "59dbe5c3-af1a-4d3f-aa04-878bf491c53c",
            disid: "3",
            name: "Кирилловский р-н",
            okato: "19228000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "40f909c8-210e-4741-8eda-2024d4795692",
            disid: "3",
            name: "Кичменгско-Городецкий р-н",
            okato: "19230000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "4d90aa63-fe84-4395-b8d2-2f43e314c3c2",
            disid: "3",
            name: "Междуреченский р-н",
            okato: "19232000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "5083df88-d4d2-4ac6-acec-9a056664fc03",
            disid: "3",
            name: "Никольский р-н",
            okato: "19234000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "49aac237-afa6-4f55-ad6b-f1f06f04fd53",
            disid: "3",
            name: "Нюксенский р-н",
            okato: "19236000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "427b20ee-20e1-44d4-9281-e1e61c25c470",
            disid: "3",
            name: "Сокольский р-н",
            okato: "19238000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "7f25c86b-e19b-4d78-b7f5-59040c161a4b",
            disid: "3",
            name: "Сямженский р-н",
            okato: "19240000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "aad67fe6-f5da-4bce-9e53-2230c010914d",
            disid: "3",
            name: "Тарногский р-н",
            okato: "19242000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "90841369-82e7-4bdb-8bb7-9a80c3a45545",
            disid: "3",
            name: "Тотемский р-н",
            okato: "19246000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "499b4200-b421-4553-ab3d-fc7527d335e2",
            disid: "3",
            name: "Усть-Кубинский р-н",
            okato: "19248000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "b1486739-843b-43fb-b47d-93ddc055e5f6",
            disid: "3",
            name: "Устюженский р-н",
            okato: "19250000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "3286925c-a892-46c0-9f51-9d3d0b4510db",
            disid: "3",
            name: "Харовский р-н",
            okato: "19252000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "648fde0a-281f-47c9-a036-24c35a903c25",
            disid: "3",
            name: "Чагодощенский р-н",
            okato: "19254000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "b4c30848-5181-44b4-88fa-456e1c4aeb0f",
            disid: "3",
            name: "Череповец г",
            okato: "19430000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "199090a8-9eeb-4907-9935-57e9ddfefb0d",
            disid: "3",
            name: "Череповецкий р-н",
            okato: "19256000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "6805739a-f5c7-40cd-9066-44e63f7b0b5a",
            disid: "3",
            name: "Шекснинский р-н",
            okato: "19258000000",
            parentguid: "ed36085a-b2f5-454f-b9a9-1c9a678ee618",
            regioncode: "35"
        }, {
            aoguid: "2bdc291e-33a5-429d-a7cc-1c5743134c0a",
            disid: "3",
            name: "Багратионовский р-н",
            okato: "27203000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "bd17ee49-02c5-4091-9487-e0e0685486f5",
            disid: "3",
            name: "Балтийский р-н",
            okato: "27405000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "c9bd3c85-b489-4b8f-96ac-32f12d7d3c00",
            disid: "3",
            name: "Гвардейский р-н",
            okato: "27206000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "19d7b89b-6404-46f9-b977-1a16443978af",
            disid: "3",
            name: "Гурьевский р-н",
            okato: "27209000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "7e79fd92-ee6b-41dc-b79e-1b7f2bb747b2",
            disid: "3",
            name: "Гусевский р-н",
            okato: "27212000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "a6ad23b1-f948-480c-87fc-b92b6fb0cc3c",
            disid: "3",
            name: "Зеленоградский р-н",
            okato: "27215000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "df679694-d505-4dd3-b514-4ba48c8a97d8",
            disid: "3",
            name: "Калининград город г",
            okato: "27401000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "df1e25f0-52c4-4f08-a6c4-62e7d8b78278",
            disid: "3",
            name: "Краснознаменский р-н",
            okato: "27218000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "04950f38-5c4c-4989-8b7a-6224795a2b59",
            disid: "3",
            name: "Ладушкин г",
            okato: "27203505000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "2942ef2d-01b0-4137-8f46-5228e9eedd7f",
            disid: "3",
            name: "Мамоново г",
            okato: "27203510000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "a810a502-c02a-407c-9428-e00b49353580",
            disid: "3",
            name: "Неманский р-н",
            okato: "27221000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "3c241354-846e-45dd-8341-415dedf05593",
            disid: "3",
            name: "Нестеровский р-н",
            okato: "27224000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "b3171d74-da95-4681-a564-2acd3de29f4e",
            disid: "3",
            name: "Озерский р-н",
            okato: "27227000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "9fee1c1b-9d14-42ea-8ff9-2e903501d43d",
            disid: "3",
            name: "Пионерский г",
            okato: "27417000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "afd43dca-b733-4a6d-b4a2-1f6e35815ab5",
            disid: "3",
            name: "Полесский р-н",
            okato: "27230000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "d15938b5-6356-4627-8cd1-7bbf6bbdab9b",
            disid: "3",
            name: "Правдинский р-н",
            okato: "27233000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "f9076a8c-ea58-47a4-872c-d14ca1d5f45f",
            disid: "3",
            name: "Светлогорский р-н",
            okato: "27420000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "6d379259-b8d5-4cca-9412-1ded0849fd1a",
            disid: "3",
            name: "Светлый г",
            okato: "27425000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "51fb5faa-8ff2-4c8e-ac7b-5431ae654a13",
            disid: "3",
            name: "Славский р-н",
            okato: "27236000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "e401208f-3469-403f-910b-bba057cf70b2",
            disid: "3",
            name: "Советск г",
            okato: "27430000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "2ccfe1a3-9830-4ba0-b02a-27ddf60bd5ff",
            disid: "3",
            name: "Черняховский р-н",
            okato: "27239000000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "234f6132-e2d9-4373-8dc3-cc56b5603b8f",
            disid: "3",
            name: "Янтарный пгт",
            okato: "27420562000",
            parentguid: "90c7181e-724f-41b3-b6c6-bd3ec7ae3f30",
            regioncode: "39"
        }, {
            aoguid: "f670c7e4-51e8-4fd8-ae68-fec2875b985d",
            disid: "3",
            name: "Беломорский р-н",
            okato: "86204000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "aee77301-e926-46bb-8f51-6afb0c158d07",
            disid: "3",
            name: "Калевальский р-н",
            okato: "86209000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "6d2b36e6-7155-4a42-b256-1220608cd308",
            disid: "3",
            name: "Кемский р-н",
            okato: "86212000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "53161b1d-1e9b-4137-99bd-59a0cdf7acf1",
            disid: "3",
            name: "Кондопожский р-н",
            okato: "86215000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "1925075b-8541-4075-97ea-edad0557626e",
            disid: "3",
            name: "Костомукша г",
            okato: "86406000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "4c1f106e-19e8-44a4-a1fe-e0ed3b02653a",
            disid: "3",
            name: "Лахденпохский р-н",
            okato: "86218000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "f4656aaa-b772-4a96-b972-bc282f133846",
            disid: "3",
            name: "Лоухский р-н",
            okato: "86221000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "2e379d58-77ba-4a52-bd34-7d842abeb963",
            disid: "3",
            name: "Медвежьегорский р-н",
            okato: "86224000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "d4557781-a6ed-48d6-b359-6c0d2f6dd3d7",
            disid: "3",
            name: "Муезерский р-н",
            okato: "86227000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "84a77f19-908b-472b-b0e7-a95bb480d802",
            disid: "3",
            name: "Олонецкий р-н",
            okato: "86230000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "ccc34487-8fd4-4e71-b032-f4e6c82fb354",
            disid: "3",
            name: "Петрозаводск г",
            okato: "86401000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "ef7c974b-d669-4a40-922c-9c4b4a061053",
            disid: "3",
            name: "Питкярантский р-н",
            okato: "86233000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "861bdb29-f15b-425a-a64c-8cb491aa9a70",
            disid: "3",
            name: "Прионежский р-н",
            okato: "86236000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "a000d5b7-9df9-46e3-857a-46072cffc17e",
            disid: "3",
            name: "Пряжинский р-н",
            okato: "86239000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "5bbc250c-b97d-4fb0-a432-6ed1ca5c6160",
            disid: "3",
            name: "Пудожский р-н",
            okato: "86242000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "ff189e72-916f-4f19-ae07-875558134530",
            disid: "3",
            name: "Сегежский р-н",
            okato: "86245000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "7fa96873-4865-4f14-99e4-78d118cdca8b",
            disid: "3",
            name: "Сортавала г",
            okato: "86410000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "9a47f6cc-e5ac-485e-96a8-e08d4f4a0d62",
            disid: "3",
            name: "Суоярвский р-н",
            okato: "86250000000",
            parentguid: "248d8071-06e1-425e-a1cf-d1ff4c4a14a8",
            regioncode: "10"
        }, {
            aoguid: "e0bf9ea3-7cbf-4b13-95f1-32c3ee9b3ae5",
            disid: "3",
            name: "Воркута г",
            okato: "87410000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "05471c20-9e2c-4bcc-b630-a24f5ec26af4",
            disid: "3",
            name: "Воркутинский р-н",
            okato: "87410000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "f69a676b-8ede-4a19-80b6-6db85a12b5e1",
            disid: "3",
            name: "Вуктыл г",
            okato: "87412800000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "c1b85906-768f-4550-bcc7-1aa31b6873e7",
            disid: "3",
            name: "Вуктыльский р-н",
            okato: "87412000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "d7c1d4fa-96b3-468a-be8a-14eff9ec56e9",
            disid: "3",
            name: "Ижемский р-н",
            okato: "87204000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "1b136d3e-3bd6-440c-a3fd-23303143c440",
            disid: "3",
            name: "Инта г",
            okato: "87415000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "3bcf1b28-3bb0-4c5e-97c4-6e884f052ba2",
            disid: "3",
            name: "Интинский р-н",
            okato: "87415000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "ce115fd8-e9e7-4699-a076-dff8489207fe",
            disid: "3",
            name: "Княжпогостский р-н",
            okato: "87208000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "ee3bc66b-6a1f-4e36-afe1-141af93d0968",
            disid: "3",
            name: "Койгородский р-н",
            okato: "87212000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "429a550e-c8d4-458c-93b8-e2c1d36641a9",
            disid: "3",
            name: "Корткеросский р-н",
            okato: "87216000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "e0ba898b-b813-4293-b817-510d586afd6e",
            disid: "3",
            name: "Печора г",
            okato: "87420550000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "2a215cd2-3a18-4341-b081-253613e42403",
            disid: "3",
            name: "Печорский р-н",
            okato: "87420000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "e94d048f-3b1e-42b4-8552-c29e159226a7",
            disid: "3",
            name: "Прилузский р-н",
            okato: "87224000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "9a2569ae-14fb-43bb-b192-a4c29c463c28",
            disid: "3",
            name: "Сосногорск г",
            okato: "87422550000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "3a687104-4242-421f-b7c5-cc1bd33e2151",
            disid: "3",
            name: "Сосногорский р-н",
            okato: "87422000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "b4dfea59-0559-41bb-8689-f6d9929b39f7",
            disid: "3",
            name: "Сыктывдинский р-н",
            okato: "87228000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "d2944a73-daf4-4a08-9b34-d9b0af7785a1",
            disid: "3",
            name: "Сыктывкар г",
            okato: "87401000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "33c14d0b-e28e-4f6b-955d-c1943e448d69",
            disid: "3",
            name: "Сысольский р-н",
            okato: "87232000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "4ecbe83b-0f84-46b5-af2c-7ba2775fd7a6",
            disid: "3",
            name: "Троицко-Печорский р-н",
            okato: "87236000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "7d255729-f975-4f8f-ba63-1485d2af31eb",
            disid: "3",
            name: "Удорский р-н",
            okato: "87240000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "267fd50d-0077-4041-9594-18b1de5f2acb",
            disid: "3",
            name: "Усинск г",
            okato: "87423000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "8533c810-de43-462b-accb-2d3eabd83a5b",
            disid: "3",
            name: "Усинский р-н",
            okato: "87423000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "e1b89418-f75c-4881-9003-5eddd3a0dc5b",
            disid: "3",
            name: "Усть-Вымский р-н",
            okato: "87244000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "f02cbba6-e179-4a98-bc4a-7ededf75d15e",
            disid: "3",
            name: "Усть-Куломский р-н",
            okato: "87248000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "0bed63ad-dab1-4a0a-88fe-2fdbffb8b0f9",
            disid: "3",
            name: "Усть-Цилемский р-н",
            okato: "87252000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "067b4cef-e128-4d5a-8305-fecf53e7b7e8",
            disid: "3",
            name: "Ухта г",
            okato: "87425000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "1c1aafc4-d344-4666-bc71-df9e0cd6b2a0",
            disid: "3",
            name: "Ухтинский р-н",
            okato: "87425000000",
            parentguid: "c20180d9-ad9c-46d1-9eff-d60bc424592a",
            regioncode: "11"
        }, {
            aoguid: "30aef407-fae2-4059-a533-73e3b1f39271",
            disid: "3",
            name: "Бокситогорский р-н",
            okato: "41203000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "37383308-b7e2-4b78-9337-089bc59ff7dd",
            disid: "3",
            name: "Волосовский р-н",
            okato: "41206000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "a39e96d7-b1a3-478f-a191-816d791586b2",
            disid: "3",
            name: "Волховский р-н",
            okato: "41209000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "db8758d6-b8ea-453d-a75f-8f2d3ff49fb0",
            disid: "3",
            name: "Всеволожский р-н",
            okato: "41212000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "1bd07010-f79c-473e-b49d-b4f42762b28c",
            disid: "3",
            name: "Выборгский р-н",
            okato: "41215000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "2252f46b-5281-436a-9b02-5a22cc0b2d63",
            disid: "3",
            name: "Гатчинский р-н",
            okato: "41218000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "248bc224-1184-4afa-96ef-faf3f5c012e2",
            disid: "3",
            name: "Кингисеппский р-н",
            okato: "41221000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "4c3585cc-fdec-4826-8736-53aa064ec41b",
            disid: "3",
            name: "Киришский р-н",
            okato: "41224000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "2a7ee036-942e-42ae-bbe3-d85901e5cfd6",
            disid: "3",
            name: "Кировский р-н",
            okato: "41225000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "2c9edd6e-14de-4564-9d37-1b16b84e09f3",
            disid: "3",
            name: "Лодейнопольский р-н",
            okato: "41227000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "cb759ab0-cd6c-4a97-8035-8052239e4551",
            disid: "3",
            name: "Ломоносовский р-н",
            okato: "41230000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "980709a9-802f-4f0d-ac24-0d5d68b1c049",
            disid: "3",
            name: "Лужский р-н",
            okato: "41233000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "136331db-f6b9-4ab1-8467-e81c44728319",
            disid: "3",
            name: "Подпорожский р-н",
            okato: "41236000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "b435ee4b-d67c-4fa9-b2e6-209edbb133f8",
            disid: "3",
            name: "Приозерский р-н",
            okato: "41239000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "c4e7114f-5ce9-4fc2-8cb9-70884bee2eb5",
            disid: "3",
            name: "Сланцевский р-н",
            okato: "41242000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "f4a4b31f-9f0a-4fdb-804c-d67661085eb4",
            disid: "3",
            name: "Сосновый Бор г",
            okato: "41454000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "56906c4c-3151-4c2e-b44d-f5b25cbd5df0",
            disid: "3",
            name: "Тихвинский р-н",
            okato: "41245000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "003fc437-dd9c-4c36-b3e3-adab06e5d195",
            disid: "3",
            name: "Тосненский р-н",
            okato: "41248000000",
            parentguid: "6d1ebb35-70c6-4129-bd55-da3969658f5d",
            regioncode: "47"
        }, {
            aoguid: "f0851e80-59d9-400b-b6d5-5f5f623bb29d",
            disid: "3",
            name: "Апатиты г",
            okato: "47405000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "ecc34287-1dbd-4aa0-8cbc-22c32db554b2",
            disid: "3",
            name: "Видяево рп",
            okato: "47000000001",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "b77147ce-b55e-4019-9aca-ed3872b9fbb0",
            disid: "3",
            name: "Гаджиево г",
            okato: "47529000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "81a88076-04de-46c9-940a-3cb300e70e5b",
            disid: "3",
            name: "Заозерск г",
            okato: "47533000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "30fa6bcc-608e-40cb-b22a-b202967ff2a6",
            disid: "3",
            name: "Кандалакша г",
            okato: "47202501000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "3f26e2d0-a8ad-4b9c-8ed0-79f63ff019af",
            disid: "3",
            name: "Кандалакшский р-н",
            okato: "47202000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "f658a2c0-1f7d-4423-9465-e55d3553bf86",
            disid: "3",
            name: "Кировск г",
            okato: "47412000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "6c281de9-1613-46b1-b48c-344bf1a45a9c",
            disid: "3",
            name: "Ковдорский р-н",
            okato: "47203000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "5b22eaf7-3bab-437c-938f-5af0f45502db",
            disid: "3",
            name: "Кольский р-н",
            okato: "47205000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "11c09610-5a94-4e12-b5d3-ffd522a05827",
            disid: "3",
            name: "Ловозерский р-н",
            okato: "47210000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "177e037d-a06d-4f8a-9333-fd534dd34c5d",
            disid: "3",
            name: "Мончегорск г",
            okato: "47415000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "b7127184-ead6-422b-b7cf-4fc7725b47a5",
            disid: "3",
            name: "Мурманск г",
            okato: "47401000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "c5fe1817-5163-4e3b-b06a-36d322c6bf57",
            disid: "3",
            name: "Оленегорск г",
            okato: "47417000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "d9553f4e-bbf6-4cc2-8f82-523a56265e56",
            disid: "3",
            name: "Оленегорск-1 г",
            okato: "47417000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "defed7b3-d1f0-4dbb-baa8-03bdaffa2b18",
            disid: "3",
            name: "Оленегорск-2 г",
            okato: "47417000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "bf95a4e0-9adc-4111-badf-efbddfc9547c",
            disid: "3",
            name: "Оленегорск-4 г",
            okato: "47417000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "0a358e8a-d3c4-45e5-b9fc-126092afd6f5",
            disid: "3",
            name: "Островной г",
            okato: "47531000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "e2226235-7ff9-46f7-849c-4d26f08adb12",
            disid: "3",
            name: "Печенгский р-н",
            okato: "47215000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "d70b2917-8cea-4555-a9fe-6d2c72d8d9cc",
            disid: "3",
            name: "Полярные Зори г",
            okato: "47419000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "a4ae6202-6ec6-4bc6-abc5-4ecd6ca96d53",
            disid: "3",
            name: "Полярный г",
            okato: "47525000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "53e652bc-dd1b-44e1-9ab2-401b04cf3ceb",
            disid: "3",
            name: "Североморск г",
            okato: "47530000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "22e4a0a6-68a6-47bc-a08c-11610ec6231a",
            disid: "3",
            name: "Снежногорск г",
            okato: "47527000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "b184f590-851f-45b8-8726-001f715274ad",
            disid: "3",
            name: "Терский р-н",
            okato: "47220000000",
            parentguid: "1c727518-c96a-4f34-9ae6-fd510da3be03",
            regioncode: "51"
        }, {
            aoguid: "b0122c31-eb1c-40ae-b998-08f9e99a0fa1",
            disid: "3",
            name: "Нарьян-Мар г",
            okato: "11111000000",
            parentguid: "89db3198-6803-4106-9463-cbf781eff0b8",
            regioncode: "83"
        }, {
            aoguid: "d7f36dc9-6cd9-4e6f-bca2-343db6df9c52",
            disid: "3",
            name: "Батецкий р-н",
            okato: "49203000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "dbb5ed6e-9f4c-49d1-ab5b-345222f57856",
            disid: "3",
            name: "Боровичский р-н",
            okato: "49206000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "a34ec3c6-ca41-4b67-8914-5a02a7ff0dea",
            disid: "3",
            name: "Валдайский р-н",
            okato: "49208000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "8d0a05bf-3b8a-43e9-ac26-7ce61d7c4560",
            disid: "3",
            name: "Великий Новгород г",
            okato: "49401000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "0fb1d48e-ad5d-48e5-a4d9-5b4bd20501ce",
            disid: "3",
            name: "Волотовский р-н",
            okato: "49210000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "6353c788-610f-4954-8d69-480c79b7c976",
            disid: "3",
            name: "Демянский р-н",
            okato: "49212000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "ab46ba5c-8570-491c-8390-cf40936de0b6",
            disid: "3",
            name: "Крестецкий р-н",
            okato: "49214000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "bad0d371-fe99-492f-921c-0869dfbe5e81",
            disid: "3",
            name: "Любытинский р-н",
            okato: "49216000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "4461b782-8b8a-42ca-ab46-e435045b810b",
            disid: "3",
            name: "Маловишерский р-н",
            okato: "49220000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "02738bbf-4a9a-43e9-b5a0-a686aaf6c09d",
            disid: "3",
            name: "Марёвский р-н",
            okato: "49223000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "ca66a05a-4138-4e8c-ac8a-b867367fbeda",
            disid: "3",
            name: "Мошенской р-н",
            okato: "49224000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "640b105e-1db1-4ada-9fcc-ec0902aa9a36",
            disid: "3",
            name: "Новгородский р-н",
            okato: "49225000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "a1bf6ac2-6525-4f4d-a8ab-98b21181a83b",
            disid: "3",
            name: "Окуловский р-н",
            okato: "49228000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "0a11c58b-747e-495c-a865-69fe610e85ec",
            disid: "3",
            name: "Парфинский р-н",
            okato: "49230000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "2a4f8f29-e5b9-4f66-aa7c-eb131e27e4c5",
            disid: "3",
            name: "Пестовский р-н",
            okato: "49232000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "8d61345b-5247-4e27-9663-c5d840743605",
            disid: "3",
            name: "Поддорский р-н",
            okato: "49234000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "97edbf16-ba0b-494a-8c92-f371c46b6d3e",
            disid: "3",
            name: "Солецкий р-н",
            okato: "49238000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "ab9218fd-cb07-4bb8-aff2-ee3d735e9cac",
            disid: "3",
            name: "Старорусский р-н",
            okato: "49239000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "124c160f-d389-4b39-a4a2-9dd9501ef66d",
            disid: "3",
            name: "Хвойнинский р-н",
            okato: "49245000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "27145516-0335-4ca2-a8a4-eb43f8f61597",
            disid: "3",
            name: "Холмский р-н",
            okato: "49247000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "7471f8d4-6635-4cf5-984b-0fd501f0a18a",
            disid: "3",
            name: "Чудовский р-н",
            okato: "49250000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "d07bc285-22e0-4889-88d7-efefb03c7c2b",
            disid: "3",
            name: "Шимский р-н",
            okato: "49255000000",
            parentguid: "e5a84b81-8ea1-49e3-b3c4-0528651be129",
            regioncode: "53"
        }, {
            aoguid: "da2b74bd-de66-46e5-a261-1ea449b38fb6",
            disid: "3",
            name: "Бежаницкий р-н",
            okato: "58204000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "ca091eae-2c39-4730-b57d-b2fa570f71cb",
            disid: "3",
            name: "Великие Луки г",
            okato: "58410000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "a1f7d18a-f86c-495e-b232-69fe2506521a",
            disid: "3",
            name: "Великолукский р-н",
            okato: "58206000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "8d9181ea-1d19-40a7-a276-f11533770dad",
            disid: "3",
            name: "Гдовский р-н",
            okato: "58208000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "c3720019-11b8-4b9e-a3cf-14942bc79eb6",
            disid: "3",
            name: "Дедовичский р-н",
            okato: "58210000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "38f5d001-3ff3-4246-87f9-143714a90d7d",
            disid: "3",
            name: "Дновский р-н",
            okato: "58212000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "2ef61ab2-1dd3-450b-87c8-089519f932e4",
            disid: "3",
            name: "Красногородский р-н",
            okato: "58214000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "40ba9763-1143-4030-8c84-82e3991339dd",
            disid: "3",
            name: "Куньинский р-н",
            okato: "58216000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "29de42ed-a7ab-4ca0-8c67-e176db31d1bc",
            disid: "3",
            name: "Локнянский р-н",
            okato: "58218000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "2798f8e8-8456-472f-bc58-b8196c1ad507",
            disid: "3",
            name: "Невельский р-н",
            okato: "58220000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "ca021da2-1e91-43cf-af9f-ce39798b4dd3",
            disid: "3",
            name: "Новоржевский р-н",
            okato: "58223000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "2ee522b2-840f-47d9-b2f6-83d4792bd392",
            disid: "3",
            name: "Новосокольнический р-н",
            okato: "58226000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "259a2f66-9d5d-4db0-94f5-af961ca9132d",
            disid: "3",
            name: "Опочецкий р-н",
            okato: "58229000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "2c4fa4ca-1868-42ef-8951-12943c5686ff",
            disid: "3",
            name: "Островский р-н",
            okato: "58233000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "f19b98a7-b4ab-47ee-bf4e-d9c6d13a3c7a",
            disid: "3",
            name: "Палкинский р-н",
            okato: "58237000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "c5cfff91-3cb1-4ce9-a471-ec3a423fff86",
            disid: "3",
            name: "Печорский р-н",
            okato: "58240000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "302160ba-a647-4b48-98cb-8ee2394fa24e",
            disid: "3",
            name: "Плюсский р-н",
            okato: "58243000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "cb5f7879-8ed6-4a4f-bb8d-82fd2ae85a36",
            disid: "3",
            name: "Порховский р-н",
            okato: "58247000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "2858811e-448a-482e-9863-e03bf06bb5d4",
            disid: "3",
            name: "Псков г",
            okato: "58401000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "101dfbf7-b58f-40c4-8c06-bc9e12445199",
            disid: "3",
            name: "Псковский р-н",
            okato: "58249000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "42cc705b-b0c4-4995-a76b-2a8cb3f9f192",
            disid: "3",
            name: "Пустошкинский р-н",
            okato: "58250000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "5884c9ea-5694-408a-84ca-deb210bb04bf",
            disid: "3",
            name: "Пушкиногорский р-н",
            okato: "58251000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "72fb9d4c-4b94-4368-89ec-b2d5c0235c7f",
            disid: "3",
            name: "Пыталовский р-н",
            okato: "58253000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "e666e343-303f-4952-8dcf-865188f08aae",
            disid: "3",
            name: "Себежский р-н",
            okato: "58254000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "90688a38-e1b8-42cc-bc28-f820e53ddfb8",
            disid: "3",
            name: "Стругокрасненский р-н",
            okato: "58256000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "7612adec-2b32-4174-af03-b84aa56782ef",
            disid: "3",
            name: "Усвятский р-н",
            okato: "58258000000",
            parentguid: "f6e148a1-c9d0-4141-a608-93e3bd95e6c4",
            regioncode: "60"
        }, {
            aoguid: "ac598324-b704-4957-a66e-e8142677981b",
            disid: "3",
            name: "Зеленогорск г",
            okato: "40281509000",
            parentguid: "c2deb16a-0330-4f05-821f-1d09c93331e6",
            regioncode: "78"
        }, {
            aoguid: "1e11a121-81c4-4b66-b11c-da8f47db2e1d",
            disid: "3",
            name: "Колпино г",
            okato: "40277501000",
            parentguid: "c2deb16a-0330-4f05-821f-1d09c93331e6",
            regioncode: "78"
        }, {
            aoguid: "cced82af-3bdf-4a91-ab68-d654804767c0",
            disid: "3",
            name: "Красное Село г",
            okato: "40279501000",
            parentguid: "c2deb16a-0330-4f05-821f-1d09c93331e6",
            regioncode: "78"
        }, {
            aoguid: "7b1c7427-41b2-4ffc-bf39-550e8299b5cb",
            disid: "3",
            name: "Кронштадт г",
            okato: "40280501000",
            parentguid: "c2deb16a-0330-4f05-821f-1d09c93331e6",
            regioncode: "78"
        }, {
            aoguid: "3c2827f3-63f3-4692-8c74-c1318ee524fd",
            disid: "3",
            name: "Ломоносов г",
            okato: "40290502000",
            parentguid: "c2deb16a-0330-4f05-821f-1d09c93331e6",
            regioncode: "78"
        }, {
            aoguid: "5c348da7-3a1e-47fe-be8d-52bac0887cd4",
            disid: "3",
            name: "Павловск г",
            okato: "40294502000",
            parentguid: "c2deb16a-0330-4f05-821f-1d09c93331e6",
            regioncode: "78"
        }, {
            aoguid: "8f238984-812b-4bb1-850b-49749fb5c56d",
            disid: "3",
            name: "Петергоф г",
            okato: "40290501000",
            parentguid: "c2deb16a-0330-4f05-821f-1d09c93331e6",
            regioncode: "78"
        }, {
            aoguid: "110d6ad9-0b64-47cf-a2ee-7e935228799c",
            disid: "3",
            name: "Пушкин г",
            okato: "40294501000",
            parentguid: "c2deb16a-0330-4f05-821f-1d09c93331e6",
            regioncode: "78"
        }, {
            aoguid: "ee5e852c-1a4a-4aee-919a-54473a76fa4d",
            disid: "3",
            name: "Сестрорецк г",
            okato: "40281520000",
            parentguid: "c2deb16a-0330-4f05-821f-1d09c93331e6",
            regioncode: "78"
        }, {
            aoguid: "7cfba1ef-2d7c-4b83-948d-fba7def10235",
            disid: "4",
            name: "Архаринский р-н",
            okato: "10205000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "c528e99b-7e81-4290-9cda-8713884472a5",
            disid: "4",
            name: "Белогорск г",
            okato: "10410000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "5a34a5f7-4561-4b41-a790-4ec5e2cfbe5e",
            disid: "4",
            name: "Белогорский р-н",
            okato: "10208000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "8f41253d-6e3b-48a9-842a-25ba894bd093",
            disid: "4",
            name: "Благовещенск г",
            okato: "10401000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "cf9b5f7a-174c-4664-b79c-cddd7628f3ed",
            disid: "4",
            name: "Благовещенский р-н",
            okato: "10211000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "ceb6154c-cd67-488c-b373-051393161914",
            disid: "4",
            name: "Бурейский р-н",
            okato: "10215000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "09698e74-cad0-4647-a01c-c6c26f14af17",
            disid: "4",
            name: "Завитинский р-н",
            okato: "10221000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "11962db7-0c2c-46f9-b7b1-d54817b5133b",
            disid: "4",
            name: "Зейский р-н",
            okato: "10225000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "581855f4-f0bc-44a5-a36e-a298279f9ec4",
            disid: "4",
            name: "Зея г",
            okato: "10412000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "bfbfbc9c-00cb-4478-8665-8e0d7bc56d0d",
            disid: "4",
            name: "Ивановский р-н",
            okato: "10228000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "a2f84ff1-7f84-4c06-9732-d132d6cd139b",
            disid: "4",
            name: "Константиновский р-н",
            okato: "10230000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "4c4dfb3e-8918-49f0-ba05-c6ba1294ae33",
            disid: "4",
            name: "Магдагачинский р-н",
            okato: "10231000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "d4a1e5db-0078-4a5e-b6b7-b34c5e864a42",
            disid: "4",
            name: "Мазановский р-н",
            okato: "10232000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "75b1fd98-c765-4130-a067-22eea4fc706e",
            disid: "4",
            name: "Михайловский р-н",
            okato: "10235000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "cb4dc4d8-6f54-479c-be19-9a1774439693",
            disid: "4",
            name: "Октябрьский р-н",
            okato: "10238000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "16de8821-04f5-4239-b33b-739f8eff7c88",
            disid: "4",
            name: "Прогресс пгт",
            okato: "10465000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "981b5f3a-f0b6-444f-a6fb-c2bc10804b31",
            disid: "4",
            name: "Райчихинск г",
            okato: "10420000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "6580a546-42f5-40b6-ad6e-a470ef56673b",
            disid: "4",
            name: "Ромненский р-н",
            okato: "10240000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "e17b729e-8fcf-42a8-a255-fa45180108f5",
            disid: "4",
            name: "Свободненский р-н",
            okato: "10242000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "dd560dfa-3feb-48e2-aa3b-b71213e7441e",
            disid: "4",
            name: "Свободный г",
            okato: "10430000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "43b8cdd2-96b0-4418-ae92-691f8bdef3db",
            disid: "4",
            name: "Селемджинский р-н",
            okato: "10245000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "cd8a3553-3150-48e9-8f82-309470ac3015",
            disid: "4",
            name: "Серышевский р-н",
            okato: "10247000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "30327ea2-ea94-48bf-b886-56b1c5e0dbdf",
            disid: "4",
            name: "Сковородинский р-н",
            okato: "10249000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "a9da4739-a94d-4ccb-b95a-a92f51f805de",
            disid: "4",
            name: "Тамбовский р-н",
            okato: "10251000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "007e010f-e110-4a55-90a7-c4acac623c9b",
            disid: "4",
            name: "Тында г",
            okato: "10432000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "c21aa5e4-e820-4b9d-b19b-466f5d2c53e6",
            disid: "4",
            name: "Тындинский р-н",
            okato: "10254000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "809f0591-bb18-40a2-9fac-7d3d0a22c0bf",
            disid: "4",
            name: "Шимановск г",
            okato: "10440000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "a53ae35a-c035-4a1b-91ac-5c66a6973e18",
            disid: "4",
            name: "Шимановский р-н",
            okato: "10255000000",
            parentguid: "844a80d6-5e31-4017-b422-4d9c01e9942c",
            regioncode: "28"
        }, {
            aoguid: "5d133391-46ee-496b-83a6-efeeaa903643",
            disid: "4",
            name: "Биробиджан г",
            okato: "99401000000",
            parentguid: "1b507b09-48c9-434f-bf6f-65066211c73e",
            regioncode: "79"
        }, {
            aoguid: "a90b96b6-30eb-4915-9571-458d53aca113",
            disid: "4",
            name: "Биробиджанский р-н",
            okato: "99205000000",
            parentguid: "1b507b09-48c9-434f-bf6f-65066211c73e",
            regioncode: "79"
        }, {
            aoguid: "35d9440a-a71b-441f-9ab5-f5a6edc8e61d",
            disid: "4",
            name: "Ленинский р-н",
            okato: "99210000000",
            parentguid: "1b507b09-48c9-434f-bf6f-65066211c73e",
            regioncode: "79"
        }, {
            aoguid: "5d1d4108-c914-4680-8330-962bda49c14a",
            disid: "4",
            name: "Облученский р-н",
            okato: "99220000000",
            parentguid: "1b507b09-48c9-434f-bf6f-65066211c73e",
            regioncode: "79"
        }, {
            aoguid: "e17b11f7-c93e-41b8-a81d-33d110ec56d7",
            disid: "4",
            name: "Октябрьский р-н",
            okato: "99225000000",
            parentguid: "1b507b09-48c9-434f-bf6f-65066211c73e",
            regioncode: "79"
        }, {
            aoguid: "afae4bce-c5fa-4003-bb5e-621b2041cb18",
            disid: "4",
            name: "Смидовичский р-н",
            okato: "99230000000",
            parentguid: "1b507b09-48c9-434f-bf6f-65066211c73e",
            regioncode: "79"
        }, {
            aoguid: "cdd3202d-2103-4616-8b77-c71115cdc269",
            disid: "4",
            name: "Алеутский р-н",
            okato: "30201000000",
            parentguid: "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
            regioncode: "41"
        }, {
            aoguid: "6eff8b90-fb68-49ee-87be-8de62bd40a38",
            disid: "4",
            name: "Быстринский р-н",
            okato: "30204000000",
            parentguid: "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
            regioncode: "41"
        }, {
            aoguid: "b75a9701-5cd4-4623-99d5-4fa7463ceb47",
            disid: "4",
            name: "Вилючинск г",
            okato: "30535000000",
            parentguid: "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
            regioncode: "41"
        }, {
            aoguid: "980fdc77-6111-4e10-8461-8165adfaf405",
            disid: "4",
            name: "Елизовский р-н",
            okato: "30207000000",
            parentguid: "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
            regioncode: "41"
        }, {
            aoguid: "3039c821-30a2-4b81-bc3d-2e584fefacc1",
            disid: "4",
            name: "Карагинский р-н",
            okato: "30124000000",
            parentguid: "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
            regioncode: "41"
        }, {
            aoguid: "85a6784e-f570-4915-b757-f6eed037e0da",
            disid: "4",
            name: "Мильковский р-н",
            okato: "30210000000",
            parentguid: "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
            regioncode: "41"
        }, {
            aoguid: "4f6332d8-35f3-43b4-8a3f-2e422d80bb7c",
            disid: "4",
            name: "Олюторский р-н",
            okato: "30127000000",
            parentguid: "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
            regioncode: "41"
        }, {
            aoguid: "a3b4d68d-b1f5-40fb-8bdf-f894a85c16e1",
            disid: "4",
            name: "Пенжинский р-н",
            okato: "30129000000",
            parentguid: "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
            regioncode: "41"
        }, {
            aoguid: "0b3f0723-5fe0-4c23-af44-8082166c6d2e",
            disid: "4",
            name: "Петропавловск-Камчатский г",
            okato: "30401000000",
            parentguid: "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
            regioncode: "41"
        }, {
            aoguid: "c937fa35-7697-4357-8a5a-1c758f5396e5",
            disid: "4",
            name: "Соболевский р-н",
            okato: "30213000000",
            parentguid: "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
            regioncode: "41"
        }, {
            aoguid: "2af1fc27-0d0e-446b-831c-d2e062296be0",
            disid: "4",
            name: "Тигильский р-н",
            okato: "30132000000",
            parentguid: "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
            regioncode: "41"
        }, {
            aoguid: "38933047-2529-4f1a-8338-71e9c12e741f",
            disid: "4",
            name: "Усть-Большерецкий р-н",
            okato: "30216000000",
            parentguid: "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
            regioncode: "41"
        }, {
            aoguid: "8f6adb87-2a1c-4032-a461-37552f02f494",
            disid: "4",
            name: "Усть-Камчатский р-н",
            okato: "30219000000",
            parentguid: "d02f30fc-83bf-4c0f-ac2b-5729a866a207",
            regioncode: "41"
        }, {
            aoguid: "cb8ae35a-93df-4133-b377-50f3698c8b5e",
            disid: "4",
            name: "Магадан г",
            okato: "44401000000",
            parentguid: "9c05e812-8679-4710-b8cb-5e8bd43cdf48",
            regioncode: "49"
        }, {
            aoguid: "77999ce9-dc97-4769-bbfa-d15f8036bfb3",
            disid: "4",
            name: "Ольский р-н",
            okato: "44201000000",
            parentguid: "9c05e812-8679-4710-b8cb-5e8bd43cdf48",
            regioncode: "49"
        }, {
            aoguid: "6e75ea82-5b16-4370-9ae1-2290b18b8939",
            disid: "4",
            name: "Омсукчанский р-н",
            okato: "44204000000",
            parentguid: "9c05e812-8679-4710-b8cb-5e8bd43cdf48",
            regioncode: "49"
        }, {
            aoguid: "c34d03c9-27fe-47ec-bab3-16bce72b2723",
            disid: "4",
            name: "Северо-Эвенский р-н",
            okato: "44207000000",
            parentguid: "9c05e812-8679-4710-b8cb-5e8bd43cdf48",
            regioncode: "49"
        }, {
            aoguid: "143df405-faf6-48f7-b309-b979d68b0af8",
            disid: "4",
            name: "Среднеканский р-н",
            okato: "44210000000",
            parentguid: "9c05e812-8679-4710-b8cb-5e8bd43cdf48",
            regioncode: "49"
        }, {
            aoguid: "f572ff1d-9018-4796-b234-f1180620f12a",
            disid: "4",
            name: "Сусуманский р-н",
            okato: "44213000000",
            parentguid: "9c05e812-8679-4710-b8cb-5e8bd43cdf48",
            regioncode: "49"
        }, {
            aoguid: "3999810d-3ffb-41d6-b992-5a19981b48fc",
            disid: "4",
            name: "Тенькинский р-н",
            okato: "44216000000",
            parentguid: "9c05e812-8679-4710-b8cb-5e8bd43cdf48",
            regioncode: "49"
        }, {
            aoguid: "f14f0feb-3ac6-41c3-bbef-5c51c058162a",
            disid: "4",
            name: "Хасынский р-н",
            okato: "44219000000",
            parentguid: "9c05e812-8679-4710-b8cb-5e8bd43cdf48",
            regioncode: "49"
        }, {
            aoguid: "81cc0f05-91ea-4953-8811-aaeffcd61924",
            disid: "4",
            name: "Ягоднинский р-н",
            okato: "44222000000",
            parentguid: "9c05e812-8679-4710-b8cb-5e8bd43cdf48",
            regioncode: "49"
        }, {
            aoguid: "a1b767d1-e61f-43e5-bd1a-1c0aa5a02c6c",
            disid: "4",
            name: "Анучинский р-н",
            okato: "05202000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "36e4c7ce-7320-48ee-8320-0587c1e09917",
            disid: "4",
            name: "Арсеньев г",
            okato: "05403000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "3ce80b09-9b72-4e68-9b2d-becaaee4570e",
            disid: "4",
            name: "Артем г",
            okato: "05405000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "1315186b-9ae8-4f92-b3a5-1db055c15358",
            disid: "4",
            name: "Большой Камень г",
            okato: "05506000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "7b6de6a5-86d0-4735-b11a-499081111af8",
            disid: "4",
            name: "Владивосток г",
            okato: "05401000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "b2a863e2-37be-4858-b65e-0babc3872052",
            disid: "4",
            name: "Дальнегорск г",
            okato: "05407000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "cc7e17f3-d6ec-46c6-8973-32d7bab4bb54",
            disid: "4",
            name: "Дальнегорский р-н",
            okato: "05407000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "e6e6c2b1-20cf-47a7-9a4b-39e8a96cc5c8",
            disid: "4",
            name: "Дальнереченск г",
            okato: "05408000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "995e1b1c-753a-4b66-b309-36c99796cb9b",
            disid: "4",
            name: "Дальнереченский р-н",
            okato: "05207000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "1e05990c-5c14-43a8-a35f-7c0da8918444",
            disid: "4",
            name: "Кавалеровский р-н",
            okato: "05210000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "691db1ec-1f3d-4b66-a080-a8f2c8ac1cac",
            disid: "4",
            name: "Кировский р-н",
            okato: "05212000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "8f0579a7-7ec1-4aaf-b5a0-7dd762bfe2ce",
            disid: "4",
            name: "Красноармейский р-н",
            okato: "05214000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "8f4ec2ee-96f0-4498-a4a2-fa53b311001b",
            disid: "4",
            name: "Лазовский р-н",
            okato: "05217000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "71b4cdae-5e53-4406-a418-1e8b5c17dc2e",
            disid: "4",
            name: "Лесозаводск г",
            okato: "05411000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "5a20febc-51fc-4048-86fb-0bc7ebef8136",
            disid: "4",
            name: "Лесозаводский р-н",
            okato: "05411000002",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "0756729d-ae62-453c-95c3-e71527a9e70b",
            disid: "4",
            name: "Михайловский р-н",
            okato: "05220000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "c8132996-04ce-4dc0-9cd4-ce94352d74f8",
            disid: "4",
            name: "Надеждинский р-н",
            okato: "05223000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "225a3506-35aa-4456-8bd7-244bdfbc4eaf",
            disid: "4",
            name: "Находка г",
            okato: "05414000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "aafa1538-babf-4e4a-ba44-3aa5a9c60966",
            disid: "4",
            name: "Октябрьский р-н",
            okato: "05226000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "c384446c-8fad-4bc2-9e3c-de0be56e08af",
            disid: "4",
            name: "Ольгинский р-н",
            okato: "05228000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "b62edf86-4257-4e80-ade6-857529bd1b1e",
            disid: "4",
            name: "Партизанск г",
            okato: "05417000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "fb565c17-3fc5-424d-a7d8-26bc35a7557b",
            disid: "4",
            name: "Партизанский р-н",
            okato: "05230000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "55b48f09-0efe-4e80-85af-77ff2476da89",
            disid: "4",
            name: "Пограничный р-н",
            okato: "05232000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "d77cc950-d159-4341-acad-57404d3ca3e1",
            disid: "4",
            name: "Пожарский р-н",
            okato: "05234000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "e55554eb-c571-49d2-bf69-c3c4acf8b10b",
            disid: "4",
            name: "Спасск-Дальний г",
            okato: "05420000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "f046446e-5635-4dbe-a2a2-c725fcda2931",
            disid: "4",
            name: "Спасский р-н",
            okato: "05237000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "d7b7b0a8-73fa-48e2-8615-2807d1aa3060",
            disid: "4",
            name: "Тернейский р-н",
            okato: "05240000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "de7335fb-9baa-48eb-927d-0bb299b2e5bc",
            disid: "4",
            name: "Уссурийск г",
            okato: "05423000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "5befc127-d884-428f-8775-7d6e364dea2a",
            disid: "4",
            name: "Уссурийский р-н",
            okato: "05423000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "fdb16823-586f-43d2-a1b4-b1c7c7f00bcd",
            disid: "4",
            name: "Фокино г",
            okato: "05547000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "187fe5b6-e153-4b30-8d71-79da706c3a44",
            disid: "4",
            name: "Ханкайский р-н",
            okato: "05246000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "f7b61408-6130-420c-b46f-82dcab78a96f",
            disid: "4",
            name: "Хасанский р-н",
            okato: "05248000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "70937b86-63a1-4743-bd89-d52bb02f67ad",
            disid: "4",
            name: "Хорольский р-н",
            okato: "05250000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "5dc5c6d4-c5d2-43b2-b720-1d85a0d7c5a4",
            disid: "4",
            name: "Черниговский р-н",
            okato: "05253000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "266c0817-5b30-4013-b767-a6d5b6ccc542",
            disid: "4",
            name: "Чугуевский р-н",
            okato: "05255000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "85dcc2c9-7442-4a37-9848-6b76e63355b9",
            disid: "4",
            name: "Шкотовский р-н",
            okato: "05257000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "f8ca80bc-d047-4f04-9524-d98d767cc4bb",
            disid: "4",
            name: "Яковлевский р-н",
            okato: "05259000000",
            parentguid: "43909681-d6e1-432d-b61f-ddac393cb5da",
            regioncode: "25"
        }, {
            aoguid: "a48b0961-8608-4602-b65d-56d71e24cb09",
            disid: "4",
            name: "Абыйский у",
            okato: "98201000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "cd835f7c-545b-47f8-b372-2bf655efe881",
            disid: "4",
            name: "Алданский у",
            okato: "98203000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "f467757b-6249-4352-a71e-b8402b0779ad",
            disid: "4",
            name: "Аллаиховский у",
            okato: "98206000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "ba3e7992-cc51-4cda-ac87-0254f10f0996",
            disid: "4",
            name: "Амгинский у",
            okato: "98208000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "b60ad03f-edc7-46b8-976e-b0bea152f2bd",
            disid: "4",
            name: "Анабарский у",
            okato: "98210000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "f45ecd3b-d337-49da-951b-2c660d950199",
            disid: "4",
            name: "Булунский у",
            okato: "98212000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "9d942295-ec0f-46c1-b07e-725672cc34e5",
            disid: "4",
            name: "Верхневилюйский у",
            okato: "98214000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "33ca62cd-8b5f-404a-8f8d-1f16f1c8ea05",
            disid: "4",
            name: "Верхнеколымский у",
            okato: "98215000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "f5bbf5f0-8955-4557-88a8-62f4b28c6cef",
            disid: "4",
            name: "Верхоянский у",
            okato: "98216000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "63634da9-775c-41c4-addd-5b20540f615e",
            disid: "4",
            name: "Вилюйский у",
            okato: "98218000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "a717c175-c578-4611-b01f-b169e50d91d4",
            disid: "4",
            name: "Горный у",
            okato: "98220000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "b5706e58-586b-4a41-ba93-e8a7215c67b7",
            disid: "4",
            name: "Жиганский у",
            okato: "98222000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "cc1cd736-332d-4df7-b44e-19d09b568be8",
            disid: "4",
            name: "Кобяйский у",
            okato: "98224000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "471be2b0-acc1-4590-9266-0e7c35b22ebb",
            disid: "4",
            name: "Ленский у",
            okato: "98227000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "86f91f5c-3283-42b0-b2af-bcb5393aae89",
            disid: "4",
            name: "Мегино-Кангаласский у",
            okato: "98229000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "50f64b86-cb89-41e4-82f1-a9cc0eb4e222",
            disid: "4",
            name: "Мирнинский у",
            okato: "98231000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "41b12d5b-af67-4acf-af94-739f8e8ec373",
            disid: "4",
            name: "Момский у",
            okato: "98233000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "c7956c49-39f3-4968-9bba-cb923befb665",
            disid: "4",
            name: "Намский у",
            okato: "98235000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "6ece5c38-f802-4f32-ad33-0409538c3562",
            disid: "4",
            name: "Нерюнгри г",
            okato: "98406550000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "8f8d4b5c-7745-42bb-94ba-abb0fe634e83",
            disid: "4",
            name: "Нижнеколымский у",
            okato: "98237000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "d6664eed-0357-4f72-840b-ce5b1cd19af1",
            disid: "4",
            name: "Нюрбинский у",
            okato: "98226000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "c3d18155-0f1a-4c05-95f8-87160d350621",
            disid: "4",
            name: "Оймяконский у",
            okato: "98239000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "b90ae50a-ce7b-4b76-8af3-df3195e7ee23",
            disid: "4",
            name: "Олекминский у",
            okato: "98241000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "cf55bf48-5eb0-491b-aeb5-43302c69a2e2",
            disid: "4",
            name: "Оленекский эвенкийский национальный у",
            okato: "98242000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "978623f7-e2d6-4300-9367-44446256e7ee",
            disid: "4",
            name: "Среднеколымский у",
            okato: "98246000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "2cf51223-a7dd-4885-a239-2b14c89bc870",
            disid: "4",
            name: "Сунтарский у",
            okato: "98248000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "9273d43c-278a-4073-93b4-a19f42f5cdf6",
            disid: "4",
            name: "Таттинский у",
            okato: "98204000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "73533d0b-02a8-411e-8f68-94aa2d7a6d33",
            disid: "4",
            name: "Томпонский у",
            okato: "98250000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "31db732f-1568-4f01-92c2-15c8d0ce7f78",
            disid: "4",
            name: "Усть-Алданский у",
            okato: "98252000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "4b4d4c0e-ad9a-472f-b682-62381706513a",
            disid: "4",
            name: "Усть-Майский у",
            okato: "98254000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "e3c153f0-defe-4c4e-ac32-3e0dd593234a",
            disid: "4",
            name: "Усть-Янский у",
            okato: "98256000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "4e397dfe-a6cc-46b2-97ad-0303b152a5fa",
            disid: "4",
            name: "Хангаласский у",
            okato: "98244000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "d6db5f62-cde7-4183-b905-25bc65158e95",
            disid: "4",
            name: "Чурапчинский у",
            okato: "98258000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "3f73f00e-bda5-455d-9f94-8c8f54fcf678",
            disid: "4",
            name: "Эвено-Бытантайский Национальный у",
            okato: "98259000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "884c84a2-0141-4652-962d-8a92989b88f7",
            disid: "4",
            name: "Якутск г",
            okato: "98401000000",
            parentguid: "c225d3db-1db6-4063-ace0-b3fe9ea3805f",
            regioncode: "14"
        }, {
            aoguid: "0f2593bb-5849-4a22-b6a0-08a62711a48f",
            disid: "4",
            name: "Александровск-Сахалинский р-н",
            okato: "64204000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "ab950fc2-b675-408c-9e96-bee42e16cba8",
            disid: "4",
            name: "Анивский р-н",
            okato: "64208000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "60d2bc46-e1e5-493d-8d77-98efdfdb8d5b",
            disid: "4",
            name: "Долинский р-н",
            okato: "64212000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "cf847029-d59d-4440-92ac-a8804aded2ba",
            disid: "4",
            name: "Корсаковский р-н",
            okato: "64216000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "cb7c37b6-3add-4c75-937b-1139329d0b9b",
            disid: "4",
            name: "Курильский р-н",
            okato: "64220000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "53f4c64c-88a4-411a-aef9-2b9aa7536aeb",
            disid: "4",
            name: "Макаровский р-н",
            okato: "64224000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "74938bee-7b8c-4f00-97af-ae96dd487e84",
            disid: "4",
            name: "Невельский р-н",
            okato: "64228000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "a6759f2e-96cb-418f-8e44-527765e58f97",
            disid: "4",
            name: "Ногликский р-н",
            okato: "64232000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "efb555f4-2f2a-49af-a40c-d398cbc84271",
            disid: "4",
            name: "Охинский р-н",
            okato: "64236000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "0a5764d6-1cef-4270-aa96-fd2657d01623",
            disid: "4",
            name: "Поронайский р-н",
            okato: "64240000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "33652fb1-862f-46bc-8ab2-1d58f0ec21a9",
            disid: "4",
            name: "Северо-Курильский р-н",
            okato: "64243000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "7fb1c169-7643-4abd-b5dc-d94555aa31c8",
            disid: "4",
            name: "Смирныховский р-н",
            okato: "64246000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "b58316d0-1339-4b11-8138-dae36f197591",
            disid: "4",
            name: "Томаринский р-н",
            okato: "64248000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "376116df-714d-40a1-9ef7-49cf902e99a9",
            disid: "4",
            name: "Тымовский р-н",
            okato: "64250000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "3945e58b-544e-43a1-9042-608b8258d987",
            disid: "4",
            name: "Углегорский р-н",
            okato: "64252000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "d1496d95-e90a-4fa6-8c77-adbf023cc358",
            disid: "4",
            name: "Холмский р-н",
            okato: "64254000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "aaa9474f-b2fe-40bc-a64f-88ab2cef6ad2",
            disid: "4",
            name: "Южно-Курильский р-н",
            okato: "64256000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "44388ad0-06aa-49b0-bbf9-1704629d1d68",
            disid: "4",
            name: "Южно-Сахалинск г",
            okato: "64401000000",
            parentguid: "aea6280f-4648-460f-b8be-c2bc18923191",
            regioncode: "65"
        }, {
            aoguid: "d3c4b43d-3e19-4454-939b-d92ef3d6c875",
            disid: "4",
            name: "Амурск г",
            okato: "08403000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "c5a734af-ed27-4463-9e6a-a98571371a87",
            disid: "4",
            name: "Амурский р-н",
            okato: "08203000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "12bc420e-cfd2-456e-9bc6-f14e5881a351",
            disid: "4",
            name: "Аяно-Майский р-н",
            okato: "08206000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "70dc89f8-f067-482a-bd50-4fb2782463e7",
            disid: "4",
            name: "Бикин г",
            okato: "08406000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "822de405-5731-4354-be51-95fbf11f3df5",
            disid: "4",
            name: "Бикинский р-н",
            okato: "08209000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "2763e3ba-0c04-40e2-8983-7df96a96c86b",
            disid: "4",
            name: "Ванинский р-н",
            okato: "08212000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "6a2d808f-a0d2-4b8f-a739-b857cad1afbe",
            disid: "4",
            name: "Верхнебуреинский р-н",
            okato: "08214000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "4bd60b31-27ac-4ff7-9cf4-a031d7beeffc",
            disid: "4",
            name: "Вяземский р-н",
            okato: "08217000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "9f905365-dbef-425a-9724-3db4e18dc7d9",
            disid: "4",
            name: "Имени Лазо р-н",
            okato: "08224000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "710a34c5-9ec0-4f13-ae31-2ce2dca3e44a",
            disid: "4",
            name: "Имени Полины Осипенко р-н",
            okato: "08237000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "a29c5b20-5056-412b-9af6-7b805aa3ea72",
            disid: "4",
            name: "Комсомольск-на-Амуре г",
            okato: "08409000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "43466e8d-ebc4-4d46-9010-1099778371f7",
            disid: "4",
            name: "Комсомольский р-н",
            okato: "08220000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "6e8cb872-3ca2-407f-a58f-49f53075558b",
            disid: "4",
            name: "Нанайский р-н",
            okato: "08228000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "7a58fb7c-6d03-46e4-b5fc-3f5b587c09be",
            disid: "4",
            name: "Николаевск-на-Амуре г",
            okato: "08414000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "41ea0996-8086-40bd-bc98-3409c969fd11",
            disid: "4",
            name: "Николаевский р-н",
            okato: "08231000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "e6543e92-608f-4e0c-a9b7-429d4e1fd8b2",
            disid: "4",
            name: "Охотский р-н",
            okato: "08234000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "64f0ebe7-00e4-40a0-9dd9-15f9293632ae",
            disid: "4",
            name: "Советская Гавань г",
            okato: "08418000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "bef59e53-1189-4b0c-a30b-c07804cbd092",
            disid: "4",
            name: "Советско-Гаванский р-н",
            okato: "08242000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "f88a5d4f-9146-4d81-a047-19216fb05efb",
            disid: "4",
            name: "Солнечный р-н",
            okato: "08244000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "1e57a568-7eca-4747-878c-c6d4e27f96d7",
            disid: "4",
            name: "Тугуро-Чумиканский р-н",
            okato: "08246000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "6fe3a5e3-d600-4fb0-89cb-4684096fd982",
            disid: "4",
            name: "Ульчский р-н",
            okato: "08250000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "a4859da8-9977-4b62-8436-4e1b98c5d13f",
            disid: "4",
            name: "Хабаровск г",
            okato: "08401000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "11d90802-ea26-4780-ae59-8c4726d6319f",
            disid: "4",
            name: "Хабаровский р-н",
            okato: "08255000000",
            parentguid: "7d468b39-1afa-41ec-8c4f-97a8603cb3d4",
            regioncode: "27"
        }, {
            aoguid: "4d254ba7-a45c-4101-b372-5f5605382272",
            disid: "4",
            name: "Анадырский р-н",
            okato: "77203000000",
            parentguid: "f136159b-404a-4f1f-8d8d-d169e1374d5c",
            regioncode: "87"
        }, {
            aoguid: "7fad3a21-06b4-4af3-9657-bf1521714952",
            disid: "4",
            name: "Анадырь г",
            okato: "77401000000",
            parentguid: "f136159b-404a-4f1f-8d8d-d169e1374d5c",
            regioncode: "87"
        }, {
            aoguid: "022d29fa-44fe-4e1f-a1c7-2f3ae447d68c",
            disid: "4",
            name: "Беринговский р-н",
            okato: "77206000000",
            parentguid: "f136159b-404a-4f1f-8d8d-d169e1374d5c",
            regioncode: "87"
        }, {
            aoguid: "fc22fe8c-bbf6-4428-b728-25cf0cc4b64b",
            disid: "4",
            name: "Билибинский р-н",
            okato: "77209000000",
            parentguid: "f136159b-404a-4f1f-8d8d-d169e1374d5c",
            regioncode: "87"
        }, {
            aoguid: "57e844fa-6e04-4ca8-9227-77dd12ba6286",
            disid: "4",
            name: "Иультинский р-н",
            okato: "77215000000",
            parentguid: "f136159b-404a-4f1f-8d8d-d169e1374d5c",
            regioncode: "87"
        }, {
            aoguid: "b5d17b9e-480e-4fb6-959b-b1288d69a2b6",
            disid: "4",
            name: "Провиденский р-н",
            okato: "77220000000",
            parentguid: "f136159b-404a-4f1f-8d8d-d169e1374d5c",
            regioncode: "87"
        }, {
            aoguid: "dcadfd94-88b5-423d-ac0a-7d27f85f0051",
            disid: "4",
            name: "Чаунский р-н",
            okato: "77230000000",
            parentguid: "f136159b-404a-4f1f-8d8d-d169e1374d5c",
            regioncode: "87"
        }, {
            aoguid: "f161569d-fc4b-4d22-a4c3-0131c4f37c3a",
            disid: "4",
            name: "Чукотский р-н",
            okato: "77233000000",
            parentguid: "f136159b-404a-4f1f-8d8d-d169e1374d5c",
            regioncode: "87"
        }, {
            aoguid: "029b292b-6f5a-4777-b9ef-154459558a9f",
            disid: "4",
            name: "Шмидтовский р-н",
            okato: "77237000000",
            parentguid: "f136159b-404a-4f1f-8d8d-d169e1374d5c",
            regioncode: "87"
        }, {
            aoguid: "0839d751-b940-4d3d-afb6-5df03fdd7791",
            disid: "5",
            name: "Горно-Алтайск г",
            okato: "84401000000",
            parentguid: "5c48611f-5de6-4771-9695-7e36a4e7529d",
            regioncode: "04"
        }, {
            aoguid: "4c2dd563-c3af-45ad-9a8f-2959de8383f0",
            disid: "5",
            name: "Кош-Агачский р-н",
            okato: "84210000000",
            parentguid: "5c48611f-5de6-4771-9695-7e36a4e7529d",
            regioncode: "04"
        }, {
            aoguid: "169067ea-a246-4b26-96ec-6ce6b9517312",
            disid: "5",
            name: "Майминский р-н",
            okato: "84215000000",
            parentguid: "5c48611f-5de6-4771-9695-7e36a4e7529d",
            regioncode: "04"
        }, {
            aoguid: "948da642-a876-498c-8256-ac62264d62d8",
            disid: "5",
            name: "Онгудайский р-н",
            okato: "84220000000",
            parentguid: "5c48611f-5de6-4771-9695-7e36a4e7529d",
            regioncode: "04"
        }, {
            aoguid: "c52a9298-eb63-4916-8251-ac9c662b94cf",
            disid: "5",
            name: "Турочакский р-н",
            okato: "84225000000",
            parentguid: "5c48611f-5de6-4771-9695-7e36a4e7529d",
            regioncode: "04"
        }, {
            aoguid: "c0ccc597-292b-448c-a413-478604d226f9",
            disid: "5",
            name: "Улаганский р-н",
            okato: "84230000000",
            parentguid: "5c48611f-5de6-4771-9695-7e36a4e7529d",
            regioncode: "04"
        }, {
            aoguid: "2611f7ea-0871-42ef-8dab-1a621cd34ce8",
            disid: "5",
            name: "Усть-Канский р-н",
            okato: "84235000000",
            parentguid: "5c48611f-5de6-4771-9695-7e36a4e7529d",
            regioncode: "04"
        }, {
            aoguid: "65fdce0c-904a-41db-b638-f613c5cc7e94",
            disid: "5",
            name: "Усть-Коксинский р-н",
            okato: "84240000000",
            parentguid: "5c48611f-5de6-4771-9695-7e36a4e7529d",
            regioncode: "04"
        }, {
            aoguid: "fba1d85e-9556-420f-92e1-8bdd5cfac8a9",
            disid: "5",
            name: "Чемальский р-н",
            okato: "84243000000",
            parentguid: "5c48611f-5de6-4771-9695-7e36a4e7529d",
            regioncode: "04"
        }, {
            aoguid: "4d145c06-d5fc-4355-9a50-fe7a3329f70e",
            disid: "5",
            name: "Чойский р-н",
            okato: "84245000000",
            parentguid: "5c48611f-5de6-4771-9695-7e36a4e7529d",
            regioncode: "04"
        }, {
            aoguid: "307dd393-ab5a-448f-a85d-abe32139333d",
            disid: "5",
            name: "Шебалинский р-н",
            okato: "84250000000",
            parentguid: "5c48611f-5de6-4771-9695-7e36a4e7529d",
            regioncode: "04"
        }, {
            aoguid: "ae716080-f27b-40b6-a555-cf8b518e849e",
            disid: "5",
            name: "Алейск г",
            okato: "01403000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "55e07317-8997-4911-b4c0-c37142939c57",
            disid: "5",
            name: "Алейский р-н",
            okato: "01201000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "812ae638-306f-444b-a70c-411e45e33f16",
            disid: "5",
            name: "Алтайский р-н",
            okato: "01202000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "b468214b-b5e8-4f32-9217-8680b4d3977b",
            disid: "5",
            name: "Баевский р-н",
            okato: "01203000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "d13945a8-7017-46ab-b1e6-ede1e89317ad",
            disid: "5",
            name: "Барнаул г",
            okato: "01401000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "e4edca96-9b86-4cac-8c7f-cc93d9ba4cd1",
            disid: "5",
            name: "Белокуриха г",
            okato: "01404000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "52f876f6-cb1d-4f23-a22f-b692609fc1e0",
            disid: "5",
            name: "Бийск г",
            okato: "01405000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "b86fc825-e4ac-460f-aae2-19779682e891",
            disid: "5",
            name: "Бийский р-н",
            okato: "01204000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "f44af653-9182-47ef-ac56-5814d4ff3c6f",
            disid: "5",
            name: "Благовещенский р-н",
            okato: "01205000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "b276cba8-44d1-42cb-b261-477c21815854",
            disid: "5",
            name: "Бурлинский р-н",
            okato: "01206000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "8ee8547f-e119-4418-994c-fb3fbac6092d",
            disid: "5",
            name: "Быстроистокский р-н",
            okato: "01207000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "d3f7df49-2a7e-46b2-9c3d-57673606187c",
            disid: "5",
            name: "Волчихинский р-н",
            okato: "01208000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "f5b3e147-86b2-4dbd-bab3-446580370d5e",
            disid: "5",
            name: "Егорьевский р-н",
            okato: "01209000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "8fb9cf52-2172-458c-b695-676764f921ef",
            disid: "5",
            name: "Ельцовский р-н",
            okato: "01210000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "440b3e68-0929-49f9-b994-8683e5a73df5",
            disid: "5",
            name: "Завьяловский р-н",
            okato: "01211000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "fe484845-ba6d-4cf5-b9ae-61c09665030e",
            disid: "5",
            name: "Залесовский р-н",
            okato: "01212000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "142e04ef-dec1-44fa-b553-fac215764374",
            disid: "5",
            name: "Заринск г",
            okato: "01406000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "5762fb13-f2bd-495d-a084-05395205355c",
            disid: "5",
            name: "Заринский р-н",
            okato: "01213000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "5a1640c4-b8a1-42f5-8804-14757c7c665c",
            disid: "5",
            name: "Змеиногорский р-н",
            okato: "01214000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "6b60c585-b3aa-4661-8054-0c073df7179a",
            disid: "5",
            name: "Зональный р-н",
            okato: "01229000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "bef9941c-f31e-4d4c-b0e0-2f384b2bf38e",
            disid: "5",
            name: "Калманский р-н",
            okato: "01215000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "ff57ea09-87c7-43c1-a560-d74511933c08",
            disid: "5",
            name: "Каменский р-н",
            okato: "01216000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "810ca9c7-f10e-4def-9c48-f0aa83168ca7",
            disid: "5",
            name: "Камень-на-Оби г",
            okato: "01410000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "f8d97694-8b0c-4cd0-a122-e348694553c3",
            disid: "5",
            name: "Ключевский р-н",
            okato: "01217000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "3d9775b4-5cbe-4794-b43c-7168a7d4baef",
            disid: "5",
            name: "Косихинский р-н",
            okato: "01218000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "3c80496d-3092-469c-be07-9ef5f7815069",
            disid: "5",
            name: "Красногорский р-н",
            okato: "01219000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "c380cbaf-ad34-41b0-b448-e3998f39c2ed",
            disid: "5",
            name: "Краснощёковский р-н",
            okato: "01220000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "0b5707f0-3a2c-43a8-99bb-f1f344df203c",
            disid: "5",
            name: "Крутихинский р-н",
            okato: "01221000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "15e74521-85f7-484a-a358-05f9e323d6b8",
            disid: "5",
            name: "Кулундинский р-н",
            okato: "01222000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "d1526086-403a-44bb-a076-37c9e794542a",
            disid: "5",
            name: "Курьинский р-н",
            okato: "01223000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "47f53c62-0efe-4683-99d7-aa4f9a5a0674",
            disid: "5",
            name: "Кытмановский р-н",
            okato: "01224000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "f72473be-0441-4e3a-937a-0d9a5054e1a1",
            disid: "5",
            name: "Локтевский р-н",
            okato: "01225000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "35a088cc-5c63-4b5d-b982-535be51bee70",
            disid: "5",
            name: "Мамонтовский р-н",
            okato: "01226000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "3b92d8bf-88d7-4085-950c-aa4383b706c1",
            disid: "5",
            name: "Михайловский р-н",
            okato: "01227000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "7fbdf439-ddc8-4116-8a67-8dc7bf3493bc",
            disid: "5",
            name: "Немецкий Национальный р-н",
            okato: "01260000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "a697a7fd-10b5-4917-9b80-ce6758c8b5fc",
            disid: "5",
            name: "Новичихинский р-н",
            okato: "01228000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "aa288d9f-4b2a-42a6-97f0-3502dddfa383",
            disid: "5",
            name: "Новоалтайск г",
            okato: "01413000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "1ed19a66-a786-440c-b625-e034303abdf3",
            disid: "5",
            name: "Павловский р-н",
            okato: "01230000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "24fee08a-7097-4bd9-8f14-8a9f0e76c27b",
            disid: "5",
            name: "Панкрушихинский р-н",
            okato: "01231000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "1bed6635-6755-4af2-a9ea-e7a1b6147d7b",
            disid: "5",
            name: "Первомайский р-н",
            okato: "01232000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "dfb95d28-46f2-4786-97c1-2109c9ada2f7",
            disid: "5",
            name: "Петропавловский р-н",
            okato: "01233000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "3b52bd74-368d-4e16-b163-037756d9300c",
            disid: "5",
            name: "Поспелихинский р-н",
            okato: "01234000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "16c63577-f053-493f-8015-f577e8a7dc20",
            disid: "5",
            name: "Ребрихинский р-н",
            okato: "01235000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "e52d7d40-b4b9-461f-b3e7-f71b5b77dee4",
            disid: "5",
            name: "Родинский р-н",
            okato: "01236000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "7f760d5e-fcd0-4896-b5e2-2179dc4d382a",
            disid: "5",
            name: "Романовский р-н",
            okato: "01237000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "65db5c88-c65c-43f0-9c21-13e15a032d4a",
            disid: "5",
            name: "Рубцовск г",
            okato: "01416000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "f86613b5-2ff9-44d0-9294-116eddee0445",
            disid: "5",
            name: "Рубцовский р-н",
            okato: "01238000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "94ae181d-b153-4dd1-8a2f-12852919875f",
            disid: "5",
            name: "Славгород г",
            okato: "01419000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "dd132b78-51ba-46d0-9fd4-3dc76a93dc1e",
            disid: "5",
            name: "Славгородский р-н",
            okato: "01239000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "87a09d13-3020-4279-94a8-c9cbf3f0caab",
            disid: "5",
            name: "Смоленский р-н",
            okato: "01240000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "ca92170e-7921-4448-bc2d-9047148120ea",
            disid: "5",
            name: "Советский р-н",
            okato: "01242000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "b58e660f-c15f-4c79-befe-2ea0b2537687",
            disid: "5",
            name: "Солонешенский р-н",
            okato: "01243000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "b88539da-8ca2-4ecb-bcf3-0052da6487c9",
            disid: "5",
            name: "Солтонский р-н",
            okato: "01244000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "52daf91a-16d1-4237-9f7c-f242c10f967c",
            disid: "5",
            name: "Суетский р-н",
            okato: "01241000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "ad71a489-a8df-47bc-8e85-58836b59b67a",
            disid: "5",
            name: "Табунский р-н",
            okato: "01246000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "81952e7d-e64d-41a5-848d-decdd37e45e8",
            disid: "5",
            name: "Тальменский р-н",
            okato: "01247000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "b2192b7b-6916-423a-aedb-5a6a8955572a",
            disid: "5",
            name: "Тогульский р-н",
            okato: "01248000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "97f3d31c-9286-4d61-9585-bfd25bcc0818",
            disid: "5",
            name: "Топчихинский р-н",
            okato: "01249000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "0ca282b7-4cb8-424c-aa99-54d5fdecf4df",
            disid: "5",
            name: "Третьяковский р-н",
            okato: "01250000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "56af85a7-ef7e-41c2-9a2d-a90cc8826e3d",
            disid: "5",
            name: "Троицкий р-н",
            okato: "01251000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "207263b2-4f28-424a-a909-97319fcf6085",
            disid: "5",
            name: "Тюменцевский р-н",
            okato: "01252000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "67f72c0b-f45f-427e-9961-fd10211a7b5d",
            disid: "5",
            name: "Угловский р-н",
            okato: "01253000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "0531ba15-af22-4214-b618-401bd519f36d",
            disid: "5",
            name: "Усть-Калманский р-н",
            okato: "01254000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "a04faf9c-561a-4b60-812b-f8909763cb6b",
            disid: "5",
            name: "Усть-Пристанский р-н",
            okato: "01255000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "32d8dd57-4f92-4e11-8bf5-6ae4c7444945",
            disid: "5",
            name: "Хабарский р-н",
            okato: "01256000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "7e8de66b-a6a4-44ea-a2c2-71869c6fbe4a",
            disid: "5",
            name: "Целинный р-н",
            okato: "01257000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "a4f1cb01-d14c-458b-9829-cc495bb65295",
            disid: "5",
            name: "Чарышский р-н",
            okato: "01258000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "383806be-d48b-4f7c-9ebb-ce278fb7c7f0",
            disid: "5",
            name: "Шелаболихинский р-н",
            okato: "01245000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "77e4c8d6-1b5d-4c76-b1b9-40d5a2fdc448",
            disid: "5",
            name: "Шипуновский р-н",
            okato: "01259000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "e07d57ed-22ce-4020-b59c-f7aae6f091bf",
            disid: "5",
            name: "Яровое г",
            okato: "01430000000",
            parentguid: "8276c6a1-1a86-4f0d-8920-aba34d4cc34a",
            regioncode: "22"
        }, {
            aoguid: "edc30fc4-e9e5-4af5-a65a-3a002df258f3",
            disid: "5",
            name: "Баргузинский р-н",
            okato: "81203000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "ccbf71a0-c7fb-4d00-953f-4513b6faeb7e",
            disid: "5",
            name: "Баунтовский эвенкийский р-н",
            okato: "81200000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "39055f93-f5e4-48aa-820e-84a9077a06d8",
            disid: "5",
            name: "Бичурский р-н",
            okato: "81209000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "8bda6987-7285-47f6-a9b5-08383f069210",
            disid: "5",
            name: "Джидинский р-н",
            okato: "81212000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "e1fa8361-da55-4f3f-b1a9-7070c02916ea",
            disid: "5",
            name: "Еравнинский р-н",
            okato: "81215000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "730dc732-140d-437b-81c5-aa927aec0471",
            disid: "5",
            name: "Заиграевский р-н",
            okato: "81218000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "51b13cd0-feee-4558-b905-073030a0b0ff",
            disid: "5",
            name: "Закаменский р-н",
            okato: "81221000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "c33811fe-cee3-467f-a901-ceed8d0c7df6",
            disid: "5",
            name: "Иволгинский р-н",
            okato: "81222000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "59551701-4c36-4c62-b7b6-4af4d58ea29d",
            disid: "5",
            name: "Кабанский р-н",
            okato: "81224000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "d142ee10-5d45-4de9-87e6-74b3aa7fe178",
            disid: "5",
            name: "Кижингинский р-н",
            okato: "81227000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "89c0bc3d-002f-4532-a285-e690021abe57",
            disid: "5",
            name: "Курумканский р-н",
            okato: "81230000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "025cfb1c-855b-4447-8904-8b4b2ec52dc8",
            disid: "5",
            name: "Кяхтинский р-н",
            okato: "81233000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "943d717d-e457-48f0-b4bb-9a660fe78f1c",
            disid: "5",
            name: "Муйский р-н",
            okato: "81235000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "3bf41fa7-60a5-4b9c-9ee3-8ab2a5a90a9b",
            disid: "5",
            name: "Мухоршибирский р-н",
            okato: "81236000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "aad15d82-e748-48fb-90c9-acd77ebb9452",
            disid: "5",
            name: "Окинский р-н",
            okato: "81239000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "84684dc8-d631-407f-9445-b99460e26dd9",
            disid: "5",
            name: "Прибайкальский р-н",
            okato: "81242000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "8f4086ec-96d1-4f46-9411-353f65a96594",
            disid: "5",
            name: "Северо-Байкальский р-н",
            okato: "81245000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "c4ea4370-0720-40a3-9df6-dd8ccf354d15",
            disid: "5",
            name: "Северобайкальск г",
            okato: "81420000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "158b5445-b2c2-477c-83e7-4217545a7eac",
            disid: "5",
            name: "Селенгинский р-н",
            okato: "81248000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "114ad8c8-9356-4cdf-bac8-2d44a3adcfc8",
            disid: "5",
            name: "Тарбагатайский р-н",
            okato: "81250000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "d455c68f-329d-45c0-b2e9-f87b8b807ef8",
            disid: "5",
            name: "Тункинский р-н",
            okato: "81251000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "9fdcc25f-a3d0-4f28-8b61-40648d099065",
            disid: "5",
            name: "Улан-Удэ г",
            okato: "81401000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "252e5c1a-ded1-450a-bb4b-8de6c88e3650",
            disid: "5",
            name: "Хоринский р-н",
            okato: "81257000000",
            parentguid: "a84ebed3-153d-4ba9-8532-8bdf879e1f5a",
            regioncode: "03"
        }, {
            aoguid: "21156dc1-ebf7-404c-b009-fc4afe637436",
            disid: "5",
            name: "Агинский р-н",
            okato: "76202000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "e89ad160-f25b-4766-b315-1fee59010e3d",
            disid: "5",
            name: "Агинский Бурятский АО",
            okato: "76100000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "bad20b52-01ab-4e5b-b7f5-0311f872df45",
            disid: "5",
            name: "Акшинский р-н",
            okato: "76203000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "35cc8fc6-c562-4d85-abea-f64a63ba374b",
            disid: "5",
            name: "Александрово-Заводский р-н",
            okato: "76204000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "60a8d4f4-35c1-4f52-8822-8c6082476b8b",
            disid: "5",
            name: "Балейский р-н",
            okato: "76206000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "c675951e-2b4e-4b5a-bda0-39e9fcd5ccfd",
            disid: "5",
            name: "Борзинский р-н",
            okato: "76209000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "45c8797e-22da-4485-9941-c2178952cbce",
            disid: "5",
            name: "Газимуро-Заводский р-н",
            okato: "76210000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "571722ea-feea-4512-a42c-e66abf3c215c",
            disid: "5",
            name: "Горный пгт",
            okato: "76585000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "897aa126-11f1-4e2d-9252-3c116aef30a1",
            disid: "5",
            name: "Горный-1 пгт",
            okato: "76585000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "11644892-5633-4ba3-a05f-a2001266c04d",
            disid: "5",
            name: "Дульдургинский р-н",
            okato: "76211000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "b26268b7-f311-4f45-8b94-80a15671923b",
            disid: "5",
            name: "Забайкальский р-н",
            okato: "76212000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "2bb8b6a8-3934-49e7-9f26-a974154c21b9",
            disid: "5",
            name: "Каларский р-н",
            okato: "76215000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "9290614b-566e-49f8-a7a1-78dedc6cb387",
            disid: "5",
            name: "Калганский р-н",
            okato: "76218000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "bde9837e-5147-4a3d-8c25-dd1b11e60c53",
            disid: "5",
            name: "Карымский р-н",
            okato: "76220000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "539e012d-a5c0-4a81-83b9-cf87ea0f7697",
            disid: "5",
            name: "Краснокаменский р-н",
            okato: "76221000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "e158669c-2976-4230-8ce4-4e21eb07c2d7",
            disid: "5",
            name: "Красночикойский р-н",
            okato: "76222000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "4423dac1-c620-4631-b351-72d9ebadda5a",
            disid: "5",
            name: "Кыринский р-н",
            okato: "76224000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "25629833-34b6-4f44-93c2-f4dd9ad9208b",
            disid: "5",
            name: "Могойтуйский р-н",
            okato: "76225000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "cafc58e1-f461-4298-a150-4724110d102f",
            disid: "5",
            name: "Могочинский р-н",
            okato: "76226000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "46ed48f9-95be-4f90-93c5-bcce54ae1e7d",
            disid: "5",
            name: "Нерчинский р-н",
            okato: "76228000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "9fcf767e-df22-40a5-bbe7-55fa5f56da5a",
            disid: "5",
            name: "Нерчинско-Заводский р-н",
            okato: "76230000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "d8be2992-3b33-4ebd-b9c0-8b7bec743490",
            disid: "5",
            name: "Оловяннинский р-н",
            okato: "76232000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "859776d2-45b8-4248-925c-f376c7c6c712",
            disid: "5",
            name: "Ононский р-н",
            okato: "76234000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "3ea0829a-cf43-457b-aeb6-db2ee9aa5146",
            disid: "5",
            name: "Петровск-Забайкальский р-н",
            okato: "76236000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "19364191-9242-4c03-b7d6-6f32844e1754",
            disid: "5",
            name: "Приаргунский р-н",
            okato: "76238000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "38df8dbe-6dd4-4399-adf2-55e04ae24a3f",
            disid: "5",
            name: "Сретенский р-н",
            okato: "76240000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "e81ad007-3c4d-4e11-826d-2a38d05e438a",
            disid: "5",
            name: "Тунгиро-Олекминский р-н",
            okato: "76242000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "3d4b6a5a-6f1f-43a4-b57e-66018f4fcf3f",
            disid: "5",
            name: "Тунгокоченский р-н",
            okato: "76244000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "f84662de-eac5-404b-a882-8b40cfd86d4c",
            disid: "5",
            name: "Улетовский р-н",
            okato: "76246000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "d8f851f2-44e2-4846-a371-0721ab2d1a00",
            disid: "5",
            name: "Хилокский р-н",
            okato: "76247000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "9d288f0e-7143-4e52-abe9-945852d8cd09",
            disid: "5",
            name: "Чернышевский р-н",
            okato: "76248000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "2d9abaa6-85a6-4f1f-a1bd-14b76ec17d9c",
            disid: "5",
            name: "Чита г",
            okato: "76401000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "c1ace3b8-1b22-4e23-8f3f-8029fa27dadf",
            disid: "5",
            name: "Читинский р-н",
            okato: "76250000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "ea4a6bde-9ab0-4abe-8ab4-76b869d3ee0a",
            disid: "5",
            name: "Шелопугинский р-н",
            okato: "76252000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "dfee01b4-ecf1-4089-afa2-94b8573a9797",
            disid: "5",
            name: "Шилкинский р-н",
            okato: "76254000000",
            parentguid: "b6ba5716-eb48-401b-8443-b197c9578734",
            regioncode: "75"
        }, {
            aoguid: "dfae3d3b-4bd0-498f-ae0b-5cb5cf6d494f",
            disid: "5",
            name: "Аларский р-н",
            okato: "25123000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "82b6b7c8-82a4-44b2-8bc7-691373706b89",
            disid: "5",
            name: "Ангарск г",
            okato: "25405000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "5e96a64f-3bfa-4e0e-a502-9e94855cc104",
            disid: "5",
            name: "Ангарский р-н",
            okato: "25203000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "e42d2d68-3b0c-46ab-94bd-52d1dbeaef56",
            disid: "5",
            name: "Балаганский р-н",
            okato: "25201000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "1c0af271-ffea-4c16-bb49-1a1490cf9b69",
            disid: "5",
            name: "Баяндаевский р-н",
            okato: "25125000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "b899b36d-32b5-4bac-8955-943ca9c2ee2e",
            disid: "5",
            name: "Бодайбинский р-н",
            okato: "25202000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "8ace6ae4-7a35-494a-bfbd-9a743a929c39",
            disid: "5",
            name: "Бодайбо г",
            okato: "25410000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "faf30ee7-b3dc-44d5-a6ca-a6e98f93aaff",
            disid: "5",
            name: "Боханский р-н",
            okato: "25126000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "bdf6b629-b33e-4cfa-b4b2-7f693e1d821c",
            disid: "5",
            name: "Братск г",
            okato: "25414000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "c6c93ebf-f620-43ba-942b-e68e88d9eac1",
            disid: "5",
            name: "Братский р-н",
            okato: "25204000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "71b12e79-c6db-4827-9e35-2a775393282d",
            disid: "5",
            name: "Жигаловский р-н",
            okato: "25206000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "d03ef45a-3d8e-4ab3-886d-0ecdf024cc42",
            disid: "5",
            name: "Заларинский р-н",
            okato: "25208000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "7c3452ac-3953-4b78-a80c-64ec839620a6",
            disid: "5",
            name: "Зима г",
            okato: "25420000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "8c3e3cc9-31b2-4fc0-b929-06111ec504e3",
            disid: "5",
            name: "Зиминский р-н",
            okato: "25210000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "8eeed222-72e7-47c3-ab3a-9a553c31cf72",
            disid: "5",
            name: "Иркутск г",
            okato: "25401000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "664ba699-50ac-4a8b-999f-f8943da692ef",
            disid: "5",
            name: "Иркутск-45 г",
            okato: "25401370000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "08f4c119-098d-4098-a700-6caa9d027bb5",
            disid: "5",
            name: "Иркутский р-н",
            okato: "25212000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "6034bdc9-fbcd-40e8-8924-9dbd4c68ace7",
            disid: "5",
            name: "Казачинско-Ленский р-н",
            okato: "25214000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "ca3a2b75-f219-4b8e-b4b2-c59a35f881f0",
            disid: "5",
            name: "Катангский р-н",
            okato: "25216000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "605bcea9-4bec-4524-a00d-d27daa4fed4d",
            disid: "5",
            name: "Качугский р-н",
            okato: "25218000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "38b5ffbe-2fbd-4e27-99c0-4d0f1a5bdd30",
            disid: "5",
            name: "Киренский р-н",
            okato: "25220000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "48c3b10c-b7b3-40e7-93a8-722b6627c93a",
            disid: "5",
            name: "Куйтунский р-н",
            okato: "25222000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "5012239d-9d92-4343-9072-7c42c91dc262",
            disid: "5",
            name: "Мамско-Чуйский р-н",
            okato: "25224000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "fa2078e9-d61f-4f61-981f-38efe693367f",
            disid: "5",
            name: "Нижнеилимский р-н",
            okato: "25226000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "5d596a21-da89-4820-91ef-6ce3940a0c9f",
            disid: "5",
            name: "Нижнеудинск г",
            okato: "25424000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "8228d4e9-086a-498d-b041-18266dfc0a8a",
            disid: "5",
            name: "Нижнеудинский р-н",
            okato: "25228000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "6344ccf1-5bd4-4681-97ac-df9ca24cf925",
            disid: "5",
            name: "Нукутский р-н",
            okato: "25132000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "1d591587-7f01-4374-a485-dc0690b300a7",
            disid: "5",
            name: "Ольхонский р-н",
            okato: "25230000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "76b8f012-6efd-45b3-bd2f-01162f34f286",
            disid: "5",
            name: "Осинский р-н",
            okato: "25133000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "c21b5e04-ce0f-4f98-b0ac-0ceabc531212",
            disid: "5",
            name: "Саянск г",
            okato: "25426000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "17e498bd-5f9e-4221-8998-5fa24a35ed2e",
            disid: "5",
            name: "Свирск г",
            okato: "25445505000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "dddfffa9-c02c-48c5-b0e4-1871e61b5f45",
            disid: "5",
            name: "Слюдянский р-н",
            okato: "25234000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "945ac8e1-b529-4cec-afda-f92c6a6b0f70",
            disid: "5",
            name: "Тайшет г",
            okato: "25428000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "2e2f1779-a963-4fe8-a859-05922a9ab2cb",
            disid: "5",
            name: "Тайшетский р-н",
            okato: "25236000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "869c2c69-e8cd-43ae-9596-e0be50c0fcfe",
            disid: "5",
            name: "Тулун г",
            okato: "25432000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "58799a39-be9c-4f85-a6b8-031f109c616a",
            disid: "5",
            name: "Тулунский р-н",
            okato: "25238000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "ac680034-f7da-4bd8-8374-a5c97aa09516",
            disid: "5",
            name: "Усолье-Сибирское г",
            okato: "25436000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "3713d657-6ba0-40af-839d-5cfcd82890c4",
            disid: "5",
            name: "Усольский р-н",
            okato: "25240000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "78d11295-77b5-4ac4-b128-582e2989c0a5",
            disid: "5",
            name: "Усть-Илимск г",
            okato: "25438000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "02ea46f4-7242-4b27-aa70-99e33da15dda",
            disid: "5",
            name: "Усть-Илимский р-н",
            okato: "25242000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "cfb0a55a-3314-42bf-b3d8-5ed5368abdd6",
            disid: "5",
            name: "Усть-Кут г",
            okato: "25440000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "369b82c6-838f-4e32-aa0b-294233ec44d0",
            disid: "5",
            name: "Усть-Кутский р-н",
            okato: "25244000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "eeda03fb-75ce-4d51-8bd4-c0d1e8a3c2f1",
            disid: "5",
            name: "Усть-Ордынский АО",
            okato: "25100000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "e75a318a-db87-4152-9630-08b8c9139919",
            disid: "5",
            name: "Усть-Удинский р-н",
            okato: "25246000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "f05b68c4-f1c7-4c3d-b557-f1f44a57b85f",
            disid: "5",
            name: "Черемхово г",
            okato: "25445000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "2aa760b7-10b8-48b4-9dbe-c83ed794d3f9",
            disid: "5",
            name: "Черемховский р-н",
            okato: "25248000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "06d78c49-448f-4ae0-8ae7-2e07c38f89c7",
            disid: "5",
            name: "Чунский р-н",
            okato: "25250000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "c727ac3a-e05c-4b81-b8e1-9b1003c28595",
            disid: "5",
            name: "Шелехов г",
            okato: "25450000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "d53f2911-8879-46a3-a24f-cdee3015b1f6",
            disid: "5",
            name: "Шелеховский р-н",
            okato: "25255000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "852adb0e-8bf5-44d5-8c1b-88d15427c10c",
            disid: "5",
            name: "Эхирит-Булагатский р-н",
            okato: "25137000000",
            parentguid: "6466c988-7ce3-45e5-8b97-90ae16cb1249",
            regioncode: "38"
        }, {
            aoguid: "8a5314a4-903e-475c-a4db-8f03db3b793f",
            disid: "5",
            name: "Анжеро-Судженск г",
            okato: "32404000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "1346744e-8a64-4712-8939-bb84a1692874",
            disid: "5",
            name: "Белово г",
            okato: "32407000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "dea88af2-7d5f-4222-9f4f-40a92fe01927",
            disid: "5",
            name: "Беловский р-н",
            okato: "32201000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "ef6bac92-b712-42ba-942b-515b36b9a32c",
            disid: "5",
            name: "Березовский г",
            okato: "32410000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "c3485ea0-a5de-4c9c-a903-738043c65ad2",
            disid: "5",
            name: "Гурьевский р-н",
            okato: "32202000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "f04457f3-36cb-4460-956d-4300fdc91209",
            disid: "5",
            name: "Ижморский р-н",
            okato: "32204000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "5000e677-7d3c-4eec-b01d-f3f192abbd41",
            disid: "5",
            name: "Калтан г",
            okato: "32415000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "94bb19a3-c1fa-410b-8651-ac1bf7c050cd",
            disid: "5",
            name: "Кемерово г",
            okato: "32401000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "08ee43f1-dd7d-4ad5-b5db-fe2729ad62bf",
            disid: "5",
            name: "Кемеровский р-н",
            okato: "32207000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "36122f01-1666-42e0-9c65-937787e8ca45",
            disid: "5",
            name: "Киселевск г",
            okato: "32416000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "e175844f-fb7c-4d78-a0d1-218e8a0d43d1",
            disid: "5",
            name: "Крапивинский р-н",
            okato: "32210000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "a89fbd15-cb6d-43f0-9f80-c9b4eace3e2a",
            disid: "5",
            name: "Краснобродский пгт",
            okato: "32459000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "cf600ae8-e376-42ae-bf7c-5aa1875dcd28",
            disid: "5",
            name: "Ленинск-Кузнецкий г",
            okato: "32419000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "aeb5b1c5-8074-4e65-9c81-b407e8926d2a",
            disid: "5",
            name: "Ленинск-Кузнецкий р-н",
            okato: "32213000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "0480e01e-4ec7-42be-a5f7-515c521473ca",
            disid: "5",
            name: "Мариинский р-н",
            okato: "32216000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "c6a7e590-04b4-4a01-85fc-b61b63711bba",
            disid: "5",
            name: "Междуреченск г",
            okato: "32425000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "070a8e7b-038f-48c8-9eed-16a6c03ab899",
            disid: "5",
            name: "Мыски г",
            okato: "32428000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "b28b6f6f-1435-444e-95a6-68c499b0d27a",
            disid: "5",
            name: "Новокузнецк г",
            okato: "32431000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "c853545e-1787-46c4-9ad9-8232e8922189",
            disid: "5",
            name: "Новокузнецкий р-н",
            okato: "32219000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "1efff7c4-448a-48c5-b476-c803b4d36842",
            disid: "5",
            name: "Осинники г",
            okato: "32434000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "34ac1b24-f541-4279-abfb-466f80ed1f7b",
            disid: "5",
            name: "Полысаево г",
            okato: "32435000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "2d8b9d01-1c4f-4987-8a0b-1eb5080c1f38",
            disid: "5",
            name: "Прокопьевск г",
            okato: "32437000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "365075f4-6c74-4ba5-93a8-9db1ed6d7a59",
            disid: "5",
            name: "Прокопьевский р-н",
            okato: "32222800000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "71c6385b-50c5-4a7a-b3be-cad09cd9596e",
            disid: "5",
            name: "Промышленновский р-н",
            okato: "32225000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "4da6f430-f531-42f5-9176-1f6cf7ba6367",
            disid: "5",
            name: "Тайга г",
            okato: "32440000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "f017116d-99e7-4af7-8932-7c4a8bf64e1c",
            disid: "5",
            name: "Таштагольский р-н",
            okato: "32227000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "de7df13c-a96b-42d9-87d7-39ed6f5227d3",
            disid: "5",
            name: "Тисульский р-н",
            okato: "32228000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "50229ef5-a9db-4fac-8a43-026f5aa3bf72",
            disid: "5",
            name: "Топкинский р-н",
            okato: "32231000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "312ea2c7-07dd-4fe7-bb03-e33c7911fff3",
            disid: "5",
            name: "Тяжинский р-н",
            okato: "32234000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "7e77a902-4197-49a2-bdf7-31a74c1a4604",
            disid: "5",
            name: "Чебулинский р-н",
            okato: "32237000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "988289f5-d6d0-40d5-a483-55983e11c033",
            disid: "5",
            name: "Юрга г",
            okato: "32449000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "4b44796a-19a4-41fd-82be-6bec300df802",
            disid: "5",
            name: "Юргинский р-н",
            okato: "32240000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "b76d01fb-fda6-4a5b-af52-a42b2325111a",
            disid: "5",
            name: "Яйский р-н",
            okato: "32243000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "bddf023f-64dd-4da2-9e5c-b8d0a60e8396",
            disid: "5",
            name: "Яшкинский р-н",
            okato: "32246000000",
            parentguid: "393aeccb-89ef-4a7e-ae42-08d5cebc2e30",
            regioncode: "42"
        }, {
            aoguid: "6a33bcb0-9cfc-4cd6-be72-ca6b8cd079b9",
            disid: "5",
            name: "Абанский р-н",
            okato: "04201000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "c3689d32-dea5-49c8-b69b-b8d2daa1d36b",
            disid: "5",
            name: "Ачинск г",
            okato: "04403000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "e89b12e1-ebdd-4c50-b121-f7bdf95c2de4",
            disid: "5",
            name: "Ачинский р-н",
            okato: "04203000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "a33fb615-695f-473b-ac2e-4edd048312db",
            disid: "5",
            name: "Байкитский р-н",
            okato: "04143000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "625497d3-22de-4390-b4b4-2febfbfc15ce",
            disid: "5",
            name: "Балахтинский р-н",
            okato: "04204000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "40302939-ba4b-419c-a0f9-df464ea8138e",
            disid: "5",
            name: "Березовский р-н",
            okato: "04205000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "a61f85ec-2d90-407d-a67a-a33e2675c837",
            disid: "5",
            name: "Бирилюсский р-н",
            okato: "04206000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "cb56cf76-4a34-428d-8244-a802414d5fac",
            disid: "5",
            name: "Боготол г",
            okato: "04406000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "bf94bb1b-5000-4383-9214-2c8e4388a367",
            disid: "5",
            name: "Боготольский р-н",
            okato: "04208000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "2680d9c8-1b74-4d8e-b02a-7a98f7783fe9",
            disid: "5",
            name: "Богучанский р-н",
            okato: "04209000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "89c98c05-3349-4300-93de-30a364800409",
            disid: "5",
            name: "Большемуртинский р-н",
            okato: "04210000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "025c8573-549f-4ed3-a803-7510f7181eee",
            disid: "5",
            name: "Большеулуйский р-н",
            okato: "04211000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "78d7587f-ef26-48dc-81c6-d3ff445c9c8b",
            disid: "5",
            name: "Бородино г",
            okato: "04407000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "14bd88d5-8d50-479b-9e06-d9b3df76da70",
            disid: "5",
            name: "Дзержинский р-н",
            okato: "04213000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "76cc6918-6b7c-42b4-80da-4635d97d0da1",
            disid: "5",
            name: "Дивногорск г",
            okato: "04409000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "637f160e-574f-437e-9aff-9b11e0ab177b",
            disid: "5",
            name: "Емельяновский р-н",
            okato: "04214000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "6eb21d40-5098-49bc-8b08-ac1a2805d22b",
            disid: "5",
            name: "Енисейск г",
            okato: "04412000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "8633e938-7ffb-4f39-8a17-7f36fd7a7928",
            disid: "5",
            name: "Енисейский р-н",
            okato: "04215000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "39c3637f-9639-4a91-a3c2-a563684adab4",
            disid: "5",
            name: "Ермаковский р-н",
            okato: "04216000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "e532b3c3-d300-4585-ada6-40e7900c2abf",
            disid: "5",
            name: "Железногорск г",
            okato: "04535000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "719b789d-2476-430a-89cd-3fedc643d821",
            disid: "5",
            name: "Заозерный г",
            okato: "04247501000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "38f208d6-6f29-4d30-b826-b42e8beecc67",
            disid: "5",
            name: "Зеленогорск г",
            okato: "04537000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "86bbbbfa-0447-49d9-9495-429c03241b4d",
            disid: "5",
            name: "Идринский р-н",
            okato: "04217000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "129aa2c0-3c4f-4f8e-ae2d-eb9e766ef19b",
            disid: "5",
            name: "Иланский р-н",
            okato: "04218000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "f76df748-198f-42c4-9be4-a60641f15591",
            disid: "5",
            name: "Илимпийский р-н",
            okato: "04146000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "87824e67-a28d-4bf9-acbd-8b1a540759d4",
            disid: "5",
            name: "Ирбейский р-н",
            okato: "04219000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "2df39082-2e06-48bb-b3d0-e867f269b6bf",
            disid: "5",
            name: "Казачинский р-н",
            okato: "04220000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "f601c59f-db06-4aa2-9bc9-25eb33bc3ef4",
            disid: "5",
            name: "Кайеркан г",
            okato: "04429000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "75917770-c4cb-44d8-afcc-8a6d395c3bc2",
            disid: "5",
            name: "Канск г",
            okato: "04420000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "bcd7f952-5699-4db9-b63e-ed235ac7fbdb",
            disid: "5",
            name: "Канский р-н",
            okato: "04221000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "7f8d46ca-dd6f-4940-a551-6ce7391db1ae",
            disid: "5",
            name: "Каратузский р-н",
            okato: "04222000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "af5a5735-c2ee-47d7-a203-1352f8c17ff8",
            disid: "5",
            name: "Кедровый п",
            okato: "04214553000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "99b88b4e-78af-4860-a9d5-d505da2aa9c5",
            disid: "5",
            name: "Кежемский р-н",
            okato: "04224000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "0e570c2f-8db1-4e3a-b898-0e88566d4e02",
            disid: "5",
            name: "Козульский р-н",
            okato: "04226000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "ca505463-b594-4933-a194-9a6b5fba2a2a",
            disid: "5",
            name: "Краснотуранский р-н",
            okato: "04228000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "9b968c73-f4d4-4012-8da8-3dacd4d4c1bd",
            disid: "5",
            name: "Красноярск г",
            okato: "04401000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "a4cc0a3b-1fe2-4423-acdc-1eb8a5d21c36",
            disid: "5",
            name: "Курагинский р-н",
            okato: "04230000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "2ddd48d6-e95b-4972-a34e-8586ed507763",
            disid: "5",
            name: "Лесосибирск г",
            okato: "04422000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "4f36f859-e6c8-46be-b15f-48014d6876b9",
            disid: "5",
            name: "Манский р-н",
            okato: "04231000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "5cfaf0c0-8f59-4321-9a5b-4b1c51b3779f",
            disid: "5",
            name: "Минусинск г",
            okato: "04423000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "1efadec1-72da-446d-bcae-576000756612",
            disid: "5",
            name: "Минусинский р-н",
            okato: "04233000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "5b8d94ed-4ef8-41cd-bf5f-f4d4bd3049b8",
            disid: "5",
            name: "Мотыгинский р-н",
            okato: "04235000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "ab0a1754-5ba1-48bb-8960-475c7fbc9feb",
            disid: "5",
            name: "Назарово г",
            okato: "04426000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "f64c218e-07cf-4cc7-af4e-389f99b444b4",
            disid: "5",
            name: "Назаровский р-н",
            okato: "04237000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "a641d631-2d5a-41bf-807f-f67f19873357",
            disid: "5",
            name: "Нижнеингашский р-н",
            okato: "04239000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "0279f552-85df-40e8-a703-1d2d99a72f35",
            disid: "5",
            name: "Новоселовский р-н",
            okato: "04241000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "d301a980-4a45-4066-9a20-4e783856a562",
            disid: "5",
            name: "Норильск г",
            okato: "04429000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "71bdc088-53f4-40a7-92dc-004499965dfa",
            disid: "5",
            name: "Партизанский р-н",
            okato: "04243000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "dbfbadbb-c14f-4c01-9825-0ce99986fa53",
            disid: "5",
            name: "Пировский р-н",
            okato: "04245000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "3d4c8618-9e22-4838-8f89-80da6851da90",
            disid: "5",
            name: "Рыбинский р-н",
            okato: "04247000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "e6aa8bed-c6fb-4469-ae86-75433903dd05",
            disid: "5",
            name: "Саянский р-н",
            okato: "04248000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "04892c4c-059e-4d29-aa23-14f0691835a9",
            disid: "5",
            name: "Северо-Енисейский р-н",
            okato: "04249000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "145152c6-d2a1-4de4-bbe3-bf73f70898f1",
            disid: "5",
            name: "Солнечный п",
            okato: "04580000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "a139c8ba-831e-4ee5-87a9-1eead6984288",
            disid: "5",
            name: "Сосновоборск г",
            okato: "04433000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "fe5e453e-5914-4d4b-b874-519473fea79d",
            disid: "5",
            name: "Сухобузимский р-н",
            okato: "04251000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "10b4253f-e96e-4134-9f82-e9691e719865",
            disid: "5",
            name: "Таймырский Долгано-Ненецкий р-н",
            okato: "04100000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "75c8a823-4432-4f70-a92d-f12ad2e131f3",
            disid: "5",
            name: "Талнах г",
            okato: "04429515000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "ef06d588-179d-434d-ae61-90713a77d6ae",
            disid: "5",
            name: "Тасеевский р-н",
            okato: "04252000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "fd173ecc-239a-4e3c-b0dc-25456ea5d4f3",
            disid: "5",
            name: "Тунгусско-Чунский р-н",
            okato: "04149000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "3c64d957-bba5-40f9-86bd-995f56c976f0",
            disid: "5",
            name: "Туруханский р-н",
            okato: "04254000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "991ff2ab-056d-4d17-a16b-2246f9fcbcda",
            disid: "5",
            name: "Тюхтетский р-н",
            okato: "04255000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "0fc93756-86fc-48d2-89e3-e81b44dd7e8e",
            disid: "5",
            name: "Ужурский р-н",
            okato: "04256000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "431049b3-4d29-4f5d-84d8-44cebc96ff44",
            disid: "5",
            name: "Уярский р-н",
            okato: "04257000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "e21e9175-86f9-4e24-b129-abdee0f956dc",
            disid: "5",
            name: "Шарыпово г",
            okato: "04440000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "b2c635f1-e3f8-45a9-ae06-4572e0340541",
            disid: "5",
            name: "Шарыповский р-н",
            okato: "04258000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "71c98acc-51c3-448a-b039-f587f2201f0c",
            disid: "5",
            name: "Шушенский р-н",
            okato: "04259000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "2e353e52-4ae4-4cee-a45b-af7a52e1aa49",
            disid: "5",
            name: "Эвенкийский р-н",
            okato: "04250000000",
            parentguid: "db9c4f8b-b706-40e2-b2b4-d31b98dcd3d1",
            regioncode: "24"
        }, {
            aoguid: "d0133369-2bb2-4497-992b-4448dbd7aa69",
            disid: "5",
            name: "Баганский р-н",
            okato: "50203000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "0133a54d-617a-4682-8885-e22c85588be8",
            disid: "5",
            name: "Барабинск г",
            okato: "50405000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "e69722e4-2e76-463a-a865-b2d1a0c6acd8",
            disid: "5",
            name: "Барабинский р-н",
            okato: "50204000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "fd0191f4-4687-42d9-be64-4ebc7824bd08",
            disid: "5",
            name: "Бердск г",
            okato: "50408000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "fc206783-5449-43ca-a876-57e5de9c556b",
            disid: "5",
            name: "Болотнинский р-н",
            okato: "50206000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "5449c5a3-97a0-4127-aae9-902c19fb3375",
            disid: "5",
            name: "Венгеровский р-н",
            okato: "50208000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "edf28806-6625-420e-8eb6-c9b3ca36d321",
            disid: "5",
            name: "Доволенский р-н",
            okato: "50210000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "dc79992b-1b9f-4daa-9176-7bf865e79b48",
            disid: "5",
            name: "Здвинский р-н",
            okato: "50213000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "6965fcac-b7e4-4cab-ab35-a591ed65edf5",
            disid: "5",
            name: "Искитим г",
            okato: "50412000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "9e297e5e-63de-47da-a2e0-0049ef8ef37b",
            disid: "5",
            name: "Искитимский р-н",
            okato: "50215000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "649d1374-867a-4ac5-bc00-fb9000eb7209",
            disid: "5",
            name: "Карасукский р-н",
            okato: "50217000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "87b7f4d5-623f-48aa-9f0e-dde02a7dd8c8",
            disid: "5",
            name: "Каргатский р-н",
            okato: "50219000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "e158c1ab-be77-4ca9-9895-5ac13ded736c",
            disid: "5",
            name: "Колыванский р-н",
            okato: "50221000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "a0d8802b-5dbb-40ab-87b4-e72d3dc15808",
            disid: "5",
            name: "Коченевский р-н",
            okato: "50223000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "6ccf0bab-b523-4e6c-9026-374609a97d9b",
            disid: "5",
            name: "Кочковский р-н",
            okato: "50225000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "2cec4061-dff8-47e9-981e-8ce69d103d5e",
            disid: "5",
            name: "Краснозерский р-н",
            okato: "50227000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "1b70e712-092e-4c45-9984-af3a2c7cfdd7",
            disid: "5",
            name: "Куйбышев г",
            okato: "50415000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "d25cd31a-74d9-4321-9af0-f73b352ee34c",
            disid: "5",
            name: "Куйбышевский р-н",
            okato: "50230000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "13a122ea-2721-4677-8b9a-aaa6d8c635b4",
            disid: "5",
            name: "Купинский р-н",
            okato: "50232000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "345670be-d56c-4a03-afdc-230f3218bf37",
            disid: "5",
            name: "Кыштовский р-н",
            okato: "50234000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "1231952a-97c1-41be-9833-46e24ab63bd3",
            disid: "5",
            name: "Маслянинский р-н",
            okato: "50236000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "6c663cc6-2761-4102-927a-8252c5dc4fdc",
            disid: "5",
            name: "Мошковский р-н",
            okato: "50238000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "8dea00e3-9aab-4d8e-887c-ef2aaa546456",
            disid: "5",
            name: "Новосибирск г",
            okato: "50401000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "16932400-c8e3-4a17-8c57-d96f30a183ce",
            disid: "5",
            name: "Новосибирский р-н",
            okato: "50240000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "8571e389-8c43-4c36-afae-b532d078c928",
            disid: "5",
            name: "Обь г",
            okato: "50417000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "69c26639-f4b8-4db4-8564-6cc1f2c1a0bb",
            disid: "5",
            name: "Ордынский р-н",
            okato: "50242000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "8fcd779a-deb1-4d86-8333-f2fe778f2a64",
            disid: "5",
            name: "Северный р-н",
            okato: "50244000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "32e6db58-4ed4-4ecc-9e29-d3ad03f93ad5",
            disid: "5",
            name: "Сузунский р-н",
            okato: "50248000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "17f3169d-63c5-4c04-9395-298333f7e0f4",
            disid: "5",
            name: "Татарск г",
            okato: "50418000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "fd31a50b-9717-4c77-99fd-d58a27a9ebe4",
            disid: "5",
            name: "Татарский р-н",
            okato: "50250000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "4d82321a-773a-46f3-bfea-a4d9c4e19026",
            disid: "5",
            name: "Тогучинский р-н",
            okato: "50252000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "ae9d91d8-69df-4c68-a1a8-5f2072cee500",
            disid: "5",
            name: "Убинский р-н",
            okato: "50254000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "1f9bec1f-981f-4fd5-a1ba-b4049200f27f",
            disid: "5",
            name: "Усть-Таркский р-н",
            okato: "50255000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "a35263cf-b1c5-4cc8-a0db-1b30c6fe79c0",
            disid: "5",
            name: "Чановский р-н",
            okato: "50256000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "bc3a422e-c7a8-4802-8241-57b2c890eecc",
            disid: "5",
            name: "Черепановский р-н",
            okato: "50257000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "e1d8588c-f57a-485f-9bc1-a67284e1800b",
            disid: "5",
            name: "Чистоозерный р-н",
            okato: "50258000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "47b2d10d-e034-47b0-983b-672b6e655baa",
            disid: "5",
            name: "Чулымский р-н",
            okato: "50259000000",
            parentguid: "1ac46b49-3209-4814-b7bf-a509ea1aecd9",
            regioncode: "54"
        }, {
            aoguid: "b1f99a59-4f88-48aa-a900-07254ecc5846",
            disid: "5",
            name: "Азовский немецкий национальный р-н",
            okato: "52201000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "1cae5789-878e-49e5-89c8-6b6c5ad05001",
            disid: "5",
            name: "Большереченский р-н",
            okato: "52203000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "e066d16c-0493-4cd2-9f2c-19664dd8a26d",
            disid: "5",
            name: "Большеуковский р-н",
            okato: "52206000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "975460c7-82f8-40b4-b5f3-112f59bbae3b",
            disid: "5",
            name: "Горьковский р-н",
            okato: "52209000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "89b0dec6-cba4-441f-93f5-2e5e8d51eda6",
            disid: "5",
            name: "Знаменский р-н",
            okato: "52212000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "b075f7a1-8632-4500-9324-b0c7e083e178",
            disid: "5",
            name: "Исилькульский р-н",
            okato: "52215000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "2ddf7732-9104-4296-9247-49c03449f75c",
            disid: "5",
            name: "Калачинский р-н",
            okato: "52218000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "66b11702-42cb-445f-b8f4-d500fb7237ce",
            disid: "5",
            name: "Колосовский р-н",
            okato: "52221000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "23517970-bff7-4364-8f9c-3e6a66874634",
            disid: "5",
            name: "Кормиловский р-н",
            okato: "52223000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "0f441b8c-ac52-44b8-8de2-246eb3120630",
            disid: "5",
            name: "Крутинский р-н",
            okato: "52226000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "93903388-4d74-4fd8-87af-3e0f0de6e227",
            disid: "5",
            name: "Любинский р-н",
            okato: "52229000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "2abb0a8c-d017-4e39-b401-59eaaa5aa7dd",
            disid: "5",
            name: "Марьяновский р-н",
            okato: "52230000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "c3f7b5d0-faef-4732-bd75-ebccb28bd995",
            disid: "5",
            name: "Москаленский р-н",
            okato: "52232000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "c8278271-6040-47d2-8389-447af59b643e",
            disid: "5",
            name: "Муромцевский р-н",
            okato: "52234000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "c85a4878-3346-4a9a-862e-26713dece681",
            disid: "5",
            name: "Называевский р-н",
            okato: "52236000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "1e52a59d-2377-4064-aabf-db4bc16dadfc",
            disid: "5",
            name: "Нижнеомский р-н",
            okato: "52239000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "1674145c-bab1-4cde-9975-eee95c4d8a7a",
            disid: "5",
            name: "Нововаршавский р-н",
            okato: "52241000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "5eb4fe7b-5566-4745-b4f0-7caea3852f2e",
            disid: "5",
            name: "Одесский р-н",
            okato: "52242000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "ff4b2b5f-cfb2-4e79-9f42-0504b6eb04ad",
            disid: "5",
            name: "Оконешниковский р-н",
            okato: "52243000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "140e31da-27bf-4519-9ea0-6185d681d44e",
            disid: "5",
            name: "Омск г",
            okato: "52401000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "41f593e6-7b2c-4e07-9802-01f9c9ce2469",
            disid: "5",
            name: "Омский р-н",
            okato: "52244000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "a77918ae-72fd-4dc7-9da8-c9509c0e465b",
            disid: "5",
            name: "Павлоградский р-н",
            okato: "52246000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "4210e3d1-e393-45e3-850a-1b27bce3337d",
            disid: "5",
            name: "Полтавский р-н",
            okato: "52248000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "9381bbe2-0026-4a86-b159-f86f7458c461",
            disid: "5",
            name: "Русско-Полянский р-н",
            okato: "52250000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "e10878bc-8031-4840-8358-f38a396c763d",
            disid: "5",
            name: "Саргатский р-н",
            okato: "52251000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "b1310905-c3e3-42d6-8e04-c705ec504839",
            disid: "5",
            name: "Седельниковский р-н",
            okato: "52252000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "99a42415-5474-499b-9ab6-95f039f1c80c",
            disid: "5",
            name: "Таврический р-н",
            okato: "52253000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "777ed55b-8c35-4b51-8907-85107999901e",
            disid: "5",
            name: "Тарский р-н",
            okato: "52254000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "028f2654-3269-4f31-926a-1401497bd8ce",
            disid: "5",
            name: "Тевризский р-н",
            okato: "52255000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "16a42ce3-8a21-4869-b31d-8ba5ee496d9e",
            disid: "5",
            name: "Тюкалинский р-н",
            okato: "52256000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "d6b23aa8-ce8f-472a-92eb-51c9ab042686",
            disid: "5",
            name: "Усть-Ишимский р-н",
            okato: "52257000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "5fd35313-9a47-41d7-9e7b-3f1caa022e1f",
            disid: "5",
            name: "Черлакский р-н",
            okato: "52258000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "7c80c495-2c57-46f3-8d48-3697a1715d3f",
            disid: "5",
            name: "Шербакульский р-н",
            okato: "52259000000",
            parentguid: "05426864-466d-41a3-82c4-11e61cdc98ce",
            regioncode: "55"
        }, {
            aoguid: "e838b1c0-e80e-4080-85c6-a4fffcc1b16d",
            disid: "5",
            name: "Александровский р-н",
            okato: "69204000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "8f33c1f9-f707-42f6-9b86-5540c6df2413",
            disid: "5",
            name: "Асиновский р-н",
            okato: "69208000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "0a36d48f-5103-4f8e-a702-44c7bc050cd8",
            disid: "5",
            name: "Бакчарский р-н",
            okato: "69212000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "3e3b47e1-6c93-40e2-b327-d73b0c5b400b",
            disid: "5",
            name: "Верхнекетский р-н",
            okato: "69216000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "9e3d4605-701e-4733-b6ed-1d03a2b5d4fe",
            disid: "5",
            name: "Зырянский р-н",
            okato: "69220000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "01801005-03e4-4349-971e-1f546f09a8d9",
            disid: "5",
            name: "Каргасокский р-н",
            okato: "69224000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "59cb7e41-b681-40c8-97f2-13374a397867",
            disid: "5",
            name: "Кедровый г",
            okato: "69407000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "639aaff9-48a9-4c05-8c06-94823c6113b3",
            disid: "5",
            name: "Кожевниковский р-н",
            okato: "69228000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "3b8d4f67-62c6-4b20-a49f-1352f5ff5840",
            disid: "5",
            name: "Колпашевский р-н",
            okato: "69232000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "eea14405-70df-413c-ac76-0db3dc15a6a3",
            disid: "5",
            name: "Кривошеинский р-н",
            okato: "69236000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "9469f2d0-b91b-47d8-8bfe-cc9d39c629f8",
            disid: "5",
            name: "Молчановский р-н",
            okato: "69240000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "68aa6a6d-4886-48ba-bcb0-58afd3f40540",
            disid: "5",
            name: "Парабельский р-н",
            okato: "69244000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "442ef1ca-ad05-4240-a598-25a492baca52",
            disid: "5",
            name: "Первомайский р-н",
            okato: "69248000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "53c22352-eb6f-4163-a4d1-385d64561d2f",
            disid: "5",
            name: "Северск г",
            okato: "69541000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "0a0fe1fc-8aab-4ff3-a2a3-971ee4fcd27f",
            disid: "5",
            name: "Стрежевой г",
            okato: "69410000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "7371dd8a-d2c4-4dcd-a854-79b3d33e97f3",
            disid: "5",
            name: "Тегульдетский р-н",
            okato: "69252000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "e3b0eae8-a4ce-4779-ae04-5c0797de66be",
            disid: "5",
            name: "Томск г",
            okato: "69401000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "3c033223-92b9-46a6-9b3c-e5bc7d178f79",
            disid: "5",
            name: "Томский р-н",
            okato: "69254000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "5b669af1-9d1c-4f97-b85a-b783e298e6e7",
            disid: "5",
            name: "Чаинский р-н",
            okato: "69256000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "c88c24c2-5b00-4202-90ea-97d6f50672dd",
            disid: "5",
            name: "Шегарский р-н",
            okato: "69258000000",
            parentguid: "889b1f3a-98aa-40fc-9d3d-0f41192758ab",
            regioncode: "70"
        }, {
            aoguid: "7e4932c1-2db8-4fee-9997-655d837e70e1",
            disid: "5",
            name: "Ак-Довурак г",
            okato: "93403000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "cadbde54-102f-476e-8e87-bd98c89840fe",
            disid: "5",
            name: "Бай-Тайгинский р-н",
            okato: "93205000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "12190a3b-65fd-43da-9052-19227800b151",
            disid: "5",
            name: "Барун-Хемчикский р-н",
            okato: "93210000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "841f351b-19a8-49a1-8667-5a8f826b4035",
            disid: "5",
            name: "Дзун-Хемчикский р-н",
            okato: "93215000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "3d60723d-afb7-410d-bdb9-5d7a4396e31b",
            disid: "5",
            name: "Каа-Хемский р-н",
            okato: "93220000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "8df8c56f-a46e-438f-a85b-a9b18ad4fc77",
            disid: "5",
            name: "Кызыл г",
            okato: "93401000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "d01d80d4-6023-4b48-81c1-b6636020c132",
            disid: "5",
            name: "Кызылский р-н",
            okato: "93222000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "95c936be-2aed-4c7f-96cd-849f80ca7273",
            disid: "5",
            name: "Монгун-Тайгинский р-н",
            okato: "93225000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "08b335d2-df5f-42e2-99d0-e84f38c38d5b",
            disid: "5",
            name: "Овюрский р-н",
            okato: "93230000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "7e7cf0c3-18f2-42c4-ba63-16bed7919247",
            disid: "5",
            name: "Пий-Хемский р-н",
            okato: "93235000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "646ea188-edc0-4b97-99ed-fd680200ba05",
            disid: "5",
            name: "Сут-Хольский р-н",
            okato: "93238000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "486fc2d7-4d2d-4cea-b858-92061a37555a",
            disid: "5",
            name: "Тандинский р-н",
            okato: "93240000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "8de7e4cb-2bc1-4dfe-a4f8-53861535fd85",
            disid: "5",
            name: "Тере-Хольский р-н",
            okato: "93243000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "310e2434-ae73-43d3-9595-291e1755d0e9",
            disid: "5",
            name: "Тес-Хемский р-н",
            okato: "93245000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "9f944992-8f1e-45ea-ab45-0fe9df7277df",
            disid: "5",
            name: "Тоджинский р-н",
            okato: "93250000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "75be2dee-7691-4052-9fb4-65394f700c14",
            disid: "5",
            name: "Улуг-Хемский р-н",
            okato: "93254000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "73efd399-13ba-4299-b96e-e508a1585770",
            disid: "5",
            name: "Чаа-Хольский р-н",
            okato: "93256000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "b03eaaa4-4bc5-4291-8830-5b8155eac772",
            disid: "5",
            name: "Чеди-Хольский р-н",
            okato: "93257000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "4abc80d1-b84a-4ae3-a5fb-65a116dcb9e8",
            disid: "5",
            name: "Эрзинский р-н",
            okato: "93258000000",
            parentguid: "026bc56f-3731-48e9-8245-655331f596c0",
            regioncode: "17"
        }, {
            aoguid: "a369b520-09b4-49b2-b28c-61c9146153e6",
            disid: "5",
            name: "Абаза г",
            okato: "95402000000",
            parentguid: "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
            regioncode: "19"
        }, {
            aoguid: "42a02e11-a337-4d50-8596-fc76dae7c62a",
            disid: "5",
            name: "Абакан г",
            okato: "95401000000",
            parentguid: "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
            regioncode: "19"
        }, {
            aoguid: "435653f2-3b93-4cbb-8059-c1f47cdd9044",
            disid: "5",
            name: "Алтайский р-н",
            okato: "95205000000",
            parentguid: "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
            regioncode: "19"
        }, {
            aoguid: "a17a80a6-3a1b-422b-a566-740dff475e5d",
            disid: "5",
            name: "Аскизский р-н",
            okato: "95208000000",
            parentguid: "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
            regioncode: "19"
        }, {
            aoguid: "f1723bdd-66a9-42a3-b6de-4be61acbb9b9",
            disid: "5",
            name: "Бейский р-н",
            okato: "95212000000",
            parentguid: "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
            regioncode: "19"
        }, {
            aoguid: "f18c4e62-1fbc-4b82-acd2-1e746ef01736",
            disid: "5",
            name: "Боградский р-н",
            okato: "95215000000",
            parentguid: "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
            regioncode: "19"
        }, {
            aoguid: "4c2fcece-23bf-413e-b05c-b5567f1456d9",
            disid: "5",
            name: "Орджоникидзевский р-н",
            okato: "95220000000",
            parentguid: "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
            regioncode: "19"
        }, {
            aoguid: "f89db729-bbfa-4d64-b8d5-ecafbec0733d",
            disid: "5",
            name: "Саяногорск г",
            okato: "95408000000",
            parentguid: "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
            regioncode: "19"
        }, {
            aoguid: "bf626532-9e6c-4365-801e-c1d297ab40f0",
            disid: "5",
            name: "Сорск г",
            okato: "95409000000",
            parentguid: "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
            regioncode: "19"
        }, {
            aoguid: "1b8abe7e-715e-46d8-8342-0f151ec00dda",
            disid: "5",
            name: "Таштыпский р-н",
            okato: "95225000000",
            parentguid: "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
            regioncode: "19"
        }, {
            aoguid: "0c97b2da-2011-4f2d-8944-54bb603eb93b",
            disid: "5",
            name: "Усть-Абаканский р-н",
            okato: "95230000000",
            parentguid: "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
            regioncode: "19"
        }, {
            aoguid: "2e3ec6d8-3835-4c57-9fbc-7e61b58a03a3",
            disid: "5",
            name: "Черногорск г",
            okato: "95415000000",
            parentguid: "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
            regioncode: "19"
        }, {
            aoguid: "ea7da4c1-25b1-41d7-8fe2-cbcc69928055",
            disid: "5",
            name: "Ширинский р-н",
            okato: "95235000000",
            parentguid: "8d3f1d35-f0f4-41b5-b5b7-e7cadf3e7bd7",
            regioncode: "19"
        }, {
            aoguid: "fe5dbfb2-9d16-46d4-b164-601c77eb1666",
            disid: "6",
            name: "Альменевский р-н",
            okato: "37202000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "3d2b9311-b27c-43fb-946e-023e089297e6",
            disid: "6",
            name: "Белозерский р-н",
            okato: "37204000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "8288cec5-69e9-4835-9a70-451c89efeaf4",
            disid: "6",
            name: "Варгашинский р-н",
            okato: "37206000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "ca0b4dab-6128-479a-b5ab-8f92dacb8689",
            disid: "6",
            name: "Далматовский р-н",
            okato: "37208000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "be374eae-ca2f-4f4f-8684-d61dc878b9a3",
            disid: "6",
            name: "Звериноголовский р-н",
            okato: "37209000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "96c892cf-23dc-4ef7-ab81-284a7fc66670",
            disid: "6",
            name: "Каргапольский р-н",
            okato: "37210000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "750c7fd4-54c7-48e6-a3cd-c1a2a71b0693",
            disid: "6",
            name: "Катайский р-н",
            okato: "37212000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "b4ee11d9-870b-4e92-bfc0-ac8c47d23cb6",
            disid: "6",
            name: "Кетовский р-н",
            okato: "37214000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "3bbda77d-ba3f-4457-9d44-c440815cda89",
            disid: "6",
            name: "Курган г",
            okato: "37401000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "a9e47647-8ab0-4a2f-87c4-f6802339b500",
            disid: "6",
            name: "Куртамышский р-н",
            okato: "37216000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "b5f79de2-14ff-46e2-a78b-be99d0de7060",
            disid: "6",
            name: "Лебяжьевский р-н",
            okato: "37218000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "df48f898-787c-4477-b487-1edc197fe5c1",
            disid: "6",
            name: "Макушинский р-н",
            okato: "37220000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "a2c6afec-f29c-4630-b6ea-39d30a1d6f48",
            disid: "6",
            name: "Мишкинский р-н",
            okato: "37222000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "fa71bd0f-b975-49b6-af69-e99dfe90bd54",
            disid: "6",
            name: "Мокроусовский р-н",
            okato: "37224000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "38a6f819-3966-4f83-9dc4-96597f9a58c8",
            disid: "6",
            name: "Петуховский р-н",
            okato: "37226000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "3d9bb43f-eca8-489d-8019-8cc0ff425d75",
            disid: "6",
            name: "Половинский р-н",
            okato: "37228000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "8155e6a7-cbde-4406-a95d-f68bef95ec83",
            disid: "6",
            name: "Притобольный р-н",
            okato: "37230000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "f644f063-dfa1-4a01-841a-c2bab686d14c",
            disid: "6",
            name: "Сафакулевский р-н",
            okato: "37232000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "624d6e01-6562-4e5a-b3c4-26c83a01911b",
            disid: "6",
            name: "Целинный р-н",
            okato: "37234000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "a8199fe3-eec7-49fb-b575-a6f06920e93a",
            disid: "6",
            name: "Частоозерский р-н",
            okato: "37236000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "7870abeb-8b0f-4899-920b-3ab8ff6024c0",
            disid: "6",
            name: "Шадринск г",
            okato: "37405000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "64c774d5-5ffb-45b1-a9fc-0cd0bbf73c3b",
            disid: "6",
            name: "Шадринский р-н",
            okato: "37238000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "a0fd70d7-3a7c-4edd-b797-f037dfcac0ce",
            disid: "6",
            name: "Шатровский р-н",
            okato: "37240000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "60bc9999-225c-491c-8937-f534e29533c6",
            disid: "6",
            name: "Шумихинский р-н",
            okato: "37242000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "8399874d-f711-4ecd-b773-5ea24b3bf7f9",
            disid: "6",
            name: "Щучанский р-н",
            okato: "37244000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "719fb87e-1e6c-4381-9153-dbd209219cfe",
            disid: "6",
            name: "Юргамышский р-н",
            okato: "37246000000",
            parentguid: "4a3d970f-520e-46b9-b16c-50d4ca7535a8",
            regioncode: "45"
        }, {
            aoguid: "a4ab722e-453a-4aed-bb73-728a05e2e27f",
            disid: "6",
            name: "Алапаевск г",
            okato: "65403000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "8170e3ae-b1f3-492d-aeec-2a9733eff7c6",
            disid: "6",
            name: "Алапаевский р-н",
            okato: "65201000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "3c101200-191d-4381-ab26-da8089341514",
            disid: "6",
            name: "Артемовский р-н",
            okato: "65202000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "372a9695-deed-4a21-9a1b-051a1e3bdc15",
            disid: "6",
            name: "Артинский р-н",
            okato: "65203000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "f5fb13f3-c7d2-4075-821b-9cca03f1ae12",
            disid: "6",
            name: "Асбест г",
            okato: "65409000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "5bc002fd-5a23-4f50-b562-febf9b974d94",
            disid: "6",
            name: "Ачитский р-н",
            okato: "65204000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "68dc362b-ac30-4e3f-82a2-99a5f1d24eeb",
            disid: "6",
            name: "Байкаловский р-н",
            okato: "65208000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "ef800214-0c77-403f-8d4e-fc3972bbb7ca",
            disid: "6",
            name: "Белоярский р-н",
            okato: "65209000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "adf5df2b-2c2e-45a9-b971-05550353cf43",
            disid: "6",
            name: "Березовский г",
            okato: "65412000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "51ddb8ea-dbd6-4674-92d0-aeebdb38059f",
            disid: "6",
            name: "Богдановичский р-н",
            okato: "65210000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "5c6ffccd-fa21-4318-8b63-7225fcddbe57",
            disid: "6",
            name: "Верхнесалдинский р-н",
            okato: "65211000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "e76b32c8-a93e-4d3f-bae2-282dc900954a",
            disid: "6",
            name: "Верхний Тагил г",
            okato: "65453503000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "061cd8e0-b7bd-4a31-944e-a6e3da93631d",
            disid: "6",
            name: "Верхняя Пышма г",
            okato: "65420000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "4ffc4d96-d8fb-49c8-9e36-0989968d06e5",
            disid: "6",
            name: "Верхняя Тура г",
            okato: "65470503000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "60cd03bb-4355-41b0-9faa-f4cbe1ef17df",
            disid: "6",
            name: "Верхотурский р-н",
            okato: "65212000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "68edcd30-0b57-4699-a196-343b80d23223",
            disid: "6",
            name: "Волчанск г",
            okato: "65445503000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "7291cac3-6a19-41ba-955c-921f1fa6b55b",
            disid: "6",
            name: "Гаринский р-н",
            okato: "65215000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "079bd9a9-7a84-4e6e-8a69-e73433e51e41",
            disid: "6",
            name: "Дегтярск г",
            okato: "65484503000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "2763c110-cb8b-416a-9dac-ad28a55b4402",
            disid: "6",
            name: "Екатеринбург г",
            okato: "65401000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "8018ae42-55a5-4297-a126-b482aee0b634",
            disid: "6",
            name: "Заречный г",
            okato: "65426000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "c32d06c4-cca2-42f4-a3b3-b2fee48b9585",
            disid: "6",
            name: "Ивдель г",
            okato: "65428000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "4a90bd67-7682-4012-a0c5-09865b9d08a0",
            disid: "6",
            name: "Ирбит г",
            okato: "65432000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "7dcd1b8d-698b-441d-9807-ab1ebcd5ef4f",
            disid: "6",
            name: "Ирбитский р-н",
            okato: "65218000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "ecc16584-9814-44d7-a0f3-c79601caa734",
            disid: "6",
            name: "Каменск-Уральский г",
            okato: "65436000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "c28ebfa2-6ced-4c85-8cd7-734a4d5262c5",
            disid: "6",
            name: "Каменский р-н",
            okato: "65222000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "ac2abd40-bb9b-41df-abd8-a319afd88f00",
            disid: "6",
            name: "Камышлов г",
            okato: "65440000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "98abd7d8-257f-4cc8-b61f-7e66e101674a",
            disid: "6",
            name: "Камышловский р-н",
            okato: "65223000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "a695f868-8b1d-412a-b011-3e1eb265aad5",
            disid: "6",
            name: "Карпинск г",
            okato: "65445000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "c6d37528-b353-43eb-81d8-64a4fd1612f5",
            disid: "6",
            name: "Качканар г",
            okato: "65448000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "dd3f07bd-0109-47e0-8a0a-64928436beed",
            disid: "6",
            name: "Кировград г",
            okato: "65453000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "59b1c816-7f98-4707-b5e2-c6193fff8923",
            disid: "6",
            name: "Краснотурьинск г",
            okato: "65456000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "3c6a6e0c-29d7-409b-9d2a-135994cf5e97",
            disid: "6",
            name: "Красноуральск г",
            okato: "65460000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "ddb355ab-7c2a-4f86-b388-6afbd81a7e73",
            disid: "6",
            name: "Красноуфимск г",
            okato: "65468000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "b5d85fab-f06f-474c-a3e8-819dc0b0c66b",
            disid: "6",
            name: "Красноуфимский р-н",
            okato: "65224000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "c2b7db39-9ef3-4d9d-a109-a3870b583d45",
            disid: "6",
            name: "Кушва г",
            okato: "65470000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "26c6f82c-8503-4c38-9009-52815c8f4a9b",
            disid: "6",
            name: "Лесной г",
            okato: "65542000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "c8702273-cf5d-450b-b460-f849352d609d",
            disid: "6",
            name: "Невьянский р-н",
            okato: "65227000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "9bd8cec0-8e87-4c35-ad65-c8120461f1e0",
            disid: "6",
            name: "Нижнесергинский р-н",
            okato: "65228000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "cc73d6af-6e2e-4a1f-be8e-682c289b0b57",
            disid: "6",
            name: "Нижний Тагил г",
            okato: "65476000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "b4326e03-bab5-4188-a8c1-97d69858c514",
            disid: "6",
            name: "Нижняя Салда г",
            okato: "65477000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "5591594f-f2a4-49b0-a3bc-22307f192c4e",
            disid: "6",
            name: "Нижняя Тура г",
            okato: "65478000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "9596ec38-b592-4cfb-83d8-e8f6fe6a85c7",
            disid: "6",
            name: "Новолялинский р-н",
            okato: "65229000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "22fbcef5-5cab-4ef2-9cb5-fddd1479bc8e",
            disid: "6",
            name: "Новоуральск г",
            okato: "65540000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "45bad628-61b7-4445-b62a-fa4c7bc71ccd",
            disid: "6",
            name: "Первоуральск г",
            okato: "65480000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "2a3b4b10-7035-4af5-9bbd-409c42b51eb7",
            disid: "6",
            name: "Полевской г",
            okato: "65482000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "498a36b2-3311-4cbe-993e-eb706d25f8bd",
            disid: "6",
            name: "Пригородный р-н",
            okato: "65232000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "93dd6b09-91d9-4cac-876f-3f64e50683b1",
            disid: "6",
            name: "Пышминский р-н",
            okato: "65233000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "b1a4b393-ac99-4447-a11d-c3b454fa3d8e",
            disid: "6",
            name: "Ревда г",
            okato: "65484000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "23a0e2a6-cf3b-4c12-bfcf-cadd97da487d",
            disid: "6",
            name: "Режевской р-н",
            okato: "65236000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "862dddf0-0479-4ffb-bc2c-ee83d598e855",
            disid: "6",
            name: "Североуральск г",
            okato: "65490000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "591f3e74-079f-42ff-a155-f01c9dc363ae",
            disid: "6",
            name: "Серов г",
            okato: "65492000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "83e7482d-9695-432f-96bb-fde971207e4d",
            disid: "6",
            name: "Серовский р-н",
            okato: "65238000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "c8644d7e-f101-4a26-9a10-0bb9068b5184",
            disid: "6",
            name: "Слободо-Туринский р-н",
            okato: "65239000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "7c470adb-7d3d-42a1-9190-8f3fd05f710d",
            disid: "6",
            name: "Среднеуральск г",
            okato: "65420505000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "b2c830e2-1185-490d-ab6c-5436a5ef2631",
            disid: "6",
            name: "Сухоложский р-н",
            okato: "65240000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "4f51e06b-3dd4-4948-bfce-c0dc7b09f504",
            disid: "6",
            name: "Сысертский р-н",
            okato: "65241000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "4d93b529-1ace-408b-9610-3a178947e5bd",
            disid: "6",
            name: "Таборинский р-н",
            okato: "65245000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "f913a3fa-f8b9-4a9f-80a5-de589236fa9d",
            disid: "6",
            name: "Тавдинский р-н",
            okato: "65248000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "6950470d-7da6-40ea-bc76-37910b7ae154",
            disid: "6",
            name: "Талицкий р-н",
            okato: "65249000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "674b197d-e017-46fe-9ce2-d8090474cf95",
            disid: "6",
            name: "Тугулымский р-н",
            okato: "65250000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "854cf4c3-db3e-4ba6-8cc9-adb860658711",
            disid: "6",
            name: "Туринский р-н",
            okato: "65254000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "a0ef8e3b-a213-488b-beb4-207c2add187f",
            disid: "6",
            name: "Шалинский р-н",
            okato: "65257000000",
            parentguid: "92b30014-4d52-4e2e-892d-928142b924bf",
            regioncode: "66"
        }, {
            aoguid: "3459628a-e8f0-436f-a141-dbfca20ab58e",
            disid: "6",
            name: "Абатский р-н",
            okato: "71203800000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "eecc6774-c52a-4c56-869b-522e94c39a1f",
            disid: "6",
            name: "Армизонский р-н",
            okato: "71205000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "b92c1873-02c9-4442-a53a-fb62f2e71d22",
            disid: "6",
            name: "Аромашевский р-н",
            okato: "71207000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "fe98702c-b35b-4905-81be-6078bb7c73b7",
            disid: "6",
            name: "Бердюжский р-н",
            okato: "71210000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "cf504ebb-218b-45e1-9e79-1e1dc3a6a080",
            disid: "6",
            name: "Вагайский р-н",
            okato: "71213000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "61bbef51-6ec7-45ee-8eba-7e917cab005c",
            disid: "6",
            name: "Викуловский р-н",
            okato: "71215000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "4af5a970-b80c-422e-bc42-406cbf579c85",
            disid: "6",
            name: "Голышмановский р-н",
            okato: "71218000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "d966f796-6fcb-4dfe-96f0-7e95fb098d25",
            disid: "6",
            name: "Заводоуковский р-н",
            okato: "71222000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "de3ac486-1416-48c3-a3fc-d6de55636a1e",
            disid: "6",
            name: "Исетский р-н",
            okato: "71224800000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "ad1c71ce-1121-44b0-899b-c87b8198be6e",
            disid: "6",
            name: "Ишимский р-н",
            okato: "71226000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "f6ecef11-8b4b-487e-a8de-77d88f06dc4b",
            disid: "6",
            name: "Казанский р-н",
            okato: "71230000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "98468b59-81ff-4e74-9f4d-916e85699766",
            disid: "6",
            name: "Нижнетавдинский р-н",
            okato: "71232000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "1cf1c0d5-279c-43c0-8ad6-c73c775fad54",
            disid: "6",
            name: "Омутинский р-н",
            okato: "71234000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "8f0d4285-f30c-405a-acb8-0ed7b6dcc12e",
            disid: "6",
            name: "Сладковский р-н",
            okato: "71236000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "59a4e5e7-c1e3-4eb3-91c2-fc96223823be",
            disid: "6",
            name: "Сорокинский р-н",
            okato: "71238000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "6d7c3e9e-8d6d-490a-a650-8257dbf5ec36",
            disid: "6",
            name: "Тобольск г",
            okato: "71410000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "eb634e42-3461-4eb2-9514-64e91308ea9b",
            disid: "6",
            name: "Тобольский р-н",
            okato: "71242000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "04e7dde6-8500-4c9f-8e4b-e770fbbed01a",
            disid: "6",
            name: "Тюменский р-н",
            okato: "71244000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "9ae64229-9f7b-4149-b27a-d1f6ec74b5ce",
            disid: "6",
            name: "Тюмень г",
            okato: "71401000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "53e1629b-c424-4b26-afd1-145f594d6a5a",
            disid: "6",
            name: "Уватский р-н",
            okato: "71248000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "2990ba30-54ac-4286-b77b-ede89cac27ef",
            disid: "6",
            name: "Упоровский р-н",
            okato: "71250000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "d76f6f46-83f1-436f-b50c-c85defbb72e0",
            disid: "6",
            name: "Юргинский р-н",
            okato: "71253000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "499389ff-31b0-453f-baec-e0b3588724b4",
            disid: "6",
            name: "Ялуторовский р-н",
            okato: "71256000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "348bbd3e-a03d-4a1e-88dd-716323dbb14d",
            disid: "6",
            name: "Ярковский р-н",
            okato: "71258000000",
            parentguid: "54049357-326d-4b8f-b224-3c6dc25d6dd3",
            regioncode: "72"
        }, {
            aoguid: "9ca18452-faef-4384-bd68-c75ea146c7e6",
            disid: "6",
            name: "Белоярский р-н",
            okato: "71111000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "db0b028c-2da0-4fb9-af00-6fed7a7644a0",
            disid: "6",
            name: "Белоярский г",
            okato: "71181000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "24afa530-5930-4641-8c9e-100ff76ed811",
            disid: "6",
            name: "Березовский р-н",
            okato: "71112000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "5a08166f-cfaa-4e95-8233-f0d473883bd3",
            disid: "6",
            name: "Когалым г",
            okato: "71183000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "124f75bd-9009-4d58-b883-ac3da0c02dd6",
            disid: "6",
            name: "Кондинский р-н",
            okato: "71116000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "149e651b-5dd3-480f-a372-5174576609f6",
            disid: "6",
            name: "Лангепас г",
            okato: "71132000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "d9c157ca-fd05-4efc-ae0c-16927612a0c8",
            disid: "6",
            name: "Мегион г",
            okato: "71133000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "45906532-143b-48c2-9af3-f480dc19c7bf",
            disid: "6",
            name: "Нефтеюганск г",
            okato: "71134000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "30ea4550-5e9f-460e-9ec0-39cc2c8d03df",
            disid: "6",
            name: "Нефтеюганский р-н",
            okato: "71118000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "0bf0f4ed-13f8-446e-82f6-325498808076",
            disid: "6",
            name: "Нижневартовск г",
            okato: "71135000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "078af68d-30b5-4be3-8983-ca6c7c6425be",
            disid: "6",
            name: "Нижневартовский р-н",
            okato: "71119000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "06157075-a993-404d-b940-0a103131dc66",
            disid: "6",
            name: "Нягань г",
            okato: "71139000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "b9e0dc80-f2f0-49b2-addc-7159ff4091cc",
            disid: "6",
            name: "Октябрьский р-н",
            okato: "71121000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "8bac4b94-1d16-42b5-b5c6-211aa52f3216",
            disid: "6",
            name: "Покачи г",
            okato: "71184000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "130857a0-7059-4f18-9a13-c17ef6c4f9ca",
            disid: "6",
            name: "Пыть-Ях г",
            okato: "71185000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "394a840f-9502-406f-a8be-3a2aa9e8f075",
            disid: "6",
            name: "Радужный г",
            okato: "71137000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "8c62b962-58d5-42b2-a29c-710706b01bb3",
            disid: "6",
            name: "Советский р-н",
            okato: "71124000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "f1eb1809-47d4-4f0b-9a74-fa416e9d3df2",
            disid: "6",
            name: "Сургут г",
            okato: "71136000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "28bca73b-31f9-45c3-acb6-c4c11f038a6d",
            disid: "6",
            name: "Сургутский р-н",
            okato: "71126000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "610abc14-c127-4d7c-8697-31cb5c7c47f2",
            disid: "6",
            name: "Урай г",
            okato: "71138000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "d680d1a9-ff89-42c0-b39f-143d2ffb520a",
            disid: "6",
            name: "Ханты-Мансийск г",
            okato: "71131000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "5d0b444b-6bd9-43f9-b8ee-170f4bc5550a",
            disid: "6",
            name: "Ханты-Мансийский р-н",
            okato: "71129000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "abb05e81-bd8b-4e44-abf7-384c9eba3407",
            disid: "6",
            name: "Югорск г",
            okato: "71187000000",
            parentguid: "d66e5325-3a25-4d29-ba86-4ca351d9704b",
            regioncode: "86"
        }, {
            aoguid: "8bfe5490-71dc-4ce5-8347-813e702b11b1",
            disid: "6",
            name: "Агаповский р-н",
            okato: "75203000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "627bec6f-93df-4093-ba12-d4a1e5c2ca35",
            disid: "6",
            name: "Аргаяшский р-н",
            okato: "75206000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "effa458e-7467-45fc-a55b-9b23fd8d0386",
            disid: "6",
            name: "Ашинский р-н",
            okato: "75209000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "1891c2bd-bc60-47ed-9576-5c3ec130fe9f",
            disid: "6",
            name: "Брединский р-н",
            okato: "75212000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "ae410050-1e1e-42f8-8408-7f49c5266243",
            disid: "6",
            name: "Варненский р-н",
            okato: "75214820000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "7e845772-7840-49cd-b661-0c4f244a1876",
            disid: "6",
            name: "Верхнеуральский р-н",
            okato: "75217000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "03aa453a-c7d6-4567-9a59-34a9e9cc1eac",
            disid: "6",
            name: "Верхний Уфалей г",
            okato: "75406000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "2555e789-ca58-4f66-be8e-265a2bc96d19",
            disid: "6",
            name: "Еманжелинский р-н",
            okato: "75219000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "6c5df047-57d4-4cb4-99c9-25029941e282",
            disid: "6",
            name: "Еткульский р-н",
            okato: "75220000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "110c731e-d72b-4c37-91cb-03ce33d9e727",
            disid: "6",
            name: "Златоуст г",
            okato: "75412000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "dbca0fdd-89a6-43ad-9bd0-9796236917d7",
            disid: "6",
            name: "Карабаш г",
            okato: "75415000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "8f89e145-40c2-4077-9fba-46c0d9ffc378",
            disid: "6",
            name: "Карталинский р-н",
            okato: "75223000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "ad22d3aa-9a40-442a-8565-824017aa30bc",
            disid: "6",
            name: "Каслинский р-н",
            okato: "75226000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "9c308da7-ae91-458e-a2d5-789673322d43",
            disid: "6",
            name: "Катав-Ивановский р-н",
            okato: "75229000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "7792fbc0-c36c-413b-adb2-0c9584187343",
            disid: "6",
            name: "Кизильский р-н",
            okato: "75232000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "69462f61-d1da-4e61-a970-3b71c6623002",
            disid: "6",
            name: "Копейск г",
            okato: "75428000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "ab02da2d-ff0d-4bff-b27c-c921adee2a33",
            disid: "6",
            name: "Коркинский р-н",
            okato: "75233000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "c3ac5bd6-9b5b-4f3e-8cfb-6cf7aefecbff",
            disid: "6",
            name: "Красноармейский р-н",
            okato: "75234000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "f20e1306-5231-42ea-b517-8200c7709e42",
            disid: "6",
            name: "Кунашакский р-н",
            okato: "75236000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "9196e097-bafb-454c-bd1e-82cc9d28da83",
            disid: "6",
            name: "Кусинский р-н",
            okato: "75238000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "969d3bb6-4d8e-4130-902b-b70571090302",
            disid: "6",
            name: "Кыштым г",
            okato: "75434000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "988157bf-d6d5-4c2a-80ec-4ad531eea056",
            disid: "6",
            name: "Магнитогорск г",
            okato: "75438000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "f2976e80-32e1-4284-8eda-06cf19239cd1",
            disid: "6",
            name: "Миасс г",
            okato: "75442000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "3c8b557d-4165-490a-aca2-2d53ee151c06",
            disid: "6",
            name: "Нагайбакский р-н",
            okato: "75242000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "83b2d394-31ce-49ce-a56e-b23db89fbf7d",
            disid: "6",
            name: "Нязепетровский р-н",
            okato: "75244000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "8192c863-edbf-4825-8523-0612ae80e5a7",
            disid: "6",
            name: "Озерск г",
            okato: "75543000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "e64b15ca-8a0b-4781-875b-ed5c196856cc",
            disid: "6",
            name: "Октябрьский р-н",
            okato: "75247000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "d75aead6-df89-45af-9d70-557e2eafe0bb",
            disid: "6",
            name: "Пластовский р-н",
            okato: "75248000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "131fd5da-8f48-4938-9248-830c11a3cf45",
            disid: "6",
            name: "Саткинский р-н",
            okato: "75249000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "08aad8a8-0067-4161-8389-b75d1da72866",
            disid: "6",
            name: "Снежинск г",
            okato: "75545000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "96310529-d09c-4e5c-8fab-68d02bd0ee6b",
            disid: "6",
            name: "Сосновский р-н",
            okato: "75252000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "097d2fcb-d22a-4fbd-89bf-27950b7116a3",
            disid: "6",
            name: "Трехгорный г",
            okato: "75507000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "c34f9871-d934-4be7-be82-59f42a794068",
            disid: "6",
            name: "Трехгорный-1 г",
            okato: "75507000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "b5ad78c2-cc8f-4769-9a9f-75743d8da02f",
            disid: "6",
            name: "Троицк г",
            okato: "75452000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "ec721b93-6741-405d-9123-da57a56e7d65",
            disid: "6",
            name: "Троицкий р-н",
            okato: "75254000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "20237a62-ee8b-4b03-857b-a4bd67d64360",
            disid: "6",
            name: "Увельский р-н",
            okato: "75255000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "972b07ed-c0f1-4439-a037-16eea177c983",
            disid: "6",
            name: "Уйский р-н",
            okato: "75256000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "327f11c6-474f-44f9-aff3-8ba1780fcaf0",
            disid: "6",
            name: "Усть-Катав г",
            okato: "75455000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "1fe59b79-b019-45d7-bfd9-03b3b2d49cb6",
            disid: "6",
            name: "Чебаркуль г",
            okato: "75458000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "e513df47-6932-4101-b4f8-fb38aadd9199",
            disid: "6",
            name: "Чебаркульский р-н",
            okato: "75257000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "a376e68d-724a-4472-be7c-891bdb09ae32",
            disid: "6",
            name: "Челябинск г",
            okato: "75401000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "f530b937-a760-4270-8796-1d09daf7bbd5",
            disid: "6",
            name: "Чесменский р-н",
            okato: "75259000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "2ac904d8-365e-4f49-8ff9-f14f88609535",
            disid: "6",
            name: "Южноуральск г",
            okato: "75464000000",
            parentguid: "27eb7c10-a234-44da-a59c-8b1f864966de",
            regioncode: "74"
        }, {
            aoguid: "0cb9e3a5-20fa-4248-8c1d-b31d5ce7f691",
            disid: "6",
            name: "Губкинский г",
            okato: "71172000000",
            parentguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
            regioncode: "89"
        }, {
            aoguid: "a545ad63-efd8-4b5b-b5d2-931167c088b4",
            disid: "6",
            name: "Красноселькупский р-н",
            okato: "71153000000",
            parentguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
            regioncode: "89"
        }, {
            aoguid: "6552fa92-269f-4b6a-bee5-fe9204463d99",
            disid: "6",
            name: "Лабытнанги г",
            okato: "71173000000",
            parentguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
            regioncode: "89"
        }, {
            aoguid: "9d4ebe8d-29d8-4ddc-882d-75a5c5aec652",
            disid: "6",
            name: "Муравленко г",
            okato: "71175000000",
            parentguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
            regioncode: "89"
        }, {
            aoguid: "24a3f6a2-5994-4ede-90d4-dc7fe64418b8",
            disid: "6",
            name: "Надым г",
            okato: "71174000000",
            parentguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
            regioncode: "89"
        }, {
            aoguid: "c475d200-223d-4fcb-a69a-65ba2ef34310",
            disid: "6",
            name: "Надымский р-н",
            okato: "71156000000",
            parentguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
            regioncode: "89"
        }, {
            aoguid: "4136d0c1-3ff7-44c0-aa30-fa2e7eb96ef7",
            disid: "6",
            name: "Новый Уренгой г",
            okato: "71176000000",
            parentguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
            regioncode: "89"
        }, {
            aoguid: "131c6e49-9bc5-484d-b65a-ee7f5d250418",
            disid: "6",
            name: "Ноябрьск г",
            okato: "71178000000",
            parentguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
            regioncode: "89"
        }, {
            aoguid: "3cf50f45-7152-4645-ae93-73bdeae7fe66",
            disid: "6",
            name: "Приуральский р-н",
            okato: "71158000000",
            parentguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
            regioncode: "89"
        }, {
            aoguid: "625bf498-761d-45b0-af99-2c099abd693c",
            disid: "6",
            name: "Пуровский р-н",
            okato: "71160000000",
            parentguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
            regioncode: "89"
        }, {
            aoguid: "0c1b7f05-9fd9-4ec9-a2cc-5ee2799be1e6",
            disid: "6",
            name: "Салехард г",
            okato: "71171000000",
            parentguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
            regioncode: "89"
        }, {
            aoguid: "384d7005-86d0-4dc7-a3dc-b8e648265cec",
            disid: "6",
            name: "Тазовский р-н",
            okato: "71163000000",
            parentguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
            regioncode: "89"
        }, {
            aoguid: "8bbd9908-4b29-4183-8e6b-615c11b7a160",
            disid: "6",
            name: "Шурышкарский р-н",
            okato: "71166000000",
            parentguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
            regioncode: "89"
        }, {
            aoguid: "34131f0d-4fdd-4781-a2b0-e8baba6de6c4",
            disid: "6",
            name: "Ямальский р-н",
            okato: "71168000000",
            parentguid: "826fa834-3ee8-404f-bdbc-13a5221cfb6e",
            regioncode: "89"
        }, {
            aoguid: "7d6fd7bf-4c2e-4c29-b8a1-5378329b6a55",
            disid: "7",
            name: "Абзелиловский р-н",
            okato: "80201000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "8294b97c-7553-499e-8369-821d6eb0fdc7",
            disid: "7",
            name: "Агидель г",
            okato: "80403000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "cf1f02f7-38b9-4080-9853-dc3d6dbde466",
            disid: "7",
            name: "Альшеевский р-н",
            okato: "80202000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "5ab4ee03-1e5a-46a9-954f-5d7e958a6b62",
            disid: "7",
            name: "Амзинский с/с",
            okato: "80427801000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "8ed81c04-51b8-4414-8854-b8a86495fbbe",
            disid: "7",
            name: "Архангельский р-н",
            okato: "80203000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "993701c9-2100-48ef-8b83-1167e82df13f",
            disid: "7",
            name: "Аскинский р-н",
            okato: "80204000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "53056d1c-5c65-43e8-be8e-8edf32480797",
            disid: "7",
            name: "Аургазинский р-н",
            okato: "80205000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "7219bc01-42ce-4145-b4df-f5cb52559ed9",
            disid: "7",
            name: "Баймакский р-н",
            okato: "80206000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "7013d01d-9901-4771-aae2-86a8e5bc0c1d",
            disid: "7",
            name: "Бакалинский р-н",
            okato: "80207000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "4f8b8ac5-57d4-45a0-b198-3b2ad4aca567",
            disid: "7",
            name: "Балтачевский р-н",
            okato: "80208000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "4295ec00-1d3f-475b-8f7f-bb8615aeff51",
            disid: "7",
            name: "Белебеевский р-н",
            okato: "80209000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "069539de-a915-407d-9fc5-cfb3dfc63ea1",
            disid: "7",
            name: "Белокатайский р-н",
            okato: "80210000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "041ebde9-5f12-44e5-9e5d-32769ba01152",
            disid: "7",
            name: "Белорецкий р-н",
            okato: "80211000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "eaab893f-69e2-4a0c-9072-64f12c762198",
            disid: "7",
            name: "Бижбулякский р-н",
            okato: "80212000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "8eedd54c-c120-482a-83e0-22493f5b99ed",
            disid: "7",
            name: "Бирский р-н",
            okato: "80213000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "cdb365a8-d39a-4a1a-b6e0-613de6568103",
            disid: "7",
            name: "Благоварский р-н",
            okato: "80214000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "7f7d82dc-aa80-49a3-8502-0e3c43b35072",
            disid: "7",
            name: "Благовещенский р-н",
            okato: "80215000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "70559264-5721-4068-8082-e2dd3a243ec5",
            disid: "7",
            name: "Буздякский р-н",
            okato: "80217000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "520ff119-2bd5-4dec-97bc-f1eb10a8e1e0",
            disid: "7",
            name: "Бураевский р-н",
            okato: "80218000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "44a392aa-7527-4212-aaa4-47a66488967f",
            disid: "7",
            name: "Бурзянский р-н",
            okato: "80219000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "d6ecdf76-8449-47d2-ab0b-999e05f1b90d",
            disid: "7",
            name: "Гафурийский р-н",
            okato: "80221000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "e09975c6-2ac9-4497-8ac8-0ffeb1e0b1b9",
            disid: "7",
            name: "Давлекановский р-н",
            okato: "80222000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "e81a2a31-e59a-4f18-a302-61ce3b1e967d",
            disid: "7",
            name: "Дуванский р-н",
            okato: "80223000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "e86924f2-1ff1-4225-aa0e-20378760920f",
            disid: "7",
            name: "Дюртюлинский р-н",
            okato: "80224000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "1e33b1e9-76bf-4c0e-b075-f9ee108cf68c",
            disid: "7",
            name: "Ермекеевский р-н",
            okato: "80225000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "024c5ff7-f022-4304-a872-2582b880cdc2",
            disid: "7",
            name: "Зианчуринский р-н",
            okato: "80226000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "459ff8e7-b9fa-4f8e-b6b2-df928647f4f4",
            disid: "7",
            name: "Зилаирский р-н",
            okato: "80227000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "c5e868de-943c-4c4a-a4ad-8e50471e1e0d",
            disid: "7",
            name: "Иглинский р-н",
            okato: "80228000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "fdb8e762-1223-4047-93a7-701e1db62d52",
            disid: "7",
            name: "Илишевский р-н",
            okato: "80230000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "be9ac91f-b826-4ca1-8c21-4ce1c9935180",
            disid: "7",
            name: "Ишимбайский р-н",
            okato: "80231000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "ceba8f54-7389-4582-af60-56b18aa7689d",
            disid: "7",
            name: "Калтасинский р-н",
            okato: "80233000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "58e4f3d4-a14b-4ab9-a1b9-b701f2c0cc53",
            disid: "7",
            name: "Караидельский р-н",
            okato: "80234000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "857964ad-5ddd-4a9c-8d56-7a5f89d6da52",
            disid: "7",
            name: "Кармаскалинский р-н",
            okato: "80235000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "09e76d1b-4ac2-49f8-b00c-df50dcba792a",
            disid: "7",
            name: "Кигинский р-н",
            okato: "80236000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "c278cbbc-e209-4b0f-b20e-9c19ed6f6802",
            disid: "7",
            name: "Краснокамский р-н",
            okato: "80237000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "41896340-7227-42cc-aa7e-928acd33bac9",
            disid: "7",
            name: "Кугарчинский р-н",
            okato: "80238000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "48e38991-07fd-4aaa-b240-a7280e4a823f",
            disid: "7",
            name: "Кумертау г",
            okato: "80423000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "cde68605-1ca7-4238-8f85-4c68ce84b362",
            disid: "7",
            name: "Кушнаренковский р-н",
            okato: "80240000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "93192537-d4cb-4d65-8201-8a1877bdb61d",
            disid: "7",
            name: "Куюргазинский р-н",
            okato: "80239000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "d7287fc5-26f4-46f1-8d96-1ce9e83713b8",
            disid: "7",
            name: "Маячинский с/с",
            okato: "80423804000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "5fd3a551-8553-4571-bfc8-2bfb211686f5",
            disid: "7",
            name: "Межгорье г",
            okato: "80507000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "a04fc116-04ac-477f-8f4b-08b7159280fc",
            disid: "7",
            name: "Мелеузовский р-н",
            okato: "80241000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "5a8996da-151b-4822-a1f4-d02621032b43",
            disid: "7",
            name: "Мечетлинский р-н",
            okato: "80242000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "584f5bb8-c138-48be-9047-acdc382eaea7",
            disid: "7",
            name: "Мишкинский р-н",
            okato: "80243000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "73add7b8-bdf7-4ffa-9808-63c0ec0472c1",
            disid: "7",
            name: "Миякинский р-н",
            okato: "80244000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "2c9997d2-ce94-431a-96c9-722d2238d5c8",
            disid: "7",
            name: "Нефтекамск г",
            okato: "80427000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "40082af6-f7ec-4a32-a356-7b90e3edc707",
            disid: "7",
            name: "Нуримановский р-н",
            okato: "80245000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "abd1bc35-ec51-437a-abee-76a4f620f662",
            disid: "7",
            name: "Октябрьский г",
            okato: "80435000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "137157a2-6c67-4fe5-90ea-ad680011a742",
            disid: "7",
            name: "Подгорный с/с",
            okato: "80423805000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "fc14353f-5a1d-4f22-94ea-b900bad9a9f1",
            disid: "7",
            name: "Салават г",
            okato: "80439000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "912fa357-c695-4e97-ae65-4f2e942cb054",
            disid: "7",
            name: "Салаватский р-н",
            okato: "80247000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "d7825646-76f7-4322-a88c-42cc90cbd2b2",
            disid: "7",
            name: "Сибай г",
            okato: "80443000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "0df26c3f-f2b6-43b3-a152-538443f18ae7",
            disid: "7",
            name: "Стерлибашевский р-н",
            okato: "80248000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "84e0b23d-82fe-40a8-8739-55e679780dc3",
            disid: "7",
            name: "Стерлитамак г",
            okato: "80445000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "450ce765-f993-4ceb-95e3-f11c6fd35778",
            disid: "7",
            name: "Стерлитамакский р-н",
            okato: "80249000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "72a1f943-170b-4dde-bcaf-0b0cc04c7006",
            disid: "7",
            name: "Татышлинский р-н",
            okato: "80250000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "98c6d232-9f0d-4458-aff4-b5d08b98c5b2",
            disid: "7",
            name: "Ташкиновский с/с",
            okato: "80427807000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "7b3a5287-6175-4172-a3ae-93cf447d61a8",
            disid: "7",
            name: "Туймазинский р-н",
            okato: "80251000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "713fc5e4-1723-474d-926e-92694862164e",
            disid: "7",
            name: "Туялясский с/с",
            okato: "80443820000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "7339e834-2cb4-4734-a4c7-1fca2c66e562",
            disid: "7",
            name: "Уфа г",
            okato: "80401000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "c7a81174-8d01-4ae6-83e6-386ae23ee629",
            disid: "7",
            name: "Уфимский р-н",
            okato: "80252000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "d5199d40-c4ca-44cb-9a76-90704cfb261f",
            disid: "7",
            name: "Учалинский р-н",
            okato: "80253000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "20ea0299-9cb6-495a-899f-7f456a4a62a5",
            disid: "7",
            name: "Федоровский р-н",
            okato: "80254000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "49c19c7e-8a32-4a58-a84a-c73a9e06fd47",
            disid: "7",
            name: "Хайбуллинский р-н",
            okato: "80255000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "9b1c39ec-7457-4b33-b8aa-415f73f3cfc9",
            disid: "7",
            name: "Чекмагушевский р-н",
            okato: "80256000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "a3a5b457-d5d4-48d1-9d60-9647c14a9411",
            disid: "7",
            name: "Чишминский р-н",
            okato: "80257000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "6d49dc29-d059-4bb8-ba2b-d8ffddda4eac",
            disid: "7",
            name: "Шаранский р-н",
            okato: "80258000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "b04a09c5-15fc-4b61-bb64-ff2a37cf72d1",
            disid: "7",
            name: "Янаульский р-н",
            okato: "80259000000",
            parentguid: "6f2cbfd8-692a-4ee4-9b16-067210bde3fc",
            regioncode: "02"
        }, {
            aoguid: "af07556a-bf18-492d-8001-12f1e2be56b6",
            disid: "7",
            name: "Арбажский р-н",
            okato: "33202000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "9e825622-fe80-44af-a148-fc09ef8fdf0d",
            disid: "7",
            name: "Афанасьевский р-н",
            okato: "33203000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "2c5bfe86-653d-4b71-8b17-20c05dca6760",
            disid: "7",
            name: "Белохолуницкий р-н",
            okato: "33205000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "a8633243-2c2a-4e50-bc5a-a0b0855fc1a0",
            disid: "7",
            name: "Богородский р-н",
            okato: "33206000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "42178bc4-d883-413a-b2dd-ac3ff81191ed",
            disid: "7",
            name: "Верхнекамский р-н",
            okato: "33207000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "8f14c998-f5dc-4fd5-b833-b8af4c145130",
            disid: "7",
            name: "Верхошижемский р-н",
            okato: "33208000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "f2332b74-1ac0-4521-bb30-23e021b4d7d4",
            disid: "7",
            name: "Вятскополянский р-н",
            okato: "33210000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "69e82493-4f43-422a-ae26-4fdb52f9ea53",
            disid: "7",
            name: "Даровской р-н",
            okato: "33212000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "36a3783a-97c4-4314-8c9b-592cd1580639",
            disid: "7",
            name: "Зуевский р-н",
            okato: "33214000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "4e3f7664-90ff-46aa-8a34-4c11da65d209",
            disid: "7",
            name: "Кикнурский р-н",
            okato: "33216000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "87fb54fc-7a77-42fc-9619-0cbd5db497e6",
            disid: "7",
            name: "Кильмезский р-н",
            okato: "33217000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "452a2ddf-88a1-4e35-8d8d-8635493768d4",
            disid: "7",
            name: "Киров г",
            okato: "33401000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "4c085ad8-7f47-4a13-900b-31bb38b9e04a",
            disid: "7",
            name: "Кирово-Чепецкий р-н",
            okato: "33218000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "3881d5fb-efc9-4e81-852d-fb5619a42d77",
            disid: "7",
            name: "Котельничский р-н",
            okato: "33219000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "37b605b8-502e-42b8-9485-73b4aae2821f",
            disid: "7",
            name: "Куменский р-н",
            okato: "33220000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "326d554a-9045-4357-b85f-7712de3f258c",
            disid: "7",
            name: "Лебяжский р-н",
            okato: "33221000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "7a6d116e-9488-4487-b6bc-53c9518fb8a5",
            disid: "7",
            name: "Лузский р-н",
            okato: "33222000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "8c7f2978-d7b8-4f51-9197-59fb5eb89b92",
            disid: "7",
            name: "Малмыжский р-н",
            okato: "33223000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "2f095c16-e5f0-4084-8312-84c6db585d36",
            disid: "7",
            name: "Мурашинский р-н",
            okato: "33224000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "e0cee65b-28fe-4182-a659-eab3daf112bb",
            disid: "7",
            name: "Нагорский р-н",
            okato: "33225000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "f73b4278-3614-489e-a518-51a7b97c3c3f",
            disid: "7",
            name: "Немский р-н",
            okato: "33226000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "b602b524-2be7-40eb-b8f1-933dc182af06",
            disid: "7",
            name: "Нолинский р-н",
            okato: "33227000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "fbfb0f68-aa1c-414e-8c0f-cb548b87ee17",
            disid: "7",
            name: "Омутнинский р-н",
            okato: "33228000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "aa99e061-3344-4741-8211-ca5e5ca97381",
            disid: "7",
            name: "Опаринский р-н",
            okato: "33229000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "6be4579d-f010-483f-8621-881ccaa8fb8f",
            disid: "7",
            name: "Оричевский р-н",
            okato: "33230000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "4b27f8d0-7b29-42db-8edc-9fc5f81d898a",
            disid: "7",
            name: "Орловский р-н",
            okato: "33245000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "81ec0cd1-a343-4ef7-8613-1a70d542d099",
            disid: "7",
            name: "Первомайский пгт",
            okato: "33587000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "e8cd8393-c28e-4b93-b549-4bb332c770f3",
            disid: "7",
            name: "Пижанский р-н",
            okato: "33231000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "cc9dd913-03b4-49a5-aa15-85bccf4e0624",
            disid: "7",
            name: "Подосиновский р-н",
            okato: "33232000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "ca8ea252-b59f-422e-b2e2-4b52007d8665",
            disid: "7",
            name: "Санчурский р-н",
            okato: "33233000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "d339159f-59d6-46a2-a9ab-a17aea0f6065",
            disid: "7",
            name: "Свечинский р-н",
            okato: "33234000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "810f29aa-6af6-47e9-b611-c99f7127af52",
            disid: "7",
            name: "Слободской р-н",
            okato: "33235000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "de0dd6d1-8973-4df7-8c48-f1d5e32593cf",
            disid: "7",
            name: "Советский р-н",
            okato: "33236000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "d636d891-073f-4e8e-9f8e-2848224225f6",
            disid: "7",
            name: "Сунский р-н",
            okato: "33237000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "72e72027-ac2b-4606-99b3-3b76051cb72c",
            disid: "7",
            name: "Тужинский р-н",
            okato: "33238000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "59cbbc52-f27e-4eff-b719-88ceb2d5ad7c",
            disid: "7",
            name: "Унинский р-н",
            okato: "33240000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "2bdb4532-74ec-4088-92ba-6a1b7a26787d",
            disid: "7",
            name: "Уржумский р-н",
            okato: "33241000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "6e77a05a-eb5a-475b-9edc-7243e97b6c72",
            disid: "7",
            name: "Фаленский р-н",
            okato: "33243000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "87bfb795-2ddb-49b0-9eea-7ebc20efc257",
            disid: "7",
            name: "Шабалинский р-н",
            okato: "33247000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "b8ad3d0b-debb-405f-afed-80cff695b9f2",
            disid: "7",
            name: "Юрьянский р-н",
            okato: "33249000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "e42d26ff-7f1e-4cd8-98a9-20d4b14ad2f9",
            disid: "7",
            name: "Яранский р-н",
            okato: "33250000000",
            parentguid: "0b940b96-103f-4248-850c-26b6c7296728",
            regioncode: "43"
        }, {
            aoguid: "f183b079-b65f-4781-9b79-310ba29b724d",
            disid: "7",
            name: "Волжск г",
            okato: "88405000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "d4e29be0-2140-4d7a-8ad5-9433bb6bbe69",
            disid: "7",
            name: "Волжский р-н",
            okato: "88204000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "8310171a-2403-4c28-b4da-5bee78aa0c88",
            disid: "7",
            name: "Горномарийский р-н",
            okato: "88208000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "548b182f-9531-413e-b86b-0bd8b65d10b7",
            disid: "7",
            name: "Звениговский р-н",
            okato: "88212000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "0648e41c-a09b-4eac-91cd-8cf61b9ccb7b",
            disid: "7",
            name: "Йошкар-Ола г",
            okato: "88401000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "53aaae62-e0ab-4478-86f0-48b37a7b8004",
            disid: "7",
            name: "Килемарский р-н",
            okato: "88216000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "70f9ed24-8b25-4688-857f-a337710d4825",
            disid: "7",
            name: "Козьмодемьянск г",
            okato: "88415000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "68a1fffd-fa7c-4f11-ad7d-19ab947b0989",
            disid: "7",
            name: "Куженерский р-н",
            okato: "88220000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "e1bb586e-7689-411e-85f6-3caf9038dfa2",
            disid: "7",
            name: "Мари-Турекский р-н",
            okato: "88224000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "d243296d-ac02-465c-b4cb-be8b6f5ebc98",
            disid: "7",
            name: "Медведевский р-н",
            okato: "88228000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "074d51f2-fb1c-424f-b26e-ccf779678b4d",
            disid: "7",
            name: "Моркинский р-н",
            okato: "88232000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "1081e14e-2da6-425e-981b-8a7d4f985be6",
            disid: "7",
            name: "Новоторъяльский р-н",
            okato: "88236000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "82753382-a297-4117-a849-e0ab7879f83d",
            disid: "7",
            name: "Оршанский р-н",
            okato: "88240000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "bde8b8f9-636d-48ef-90c4-39597bf63e0d",
            disid: "7",
            name: "Параньгинский р-н",
            okato: "88244000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "ba569589-d1fb-4b2e-87fd-04dcc8127663",
            disid: "7",
            name: "Сернурский р-н",
            okato: "88248000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "3da7739a-7828-4a45-8a27-817db08c87b3",
            disid: "7",
            name: "Советский р-н",
            okato: "88252000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "31567fd2-938f-4e74-8570-3298f2e046fe",
            disid: "7",
            name: "Юринский р-н",
            okato: "88256000000",
            parentguid: "de2cbfdf-9662-44a4-a4a4-8ad237ae4a3e",
            regioncode: "12"
        }, {
            aoguid: "ac121487-bbc4-4176-b6ef-32993324fadc",
            disid: "7",
            name: "Ардатовский р-н",
            okato: "89203000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "20d20dce-6c1e-4cf2-b49c-88fd4b6121e3",
            disid: "7",
            name: "Атюрьевский р-н",
            okato: "89205000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "c2fb903b-6dbd-45f1-a71d-717c193a2fd4",
            disid: "7",
            name: "Атяшевский р-н",
            okato: "89207000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "9bcd8d19-9dbf-43c7-b11e-772d3bd74ccf",
            disid: "7",
            name: "Большеберезниковский р-н",
            okato: "89210000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "abfd339d-4c84-4066-9fd0-f9dba6cf859a",
            disid: "7",
            name: "Большеигнатовский р-н",
            okato: "89213000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "4167af83-7c93-4139-9d7e-abd23f65cd1e",
            disid: "7",
            name: "Дубенский р-н",
            okato: "89216000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "644cd9a2-2c0d-449f-9309-f8a21c6f1352",
            disid: "7",
            name: "Ельниковский р-н",
            okato: "89218000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "98c46582-79db-4a69-83b4-4166cd253796",
            disid: "7",
            name: "Зубово-Полянский р-н",
            okato: "89221000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "1535c9f6-da89-4bd1-a600-fcaccb3e12a0",
            disid: "7",
            name: "Инсарский р-н",
            okato: "89224000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "54a9fbcb-f51c-43ef-bac4-9a319ef80848",
            disid: "7",
            name: "Ичалковский р-н",
            okato: "89226000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "76d0133e-b008-4dc7-a179-48bd6537001d",
            disid: "7",
            name: "Кадошкинский р-н",
            okato: "89228000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "d58bb3c2-fcc2-4aeb-8696-fe04a0f30e84",
            disid: "7",
            name: "Ковылкинский р-н",
            okato: "89229000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "5a75dd3f-bc80-49af-b92b-12c0df0996cb",
            disid: "7",
            name: "Кочкуровский р-н",
            okato: "89231000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "1775ca79-4f49-47d1-abbe-f483aadaff14",
            disid: "7",
            name: "Краснослободский р-н",
            okato: "89234000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "4ae92cca-1f3a-4e93-8a7f-8045d2b9b80e",
            disid: "7",
            name: "Лямбирский р-н",
            okato: "89237000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "74705ff8-b47f-4976-9eb1-5b361140de62",
            disid: "7",
            name: "Ромодановский р-н",
            okato: "89240000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "bb4b1693-5ac7-4762-b5f4-c0cb0c1f1361",
            disid: "7",
            name: "Рузаевский р-н",
            okato: "89243000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "1ccfdc3c-be0f-4e42-ab4d-98f90de972d9",
            disid: "7",
            name: "Саранск г",
            okato: "89401000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "3340702a-2f9f-4c21-aca5-67cc5b7d5d4a",
            disid: "7",
            name: "Старошайговский р-н",
            okato: "89246000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "f443c4ff-e8b8-43a5-8eb4-cef78367e9c6",
            disid: "7",
            name: "Темниковский р-н",
            okato: "89249000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "97cc3be1-b788-4fad-8df6-f1278b4367e5",
            disid: "7",
            name: "Теньгушевский р-н",
            okato: "89251000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "38034e7d-f878-4066-a49c-02292d7c94a2",
            disid: "7",
            name: "Торбеевский р-н",
            okato: "89254000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "6a15cbf7-544a-497a-8d24-0ea0d45dbc40",
            disid: "7",
            name: "Чамзинский р-н",
            okato: "89257000000",
            parentguid: "37a0c60a-9240-48b5-a87f-0d8c86cdb6e1",
            regioncode: "13"
        }, {
            aoguid: "dab8ebdf-5f74-480a-809e-fca52235ceef",
            disid: "7",
            name: "Ардатовский р-н",
            okato: "22202000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "7e42f157-87d6-4111-a406-17432e814723",
            disid: "7",
            name: "Арзамас г",
            okato: "22403000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "b2c3dd21-e653-4e04-8551-eaa3fb996f62",
            disid: "7",
            name: "Арзамасский р-н",
            okato: "22203000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "7e39f886-da1d-41ae-a4cf-52b588024bd4",
            disid: "7",
            name: "Балахнинский р-н",
            okato: "22205000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "fa0d2b5b-a614-41cd-92b9-555da9ca46b8",
            disid: "7",
            name: "Богородский р-н",
            okato: "22207000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "948a3c29-a387-4dd3-a9b6-8d39d5f4a7a7",
            disid: "7",
            name: "Большеболдинский р-н",
            okato: "22209000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "172cf232-35d8-4893-9455-c18d7a4e7cbe",
            disid: "7",
            name: "Большемурашкинский р-н",
            okato: "22210000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "e736e903-6bc3-450b-b8af-7909213dc9ef",
            disid: "7",
            name: "Бор г",
            okato: "22412000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "9e5fa78f-646c-4f51-9708-7d08bbbda1f6",
            disid: "7",
            name: "Борский р-н",
            okato: "22211000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "6ca8b9be-573c-4f46-81bf-0a80a02d7faf",
            disid: "7",
            name: "Бутурлинский р-н",
            okato: "22212000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "f094d1fd-709b-4d74-8ad9-3bd85c05ae6f",
            disid: "7",
            name: "Вадский р-н",
            okato: "22214000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "817d83ad-3fca-4ebb-8d5d-1ebb3808bd3f",
            disid: "7",
            name: "Варнавинский р-н",
            okato: "22215000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "7fb15ef9-7a81-401a-81ef-4d46f0582983",
            disid: "7",
            name: "Вачский р-н",
            okato: "22217000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "e63ddab7-4af7-49ce-b229-484c5b70eab9",
            disid: "7",
            name: "Ветлужский р-н",
            okato: "22218000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "151e7b90-3ffd-4ab7-a64a-088b79fa2bef",
            disid: "7",
            name: "Вознесенский р-н",
            okato: "22219000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "28aa39a2-9d75-407f-b015-cc778d79f293",
            disid: "7",
            name: "Володарский р-н",
            okato: "22231000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "ade15287-f6ff-42d2-9a77-34015f62e812",
            disid: "7",
            name: "Воротынский р-н",
            okato: "22221000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "69497db6-ad81-4d6b-9f61-2f5abe92be16",
            disid: "7",
            name: "Воскресенский р-н",
            okato: "22222000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "d89942e8-e06b-46bd-a805-7cec8f77417e",
            disid: "7",
            name: "Выкса г",
            okato: "22415000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "4d3194c9-95b9-400d-b83b-5fc4ed014086",
            disid: "7",
            name: "Выксунский р-н",
            okato: "22224000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "e763b10e-27c8-4995-b39e-55823aa4ffef",
            disid: "7",
            name: "Гагинский р-н",
            okato: "22226000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "8e694803-5caf-4913-ab04-37e692792e6b",
            disid: "7",
            name: "Городецкий р-н",
            okato: "22228000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "b933ceea-dc46-4b0d-9df6-7c9d175580f8",
            disid: "7",
            name: "Дальнеконстантиновский р-н",
            okato: "22230000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "1d5a97d5-9bdf-44c9-ac42-e201833e7f28",
            disid: "7",
            name: "Дзержинск г",
            okato: "22421000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "0e8f2a8c-f27f-4889-a6cc-3351f0a2a923",
            disid: "7",
            name: "Дивеевский р-н",
            okato: "22232000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "716d1733-e7ca-452a-9a38-a682df8cfb8e",
            disid: "7",
            name: "Княгининский р-н",
            okato: "22233000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "ecaabd87-ed28-403b-b734-47abe1a919df",
            disid: "7",
            name: "Ковернинский р-н",
            okato: "22234000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "dcd0fc48-ceb9-4818-9fe4-a63d4fa55aad",
            disid: "7",
            name: "Краснобаковский р-н",
            okato: "22235551001",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "ba4799a8-7a74-4168-ba7e-a231fabc8995",
            disid: "7",
            name: "Краснооктябрьский р-н",
            okato: "22236000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "4d78cac3-3718-4bfb-bb83-9f34fac76e42",
            disid: "7",
            name: "Кстовский р-н",
            okato: "22237000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "37ac9943-a1e7-47d3-923a-00abb686cecc",
            disid: "7",
            name: "Кулебакский р-н",
            okato: "22238000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "eb787249-c038-44d7-8d87-e2977244dea2",
            disid: "7",
            name: "Лукояновский р-н",
            okato: "22239000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "2dd692c1-fc95-41a2-86a1-6a83f47914fe",
            disid: "7",
            name: "Лысковский р-н",
            okato: "22240000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "a616b7c4-5b4d-4584-beed-772805f07089",
            disid: "7",
            name: "Навашинский р-н",
            okato: "22241000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "555e7d61-d9a7-4ba6-9770-6caa8198c483",
            disid: "7",
            name: "Нижний Новгород г",
            okato: "22401000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "21cd4118-bbf0-4994-a6d6-0c20cf089ba4",
            disid: "7",
            name: "Павловский р-н",
            okato: "22242000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "098fdadd-3b60-4328-bf1d-67113278ed95",
            disid: "7",
            name: "Первомайский р-н",
            okato: "22243000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "bf70466a-3562-481a-af08-dc7f0f33851b",
            disid: "7",
            name: "Перевозский р-н",
            okato: "22244000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "b5f73d96-c7b0-45db-ba64-649a4b43a8e4",
            disid: "7",
            name: "Пильнинский р-н",
            okato: "22245000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "a09e91d5-fce0-4904-9f57-c1c5c0669bd8",
            disid: "7",
            name: "Починковский р-н",
            okato: "22246000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "be0210d1-1b58-49c1-8304-eb5ff5618fad",
            disid: "7",
            name: "Саров г",
            okato: "22503000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "dacc69b0-38df-462e-b346-26541cb9c0b8",
            disid: "7",
            name: "Семенов г",
            okato: "22437000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "699317a4-85a5-469b-b740-8dc64fdf4431",
            disid: "7",
            name: "Семеновский р-н",
            okato: "22247000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "22d4d9b6-f15f-4d2e-a183-ea4a4cc21d77",
            disid: "7",
            name: "Сергачский р-н",
            okato: "22248000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "47031f9c-c3d5-483b-a0f9-6e3db7641f76",
            disid: "7",
            name: "Сеченовский р-н",
            okato: "22249000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "a50632f1-48a4-401c-8b4c-03128aa29d97",
            disid: "7",
            name: "Сокольский р-н",
            okato: "22259000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "f57d6961-6580-4b65-8218-f51a8a0d1e58",
            disid: "7",
            name: "Сосновский р-н",
            okato: "22250000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "d6e45418-3db6-441f-9dc7-40dca8eee02c",
            disid: "7",
            name: "Спасский р-н",
            okato: "22251000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "c3b09d6c-eb7d-4e88-b7a2-353218d3be5e",
            disid: "7",
            name: "Тонкинский р-н",
            okato: "22252000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "49dee7ad-3a4f-475c-90bd-991ef920b874",
            disid: "7",
            name: "Тоншаевский р-н",
            okato: "22253000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "20a7d573-3461-484d-a0b5-cd9a12cfa7e4",
            disid: "7",
            name: "Уренский р-н",
            okato: "22254000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "d68ce670-1e96-44e6-a1e2-acfec9916edb",
            disid: "7",
            name: "Чкаловский р-н",
            okato: "22255000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "2bd4dd3d-185d-4d86-ad43-b158254c335b",
            disid: "7",
            name: "Шарангский р-н",
            okato: "22256000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "d7c2bca5-f874-4a3b-8f9e-4098737968c0",
            disid: "7",
            name: "Шатковский р-н",
            okato: "22257000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "f3800b01-0abf-48fe-b937-82f804917c4b",
            disid: "7",
            name: "Шахунский р-н",
            okato: "22258000000",
            parentguid: "88cd27e2-6a8a-4421-9718-719a28a0a088",
            regioncode: "52"
        }, {
            aoguid: "0cfa92f9-6119-4ac0-b2c9-1aafccf13707",
            disid: "7",
            name: "Абдулинский р-н",
            okato: "53203000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "83437cb6-b18a-48dc-ac28-f29e1aa00367",
            disid: "7",
            name: "Адамовский р-н",
            okato: "53204000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "1344ec81-b0f1-438d-ae38-68ab2756c403",
            disid: "7",
            name: "Акбулакский р-н",
            okato: "53205000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "ea88cdcf-2d44-4f4e-8645-60aa2f0f3e94",
            disid: "7",
            name: "Александровский р-н",
            okato: "53206000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "a6b88072-ccfa-43bc-8878-d6f3e25fb15b",
            disid: "7",
            name: "Асекеевский р-н",
            okato: "53207000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "91b728a2-0fa6-4161-89f8-40d92c7a2d54",
            disid: "7",
            name: "Беляевский р-н",
            okato: "53210000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "680f6208-865b-43b4-ab24-1f42f51d2c33",
            disid: "7",
            name: "Бугуруслан г",
            okato: "53408000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "a4d67f31-6d70-4a59-9292-ece9778f5343",
            disid: "7",
            name: "Бугурусланский р-н",
            okato: "53211000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "653b316e-d0ca-414e-9211-03a96643e91b",
            disid: "7",
            name: "Бузулук г",
            okato: "53412000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "a5b16abe-4ab5-4628-93b2-ce290a59b6dd",
            disid: "7",
            name: "Бузулукский р-н",
            okato: "53212000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "c9a3cd9e-a133-4de9-aafb-a6e0b664312c",
            disid: "7",
            name: "Гай г",
            okato: "53413000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "f074034d-610c-4148-9350-3ba745042f2c",
            disid: "7",
            name: "Гайский р-н",
            okato: "53214000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "7db05884-a4c7-4437-8bf1-3ce031006092",
            disid: "7",
            name: "Грачевский р-н",
            okato: "53215000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "eff8cf8b-e762-4b50-b310-a0496d7e1d1a",
            disid: "7",
            name: "Домбаровский р-н",
            okato: "53217000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "d9959199-705b-4ce3-9026-1144a2876f99",
            disid: "7",
            name: "Илекский р-н",
            okato: "53219000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "68eea25f-df8b-4ddc-be3b-3c9ad47a0352",
            disid: "7",
            name: "Кваркенский р-н",
            okato: "53222000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "ca007a72-2188-4f43-bb1e-ca8dc283e6ec",
            disid: "7",
            name: "Красногвардейский р-н",
            okato: "53223000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "7644221b-0ef9-40c3-8378-cb0e2299747e",
            disid: "7",
            name: "Кувандык г",
            okato: "53414000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "3c4119fd-098b-468f-a38f-4f8e890ac932",
            disid: "7",
            name: "Кувандыкский р-н",
            okato: "53224000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "95839463-c8f1-4289-b3ea-b14da4339d66",
            disid: "7",
            name: "Курманаевский р-н",
            okato: "53225000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "f280160f-f84e-4d95-8846-3faca6c7360c",
            disid: "7",
            name: "Матвеевский р-н",
            okato: "53227000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "86204c33-b552-4ebd-a93a-9dc8b274ee9c",
            disid: "7",
            name: "Медногорск г",
            okato: "53415000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "d0e8d321-75a7-40fb-9b05-338ea22ca9f1",
            disid: "7",
            name: "Новоорский р-н",
            okato: "53230000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "33b06d79-56cc-4d84-ae0e-387626e5b189",
            disid: "7",
            name: "Новосергиевский р-н",
            okato: "53231000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "5cb431ac-6645-47b2-9716-5fccc9ec1d7f",
            disid: "7",
            name: "Новотроицк г",
            okato: "53420000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "3e0c3e99-6e18-4ef8-afa4-ace21009790b",
            disid: "7",
            name: "Октябрьский р-н",
            okato: "53233000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "dce97bff-deb2-4fd9-9aec-4f4327bbf89b",
            disid: "7",
            name: "Оренбург г",
            okato: "53401000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "214f9132-f231-4f81-89c1-1241a6fb003a",
            disid: "7",
            name: "Оренбургский р-н",
            okato: "53234000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "71e7cb45-f365-4e6b-b068-a7d35349c3ba",
            disid: "7",
            name: "Орск г",
            okato: "53423000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "35de0d09-5785-421b-98c0-0ee797169753",
            disid: "7",
            name: "Первомайский р-н",
            okato: "53236000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "80f8e87c-51c4-4be0-b36d-872122287c14",
            disid: "7",
            name: "Переволоцкий р-н",
            okato: "53237000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "6f49d1ee-288f-4b4a-8dd1-66434a4ef203",
            disid: "7",
            name: "Пономаревский р-н",
            okato: "53238000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "6cd8d283-9cfb-4005-a6b3-8ee764d5377e",
            disid: "7",
            name: "Сакмарский р-н",
            okato: "53240000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "259bf2c9-0f14-488f-8760-b23de834cd3e",
            disid: "7",
            name: "Саракташский р-н",
            okato: "53241000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "51c49a3e-80b7-48bf-8c42-4ea9a1861816",
            disid: "7",
            name: "Светлинский р-н",
            okato: "53242000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "bdd7ac3c-ef4d-4a9f-be5a-f8badef8b4cb",
            disid: "7",
            name: "Северный р-н",
            okato: "53243000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "29941dfd-2cbb-4cf9-9a8b-cebdc59219fb",
            disid: "7",
            name: "Соль-Илецкий р-н",
            okato: "53244000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "1d9296cc-f534-4e81-9e97-c31d3ef9c25a",
            disid: "7",
            name: "Сорочинск г",
            okato: "53427000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "89a63c11-1a07-4f88-af23-4a885366f9ba",
            disid: "7",
            name: "Сорочинский р-н",
            okato: "53250000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "cab64aad-379f-4803-8949-956512797046",
            disid: "7",
            name: "Ташлинский р-н",
            okato: "53251000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "c073f888-f985-427f-855b-3633f18652f7",
            disid: "7",
            name: "Тоцкий р-н",
            okato: "53252000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "ddec76a1-0fe8-4c7c-98db-b71a3529013f",
            disid: "7",
            name: "Тюльганский р-н",
            okato: "53253000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "6d5c6624-1dc0-44a6-96af-157613011cd4",
            disid: "7",
            name: "Шарлыкский р-н",
            okato: "53256000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "44d90ec8-b093-4e45-9586-7ff0ead7f646",
            disid: "7",
            name: "Ясненский р-н",
            okato: "53259000000",
            parentguid: "8bcec9d6-05bc-4e53-b45c-ba0c6f3a5c44",
            regioncode: "56"
        }, {
            aoguid: "ea343b1c-ffdd-481d-8c8b-3a51659e5565",
            disid: "7",
            name: "Башмаковский р-н",
            okato: "56203000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "3bef8844-bed1-42d8-9d7c-0db138a32e1a",
            disid: "7",
            name: "Бековский р-н",
            okato: "56209000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "30f4502e-4430-45c5-8b6c-85562ac63603",
            disid: "7",
            name: "Белинский р-н",
            okato: "56212000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "b9a4986f-6edd-43f4-859a-ce9219cac0b6",
            disid: "7",
            name: "Бессоновский р-н",
            okato: "56213000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "8a6e0fae-5406-4780-8190-b8c98eafbc76",
            disid: "7",
            name: "Вадинский р-н",
            okato: "56215000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "62ea7362-947a-478f-9e93-fee1746bdece",
            disid: "7",
            name: "Городищенский р-н",
            okato: "56218000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "ff38fc0c-d739-4627-a2f4-58af8f3d9d42",
            disid: "7",
            name: "Заречный г",
            okato: "56534000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "0bb3d8a5-1c28-4938-bfae-8f110f0a6a29",
            disid: "7",
            name: "Земетчинский р-н",
            okato: "56223000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "54270d32-e211-4aca-bf7c-6bba9121ba80",
            disid: "7",
            name: "Иссинский р-н",
            okato: "56226000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "695b14e5-c4b0-4b0f-ab9a-d312cb759cdc",
            disid: "7",
            name: "Каменский р-н",
            okato: "56229000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "ebe2c72b-0549-4151-830c-203942a43c06",
            disid: "7",
            name: "Камешкирский р-н",
            okato: "56231000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "91eb28ce-2488-4720-94f3-5607372960d2",
            disid: "7",
            name: "Колышлейский р-н",
            okato: "56233000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "0663c380-d898-4dcb-b689-5edb72acd672",
            disid: "7",
            name: "Кондольский р-н",
            okato: "56236000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "66b6bd0e-21e4-4479-8417-341fda1b0dcb",
            disid: "7",
            name: "Кузнецкий р-н",
            okato: "56240000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "03b7b802-cca5-4212-9315-95d0aeb74065",
            disid: "7",
            name: "Лопатинский р-н",
            okato: "56242000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "4a9aed21-bce9-40d5-873f-8b53bb9cc48a",
            disid: "7",
            name: "Лунинский р-н",
            okato: "56243000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "2a14245e-691a-4042-a06a-3724b4d693fa",
            disid: "7",
            name: "Малосердобинский р-н",
            okato: "56244808003",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "6ee58fc3-859e-45f3-8d43-3d126bfb64c1",
            disid: "7",
            name: "Мокшанский р-н",
            okato: "56245000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "f13dd1c7-0039-49c3-ba3e-85d8308551db",
            disid: "7",
            name: "Наровчатский р-н",
            okato: "56247000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "b5f07986-4adc-4f3d-8abd-2f152e9d08b2",
            disid: "7",
            name: "Неверкинский р-н",
            okato: "56249000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "6368c866-a960-465e-9b3f-f1c98bdaaf48",
            disid: "7",
            name: "Нижнеломовский р-н",
            okato: "56251000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "4a48723b-d9fc-42b9-aa12-35be50176879",
            disid: "7",
            name: "Никольский р-н",
            okato: "56253000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "91bcb5ba-0045-4c27-a9c3-37cf0e0d34bb",
            disid: "7",
            name: "Пачелмский р-н",
            okato: "56254000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "ff3292b1-a1d2-47d4-b35b-ac06b50555cc",
            disid: "7",
            name: "Пенза г",
            okato: "56401000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "2d7d7abd-2107-4eac-b8d4-17d79fc8b494",
            disid: "7",
            name: "Пензенский р-н",
            okato: "",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "fa53b9c2-ce15-4ad2-a717-7d69dccf47e3",
            disid: "7",
            name: "Сердобский р-н",
            okato: "56256000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "a8247127-b144-4d66-9274-5ad9ee1e0f91",
            disid: "7",
            name: "Сосновоборский р-н",
            okato: "56257000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "7f2f19c2-fcc0-4f4d-ac38-32100beadd2c",
            disid: "7",
            name: "Спасский р-н",
            okato: "56206000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "e21f5cb2-adf4-468b-b91a-67d12bbdcdd7",
            disid: "7",
            name: "Тамалинский р-н",
            okato: "56258000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "27128df2-74dd-4b34-b8f8-1165c8bb4b47",
            disid: "7",
            name: "Шемышейский р-н",
            okato: "56259000000",
            parentguid: "c99e7924-0428-4107-a302-4fd7c0cca3ff",
            regioncode: "58"
        }, {
            aoguid: "4f07ade1-1415-44c8-bed9-e851f1ef558d",
            disid: "7",
            name: "Александровск г",
            okato: "57405550000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "0810dccb-7114-4d33-9454-50b00433eb1b",
            disid: "7",
            name: "Бардымский р-н",
            okato: "57204000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "4ffcde97-05e9-4a6e-bd51-3a984b41b7bd",
            disid: "7",
            name: "Березники г",
            okato: "57408000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "57e3f364-d709-44a4-a81f-c9ea68778fd0",
            disid: "7",
            name: "Березовский р-н",
            okato: "57206000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "76561b13-cc96-478c-9266-bc69ec254776",
            disid: "7",
            name: "Большесосновский р-н",
            okato: "57208000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "c3700ef0-0a85-4032-947c-009f956fd754",
            disid: "7",
            name: "Верещагинский р-н",
            okato: "57212000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "d336561f-cc98-4742-9f7b-52d99c78463e",
            disid: "7",
            name: "Гайнский р-н",
            okato: "57114000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "b6c85a2d-c0ec-4030-a306-4ca7bdcd25f4",
            disid: "7",
            name: "Горнозаводский р-н",
            okato: "57214000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "edeaf203-1bc3-4fe1-b3ed-15eb89978783",
            disid: "7",
            name: "Гремячинск г",
            okato: "57412000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "1dc365d3-60b1-41ea-a3b3-1c599024cf30",
            disid: "7",
            name: "Губаха г",
            okato: "57415000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "230c2f4d-fd9d-46fc-8bbd-b8de26810790",
            disid: "7",
            name: "Добрянка г",
            okato: "57416000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "3afa40f2-8169-4006-a5c4-33ace0510d7f",
            disid: "7",
            name: "Еловский р-н",
            okato: "57218000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "a80bf180-06e3-4b38-971c-ecef8b417337",
            disid: "7",
            name: "Ильинский р-н",
            okato: "57220000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "44166947-11b9-4a1b-a1bf-6e9cba64299d",
            disid: "7",
            name: "Карагайский р-н",
            okato: "57222000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "cc8b9eb5-bd4e-4472-8314-f889e8a6679c",
            disid: "7",
            name: "Кизел г",
            okato: "57418550000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "c787b918-d201-408b-abb9-84d53befc6a5",
            disid: "7",
            name: "Кишертский р-н",
            okato: "57224000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "6e850977-64c1-49ac-a405-8ff2d77fa219",
            disid: "7",
            name: "Косинский р-н",
            okato: "57117000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "a4b9d248-dec4-4686-b4bc-d3b0d8fd9be6",
            disid: "7",
            name: "Кочевский р-н",
            okato: "57119000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "e4172d66-d08e-4eda-a274-c47119c30470",
            disid: "7",
            name: "Красновишерский р-н",
            okato: "57226000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "1ffa3973-279c-4bcd-a9fc-ece8c7d1039e",
            disid: "7",
            name: "Краснокамский р-н",
            okato: "57420000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "d36590ad-0286-44a2-876d-7732deee4234",
            disid: "7",
            name: "Кудымкар г",
            okato: "57141000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "6fe17476-90db-4bbf-af4f-e33564751f95",
            disid: "7",
            name: "Кудымкарский р-н",
            okato: "57121000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "189875b0-b84b-4980-a125-5a0581f5197e",
            disid: "7",
            name: "Куединский р-н",
            okato: "57228000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "73e5113d-949a-4a9e-8e44-6eae9ef93747",
            disid: "7",
            name: "Кунгур г",
            okato: "57422000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "1f81a925-75ee-4fa2-87b1-9de26a2813ed",
            disid: "7",
            name: "Кунгурский р-н",
            okato: "57230000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "5d7c95a5-a4d7-4fb4-9774-93e527636a9e",
            disid: "7",
            name: "Лысьва г",
            okato: "57427000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "fa41d32f-22b5-4436-bddd-c2ec035377c6",
            disid: "7",
            name: "Нытвенский р-н",
            okato: "57234000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "2ddaf37d-e4ea-4748-b6b8-943854f37a0f",
            disid: "7",
            name: "Октябрьский р-н",
            okato: "57236000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "5ca82a07-403e-48aa-8fa8-a00277123e46",
            disid: "7",
            name: "Ординский р-н",
            okato: "57238000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "60dd742a-3dc9-4ab1-9a22-12c19efdb340",
            disid: "7",
            name: "Осинский р-н",
            okato: "57240000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "e7012a7a-e7de-4306-8f52-aabeaf82f178",
            disid: "7",
            name: "Оханский р-н",
            okato: "57242000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "2e82fea7-7e6f-4c8a-849f-57140f80c7f3",
            disid: "7",
            name: "Очерский р-н",
            okato: "57244000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "7dd380b3-ce33-4280-934f-a4265a07803b",
            disid: "7",
            name: "Пермский р-н",
            okato: "57246000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "a309e4ce-2f36-4106-b1ca-53e0f48a6d95",
            disid: "7",
            name: "Пермь г",
            okato: "57401000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "9eea0415-ab1c-4b49-bd9d-aa04ea23d4e9",
            disid: "7",
            name: "Сивинский р-н",
            okato: "57248000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "8b698775-fe5e-4fc0-9f0d-272855d82d15",
            disid: "7",
            name: "Соликамск г",
            okato: "57430000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "db4332aa-5444-4c77-a364-541563e0bb1d",
            disid: "7",
            name: "Соликамский р-н",
            okato: "57250000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "9460a26c-a2b9-4cb2-9e0e-ddc9022b0ecb",
            disid: "7",
            name: "Суксунский р-н",
            okato: "57251000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "a266fff5-5817-4d3b-95dd-c447144f02d1",
            disid: "7",
            name: "Уинский р-н",
            okato: "57252000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "7f21b9b5-1f39-44ad-8ce4-6e186e8389ce",
            disid: "7",
            name: "Усольский р-н",
            okato: "57253000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "06d7a6d6-8f57-4e5a-b698-2bc44c92bb84",
            disid: "7",
            name: "Чайковский г",
            okato: "57435000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "0e9750c7-9f8c-4e23-b996-9a7bff46bb2c",
            disid: "7",
            name: "Частинский р-н",
            okato: "57255000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "4f092f1f-8ebf-4ea4-8f01-a75cbcf1d43f",
            disid: "7",
            name: "Чердынский р-н",
            okato: "57256000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "75550fdb-56e3-44d5-a4c4-75ab2cb53e83",
            disid: "7",
            name: "Чернушинский р-н",
            okato: "57257000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "784b1911-182d-476b-a4ad-0f3fa1ef7777",
            disid: "7",
            name: "Чусовой г",
            okato: "57440000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "03547d69-de22-4781-b728-e0823fcdb5f3",
            disid: "7",
            name: "Юрлинский р-н",
            okato: "57125000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "f8523e08-3e73-4ba1-b1a2-4bdaf1e8b82f",
            disid: "7",
            name: "Юсьвинский р-н",
            okato: "57127000000",
            parentguid: "4f8b1a21-e4bb-422f-9087-d3cbf4bebc14",
            regioncode: "59"
        }, {
            aoguid: "2c903bfd-fa49-4080-805b-fd4f24ba1603",
            disid: "7",
            name: "Алексеевский р-н",
            okato: "36202000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "64be3cc5-175c-4a52-87f2-e106121e6011",
            disid: "7",
            name: "Безенчукский р-н",
            okato: "36204000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "8b4714f8-2924-41e6-904a-4ee2d8e56141",
            disid: "7",
            name: "Богатовский р-н",
            okato: "36206000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "1f1f02f3-4c2d-476b-aa80-769cc45eacc8",
            disid: "7",
            name: "Большеглушицкий р-н",
            okato: "36208000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "c2be48d4-240a-401e-8462-446a0433df80",
            disid: "7",
            name: "Большечерниговский р-н",
            okato: "36210000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "530671ae-3985-40b3-8a21-2481cdf0bdc5",
            disid: "7",
            name: "Борский р-н",
            okato: "36212000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "7e27aa90-d423-4393-a3a4-332c219dfb4b",
            disid: "7",
            name: "Волжский р-н",
            okato: "36214000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "f787453e-561b-4d05-91db-e3f731be44d9",
            disid: "7",
            name: "Елховский р-н",
            okato: "36215000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "2f44f8ee-a505-46bf-b6de-6648a166295e",
            disid: "7",
            name: "Жигулевск г",
            okato: "36404000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "b32e30da-45fe-478c-ae05-5cd47772ffcf",
            disid: "7",
            name: "Исаклинский р-н",
            okato: "36216000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "827ff414-4a05-4702-a43e-4f4c53639ba6",
            disid: "7",
            name: "Камышлинский р-н",
            okato: "36217000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "8ca7cbe5-a14b-416a-974a-dfa56e7f396a",
            disid: "7",
            name: "Кинель г",
            okato: "36408000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "29c6074e-5d59-48e9-a2e6-f8abe3aaca3a",
            disid: "7",
            name: "Кинель-Черкасский р-н",
            okato: "36220000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "f75d18d4-47f4-42db-b105-acde9933fe90",
            disid: "7",
            name: "Кинельский р-н",
            okato: "36218000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "f9992965-0044-42fa-b0c3-0e6b84ad4e18",
            disid: "7",
            name: "Клявлинский р-н",
            okato: "36222000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "38d094f5-7e47-4a06-8d3e-397c561b77d6",
            disid: "7",
            name: "Кошкинский р-н",
            okato: "36224000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "f808da14-04ec-456b-927e-0d342b2b1df0",
            disid: "7",
            name: "Красноармейский р-н",
            okato: "36226000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "a575d77d-c43c-470e-9c67-24b2b55f959a",
            disid: "7",
            name: "Красноярский р-н",
            okato: "36228000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "b7699806-253c-42f4-8275-616d9d86f88e",
            disid: "7",
            name: "Нефтегорский р-н",
            okato: "36230000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "cda74a83-ae08-4ba2-b01c-c6fc373222cb",
            disid: "7",
            name: "Новокуйбышевск г",
            okato: "36413000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "b9a43610-5c01-4ba8-8de7-95facc7e460d",
            disid: "7",
            name: "Октябрьск г",
            okato: "36418000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "05edd5aa-ab64-4afa-b56c-fd5661a14129",
            disid: "7",
            name: "Отрадный г",
            okato: "36424000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "b93d0cdf-2f08-4c8e-9582-88d1c638a1c2",
            disid: "7",
            name: "Пестравский р-н",
            okato: "36232000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "ddb9cec8-ee07-4788-b80d-39535aea78f9",
            disid: "7",
            name: "Похвистнево г",
            okato: "36427000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "bcd80b12-bad7-4a0e-b4d7-b6ee740bf7d4",
            disid: "7",
            name: "Похвистневский р-н",
            okato: "36234000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "fcae79d1-60bb-421c-9ec7-8256fa2b31c6",
            disid: "7",
            name: "Приволжский р-н",
            okato: "36236000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "bb035cc3-1dc2-4627-9d25-a1bf2d4b936b",
            disid: "7",
            name: "Самара г",
            okato: "36401000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "91a9d70f-c6a4-4e89-9626-9ce57f2d14b5",
            disid: "7",
            name: "Сергиевский р-н",
            okato: "36238000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "75d5f658-5d33-4fb1-af85-97653e397307",
            disid: "7",
            name: "Ставропольский р-н",
            okato: "36240000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "c060bcb7-138a-4b1e-ad38-601eac87dc19",
            disid: "7",
            name: "Сызранский р-н",
            okato: "36242000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "e9e684ce-7d60-4480-ba14-ca6da658188b",
            disid: "7",
            name: "Сызрань г",
            okato: "36435000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "242e87c1-584d-4360-8c4c-aae2fe90048e",
            disid: "7",
            name: "Тольятти г",
            okato: "36440000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "14cd7e4d-1845-4fd4-ba82-f2d2c16734c9",
            disid: "7",
            name: "Хворостянский р-н",
            okato: "36244000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "90a11c8e-c39f-4bcd-9df4-f89bed18958c",
            disid: "7",
            name: "Чапаевск г",
            okato: "36450000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "20003100-5f16-4c6e-a1ff-424686faf01a",
            disid: "7",
            name: "Челно-Вершинский р-н",
            okato: "36246000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "4ca64322-8b50-4f10-91d4-d5a0748d731a",
            disid: "7",
            name: "Шенталинский р-н",
            okato: "36248000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "0d3e1d02-967c-4464-b931-39d8f4495be3",
            disid: "7",
            name: "Шигонский р-н",
            okato: "36250000000",
            parentguid: "df3d7359-afa9-4aaa-8ff9-197e73906b1c",
            regioncode: "63"
        }, {
            aoguid: "64e03a02-2909-4b8b-ab14-865e70783912",
            disid: "7",
            name: "Александрово-Гайский р-н",
            okato: "63202000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "223159dc-90b7-4263-9b8e-411b5847044d",
            disid: "7",
            name: "Аркадакский р-н",
            okato: "63203000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "6f9e3e0b-3872-4abf-a2ba-23ae4b196a73",
            disid: "7",
            name: "Аткарск г",
            okato: "63404000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "5e5f312a-a1d4-44bb-a9d1-4f3ee1049638",
            disid: "7",
            name: "Аткарский р-н",
            okato: "63204000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "db61110d-6a85-40e3-8be1-69d38ec713c4",
            disid: "7",
            name: "Базарно-Карабулакский р-н",
            okato: "63206000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "45eea4e7-2977-44bb-9b3d-ef8e9198e5d2",
            disid: "7",
            name: "Балаково г",
            okato: "63407000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "9e4cfe42-8660-4b67-bba8-c671df22e694",
            disid: "7",
            name: "Балаковский р-н",
            okato: "63207000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "574ddbe6-5e16-4e5b-9cf5-5f3be3a8a6c9",
            disid: "7",
            name: "Балашов г",
            okato: "63410000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "a67f03b4-6b92-44d2-9e26-5f2889e54d60",
            disid: "7",
            name: "Балашовский р-н",
            okato: "63208000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "70cfb46e-96ce-4e3c-81dc-d679e9e9bc3b",
            disid: "7",
            name: "Балтайский р-н",
            okato: "63209000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "83f29047-8dd9-411d-ac4b-c5811ea815f1",
            disid: "7",
            name: "Вольск г",
            okato: "63413000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "c9135152-e83c-4282-a10e-fac5e35390c1",
            disid: "7",
            name: "Вольский р-н",
            okato: "63211000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "73dbf8f9-5893-42bb-8b9c-c5be261c6837",
            disid: "7",
            name: "Воскресенский р-н",
            okato: "63212000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "e4848d64-ed2c-4a38-8afb-02ea3db35900",
            disid: "7",
            name: "Дергачевский р-н",
            okato: "63213000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "b401fa28-7440-4859-a237-a41373f0307f",
            disid: "7",
            name: "Духовницкий р-н",
            okato: "63214000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "1f2bd26a-78d0-49f2-9938-6c71d0c109b1",
            disid: "7",
            name: "Екатериновский р-н",
            okato: "63216000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "70ef1dda-f6fc-42fb-bc4a-300863408e47",
            disid: "7",
            name: "Ершовский р-н",
            okato: "63217000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "599eef2b-3908-4438-a314-502dd6f7ef6d",
            disid: "7",
            name: "Ивантеевский р-н",
            okato: "63219000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "b1d1deb0-b2b3-4692-b10e-719c5f5de70d",
            disid: "7",
            name: "Калининский р-н",
            okato: "63221000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "64954753-8e36-4948-9372-af3a08e88d57",
            disid: "7",
            name: "Красноармейск г",
            okato: "63418000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "08c9e892-08be-4764-acc7-58864a3a41a1",
            disid: "7",
            name: "Красноармейский р-н",
            okato: "63222000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "6e46e9ae-70d8-41f1-abc3-f464a061ba5d",
            disid: "7",
            name: "Краснокутский р-н",
            okato: "63223000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "31515b21-b416-431b-b564-1609391a6843",
            disid: "7",
            name: "Краснопартизанский р-н",
            okato: "63224000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "1dd39103-492f-444d-b36c-e9579736ce85",
            disid: "7",
            name: "Лысогорский р-н",
            okato: "63225000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "c1a0ca30-8b42-4cc8-a16d-2d3392937621",
            disid: "7",
            name: "Маркс г",
            okato: "63422000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "edbcf68e-e0fe-40c1-be11-a62fc3baa90f",
            disid: "7",
            name: "Марксовский р-н",
            okato: "63226000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "e2696fe1-fcd6-4ac3-a48c-6e6ad2ba9c63",
            disid: "7",
            name: "Новобурасский р-н",
            okato: "63229000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "9d6eacba-68e4-49e9-bf24-00466ed7d650",
            disid: "7",
            name: "Новоузенский р-н",
            okato: "63230000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "7a9e315a-ae86-4a7f-82c8-8bbfdcb4363c",
            disid: "7",
            name: "Озинский р-н",
            okato: "63232000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "7782e44f-5f01-40d4-b799-15dc88737a2a",
            disid: "7",
            name: "Перелюбский р-н",
            okato: "63234000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "b5d97e65-e496-44d0-b025-398a8d43514a",
            disid: "7",
            name: "Петровск г",
            okato: "63428000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "22be1583-5af0-4da7-8b71-b29ae4bae2f9",
            disid: "7",
            name: "Петровский р-н",
            okato: "63235000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "cf825a14-9b16-462c-a5bf-ddedf8353678",
            disid: "7",
            name: "Питерский р-н",
            okato: "63236000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "c1d4d969-0083-4b04-9f4b-e9eaeaefbd6f",
            disid: "7",
            name: "Пугачев г",
            okato: "63435000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "60b2c8d5-a7b3-412e-9edd-56508c38c12a",
            disid: "7",
            name: "Пугачевский р-н",
            okato: "63237000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "97983881-55f7-4b72-910a-1bcca8115ca6",
            disid: "7",
            name: "Ровенский р-н",
            okato: "63239000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "60f03977-1591-402a-9cb8-53ce4fa691d5",
            disid: "7",
            name: "Романовский р-н",
            okato: "63240000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "d08bbea8-4fa3-4597-87ae-0bd79b4a89d2",
            disid: "7",
            name: "Ртищево г",
            okato: "63440000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "465956b7-7f6b-495c-a1cc-df750af80c28",
            disid: "7",
            name: "Ртищевский р-н",
            okato: "63241000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "04f77757-8a76-46e8-b544-057c575411c7",
            disid: "7",
            name: "Самойловский р-н",
            okato: "63242000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "bf465fda-7834-47d5-986b-ccdb584a85a6",
            disid: "7",
            name: "Саратов г",
            okato: "63401000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "d3f6c99d-359a-4e3f-b3a6-271cd1da7b44",
            disid: "7",
            name: "Саратовский р-н",
            okato: "63243000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "33906570-21b8-40e1-9539-a9fd4f7dbcc4",
            disid: "7",
            name: "Советский р-н",
            okato: "63244000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "6f4a1fda-0378-4f06-a478-1db13603caac",
            disid: "7",
            name: "Татищевский р-н",
            okato: "63246000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "0e380569-cb86-4945-9c7b-6a141028b0b6",
            disid: "7",
            name: "Турковский р-н",
            okato: "63247000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "1cba9deb-f79a-4775-aa23-8ebdb3deb94e",
            disid: "7",
            name: "Федоровский р-н",
            okato: "63248000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "ac586a68-2f14-403e-9ce0-46c01832652d",
            disid: "7",
            name: "Хвалынск г",
            okato: "63445000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "93f75409-d60d-4fdf-b0df-49e3e7876e94",
            disid: "7",
            name: "Хвалынский р-н",
            okato: "63249000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "6c6b065e-9f1c-4afd-ac61-ff8338972818",
            disid: "7",
            name: "Шиханы г",
            okato: "63545000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "c58d0505-54eb-4c34-8216-b14f7cdb0ecb",
            disid: "7",
            name: "Энгельс г",
            okato: "63450000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "ec80945b-845b-4b2e-be46-6c9013525304",
            disid: "7",
            name: "Энгельс-19 г",
            okato: "63450554000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "290421a7-52bf-43a1-ad09-118b6903daac",
            disid: "7",
            name: "Энгельс-2 г",
            okato: "63450554000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "7051ab15-7d76-4817-9bec-b61e18ef91d2",
            disid: "7",
            name: "Энгельсский р-н",
            okato: "63250000000",
            parentguid: "df594e0e-a935-4664-9d26-0bae13f904fe",
            regioncode: "64"
        }, {
            aoguid: "3b67dc8e-79b1-43f4-8f9e-2b4990a1a922",
            disid: "7",
            name: "Агрызский р-н",
            okato: "92201000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "25108675-9fd9-4325-a1fd-c392c3feedac",
            disid: "7",
            name: "Азнакаевский р-н",
            okato: "92202000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "c4339d8a-d4ef-42e0-be75-6bc551956e5c",
            disid: "7",
            name: "Аксубаевский р-н",
            okato: "92204000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "bb9c86eb-30de-4b8f-9ea8-9edc71fc0488",
            disid: "7",
            name: "Актанышский р-н",
            okato: "92205000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "f7521d33-7cf3-4f6e-bb66-d9e04912b6fc",
            disid: "7",
            name: "Алексеевский р-н",
            okato: "92206000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "1053347b-4de8-405d-970e-b42003d49916",
            disid: "7",
            name: "Алькеевский р-н",
            okato: "92207000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "b10beeff-7669-45aa-9127-b1cc9db1cc4c",
            disid: "7",
            name: "Альметьевский р-н",
            okato: "92208000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "67e7162e-14d0-4418-9923-a948ed6c2936",
            disid: "7",
            name: "Апастовский р-н",
            okato: "92210000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "8b3bfb8a-d712-4ecd-9192-a7259ea141dc",
            disid: "7",
            name: "Арский р-н",
            okato: "92212000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "72faa57c-6281-4758-9ba3-516558f19eab",
            disid: "7",
            name: "Атнинский р-н",
            okato: "92213000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "a2093ccb-a5b8-4956-ad05-c0886fc95cdb",
            disid: "7",
            name: "Бавлинский р-н",
            okato: "92214000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "7fca8877-4ce1-443d-b64b-7bf6fb84198a",
            disid: "7",
            name: "Балтасинский р-н",
            okato: "92215000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "c4fc378d-08d2-4adc-851f-fe35335e6bc8",
            disid: "7",
            name: "Бугульминский р-н",
            okato: "92217000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "2f40b5af-a9f6-4056-8581-48c9d5c44e7e",
            disid: "7",
            name: "Буинский р-н",
            okato: "92218000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "6c1c7db4-37b3-4544-9a47-255c02207388",
            disid: "7",
            name: "Верхнеуслонский р-н",
            okato: "92220000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "56197a9f-2b30-486d-b31a-21d93c589bb7",
            disid: "7",
            name: "Высокогорский р-н",
            okato: "92222000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "a22f07cb-1481-4278-8182-e342b2f0785d",
            disid: "7",
            name: "Дрожжановский р-н",
            okato: "92224000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "ac240902-34b0-491c-896b-af76cf6fd4ac",
            disid: "7",
            name: "Елабужский р-н",
            okato: "92226000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "3a44bebe-99e7-4e97-b79a-ea36b34e6be1",
            disid: "7",
            name: "Заинский р-н",
            okato: "92227000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "163ed231-c194-4452-ab1a-7f991b4d2f5c",
            disid: "7",
            name: "Зеленодольский р-н",
            okato: "92228000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "93b3df57-4c89-44df-ac42-96f05e9cd3b9",
            disid: "7",
            name: "Казань г",
            okato: "92401000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "cc249bd4-51d8-4bc6-bdda-340229f439d2",
            disid: "7",
            name: "Кайбицкий р-н",
            okato: "92229000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "7e6e53c8-30d0-4d74-8749-2edb12566989",
            disid: "7",
            name: "Камско-Устьинский р-н",
            okato: "92230000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "0298be6c-8d8a-4f33-b742-8b8769d86d17",
            disid: "7",
            name: "Кукморский р-н",
            okato: "92233000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "d11bb1b1-27ae-44b6-9d0e-b6fa43f75625",
            disid: "7",
            name: "Лаишевский р-н",
            okato: "92234000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "75387230-9ca5-4239-be4d-dc4a77a2d6ab",
            disid: "7",
            name: "Лениногорский р-н",
            okato: "92236000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "fdc0d460-4cf0-4dce-9887-043d181c558e",
            disid: "7",
            name: "Мамадышский р-н",
            okato: "92238000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "d5b8fcfb-74a9-4cfa-88e6-e508cb85575b",
            disid: "7",
            name: "Менделеевский р-н",
            okato: "92239000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "72a8ac4a-7c51-4b54-be84-03c9ab3ca362",
            disid: "7",
            name: "Мензелинский р-н",
            okato: "92240000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "4d9587db-77da-4f96-8331-bf04599a2878",
            disid: "7",
            name: "Муслюмовский р-н",
            okato: "92242000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "748d7afa-7407-4876-9f40-764ecdd09bbd",
            disid: "7",
            name: "Набережные Челны г",
            okato: "92430000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "dd36813f-e9e1-482c-8e77-02397d0a3eb3",
            disid: "7",
            name: "Нижнекамский р-н",
            okato: "92244000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "ffe9978a-c14a-41d8-8b21-06233b063267",
            disid: "7",
            name: "Новошешминский р-н",
            okato: "92245000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "69dd0cab-c31d-4345-8429-b8540728c484",
            disid: "7",
            name: "Нурлатский р-н",
            okato: "92246000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "64bad346-6dda-4d89-be4e-3e73b0cf1f45",
            disid: "7",
            name: "Пестречинский р-н",
            okato: "92248000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "5d20a8a2-cd23-4af0-8f66-0a509ba9e84d",
            disid: "7",
            name: "Рыбно-Слободский р-н",
            okato: "92250000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "d2a1137e-e196-46d3-a8f8-e7cfbb86412b",
            disid: "7",
            name: "Сабинский р-н",
            okato: "92252000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "f1ca5836-fb9f-4829-9d31-e4fbb3106813",
            disid: "7",
            name: "Сармановский р-н",
            okato: "92253000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "81b32a2d-34a6-4ef8-bc97-005c3d5d2b0e",
            disid: "7",
            name: "Спасский р-н",
            okato: "92232000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "ff141bdc-ba5a-4d93-ba21-f114931ee193",
            disid: "7",
            name: "Тетюшский р-н",
            okato: "92255000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "e1594936-3d9f-48d0-9699-6a313885cad1",
            disid: "7",
            name: "Тукаевский р-н",
            okato: "92257000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "6ac28e96-74ec-44b4-a912-5c4c4cea01af",
            disid: "7",
            name: "Тукая р-н",
            okato: "92228000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "ee0c0b9a-c5fe-4c81-a966-93b8af831441",
            disid: "7",
            name: "Тюлячинский р-н",
            okato: "92256000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "75124fb3-dd85-42b7-8471-ccea65e6f60f",
            disid: "7",
            name: "Черемшанский р-н",
            okato: "92258000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "019d7b51-664b-452f-aab7-0f6a73d81dcb",
            disid: "7",
            name: "Чистопольский р-н",
            okato: "92259000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "6efefcee-49b7-403b-b719-46b80cf8d1a8",
            disid: "7",
            name: "Ютазинский р-н",
            okato: "92254000000",
            parentguid: "0c089b04-099e-4e0e-955a-6bf1ce525f1a",
            regioncode: "16"
        }, {
            aoguid: "a09e3cff-361c-4f1c-a6c6-a5af13cead2f",
            disid: "7",
            name: "Алнашский р-н",
            okato: "94202000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "2fa6c3b9-173a-44f5-889e-051b7dead725",
            disid: "7",
            name: "Балезинский р-н",
            okato: "94204000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "2147a660-d905-41b8-b783-42280660896f",
            disid: "7",
            name: "Вавожский р-н",
            okato: "94206000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "d948319d-b151-48f5-9791-22ccfeeabfe7",
            disid: "7",
            name: "Воткинск г",
            okato: "94410000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "a2750c1b-8dc3-48a4-a7fc-6d07804ff49a",
            disid: "7",
            name: "Воткинский р-н",
            okato: "94208000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "afeea607-0207-467f-8c59-562fc634f924",
            disid: "7",
            name: "Глазов г",
            okato: "94420000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "35d9d03b-9763-42bf-8187-27d7de1b65dc",
            disid: "7",
            name: "Глазовский р-н",
            okato: "94210000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "48dc8855-8722-4334-b510-fb6ca43cfd46",
            disid: "7",
            name: "Граховский р-н",
            okato: "94212000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "42db791d-d878-4341-86d1-e65189201e1f",
            disid: "7",
            name: "Дебесский р-н",
            okato: "94214000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "0138fa72-5d23-4bc1-ae4f-900249c9e011",
            disid: "7",
            name: "Завьяловский р-н",
            okato: "94216000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "bc661ab5-e36e-4541-b82c-6bf18fbc8595",
            disid: "7",
            name: "Игринский р-н",
            okato: "94218000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "deb1d05a-71ce-40d1-b726-6ba85d70d58f",
            disid: "7",
            name: "Ижевск г",
            okato: "94401000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "8a0f1307-150f-46f9-aa76-7c82a7c796c2",
            disid: "7",
            name: "Камбарский р-н",
            okato: "94220000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "78dfc379-41b1-4e85-bec2-8963127bc355",
            disid: "7",
            name: "Каракулинский р-н",
            okato: "94222000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "7ce7e613-4347-4a44-9fba-8d81ac19ab3c",
            disid: "7",
            name: "Кезский р-н",
            okato: "94224000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "4938bc93-67cb-41aa-a058-9103f05862cc",
            disid: "7",
            name: "Кизнерский р-н",
            okato: "94226000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "ae204580-6e2d-41c6-a233-48e1f3aad3e7",
            disid: "7",
            name: "Киясовский р-н",
            okato: "94228000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "e68b30d9-ee15-43f2-af77-487d22b464c6",
            disid: "7",
            name: "Красногорский р-н",
            okato: "94230000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "f2973df9-0808-4c27-b171-b10d1cfca1c9",
            disid: "7",
            name: "Малопургинский р-н",
            okato: "94233000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "7096d8a5-2b41-47b1-95ae-35efcbc07dee",
            disid: "7",
            name: "Можга г",
            okato: "94430000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "511c2eef-602e-46c3-9aa6-6edab7e2a861",
            disid: "7",
            name: "Можгинский р-н",
            okato: "94235000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "e69a280f-9064-490e-bae0-8bd39527872f",
            disid: "7",
            name: "Сарапул г",
            okato: "94440000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "4693325a-809a-48f8-8a53-1dd68e3c0fac",
            disid: "7",
            name: "Сарапульский р-н",
            okato: "94237000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "db8abeb7-8603-45e9-8fbe-d847bbbe6729",
            disid: "7",
            name: "Селтинский р-н",
            okato: "94239000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "133f5360-8fd4-4ded-9777-b829be9d1c83",
            disid: "7",
            name: "Сюмсинский р-н",
            okato: "94241000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "effd4b1a-3c3c-4ff3-b584-99c9413d485e",
            disid: "7",
            name: "Увинский р-н",
            okato: "94244000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "dd78a219-a6b5-4e93-828d-42c286125a3d",
            disid: "7",
            name: "Шарканский р-н",
            okato: "94246000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "85b4bfdb-23a3-425e-b781-b20a294f0da1",
            disid: "7",
            name: "Юкаменский р-н",
            okato: "94248000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "7c18eacc-34b1-46e6-b5f2-79daf23d59ae",
            disid: "7",
            name: "Якшур-Бодьинский р-н",
            okato: "94250000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "bd09c1ed-7191-4286-b532-feb1927ee8cd",
            disid: "7",
            name: "Ярский р-н",
            okato: "94252000000",
            parentguid: "52618b9c-bcbb-47e7-8957-95c63f0b17cc",
            regioncode: "18"
        }, {
            aoguid: "1237299b-ecf4-46a8-9fb3-c85777686160",
            disid: "7",
            name: "Базарносызганский р-н",
            okato: "73202000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "52cccd1a-84fd-448a-a91e-36f113b9946f",
            disid: "7",
            name: "Барыш г",
            okato: "73204501000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "008e11ab-ea60-4975-a17a-dab62ce710a7",
            disid: "7",
            name: "Барышский р-н",
            okato: "73204000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "f06417b8-4f14-485f-90e8-5d7e4652fd75",
            disid: "7",
            name: "Вешкаймский р-н",
            okato: "73207000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "73b29372-242c-42c5-89cd-8814bc2368af",
            disid: "7",
            name: "Димитровград г",
            okato: "73405000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "7d122883-9a3c-4806-9bcb-746619a32b49",
            disid: "7",
            name: "Инзенский р-н",
            okato: "73210000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "19dc9552-9cf2-49bb-a07c-b3f9df23449c",
            disid: "7",
            name: "Карсунский р-н",
            okato: "73214000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "dcca0fd2-ae41-4286-84dd-4b4338b78433",
            disid: "7",
            name: "Кузоватовский р-н",
            okato: "73216000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "357909d8-3934-4057-8ab4-f56e7bb5b9a3",
            disid: "7",
            name: "Майнский р-н",
            okato: "73220000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "214a98f4-bd25-402b-9876-ce91d69b70a2",
            disid: "7",
            name: "Мелекесский р-н",
            okato: "73222000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "f611fa66-3d3a-42ed-bdf0-e66031c8bb1a",
            disid: "7",
            name: "Николаевский р-н",
            okato: "73225000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "61227e6b-576a-4bae-8dae-a999bef0ca7e",
            disid: "7",
            name: "Новомалыклинский р-н",
            okato: "73227000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "fd63623d-b087-40e6-840d-765bf8f5b83e",
            disid: "7",
            name: "Новоспасский р-н",
            okato: "73229000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "c21a50ef-de67-477c-887b-a1202730ee8e",
            disid: "7",
            name: "Новоульяновск г",
            okato: "73415000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "1034327d-5c79-49c7-9f2d-12ff052ee0fb",
            disid: "7",
            name: "Павловский р-н",
            okato: "73232000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "87586c9b-e69a-48ec-83f5-558a2b49c185",
            disid: "7",
            name: "Радищевский р-н",
            okato: "73234000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "6d27a8b1-3a58-404f-ac46-257cc4dfc3bc",
            disid: "7",
            name: "Сенгилеевский р-н",
            okato: "73236000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "f8ef6274-5888-4895-9b9e-98d191e4823a",
            disid: "7",
            name: "Старокулаткинский р-н",
            okato: "73239000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "b2945468-b088-47fe-8716-ba3087172390",
            disid: "7",
            name: "Старомайнский р-н",
            okato: "73242000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "b9563e96-e6c5-4e93-aefd-0ff3ec60e415",
            disid: "7",
            name: "Сурский р-н",
            okato: "73244000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "69967d73-5f38-4606-a751-bc57ceb6d41e",
            disid: "7",
            name: "Тереньгульский р-н",
            okato: "73248000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "bebfd75d-a0da-4bf9-8307-2e2c85eac463",
            disid: "7",
            name: "Ульяновск г",
            okato: "73401000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "a738e50c-e7a3-4cf5-be30-201d571bdf1a",
            disid: "7",
            name: "Ульяновский р-н",
            okato: "73252000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "e9d28891-7536-4aaf-aa97-c12bd2c6c16e",
            disid: "7",
            name: "Цильнинский р-н",
            okato: "73254000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "6fa6274c-047b-43ab-9c81-da4c98704d16",
            disid: "7",
            name: "Чердаклинский р-н",
            okato: "73256000000",
            parentguid: "fee76045-fe22-43a4-ad58-ad99e903bd58",
            regioncode: "73"
        }, {
            aoguid: "6062cc15-76de-49c0-add2-e84bf1de9b9f",
            disid: "7",
            name: "Алатырский р-н",
            okato: "97203000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "a699e866-12f0-42c3-94fd-67ca44468805",
            disid: "7",
            name: "Алатырь г",
            okato: "97404000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "2085bdb8-ebe3-4c38-95ca-262d756da2da",
            disid: "7",
            name: "Аликовский р-н",
            okato: "97205000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "8af97197-414a-403e-968c-bcaccb25da1a",
            disid: "7",
            name: "Батыревский р-н",
            okato: "97207000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "08096852-0130-4e2f-8bac-54f5b14a9100",
            disid: "7",
            name: "Вурнарский р-н",
            okato: "97210000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "656444b1-a0fd-4203-b5f3-770e442b2373",
            disid: "7",
            name: "Ибресинский р-н",
            okato: "97213000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "6edd2a33-d03a-4d59-83c3-e14de6890a49",
            disid: "7",
            name: "Канаш г",
            okato: "97407000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "e08f62e6-e8b8-4bd5-b3e7-ad0a04a324ef",
            disid: "7",
            name: "Канашский р-н",
            okato: "97216000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "281c4d8f-3487-4685-8876-7fd1548b825c",
            disid: "7",
            name: "Козловский р-н",
            okato: "97219000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "8bdf963a-b727-46ba-a79a-3a6b53ad63f9",
            disid: "7",
            name: "Комсомольский р-н",
            okato: "97221000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "5bf8318a-86be-4e7d-9cf8-00e4298e5a77",
            disid: "7",
            name: "Красноармейский р-н",
            okato: "97224000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "e6be55b9-4ad0-4f49-a4d2-4cfa33ec3288",
            disid: "7",
            name: "Красночетайский р-н",
            okato: "97226000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "1f54c326-1a30-4de9-b63b-8887c2e7fc50",
            disid: "7",
            name: "Мариинско-Посадский р-н",
            okato: "97229000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "9b1f1495-babd-4a98-ac77-0ed2c8b0aeb4",
            disid: "7",
            name: "Моргаушский р-н",
            okato: "97232000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "32599307-3fe7-4cf4-8fee-640044422d68",
            disid: "7",
            name: "Новочебоксарск г",
            okato: "97410000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "05138d51-5cb7-461c-876c-4d39022c53f2",
            disid: "7",
            name: "Порецкий р-н",
            okato: "97235000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "4651f974-e938-4241-8686-7e2bad32e5bc",
            disid: "7",
            name: "Урмарский р-н",
            okato: "97238000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "ecbb1174-d7b8-4bd2-a816-5866b6e5c3d1",
            disid: "7",
            name: "Цивильский р-н",
            okato: "97241000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "75b5fa1f-d054-4207-a56a-1d75e8eae490",
            disid: "7",
            name: "Чебоксарский р-н",
            okato: "97244000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "dd8caeab-c685-4f2a-bf5f-550aca1bbc48",
            disid: "7",
            name: "Чебоксары г",
            okato: "97401000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "144ddb64-8ff6-4396-8ee6-7207bfbde842",
            disid: "7",
            name: "Шемуршинский р-н",
            okato: "97247000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "7b4c974c-07c2-447e-aee3-285105490e72",
            disid: "7",
            name: "Шумерлинский р-н",
            okato: "97250000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "068dfc2d-3a52-4d7f-93bc-797c286e66ac",
            disid: "7",
            name: "Шумерля г",
            okato: "97413000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "37795704-1b76-4cf1-a17b-7d468df54c77",
            disid: "7",
            name: "Ядринский р-н",
            okato: "97253000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "b757ac67-4ee8-4efd-8ca7-00db36b16822",
            disid: "7",
            name: "Яльчикский р-н",
            okato: "97255000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "aa3ebec8-bf5f-4a88-a20b-1baa148db615",
            disid: "7",
            name: "Янтиковский р-н",
            okato: "97258000000",
            parentguid: "878fc621-3708-46c7-a97f-5a13a4176b3e",
            regioncode: "21"
        }, {
            aoguid: "85f0e9d0-2eef-4393-a6fc-70db6d392e2b",
            disid: "8",
            name: "Агульский р-н",
            okato: "82201000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "0a0a769f-f61b-4108-9646-0051d578eb82",
            disid: "8",
            name: "Акушинский р-н",
            okato: "82203000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "ce1f8432-372b-4385-93dc-4d117b1db302",
            disid: "8",
            name: "Ахвахский р-н",
            okato: "82205000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "d1f1ef86-254d-4eb4-b573-ccb5e1599791",
            disid: "8",
            name: "Ахтынский р-н",
            okato: "82206000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "5dfec640-b5fe-4abd-9999-b5b00a5a8590",
            disid: "8",
            name: "Бабаюртовский р-н",
            okato: "82207000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "97f7f1dc-4e02-4b10-bc2c-d654674d8ff5",
            disid: "8",
            name: "Ботлихский р-н",
            okato: "82209000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "fab58303-fb09-422e-aeb7-6fdb5dfe7941",
            disid: "8",
            name: "Буйнакск г",
            okato: "82405000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "ab422614-a6be-46d4-81da-d556dbae4237",
            disid: "8",
            name: "Буйнакский р-н",
            okato: "82211000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "d38e45bb-bb25-499b-b8b8-b53c3330c435",
            disid: "8",
            name: "Гергебильский р-н",
            okato: "82213000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "aa3b9fdf-4ecc-400b-96a2-c46c7b1b8203",
            disid: "8",
            name: "Гумбетовский р-н",
            okato: "82215000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "47e1fc4c-4ad1-4d03-91f7-981184adcbe7",
            disid: "8",
            name: "Гунибский р-н",
            okato: "82216000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "8b4a997b-1e70-402a-a56a-e93c81d0ff20",
            disid: "8",
            name: "Дагестанские Огни г",
            okato: "82408000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "50d1aa31-1eef-48df-951a-3e89ce79368f",
            disid: "8",
            name: "Дахадаевский р-н",
            okato: "82218000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "1bde5cf4-7943-4b17-9718-2c1d96742be5",
            disid: "8",
            name: "Дербент г",
            okato: "82410000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "35f01ea7-5e6d-42ec-9dd3-0bf62002ff17",
            disid: "8",
            name: "Дербентский р-н",
            okato: "82220000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "58d30030-35f4-4e06-9930-f8eac02c466e",
            disid: "8",
            name: "Докузпаринский р-н",
            okato: "82221000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "bf14786f-6c0e-4369-8907-57f9d3fd93ac",
            disid: "8",
            name: "Избербаш г",
            okato: "82415000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "33af6084-b0a2-406f-9899-f23ced672e0a",
            disid: "8",
            name: "Казбековский р-н",
            okato: "82222000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "83f2eced-b5ff-41e7-a798-9cb1695360c6",
            disid: "8",
            name: "Кайтагский р-н",
            okato: "82223000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "48dc343b-1460-4194-a11b-7343d9584ae3",
            disid: "8",
            name: "Карабудахкентский р-н",
            okato: "82235000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "a8695cce-c623-4451-bb47-2d69ab22092a",
            disid: "8",
            name: "Каспийск г",
            okato: "82420000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "82e41cd2-4ce8-4496-a4c1-2ec21d6f4af1",
            disid: "8",
            name: "Каякентский р-н",
            okato: "82224000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "efc8a6e2-ffab-4d69-a35b-019bfe89745e",
            disid: "8",
            name: "Кизилюрт г",
            okato: "82425000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "ccbc2084-f8f1-4d1c-8e62-0cd4622757fb",
            disid: "8",
            name: "Кизилюртовский р-н",
            okato: "82226000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "e18e67f7-e62a-4abe-853c-ffb8e5ab57e1",
            disid: "8",
            name: "Кизляр г",
            okato: "82430000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "ddda03ea-0b8b-4c00-9b1f-47b1c1396321",
            disid: "8",
            name: "Кизлярский р-н",
            okato: "82227000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "e8c63341-9ffe-4232-8410-7aa17a017b28",
            disid: "8",
            name: "Кулинский р-н",
            okato: "82229000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "ccdb090c-202e-4826-b684-3d3fa93eb1c5",
            disid: "8",
            name: "Кумторкалинский р-н",
            okato: "82236000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "e5f3e12c-08af-4578-acd0-b647372e587f",
            disid: "8",
            name: "Курахский р-н",
            okato: "82230000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "328172fa-e4d2-48fa-9029-15ce6ef5b01f",
            disid: "8",
            name: "Лакский р-н",
            okato: "82232000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "953ec287-c1d5-4fe5-bf7c-883343ea2688",
            disid: "8",
            name: "Левашинский р-н",
            okato: "82234000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "f3e35a89-84c6-48bc-8663-6ccebea9001c",
            disid: "8",
            name: "Магарамкентский р-н",
            okato: "82237000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "727cdf1e-1b70-4e07-8995-9bf7ca9abefb",
            disid: "8",
            name: "Махачкала г",
            okato: "82401000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "cfb81dee-463e-492f-83ca-f868e587fd15",
            disid: "8",
            name: "Новолакский р-н",
            okato: "82239000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "4d9b6817-b018-4a51-a6c2-90b5ed3b7d70",
            disid: "8",
            name: "Ногайский р-н",
            okato: "82240000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "2045091f-d193-4192-806f-63137ee168ee",
            disid: "8",
            name: "Рутульский р-н",
            okato: "82242000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "4c0aa2d7-166d-4d0a-a1f8-b09cb1a9e119",
            disid: "8",
            name: "Сергокалинский р-н",
            okato: "82244000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "c5fc372c-3f49-4342-ba50-bdcfb83f17b1",
            disid: "8",
            name: "Сулейман-Стальский р-н",
            okato: "82247000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "5739240f-becb-49c0-be5e-16d0390dae29",
            disid: "8",
            name: "Табасаранский р-н",
            okato: "82248000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "7773a56a-e055-4754-a598-049346ec0877",
            disid: "8",
            name: "Тарумовский р-н",
            okato: "82249000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "856a5f6b-4533-46da-b866-8bb72d711350",
            disid: "8",
            name: "Тляратинский р-н",
            okato: "82251000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "45ac49c5-1789-4be2-aca2-f88c277e1d8b",
            disid: "8",
            name: "Унцукульский р-н",
            okato: "82253000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "b10ca6a7-e9c0-4382-b939-4787aaf43a58",
            disid: "8",
            name: "Хасавюрт г",
            okato: "82435000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "c6afea54-def9-4ce4-a463-a068dc1bd9a6",
            disid: "8",
            name: "Хасавюртовский р-н",
            okato: "82254000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "31278957-bac1-420c-9731-447a724d15f3",
            disid: "8",
            name: "Хивский р-н",
            okato: "82255000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "92ce3e17-234f-4749-b51c-5c9b4e4cf878",
            disid: "8",
            name: "Хунзахский р-н",
            okato: "82256000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "12587456-05b7-4731-a8cc-f0c1f1a6ab51",
            disid: "8",
            name: "Цумадинский р-н",
            okato: "82257000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "a064c28e-7d68-4da3-ac07-69d9e7337554",
            disid: "8",
            name: "Цунтинский р-н",
            okato: "82258000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "9e7e566c-26e9-4b02-a26f-a4cd8baf91e7",
            disid: "8",
            name: "Чародинский р-н",
            okato: "82259000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "baa17a03-5a8f-47ee-b782-ed9a6d2fb93c",
            disid: "8",
            name: "Шамильский р-н",
            okato: "82246000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "733221a2-f789-4dda-a3f4-e41c88b6cfbd",
            disid: "8",
            name: "Южно-Сухокумск г",
            okato: "82438000000",
            parentguid: "0bb7fa19-736d-49cf-ad0e-9774c4dae09b",
            regioncode: "05"
        }, {
            aoguid: "5ded8743-ed0b-4a3a-a979-82580e1957c4",
            disid: "8",
            name: "Джейрахский р-н",
            okato: "26205000000",
            parentguid: "b2d8cd20-cabc-4deb-afad-f3c4b4d55821",
            regioncode: "06"
        }, {
            aoguid: "2c33c72e-642b-4a7e-afe5-982f5adf6b17",
            disid: "8",
            name: "Карабулак г",
            okato: "26408000000",
            parentguid: "b2d8cd20-cabc-4deb-afad-f3c4b4d55821",
            regioncode: "06"
        }, {
            aoguid: "c801edb4-aba2-4e1d-9ab2-69fcbf0aeb9c",
            disid: "8",
            name: "Магас г",
            okato: "26401000000",
            parentguid: "b2d8cd20-cabc-4deb-afad-f3c4b4d55821",
            regioncode: "06"
        }, {
            aoguid: "5c318987-0763-4822-9c57-0d55e40fb9d7",
            disid: "8",
            name: "Малгобек г",
            okato: "26405000000",
            parentguid: "b2d8cd20-cabc-4deb-afad-f3c4b4d55821",
            regioncode: "06"
        }, {
            aoguid: "821a2a55-920c-45a3-a4d3-4efa977eedb3",
            disid: "8",
            name: "Малгобекский р-н",
            okato: "26215000000",
            parentguid: "b2d8cd20-cabc-4deb-afad-f3c4b4d55821",
            regioncode: "06"
        }, {
            aoguid: "8e264cfb-50de-4619-9c51-49311029a657",
            disid: "8",
            name: "Назрановский р-н",
            okato: "26220000000",
            parentguid: "b2d8cd20-cabc-4deb-afad-f3c4b4d55821",
            regioncode: "06"
        }, {
            aoguid: "815566a1-04ea-44a9-b34b-25b70ac9aa9a",
            disid: "8",
            name: "Назрань г",
            okato: "26406000000",
            parentguid: "b2d8cd20-cabc-4deb-afad-f3c4b4d55821",
            regioncode: "06"
        }, {
            aoguid: "d354ee1a-c1c4-4760-a106-9c48e31d26a1",
            disid: "8",
            name: "Сунженский р-н",
            okato: "26230000000",
            parentguid: "b2d8cd20-cabc-4deb-afad-f3c4b4d55821",
            regioncode: "06"
        }, {
            aoguid: "91219cca-5824-4104-af67-df325cd6cfc1",
            disid: "8",
            name: "Баксанский р-н",
            okato: "83210000000",
            parentguid: "1781f74e-be4a-4697-9c6b-493057c94818",
            regioncode: "07"
        }, {
            aoguid: "b7f7cac5-7849-4664-b5bf-711dfdc80fed",
            disid: "8",
            name: "Зольский р-н",
            okato: "83215000000",
            parentguid: "1781f74e-be4a-4697-9c6b-493057c94818",
            regioncode: "07"
        }, {
            aoguid: "1b676cbe-b38f-4cbe-a6f1-fc27842ab11c",
            disid: "8",
            name: "Лескенский р-н",
            okato: "83218000000",
            parentguid: "1781f74e-be4a-4697-9c6b-493057c94818",
            regioncode: "07"
        }, {
            aoguid: "bc9ab784-5caa-4a76-b461-5c4af6148e76",
            disid: "8",
            name: "Майский р-н",
            okato: "83220000000",
            parentguid: "1781f74e-be4a-4697-9c6b-493057c94818",
            regioncode: "07"
        }, {
            aoguid: "913a82e3-b671-43d5-97b4-8a08b8ee2d28",
            disid: "8",
            name: "Нальчик г",
            okato: "83401000000",
            parentguid: "1781f74e-be4a-4697-9c6b-493057c94818",
            regioncode: "07"
        }, {
            aoguid: "c0f5c483-3a72-4244-9e18-bc6b232b92dd",
            disid: "8",
            name: "Прохладненский р-н",
            okato: "83225000000",
            parentguid: "1781f74e-be4a-4697-9c6b-493057c94818",
            regioncode: "07"
        }, {
            aoguid: "3fc11139-78c9-46f1-8d1f-a5bfab5b0580",
            disid: "8",
            name: "Терский р-н",
            okato: "83235000000",
            parentguid: "1781f74e-be4a-4697-9c6b-493057c94818",
            regioncode: "07"
        }, {
            aoguid: "14a48392-f852-44e5-becc-3cc77b2f970d",
            disid: "8",
            name: "Урванский р-н",
            okato: "83240000000",
            parentguid: "1781f74e-be4a-4697-9c6b-493057c94818",
            regioncode: "07"
        }, {
            aoguid: "40aabbdc-2358-4213-bc9d-928e3e1f6e1d",
            disid: "8",
            name: "Чегемский р-н",
            okato: "83245000000",
            parentguid: "1781f74e-be4a-4697-9c6b-493057c94818",
            regioncode: "07"
        }, {
            aoguid: "2df9d3b8-0931-4dfb-b8cb-063fd17d2ab3",
            disid: "8",
            name: "Черекский р-н",
            okato: "83230000000",
            parentguid: "1781f74e-be4a-4697-9c6b-493057c94818",
            regioncode: "07"
        }, {
            aoguid: "b2d783ec-e042-49fc-ad2c-5563e5b76002",
            disid: "8",
            name: "Эльбрусский р-н",
            okato: "83248000000",
            parentguid: "1781f74e-be4a-4697-9c6b-493057c94818",
            regioncode: "07"
        }, {
            aoguid: "a1c3fe01-b49d-447b-88a2-49514bea71cd",
            disid: "8",
            name: "Абазинский р-н",
            okato: "91201000000",
            parentguid: "61b95807-388a-4cb1-9bee-889f7cf811c8",
            regioncode: "09"
        }, {
            aoguid: "5da88b67-f820-46a0-8ddd-90bff8d1b371",
            disid: "8",
            name: "Адыге-Хабльский р-н",
            okato: "91203000000",
            parentguid: "61b95807-388a-4cb1-9bee-889f7cf811c8",
            regioncode: "09"
        }, {
            aoguid: "5a2d8ffa-23d8-4dba-b389-77020a826470",
            disid: "8",
            name: "Зеленчукский р-н",
            okato: "91210000000",
            parentguid: "61b95807-388a-4cb1-9bee-889f7cf811c8",
            regioncode: "09"
        }, {
            aoguid: "cb390fbd-3149-4ac9-b9fb-6af069d51b71",
            disid: "8",
            name: "Карачаевск г",
            okato: "91405000000",
            parentguid: "61b95807-388a-4cb1-9bee-889f7cf811c8",
            regioncode: "09"
        }, {
            aoguid: "183c4921-1906-4043-af46-45c33860d840",
            disid: "8",
            name: "Карачаевский р-н",
            okato: "91215000000",
            parentguid: "61b95807-388a-4cb1-9bee-889f7cf811c8",
            regioncode: "09"
        }, {
            aoguid: "86796969-7095-40d2-96d2-39689863a111",
            disid: "8",
            name: "Малокарачаевский р-н",
            okato: "91220000000",
            parentguid: "61b95807-388a-4cb1-9bee-889f7cf811c8",
            regioncode: "09"
        }, {
            aoguid: "aa79bf7f-0cae-43aa-b144-ecbab1305573",
            disid: "8",
            name: "Ногайский р-н",
            okato: "91223000000",
            parentguid: "61b95807-388a-4cb1-9bee-889f7cf811c8",
            regioncode: "09"
        }, {
            aoguid: "16f73605-1164-4fc9-ab1c-0fa8b0c468f9",
            disid: "8",
            name: "Прикубанский р-н",
            okato: "91225000000",
            parentguid: "61b95807-388a-4cb1-9bee-889f7cf811c8",
            regioncode: "09"
        }, {
            aoguid: "e4add96a-eec6-43ee-afb7-c6dfb1e0d01d",
            disid: "8",
            name: "Урупский р-н",
            okato: "91230000000",
            parentguid: "61b95807-388a-4cb1-9bee-889f7cf811c8",
            regioncode: "09"
        }, {
            aoguid: "cd7b9207-56ad-4c20-a35e-a9607aa7ec3f",
            disid: "8",
            name: "Усть-Джегутинский р-н",
            okato: "91235000000",
            parentguid: "61b95807-388a-4cb1-9bee-889f7cf811c8",
            regioncode: "09"
        }, {
            aoguid: "e1523864-4a43-493b-b7b1-97b2aa8297c3",
            disid: "8",
            name: "Хабезский р-н",
            okato: "91240000000",
            parentguid: "61b95807-388a-4cb1-9bee-889f7cf811c8",
            regioncode: "09"
        }, {
            aoguid: "2a4a7c93-f3f8-4042-8cbf-e04ab64f5e08",
            disid: "8",
            name: "Черкесск г",
            okato: "91401000000",
            parentguid: "61b95807-388a-4cb1-9bee-889f7cf811c8",
            regioncode: "09"
        }, {
            aoguid: "ee8a6847-ce62-402b-a114-4129f5148f80",
            disid: "8",
            name: "Алагирский р-н",
            okato: "90205000000",
            parentguid: "de459e9c-2933-4923-83d1-9c64cfd7a817",
            regioncode: "15"
        }, {
            aoguid: "b3ef5dc0-459b-4766-b33e-1ddf6c916f05",
            disid: "8",
            name: "Ардонский р-н",
            okato: "90210000000",
            parentguid: "de459e9c-2933-4923-83d1-9c64cfd7a817",
            regioncode: "15"
        }, {
            aoguid: "20ea2341-4f49-4c5c-a9dc-a54688c8cc61",
            disid: "8",
            name: "Владикавказ г",
            okato: "90401000000",
            parentguid: "de459e9c-2933-4923-83d1-9c64cfd7a817",
            regioncode: "15"
        }, {
            aoguid: "80731fd9-e247-4fbb-a4ff-69627d07466a",
            disid: "8",
            name: "Дигорский р-н",
            okato: "90215000000",
            parentguid: "de459e9c-2933-4923-83d1-9c64cfd7a817",
            regioncode: "15"
        }, {
            aoguid: "25b2f567-73c2-4662-ab8f-39e6df9959e2",
            disid: "8",
            name: "Ирафский р-н",
            okato: "90220000000",
            parentguid: "de459e9c-2933-4923-83d1-9c64cfd7a817",
            regioncode: "15"
        }, {
            aoguid: "2ff96663-1835-4272-a102-c722e1f4d57b",
            disid: "8",
            name: "Кировский р-н",
            okato: "90225877001",
            parentguid: "de459e9c-2933-4923-83d1-9c64cfd7a817",
            regioncode: "15"
        }, {
            aoguid: "d04c0f8c-fe4d-4b5a-ad8e-a43f3be133c9",
            disid: "8",
            name: "Моздокский р-н",
            okato: "90230000000",
            parentguid: "de459e9c-2933-4923-83d1-9c64cfd7a817",
            regioncode: "15"
        }, {
            aoguid: "47d4bad2-d6af-4170-a318-7f954bf21f90",
            disid: "8",
            name: "Правобережный р-н",
            okato: "90235000000",
            parentguid: "de459e9c-2933-4923-83d1-9c64cfd7a817",
            regioncode: "15"
        }, {
            aoguid: "5f2f61c4-d613-49e0-b1b0-2d5c454043f0",
            disid: "8",
            name: "Пригородный р-н",
            okato: "90240000000",
            parentguid: "de459e9c-2933-4923-83d1-9c64cfd7a817",
            regioncode: "15"
        }, {
            aoguid: "27c23689-cba0-4d3e-bae1-1590756eaedc",
            disid: "8",
            name: "Александровский р-н",
            okato: "07202802000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "6a53ed6d-3b39-4749-98cf-a998838960a8",
            disid: "8",
            name: "Андроповский р-н",
            okato: "07232000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "c97e45d4-46ed-4cae-b136-9671d729f8af",
            disid: "8",
            name: "Апанасенковский р-н",
            okato: "07205000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "15087cf4-8055-4af5-89db-a4d759eebaba",
            disid: "8",
            name: "Арзгирский р-н",
            okato: "07207000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "3a45bd08-511f-4992-88ed-7654f7d49835",
            disid: "8",
            name: "Благодарненский р-н",
            okato: "07210000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "e9e849f1-2279-4ef4-ad84-beae5eac4da5",
            disid: "8",
            name: "Буденновский р-н",
            okato: "07212000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "ea88bcba-c562-438a-9115-8b32426b0c8e",
            disid: "8",
            name: "Георгиевск г",
            okato: "07407000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "660b0843-2768-42a9-8164-b9a4e427a9cc",
            disid: "8",
            name: "Георгиевский р-н",
            okato: "07215000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "41fd0e9d-3258-4c3b-af2f-60e196ad1c21",
            disid: "8",
            name: "Грачевский р-н",
            okato: "07217000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "0ca8280c-89cb-4c81-8a99-ae10a98416bc",
            disid: "8",
            name: "Ессентуки г",
            okato: "07410000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "f231a6e9-5631-44a6-80bf-585e9491165e",
            disid: "8",
            name: "Железноводск г",
            okato: "07412000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "2a8b7ef1-8d82-4e3e-95b0-b9b8933c49eb",
            disid: "8",
            name: "Изобильненский р-н",
            okato: "07220000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "2f01399c-433d-4e14-b417-f89e08a4f683",
            disid: "8",
            name: "Ипатовский р-н",
            okato: "07222000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "9de10658-2336-4b2d-9f1d-5244ef1a80aa",
            disid: "8",
            name: "Кировский р-н",
            okato: "07225000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "82551e9e-14a4-4414-ad60-6cc944763ff3",
            disid: "8",
            name: "Кисловодск г",
            okato: "07415000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "d0239ce6-5176-47be-a7a2-52de5ffcdb56",
            disid: "8",
            name: "Кочубеевский р-н",
            okato: "07228000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "5b66a096-afbc-4cb5-99da-c63d94dc28b9",
            disid: "8",
            name: "Красногвардейский р-н",
            okato: "07230000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "03c63d2b-721b-4da1-b4af-9380115d9c94",
            disid: "8",
            name: "Курский р-н",
            okato: "07233000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "52cad460-2f80-4b2c-9e29-df36dd731981",
            disid: "8",
            name: "Левокумский р-н",
            okato: "07236000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "3808db7f-f793-40d0-ad74-691c158bc2de",
            disid: "8",
            name: "Лермонтов г",
            okato: "07418000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "c4b0aa8d-32a4-4a7a-afe1-fe575a4f4487",
            disid: "8",
            name: "Минераловодский р-н",
            okato: "07239000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "0be84f75-bbb5-4471-9d0c-dfa932f5df7d",
            disid: "8",
            name: "Минеральные Воды г",
            okato: "07421000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "ff894fb7-acb4-4edf-bb48-c5349d89579b",
            disid: "8",
            name: "Невинномысск г",
            okato: "07424000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "ec4208b4-09dc-4abf-940e-35f33d374c9b",
            disid: "8",
            name: "Нефтекумский р-н",
            okato: "07241000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "f8d22184-8066-4eb8-bbaa-389dbdc196b5",
            disid: "8",
            name: "Новоалександровский р-н",
            okato: "07243000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "d9912842-e84f-4892-b4d9-205bbc7bfbe9",
            disid: "8",
            name: "Новоселицкий р-н",
            okato: "07244000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "74275c7d-b864-4048-b9bc-139c58331098",
            disid: "8",
            name: "Петровский р-н",
            okato: "07246000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "1a3c9b5a-e189-481f-a806-91e19493209f",
            disid: "8",
            name: "Предгорный р-н",
            okato: "07248000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "9b0efbd0-22bb-400d-86db-ddc69b9939d9",
            disid: "8",
            name: "Пятигорск г",
            okato: "07427000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "13fa1033-4596-46cb-a636-fc8951c60e21",
            disid: "8",
            name: "Советский р-н",
            okato: "07250000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "2a1c7bdb-05ea-492f-9e1c-b3999f79dcbc",
            disid: "8",
            name: "Ставрополь г",
            okato: "07401000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "ebbe2fa8-2c9e-4895-a336-2aea03cbe059",
            disid: "8",
            name: "Степновский р-н",
            okato: "07252000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "d54e6c03-565c-492a-b155-0333d8f84d7d",
            disid: "8",
            name: "Труновский р-н",
            okato: "07254000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "51e6a2bc-ef6a-48d5-90e2-0bf4a534b904",
            disid: "8",
            name: "Туркменский р-н",
            okato: "07256000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "e0d1e5a8-8596-4c26-afe9-431427bee578",
            disid: "8",
            name: "Шпаковский р-н",
            okato: "07258000000",
            parentguid: "327a060b-878c-4fb4-8dc4-d5595871a3d8",
            regioncode: "26"
        }, {
            aoguid: "3672454d-2697-4ce1-9666-cc9c744ba5c5",
            disid: "8",
            name: "Аргун г",
            okato: "96402000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "dd1eaca9-03df-4cb3-a3f2-1ecd4f987491",
            disid: "8",
            name: "Ачхой-Мартановский р-н",
            okato: "96202000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "f23f36c4-64fb-4233-a4bb-c30b74ceb476",
            disid: "8",
            name: "Веденский р-н",
            okato: "96204000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "8dcbac42-7c41-44fb-b8bf-6a0c4e9ac4a5",
            disid: "8",
            name: "Грозненский р-н",
            okato: "96207000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "a2072dc5-45be-4db3-ab13-10784ba8b2ae",
            disid: "8",
            name: "Грозный г",
            okato: "96401000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "e402d731-a356-45a3-8f42-ded4d4b4759c",
            disid: "8",
            name: "Гудермесский р-н",
            okato: "96210000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "a494979b-337b-4fa6-a858-c861de7769d6",
            disid: "8",
            name: "Итум-Калинский р-н",
            okato: "96211000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "2ab87546-5084-489a-a8fa-83330d138bcb",
            disid: "8",
            name: "Курчалоевский р-н",
            okato: "96212000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "64c1af4e-8ef9-40de-8870-696e77d1d1be",
            disid: "8",
            name: "Надтеречный р-н",
            okato: "96216000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "adac25fb-cf81-45d2-90d0-0f9dd83bdab6",
            disid: "8",
            name: "Наурский р-н",
            okato: "96222000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "a45b55a3-26d3-494f-b580-e0629a6cc173",
            disid: "8",
            name: "Ножай-Юртовский р-н",
            okato: "96225000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "58020e72-04fb-4d94-a8f5-8fc01dc84734",
            disid: "8",
            name: "Сунженский р-н",
            okato: "96231000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "3737082d-0752-4a84-a1e0-fab6c8a3603e",
            disid: "8",
            name: "Урус-Мартановский р-н",
            okato: "96234000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "d2cbe9c5-b602-4198-890f-f1acbdc63318",
            disid: "8",
            name: "Шалинский р-н",
            okato: "96237000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "616fa740-d435-4eae-a4fa-d7cd6cae7b7b",
            disid: "8",
            name: "Шаройский р-н",
            okato: "96291000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "521db90d-65f5-4789-8d07-542cbc03db6e",
            disid: "8",
            name: "Шатойский р-н",
            okato: "96228000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }, {
            aoguid: "d69b52ac-590f-4f88-8419-6874dcec2821",
            disid: "8",
            name: "Шелковской р-н",
            okato: "96240000000",
            parentguid: "de67dc49-b9ba-48a3-a4cc-c2ebfeca6c5e",
            regioncode: "20"
        }]
    }
}

// ===========================================================================

