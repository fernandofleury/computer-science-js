class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  add(data) {
    const node = new Node(data);

    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (current) {
      if (node.data === current.data) {
        return;
      }

      if (node.data < current.data) {
        if (!current.left) {
          current.left = node;
          return;
        }

        current = current.left;
      }

      if (node.data > current.data) {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  findMin(node) {
    if (!node) {
      node = this.root;
    }

    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  findMax(node) {
    if (!node) {
      node = this.root;
    }

    while (node.right) {
      node = node.right;
    }

    return node.data;
  }

  contains(data) {
    let current = this.root;

    while (current) {
      if (data === current.data) {
        return true;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }

  find(data) {
    let current = this.root;

    while (current && current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return current;
  }

  remove(data) {
    this.root = this._recursiveRemoval(this.root, data);
  }

  _recursiveRemoval(node, data) {
    if (!node) {
      return null;
    }

    if (data === node.data) {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      const temp = this.findMin(node.right);
      node.data = temp;
      node.right = this._recursiveRemoval(node.right, temp);

      return node;
    }

    if (data < node.data) {
      node.left = this._recursiveRemoval(node.left, data);
      return node;
    }

    node.right = this._recursiveRemoval(node.right, data);
    return node;
  }


}

module.exports = BinarySearchTree;
