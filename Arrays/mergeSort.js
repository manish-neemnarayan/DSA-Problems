let nums1 = [2,4,5,8,9];
let nums2 = [1,2,12,14,16,17];
let newArr = [];

function mergeSort(nums1, nums2) {
  let i1 = 0;
  let j2 = 0;
  let k = 0;
  while(i1 < nums1.length && j2 < nums2.length) {
    if(nums1[i1] < nums2[j2]) {
      newArr[k] = nums1[i1];
      i1++;
      k++;
    } else if(nums1[i1] == nums2[j2]) {
      newArr[k] = nums1[i1];
      k++;
      newArr[k] = nums2[j2];
      i1++;
      j2++;
      k++;
    } else {
      newArr[k] = nums2[j2];
      k++;
      j2++;
    }
  }
  
  while(i1<nums1.length) {
    newArr[k] = nums1[i1];
    i1++;
    k++;
  }
  
  while(j2<nums2.length) {
    newArr[k] = nums2[j2];
    j2++;
    k++;
  }
  
  for(let i=0; i<newArr.length; i++) {
    nums1[i] = newArr[i];
  }
  
//   nums1 = [...newArr];
  console.log(nums1);
//   console.log(newArr);
}

mergeSort(nums1, nums2);