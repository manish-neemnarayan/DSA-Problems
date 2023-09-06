/**
 * Notes:
 * what is subarray? it is array elements in contagious manner
 * definition: In JavaScript, a subarray is a contiguous subset of elements within an array. You can create a subarray by specifying the start and end indices to extract elements from the original array.
 * E.g: 
 * // Original array
const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Creating a subarray using slice()
const startIndex = 2; // Start index (inclusive)
const endIndex = 6;   // End index (exclusive)

const subArray = originalArray.slice(startIndex, endIndex);

console.log(subArray); // Output: [3, 4, 5, 6]

 */

// lets print all the subarrays of an conitguously arranged arr


//----------------1.------------- way i tried which is not better
// const arr = [1, 2, 3, 4]

// // we need two pointers for start and end indexes
// let start = 0;
// let end = start;
// let res = [];



// for(let o=0; o<arr.length; o++) {
//     for(let i=start; i<arr.length; i++) {
//         let resBefore = [];
//         for(let j=start; j<=end; j++) {
//             resBefore.push(arr[j]);
//         }
//         res.push(resBefore);
//         end += 1;
//     }

//     start += 1;
//     end = start;
// }
// console.log(res);

//--------------2.--------better solution
function subarr(arr) {
    for(let start=0; start<arr.length; start++) {
        let str = "";
        for(let end=start; end<arr.length; end++) {
            str += arr[end];
            console.log(str);
        }
    }
}

subarr([1,2,3,4,5])