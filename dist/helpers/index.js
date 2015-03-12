"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var merge = _interopRequire(require("./merge"));

var is = _interopRequire(require("./is"));

var utils = _interopRequire(require("./utils"));

var helpers = {
  merge: merge,
  is: is,
  utl: utils
};

module.exports = helpers;