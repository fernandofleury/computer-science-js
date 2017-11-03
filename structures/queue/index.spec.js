const assert = require('assert');
const Queue = require('./index');

describe('Queue', () => {
  describe('enqueue', () => {
    it('should add the value to end of the queue', () => {
      const value = 'foo';
      const queue = new Queue();

      queue.enqueue(value);

      assert.equal(queue.peek(), value);
    });
  });

  describe('dequeue', () => {
    context('empty queue', () => {
      it('should return undefined', () => {
        const queue = new Queue();

        assert.equal(queue.dequeue(), undefined);
      });
    });

    it('should remove the value from beggining of the queue', () => {
      const value = 'foo';
      const queue = new Queue();

      queue.enqueue(value);

      assert.equal(queue.dequeue(), value);
    });
  });

  describe('peek', () => {
    it('should return the value of the beggining of the queue', () => {
      const value = 'foo';
      const queue = new Queue();

      queue.enqueue(value);

      assert.equal(queue.peek(), value);
    });
  });
});
