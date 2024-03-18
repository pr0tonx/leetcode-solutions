/*
https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/description/
 */

/*
Description:

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
A string is represented by an array if the array elements concatenated in order forms the string.
 */

/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */

/*
Space complexity: O(1)
Time complexity: O(n)
 */

const arrayStringsAreEqual = function (word1, word2) {
    return word1.join('') === word2.join('');
};

module.exports = {
    arrayStringsAreEqual
}
