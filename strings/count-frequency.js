
let str = 'javascccript';

function countOccurance(str) {
  let frequencyMap = {};
  for(const val of str) {
   if(!frequencyMap[val]){
     frequencyMap[val] = 1;
   } else {
     frequencyMap[val] += 1;
   }
  }
  
  console.log(frequencyMap);
}

countOccurance(str);