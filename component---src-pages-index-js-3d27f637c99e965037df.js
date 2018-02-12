webpackJsonp([35783957827783],{82:function(t,e,n){"use strict";function o(t){return t}function r(t,e,n){function r(t,e){var n=N.hasOwnProperty(e)?N[e]:null;v.hasOwnProperty(e)&&c("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&c("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function i(t,n){if(n){c("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),c(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=t.prototype,i=o.__reactAutoBindPairs;n.hasOwnProperty(p)&&g.mixins(t,n.mixins);for(var a in n)if(n.hasOwnProperty(a)&&a!==p){var s=n[a],u=o.hasOwnProperty(a);if(r(u,a),g.hasOwnProperty(a))g[a](t,s);else{var l=N.hasOwnProperty(a),d="function"==typeof s,E=d&&!l&&!u&&n.autobind!==!1;if(E)i.push(a,s),o[a]=s;else if(u){var m=N[a];c(l&&("DEFINE_MANY_MERGED"===m||"DEFINE_MANY"===m),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",m,a),"DEFINE_MANY_MERGED"===m?o[a]=f(o[a],s):"DEFINE_MANY"===m&&(o[a]=y(o[a],s))}else o[a]=s}}}else;}function u(t,e){if(e)for(var n in e){var o=e[n];if(e.hasOwnProperty(n)){var r=n in g;c(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var i=n in t;if(i){var a=_.hasOwnProperty(n)?_[n]:null;return c("DEFINE_MANY_MERGED"===a,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(t[n]=f(t[n],o))}t[n]=o}}}function l(t,e){c(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(c(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function f(t,e){return function(){var n=t.apply(this,arguments),o=e.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return l(r,n),l(r,o),r}}function y(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function d(t,e){var n=e.bind(t);return n}function E(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var o=e[n],r=e[n+1];t[o]=d(t,r)}}function m(t){var e=o(function(t,o,r){this.__reactAutoBindPairs.length&&E(this),this.props=t,this.context=o,this.refs=s,this.updater=r||n,this.state=null;var i=this.getInitialState?this.getInitialState():null;c("object"==typeof i&&!Array.isArray(i),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=i});e.prototype=new M,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],h.forEach(i.bind(null,e)),i(e,D),i(e,t),i(e,b),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),c(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in N)e.prototype[r]||(e.prototype[r]=null);return e}var h=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},_={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},g={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)i(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=a({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=a({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=f(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=a({},t.propTypes,e)},statics:function(t,e){u(t,e)},autobind:function(){}},D={componentDidMount:function(){this.__isMounted=!0}},b={componentWillUnmount:function(){this.__isMounted=!1}},v={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},M=function(){};return a(M.prototype,t.prototype,v),m}var i,a=n(4),s=n(30),c=n(1),p="mixins";i={},t.exports=r},88:function(t,e){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,i=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,p=c&&c(Object);t.exports=function t(e,u,l){if("string"!=typeof u){if(p){var f=c(u);f&&f!==p&&t(e,f,l)}var y=i(u);a&&(y=y.concat(a(u)));for(var d=0;d<y.length;++d){var E=y[d];if(!(n[E]||o[E]||l&&l[E])){var m=s(u,E);try{r(e,E,m)}catch(t){}}}return e}return e}},4:function(t,e){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function o(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=o()?Object.assign:function(t,e){for(var o,s,c=n(t),p=1;p<arguments.length;p++){o=Object(arguments[p]);for(var u in o)i.call(o,u)&&(c[u]=o[u]);if(r){s=r(o);for(var l=0;l<s.length;l++)a.call(o,s[l])&&(c[s[l]]=o[s[l]])}}return c}},179:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(6),i=o(r),a=n(136),s=o(a),c=n(257),p=o(c);e.default=function(){return i.default.createElement("div",{className:p.default.body},i.default.createElement("h1",null,"Hello world"),i.default.createElement("p",null,i.default.createElement(s.default,{className:p.default.link,to:"/otkit-desktop-typography/"},"link to otkit-desktop-typography")))},t.exports=e.default},257:function(t,e){t.exports={body:"src-styles----index-module---body---AmiUw",link:"src-styles----index-module---link---1dN_B"}}});
//# sourceMappingURL=component---src-pages-index-js-3d27f637c99e965037df.js.map