/*
Given a positive integer n, write a function that returns its binary equivalent as a string. The function should not use any in-built binary conversion function.
*/

class Solution {
  decimalToBinary(num) {
    let stack = []

    while (num > 0) {
      stack.push(num % 2)
      num = Math.floor(num / 2)
    }
    return stack.reverse().join('')
  }
}

const solution = new Solution()

const examples = [7, 11, 1, 2, 0, 16]

examples.forEach((example) => {
  console.log(solution.decimalToBinary(example))
})

/*
Time Complexity: O(log n)
Space Complexity: O(log n)
*/
