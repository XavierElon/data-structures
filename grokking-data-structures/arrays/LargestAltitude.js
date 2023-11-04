/*
You are given an array of integers representing a journey on a bike, wherein each number indicates a climb or descent in altitude, 
measured as a gain or loss of height. The rider starts at altitude 0. Your task is to determine the highest altitude the biker reaches at any point during the journey.
*/

class Solution {
  largestAltitude(gain) {
    let maxAltitude = 0 // To store the maximum altitude encountered
    let currentAltitude = 0

    for (let i of gain) {
      currentAltitude += i
      maxAltitude = Math.max(currentAltitude, maxAltitude)
    }
    return maxAltitude
  }
}

const solution = new Solution()

// Example 1
console.log(solution.largestAltitude([-5, 1, 5, 0, -7])) // Expected: 1

// Example 2
console.log(solution.largestAltitude([4, -3, 2, -1, -2])) // Expected: 4

// Example 3
console.log(solution.largestAltitude([2, 2, -3, -1, 2, 1, -5])) // Expected: 4

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/
