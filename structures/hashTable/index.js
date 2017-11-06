class HashTable {
  constructor(limit = 4) {
    this.items = {};
    this._limit = limit;
  }

  add(key, value) {
    const hash = this.generateHash(key);

    this.items[hash] = this.items[hash] || {};
    this.items[hash][key] = value;
  }

  remove(key) {
    const hash = this.generateHash(key);

    if (!this.items.hasOwnProperty(hash)) {
      return;
    }

    if (Object.keys(this.items[hash]).length > 1) {
      delete this.items[hash][key];
    } else {
      delete this.items[hash];
    }
  }

  search(key) {
    const hash = this.generateHash(key);

    if (!this.items.hasOwnProperty(hash)) {
      return;
    }

    return this.items[hash][key];
  }

  get size() {
    return Object.keys(this.items).length;
  }

  generateHash(key) {
    let string = key.toString();
    let hash = 0;

    for (let i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }

    return hash % this._limit;
  }
}

module.exports = HashTable;
