/**
 * @param {number[]} nums
 * @return {number}
 */
//leetcode -- problem no. 268
// ---- using bit-XOR method 
var singleNumber = function(nums) {
    let result = 0;
   
    for(let i=0; i<nums.length; i++) {
      result = result ^ nums[i];
    }
   
    return result;
};

// ------using object---

/**
 * @param {number[]} nums
 * @return {number}
 */

// It works but gives time limit exceeded for a big file. > 10^4
var singleNumber = function(nums) {
    const obj = {}
    for(let i=0; i<nums.length; i++) {
            if(Object.keys(obj).includes(String(nums[i]))) {
                ++obj[String(nums[i])]
            } else {
                obj[String(nums[i])] = 1;
            }
        }
    
    let arr = Object.entries(obj)
    for(let i = 0; i<Object.entries(obj).length; i++) {
      if(arr[i][1] === 1) {
        // console.log(arr[i][0]);
        return arr[i][0]
      }
    }
    };