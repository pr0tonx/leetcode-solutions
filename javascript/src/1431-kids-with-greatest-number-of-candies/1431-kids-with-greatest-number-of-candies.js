/*
https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/
 */

/*
Description:

There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of
candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.
Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies,
they will have the greatest number of candies among all the kids, or false otherwise.
Note that multiple kids can have the greatest number of candies.
 */

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

/*
Space complexity: O(n)
Time complexity: O(n)
 */

const kidsWithCandies = function (candies, extraCandies) {
  const arr = [];
  let highestAmount = 0;

  for (let i = 0; i < candies.length; i++) {
    if (highestAmount < candies[i]) highestAmount = candies[i];
  }

  for (let j = 0; j < candies.length; j++) {
    const res = highestAmount <= (candies[j] + extraCandies);
    arr.push(res);
  }

  return arr;
};

module.exports = {
  kidsWithCandies
}