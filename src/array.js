/**
 * @description Move an array item from an index to another
 * @param {array} arr
 * @param {int} oldIndex
 * @param {int} newIndex
 * @returns {array} The new array
 */
export function arrayMove(arr, oldIndex, newIndex) {
  if (newIndex >= arr.length) {
    var k = newIndex - arr.length + 1;
    while (k--) {
      arr.push(undefined);
    }
  }
  arr.splice(newIndex, 0, arr.splice(oldIndex, 1)[0]);
  return arr;
}

/**
 * @description Convert an array with objects to an object like {"property value x": [object x, object y ...], "property value y": [object z, object c ...]}
 * @param {array} arr array with objects to convert
 * @param {string} property property to use
 * @param {boolean} compact default to true will remove the property from objects x,y,z,c , if false will leave the objects as is
 * @return {object} The new object
 */
export function arrayToObjectByProperty(arr, property, compact = true) {
  let o = {};
  for (const item of arr) {
    if (!o.hasOwnProperty(item[property])) {
      o[item[property]] = [];
    }

    let temp = {
      ...item,
    };

    if (compact === true) {
      delete temp[property];
    }

    o[item[property]].push(temp);
  }

  return o;
}

/**
 * @description Determine if an array contains one or more items from another array.
 * @param {array} arr1 the array to search
 * @param {array} arr2 the array providing items to check for in the arr1
 * @return {boolean}
 */
export function arrayContainsSomeArray(arr1, arr2) {
  return arr1.some((el) => arr2.indexOf(el) >= 0);
}

/**
 * @description Get first found item in arr1.
 * @param {array} arr1 the array to get the first found item from
 * @param {array} arr2 the array to search in
 * @return {null|any} null when not found or the found item from arr1
 */
export function arrayGetFirstFoundInArray(arr1, arr2) {
  for (const item of arr1) {
    if (arr2.indexOf(item) >= 0) return item;
  }
  return null;
}
