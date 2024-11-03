/*
https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/description/
 */

/*
Description:

You are given an integer array nums.
You replace each element in nums with the sum of its digits.
Return the minimum element in nums after all replacements.

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 104
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Space complexity: O(d)
Time complexity:O(nd)
 */

const minElement = function (nums) {
  let minimum = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const individualNumbers = nums[i].toString().split('');

    const sum = individualNumbers.reduce((curr, n) => Number(n) + curr, 0);

    if (sum < minimum) minimum = sum;
  }

  return minimum;
};

module.exports = {
  minElement
}
