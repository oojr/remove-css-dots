/**
 * @flow
 * replaces dots in a css style object
 * @param {object} cssObject
 */

function removeCssDots(cssObject: { [string]: any }) {
  const oldKeys = Object.keys(cssObject);
  const newKeys = oldKeys.map(className => {
    return className.replace('.', '');
  });

  oldKeys.forEach((oldKey, i) => {
    const newKey = newKeys[i];

    if (oldKey !== newKey) {
      Object.defineProperty(
        cssObject,
        newKey,
        Object.getOwnPropertyDescriptor(cssObject, oldKey)
      );
      delete cssObject[oldKey];
    }
  });

  return cssObject;
}

module.exports = removeCssDots;
