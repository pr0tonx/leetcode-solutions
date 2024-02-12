/*
https://leetcode.com/problems/convert-the-temperature/description/
 */

/*
Description:

You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature
in Celsius. You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].
Return the array ans. Answers within 10-5 of the actual answer will be accepted.
 */

/**
 * @param {number} celsius
 * @return {number[]}
 */

/*
Space complexity: O(1)
Time complexity: O(1)
 */

const convertTemperature = function (celsius) {
    return [Number((celsius + 273.15).toFixed(5)), Number(((celsius * 1.80) + 32.00).toFixed(5))];
};

module.exports = {
    convertTemperature
}