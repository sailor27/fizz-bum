webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Grid.js":
/*!****************************!*\
  !*** ./components/Grid.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Number */ "./components/Number.js");
/* harmony import */ var _util_fizzBuzz__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/fizzBuzz */ "./util/fizzBuzz.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/Users/sailorwinkelman/Code/fizz-bum/components/Grid.js";




var StyledGrid = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Grid__StyledGrid",
  componentId: "sc-1gjod7z-0"
})(["display:grid;"]);

var Grid = function Grid(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledGrid, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, Object(_util_fizzBuzz__WEBPACK_IMPORTED_MODULE_2__["fizzBuzz"])(100).map(function (output, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Number__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: i,
      number: output,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ })

})
//# sourceMappingURL=_app.js.996006db44f4aa6efefb.hot-update.js.map