/*
https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/
 */

/*
Description:
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each
nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
Return the answer in an array.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Space complexity: O(n)
Time complexity: O(n²)
 */

const smallerNumbersThanCurrent = function (nums) {
    const smallerArr = [];

    nums.forEach((x) => {
        let temp = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < x) temp++
        }

        smallerArr.push(temp);
    });

    return smallerArr;
};

module.exports = {
    smallerNumbersThanCurrent
}