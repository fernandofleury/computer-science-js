// O(n) linear
const reduceEvery = (note, magazine) => {
  const magazineHash = magazine.split(' ').reduce((hash, word) => {
    hash[word] = hash[word] ? hash[word] + 1 : 1;
    return hash;
  }, {});

  return note.split(' ').every(word => magazineHash[word]--);
};

module.exports = {
  reduceEvery
};
