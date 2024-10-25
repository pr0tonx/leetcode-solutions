/*
https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/
 */

/*
Description:

Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where
0 <= i < j < n and nums[i] + nums[j] < target.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
Space complexity: O(1)
Time complexity: O(n²)
 */

const countPairs = function (nums, target) {
  let goodPairs = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] + nums[j]) < target) goodPairs++;
    }
  }

  return goodPairs;
};

module.exports = {
  countPairs
}