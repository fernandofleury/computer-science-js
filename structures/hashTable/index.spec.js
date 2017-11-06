const assert = require('assert');
const HashTable = require('./index');

describe('HashTable', () => {
  describe('add', () => {
    it('should add the object to the table', () => {
      const table = new HashTable();
      const key = 'foo';
      const value = 'bar';
      const hash = table.generateHash(key);
      const expectedData = { [key]: value };

      table.add(key, value);

      assert.deepEqual(table.items[hash], expectedData);
    });

    context('same hash conversion', () => {
      it('should add another key to the same bucket', () => {
        const table = new HashTable();
        const hash = table.generateHash('foo bar');
        const expectedData = { 'foo bar': 'foo', 'foo baz': 'foo' };

        table.add('foo bar', 'foo');
        table.add('foo baz', 'foo');

        assert.deepEqual(table.items[hash], expectedData);
      });
    });
  });

  describe('remove', () => {
    context('single key in the bucket', () => {
      it('should remove the bucket', () => {
        const table = new HashTable();
        const key = 'foo';
        const value = 'bar';
        const hash = table.generateHash(key);

        table.add(key, value);
        table.remove(key);

        assert.equal(table.items[hash], undefined);
      });
    });

    it('should remove the item from the bucket', () => {
      const table = new HashTable();
      const hash = table.generateHash('foo bar');
      const expectedData = { 'foo bar': 'foo' };

      table.add('foo bar', 'foo');
      table.add('foo baz', 'foo');
      table.remove('foo baz');

      assert.deepEqual(table.items[hash], expectedData);
    });
  });

  describe('search', () => {
    context('non existing key', () => {
      it('should return undefined', () => {
        const table = new HashTable();

        assert.equal(table.search('foo'), undefined);
      });
    });

    it('should return the value of the key', () => {
      const table = new HashTable();
      const key = 'foo';
      const value = 'bar';
      const expectedData = value;

      table.add(key, value);

      assert.equal(table.search(key), expectedData);
    });
  });

  describe('size', () => {
    it('should return the size of the hashTable', () => {
      const table = new HashTable();

      table.add('foo', 'foo');

      assert.equal(table.size, 1);
    });
  });
});
