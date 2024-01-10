class Solution {
  generateBinaryNumbers(n) {
    let queue = ['1']
    let res = []

    while (n--) {
      let s1 = queue.shift()
      console.log('s1 = ' + s1)
      res.push(s1)
      console.log('queue = ' + queue)
      console.log('res = ' + res)

      let s2 = s1

      queue.push(s1 + '0')
      queue.push(s2 + '1')
      console.log('queue = ' + queue)
    }

    return res
  }
}

let sol = new Solution()
console.log(sol.generateBinaryNumbers(8)) // Test with n = 5
console.log(sol.generateBinaryNumbers(2)) // Test with n = 2
console.log(sol.generateBinaryNumbers(3)) // Test with n = 3
console.log(sol.generateBinaryNumbers(5)) // Test with n = 5
