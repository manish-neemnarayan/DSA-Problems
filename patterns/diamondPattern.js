let count = 7;

function diamondPatternAbove(n) {
  for(let i=1; i<n; i++){
    let spaces = i-1;
    let pattern = ' ';

    for(let s=0; s<=spaces; s++){
        pattern += ` `;
    }
    for(let j=i; j<=n; j++){
      pattern += `${j} `;
    }
    console.log(pattern);
  }
}

function diamondPatternBelow(n) {
    for(let i=n; i>=1; i--){
      let spaces = i-1;
      let pattern = ' ';
  
      for(let s=0; s<=spaces; s++){
          pattern += ` `;
       }
      for(let j=i; j<=n; j++){
        pattern += `${j} `;
      }
      console.log(pattern);
    }
}

function diamondPattern(count) {
    diamondPatternAbove(count);
    diamondPatternBelow(count);
}
diamondPattern(count);
diamondPattern(4);
