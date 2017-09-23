const assert = require('assert');
const caesarChiper = require('./index');

describe('caesarChiper', () => {
  describe('replaceCharCode', () => {
    it('should shift the string by the provided modifier', () => {
      const string = 'FOO BAR';
      const mod = 2;
      const expectedData = 'HQQ DCT';

      assert.equal(caesarChiper.replaceCharCode(string, mod), expectedData);
    });

    it('should shift the string by the provided modifier keeping the letter case', () => {
      const string = 'foo BAR';
      const mod = 2;
      const expectedData = 'hqq DCT';

      assert.equal(caesarChiper.replaceCharCode(string, mod), expectedData);
    });
  });

  describe('loopShift', () => {
    it('should shift the string by the provided modifier', () => {
      const string = 'FOO BAR';
      const mod = 2;
      const expectedData = 'HQQ DCT';

      assert.equal(caesarChiper.loopShift(string, mod), expectedData);
    });

    it('should shift the string by the provided modifier keeping the letter case', () => {
      const string = 'foo BAR';
      const mod = 2;
      const expectedData = 'hqq DCT';

      assert.equal(caesarChiper.loopShift(string, mod), expectedData);
    });
  });

  describe('loopCharCode', () => {
    it('should shift the string by the provided modifier', () => {
      const string = 'FOO BAR';
      const mod = 2;
      const expectedData = 'HQQ DCT';

      assert.equal(caesarChiper.loopCharCode(string, mod), expectedData);
    });

    it('should shift the string by the provided modifier keeping the letter case', () => {
      const string = 'foo BAR';
      const mod = 2;
      const expectedData = 'hqq DCT';

      assert.equal(caesarChiper.loopCharCode(string, mod), expectedData);
    });
  });
});
