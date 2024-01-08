/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumMap = function (nums, target) {
  let map = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
}

const examples = [
  { nums: [2, 7, 11, 15], target: 9 },
  { nums: [3, 2, 4], target: 6 },
  { nums: [], target: 0 },
  { nums: [0, 2, 1, 5], target: 1 },
  { nums: [0, 0], target: 0 },
]

examples.map((example) => {
  console.log(twoSumMap(example.nums, example.target))
})

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumObject = function (nums, target) {
  let hash = {}

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    if (hash[target - n] !== undefined) {
      return [hash[target - n], i]
    }
    hash[n] = i
  }
  return []
}

examples.map((example) => {
  console.log(twoSumObject(example.nums, example.target))
})
