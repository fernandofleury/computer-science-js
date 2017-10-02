const assert = require('assert');
const fibonacci = require('./index');

describe('fibonacci', () => {
  context('forLoop', () => {
    it('should return 13 for the 7th number', () => {
      assert.equal(fibonacci.forLoop(8), 21);
    });
  });

  context('recursive', () => {
    it('should return 13 for the 7th number', () => {
      assert.equal(fibonacci.recursive(8), 21);
    });
  });
});
