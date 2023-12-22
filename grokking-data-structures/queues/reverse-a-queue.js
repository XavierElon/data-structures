class Solution {
  constructor() {
    this.queue = []
  }

  reverseQueue() {
    let stack = []

    while (this.queue.length !== 0) {
      stack.push(this.queue[0])
      this.queue.shift()
    }

    while (stack.length !== 0) {
      this.queue.push(stack.pop())
    }
  }

  static main() {
    let solution = new Solution()

    solution.queue.push(1, 2, 3, 4, 5)

    solution.reverseQueue()

    console.log(solution.queue)
  }
}

Solution.main()

class SecondSolution {
  reverseQueue(queue) {
    let stack = []
    while (queue.length !== 0) {
      stack.push(queue[0])
      queue.shift()
    }

    while (stack.length !== 0) {
      queue.push(stack.pop())
    }
    return queue
  }
}

const solution = new SecondSolution()

const examples = [
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [5, 7, 9],
]

examples.forEach((queue) => {
  console.log(solution.reverseQueue(queue))
})

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
