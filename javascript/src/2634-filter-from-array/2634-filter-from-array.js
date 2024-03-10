/*
https://leetcode.com/problems/filter-elements-from-array/description/
 */

/*
Description:

Given an integer array arr and a filtering function fn, return a filtered array filteredArr. The fn function takes
one or two arguments:arr[i] - number from the arr i - index of arr[i] filteredArr should only contain the elements from
the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where
Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
 */

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

/*
Space complexity: O(n)
Time complexity: O(n)
 */

const filter = function (arr, fn) {
    const filteredArr = [];

    for (let i = 0; i < arr.length; i++) {
        const val = fn(arr[i], i);

        if (val) filteredArr.push(arr[i]);
    }

    return filteredArr;
};

module.exports = {
    filter
}