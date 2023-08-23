let arr = ["abc", "b", "a", "c", "a", "abc"];

/**
 * Removes redundant elements from an array.
 *
 * @param {Array} arr - The array from which redundant elements will be removed.
 * @return {undefined} - This function does not return a value.
 */
function removeRedundants(arr) {
  let unique = {};
  for (const val of arr) {
    if (!unique[val]) {
      unique[val] = true;
    }
  }

  console.log(Object.keys(unique));
}

removeRedundants(arr);
