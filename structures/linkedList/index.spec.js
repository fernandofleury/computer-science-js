const assert = require('assert');
const LinkedList = require('./index');

describe('LinkedList', () => {
  describe('constructor', () => {
    context('without initial element', () => {
      it('should return an empty list without head', () => {
        const list = new LinkedList();

        assert.equal(list.length, 0);
      });
    });

    context('with initial element', () => {
      it('should add the element to the list', () => {
        const list = new LinkedList('foo');

        assert.equal(list.length, 1);
      });
    });
  });

  describe('length', () => {
    it('should return the length of the list', () => {
      const list = new LinkedList();

      assert.equal(list.length, 0);
    });
  });

  describe('head', () => {
    it('should return the head', () => {
      const element = 'foo';
      const list = new LinkedList(element);

      assert.equal(list.head.element, element);
    });
  });

  describe('tail', () => {
    it('should return the tail', () => {
      const element = 'foo';
      const list = new LinkedList(element);

      assert.equal(list.tail.element, element);
    });
  });

  describe('add', () => {
    it('should add the element to the end of the list', () => {
      const list = new LinkedList('bar');
      const element = 'foo';

      assert.equal(list.add(element), 2);
      assert.equal(list.tail.element, element);
    });
  });

  describe('addAt', () => {
    context('negative index', () => {
      it('should return null', () => {
        const list = new LinkedList();

        assert.equal(list.addAt(-1, 'foo'), null);
      });
    });

    context('index larger than the list', () => {
      it('should return null', () => {
        const list = new LinkedList();

        assert.equal(list.addAt(1, 'foo'), null);
      });
    });

    it('should add the element at the provided index', () => {
      const list = new LinkedList();

      list.add('foo');
      list.add('bar');

      assert.equal(list.addAt(1, 'baz'), 3);
    });
  });

  describe('remove', () => {
    context('single item list', () => {
      it('should remove the provided element from the list', () => {
        const list = new LinkedList();
        const element = 'foo';

        list.add(element);

        assert.equal(list.remove(element), 0);
      });
    });

    context('multiple item list', () => {
      it('should remove the provided element from the list', () => {
        const list = new LinkedList('bar');

        list.add('foo');
        list.add('baz');

        assert.equal(list.remove('foo'), 2);
      });
    });
  });

  describe('removeAt', () => {
    context('negative index', () => {
      it('should return null', () => {
        const list = new LinkedList();

        assert.equal(list.removeAt(-1), null);
      });
    });

    context('index larger than the list', () => {
      it('should return null', () => {
        const list = new LinkedList();

        assert.equal(list.removeAt(1), null);
      });
    });

    it('should add the element at the provided index', () => {
      const list = new LinkedList();

      list.add('foo');
      list.add('bar');
      list.add('baz');

      assert.equal(list.removeAt(1), 2);
    });
  });

  describe('has', () => {
    it('should return false if the element is not on the list', () => {
      const list = new LinkedList();
      const element = 'foo';

      assert.equal(list.has(element), false);
    });

    it('should return true if the element is on the list', () => {
      const element = 'foo';
      const list = new LinkedList(element);

      assert.equal(list.has(element), true);
    });
  });

  describe('indexOf', () => {
    context('empty list', () => {
      it('should return -1', () => {
        const list = new LinkedList();

        assert.equal(list.indexOf('foo'), -1);
      });
    });

    context('element not found', () => {
      it('should return -1', () => {
        const list = new LinkedList('bar');

        assert.equal(list.indexOf('foo'), -1);
      });
    });

    it('should return the index of the element', () => {
      const list = new LinkedList('bar');

      assert.equal(list.indexOf('bar'), 0);
    });
  });

  describe('elementAt', () => {
    context('empty list', () => {
      it('should return null', () => {
        const list = new LinkedList();

        assert.equal(list.elementAt(0), null);
      });
    });

    context('negative index', () => {
      it('should return null', () => {
        const list = new LinkedList();

        assert.equal(list.elementAt(-1), null);
      });
    });

    context('index larger than the list', () => {
      it('should return null', () => {
        const list = new LinkedList();

        assert.equal(list.elementAt(1), null);
      });
    });

    it('should return the element at the provided index', () => {
      const element = 'foo';
      const list = new LinkedList(element);

      assert.equal(list.elementAt(0), element);
    });
  });
});
