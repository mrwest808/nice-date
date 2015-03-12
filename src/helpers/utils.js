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
  }

};

export default utils;