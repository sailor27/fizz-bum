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

  for (var _i = 0; _i < limit; _i++) {
    if (_i % 3 === 0 && _i % 5 === 0) {
      fizzBuzzedNumbers.push("FB");
    } else if (_i % 3 === 0) {
      fizzBuzzedNumbers.push("F");
    } else if (_i % 5 === 0) {
      fizzBuzzedNumbers.push("B");
    } else {
      fizzBuzzedNumbers.push(_i);
    }
  }

  return fizzBuzzedNumbers;
};

var getOutput = function getOutput(n, output) {
  if (n % 3 === 0) output += 'F';
  if (n % 5 === 0) output += 'B';
  if (output === '') output += i;
  return output;
};

var fizzleBuzz = function fizzleBuzz(limit) {
  var fizzBuzzedNumbers = [];
  var output = '';

  for (var _i2 = 1; _i2 <= 100; _i2++) {
    fizzBuzzedNumbers.push(getOutput(_i2, output));
  }

  return fizzBuzzedNumbers;
};
/* harmony default export */ __webpack_exports__["default"] = ({
  fizzleBuzz: fizzleBuzz
});

/***/ })

})
//# sourceMappingURL=_app.js.6a6faccad864dfb8fdd0.hot-update.js.map