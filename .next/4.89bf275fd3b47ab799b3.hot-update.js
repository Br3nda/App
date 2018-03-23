webpackHotUpdate(4,{

/***/ "./node_modules/firebase/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var firebase = __webpack_require__("./node_modules/firebase/app/index.js");
__webpack_require__("./node_modules/firebase/auth/index.js");
__webpack_require__("./node_modules/firebase/database/index.js");
__webpack_require__("./node_modules/firebase/messaging/index.js");
__webpack_require__("./node_modules/firebase/storage/index.js");

module.exports = firebase;


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layouts__ = __webpack_require__("./components/Layouts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__("./node_modules/firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
var _jsxFileName = '/Users/janietito/Documents/workspace/App/pages/index.js';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();





var config = {
  apiKey: "AIzaSyC9cQqCdDXyjjAmtK7MkZpU3617vixnL44",
  authDomain: "whare-hauora-app-64525.firebaseapp.com",
  databaseURL: "https://whare-hauora-app-64525.firebaseio.com",
  projectId: "whare-hauora-app-64525",
  storageBucket: "whare-hauora-app-64525.appspot.com",
  messagingSenderId: "608987462417"
};
__WEBPACK_IMPORTED_MODULE_3_firebase__["initializeApp"](config);

var messaging = __WEBPACK_IMPORTED_MODULE_3_firebase__["messaging"]();
messaging.requestPermission().then(function () {
  console.log('Have permission');
}).catch(function (err) {
  console.log('Error happened');
});

var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__components_Layouts__["a" /* default */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'p',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        }
      },
      'Welcome to our awesome app'
    )
  );
};

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(config, 'config', '/Users/janietito/Documents/workspace/App/pages/index.js');
  reactHotLoader.register(messaging, 'messaging', '/Users/janietito/Documents/workspace/App/pages/index.js');
  reactHotLoader.register(Index, 'Index', '/Users/janietito/Documents/workspace/App/pages/index.js');
  reactHotLoader.register(_default, 'default', '/Users/janietito/Documents/workspace/App/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.89bf275fd3b47ab799b3.hot-update.js.map