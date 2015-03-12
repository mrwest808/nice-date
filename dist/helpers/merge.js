"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

/**
 * Object merge.
 *
 * @param  {Object} target
 * @param  {Array}  sources
 * @return {Object}
 */
module.exports = merge;

var is = _interopRequire(require("./is"));

function merge(target) {
  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  sources.forEach(function (src) {
    if (is.object(src)) {
      for (var k in src) {
        if (src.hasOwnProperty(k)) target[k] = is.object(src[k]) ? merge({}, target[k], src[k]) : src[k];
      }
    }
  });

  return target;
}