class Stack {
  constructor() {
    this.stack = {};
    this._length = 0;
  }

  push(value) {
    this.stack[this._length] = value;
    this._length++;
  }

  pop() {
    if (!this._length) {
      return null;
    }

    this._length--;

    let result = this.stack[this._length];
    delete this.stack[this._length];
    return result;
  }

  peek() {
    return this.stack[this._length - 1];
  }

  get length() {
    return this._length;
  }
}

module.exports = Stack;
