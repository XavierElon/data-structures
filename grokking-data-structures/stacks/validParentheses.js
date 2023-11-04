/*(
    The "Balanced Parentheses" problem requires you to determine 
    if a given string of parentheses is balanced. A string of parentheses 
    is considered balanced if every opening parenthesis has a corresponding closing parenthesis in the correct order.
)*/

class Solution {
  isValid(s) {
    let stack = []

    for (let c of s) {
      console.log(c)
      if (c === '(' || c === '[' || c === '{') {
        stack.push(c)
      } else {
        if (!stack.length) {
          console.log('failing here')
          return false
        }

        let top = stack.pop()

        if (c === ')' && top !== '(') return false
        if (c === ']' && top !== '[') return false
        if (c === '}' && top !== '{') return false
      }
    }
    console.log(stack)
    return !stack.length
  }
}

let solution = new Solution()
let test1 = '{[()]}' // Should be valid
let test4 = '([{}])' // Should be valid
let test2 = '{[}]' // Should be invalid
let test3 = '(]' // Should be invalid
let examples = ['{[()]}', '([{}])', '{[}', '', 'a[]']
examples.forEach((example) => {
  console.log(solution.isValid(example))
})
// console.log(solution.isValid(test1))
// console.log(solution.isValid(test2))
// console.log(solution.isValid(test3))
// console.log(solution.isValid(test4))
