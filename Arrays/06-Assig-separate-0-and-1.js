let arr = [0, 1, 0, 0, 1, 1, 0, 1];

// formula to swap
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
 * Reorders the elements of the given array, moving all zeros to the end.
 *
 * @param {array} arr - The array to be reordered.
 */
function task(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (arr[start] === 0) {
      start++;
    } else {
      swap(arr, start, end);
      end--;
    }
  }
  console.log(arr);
}

task(arr);
