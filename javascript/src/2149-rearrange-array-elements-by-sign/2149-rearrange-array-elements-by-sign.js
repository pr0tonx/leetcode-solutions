/*
https://leetcode.com/problems/rearrange-array-elements-by-sign/description/
 */

/*
Description:

You are given a 0-indexed integer array nums of even length consisting of an equal number of positive and negative
integers.
You should return the array of nums such that the the array follows the given conditions:
Every consecutive pair of integers have opposite signs.
For all integers with the same sign, the order in which they were present in nums is preserved.
The rearranged array begins with a positive integer.
Return the modified array after rearranging the elements to satisfy the aforementioned conditions.

Constraints:

2 <= nums.length <= 2 * 105
nums.length is even
1 <= |nums[i]| <= 105
nums consists of equal number of positive and negative integers.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Space complexity: O(n);
Time complexity: O(n)
 */

const rearrangeArray = function (nums) {
  const positiveArr = [];
  const negativeArr = [];
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    nums[i] > 0 ? positiveArr.push(nums[i]) : negativeArr.push(nums[i]);
  }

  for (let i = 0; i < nums.length / 2; i++) {
    arr.push(positiveArr[i]);
    arr.push(negativeArr[i]);
  }

  return arr;
};

module.exports = {
  rearrangeArray
}
