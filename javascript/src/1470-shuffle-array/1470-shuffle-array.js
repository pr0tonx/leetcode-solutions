/*
https://leetcode.com/problems/shuffle-the-array/description/
 */

/*
Description:

Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
Return the array in the form [x1,y1,x2,y2,...,xn,yn].
 */

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

/*
Space complexity: O(n)
Time complexity: O(n)
 */

const shuffle = function (nums, n) {
    const arr = [];

    for (let i = 0; i < n; i++) arr.push(nums[i], nums[i + n]);

    return arr;
};

module.exports = {
    shuffle
}