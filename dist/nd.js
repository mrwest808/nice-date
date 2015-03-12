"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _helpers = require("./helpers");

var merge = _helpers.merge;
var is = _helpers.is;

var defaults = _interopRequire(require("./options"));

var m = _interopRequire(require("./methods"));

var NiceDate = (function () {

  /**
   * Prototype constructor.
   *
   * @param {Mixed}  date
   * @param {Object} opts [Override default options]
   */

  function NiceDate(date, opts) {
    _classCallCheck(this, NiceDate);

    date = typeof date === "undefined" || date == null ? new Date() : new Date(date);

    if (isNaN(date.getTime())) throw new Error("Invalid date format");

    this.o = is.object(opts) ? merge({}, defaults, opts) : defaults;
    this.d = date;
  }

  _createClass(NiceDate, {
    show: {

      /**
       * Display date in various formats.
       *
       * @param  {String} format
       * @return {String}
       */

      value: function show(format) {
        var fn = m.show[format];
        if (!fn) throw new Error("method 'show' - invalid format");

        return fn.apply(this);
      }
    }
  });

  return NiceDate;
})();

module.exports = NiceDate;