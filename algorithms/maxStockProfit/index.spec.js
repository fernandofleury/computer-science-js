const assert = require('assert');
const maxStockProfit = require('./index');

describe('maxStockProfit', () => {
  it('should return the maximum possible profit on buying/selling', () => {
    const arr = [10, 18, 4, 5, 9, 6, 16, 12];
    const expectedData = 14;

    assert.deepEqual(maxStockProfit(arr), expectedData);
  });
});
