/*
https://leetcode.com/problems/left-and-right-sum-differences/description/
 */

/*
Description:

Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

answer.length == nums.length.
answer[i] = |leftSum[i] - rightSum[i]|.

Where: leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element,
leftSum[i] = 0. rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such
element, rightSum[i] = 0.
Return the array answer.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Space complexity: O(n)
Time complexity: O(n)
 */

const leftRightDifference = function (nums) {
    const rightSum = new Array(nums.length).fill(0);
    const leftSum = new Array(nums.length).fill(0);
    const sum = [];

    for (let i = 0, temp = 0; i < nums.length; i++) {
        rightSum[i] = temp;
        temp += nums[i];
    }

    for (let i = rightSum.length - 1, temp = 0; i >= 0; i--) {
        leftSum[i] = temp;
        temp += nums[i]
    }

    for (let i = 0; i < nums.length; i++) {
        sum.push(Math.abs(rightSum[i] - leftSum[i]));
    }

    return sum;
};

module.exports = {
    leftRightDifference
}