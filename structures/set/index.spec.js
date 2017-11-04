const assert = require('assert');
const CustomSet = require('./index');

describe('Set', () => {
  describe('has', () => {
    context('existing item', () => {
      it('should return true', () => {
        const value = 'foo';
        const set = new CustomSet();

        set.add(value);

        assert.ok(set.has(value));
      });
    });

    context('non existing item', () => {
      it('should return false', () => {
        const value = 'foo';
        const set = new CustomSet();

        assert.equal(set.has(value), false);
      });
    });
  });
  describe('add', () => {
    it('should add the value to the set', () => {
      const value = 'foo';
      const set = new CustomSet();

      set.add(value);

      assert.ok(set.has(value));
    });

    context('repeated value', () => {
      it("shouldn't add it to the set", () => {
        const value = 'foo';
        const set = new CustomSet();
        const expectedData = [value];

        set.add(value);
        set.add(value);

        assert.deepEqual(set.values(), expectedData);
      });
    });
  });

  describe('remove', () => {
    it('should remove the item from the set', () => {
      const set = new CustomSet();
      const expectedData = ['bar', 'baz'];

      set.add('foo');
      set.add('bar');
      set.add('baz');
      set.remove('foo');

      assert.deepEqual(set.values(), expectedData);
    });
  });

  describe('union', () => {
    it('should return a new set with both sets', () => {
      const setA = new CustomSet();
      const setB = new CustomSet();
      const expectedData = ['foo', 'bar', 'qux', 'baz'];

      setA.add('foo');
      setA.add('bar');
      setA.add('qux');

      setB.add('foo');
      setB.add('bar');
      setB.add('baz');

      assert.deepEqual(setA.union(setB).values(), expectedData);
    });
  });

  describe('intersect', () => {
    it('should return the intersection of both sets', () => {
      const setA = new CustomSet();
      const setB = new CustomSet();
      const expectedData = ['foo', 'bar'];

      setA.add('foo');
      setA.add('bar');
      setB.add('qux');

      setB.add('foo');
      setB.add('bar');
      setB.add('baz');

      assert.deepEqual(setA.intersect(setB).values(), expectedData);
    });
  });

  describe('difference', () => {
    it('should return the difference between sets', () => {
      const setA = new CustomSet();
      const setB = new CustomSet();
      const expectedData = ['qux', 'baz'];

      setA.add('foo');
      setA.add('bar');
      setB.add('qux');

      setB.add('foo');
      setB.add('bar');
      setB.add('baz');

      assert.deepEqual(setA.difference(setB).values(), expectedData);
    });
  });
});
