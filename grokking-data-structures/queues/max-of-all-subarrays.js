class Solution {
  printMax(arr, k) {
    let deque = []
    let result = []
    let n = arr.length

    for (let i = 0; i < n; i++) {
      while (deque.length && arr[i] >= arr[deque[deque.length - 1]]) {
        deque.pop()
      }

      deque.push(i)

      if (deque[0] < i - k + 1) {
        deque.shift()
      }

      if (i >= k - 1) {
        result.push(arr[deque[0]])
      }
    }
    return result
  }
}

let solution = new Solution()

let examples = [
  [12, 1, 78, 90, 57, 89, 56],
  [1, 4, 5, 3, 2, 5, 10],
]
let k = 3
examples.forEach((example) => {
  let result = solution.printMax(example, k)
  console.log(result)
})
