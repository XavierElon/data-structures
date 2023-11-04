/*
Given a stack, sort it using only stack operations (push and pop). You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The values in the stack are to be sorted in ascending order, with the smallest elements on top.

Examples
1. Input: [34, 3, 31, 98, 92, 23]
   Output: [3, 23, 31, 34, 92, 98]

2. Input: [4, 3, 2, 10, 12, 1, 5, 6]
   Output: [1, 2, 3, 4, 5, 6, 10, 12]

3. Input: [20, 10, -5, -1]
   Output: [-5, -1, 10, 20]
*/

class Solution {
  sortStack(stack) {
    let tempStack = []

    while (stack.length) {
      let temp = stack.pop()
      while (tempStack.length && tempStack[tempStack.length - 1] > temp) {
        stack.push(tempStack.pop())
      }
      tempStack.push(temp)
    }
    return tempStack
  }
}

const solution = new Solution()
const examples = [
  [34, 3, 31, 98, 92, 23],
  [1, 0, 2, -1, -10, 0, 1],
  [],
  [1, 1, 1, 1],
  [4, 3, 2, 1, 0, -1],
]

examples.forEach((example) => {
  console.log(solution.sortStack(example))
})

/*
Time Complexity: O(n^2)
Space Complexity: O(n)
*/
