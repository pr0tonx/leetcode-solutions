/*
https://leetcode.com/problems/matrix-diagonal-sum/description/
 */

/*
Description:

Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that
are not part of the primary diagonal.
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */

/*
Space complexity: O(1)
Time complexity: O(n)
 */

const diagonalSum = function (mat) {
    let sum = 0;
    for (let i = 0, j = mat.length - 1; i < mat.length; i++, j--) {
        i !== j ? sum += mat[i][i] + mat[i][j] : sum += mat[i][i];
    }

    return sum;
};

module.exports = {
    diagonalSum
}