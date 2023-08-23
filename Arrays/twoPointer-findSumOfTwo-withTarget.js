/**
 * Finds two numbers in an array that add up to a given target.
 *
 * @param {Array} nums - The array of numbers to search.
 * @param {number} target - The target sum.
 * @return {Array} An array containing two numbers that add up to the target sum.
 */
function findTwoSum(nums, target) {
  let a = nums[0];
  let z = nums[nums.length - 1];
  let sum = 0;
  for (let i = 1; i < nums.length + 1; i++) {
    if (sum === target) {
      return [a, z];
    } else {
      sum = a + z;
    }
    if (sum < target) {
      a = nums[i + 1];
    } else {
      z = nums[nums.length - i];
    }
  }
}

let sum = findTwoSum([2, 7, 11, 15], 13);
console.log(sum);
