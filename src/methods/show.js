'use strict';

import {utl} from "../helpers";

var show = {

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

export default show;