"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var merge = _interopRequire(require("./merge"));

var is = _interopRequire(require("./is"));

var helpers = {
  merge: merge,
  is: is
};

module.exports = helpers;
"use strict";

var is = {

  undefined: function undefined(item) {
    return typeof item === "undefined";
  },

  object: function object(obj) {
    return is.undefined(obj) ? false : obj.constructor === Object;
  },

  empty: function empty(item) {}

};

module.exports = is;

// /**
//  * Verify object.
//  *
//  * @param  {Object}  obj
//  * @return {Boolean}
//  */
// export function verifyObject(obj) {
//   if(typeof obj === "undefined")
//     return false;

//   return obj.constructor === Object;
// }

// /**
//  * Verify non empty object.
//  *
//  * @param  {Object}  obj
//  * @return {Boolean}
//  */
// export function verifyNonEmptyObject(obj) {
//   var isObject = verifyObject(obj),
//       isEmpty = true;

//   if(!isObject)
//     return false;

//   for(var prop in obj) {
//     if(obj.hasOwnProperty(prop))
//       isEmpty = false;
//   }

//   return !isEmpty;
// }

// ..
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
"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _helpers = require("./helpers");

var merge = _helpers.merge;
var is = _helpers.is;

var defaults = _interopRequire(require("./options"));

var NiceDate = (function () {
  function NiceDate(date, opts) {
    _classCallCheck(this, NiceDate);

    date = typeof date === "undefined" || date == null ? new Date() : new Date(date);

    if (isNaN(date.getTime())) throw new Error("Invalid date format");

    this.o = is.object(opts) ? merge(defaults, opts) : defaults;
    this.d = date;
  }

  _prototypeProperties(NiceDate, null, {
    check: {
      value: function check() {
        console.log(this.d);
        console.log(this.o);
      },
      writable: true,
      configurable: true
    }
  });

  return NiceDate;
})();

module.exports = NiceDate;
"use strict";

/**
 * Default date options.
 *
 * @type {Object}
 */
var defaults = {

  longMonths: ["January", "February", "March"],

  shortMonths: [],

  longDays: [],

  shortDays: [],

  shortIndicators: {
    year: "y",
    month: "m",
    week: "w",
    day: "d",
    hour: "h",
    minute: "m",
    second: "s"
  }

};
"use strict";

var opts = require("./options");

console.log("hello world");
