/**
 * Leetcode: 169. Majority Element
 * runtime: 50ms
 * memory: 42.89 MB
 */

// currEle --> possible majority element
function majorityElement(nums) {
  let currEle = nums[0];
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currEle === nums[i]) {
      ++count;
    } else if (currEle !== nums[i]) {
      if (count === 0) {
        currEle = nums[i];
      } else --count;
    }
  }

  console.log(currEle);
  return currEle;
}

const testArray = [5, 8, 5, 2, 5, 9, 5, 3, 5, 1, 5, 5, 7, 6, 5];
majorityElement(testArray);
