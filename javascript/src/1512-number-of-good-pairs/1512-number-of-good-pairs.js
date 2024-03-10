/*
https://leetcode.com/problems/number-of-good-pairs/description/
 */

/*
Description:

Given an array of integers nums, return the number of good pairs. A pair (i, j) is called good if nums[i] == nums[j]
and i < j.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Space complexity: O(1)
Time complexity: O(n)
 */

const numIdenticalPairs = function (nums) {
    const numCounts = new Map();
    let goodPairs = 0;

    for (const num of nums) {
        if (numCounts[num]) {
            goodPairs += numCounts[num];
            numCounts[num]++;
        } else {
            numCounts[num] = 1;
        }
    }

    return goodPairs;
};

module.exports = {
    numIdenticalPairs
}