const assert = require('assert');
const CustomMap = require('./index');

describe('Map', () => {
  describe('set', () => {
    it('should return true if the key exists', () => {
      const map = new CustomMap();
      const key = 'foo';
      const value = 'foo';

      map.set(key, value);

      assert.ok(map.has(key));
    });
  });

  describe('remove', () => {
    it('should remove the key from the map', () => {
      const map = new CustomMap();
      const key = 'foo';
      const value = 'foo';

      map.set(key, value);
      map.remove(key);

      assert.equal(map.has(key), false);
    });
  });

  describe('get', () => {
    it('should return the key', () => {
      const map = new CustomMap();
      const key = 'foo';
      const value = 'foo';

      map.set(key, value);

      assert.ok(map.get(key));
    });

    context('non existing key', () => {
      it('should return undefined', () => {
        const map = new CustomMap();
        const key = 'foo';

        assert.equal(map.get(key), undefined);
      });
    });
  });

  describe('has', () => {
    it('should return true', () => {
      const map = new CustomMap();
      const key = 'foo';
      const value = 'foo';

      map.set(key, value);

      assert.ok(map.has(key));
    });

    context('non existing key', () => {
      it('should return false', () => {
        const map = new CustomMap();
        const key = 'foo';

        assert.equal(map.has(key), false);
      });
    });
  });

  describe('keys', () => {
    it('should return the keys of the map', () => {
      const map = new CustomMap();
      const expectedData = ['foo', 'bar'];

      map.set('foo', 'foo');
      map.set('bar', 'bar');

      assert.deepEqual(map.keys(), expectedData);
    });

    context('empty map', () => {
      it('should return an empty array', () => {
        it('should return the keys of the map', () => {
          const map = new CustomMap();
          const expectedData = [];

          assert.deepEqual(map.keys(), expectedData);
        });
      });
    });
  });

  describe('values', () => {
    it('should return the values of the map', () => {
      const map = new CustomMap();
      const expectedData = ['foo', 'bar'];

      map.set('foo', 'foo');
      map.set('bar', 'bar');

      assert.deepEqual(map.values(), expectedData);
    });

    context('empty map', () => {
      it('should return an empty array', () => {
        it('should return the values of the map', () => {
          const map = new CustomMap();
          const expectedData = [];

          assert.deepEqual(map.values(), expectedData);
        });
      });
    });
  });

  describe('entries', () => {
    it('should return the entries of the map', () => {
      const map = new CustomMap();
      const expectedData = [['foo', 'foo'], ['bar', 'bar']];

      map.set('foo', 'foo');
      map.set('bar', 'bar');

      assert.deepEqual(map.entries(), expectedData);
    });

    context('empty map', () => {
      it('should return an empty array', () => {
        it('should return the entries of the map', () => {
          const map = new CustomMap();
          const expectedData = [];

          assert.deepEqual(map.entries(), expectedData);
        });
      });
    });
  });

  describe('clear', () => {
    it('should clear the map', () => {
      const map = new CustomMap();

      map.set('foo', 'foo');
      map.clear();

      assert.equal(map.size, 0);
    });
  });

  describe('size', () => {
    it('should return the size of the map', () => {
      const map = new CustomMap();

      map.set('foo', 'foo');

      assert.equal(map.size, 1);
    });
  });
});
