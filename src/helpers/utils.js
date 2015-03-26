'use strict';

let utils = {

  /**
   * Add a leading zero to a number.
   *
   * @param  {Number} n
   * @return {String}
   */
  leadingZero(n) {
    if(n < 10)
      n = "0" + n;

    return n;
  },

  /**
   * Extract parts from a date object.
   *
   * @param  {Date}  date
   * @return {Array}
   */
  extract(date) {
    let y = date.getFullYear(),
        m = this.leadingZero(date.getMonth() + 1),
        d = this.leadingZero(date.getDate()),
        h = this.leadingZero(date.getHours()),
        mi = this.leadingZero(date.getMinutes());

    return [y, m, d, h, mi];
  },

  /**
   * Get start of week.
   *
   * @param  {Date} date
   * @return {Date}
   */
  startOfWeek(date) {
    let diff = date.getDate() - date.getDay() + (date.getDay() === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
  },

  /**
   * Get end of week.
   *
   * @param  {Date} date
   * @return {Date}
   */
  endOfWeek(date) {
    let sunday = date.getDate() - (date.getDay() - 1) + 6;
    return new Date(date.setDate(sunday));
  },

  /**
   * Get start of month.
   *
   * @param  {Date} date
   * @return {Date}
   */
  startOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  },

  /**
   * Get end of month.
   *
   * @param  {Date} date
   * @return {Date}
   */
  endOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0);
  },

  /**
   * Get number of days in current month.
   *
   * @param  {Date}   date
   * @return {Number}
   */
  daysInMonth(date) {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  },

  /**
   * Calculate days between dates.
   *
   * @param  {Date}   d1
   * @param  {Date}   d2
   * @return {Number}
   */
  daysBetween(d1, d2) {
    let day = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((d1.getTime() - d2.getTime()) / day));
  }

};

export default utils;