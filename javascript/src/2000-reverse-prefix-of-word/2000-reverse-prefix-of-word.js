/*
https://leetcode.com/problems/reverse-prefix-of-word/description/
 */

/*
Description:

Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the
index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.
For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3
(inclusive). The resulting string will be "dcbaefd".
Return the resulting string.

Constraints:

1 <= word.length <= 250
word consists of lowercase English letters.
ch is a lowercase English letter.
 */

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */

/*
Space complexity: O(n);
Time complexity: O(n);
 */

const reversePrefix = function (word, ch) {
  const index = word.indexOf(ch);

  if (index === -1) return word;

  const splittedWord = word.split('');
  const remainingCharacters = splittedWord.splice(index + 1);

  return splittedWord.reverse().concat(remainingCharacters).join('');
};

console.log(reversePrefix('abcdefd', 'd'));
console.log(reversePrefix('xyxzxe', 'z'));
console.log(reversePrefix('abcd', 'z'));

module.exports = {
  reversePrefix
}