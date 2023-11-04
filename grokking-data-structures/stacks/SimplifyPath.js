/*
Given an absolute file path in a Unix-style file system, simplify it by converting ".." to the previous directory and removing any "." or multiple slashes. The resulting string should represent the shortest absolute path.

Examples:
1. 
   Input: "/a//b////c/d//././/.."
   Output: "/a/b/c"
   
2. 
   Input: "/../"
   Output: "/"

3. 
   Input: "/home//foo/"
   Output: "/home/foo"

*/

class Solution {
  simplifyPath(path) {
    let stack = []
    const parts = path.split('/')

    for (let part of parts) {
      if (part === '..') {
        if (stack.length > 0) {
          stack.pop()
        }
      } else if (part !== '' && part !== '.') {
        stack.push(part)
      }
    }
    return '/' + stack.join('/')
  }
}

const solution = new Solution()
const examples = [
  '/a//b////c/d//././/..',
  '/../',
  '/home//foo/',
  '',
  '/',
  '../',
  '..',
]

examples.forEach((example) => {
  console.log(solution.simplifyPath(example))
})

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
