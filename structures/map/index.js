class CustomMap {
  constructor() {
    this.map = {};
  }

  set(key, value) {
    this.map[key] = value;
  }

  remove(key) {
    delete this.map[key];
  }

  get(key) {
    return this.map[key];
  }

  has(key) {
    return this.map.hasOwnProperty(key);
  }

  keys() {
    return Object.keys(this.map);
  }

  values() {
    return Object.values(this.map);
  }

  entries() {
    return Object.entries(this.map);
  }

  clear() {
    this.map = {};
  }

  get size() {
    return Object.keys(this.map).length;
  }
}

module.exports = CustomMap;
