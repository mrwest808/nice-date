'use strict';

import {utl} from "../helpers";

/**
 * Methods for formatting date output.
 *
 * @type {Object}
 */
let get = {

  /**
   * Get unix timestamp.
   *
   * @return {Number}
   */
  unix() {
    return this.d.getTime();
  },

  /**
   * Get day of month.
   *
   * @return {Number}
   */
  day() {
    return utl.leadingZero(this.d.getDate());
  },

  /**
   * Get week day name.
   *
   * @return {String}
   */
  weekday() {
    return this.o.days[this.d.getDay()];
  },

  /**
   * Get week day short name.
   *
   * @return {String}
   */
  weekdayShort() {
    return this.o.daysShort[this.d.getDay()];
  },

  /**
   * Get week number.
   *
   * @return {Number}
   */
  week() {
    let target = new Date(this.d),
        dayNum = (target.getDay() + 6) % 7,
        firstThursday;

    target.setDate(target.getDate() - dayNum + 3);
    firstThursday = target.valueOf();
    target.setMonth(0, 1);

    if(target.getDay() !== 4)
      target.setMonth(0, 1, + ((4 - target.getDay()) + 7) % 7);

    return 1 + Math.ceil((firstThursday - target) / 604800000);
  },

  /**
   * Get month name.
   *
   * @return {String}
   */
  month() {
    return this.o.months[this.d.getMonth()];
  },

  /**
   * Get month short name.
   *
   * @return {String}
   */
  monthShort() {
    return this.o.monthsShort[this.d.getMonth()];
  },

  /**
   * Get full year.
   *
   * @return {Number}
   */
  year() {
    return this.d.getFullYear();
  },

  /**
   * Get short year, 2 digits.
   *
   * @return {Number}
   */
  yearShort() {
    return parseInt(this.d.getFullYear().toString().substr(2, 2));
  },

  /**
   * Show date in ISO format.
   *
   * @return {String}
   */
  isoDate() {
    let [y, m, d] = utl.extract(this.d);
    return `${y}-${m}-${d}`;
  },

  /**
   * Show date time in ISO format.
   *
   * @return {String}
   */
  isoDateTime() {
    let [y, m, d, h, mi] = utl.extract(this.d);
    return `${y}-${m}-${d} ${h}:${mi}`;
  }

};

// Register aliases
get.u = get.unix;
get.d = get.day;
get.wd = get.weekday;
get.wds = get.weekdayShort;
get.w = get.week;
get.m = get.month;
get.ms = get.monthShort;
get.y = get.year;
get.ys = get.yearShort;
get.date = get.isoDate;
get.isod = get.isoDate;
get.datetime = get.isoDateTime;
get.dt = get.isoDateTime;
get.isodt = get.isoDateTime;

export default get;