'use strict';

/**
 * Get a clean time difference message.
 *
 * @return {String}
 */
export default function diff() {
  let diff = (new Date().getTime() - this.d.getTime()) / 1000;

  return diffString(this.o.indicators, diff);
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
      msg = getDiff(ind, Math.abs(diff));

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
function getDiff(ind, diff) {
  if(diff < 60)
    return ind.now;

  if((diff /= 60) < 60)
    return r(diff) + ind.minute;

  if((diff /= 60) < 48)
    return r(diff) + ind.hour;

  if((diff /= 24) < 7)
    return r(diff) + ind.day;

  if((diff /= 7) < 4)
    return r(diff) + ind.week;

  if((diff /= 4) < 12)
    return r(diff) + ind.month;

  diff /= 12;
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