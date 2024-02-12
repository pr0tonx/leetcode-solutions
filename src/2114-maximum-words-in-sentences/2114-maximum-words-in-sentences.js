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
Space complexity: O(1)
Time complexity: O(n)
 */

const mostWordsFound = function (sentences) {
    let mostWords = 0;
    for (const sentence of sentences) {
        const words = sentence.split(' ');
        mostWords = Math.max(mostWords, words.length);
    }

    return mostWords;
};

module.exports = {
    mostWordsFound
}