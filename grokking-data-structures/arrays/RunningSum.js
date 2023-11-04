/*
Given a one-dimensional array of integers, create a new array that represents the running sum of the original array.

The running sum at position i in the new array is calculated as the sum of all the numbers in the original array from 
the 0th index up to the i-th index (inclusive). Formally, the resulting array should be computed as follows: 
result[i] = sum(nums[0] + nums[1] + ... + nums[i]) for each i from 0 to the length of the array minus one.
*/

class Solution {
  runningSum(nums) {
    if (!nums || nums.length === 0) {
      return []
    }

    const result = new Array(nums.length)
    result[0] = nums[0]

    for (let i = 1; i < nums.length; i++) {
      result[i] = result[i - 1] + nums[i]
    }

    return result
  }
}

const solution = new Solution()

const testInputs = [[], [1, 1, 1, 1], [-5, -10, -15], [0, 0]]

testInputs.forEach((input) => {
  const output = solution.runningSum(input)

  console.log(output)
})

/*
Time Complexity: O(n)
Space Complexity: O(n)
*/
