'use strict';

import {utl} from "../helpers";

/**
 * Extract number of days in different time measures, relative to the
 * instantiated date. Each day will be represented in a unix timestamp format.
 *
 * @type {Object}
 */
let daysOf = {

  /**
   * Extract days in week. (sees monday as first day of the week)
   *
   * @return {Array}
   */
  week() {
    let now = new Date(this.d),
        monday = utl.startOfWeek(now),
        days = [];

    for(let i = 0; i <= 6; i++)
      days.push(new Date(monday).setDate(monday.getDate() + i));

    return days;
  },

  /**
   * Extract days in month.
   *
   * @return {Array}
   */
  month() {
    let now = new Date(this.d),
        monthStart = utl.startOfMonth(now),
        monthEnd = utl.endOfMonth(now),
        diff = utl.daysBetween(monthStart, monthEnd),
        days = [];

    for(let i = 0; i <= diff; i++)
      days.push(new Date(monthStart).setDate(monthStart.getDate() + i));

    return days;
  },

  /**
   * Extract days in a calendar month. This also includes other days within the
   * same week as the first and last day, usually needed for rendering a
   * calendar view.
   *
   * @return {Array}
   */
  calendarMonth() {
    let now = new Date(this.d),
        monthStart = utl.startOfMonth(now),
        monthEnd = utl.endOfMonth(now),
        firstMonday = utl.startOfWeek(monthStart),
        lastSunday = utl.endOfWeek(monthEnd),
        diff = utl.daysBetween(firstMonday, lastSunday),
        days = [];

    for(let i = 0; i <= diff; i++)
      days.push(new Date(firstMonday).setDate(firstMonday.getDate() + i));

    return days;
  }

};

// Register aliases
daysOf.w = daysOf.week;
daysOf.m = daysOf.month;
daysOf.cm = daysOf.calendarMonth;

export default daysOf;