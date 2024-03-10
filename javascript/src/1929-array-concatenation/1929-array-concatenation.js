/*
https://leetcode.com/problems/concatenation-of-array/description
 */

/*
Description:

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and
ans[i + n] == nums[i] for 0 <= i < n (0-indexed). Specifically, ans is the concatenation of two nums arrays.
Return the array ans.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Space complexity: O(n)
Time complexity: O(n)
 */

const getConcatenation = function (nums) {
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i];
        ans[i + nums.length] = nums[i];
    }

    return ans;
};

module.exports = {
    getConcatenation
}