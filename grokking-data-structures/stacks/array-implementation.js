class Stack {
  constructor(size) {
    this.stack = new Array(size)
    this.top = -1
  }

  push(data) {
    if (this.top === this.stack.length - 1) {
      throw new Error('Stack is full')
    }
    this.stack[++this.top] = data
  }
}
