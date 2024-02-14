/*
https://leetcode.com/problems/smallest-even-multiple/description/
 */

/*
Description:

Given a positive integer n, return the smallest positive integer that is a multiple of both 2 and n.
 */

/**
 * @param {number} n
 * @return {number}
 */

/*
Space complexity: O(1)
Time complexity: O(n)
 */

const smallestEvenMultiple = function (n) {
    for (let i = n; i <= (n * 2); i++) {
        if (i % 2 === 0 && i % n === 0) return i;
    }
};

module.exports = {
    smallestEvenMultiple
}
