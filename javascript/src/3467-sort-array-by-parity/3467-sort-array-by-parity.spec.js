const f = require('./3467-sort-array-by-parity');

test('should transform array function returns "[0, 0, 1, 1]"', () => {
  const nums = [4, 3, 2, 1];

  const res = f.transformArray(nums);

  expect(res).toEqual([0, 0, 1, 1]);
});

test('should transform array function returns "[0, 0, 1, 1, 1]"', () => {
  const nums = [1, 5, 1, 4, 2];

  const res = f.transformArray(nums);

  expect(res).toEqual([0, 0, 1, 1, 1]);
});

test('should transform array function returns "[0, 0, 0, 0]"', () => {
  const nums = [2, 4, 6, 8];

  const res = f.transformArray(nums);

  expect(res).toEqual([0, 0, 0, 0]);
});

test('should transform array function returns "[1, 1, 1, 1, 1]"', () => {
  const nums = [1, 3, 5, 7, 9];

  const res = f.transformArray(nums);

  expect(res).toEqual([1, 1, 1, 1, 1]);
});

test('should transform array function returns "[0, 0, 0, 1, 1, 1]"', () => {
  const nums = [1, 2, 3, 4, 5, 6];

  const res = f.transformArray(nums);

  expect(res).toEqual([0, 0, 0, 1, 1, 1]);
});

test('should transform array function returns "[0, 0, 0, 1, 1, 1]"', () => {
  const nums = [10, 9, 8, 7, 6, 5];

  const res = f.transformArray(nums);

  expect(res).toEqual([0, 0, 0, 1, 1, 1]);
});

test('should transform array function returns "[1, 1, 1]"', () => {
  const nums = [999, 999, 999];

  const res = f.transformArray(nums);

  expect(res).toEqual([1, 1, 1]);
});

test('should transform array function returns "[1]"', () => {
  const nums = [1];

  const res = f.transformArray(nums);

  expect(res).toEqual([1]);
});

test('should transform array function returns "[0]"', () => {
  const nums = [1000];

  const res = f.transformArray(nums);

  expect(res).toEqual([0]);
});

test('should transform array function returns an array containing 100 elements filled with 0', () => {
  const nums = Array(100).fill(2);
  const expectedArr = Array(100).fill(0);

  const res = f.transformArray(nums);

  expect(res).toEqual(expectedArr);
});

test('should transform array function returns  an array containing 100 elements with half 0 and half 1', () => {
  const nums = [...Array(100).keys()].map(i => i + 1);
  const expectedArr = [...Array(50).fill(0), ...Array(50).fill(1)];

  const res = f.transformArray(nums);

  expect(res).toEqual(expectedArr);
});


