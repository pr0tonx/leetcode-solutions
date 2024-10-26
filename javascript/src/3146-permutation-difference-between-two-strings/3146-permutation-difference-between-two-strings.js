/*
https://leetcode.com/problems/permutation-difference-between-two-strings/description/
 */

/*
Description:

You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.
The permutation difference between s and t is defined as the sum of the absolute difference between the index of the
occurrence of each character in s and the index of the occurrence of the same character in t.
Return the permutation difference between s and t.

Constraints:

1 <= s.length <= 26
Each character occurs at most once in s.
t is a permutation of s.
s consists only of lowercase English letters.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

/*
Space complexity: O(1);
Time complexity: O(n);
 */

const findPermutationDifference = function (s, t) {
  let sum = 0;
  const indexMap = {};

  for (let i = 0; i < t.length; i++) indexMap[t[i]] = i;

  for (let i = 0; i < s.length; i++) sum += Math.abs(i - indexMap[s[i]]);

  return sum;
};

module.exports = {
  findPermutationDifference
}