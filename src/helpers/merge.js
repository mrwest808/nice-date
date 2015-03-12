'use strict';

import is from "./is";

/**
 * Object merge.
 *
 * @param  {Object} target
 * @param  {Array}  sources
 * @return {Object}
 */
export default function merge(target, ...sources) {
  sources.forEach((src) => {
    if(is.object(src)) {
      for(let k in src) {
        if(src.hasOwnProperty(k))
          target[k] = (is.object(src[k])) ? merge({}, target[k], src[k]) : src[k];
      }
    }
  });

  return target;
}