let arr = [2, 3,4, 5, 6, 8];

function customMap(arr, fn) {
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        let modifiedVal = fn(arr[i]);
        newArr.push(modifiedVal);
    }

    return newArr;
}

function table(val) {
    return val*2;
}

const multi = customMap(arr, table);
console.log(multi);