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
    if (i % 3 === 0) {
      output = 'F';
      fizzBuzzedNumbers.push(output);
    }

    if (i % 5 === 0) {
      output += 'B';
      fizzBuzzedNumbers.push(output);
    } else if (i % 3 !== 0 && i % 5 !== 0) {
      output = i;
      fizzBuzzedNumbers.push(output);
    }
  }

  return fizzBuzzedNumbers;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fizzleBuzz: fizzleBuzz
});

/***/ })

})
//# sourceMappingURL=_app.js.19329b2db2faec8fe2ab.hot-update.js.map