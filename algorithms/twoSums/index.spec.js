const assert = require('assert');
const twoSums = require('./index');

describe('twoSums', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, -12, 9, 21];
  const sum = 9;
  const expectedData = [[5, 4], [6, 3], [7, 2], [8, 1], [21, -12]];

  describe('map', () => {
    it('should return an array with the possible sum groups', () => {
      assert.deepEqual(twoSums.map(arr, sum), expectedData);
    });
  });

  describe('set', () => {
    it('should return an array with the possible sum groups', () => {
      assert.deepEqual(twoSums.set(arr, sum), expectedData);
    });
  });

  describe('hashTable', () => {
    it('should return an array with the possible sum groups', () => {
      assert.deepEqual(twoSums.hashTable(arr, sum), expectedData);
    });
  });

  describe('arrIndexOf', () => {
    it('should return an array with the possible sum groups', () => {
      assert.deepEqual(twoSums.arrIndexOf(arr, sum), expectedData);
    });
  });

  describe('strIndexOf', () => {
    it('should return an array with the possible sum groups', () => {
      assert.deepEqual(twoSums.strIndexOf(arr, sum), expectedData);
    });
  });
});
