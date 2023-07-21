let arr = ['abc', 'b', 'a', 'c', 'a', 'abc'];

function removeRedundants(arr) {
    let unique = {};
    for (const val of arr) {
        if(!unique[val]) {
            unique[val] = true;
        }
    }

    console.log(Object.keys(unique));
}

removeRedundants(arr);