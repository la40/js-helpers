/**
 * @description Check if value not empty (null,'',undefined,{},{ k1: null, k2: "" },[],[null,''])
 * @param {any} value
 * @return {boolean}
 */
export function isEmpty(value) {
  if (Array.isArray(value)) {
    if (value.length > 0) {
      return !value.some((item) => {
        return item !== null && item !== "";
      });
    } else {
      return true;
    }
  } else if (isObject(value)) {
    return !Object.values(value).some((item) => {
      return item !== null && item !== "";
    });
  } else {
    return !(
      value !== null &&
      value !== "" &&
      typeof value !== "undefined" &&
      value !== undefined
    );
  }
}

/**
 * @description Check if given string fulfill european data time format dd.mm.yyyy hh:mm:ss
 * @param {string} euDateTimeString
 * @return {boolean}
 */
export function isEuDateTime(euDateTimeString) {
  var matches = euDateTimeString.match(
    /^(\d{2})\.(\d{2})\.(\d{4}) (\d{2}):(\d{2}):(\d{2})$/
  );
  if (matches === null) {
    return false;
  } else {
    // now lets check the date sanity
    var year = parseInt(matches[3], 10);
    var month = parseInt(matches[2], 10) - 1; // months are 0-11
    var day = parseInt(matches[1], 10);
    var hour = parseInt(matches[4], 10);
    var minute = parseInt(matches[5], 10);
    var second = parseInt(matches[6], 10);
    var date = new Date(year, month, day, hour, minute, second);
    if (
      date.getFullYear() !== year ||
      date.getMonth() != month ||
      date.getDate() !== day ||
      date.getHours() !== hour ||
      date.getMinutes() !== minute ||
      date.getSeconds() !== second
    ) {
      return false;
    } else {
      return true;
    }
  }
}

/**
 * @description Check if two objects are deep equal
 * @param {object} object1
 * @param {object} object2
 * @returns {boolean}
 */

export function isDeepEqual(object1, object2) {
  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (var key of objKeys1) {
    const value1 = object1[key];
    const value2 = object2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if (
      (isObjects && !isDeepEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
}

/**
 * @description Check if an object inherits Object, {}
 * @param {object} o
 * @returns {boolean}
 */

export function isObject(o) {
  if (typeof o === "undefined" || o === null) return false;
  return o.constructor === {}.constructor;
}
