class Deque {
  constructor() {
    this.front = this.back = undefined
  }

  addFront(value) {
    if (!this.front) {
      this.front = this.back = { value }
    } else {
      this.front = this.front.next = { value, prev: this.front }
    }
  }

  removeFront() {
    let value = this.peekFront()
    if (this.front === this.back) this.front = this.back = undefined
    else (this.front = this.front.prev).next = undefined
    return value
  }

  peekFront() {
    return this.front && this.front.value
  }

  addBack(value) {
    if (!this.front) this.front = this.back = { value }
    else this.back = this.back.prev = { value, next: this.back }
  }

  removeBack() {
    let value = this.peekBack()
    if (this.front === this.back) this.front = this.back = undefined
    else (this.back = this.back.next).back = undefined
    return value
  }

  peekBack() {
    return this.back && this.back.value
  }

  printDeque() {
    let currentNode = this.back
    let output = '['

    while (currentNode) {
      output += `{ value: ${currentNode.value} next: ${currentNode.next?.value} prev: ${currentNode.prev?.value} }`
      if (currentNode.next) {
        output += ' -> '
      }
      currentNode = currentNode.next
    }
    output += ' ]'
    console.log(output)
  }
}

let deque = new Deque()
console.log(deque.peekFront())
deque.addBack(1)
deque.addBack(2)
deque.addBack(3)
deque.printDeque()
deque.addFront(0)
deque.addFront(-1)
deque.printDeque()
deque.removeBack()
deque.printDeque()
deque.removeFront()
deque.printDeque()
