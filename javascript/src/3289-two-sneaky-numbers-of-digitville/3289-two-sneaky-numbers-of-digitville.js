/*
https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/description/
 */

/*
Description:

In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was
supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.
As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two
numbers (in any order), so peace can return to Digitville.

Constraints:

2 <= n <= 100
nums.length == n + 2
0 <= nums[i] < n
The input is generated such that nums contains exactly two repeated elements.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Space complexity: O(n);
Time complexity:O(n);
 */

const getSneakyNumbers = function (nums) {
  const sneakyNumbersArr = [];
  const indexMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (!indexMap[nums[i]] && indexMap[nums[i]] !== 0) indexMap[nums[i]] = i;
    else sneakyNumbersArr.push(nums[i]);
  }

  return sneakyNumbersArr;
}

module.exports = {
  getSneakyNumbers
}