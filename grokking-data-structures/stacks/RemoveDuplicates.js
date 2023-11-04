/*

*/

class Solution {
  removeDuplicates(s) {
    let stack = []
    for (let c of s) {
      if (stack.length > 0 && stack[stack.length - 1] === c) {
        stack.pop()
      } else {
        stack.push(c)
      }
    }
    return stack.join('')
  }
}

const solution = new Solution()
const examples = ['azxxxzy', 'aaaabbbbc', 'abc', '', 'ccd']

examples.forEach((example) => {
  console.log(solution.removeDuplicates(example))
})

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
