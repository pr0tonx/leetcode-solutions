/*
https://leetcode.com/problems/find-indices-of-stable-mountains/description/
 */

/*
Description:

There are n mountains in a row, and each mountain has a height. You are given an integer array height where height[i]
represents the height of mountain i, and an integer threshold.
A mountain is called stable if the mountain just before it (if it exists) has a height strictly greater than threshold.
Note that mountain 0 is not stable.
Return an array containing the indices of all stable mountains in any order.

Constraints:

2 <= n == height.length <= 100
1 <= height[i] <= 100
1 <= threshold <= 100
 */

/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */

/*
Space complexity: O(n);
Time complexity: O(n);
 */

const stableMountains = function (height, threshold) {
  const stableIndices = [];

  for (let i = 1; i < height.length; i++) {
    if (height[i - 1] > threshold) stableIndices.push(i);
  }

  return stableIndices;
}

console.log(stableMountains([1, 2, 3, 4, 5], 2));
console.log(stableMountains([10, 1, 10, 1, 10], 3));
console.log(stableMountains([10, 1, 10, 1, 10], 10));


module.exports = {
  stableMountains
}