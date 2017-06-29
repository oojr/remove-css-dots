'use strict';

/**
 * 
 * replaces dots in a css style object
 * @param {object} cssObject
 */

function removeCssDots(cssObject) {
  var oldKeys = Object.keys(cssObject);
  var newKeys = oldKeys.map(function (className) {
    return className.replace('.', '');
  });

  oldKeys.forEach(function (oldKey, i) {
    var newKey = newKeys[i];

    if (oldKey !== newKey) {
      Object.defineProperty(cssObject, newKey, Object.getOwnPropertyDescriptor(cssObject, oldKey));
      delete cssObject[oldKey];
    }
  });

  return cssObject;
}

module.exports = removeCssDots;