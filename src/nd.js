'use strict';

import {merge, is} from "./helpers";
import defaults from "./options";
import m from "./methods";

export default class NiceDate {

  /**
   * Prototype constructor.
   *
   * @param {Mixed}  date
   * @param {Object} opts [Override default options]
   */
  constructor(date, opts) {
    date = (typeof date === "undefined" || date == null) ? new Date() : new Date(date);

    if(isNaN(date.getTime()))
      throw new Error("Invalid date format");

    this.o = (is.object(opts)) ? merge({}, defaults, opts) : defaults;
    this.d = date;
  }

  /**
   * Display date in various formats.
   *
   * @param  {String} format
   * @return {String}
   */
  show(format) {
    let fn = m.show[format];
    if(!fn)
      throw new Error("method 'show' - invalid format");

    return fn.apply(this);
  }

}