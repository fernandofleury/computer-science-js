const assert = require('assert');
const reverseWords = require('./index');

describe('reverseWords', () => {
  describe('map', () => {
    it('should reverse the words in the sentence', () => {
      const string = 'foo bar';
      const expectedData = 'rab oof';

      assert.equal(reverseWords.map(string), expectedData);
    });
  });

  describe('sort', () => {
    it('should reverse the words in the sentence', () => {
      const string = 'foo bar';
      const expectedData = 'rab oof';

      assert.equal(reverseWords.sort(string), expectedData);
    });
  });

  describe('forSwap', () => {
    it('should reverse the words in the sentence', () => {
      const string = 'foo bar';
      const expectedData = 'rab oof';

      assert.equal(reverseWords.forSwap(string), expectedData);
    });
  });
});
