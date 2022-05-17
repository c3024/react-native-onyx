!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("underscore"),require("expensify-common/lib/str"),require("lodash/merge"),require("localforage"),require("react")):"function"==typeof define&&define.amd?define(["underscore","expensify-common/lib/str","lodash/merge","localforage","react"],t):"object"==typeof exports?exports["react-native-onyx/web"]=t(require("underscore"),require("expensify-common/lib/str"),require("lodash/merge"),require("localforage"),require("react")):e["react-native-onyx/web"]=t(e.underscore,e["expensify-common/lib/str"],e["lodash/merge"],e.localforage,e.react)}(self,((e,t,n,r,a)=>(()=>{var o={228:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},858:e=>{e.exports=function(e){if(Array.isArray(e))return e}},646:(e,t,n)=>{var r=n(228);e.exports=function(e){if(Array.isArray(e))return r(e)}},506:e=>{e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},575:e=>{e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},913:e=>{function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}},713:e=>{e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},154:e=>{function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},t.apply(this,arguments)}e.exports=t},754:e=>{function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(n)}e.exports=t},205:(e,t,n)=>{var r=n(489);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},318:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}}},860:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},884:e=>{e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}},521:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},585:(e,t,n)=>{var r=n(8),a=n(506);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?a(e):t}},489:e=>{function t(n,r){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(n,r)}e.exports=t},38:(e,t,n)=>{var r=n(858),a=n(884),o=n(379),u=n(521);e.exports=function(e,t){return r(e)||a(e,t)||o(e,t)||u()}},319:(e,t,n)=>{var r=n(646),a=n(860),o=n(379),u=n(206);e.exports=function(e){return r(e)||a(e)||o(e)||u()}},8:e=>{function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(n)}e.exports=t},379:(e,t,n)=>{var r=n(228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},137:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.registerLogger=function(e){n=e},t.logInfo=function(e){n({message:"[Onyx] "+e,level:"info"})},t.logAlert=function(e){n({message:"[Onyx] "+e,level:"alert"})};var n=function(){}},852:(e,t,n)=>{var r=n(318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(38)),o=r(n(319)),u=r(n(713)),i=r(n(154)),l=r(n(952)),s=r(n(97)),c=r(n(179)),f=r(n(959)),d=n(137),y=r(n(694)),h=r(n(123)),p=0,v={},m={},g=[],b=[],k={},x={},O=(0,h.default)();function P(e){if(y.default.hasCacheForKey(e))return Promise.resolve(y.default.getValue(e));var t="get:"+e;if(y.default.hasPendingTask(t))return y.default.getTaskPromise(t);var n=f.default.getItem(e).then((function(t){return y.default.set(e,t),t})).catch((function(t){return(0,d.logInfo)("Unable to get item from persistent storage. Key: "+e+" Error: "+t)}));return y.default.captureTask(t,n)}function w(){var e=y.default.getAllKeys();if(e.length>0)return Promise.resolve(e);var t="getAllKeys";if(y.default.hasPendingTask(t))return y.default.getTaskPromise(t);var n=f.default.getAllKeys().then((function(e){return l.default.each(e,(function(e){return y.default.addKey(e)})),e}));return y.default.captureTask(t,n)}function I(e){return l.default.contains(l.default.values(m.COLLECTION),e)}function S(e,t){return I(e)?s.default.startsWith(t,e):e===t}function K(e){return l.default.some(b,(function(t){return S(t,e)}))}function _(e){g=l.default.without(g,e)}function M(e){!I(e)&&K(e)&&(_(e),g.push(e))}function j(e,t){k[e]=l.default.without(k[e]||[],t),0===k[e].length&&delete k[e]}function T(){return w().then((function(e){l.default.each(b,(function(t){l.default.each(e,(function(e){S(t,e)&&M(e)}))}))}))}function E(e,t){l.default.isNull(t)?_(e):M(e),l.default.each(v,(function(n){if(n&&S(n.key,e)){if(l.default.isFunction(n.callback)&&n.callback(t,e),!n.withOnyxInstance)return;I(n.key)?n.withOnyxInstance.setState((function(r){var a=l.default.clone(r[n.statePropertyName]||{});return a[e]=t,(0,u.default)({},n.statePropertyName,a)})):n.withOnyxInstance.setState((0,u.default)({},n.statePropertyName,t))}}))}function A(e,t,n){v[e.connectionID]&&(e.withOnyxInstance?e.withOnyxInstance.setWithOnyxState(e.statePropertyName,t):l.default.isFunction(e.callback)&&e.callback(t,n))}function C(e){return y.default.set(e,null),Promise.resolve().then((function(){return E(e,null)})),f.default.removeItem(e)}function N(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];if((0,d.logInfo)("Handled error: "+e),e&&s.default.startsWith(e.message,"Failed to execute 'put' on 'IDBObjectStore'"))throw(0,d.logAlert)("Attempted to set invalid data set in Onyx. Please ensure all data is serializable."),e;var o=l.default.find(g,(function(e){return!k[e]}));if(!o)throw(0,d.logAlert)("Out of storage. But found no acceptable keys to remove."),e;return(0,d.logInfo)("Out of storage. Evicting least recently accessed key ("+o+") and retrying."),C(o).then((function(){return t.apply(void 0,r)}))}function R(e,t){return(0,d.logInfo)("set() called for key: "+e+(l.default.isObject(t)?" properties: "+l.default.keys(t).join(","):"")),function(e){return Boolean(L[e])}(e)&&(0,d.logAlert)("Onyx.set() called after Onyx.merge() for key: "+e+". It is recommended to use set() or merge() not both."),y.default.set(e,t),Promise.resolve().then((function(){return E(e,t)})),f.default.setItem(e,t).catch((function(n){return N(n,R,e,t)}))}function W(e){return l.default.map(e,(function(e,t){return[t,e]}))}function D(e){var t=W(e);return l.default.each(e,(function(e,t){y.default.set(t,e),Promise.resolve().then((function(){return E(t,e)}))})),f.default.multiSet(t).catch((function(t){return N(t,D,e)}))}var L={};function q(e,t){return L[e]?(L[e].push(t),Promise.resolve()):(L[e]=[t],P(e).then((function(t){try{var n=function(e,t){var n=L[e];return l.default.isArray(t)||l.default.every(n,l.default.isArray)?l.default.reduce(n,(function(e,t){return[].concat((0,o.default)(e),(0,o.default)(t))}),t||[]):l.default.isObject(t)||l.default.every(n,l.default.isObject)?l.default.reduce(n,(function(e,t){var n=(0,c.default)({},e,t);return l.default.omit(n,(function(e,n){return l.default.isNull(t[n])}))}),t||{}):l.default.last(n)}(e,t);return delete L[e],R(e,n)}catch(t){(0,d.logAlert)("An error occurred while applying merge for key: "+e+", Error: "+t)}return Promise.resolve()})))}function U(){return f.default.multiGet(l.default.keys(x)).then((function(e){var t=l.default.object(e),n=(0,c.default)(t,x);y.default.merge(n),l.default.each(n,(function(e,t){return E(t,e)}))}))}function F(){return w().then((function(e){l.default.each(e,(function(e){E(e,null),y.default.set(e,null)}))})).then(f.default.clear).then(U)}function B(e,t){return l.default.each(t,(function(t,n){if(!S(e,n))throw new Error("Provided collection does not have all its data belonging to the same parent. CollectionKey: "+e+", DataKey: "+n)})),w().then((function(n){var r=l.default.chain(t).keys().partition((function(e){return n.includes(e)})).value(),o=(0,a.default)(r,2),s=o[0],d=o[1],h=l.default.pick(t,s),p=l.default.pick(t,d),m=W(h),g=W(p),b=[];return m.length>0&&b.push(f.default.multiMerge(m)),g.length>0&&b.push(f.default.multiSet(g)),Promise.all(l.default.map(s,P)).then((function(){y.default.merge(t),function(e,t){l.default.each(v,(function(n){if(n){var r=S(n.key,e)&&I(n.key),a=n.key.startsWith(e);if(r)if(l.default.isFunction(n.callback)){var o=function(e){var t=l.default.filter(y.default.getAllKeys(),(function(t){return S(e,t)}));return l.default.reduce(t,(function(e,t){var n=y.default.getValue(t);return n?(0,i.default)({},e,(0,u.default)({},t,n)):e}),{})}(e);l.default.each(t,(function(e,t){n.callback(o[t],t)}))}else n.withOnyxInstance&&n.withOnyxInstance.setState((function(e){var r=l.default.clone(e[n.statePropertyName]||{});return l.default.each(t,(function(e,t){r[t]?(0,c.default)(r[t],e):r[t]=e})),(0,u.default)({},n.statePropertyName,r)}));else if(a){var s=t[n.key];if(l.default.isUndefined(s))return;n.withOnyxInstance.setState((function(e){return(0,u.default)({},n.statePropertyName,l.default.isObject(s)?(0,i.default)({},e[n.statePropertyName],s):s)}))}}}))}(e,t)})),Promise.all(b).catch((function(e){return N(e,B,t)}))}))}var V={connect:function(e){var t=p++;return v[t]=e,v[t].connectionID=t,!1===e.initWithStoredValues||O.promise.then((function(){if(K(e.key)&&(y.default.removeLeastRecentlyUsedKeys(),e.withOnyxInstance&&!I(e.key))){if(l.default.isUndefined(e.canEvict))throw new Error("Cannot subscribe to safe eviction key '"+e.key+"' without providing a canEvict value.");M(e.key)}})).then(w).then((function(t){var n=l.default.filter(t,(function(t){return S(e.key,t)}));0!==n.length?e.withOnyxInstance&&I(e.key)?Promise.all(l.default.map(n,(function(e){return P(e)}))).then((function(e){return l.default.reduce(e,(function(e,t,r){return(0,i.default)({},e,(0,u.default)({},n[r],t))}),{})})).then((function(t){return A(e,t)})):l.default.each(n,(function(t){P(t).then((function(n){return A(e,n,t)}))})):A(e,null)})),t},disconnect:function(e,t){v[e]&&(t&&j(t,e),delete v[e])},set:R,multiSet:D,merge:q,mergeCollection:B,clear:F,init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.keys,r=void 0===t?{}:t,a=e.initialKeyStates,o=void 0===a?{}:a,u=e.safeEvictionKeys,i=void 0===u?[]:u,s=e.maxCachedKeysCount,c=void 0===s?1e3:s,d=e.captureMetrics,h=void 0!==d&&d,p=e.shouldSyncMultipleInstances,v=void 0===p?Boolean(n.g.localStorage):p,g=e.keysToDisableSyncEvents,k=void 0===g?[]:g;h&&z(),c>0&&y.default.setRecentKeysLimit(c),m=r,x=o,b=i,Promise.all([T(),U()]).then(O.resolve),v&&l.default.isFunction(f.default.keepInstancesSync)&&f.default.keepInstancesSync(k,(function(e,t){y.default.set(e,t),E(e,t)}))},registerLogger:d.registerLogger,addToEvictionBlockList:function(e,t){j(e,t),k[e]||(k[e]=[]),k[e].push(t)},removeFromEvictionBlockList:j,isSafeEvictionKey:K};function z(){var e=n(582);P=e.decorateWithMetrics(P,"Onyx:get"),R=e.decorateWithMetrics(R,"Onyx:set"),D=e.decorateWithMetrics(D,"Onyx:multiSet"),F=e.decorateWithMetrics(F,"Onyx:clear"),q=e.decorateWithMetrics(q,"Onyx:merge"),B=e.decorateWithMetrics(B,"Onyx:mergeCollection"),w=e.decorateWithMetrics(w,"Onyx:getAllKeys"),U=e.decorateWithMetrics(U,"Onyx:defaults"),V.set=R,V.multiSet=D,V.clear=F,V.merge=q,V.mergeCollection=B,V.getMetrics=e.getMetrics,V.resetMetrics=e.resetMetrics,V.printMetrics=e.printMetrics}var Q=V;t.default=Q},694:(e,t,n)=>{var r=n(318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(319)),o=r(n(575)),u=r(n(913)),i=r(n(952)),l=r(n(179)),s=i.default.negate(i.default.isUndefined),c=new(function(){function e(){(0,o.default)(this,e),this.storageKeys=new Set,this.recentKeys=new Set,this.storageMap={},this.pendingPromises={},i.default.bindAll(this,"getAllKeys","getValue","hasCacheForKey","addKey","set","drop","merge","hasPendingTask","getTaskPromise","captureTask","removeLeastRecentlyUsedKeys","setRecentKeysLimit")}return(0,u.default)(e,[{key:"getAllKeys",value:function(){return Array.from(this.storageKeys)}},{key:"getValue",value:function(e){return this.addToAccessedKeys(e),this.storageMap[e]}},{key:"hasCacheForKey",value:function(e){return s(this.storageMap[e])}},{key:"addKey",value:function(e){this.storageKeys.add(e)}},{key:"set",value:function(e,t){return this.addKey(e),this.addToAccessedKeys(e),this.storageMap[e]=t,t}},{key:"drop",value:function(e){delete this.storageMap[e]}},{key:"merge",value:function(e){var t=this;this.storageMap=(0,l.default)({},this.storageMap,e);var n=this.getAllKeys(),r=i.default.keys(e);this.storageKeys=new Set([].concat((0,a.default)(n),(0,a.default)(r))),i.default.each(r,(function(e){return t.addToAccessedKeys(e)}))}},{key:"hasPendingTask",value:function(e){return s(this.pendingPromises[e])}},{key:"getTaskPromise",value:function(e){return this.pendingPromises[e]}},{key:"captureTask",value:function(e,t){var n=this;return this.pendingPromises[e]=t.finally((function(){delete n.pendingPromises[e]})),this.pendingPromises[e]}},{key:"addToAccessedKeys",value:function(e){this.recentKeys.delete(e),this.recentKeys.add(e)}},{key:"removeLeastRecentlyUsedKeys",value:function(){if(this.recentKeys.size>this.maxRecentKeysSize){var e=(0,a.default)(this.recentKeys).slice(-this.maxRecentKeysSize),t=i.default.keys(this.storageMap),n=i.default.difference(t,e);i.default.each(n,this.drop)}}},{key:"setRecentKeysLimit",value:function(e){this.maxRecentKeysSize=e}}]),e}());t.default=c},568:(e,t,n)=>{var r=n(318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(575)),o=r(n(913)),u=function(){function e(t){(0,a.default)(this,e),this.queue=[],this.isProcessing=!1,this.run=t}return(0,o.default)(e,[{key:"process",value:function(){var e=this;if(!this.isProcessing&&0!==this.queue.length){this.isProcessing=!0;var t=this.queue.shift(),n=t.data,r=t.resolve,a=t.reject;this.run(n).then(r).catch(a).finally((function(){e.isProcessing=!1,e.process()}))}}},{key:"push",value:function(e){var t=this;return new Promise((function(n,r){t.queue.push({resolve:n,reject:r,data:e}),t.process()}))}}]),e}();t.default=u},123:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e={};return e.promise=new Promise((function(t){e.resolve=t})),e}},582:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.decorateWithMetrics=function(){},t.getMetrics=function(){},t.resetMetrics=function(){},t.printMetrics=function(){}},722:(e,t,n)=>{var r=n(318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(154)),o=r(n(952)),u=r(n(447)),i="SYNC_ONYX";function l(e){n.g.localStorage.setItem(i,e),n.g.localStorage.removeItem(i,e)}var s=(0,a.default)({},u.default,{keepInstancesSync:function(e,t){var r=this;this.setItem=function(e,t){return u.default.setItem(e,t).then((function(){return l(e)}))},this.removeItem=function(e){return u.default.removeItem(e).then((function(){return l(e)}))},this.clear=function(){return u.default.getAllKeys().then((function(e){return o.default.map(e,(function(e){return r.removeItem(e)}))})).then((function(e){return Promise.all(e)}))},n.g.addEventListener("storage",(function(n){if(n.key===i&&n.newValue){var r=n.newValue;o.default.contains(e,r)||u.default.getItem(r).then((function(e){return t(r,e)}))}}))}});t.default=s},959:(e,t,n)=>{var r=n(318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(722)).default;t.default=a},447:(e,t,n)=>{var r=n(318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(38)),o=r(n(349)),u=r(n(952)),i=r(n(179)),l=r(n(568));o.default.config({name:"OnyxDB"});var s={setItemQueue:new l.default((function(e){var t=e.key,n=e.value;return e.shouldMerge?o.default.getItem(t).then((function(e){var r=u.default.isObject(e)?(0,i.default)({},e,n):n;return o.default.setItem(t,r)})):o.default.setItem(t,n)})),multiGet:function(e){var t=u.default.map(e,(function(e){return o.default.getItem(e).then((function(t){return[e,t]}))}));return Promise.all(t)},multiMerge:function(e){var t=this,n=u.default.map(e,(function(e){var n=(0,a.default)(e,2),r=n[0],o=n[1];return t.setItemQueue.push({key:r,value:o,shouldMerge:!0})}));return Promise.all(n).then((function(){return Promise.resolve()}))},multiSet:function(e){var t=this,n=u.default.map(e,(function(e){var n=(0,a.default)(e,2),r=n[0],o=n[1];return t.setItem(r,o)}));return Promise.all(n).then((function(){return Promise.resolve()}))},clear:o.default.clear,getAllKeys:o.default.keys,getItem:o.default.getItem,removeItem:o.default.removeItem,setItem:function(e,t){return this.setItemQueue.push({key:e,value:t})}};t.default=s},832:(e,t,n)=>{var r=n(318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=this,n=y.default.chain(e).omit((function(e){return!1===e.initWithStoredValues})).keys().value();return function(r){var g,b=function(t){(0,s.default)(k,t);var h,g,b=(h=k,g=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=(0,f.default)(h);if(g){var n=(0,f.default)(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return(0,c.default)(this,e)});function k(e){var t;return(0,u.default)(this,k),(t=b.call(this,e)).setWithOnyxState=t.setWithOnyxState.bind((0,l.default)(t)),t.activeConnectionIDs={},t.tempState={},t.state={loading:n.length>0},t}return(0,i.default)(k,[{key:"componentDidMount",value:function(){var t=this;y.default.each(e,(function(e,n){t.connectMappingToOnyx(e,n)})),this.checkEvictableKeys()}},{key:"componentDidUpdate",value:function(t){var n=this;y.default.each(e,(function(e,r){var a=p.default.result(e.key,t);a!==p.default.result(e.key,n.props)&&(v.default.disconnect(n.activeConnectionIDs[a],a),delete n.activeConnectionIDs[a],n.connectMappingToOnyx(e,r))})),this.checkEvictableKeys()}},{key:"componentWillUnmount",value:function(){var t=this;y.default.each(e,(function(e){var n=p.default.result(e.key,t.props),r=t.activeConnectionIDs[n];v.default.disconnect(r,n)}))}},{key:"setWithOnyxState",value:function(e,t){var r=this;this.state.loading?(this.tempState[e]=t,y.default.some(n,(function(e){return y.default.isUndefined(r.tempState[e])}))||(this.setState((0,a.default)({},this.tempState,{loading:!1})),delete this.tempState)):this.setState((0,o.default)({},e,t))}},{key:"checkEvictableKeys",value:function(){var t=this;y.default.each(e,(function(e){if(!y.default.isUndefined(e.canEvict)){var n=p.default.result(e.canEvict,t.props),r=p.default.result(e.key,t.props);if(!v.default.isSafeEvictionKey(r))throw new Error("canEvict cannot be used on key '"+r+"'. This key must explicitly be flagged as safe for removal by adding it to Onyx.init({safeEvictionKeys: []}).");n?v.default.removeFromEvictionBlockList(r,e.connectionID):v.default.addToEvictionBlockList(r,e.connectionID)}}))}},{key:"connectMappingToOnyx",value:function(e,t){var n=p.default.result(e.key,this.props);this.activeConnectionIDs[n]=v.default.connect((0,a.default)({},e,{key:n,statePropertyName:t,withOnyxInstance:this}))}},{key:"render",value:function(){if(this.state.loading)return null;var e=y.default.omit(this.state,"loading");e=y.default.omit(e,(function(e){return y.default.isNull(e)}));var t=y.default.omit(this.props,(function(e){return y.default.isNull(e)}));return d.default.createElement(r,(0,a.default)({},t,e,{ref:this.props.forwardedRef,__self:this,__source:{fileName:m,lineNumber:173,columnNumber:21}}))}}]),k}(d.default.Component);return b.propTypes={forwardedRef:h.default.oneOfType([h.default.func,h.default.shape({current:h.default.instanceOf(d.default.Component)})])},b.defaultProps={forwardedRef:void 0},b.displayName="withOnyx("+((g=r).displayName||g.name||"Component")+")",d.default.forwardRef((function(e,n){var r=b;return d.default.createElement(r,(0,a.default)({},e,{forwardedRef:n,__self:t,__source:{fileName:m,lineNumber:197,columnNumber:20}}))}))}};var a=r(n(154)),o=r(n(713)),u=r(n(575)),i=r(n(913)),l=r(n(506)),s=r(n(205)),c=r(n(585)),f=r(n(754)),d=r(n(156)),y=r(n(952)),h=r(n(697)),p=r(n(97)),v=r(n(852)),m="D:\\Freelance\\Expensify.react-native-onyx\\lib\\withOnyx.js"},703:(e,t,n)=>{"use strict";var r=n(414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,u){if(u!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},697:(e,t,n)=>{e.exports=n(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},97:e=>{"use strict";e.exports=t},349:e=>{"use strict";e.exports=r},179:e=>{"use strict";e.exports=n},156:e=>{"use strict";e.exports=a},952:t=>{"use strict";t.exports=e}},u={};function i(e){var t=u[e];if(void 0!==t)return t.exports;var n=u[e]={exports:{}};return o[e](n,n.exports,i),n.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}();var l={};return(()=>{var e=l,t=i(318);Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"withOnyx",{enumerable:!0,get:function(){return r.default}}),e.default=void 0;var n=t(i(852)),r=t(i(832)),a=n.default;e.default=a})(),l})()));