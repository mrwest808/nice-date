'use strict';

let is = {

  undefined(item) {
    return typeof item === "undefined";
  },

  object(obj) {
    return (is.undefined(obj)) ? false : obj.constructor === Object;
  },

  empty(item) {
    // ..
  }

};

export default is;