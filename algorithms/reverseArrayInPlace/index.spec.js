const assert = require('assert');
const reverseArrayInPlace = require('./index');
const array = [1, 2, 3, 4, 5, 6, 7];
const expectedData = array.reverse();

describe('reverseArrayInPlace', () => {
  describe('destructuring', () => {
    it('should return the reversed array', () => {
      assert.equal(reverseArrayInPlace.destructuring(array), expectedData);
    });
  });

  describe('placeholder', () => {
    it('should return the reversed array', () => {
      assert.equal(reverseArrayInPlace.placeholder(array), expectedData);
    });
  });
});
