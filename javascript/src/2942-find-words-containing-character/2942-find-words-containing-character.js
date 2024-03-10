/*
https://leetcode.com/problems/find-words-containing-character/description/
 */

/*
Description:

You are given a 0-indexed array of strings words and a character x. Return an array of indices representing the words
that contain the character x.
Note that the returned array may be in any order.
 */

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */

/*
Space complexity: O(n)
Time complexity: O(n^2)
 */

const findWordsContaining = function (words, x) {
    const arr = [];

    words.map((word, i) => {
        if (word.includes(x)) arr.push(i);
    });

    return arr;
};

module.exports = {
    findWordsContaining
}