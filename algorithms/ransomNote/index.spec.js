const assert = require('assert');
const ransomNote = require('./index');

describe('ransomNote', () => {
  describe('reduceEvery', () => {
    it('should return true if the magazine has enough words for the sentence', () => {
      assert.ok(
        ransomNote.reduceEvery(
          'this is a secret note for you from a secret admirer',
          'puerto rico is a place of great wonder and excitement it has many secret waterfalls locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'
        )
      );
    });

    it('should return false if the magazine does not have enough words for the sentence', () => {
      assert.equal(
        ransomNote.reduceEvery(
          'this is a secret note for you from a secret admirer',
          'puerto rico is a place of great wonder and excitement it has many waterfalls locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'
        ),
        false
      );
    });
  });
});
