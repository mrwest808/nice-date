'use strict';

var chai = require('chai'),
    expect = chai.expect;

var test = {

  /**
   * Test string.
   *
   * @param  {String}  input
   * @param  {String}  msg   [Optional]
   * @return {Boolean}
   */
  string: function(input, msg) {
    msg = msg || "should be a string";

    it(msg, function() {
      expect(input).to.be.a("string");
    });
  },

  /**
   * Test number.
   *
   * @param  {Number}  input
   * @param  {String}  msg   [Optional]
   * @return {Boolean}
   */
  number: function(input, msg) {
    msg = msg || "should be number";

    it(msg, function() {
      expect(input).to.be.a("number");
    });
  },


  /**
   * Test number value.
   *
   * @param  {Number}  input
   * @param  {Number}  num
   * @param  {String}  msg   [Optional]
   * @return {Boolean}
   */
  above: function(input, num, msg) {
    msg = msg || "should be above " + num;

    it(msg, function() {
      expect(input).to.be.above(num);
    });
  },

  /**
   * Test positive number.
   *
   * @param  {Number}  input
   * @param  {String}  msg   [Optional]
   * @return {Boolean}
   */
  positiveNumber: function(input, msg) {
    msg = msg || "should be a positive number";

    it(msg, function() {
      expect(input).to.be.a("number").above(0);
    });
  },

  /**
   * Test length.
   *
   * @param  {Mixed}   input
   * @param  {Number}  num
   * @param  {String}  msg   [Optional]
   * @return {Boolean}
   */
  length: function(input, num, msg) {
    msg = msg || "should be of length " + num + " or above";

    it(msg, function() {
      expect(input).to.have.length.above(num - 1);
    });
  },

  /**
   * Test non empty.
   *
   * @param  {Mixed}   input
   * @param  {String}  msg   [Optional]
   * @return {Boolean}
   */
  nonEmpty: function(input, msg) {
    msg = msg || "should not be empty";

    it(msg, function() {
      expect(input).to.not.be.empty;
    });
  },

  /**
   * Test the range of a number.
   *
   * @param  {Number}  input
   * @param  {Number}  min
   * @param  {Number}  max
   * @param  {String}  msg   [Optional]
   * @return {Boolean}
   */
  range: function(input, min, max, msg) {
    msg = msg || "should be a number between " + min + " and " + max;

    it(msg, function() {
      expect(input).to.be.a("number").within(min, max);
    });
  },

  /**
   * Test defined.
   *
   * @param  {Mixed}   input
   * @param  {String}  msg   [Optional]
   * @return {Boolean}
   */
  defined: function(input, msg) {
    msg = msg || "should be defined";

    it(msg, function() {
      expect(input).to.not.be.undefined;
    });
  },

  /**
   * Test both string and non empty.
   *
   * @param  {String}  input
   * @param  {String}  msg   [Optional]
   * @return {Boolean}
   */
  nonEmptyString: function(input, msg) {
    msg = msg || "should be a non empty string";

    it(msg, function() {
      expect(input).to.be.a("string").and.not.be.empty;
    });
  },

  /**
   * Test throw error.
   *
   * @param  {Function} fn
   * @param  {Mixed}    err
   * @param  {String}   msg [Optional]
   * @return {Boolean}
   */
  throwError: function(fn, err, msg) {
    msg = msg || "should throw " + err;

    it(msg, function() {
      expect(fn).to.throw(err);
    });
  }

};

module.exports = test;