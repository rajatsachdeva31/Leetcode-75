/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = new Stack();

  for (let i = 0; i < asteroids.length; i++) {
    const asteroid = asteroids[i];
    if (stack.isEmpty() || stack.peek() < 0 || asteroid > 0) {
      stack.push(asteroid);
    } else if (-asteroid == stack.peek()) {
      stack.pop();
    } else if (-asteroid > stack.peek()) {
      stack.pop();
      i--;
    }
  }

  return stack.toArray();
};

class Stack {
  constructor() {
    this.items = [];
  }

  // Push operation
  push(element) {
    this.items.push(element);
  }

  // Pop operation
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Peek operation
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  // isEmpty operation
  isEmpty() {
    return this.items.length === 0;
  }

  // Size operation
  size() {
    return this.items.length;
  }

  // Print the stack
  toArray() {
    return this.items;
  }
}
