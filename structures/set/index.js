class CustomSet {
  constructor() {
    this.items = [];
  }

  has(value) {
    return this.items.includes(value);
  }

  add(value) {
    if (!this.has(value)) {
      return this.items.push(value);
    }
  }

  remove(value) {
    this.items = this.items.filter(item => item !== value);
  }

  union(set) {
    const result = new CustomSet();

    this.items.forEach(item => result.add(item));
    set.items.forEach(item => result.add(item));

    return result;
  }

  intersect(set) {
    const result = new CustomSet();

    this.items.forEach(item => {
      if (set.has(item)) {
        result.add(item);
      }
    });

    return result;
  }

  difference(set) {
    const result = new CustomSet();
    const largestSet = this.items.length >= set.items.length ? this : set;
    const smallestSet = this.items.length >= set.items.length ? set : this;

    largestSet.items.forEach(item => {
      if (!smallestSet.has(item)) {
        result.add(item);
      }
    });

    return result;
  }

  values() {
    return [...this.items];
  }

  get size() {
    return this.items.length;
  }
}

module.exports = CustomSet;
