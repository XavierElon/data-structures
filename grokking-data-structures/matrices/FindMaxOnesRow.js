/*
We are given a binary matrix that has dimensions (m \times n), consisting of ones and zeros. 
Our task is to determine the row that contains the highest number of ones and return two values: the zero-based index of this row and the actual count of ones it possesses. 
If there is a tie, i.e., multiple rows contain the same maximum number of ones, we must select the row with the lowest index.
*/

class Solution {
  findMaxOnesRow(mat) {
    let maxOnesIdx = -1
    let maxOnesCount = 0
    if (mat[0].length === 0) return [maxOnesIdx, maxOnesCount]

    for (let i = 0; i < mat.length; i++) {
      let onesCount = mat[i].reduce((a, b) => a + b, 0)
      if (onesCount > maxOnesCount) {
        maxOnesIdx = i
        maxOnesCount = onesCount
      }
    }

    return [maxOnesIdx, maxOnesCount]
  }
}

const solution = new Solution()
const examples = [
  [
    [1, 1, 1],
    [0, 0, 0],
    [1, 1, 1],
  ],
  [[0], [0], [1]],
  [[0], [0]],
  [[]],
]

examples.forEach((example) => {
  console.log(solution.findMaxOnesRow(example))
})

/*
Time Complexity: O(m * n)
Space Complexity: O(1)
*/
