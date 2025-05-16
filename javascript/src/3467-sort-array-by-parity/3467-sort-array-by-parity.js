/*
https://leetcode.com/problems/transform-array-by-parity/description/
 */

/*
Description:

You are given an integer array nums. Transform nums by performing the following operations in the exact order specified:

Replace each even number with 0.
Replace each odd numbers with 1.
Sort the modified array in non-decreasing order.
Return the resulting array after performing these operations.

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 1000
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Space complexity: O(n);
Time complexity: O(nlogn);
 */

const transformArray = function (nums) {
  return nums.map(e => e % 2 === 0 ? 0 : 1).sort((a, b) => a - b);
};


module.exports = {
  transformArray
};