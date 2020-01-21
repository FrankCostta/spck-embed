!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define("vscode-uri",["require","exports"],t)}((function(t,e){"use strict";function r(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}function a(t){return encodeURIComponent(t).replace(/[!'()*]/g,r)}function i(t){return t.replace(/[#?]/,r)}Object.defineProperty(e,"__esModule",{value:!0});var n,s=function(){function t(){this._scheme=t._empty,this._authority=t._empty,this._path=t._empty,this._query=t._empty,this._fragment=t._empty,this._formatted=null,this._fsPath=null}return t.isUri=function(e){return e instanceof t||!!e&&("string"==typeof e.authority&&"string"==typeof e.fragment&&"string"==typeof e.path&&"string"==typeof e.query&&"string"==typeof e.scheme)},Object.defineProperty(t.prototype,"scheme",{get:function(){return this._scheme},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"authority",{get:function(){return this._authority},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"path",{get:function(){return this._path},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"query",{get:function(){return this._query},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fragment",{get:function(){return this._fragment},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fsPath",{get:function(){var e;this._fsPath||(e=this._authority&&this._path&&"file"===this.scheme?"//"+this._authority+this._path:t._driveLetterPath.test(this._path)?this._path[1].toLowerCase()+this._path.substr(2):this._path,n&&(e=e.replace(/\//g,"\\")),this._fsPath=e);return this._fsPath},enumerable:!0,configurable:!0}),t.prototype.with=function(e){if(!e)return this;var r=e.scheme,a=e.authority,i=e.path,n=e.query,s=e.fragment;if(void 0===r?r=this.scheme:null===r&&(r=""),void 0===a?a=this.authority:null===a&&(a=""),void 0===i?i=this.path:null===i&&(i=""),void 0===n?n=this.query:null===n&&(n=""),void 0===s?s=this.fragment:null===s&&(s=""),r===this.scheme&&a===this.authority&&i===this.path&&n===this.query&&s===this.fragment)return this;var h=new t;return h._scheme=r,h._authority=a,h._path=i,h._query=n,h._fragment=s,t._validate(h),h},t.parse=function(e){var r=new t,a=t._parseComponents(e);return r._scheme=a.scheme,r._authority=decodeURIComponent(a.authority),r._path=decodeURIComponent(a.path),r._query=decodeURIComponent(a.query),r._fragment=decodeURIComponent(a.fragment),t._validate(r),r},t.file=function(e){var r=new t;if(r._scheme="file",n&&(e=e.replace(/\\/g,t._slash)),e[0]===t._slash&&e[0]===e[1]){var a=e.indexOf(t._slash,2);-1===a?r._authority=e.substring(2):(r._authority=e.substring(2,a),r._path=e.substring(a))}else r._path=e;return r._path[0]!==t._slash&&(r._path=t._slash+r._path),t._validate(r),r},t._parseComponents=function(e){var r={scheme:t._empty,authority:t._empty,path:t._empty,query:t._empty,fragment:t._empty},a=t._regexp.exec(e);return a&&(r.scheme=a[2]||r.scheme,r.authority=a[4]||r.authority,r.path=a[5]||r.path,r.query=a[7]||r.query,r.fragment=a[9]||r.fragment),r},t.from=function(e){return(new t).with(e)},t._validate=function(e){if(e.scheme&&!t._schemePattern.test(e.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(e.path)if(e.authority){if(!t._singleSlashStart.test(e.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(t._doubleSlashStart.test(e.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')},t.prototype.toString=function(e){return void 0===e&&(e=!1),e?t._asFormatted(this,!0):(this._formatted||(this._formatted=t._asFormatted(this,!1)),this._formatted)},t._asFormatted=function(e,r){var n=r?i:a,s=[],h=e.scheme,o=e.authority,u=e.path,p=e.query,f=e.fragment;(h&&s.push(h,":"),(o||"file"===h)&&s.push("//"),o)&&(-1===(m=(o=o.toLowerCase()).indexOf(":"))?s.push(n(o)):s.push(n(o.substr(0,m)),o.substr(m)));if(u){var _=t._upperCaseDrive.exec(u);_&&(u=_[1]?"/"+_[2].toLowerCase()+u.substr(3):_[2].toLowerCase()+u.substr(2));for(var c=0;;){var m;if(-1===(m=u.indexOf(t._slash,c))){s.push(n(u.substring(c)));break}s.push(n(u.substring(c,m)),t._slash),c=m+1}}return p&&s.push("?",n(p)),f&&s.push("#",n(f)),s.join(t._empty)},t.prototype.toJSON=function(){var t={fsPath:this.fsPath,external:this.toString(),$mid:1};return this.path&&(t.path=this.path),this.scheme&&(t.scheme=this.scheme),this.authority&&(t.authority=this.authority),this.query&&(t.query=this.query),this.fragment&&(t.fragment=this.fragment),t},t.revive=function(e){var r=new t;return r._scheme=e.scheme||t._empty,r._authority=e.authority||t._empty,r._path=e.path||t._empty,r._query=e.query||t._empty,r._fragment=e.fragment||t._empty,r._fsPath=e.fsPath,r._formatted=e.external,t._validate(r),r},t}();if(s._empty="",s._slash="/",s._regexp=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/,s._driveLetterPath=/^\/[a-zA-z]:/,s._upperCaseDrive=/^(\/)?([A-Z]:)/,s._schemePattern=/^\w[\w\d+.-]*$/,s._singleSlashStart=/^\//,s._doubleSlashStart=/^\/\//,e.default=s,"object"==typeof process)n="win32"===process.platform;else if("object"==typeof navigator){var h=navigator.userAgent;n=h.indexOf("Windows")>=0}}));