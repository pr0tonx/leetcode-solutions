/*
https://leetcode.com/problems/shuffle-string/description/
 */

/*
Description:

You are given a string s and an integer array indices of the same length. The string s will be shuffled such that the
character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.

Constraints:

s.length == indices.length == n
1 <= n <= 100
s consists of only lowercase English letters.
0 <= indices[i] < n
All values of indices are unique.
 */

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

/*
Space complexity: O(n);
Time complexity: O(n);
 */

const restoreString = function (s, indices) {
  const arr = new Array(s.length);

  for (let i = 0; i < s.length; i++) arr[indices[i]] = s[i];

  return arr.join('');
};

module.exports = {
  restoreString
}
