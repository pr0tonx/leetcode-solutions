/*
https://leetcode.com/problems/jewels-and-stones/description/
 */

/*
Description:

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you
have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also
jewels.
Letters are case-sensitive, so "a" is considered a different type of stone from "A".
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

/*
Space complexity: O(n)
Time complexity: O(n)
 */

const numJewelsInStones = function (jewels, stones) {
    const set = new Set(jewels);
    let count = 0;

    for (const stone of stones) {
        if (set.has(stone)) count++;
    }

    return count;
};

module.exports = {
    numJewelsInStones
}