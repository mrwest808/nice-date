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

export default Object.create(is);

// /**
//  * Verify object.
//  *
//  * @param  {Object}  obj
//  * @return {Boolean}
//  */
// export function verifyObject(obj) {
//   if(typeof obj === "undefined")
//     return false;

//   return obj.constructor === Object;
// }

// /**
//  * Verify non empty object.
//  *
//  * @param  {Object}  obj
//  * @return {Boolean}
//  */
// export function verifyNonEmptyObject(obj) {
//   var isObject = verifyObject(obj),
//       isEmpty = true;

//   if(!isObject)
//     return false;

//   for(var prop in obj) {
//     if(obj.hasOwnProperty(prop))
//       isEmpty = false;
//   }

//   return !isEmpty;
// }