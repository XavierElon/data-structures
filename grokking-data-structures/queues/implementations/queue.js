class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class Queue {
  constructor() {
    this.front = null
    this.rear = null
    this.size = 0
  }

  enqueue(data) {
    let newNode = new Node(data)

    if (this.rear === null) {
      this.front = this.rear = newNode
    } else {
      this.rear.next = newNode
      this.rear = newNode
    }
    this.size++
  }

  dequeue() {
    if (this.front === null) {
      return null
    }
    let temp = this.front
    this.front = this.front.next

    if (this.front === null) {
      this.rear = null
    }
    this.size--
    return temp.data
  }

  peek() {
    if (this.front === null) {
      return null
    }
    return this.front.data
  }

  isEmpty() {
    return this.size === 0
  }

  getSize() {
    return this.size
  }
}

const queue = new Queue()

queue.enqueue(1)
console.log(queue)
queue.enqueue(2)

console.log(queue)
queue.enqueue(3)
console.log(queue)

// Display front element
console.log('Front element:', queue.peek())
// Dequeue and display the dequeued element
console.log('Dequeued:', queue.dequeue())
// Display front element again
console.log('Front element:', queue.peek())
// Display the size of the queue
console.log('Queue size:', queue.getSize())
