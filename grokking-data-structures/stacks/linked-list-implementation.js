class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
  }

  pop() {
    if (this.top === null) {
      throw new Error('Stack is empty')
    }
    const item = this.top.data
    this.top = this.top.next
    return item
  }

  push(item) {
    const node = new Node(item)
    node.next = this.top
    this.top = node
  }

  peek() {
    if (this.top === null) {
      throw new Error('Stack is empty')
    }
    return this.top.data
  }

  isEmpty() {
    return this.top === null
  }
}

const stack = new Stack()
stack.push(1)
stack.push(5)
stack.push(10)
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack)
