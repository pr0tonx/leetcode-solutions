/*
https://leetcode.com/problems/return-length-of-arguments-passed/description/
 */

/*
Description:

Write a function argumentsLength that returns the count of arguments passed to it.
 */

/**
 * @param {...(null | boolean | number | string | Array | Object)} args
 * @return {number}
 */

/*
Time complexity: O(1)
Space complexity O(1)
 */
const argumentsLength = function (...args) {
    return args.length;
};

module.exports = {
    argumentsLength
}