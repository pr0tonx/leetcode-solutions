/*
https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/description/
 */

/*
Description:

Given an array of strings words and a string s, determine if s is an acronym of words.
The string s is considered an acronym of words if it can be formed by concatenating the first character of each string
in words in order. For example, "ab" can be formed from ["apple", "banana"], but it can't be formed from ["bear", "aardvark"].
Return true if s is an acronym of words, and false otherwise.

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 10
1 <= s.length <= 100
words[i] and s consist of lowercase English letters.
 */

/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */

/*
Space complexity: O(1);
Time complexity: O(n);
 */

const isAcronym = function (words, s) {
  let acronym = '';

  for (let i = 0; i < words.length; i++) acronym += words[i][0];

  return acronym === s;
};

module.exports = {
  isAcronym
}