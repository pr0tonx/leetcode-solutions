/*
https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/
 */

/*
Description:

Given an integer num, return the number of steps to reduce it to zero. In one step, if the current number is even, you
have to divide it by 2, otherwise, you have to subtract 1 from it.
 */

/**
 * @param {number} num
 * @return {number}
 */

/*
Space complexity: O(1)
Time complexity: O(logn)
 */

const numberOfSteps = function (num) {
    let steps = 0;

    while (num > 0) {
        num % 2 === 0 ? num /= 2 : num--;
        steps++;
    }

    return steps;
};

module.exports = {
    numberOfSteps
}