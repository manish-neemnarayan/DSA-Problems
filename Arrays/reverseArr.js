let arr = [3, 1, 2, 4, 5, 7, 8];

/**
 * Reverses the order of elements in an array.
 *
 * @param {Array} arr - The array to be reversed.
 * @return {undefined} The function does not return a value.
 */
function reverseArr(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  console.log(arr);
}

reverseArr(arr);
