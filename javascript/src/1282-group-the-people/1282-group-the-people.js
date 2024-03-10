/*
https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/description/
 */

/*
Description:

There are n people that are split into some unknown number of groups. Each person is labeled with a unique ID from 0 to
n - 1. You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in.
For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.
Return a list of groups such that each person i is in a group of size groupSizes[i].
Each person should appear in exactly one group, and every person must be in a group. If there are multiple answers,
return any of them. It is guaranteed that there will be at least one valid solution for the given input.
 */

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

/*
Space complexity: O(n)
Time complexity: O(n)
 */

const groupThePeople = function (groupSizes) {
    const arr = [];
    const mappedArr = new Map();

    groupSizes.map((val, i = 0) => {
        const temp = mappedArr.get(val);

        if (!temp) {
            mappedArr.set(val, [i]);
        } else {
            temp.push(i);
            mappedArr.set(val, temp);
        }
    });

    const iterator = mappedArr.entries();

    for (let i = 0; i < mappedArr.size; i++) {
        const v = iterator.next().value;

        let j = 0;
        while (j < v[1].length) arr.push(v[1].slice(j, j += v[0]));
    }

    return arr;
};

console.log('RES: ', groupThePeople([3, 3, 3, 3, 3, 1, 3]));
console.log('RES: ', groupThePeople([2, 1, 3, 3, 3, 2]));

module.exports = {
    groupThePeople
}