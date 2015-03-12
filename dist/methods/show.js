"use strict";

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

var utl = require("../helpers").utl;

var show = {

  /**
   * Get day of month.
   *
   * @return {Number}
   */
  day: function day() {
    return utl.leadingZero(this.d.getDate());
  },

  /**
   * Get week day name.
   *
   * @return {String}
   */
  weekday: function weekday() {
    return this.o.days[this.d.getDay()];
  },

  /**
   * Get week day short name.
   *
   * @return {String}
   */
  weekdayShort: function weekdayShort() {
    return this.o.daysShort[this.d.getDay()];
  },

  /**
   * Get week number.
   *
   * @return {Number}
   */
  week: function week() {
    var target = new Date(this.d),
        dayNum = (target.getDay() + 6) % 7,
        firstThursday = undefined;

    target.setDate(target.getDate() - dayNum + 3);
    firstThursday = target.valueOf();
    target.setMonth(0, 1);

    if (target.getDay() !== 4) target.setMonth(0, 1, +(4 - target.getDay() + 7) % 7);

    return 1 + Math.ceil((firstThursday - target) / 604800000);
  },

  /**
   * Get month name.
   *
   * @return {String}
   */
  month: function month() {
    return this.o.months[this.d.getMonth()];
  },

  /**
   * Get month short name.
   *
   * @return {String}
   */
  monthShort: function monthShort() {
    return this.o.monthsShort[this.d.getMonth()];
  },

  /**
   * Show date in ISO format.
   *
   * @return {String}
   */
  isoDate: function isoDate() {
    var _utl$extract = utl.extract(this.d);

    var _utl$extract2 = _slicedToArray(_utl$extract, 3);

    var y = _utl$extract2[0];
    var m = _utl$extract2[1];
    var d = _utl$extract2[2];

    return "" + y + "-" + m + "-" + d;
  },

  /**
   * Show date time in ISO format.
   *
   * @return {String}
   */
  isoDateTime: function isoDateTime() {
    var _utl$extract = utl.extract(this.d);

    var _utl$extract2 = _slicedToArray(_utl$extract, 5);

    var y = _utl$extract2[0];
    var m = _utl$extract2[1];
    var d = _utl$extract2[2];
    var h = _utl$extract2[3];
    var mi = _utl$extract2[4];

    return "" + y + "-" + m + "-" + d + " " + h + ":" + mi;
  }

};

// Register aliases
show.d = show.day;
show.wd = show.weekday;
show.wds = show.weekdayShort;
show.w = show.week;
show.m = show.month;
show.ms = show.monthShort;
show.date = show.isoDate;
show.isod = show.isoDate;
show.datetime = show.isoDateTime;
show.dt = show.isoDateTime;
show.isodt = show.isoDateTime;

module.exports = show;