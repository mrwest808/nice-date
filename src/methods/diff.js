'use strict';

const DAYS_IN_YEAR = 365.25;

/**
 * Methods for displaying time differences between dates.
 *
 * @type {Object}
 */
let diff = {

  default() {
    return diffString(this.o.indicators, getDiff(this.d));
  },

  minutes() {
    let diff = getDiff(this.d);
    diff /= 60;

    return Math.abs(r(diff));
  },

  hours() {
    let diff = getDiff(this.d);
    diff /= (60 * 60);

    return Math.abs(r(diff));
  },

  days() {
    let diff = getDiff(this.d);
    diff /= (60 * 60 * 24);

    return Math.abs(r(diff));
  },

  weeks() {
    let diff = getDiff(this.d);
    diff /= (60 * 60 * 24 * 7);

    return Math.abs(r(diff));
  },

  months() {
    let diff = getDiff(this.d);
    diff /= (60 * 60 * 24 * 7 * 4);

    return Math.abs(r(diff));
  },

  years() {
    let diff = getDiff(this.d);
    diff /= (60 * 60 * 24);

    return Math.abs(r(diff / DAYS_IN_YEAR));
  }

};

// Register aliases
diff.mi = diff.minutes;
diff.h = diff.hours;
diff.d = diff.days;
diff.w = diff.weeks;
diff.m = diff.months;
diff.y = diff.years;

export default Object.create(diff);

/**
 * Get time diff in milliseconds.
 *
 * @param  {Date}   date
 * @return {Number}
 */
function getDiff(date) {
  return (new Date().getTime() - date.getTime()) / 1000;
}

/**
 * Get time diff string.
 *
 * @param  {Object} ind
 * @param  {Number} diff
 * @return {String}
 */
function diffString(ind, diff) {
  let positive = (diff > 0) ? true: false,
      msg = parseDiff(ind, Math.abs(diff));

  if(msg === ind.now)
    return msg;

  msg = positive ? `${msg} ${ind.past}` : `${ind.future} ${msg}`;
  return msg;
}

/**
 * Parse difference.
 *
 * @param  {Object} ind
 * @param  {Number} diff
 * @return {String}
 */
function parseDiff(ind, diff) {
  let days;

  if(diff < 60)
    return ind.now;

  if((diff /= 60) < 60)
    return r(diff) + ind.minute;

  if((diff /= 60) < 48)
    return r(diff) + ind.hour;

  diff /= 24;
  days = diff;
  if(days < 7)
    return r(diff) + ind.day;

  if((diff /= 7) < 4)
    return r(diff) + ind.week;

  if((diff /= 4) < 12)
    return r(diff) + ind.month;

  diff = days / DAYS_IN_YEAR;
  return r(diff) + ind.year;
}

/**
 * Round number.
 *
 * @param  {Number} n
 * @return {Number}
 */
function r(n) {
  return Math.round(n);
}