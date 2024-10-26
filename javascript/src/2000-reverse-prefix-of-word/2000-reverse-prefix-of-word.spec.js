const f = require('./2000-reverse-prefix-of-word');

test('should reverse prefix function returns "dcbaefd"', () => {
  const word = 'abcdefd';
  const ch = 'd';

  const res = f.reversePrefix(word, ch);

  expect(res).toBe('dcbaefd');
});

test('should reverse prefix function returns "zxyxxe"', () => {
  const word = 'xyxzxe';
  const ch = 'z';

  const res = f.reversePrefix(word, ch);

  expect(res).toBe('zxyxxe');
});

test('should reverse prefix function returns "abcd"', () => {
  const word = 'abcd';
  const ch = 'z';

  const res = f.reversePrefix(word, ch);

  expect(res).toBe('abcd');
});

test('should reverse prefix function returns "abcdef"', () => {
  const word = 'abcdef';
  const ch = 'a';

  const res = f.reversePrefix(word, ch);

  expect(res).toBe('abcdef');
});

test('should reverse prefix function returns "aaaaa"', () => {
  const word = 'aaaaa';
  const ch = 'a';

  const res = f.reversePrefix(word, ch);

  expect(res).toBe('aaaaa');
});

test('should reverse prefix function returns "a"', () => {
  const word = 'a';
  const ch = 'a';

  const res = f.reversePrefix(word, ch);

  expect(res).toBe('a');
});

test('should reverse prefix function returns "edcba"', () => {
  const word = 'abcde';
  const ch = 'e';

  const res = f.reversePrefix(word, ch);

  expect(res).toBe('edcba');
});

test('should reverse prefix function returns "cbacba"', () => {
  const word = 'abccba';
  const ch = 'c';

  const res = f.reversePrefix(word, ch);

  expect(res).toBe('cbacba');
});

test('should reverse prefix function returns a really long string', () => {
  const word = 'a'.repeat(125) + 'b' + 'a'.repeat(124)
  const ch = 'b';

  const res = f.reversePrefix(word, ch);

  expect(res).toBe('b' + 'a'.repeat(125).split('').reverse().join('') + 'a'.repeat(124));
});

test('should reverse prefix function returns "fedcbag"', () => {
  const word = 'abcdefg'
  const ch = 'f';

  const res = f.reversePrefix(word, ch);

  expect(res).toBe('fedcbag');
});