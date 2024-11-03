/*
https://leetcode.com/problems/faulty-keyboard/description/
 */

/*
Description:

Your laptop keyboard is faulty, and whenever you type a character 'i' on it, it reverses the string that you have
written. Typing other characters works as expected.
You are given a 0-indexed string s, and you type each character of s using your faulty keyboard.
Return the final string that will be present on your laptop screen.

Constraints:

1 <= s.length <= 100
s consists of lowercase English letters.
s[0] != 'i'
 */

/*
Space complexity: O(n);
Time complexity: O(n²);
 */


/**
 * @param {string} s
 * @return {string}
 */

const finalString = function (s) {
  const arr = [];

  for (let i = 0; i < s.length; i++) s[i] === 'i' ? arr.reverse() : arr.push(s[i]);

  return arr.join('');
};

module.exports = {
  finalString
}
