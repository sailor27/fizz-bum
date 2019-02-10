webpackHotUpdate("static/development/pages/index.js",{

/***/ "./util/fizzBuzz.js":
/*!**************************!*\
  !*** ./util/fizzBuzz.js ***!
  \**************************/
/*! exports provided: fizzBuzz, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fizzBuzz", function() { return fizzBuzz; });
var fizzBuzz = function fizzBuzz(limit) {
  var fizzBuzzedNumbers = [];

  for (var i = 0; i < limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzedNumbers.push("FizzBuzz");
    } else if (i % 3 === 0) {
      fizzBuzzedNumbers.push("Fizz");
    } else if (i % 5 === 0) {
      fizzBuzzedNumbers.push("Buzz");
    } else {
      fizzBuzzedNumbers.push(i);
    }
  }

  return fizzBuzzedNumbers;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fizzBuzz: fizzBuzz
});

/***/ })

})
//# sourceMappingURL=index.js.c0e53b5b3d097c4dbaa3.hot-update.js.map