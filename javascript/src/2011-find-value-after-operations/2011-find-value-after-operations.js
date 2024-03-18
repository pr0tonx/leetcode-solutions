/*
https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/
 */

/*
Description:

There is a programming language with only four operations and one variable X:
++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0. Given an array of strings operations containing a list of operations, return the final
value of X after performing all the operations.
 */

/**
 * @param {string[]} operations
 * @return {number}
 */

/*
Space complexity: O(1)
Time complexity: O(n)
 */

const finalValueAfterOperations = function (operations) {
    let X = 0;

    for (const op of operations) {
        if (op === '++X' || op === 'X++') X++;
        else if (op === '--X' || op === 'X--') X--;
    }

    return X;
};

module.exports = {
    finalValueAfterOperations
}