/*
https://leetcode.com/problems/to-lower-case/description/
 */

/*
Description:

Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

Constraints:

1 <= s.length <= 100
s consists of printable ASCII characters.
 */

/**
 * @param {string} s
 * @return {string}
 */

/*
Space complexity: O(1);
Time complexity: O(n);
 */

const toLowerCase = function (s) {
  return s.toLowerCase();
};

module.exports = {
  toLowerCase
}
