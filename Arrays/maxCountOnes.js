let arr = [1,0,1,1,0,0,0,1,1,1,1,0];

function maxCountOnes(arr) {
    let counter = 0;
    let final = 0;
    
  for(let i=0; i<arr.length; i++) {

    if(arr[i]==1){
      counter++;
    } else{
      if(final<counter) {
        final = counter;
      }
      counter = 0;
    }
  }
  console.log(final);
}

maxCountOnes(arr);