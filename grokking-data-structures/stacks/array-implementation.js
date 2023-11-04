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

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty')
    }
    const data = this.stack[this.top]
    this.stack[this.top--] = null
    return data
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty')
    }
    return this.stack[this.top]
  }

  isEmpty() {
    return this.top === -1
  }
}

const stack = new Stack(3)
stack.push(1)
stack.push(5)
stack.push(10)
console.log(stack.peek())
stack.push(20)
