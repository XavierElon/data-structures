/*
Given a string s, where '*' represents a star. We can remove a star along with its closest non-star character to its left in a single operation. The task is to perform as many such operations as possible until all stars have been removed and return the resultant string.

Examples
Example 1

Input: "abc*de*f"
Expected Output: "abdf"
Description: We remove 'c' along with '' to get "abdef", then remove 'e' along with '*' to get "abdf"
Example 2

Input: "a*b*c*d"
Expected Output: "d"
Description: We remove 'a' along with '' to get "bcd", then remove 'b' with '' to get "cd", then remove 'c' with '' to get "d".
Example 3

Input: "abcd"
Expected Output: "abcd"
Description: As there is no '*', the string remains the same.
*/

class Solution {
  removeStars(s) {
    let stack = []
    for (let c of s) {
      if (stack.length && c === '*') {
        stack.pop()
      } else if (c != '*') {
        stack.push(c)
      }
    }
    return stack.join('')
  }
}

const solution = new Solution()
const examples = ['a*b*c*d*e', 'a**bcd*ef**', '***', 'abc', '', '1*23ab*']

examples.forEach((example) => {
  console.log(solution.removeStars(example))
})

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
