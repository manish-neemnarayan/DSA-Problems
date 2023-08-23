let arr = [
  { price: 4000, name: "kettle" },
  { price: 7700, name: "bat" },
  { price: 780, name: "tea" },
  { price: 390, name: "plates" },
];

/**
 * Calculates the sum of two prices.
 *
 * @param {Object} prev - The previous price object.
 * @param {Object} curr - The current price object.
 * @returns {Object} The sum of the prices.
 */
function addPrices(prev, curr) {
  let total = prev.price + curr.price;
  return { price: total };
}

let total = arr.reduce(addPrices);
console.log(total);
