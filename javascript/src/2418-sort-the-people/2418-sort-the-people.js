/*
https://leetcode.com/problems/sort-the-people/description/
 */

/*
Description:

You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays
are of length n.
For each index i, names[i] and heights[i] denote the name and height of the ith person.
Return names sorted in descending order by the people's heights.

Constraints:

n == names.length == heights.length
1 <= n <= 103
1 <= names[i].length <= 20
1 <= heights[i] <= 105
names[i] consists of lower and upper case English letters.
All the values of heights are distinct.
 */

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

/*
Space complexity: O(n);
Time complexity: O(nlogn);
 */

const sortPeople = function (names, heights) {
  const people = heights.map((heights, index) => [heights, names[index]]);

  people.sort((a, b) => b[0] - a[0]);

  return people.map(person => person[1]);
};

module.exports = {
  sortPeople
}