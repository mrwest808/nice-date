'use strict';

/**
 * Methods for updating time to nearest measure.
 *
 * @type {Object}
 */
let next = {

  whole() {
    this.add(60, 'minutes');

    this.d.setMinutes(0);
    this.d.setSeconds(0);
  },

  half() {
    if(this.d.getMinutes() < 30) {
      this.d.setMinutes(30);
    } else {
      this.add(60, 'minutes');
      this.d.setMinutes(0);
    }

    this.d.setSeconds(0);
  },

  quarter() {
    const mi = this.d.getMinutes();

    if(mi < 15) {
      this.d.setMinutes(15);
    } else if(mi < 30) {
      this.d.setMinutes(30);
    } else if(mi < 45) {
      this.d.setMinutes(45);
    } else {
      this.add(60, 'minutes');
      this.d.setMinutes(0);
    }

    this.d.setSeconds(0);
  }

};

// Register aliases
next.w = next.whole;
next.h = next.half;
next.q = next.quarter;

export default next;