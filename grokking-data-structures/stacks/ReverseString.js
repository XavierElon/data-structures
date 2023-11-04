/*
Given a string, write a function that uses a stack to reverse the string. The function should return the reversed string.
*/

class Solution {
  reverseString(s) {
    let reversedString = ''
    let stack = [...s]

    while (stack.length) {
      reversedString += stack.pop()
    }
    return reversedString
  }
}

const solution = new Solution()
const examples = ['abcdefg', 'zxcv', '', '1asdfja', 'Hello world']

examples.forEach((example) => {
  console.log(solution.reverseString(example))
})

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
