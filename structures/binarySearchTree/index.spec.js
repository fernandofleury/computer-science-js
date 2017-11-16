const assert = require('assert');
const BinarySearchTree = require('./index');

describe('BinarySearchTree', () => {
  describe('add', () => {
    context('empty tree', () => {
      it('should set the root', () => {
        const tree = new BinarySearchTree();
        const data = 10;

        tree.add(data);

        assert.equal(tree.root.data, data);
      });
    });

    context('smaller than the root', () => {
      it('should add the data to the left', () => {
        const tree = new BinarySearchTree();
        const data = 9;

        tree.add(10);
        tree.add(data);

        assert.equal(tree.root.left.data, data);
      });
    });

    context('larger than the root', () => {
      it('should add the data to the left', () => {
        const tree = new BinarySearchTree();
        const data = 11;

        tree.add(10);
        tree.add(data);

        assert.equal(tree.root.right.data, data);
      });
    });
  });

  describe('findMin', () => {
    it('should return the minimum value', () => {
      const tree = new BinarySearchTree();

      tree.add(5);
      tree.add(4);
      tree.add(3);
      tree.add(10);
      tree.add(9);

      assert.equal(tree.findMin(), 3);
    });
  });

  describe('findMax', () => {
    it('should return the Maximum value', () => {
      const tree = new BinarySearchTree();

      tree.add(5);
      tree.add(4);
      tree.add(3);
      tree.add(10);
      tree.add(9);

      assert.equal(tree.findMax(), 10);
    });
  });

  describe('contains', () => {
    context('existing value', () => {
      it('should return true', () => {
        const tree = new BinarySearchTree();

        tree.add(5);
        tree.add(4);

        assert.equal(tree.contains(4), true);
      });
    });

    context('non existing value', () => {
      it('should return false', () => {
        const tree = new BinarySearchTree();

        tree.add(5);

        assert.equal(tree.contains(4), false);
      });
    });
  });

  describe('find', () => {
    context('existing value', () => {
      it('should return true', () => {
        const tree = new BinarySearchTree();

        tree.add(5);
        tree.add(4);

        assert.ok(tree.find(4));
      });
    });

    context('non existing value', () => {
      it('should return false', () => {
        const tree = new BinarySearchTree();

        tree.add(5);

        assert.equal(tree.find(4), null);
      });
    });
  });

  describe('remove', () => {
    it('should remove the value from the tree', () => {
      const tree = new BinarySearchTree();

      tree.add(5);
      tree.add(4);
      tree.add(6);

      tree.remove(4);

      assert.equal(tree.contains(4), false);
    });
  });
});
