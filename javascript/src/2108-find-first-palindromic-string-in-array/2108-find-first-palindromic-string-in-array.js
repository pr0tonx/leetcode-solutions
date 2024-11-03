/*
https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/
 */

/*
Description:

Given an array of strings words, return the first palindromic string in the array. If there is no such string, return
an empty string "".
A string is palindromic if it reads the same forward and backward.

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists only of lowercase English letters.
 */

/**
 * @param {string[]} words
 * @return {string}
 */

/*
Space complexity: O(n);
Time complexity: O(n * m);
 */

const firstPalindrome = function (words) {
  for (const word of words) {
    if (word === word.split('').reverse().join('')) return word;
  }

  return '';
};

module.exports = {
  firstPalindrome
}
