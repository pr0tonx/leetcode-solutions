/*
https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/description/
 */

/*
Description:

You are given positive integers n and m.
Define two integers, num1 and num2, as follows:
num1: The sum of all integers in the range [1, n] that are not divisible by m.
num2: The sum of all integers in the range [1, n] that are divisible by m.
Return the integer num1 - num2.
 */

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */

/*
Space complexity: O(1)
Time complexity: O(n)
 */

const differenceOfSums = function(n, m) {
    let divSum = 0;
    let nonDivSum = 0;

    for (let i = n; i > 0; i--) {
        if (i % m === 0) divSum += i;
        else nonDivSum += i;
    }

    return nonDivSum - divSum;
};

module.exports = {
    differenceOfSums
}