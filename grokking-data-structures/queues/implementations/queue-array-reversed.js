class Queue {
  constructor() {
    this.queue = {}
    this.frontIndex = 0
    this.endIndex = 0
  }

  enqueue(node) {
    this.queue[this.endIndex] = node
    this.endIndex++
    return node + ' inserted'
  }

  dequeue() {
    const node = this.queue[this.frontIndex]
    delete this.queue[this.frontIndex]
    this.frontIndex++
    return node
  }

  peek() {
    return this.queue[this.frontIndex]
  }

  get printQueue() {
    return this.queue
  }
}

const queue = new Queue()
console.log(queue.enqueue(7))
console.log(queue.enqueue(2))
console.log(queue.enqueue(6))
console.log(queue.enqueue(4))
console.log(queue.printQueue)
