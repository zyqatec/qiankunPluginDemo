/**
 * Cesium - https://github.com/AnalyticalGraphicsInc/cesium
 *
 * Copyright 2011-2017 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/AnalyticalGraphicsInc/cesium/blob/master/LICENSE.md for full licensing details.
 */
/**
  @license
  when.js - https://github.com/cujojs/when

  MIT License (c) copyright B Cavalier & J Hann

 * A lightweight CommonJS Promises/A and when() implementation
 * when is part of the cujo.js family of libraries (http://cujojs.com/)
 *
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @version 1.7.1
 */

!function(){!function(e){"use strict";e("ThirdParty/when",[],function(){function e(e,t,n,o){return r(e).then(t,n,o)}function r(e){var r,t;return e instanceof n?r=e:s(e)?(t=i(),e.then(function(e){t.resolve(e)},function(e){t.reject(e)},function(e){t.progress(e)}),r=t.promise):r=o(e),r}function t(r){return e(r,c)}function n(e){this.then=e}function o(e){var t=new n(function(t){try{return r(t?t(e):e)}catch(n){return c(n)}});return t}function c(e){var t=new n(function(t,n){try{return n?r(n(e)):c(e)}catch(o){return c(o)}});return t}function i(){function e(e,r,t){return d(e,r,t)}function t(e){return v(e)}function o(e){return v(c(e))}function s(e){return h(e)}var u,a,f,l,d,h,v;return a=new n(e),u={then:e,resolve:t,reject:o,progress:s,promise:a,resolver:{resolve:t,reject:o,progress:s}},f=[],l=[],d=function(e,r,t){var n,o;return n=i(),o="function"==typeof t?function(e){try{n.progress(t(e))}catch(r){n.progress(r)}}:function(e){n.progress(e)},f.push(function(t){t.then(e,r).then(n.resolve,n.reject,o)}),l.push(o),n.promise},h=function(e){return p(l,e),e},v=function(e){return e=r(e),d=e.then,v=r,h=b,p(f,e),l=f=S,e},u}function s(e){return e&&"function"==typeof e.then}function u(r,t,n,o,c){return m(2,arguments),e(r,function(r){function s(e){p(e)}function u(e){v(e)}var a,f,l,d,h,v,p,m,g,y;if(g=r.length>>>0,a=Math.max(0,Math.min(t,g)),l=[],f=g-a+1,d=[],h=i(),a)for(m=h.progress,p=function(e){d.push(e),--f||(v=p=b,h.reject(d))},v=function(e){l.push(e),--a||(v=p=b,h.resolve(l))},y=0;g>y;++y)y in r&&e(r[y],u,s,m);else h.resolve(l);return h.then(n,o,c)})}function a(e,r,t,n){function o(e){return r?r(e[0]):e[0]}return u(e,1,o,t,n)}function f(e,r,t,n){return m(1,arguments),d(e,g).then(r,t,n)}function l(){return d(arguments,g)}function d(r,t){return e(r,function(r){var n,o,c,s,u,a;if(c=o=r.length>>>0,n=[],a=i(),c)for(s=function(r,o){e(r,t).then(function(e){n[o]=e,--c||a.resolve(n)},a.reject)},u=0;o>u;u++)u in r?s(r[u],u):--c;else a.resolve(n);return a.promise})}function h(r,t){var n=j.call(arguments,1);return e(r,function(r){var o;return o=r.length,n[0]=function(r,n,c){return e(r,function(r){return e(n,function(e){return t(r,e,c,o)})})},y.apply(r,n)})}function v(r,t,n){var o=arguments.length>2;return e(r,function(e){return e=o?n:e,t.resolve(e),e},function(e){return t.reject(e),c(e)},t.progress)}function p(e,r){for(var t,n=0;t=e[n++];)t(r)}function m(e,r){for(var t,n=r.length;n>e;)if(t=r[--n],null!=t&&"function"!=typeof t)throw new Error("arg "+n+" must be a function")}function b(){}function g(e){return e}var y,j,S;return e.defer=i,e.resolve=r,e.reject=t,e.join=l,e.all=f,e.map=d,e.reduce=h,e.any=a,e.some=u,e.chain=v,e.isPromise=s,n.prototype={always:function(e,r){return this.then(e,e,r)},otherwise:function(e){return this.then(S,e)},"yield":function(e){return this.then(function(){return e})},spread:function(e){return this.then(function(r){return f(r,function(r){return e.apply(S,r)})})}},j=[].slice,y=[].reduce||function(e){var r,t,n,o,c;if(c=0,r=Object(this),o=r.length>>>0,t=arguments,t.length<=1)for(;;){if(c in r){n=r[c++];break}if(++c>=o)throw new TypeError}else n=t[1];for(;o>c;++c)c in r&&(n=e(n,r[c],c,r));return n},e})}("function"==typeof define&&define.amd?define:function(e){"object"==typeof exports?module.exports=e():this.when=e()}),define("Core/defined",[],function(){"use strict";function e(e){return void 0!==e&&null!==e}return e}),define("Core/freezeObject",["./defined"],function(e){"use strict";var r=Object.freeze;return e(r)||(r=function(e){return e}),r}),define("Core/defaultValue",["./freezeObject"],function(e){"use strict";function r(e,r){return void 0!==e&&null!==e?e:r}return r.EMPTY_OBJECT=e({}),r}),define("Core/formatError",["./defined"],function(e){"use strict";function r(r){var t,n=r.name,o=r.message;t=e(n)&&e(o)?n+": "+o:r.toString();var c=r.stack;return e(c)&&(t+="\n"+c),t}return r}),define("Workers/createTaskProcessorWorker",["../ThirdParty/when","../Core/defaultValue","../Core/defined","../Core/formatError"],function(e,r,t,n){"use strict";function o(r,t,n){var o;try{return o=r(t,n)}catch(c){return e.reject(c)}}function c(c){var i;return function(s){var u=s.data,a=[],f={id:u.id,result:void 0,error:void 0};return e(o(c,u.parameters,a)).then(function(e){f.result=e}).otherwise(function(e){e instanceof Error?f.error={name:e.name,message:e.message,stack:e.stack}:f.error=e}).always(function(){t(i)||(i=r(self.webkitPostMessage,self.postMessage)),u.canTransferArrayBuffer||(a.length=0);try{i(f,a)}catch(e){f.result=void 0,f.error="postMessage failed with error: "+n(e)+"\n  with responseMessage: "+JSON.stringify(f),i(f)}})}}return c}),define("Core/DeveloperError",["./defined"],function(e){"use strict";function r(e){this.name="DeveloperError",this.message=e;var r;try{throw new Error}catch(t){r=t.stack}this.stack=r}return e(Object.create)&&(r.prototype=Object.create(Error.prototype),r.prototype.constructor=r),r.prototype.toString=function(){var r=this.name+": "+this.message;return e(this.stack)&&(r+="\n"+this.stack.toString()),r},r.throwInstantiationError=function(){throw new r("This function defines an interface and should not be called directly.")},r}),define("core/IndexedDBScheduler",["../ThirdParty/when","../Core/defined","../Core/DeveloperError"],function(e,r,t){"use strict";function n(n){if(!r(n.name))throw new t("options.name is required.");var o=e.defer();this.dbname=n.name;var c=indexedDB.open(this.dbname),i=this;return c.onsuccess=function(e){i.db=e.target.result,i.version=i.db.version,r(i.cachestatus)||(i.cachestatus={}),o.resolve(i)},c.onupgradeneeded=function(e){i.db=e.target.result,i.version=i.db.version,o.resolve(i)},c.onerror=function(e){i.db=null,o.reject("create database fail, error code : "+e.target.errorcode)},this.layer=n.layer||null,this.storageType=n.storageType||"arrayBuffer",this.creatingTable=!1,this.cachestatus={},o.promise}var o={NONE:0,STORING:1,STORED:2,FAILED:3};return n.prototype.checkObjectStoreExit=function(e){return r(this.db)?this.db.objectStoreNames.contains(e):!1},n.prototype.createObjectStore=function(t){var n=e.defer();if(this.creatingTable)n.reject(!1);else{if(this.db.objectStoreNames.contains(t))return n.reject(!1),n.promise;this.creatingTable=!0;var o=this,c=parseInt(o.db.version);o.db.close();var i=indexedDB.open(o.dbname,c+1);i.onupgradeneeded=function(e){var c=e.target.result;o.db=c;var i=c.createObjectStore(t,{keyPath:"id"});if(r(i)){i.createIndex("value","value",{unique:!1}),o.creatingTable=!1,r(o.cachestatus)||(o.cachestatus={}),o.cachestatus[t]={},o.db.close();var s=indexedDB.open(o.dbname);s.onsuccess=function(e){var r=e.target.result;o.db=r,n.resolve(!0)}}else o.creatingTable=!1,n.reject(!1)},i.onsuccess=function(e){e.target.result.close(),n.resolve(!0)},i.onerror=function(e){o.creatingTable=!1,n.reject(!1)}}return n.promise},n.prototype.putElementInDB=function(t,n,c,i){var s=e.defer();if(!r(this.db))return s.reject(!1),s.promise;var u,a=this;if(r(a.cachestatus[t])&&!r(i)&&r(a.cachestatus[t][n])&&(a.cachestatus[t][n]===o.STORING||a.cachestatus[t][n]===o.STORED))return s.resolve(!1),s.promise;if(this.db.objectStoreNames.contains(t)){r(a.cachestatus[t])||(a.cachestatus[t]={});var f;try{f=this.db.transaction([t],"readwrite")}catch(l){return s.reject(null),s.promise}if(u=f.objectStore(t),r(i)){for(var d=0,h=i.length;h>d;d++)a.cachestatus[t][i[d].key]!==o.STORED&&(u.add({id:i[d].key,value:i[d].value}),a.cachestatus[t][i[d].key]=o.STORED);s.resolve(!0)}else{var v=u.add({id:n,value:c});a.cachestatus[t][n]=o.STORING,v.onsuccess=function(e){a.cachestatus[t][n]=o.STORED,s.resolve(!0)},v.onerror=function(e){a.cachestatus[t][n]=o.FAILED,s.reject(!1)}}}else this.createObjectStore(t).then(function(e){var o=a.db.transaction([t],"readwrite");if(u=o.objectStore(t),r(i)){for(var f=0,l=i.length;l>f;f++)u.add({id:i[f].key,value:i[f].value});s.resolve(!0)}else{var d=u.add({id:n,value:c});d.onsuccess=function(e){s.resolve(!0)},d.onerror=function(e){s.reject(!1)}}},function(e){s.reject(!1)});return s.promise},n.prototype.getElementFromDB=function(t,n){var o=e.defer();if(!r(this.db))return null;if(!this.db.objectStoreNames.contains(t))return null;var c;try{c=this.db.transaction([t])}catch(i){return o.reject(null),o.promise}var s;try{s=c.objectStore(t)}catch(i){o.reject(null)}var u=s.get(n);return u.onsuccess=function(e){return r(e.target.result)?void o.resolve(e.target.result.value):void o.reject(null)},u.onerror=function(e){o.reject(null)},o.promise},n.prototype.updateElementInDB=function(t,n,o){var c=e.defer();if(!r(this.db))return c.resolve(!1),c.promise;if(!this.db.objectStoreNames.contains(t))return c.resolve(!1),c.promise;var i,s=this.db.transaction([t],"readwrite");try{i=s.objectStore(t)}catch(u){c.resolve(!1)}var a=i.get(n);return a.onsuccess=function(e){var t=e.target.result;if(!r(t))return void c.resolve(!1);t.value=o;var n=i.put(t);n.onsuccess=function(e){c.resolve(!0)},n.onerror=function(e){c.resolve(!1)}},a.onerror=function(e){c.resolve(!1)},c.promise},n.prototype.removeElementFromDB=function(t,n){var o=e.defer();if(!r(this.db))return o.resolve(!1),o.promise;if(!this.db.objectStoreNames.contains(t))return o.resolve(!1),o.promise;var c,i=this.db.transaction([t],"readwrite");try{c=i.objectStore(t)}catch(s){o.resolve(!1)}var u=c["delete"](n);return u.onerror=function(e){o.resolve(!1)},u.onsuccess=function(e){o.resolve(!0)},o.promise},n.prototype.clear=function(t){var n=e.defer();if(!r(this.db))return n.resolve(!1),n.promise;if(!this.db.objectStoreNames.contains(t))return n.resolve(!1),n.promise;var o,c=this.db.transaction([t],"readwrite");try{o=c.objectStore(t)}catch(i){n.resolve(!1)}var s=o.clear();return s.onerror=function(e){n.resolve(!1)},s.onsuccess=function(e){n.resolve(!0)},n.promise},n}),define("Workers/indexedDBWorker",["./createTaskProcessorWorker","../core/IndexedDBScheduler"],function(e,r){"use strict";function t(e,r){var t=e.blob,c=e.key,i=e.tablename,s=e.dbname;o.push({key:c,value:t}),o.length>100&&n(s,i)}function n(e,t){null===c?i||(i=!0,new r({name:e}).then(function(e){i=!1,c=e,e.checkObjectStoreExit(t)?(e.putElementInDB(t,null,null,o),o=[]):s||(s=!0,e.createObjectStore(t).then(function(){s=!1,e.putElementInDB(t,null,null,o),o=[]}))})):c.checkObjectStoreExit(t)?(c.putElementInDB(t,null,null,o),o=[]):s||(s=!0,c.createObjectStore(t).then(function(){s=!1,c.putElementInDB(t,null,null,o),o=[]}))}var o=[],c=null,i=!1,s=!1;return e(t)})}();