/*
https://leetcode.com/problems/product-of-array-except-self/description/
 */

/*
Description:

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of
nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Space complexity: O(n);
Time complexity: O(n);
 */

const productExceptSelf = function (nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);

    let product = 1;
    for (let i = 0; i < n; i++) {
        result[i] *= product;
        product *= nums[i];
    }

    product = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= product;
        product *= nums[i];
    }

    return result;
};

module.exports = {
    productExceptSelf
}
