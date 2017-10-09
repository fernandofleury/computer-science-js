const assert = require('assert');
const bubbleSort = require('./index');

describe('bubbleSort', () => {
  it('should sort the array', () => {
    const arr = [5, 3, 2, 7, 4, 6, 1];
    const expectedData = [1, 2, 3, 4, 5, 6, 7];

    assert.deepEqual(bubbleSort(arr), expectedData);
  });
});
