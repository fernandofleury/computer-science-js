class Node {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor(element) {
    this._length = 0;
    this._head = null;

    if (element) {
      this._head = new Node(element);
      this._length++;
    }
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  get tail() {
    let node = this._head;

    while (node && node.next) {
      node = node.next;
    }

    return node;
  }

  add(element) {
    const node = new Node(element);
    const tail = this.tail;

    if (tail) {
      tail.next = node;
    } else {
      this._head = node;
    }

    this._length++;
    return this._length;
  }

  addAt(index, element) {
    const node = new Node(element);

    let currentNode = this._head;
    let previousNode;
    let count = 0;

    if (index > this._length || index < 0) {
      return null;
    }

    if (index === 0) {
      node.next = currentNode;
      this._head = node;

      this._length++;
      return this._length;
    }

    while (count < index) {
      count++;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    node.next = currentNode;
    previousNode.next = node;

    this._length++;
    return this._length;
  }

  remove(element) {
    let current = this._head;
    let previous;

    if (current.element === element) {
      this._head = current.next;

      this._length--;
      return this._length;
    }

    while (current && current.element !== element) {
      previous = current;
      current = current.next;
    }

    if (current) {
      previous.next = current.next;
      this._length--;
      return this._length;
    }
  }

  removeAt(index) {
    let currentNode = this._head;
    let previousNode;
    let count = 0;

    if (index > this._length || index < 0) {
      return null;
    }

    if (index === 0) {
      this._head = this._head.next;

      this._length--;
      return this._length;
    }

    while (count < index) {
      count++;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = currentNode.next;

    this._length--;
    return this._length;
  }

  has(element) {
    let result = false;
    let node = this._head;

    if (node && node.element === element) {
      return true;
    }

    while (node) {
      if (node.element === element) {
        return true;
      }

      node = node.next;
    }

    return result;
  }

  indexOf(element) {
    let result = -1;
    let node = this._head;

    while (node) {
      result++;

      if (node.element === element) {
        return result;
      }

      node = node.next;
    }

    return -1;
  }

  elementAt(index) {
    let node = this._head;
    let count = 0;

    if (!node || index > this._length || index < 0) {
      return null;
    }

    while (count < index) {
      count++;
      node = node.next;
    }

    return node.element;
  }
}

module.exports = LinkedList;
