const f = require('./1528-shuffle-string');

test('should restore string function returns "leetcode"', () => {
  const s = 'codeleet';
  const indices = [4, 5, 6, 7, 0, 2, 1, 3];

  const res = f.restoreString(s, indices);

  expect(res).toBe('leetcode');
});

test('should restore string function returns "abc"', () => {
  const s = 'abc';
  const indices = [0, 1, 2];

  const res = f.restoreString(s, indices);

  expect(res).toBe('abc');
});

test('should restore string function returns "cba"', () => {
  const s = 'abc';
  const indices = [2, 1, 0];

  const res = f.restoreString(s, indices);

  expect(res).toBe('cba');
});

test('should restore string function returns "leetcode"', () => {
  const s = 'leetcode';
  const indices = [0, 1, 2, 3, 4, 5, 6, 7];

  const res = f.restoreString(s, indices);

  expect(res).toBe('leetcode');
});

test('should restore string function returns "uieao"', () => {
  const s = 'aioeu';
  const indices = [3, 1, 4, 2, 0];

  const res = f.restoreString(s, indices);

  expect(res).toBe('uieao');
});

test('should restore string function returns "aaaa"', () => {
  const s = 'aaaa';
  const indices = [2, 0, 3, 1];

  const res = f.restoreString(s, indices);

  expect(res).toBe('aaaa');
});

test('should restore string function returns "zxy"', () => {
  const s = 'xyz';
  const indices = [1, 2, 0];

  const res = f.restoreString(s, indices);

  expect(res).toBe('zxy');
});

test('should restore string function returns "bcdea"', () => {
  const s = 'abcde';
  const indices = [4, 0, 1, 2, 3];

  const res = f.restoreString(s, indices);

  expect(res).toBe('bcdea');
});

test('should restore string function returns "ohell"', () => {
  const s = 'hello';
  const indices = [1, 2, 3, 4, 0];

  const res = f.restoreString(s, indices);

  expect(res).toBe('ohell');
});

test('should restore string function returns "begikmoqsuwyACEGIKMOQSUWYcdZXVTRPNLJHFDBzxvtrpnljhfa"', () => {

  const s = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const indices = [51, 0, 25, 26, 1, 50, 2, 49, 3, 48, 4, 47, 5, 46, 6, 45, 7, 44, 8, 43, 9, 42, 10, 41, 11, 40, 12,
    39, 13, 38, 14, 37, 15, 36, 16, 35, 17, 34, 18, 33, 19, 32, 20, 31, 21, 30, 22, 29, 23, 28, 24, 27];

  const res = f.restoreString(s, indices);

  expect(res).toBe('begikmoqsuwyACEGIKMOQSUWYcdZXVTRPNLJHFDBzxvtrpnljhfa');
});