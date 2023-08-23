//have to find the max profit we can get
//this is an arr of having stock prices on i'th day
let prices = [7, 15, 6, 2, 3, 8, 9, 12, 1];

/**
 * Calculates the maximum profit that can be made from buying and selling stocks.
 *
 * @param {Array} arr - An array of stock prices.
 * @return {number} The maximum profit that can be made.
 */
function maxProfit(arr) {
  let curr_buy = arr[0];
  let profit_by_sell = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < curr_buy) {
      curr_buy = arr[i];
    }

    if (arr[i] > curr_buy) {
      let temp = arr[i] - curr_buy;
      if (profit_by_sell < temp) {
        profit_by_sell = temp;
      }
    }
  }

  return profit_by_sell;
}

let retProfit = maxProfit(prices);
console.log(retProfit);
