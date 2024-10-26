const f = require('./3146-permutation-difference-between-two-strings');

// findPermutationDifference

test('should find permutation difference function returns "2"', () => {
  const s = 'abc';
  const t = 'bac';

  const res = f.findPermutationDifference(s, t);

  expect(res).toBe(2);
});

test('should find permutation difference function returns "12"', () => {
  const s = 'abcde';
  const t = 'edbac';

  const res = f.findPermutationDifference(s, t);

  expect(res).toBe(12);
});

test('should find permutation difference function returns "4"', () => {
  const s = 'abc';
  const t = 'cba'

  const res = f.findPermutationDifference(s, t);

  expect(res).toBe(4);
});

test('should find permutation difference function returns "0"', () => {
  const s = 'a';
  const t = 'a;'

  const res = f.findPermutationDifference(s, t);

  expect(res).toBe(0);
});

test('should find permutation difference function returns "8"', () => {
  const s = 'abcd';
  const t = 'dcba';

  const res = f.findPermutationDifference(s, t);

  expect(res).toBe(8);
});

test('should find permutation difference function returns "0"', () => {
  const s = 'abcd';
  const t = 'abcd';

  const res = f.findPermutationDifference(s, t);

  expect(res).toBe(0);
});

test('should find permutation difference function returns "4"', () => {
  const s = 'abcd';
  const t = 'badc';

  const res = f.findPermutationDifference(s, t);

  expect(res).toBe(4);
});

test('should find permutation difference function returns "10"', () => {
  const s = 'abcdef';
  const t = 'fabcde';

  const res = f.findPermutationDifference(s, t);

  expect(res).toBe(10);
});

test('should find permutation difference function returns "4"', () => {
  const s = 'abcdefg';
  const t = 'abcfedg';

  const res = f.findPermutationDifference(s, t);

  expect(res).toBe(4);
});

test('should find permutation difference function returns "12"', () => {
  const s = 'abcdefg';
  const t = 'gabcdef';

  const res = f.findPermutationDifference(s, t);

  expect(res).toBe(12);
});