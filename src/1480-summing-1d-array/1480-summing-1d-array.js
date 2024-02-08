/*
https://leetcode.com/problems/running-sum-of-1d-array/description/
 */

/*
Description:

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Space complexity: O(n)
Time complexity: O(n)
 */

const runningSum = function (nums) {
    const arr = [];

    for (let i = 0, sum = 0; i < nums.length; i++) {
        sum += nums[i];
        arr.push(sum);
    }

    return arr;
};

module.exports = {
    runningSum
}