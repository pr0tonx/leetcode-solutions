/*
https://leetcode.com/problems/remove-outermost-parentheses/description/
 */

/*
Description:

A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings,
and + represents string concatenation.
For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B,
with A and B nonempty valid parentheses strings.
Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive
valid parentheses strings.
Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

Constraints:

1 <= s.length <= 105
s[i] is either '(' or ')'.
s is a valid parentheses string.
 */

/**
 * @param {string} s
 * @return {string}
 */

/*
Space complexity: O(n);
Time complexity: O(n);
 */

const removeOuterParentheses = function (s) {
  const arr = [];
  let open = 0, close = 0, lastOpenRemoved = 0, lastCloseRemoved;
  let res = '';

  for (let i = 0; i < s.length; i++) {
    s[i] === '(' ? open++ : close++;

    if (open === close) {
      !lastCloseRemoved ? arr.push(s.slice(0, i + 1)) : arr.push(s.slice(lastCloseRemoved + 1, i + 1));

      lastOpenRemoved = open - 1;
      lastCloseRemoved = i;
    }
  }

  arr.forEach(el => res += el.slice(1, el.length - 1));

  return res;
};

module.exports = {
  removeOuterParentheses
}
