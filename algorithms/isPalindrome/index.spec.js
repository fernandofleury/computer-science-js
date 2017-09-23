const assert = require('assert');
const isPalindrome = require('./index');
const palindrome = 'A Toyota! Race fast, safe car! A Toyota!';

describe('isPalindrome', () => {
  describe('reverse', () => {
    it('should return true is the string is a palindrome', () => {
      assert.ok(isPalindrome.reverse(palindrome));
    });

    it('should return false is the string is not a palindrome', () => {
      assert.equal(isPalindrome.reverse('not a palindrome'), false);
    });
  });

  describe('halfLoop', () => {
    it('should return true is the string is a palindrome', () => {
      assert.ok(isPalindrome.halfLoop(palindrome));
    });

    it('should return false is the string is not a palindrome', () => {
      assert.equal(isPalindrome.halfLoop('not a palindrome'), false);
    });
  });
});
