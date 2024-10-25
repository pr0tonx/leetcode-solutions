/*
https://leetcode.com/problems/score-of-a-string/description/
 */

/*
Description:

You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII
values of adjacent characters. Return the score of s.
 */

/**
 * @param {string} s
 * @return {number}
 */

/*
Space complexity: O(1)
Time complexity: O(n)
 */

const scoreOfString = function(s) {
  let sum = 0;
  for (let i = 0; i < s.length - 1; i++) {
    sum += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }

  return sum;
};

module.exports = {
  scoreOfString
}