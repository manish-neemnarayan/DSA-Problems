let arr = [
    {price: 4000, name: 'kettle'},
    {price: 7700, name: 'bat'},
    {price: 780, name: 'tea'},
    {price: 390, name: 'plates'},
]

function addPrices(prev, curr) {
    let total = prev.price + curr.price;
    return {price : total};
}

let total = arr.reduce(addPrices);
console.log(total);