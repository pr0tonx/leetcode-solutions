/*
https://leetcode.com/problems/count-items-matching-a-rule/description/
 */

/*
Description:

You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the
ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.
The ith item is said to match the rule if one of the following is true:
ruleKey == "type" and ruleValue == typei.
ruleKey == "color" and ruleValue == colori.
ruleKey == "name" and ruleValue == namei.
Return the number of items that match the given rule.

Constraints:

1 <= items.length <= 104
1 <= typei.length, colori.length, namei.length, ruleValue.length <= 10
ruleKey is equal to either "type", "color", or "name".
All strings consist only of lowercase letters.
 */

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */

/*
Space complexity: O(n);
Time complexity: O(n);
 */

const countMatches = function (items, ruleKey, ruleValue) {
  const ruleMap = {type: 0, color: 1, name: 2};
  const key = ruleMap[ruleKey];

  return items.reduce((matchesAcc, currItem) => matchesAcc + (currItem[key] === ruleValue ? 1 : 0), 0);
};

module.exports = {
  countMatches
}