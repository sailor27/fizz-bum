webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Number */ "./components/Number.js");
/* harmony import */ var _util_fizzBuzz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/fizzBuzz */ "./util/fizzBuzz.js");
var _jsxFileName = "/Users/sailorwinkelman/Code/fizz-bum/pages/index.js";




var Home = function Home(props) {
  console.log(Object(_util_fizzBuzz__WEBPACK_IMPORTED_MODULE_2__["fizzBuzz"])(20));
  return (// {fizzBuzz(100).map(buzz => (<Number key={buzz} number={buzz} />))}
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Number__WEBPACK_IMPORTED_MODULE_1__["default"], {
      number: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }) // fizzBuzz(100).map(buzz => (<Number key={buzz} number={buzz} />))

  );
};

/* harmony default export */ __webpack_exports__["default"] = (Home);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
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
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.5d0fe1fa2155d8efdd0f.hot-update.js.map