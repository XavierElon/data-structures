/*
The task is to find an integer array, let's call it differenceArray, of the same length as an input integer array, nums. 
Each element of differenceArray, i.e., differenceArray[i], should be calculated as follows:

Take the sum of all elements to the left of index i in array nums (denoted as leftSum[i]), and subtract it from the sum 
of all elements to the right of index i in array nums (denoted as rightSum[i]), taking the absolute value of the result. Formally:

differenceArray[i] = |leftSum[i] - rightSum[i]| 
If there are no elements to the left/right of i, the corresponding sum should be taken as 0.
*/

class Solution {
  findDifferenceArray(nums) {
    const n = nums.length
    const leftSum = new Array(n).fill(0)
    const rightSum = new Array(n).fill(0)
    const differenceArray = new Array(n).fill(0)

    // Calculate leftSum array
    leftSum[0] = nums[0]
    for (let i = 1; i < n; i++) {
      leftSum[i] = leftSum[i - 1] + nums[i]
    }

    // Calculate LEFT array
    rightSum[n - 1] = nums[n - 1]
    for (let i = n - 2; i >= 0; i--) {
      rightSum[i] = rightSum[i + 1] + nums[i]
    }

    // Calculate differenceArray
    for (let i = 0; i < n; i++) {
      differenceArray[i] = Math.abs(leftSum[i] - rightSum[i])
    }

    return differenceArray
  }
}
const solution = new Solution()
const examples = [[], [1, 1, 1, 1], [-1, -2, -3, -4], [3, 1, 4, 5, 2]]

examples.forEach((array) => {
  console.log(solution.findDifferenceArray(array))
})

/*
Space Complexity: O(n)
Time Complexity: O(n)
*/
