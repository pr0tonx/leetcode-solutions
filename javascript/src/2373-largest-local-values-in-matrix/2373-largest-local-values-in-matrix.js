/*
https://leetcode.com/problems/largest-local-values-in-a-matrix/description/
 */

/*
Description:

You are given an n x n integer matrix grid.
Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:
maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.
In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.
Return the generated matrix.
 */

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

/*
Space complexity: O(n²)
Time complexity: O(n²)
 */

const largestLocal = function (grid) {
  const localValues = [];

  for (let i = 1; i < grid.length - 1; i++) {
    const row = [];

    for (let j = 1; j < grid.length - 1; j++) {
      let greatestValue = 0;

      for (let k = -1; k < 2; k++) {
        for (let l = -1; l < 2; l++) {
          greatestValue = Math.max(greatestValue, grid[i + k][j + l]);
        }
      }
      row.push(greatestValue);
    }
    localValues.push(row);
  }

  return localValues;
};

module.exports = {
  largestLocal
}