// O(n)
const maxStockProfit = prices => {
  let buyPrice = null;
  let sellPrice = 0;
  let current;
  const length = prices.length;

  for (let i = 0; i < length; i++) {
    current = prices[i];

    if (buyPrice === null || current < buyPrice) {
      buyPrice = current;
    }

    if (current > sellPrice) {
      sellPrice = current;
    }
  }

  return sellPrice - buyPrice;
};

module.exports = maxStockProfit;
