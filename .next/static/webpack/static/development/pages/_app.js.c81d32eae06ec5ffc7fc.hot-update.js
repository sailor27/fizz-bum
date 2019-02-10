webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./util/fizzBuzz.js":
/*!**************************!*\
  !*** ./util/fizzBuzz.js ***!
  \**************************/
/*! exports provided: fizzBuzz, fizzleBuzz, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fizzBuzz", function() { return fizzBuzz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fizzleBuzz", function() { return fizzleBuzz; });
var fizzBuzz = function fizzBuzz(limit) {
  var fizzBuzzedNumbers = [];

  for (var i = 0; i < limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      fizzBuzzedNumbers.push("FB");
    } else if (i % 3 === 0) {
      fizzBuzzedNumbers.push("F");
    } else if (i % 5 === 0) {
      fizzBuzzedNumbers.push("B");
    } else {
      fizzBuzzedNumbers.push(i);
    }
  }

  return fizzBuzzedNumbers;
};
var fizzleBuzz = function fizzleBuzz(limit) {
  var fizzBuzzedNumbers = [];
  var output = '';

  for (var i = 0; i < limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output = 'FB';
    } else if (i % 3 === 0) {
      output = 'F';
    } else if (i % 5 === 0) {
      fizzBuzzedNumbers.push("B");
    } else {
      fizzBuzzedNumbers.push(i);
    }

    fizzBuzzedNumbers.push(output);
  }

  return fizzBuzzedNumbers;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fizzBuzz: fizzBuzz
});

/***/ })

})
//# sourceMappingURL=_app.js.c81d32eae06ec5ffc7fc.hot-update.js.map