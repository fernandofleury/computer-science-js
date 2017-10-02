const assert = require('assert');
const binarySearch = require('./index');

describe('binarySearch', () => {
  context('value not present', () => {
    it('should return -1', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8];
      const value = 9;
      const expectedData = -1;

      assert.equal(binarySearch(arr, value), expectedData);
    });
  });

  context('value present', () => {
    it('should return the index of it', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8];
      const value = 1;
      const expectedData = 0;

      assert.equal(binarySearch(arr, value), expectedData);
    });
  });
});
