const assert = require('assert');
const fizzBuzz = require('./index');

describe('fizzBuzz', () => {
  describe('forLoop', () => {
    it("should be defined, since you can't properly spec the return of the function", () => {
      assert.ok(fizzBuzz.forLoop);
    });
  });

  describe('forEach', () => {
    it("should be defined, since you can't properly spec the return of the function", () => {
      assert.ok(fizzBuzz.forEach);
    });
  });
});
