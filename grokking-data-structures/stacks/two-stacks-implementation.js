/*
Your task is to implement two stacks in a single array efficiently. You need to provide the following methods for the stacks: push1, push2, pop1, pop2.
*/

class Solution {
  constructor(n) {
    this.size = n
    this.top1 = -1
    this.top2 = this.size
    this.arr = Array(n).fill(null)
  }

  push1(x) {
    if (this.top1 < this.top2 - 1) {
      this.top1++
      this.arr[this.top1] = x
    } else {
      console.log('Stack Overflow')
      process.exit(1)
    }
  }

  push2(x) {
    if (this.top1 < this.top2 - 1) {
      this.top2--
      this.arr[this.top2] = x
    } else {
      console.log('Stack Overflow')
      process.exit(1)
    }
  }

  pop1() {
    if (this.top1 >= 0) {
      let x = this.arr[this.top1]
      this.top1--
      return x
    } else {
      console.log('Stack Underflow')
      process.exit(1)
    }
  }

  pop2() {
    if (this.top2 < this.size) {
      let x = this.arr[this.top2]
      this.top2++
      return x
    } else {
      console.log('Stack Underflow')
      process.exit(1)
    }
  }
}

let ts = new Solution(6)
ts.push1(5)
ts.push2(10)
ts.push2(15)
ts.push1(11)
ts.push2(7)
console.log('Popped element from stack1 is: ' + ts.pop1())
ts.push2(40)
console.log('Popped element from stack2 is: ' + ts.pop2())

/*
Time Complexity: O(1) for push and pop
Space Complexity: O(n) - size of arraay
*/
