class Solution {
  constructor() {
    this.main = []
    this.aux = []
  }

  push(val) {
    this.aux.push(val)

    while (this.main.length != 0) {
      this.aux.push(this.main.shift())
    }

    console.log(this.aux)
    console.log(this.main)
    ;[this.main, this.aux] = [this.aux, this.main]

    console.log(this.aux)
    console.log(this.main)
  }

  pop() {
    return this.main.shift()
  }
}

// Testing
let stack = new Solution()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop()) // Should print 3 (last pushed element)
console.log(stack.pop()) // Should print 2 (element pushed before 3)
