class Solution {
  constructor(v1, v2) {
    this.queue = []
    if (v1.length !== 0) this.queue.push([v1, 0])
    if (v2.length !== 0) this.queue.push([v2, 0])
    console.log(this.queue)
  }

  next() {
    console.log(this.queue)
    // Dequeue the first element from the queue and extract the array and its current index.
    let [arr, index] = this.queue.shift()
    // Get the value at the current index in the array.
    let value = arr[index]

    // If there are more elements in the array, put it back in the queue with an updated index.
    if (index < arr.length - 1) {
      this.queue.push([arr, index + 1])
    }

    return value
  }

  hasNext() {
    return this.queue.length > 0
  }
}

function main() {
  let i = new Solution([1, 2], [3, 4, 5, 6])
  console.log(i.next()) // returns 1
  console.log(i.next()) // returns 3
  console.log(i.next()) // returns 2
  console.log(i.next()) // returns 4
  console.log(i.next()) // returns 5
  console.log(i.next()) // returns 6
  console.log(i.hasNext()) // returns False
}

main()
