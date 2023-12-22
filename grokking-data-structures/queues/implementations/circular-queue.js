class CircularQueue {
  constructor(size) {
    this.size = size
    this.queue = new Array(size).fill(null)
    this.front = this.rear = -1
  }

  enqueue(element) {
    if (
      (this.front === 0 && this.rear === this.size - 1) ||
      this.rear === (this.front - 1) % (this.size - 1)
    ) {
      console.log('Queue is full')
    } else if (this.front === -1) {
      this.front = this.rear = 0
      this.queue[this.rear] = element
    } else if (this.rear === this.size - 1 && this.front !== 0) {
      this.rear = 0
      this.queue[this.rear] = element
    } else {
      this.rear = (this.rear + 1) % this.size
      this.queue[this.rear] = element
    }
  }

  dequeue() {
    if (this.front === -1) {
      console.log('Queue is empty')
      return null
    }

    let data = this.queue[this.front]
    this.queue[this.front] = null
    if (this.front === this.rear) {
      this.front = this.rear = -1
    } else {
      this.front = (this.front + 1) % this.size
    }
    return data
  }

  displayQueue() {
    if (this.front === -1) {
      console.log('Queue is empty')
      return
    }
    console.log('Element in the Circular Queue are: ')
    let output = ''
    if (this.rear >= this.front) {
      for (let i = this.front; i <= this.rear; i++) {
        output += this.queue[i] + ' -> '
      }
    } else {
      for (let i = this.front; i < this.size; i++) {
        output += this.queue[i] + ' -> '
      }
      for (let i = 0; i <= this.rear; i++) {
        output += this.queue[i] + ' -> '
      }
    }
    console.log(output)
  }
}

let queue = new CircularQueue(5)

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)

queue.displayQueue()

console.log('Deleted value = ' + queue.dequeue())
console.log('Deleted value = ' + queue.dequeue())

queue.displayQueue()

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)

queue.displayQueue()

queue.enqueue(8)
