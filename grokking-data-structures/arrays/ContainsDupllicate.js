/*
    Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/

class Solution {
  containsDuplicate(nums) {
    nums.sort((a, b) => a - b) // sort the array
    // use a loop to compare each element with its next element
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === nums[i + 1]) {
        // if any two elements are the same, return true
        return true
      }
    }
    return false // if no duplicates are found, return false
  }
}

const sol = new Solution()
const nums1 = [1, 2, 3, 4]
console.log(sol.containsDuplicate(nums1)) // Expected output: false

const nums2 = [1, 2, 3, 1]
console.log(sol.containsDuplicate(nums2)) // Expected output: true

const nums3 = []
console.log(sol.containsDuplicate(nums3)) // Expected output: false

const nums4 = [1, 1, 1, 1]
console.log(sol.containsDuplicate(nums4)) // Expected output: true

const solution = new Solution()

const nums = [[], [0, 0, 0, 0], [-1, -2, -1], [1, 2, 3, 4]]

nums.forEach((array) => {
  console.log(solution.containsDuplicate(array))
})

/*
Time Complexity: O(n*log(N)))
Space Complexity: O(1) or O(n) depending on sorting algorthm used
*/
