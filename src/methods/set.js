'use strict';

/**
 * Methods for re-setting the date object.
 *
 * @type {Object}
 */
let set = {

  /**
   * Update the date portion of a date and return the instance.
   *
   * @param  {String} date
   * @return {Object}
   */
  date(date) {
    const hh = this.d.getHours();
    const mi = this.d.getMinutes();

    this.d = new Date(date);
    this.d.setHours(hh);
    this.d.setMinutes(mi);
    this.d.setSeconds(0);

    return this;
  },

  /**
   * Update the time portion of a date and return the instance.
   *
   * @param  {Number} hh
   * @param  {Number} mi
   * @return {Object}
   */
  time(hh, mi) {
    this.d.setHours(hh);
    this.d.setMinutes(mi);
    this.d.setSeconds(0);

    return this;
  }

};

// Register aliases
set.d = set.date;
set.t = set.time;

export default set;