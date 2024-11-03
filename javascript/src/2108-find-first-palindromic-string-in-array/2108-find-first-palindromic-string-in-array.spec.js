const f = require('./2108-find-first-palindromic-string-in-array');

test('should first palindrome function returns "ada"', () => {
  const words = ['abc', 'car', 'ada', 'racecar', 'cool'];

  const res = f.firstPalindrome(words);

  expect(res).toBe('ada');
});

test('should first palindrome function returns "racecar"', () => {
  const words = ['notapalindrome', 'racecar'];

  const res = f.firstPalindrome(words);

  expect(res).toBe('racecar');
});

test('should first palindrome function returns ""', () => {
  const words = ['def', 'ghi'];

  const res = f.firstPalindrome(words);

  expect(res).toBe('');
});

test('should first palindrome function returns "noon"', () => {
  const words = ['noon', 'racecar', 'deified'];

  const res = f.firstPalindrome(words);

  expect(res).toBe('noon');
});

test('should first palindrome function returns "ghihg"', () => {
  const words = ['abc', 'def', 'ghihg'];

  const res = f.firstPalindrome(words);

  expect(res).toBe('ghihg');
});

test('should first palindrome function returns "a"', () => {
  const words = ['a', 'b', 'c', 'd'];

  const res = f.firstPalindrome(words);

  expect(res).toBe('a');
});

test('should first palindrome function returns "madam"', () => {
  const words = ['not', 'palindrome', 'madam', 'test'];

  const res = f.firstPalindrome(words);

  expect(res).toBe('madam');
});

test('should first palindrome function returns a bunch of a\'s', () => {
  const words = [];

  let string = '';
  for (let i = 0; i < 100; i++) string += 'a';

  words.push(string);

  const res = f.firstPalindrome(words);

  expect(res).toBe(string);
});
