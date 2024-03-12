/*
https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/description/
 */

/*
Description:

You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:

The 2D array should contain only the elements of the array nums.
Each row in the 2D array contains distinct integers.
The number of rows in the 2D array should be minimal.
Return the resulting array. If there are multiple answers, return any of them.
Note that the 2D array can have a different number of elements on each row.
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
Space complexity: O(n)
Time complexity: O(n^2)
 */

const findMatrix = function (nums) {
    const numsSliced = nums.slice();
    const arr = [];

    for (let i = 0, j = 0, temp; i < nums.length; i++) {
        if (arr.length === 0) {
            temp = numsSliced.shift();
            arr.push([temp]);
        } else if (!arr[i]) {
            temp = numsSliced.shift();
            arr.push([temp]);
        }

        while (j < numsSliced.length) {
            const res = arr[i].filter(x => x === numsSliced[j]);

            if (!res.length) {
                temp = numsSliced.splice(j, 1);
                arr[i].push(temp[0]);
                j = 0;
            } else {
                j++
            }
        }

        if (!numsSliced.length) break;
        else j = 0;
    }

    return arr;
}

module.exports = {
    findMatrix
}