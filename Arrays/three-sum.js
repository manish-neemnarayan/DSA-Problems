// /**
//  * @param {number[]} nums
//  * @return {number[][]}
//  */
// var threeSum = function (nums) {
//   // first sort the array in ascending order sothat we can use 2 pointers
//   nums.sort((a, b) => a - b);
//   console.log(nums);
//   // we can do a + b + c = 0
//   // with a + b = -c;
//   // and can assume -c as the first value of arr nums[0]
//   // and can find sum of two ele in rest of the array which equals to -c;

//   let c = -nums[0];

//   let start = 1;
//   let end = nums.length - 1;
//   let sum = 0;
//   let result = [];

//   for (let find = 0; find < nums.length - 1; find++) {
//     while (start < end) {
//       sum = nums[start] + nums[end];
//       console.log(sum, c);
//       if (sum === c) {
//         console.log("sum is c");
//         result.push([c, nums[start], nums[end]]);
//       }

//       if (sum < c) {
//         ++start;
//       } else if (sum > c) {
//         --end;
//       }
//     }

//     c = -nums[find];
//   }
// };

// let nums = [-1, 0, 1, 2, -1, -4];
// console.log(threeSum(nums));

var threeSum = function (nums) {
  // Sort the array in ascending order.
  nums.sort((a, b) => a - b);

  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Avoid duplicates for the first element (c).
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      const c = -nums[i];
      let start = i + 1;
      let end = nums.length - 1;

      while (start < end) {
        const sum = nums[start] + nums[end];

        if (sum === c) {
          result.push([nums[i], nums[start], nums[end]]);

          // Avoid duplicates for the second element (a).
          while (start < end && nums[start] === nums[start + 1]) start++;
          // Avoid duplicates for the third element (b).
          while (start < end && nums[end] === nums[end - 1]) end--;

          start++;
          end--;
        } else if (sum < c) {
          start++;
        } else {
          end--;
        }
      }
    }
  }

  return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
