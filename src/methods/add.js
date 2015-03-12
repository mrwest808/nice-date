'use strict';

/**
 * Methods for adding to a date.
 *
 * @type {Object}
 */
let add = {

  /**
   * Add days to a date.
   *
   * @param {Number} n
   */
  days(n) {
    this.d.setDate(this.d.getDate() + n);
  },

  /**
   * Add weeks to a date.
   *
   * @param {Number} n
   */
  weeks(n) {
    this.d.setDate(this.d.getDate() + (n * 7));
  },

  /**
   * Add months to a date.
   *
   * @param {Number} n
   */
  months(n) {
    this.d.setMonth(this.d.getMonth() + n);
  },

  /**
   * Add years to a date.
   *
   * @param {Number} n
   */
  years(n) {
    this.d.setFullYear(this.d.getFullYear() + n);
  }

};

// Register aliases
add.d = add.days;
add.day = add.days;
add.w = add.weeks;
add.week = add.weeks;
add.m = add.months;
add.month = add.months;
add.y = add.years;
add.year = add.years;

export default Object.create(add);