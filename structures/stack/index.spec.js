const assert = require('assert');
const Stack = require('./index');

describe('Stack', () => {
  describe('push', () => {
    it('should add the value to end of the stack', () => {
      const value = 'foo';
      const stack = new Stack();

      stack.push(value);

      assert.equal(stack.peek(), value);
    });
  });

  describe('pop', () => {
    context('empty stack', () => {
      it('should return null', () => {
        const stack = new Stack();

        assert.equal(stack.pop(), null);
      });
    });

    it('should remove the value from end of the stack', () => {
      const value = 'foo';
      const stack = new Stack();

      stack.push(value);

      assert.equal(stack.pop(), value);
    });
  });

  describe('peek', () => {
    it('should return the value of end of the stack', () => {
      const value = 'foo';
      const stack = new Stack();

      stack.push(value);

      assert.equal(stack.peek(), value);
    });
  });

  describe('length', () => {
    it('should return the length of the stack', () => {
      const value = 'foo';
      const stack = new Stack();

      stack.push(value);

      assert.equal(stack.length, 1);
    });
  });
});
