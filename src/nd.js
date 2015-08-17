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
      throw new TypeError("'constructor' - invalid date format");

    this.o = (is.object(opts)) ? merge({}, defaults, opts) : defaults;
    this.d = date;
  }

  /**
   * Display date in various formats.
   *
   * @param  {String} format
   * @return {String}
   */
  get(format) {
    let fn = m.get[format];
    if(!fn)
      throw new ReferenceError("'get' - invalid format");

    return fn.apply(this);
  }

  set(format, ...args) {
    let fn = m.set[format];
    if(!fn)
      throw new ReferenceError("'set' - invalid format");

    return fn.apply(this, args);
  }

  /**
   * Display difference between this.d and now in a nice format.
   *
   * @param  {String} format [Optional]
   * @return {String}
   */
  diff(format) {
    let fn = (!format) ? m.diff.default : m.diff[format];
    if(!fn)
      throw new ReferenceError("'diff'");

    return fn.apply(this);
  }

  /**
   * Add [num] amount of [format] to a date.
   *
   * @param  {Number}   number
   * @param  {String}   format
   * @return {Instance}
   */
  add(number, format) {
    let fn = m.add[format];
    if(!fn)
      throw new ReferenceError("'add' - invalid format");

    fn.apply(this, [number]);
    return this;
  }

  /**
   * Subtract [num] amount of [format] to a date.
   *
   * @param  {Number}   number
   * @param  {String}   format
   * @return {Instance}
   */
  sub(number, format) {
    let fn = m.add[format];
    if(!fn)
      throw new ReferenceError("'sub' - invalid format");

    fn.apply(this, [-number]);
    return this;
  }

  /**
   * Extract days in a time measure.
   *
   * @param  {String} measure
   * @return {Array}
   */
  daysOf(measure) {
    let fn = m.daysOf[measure];
    if(!fn)
      throw new ReferenceError("'days' - invalid measure");

    return fn.apply(this);
  }

}