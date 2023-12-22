class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(element) {
    this.queue.push(element)
  }

  dequeue() {
    if (!this.isEmpty()) {
      this.queue.shift()
    }
  }

  peek() {
    return this.queue[0]
  }

  isEmpty() {
    return this.queue.length == 0
  }

  size() {
    return this.queue.length
  }

  clear() {
    this.queue = []
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
console.log(queue)
queue.enqueue(3)
console.log(queue)
queue.dequeue()
console.log(queue)
console.log(queue.peek())
console.log(queue.size())
