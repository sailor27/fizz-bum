webpackHotUpdate("static/development/pages/index.js",{

/***/ "./util/fizzBuzz.js":
/*!**************************!*\
  !*** ./util/fizzBuzz.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//# sourceMappingURL=index.js.bd0951e09b3c0eb9f48c.hot-update.js.map