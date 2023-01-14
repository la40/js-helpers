/**
 * @description Convert boolean string like "false|no|0|''" to false everything else to true
 * @param {string} string
 * @returns {boolean}
 */

export function stringToBoolean(string) {
  switch (string.toLowerCase()) {
    case "false":
    case "no":
    case "0":
    case "":
      return false;
    default:
      return true;
  }
}
