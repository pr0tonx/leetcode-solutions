/*
https://leetcode.com/problems/reverse-degree-of-a-string/description/
 */

/*
Description:

Given a string s, calculate its reverse degree.
The reverse degree is calculated as follows:
For each character, multiply its position in the reversed alphabet ('a' = 26, 'b' = 25, ..., 'z' = 1) with its position
in the string (1-indexed).
Sum these products for all characters in the string.
Return the reverse degree of s.

Constraints:

1 <= s.length <= 1000
s contains only lowercase English letters.
 */

/**
 * @param {string} s
 * @return {number}
 */

/*
Space complexity: O(1);
Time complexity: O(n);
 */

const reverseDegree = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const reverseValue = 26 - (s.charCodeAt(i) - 97);

    sum += reverseValue * (i + 1);
  }

  return sum;
};

module.exports = {
  reverseDegree
}