/*
Given a square matrix (2D array), calculate the sum of its two diagonals. 
The two diagonals in consideration are the primary diagonal that spans from the top-left to the bottom-right and the secondary diagonal that spans from top-right to bottom-left. 
If a number is part of both diagonals (which occurs only for odd-sized matrices), it should be counted only once in the sum.
*/

class Solution {
  diagonalSum(mat) {
    if (mat[0].length === 0) return 0
    let totalSum = 0
    const n = mat.length

    for (let i = 0; i < n; i++) {
      totalSum += mat[i][i] + mat[i][n - i - 1]
    }

    if (n % 2 !== 0) {
      totalSum -= mat[Math.floor(n / 2)][Math.floor(n / 2)]
    }
    return totalSum
  }
}

const solution = new Solution()
const examples = [
  [
    [1, 4, 9],
    [0, 0, 0],
    [-1, -4, -4],
  ],
  [[5]],
  [[]],
  [[-100]],
  [
    [-10, -10],
    [-10, -10],
  ],
]
examples.forEach((example) => {
  console.log(solution.diagonalSum(example))
})

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/
