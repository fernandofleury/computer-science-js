const assert = require('assert');
const meanMedianMode = require('./index');

describe('meanMedianMode', () => {
  describe('mean', () => {
    it('should return the mean of the array', () => {
      const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const expectedData = 5.5;
      assert.equal(meanMedianMode.mean(arr), expectedData);
    });
  });

  describe('median', () => {
    context('odd length', () => {
      it('should return the median of the array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const expectedData = 5;
        assert.equal(meanMedianMode.median(arr), expectedData);
      });
    });

    context('even length', () => {
      it('should return the median of the array', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const expectedData = 5.5;
        assert.equal(meanMedianMode.median(arr), expectedData);
      });
    });
  });

  describe('mode', () => {
    it('should return the mode of the array', () => {
      const arr = [1, 2, 4, 4, 5, 5, 7, 7, 7, 10];
      const expectedData = 7;
      assert.equal(meanMedianMode.mode(arr), expectedData);
    });
  });
});
