/*
https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/description/
 */

/*
Description:

You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums. Return the
minimum number of operations to make all elements of nums divisible by 3.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Space complexity: O(1)
Time complexity: O(n)
 */

const minimumOperations = function (nums) {
  let ops = 0;

  for (const x of nums) {
    if (x % 3 !== 0) ops++;
  }

  return ops;
};

module.exports = {
  minimumOperations
}