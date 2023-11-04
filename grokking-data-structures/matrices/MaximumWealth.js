/*
The task revolves around determining the richest individual from a set of bank customers. 
]\Imagine every customer has multiple bank accounts, with each account holding a certain amount of money. 
The total wealth of a customer is calculated by summing all the money across their multiple accounts.

Given a 2D-array, where each sub-array represents different accounts of a customer and contains integers representing the money in each account, find the maximum wealth among all customers.
*/

class Solution {
  maximumWealth(accounts) {
    console.log('here')
    let maxWealth = 0 // Initialize maxWealth to 0

    accounts.forEach((customer) => {
      const wealth = customer.reduce(
        (accumulator, current) => accumulator + current,
        0
      )

      if (wealth > maxWealth) {
        maxWealth = wealth
      }
    })
    return maxWealth
  }
}

const solution = new Solution()
console.log(
  solution.maximumWealth([
    [5, 3, 1],
    [0, 0, 0],
  ])
)
console.log(solution.maximumWealth([[], []]))
console.log(
  solution.maximumWealth([
    [-5, 3, 1],
    [-10, 0, 0],
  ])
)
console.log(
  solution.maximumWealth([
    [5, 3, 1],
    [0, 0, 0],
    [1, 2, 3, 5, 6],
  ])
)

/*
Time Complexity: O(n*m) where n is the number of customers and m is the number of accounts per customer
Space Complexity: O(1)
*/
