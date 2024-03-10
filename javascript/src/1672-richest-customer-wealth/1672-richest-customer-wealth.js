/*
https://leetcode.com/problems/richest-customer-wealth/description/
 */

/*
Description:

You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i^th customer has in the
j^th bank. Return the wealth that the richest customer has.
A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer
that has the maximum wealth.
 */

/**
 * @param {number[][]} accounts
 * @return {number}
 */

/*
Space complexity: O(1)
Time complexity: O(n^2)
 */

const maximumWealth = function (accounts) {
    let richest = 0;

    accounts.map((account) => {
        const value = account.reduce((acc, curr) => acc + curr);
        if (value >= richest) richest = value;
    });

    return richest;
};

module.exports = {
    maximumWealth
}