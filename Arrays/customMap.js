let arr = [2, 3, 4, 5, 6, 8];

/**
 * Maps each element of an array to a new value using a provided function.
 *
 * @param {Array} arr - The array to be mapped.
 * @param {Function} fn - The function to be applied to each element of the array.
 * @return {Array} The new array with each element mapped to a new value.
 */
function customMap(arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let modifiedVal = fn(arr[i]);
    newArr.push(modifiedVal);
  }

  return newArr;
}

function table(val) {
  return val * 2;
}

const multi = customMap(arr, table);
console.log(multi);
