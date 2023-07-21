let arr = [3,1 ,2,4,5, 7, 8];

function reverseArr(arr) {
  let left = 0;
  let right = arr.length-1;
  
  while(left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  
  console.log(arr);
}

reverseArr(arr);