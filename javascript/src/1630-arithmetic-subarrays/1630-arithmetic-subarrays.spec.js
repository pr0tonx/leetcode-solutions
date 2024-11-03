const f = require('./1630-arithmetic-subarrays');

test('should check arithmetic subarrays function returns "[true, false, true]"', () => {
  const nums = [4, 6, 5, 9, 3, 7];
  const l = [0, 0, 2];
  const r = [2, 3, 5];

  const res = f.checkArithmeticSubarrays(nums, l, r);

  expect(res).toEqual([true, false, true]);
});

test('should check arithmetic subarrays function returns "[false, true, false, false, true, true]"', () => {
  const nums = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10];
  const l = [0, 1, 6, 4, 8, 7];
  const r = [4, 4, 9, 7, 9, 10];

  const res = f.checkArithmeticSubarrays(nums, l, r);

  expect(res).toEqual([false, true, false, false, true, true]);
});

test('should check arithmetic subarrays function returns "[false, true, false, false, true, true]"', () => {
  const nums = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10];
  const l = [0, 1, 6, 4, 8, 7];
  const r = [4, 4, 9, 7, 9, 10];

  const res = f.checkArithmeticSubarrays(nums, l, r);

  expect(res).toEqual([false, true, false, false, true, true]);
});

test('should check arithmetic subarrays function returns "[true, true, true]"', () => {
  const nums = [1, 3, 5, 7, 9];
  const l = [0, 1, 2];
  const r = [4, 3, 4];

  const res = f.checkArithmeticSubarrays(nums, l, r);

  expect(res).toEqual([true, true, true]);
});

test('should check arithmetic subarrays function returns "[false, false, false]"', () => {
  const nums = [1, 1, 2, 5, 7];
  const l = [0, 0, 2];
  const r = [4, 2, 4];

  const res = f.checkArithmeticSubarrays(nums, l, r);

  expect(res).toEqual([false, false, false]);
});

test('should check arithmetic subarrays function returns "[true, true, true]"', () => {
  const nums = [7, 7, 7, 7];
  const l = [0, 1, 2];
  const r = [3, 2, 3];

  const res = f.checkArithmeticSubarrays(nums, l, r);

  expect(res).toEqual([true, true, true]);
});

test('should check arithmetic subarrays function returns "[true, true, true]"', () => {
  const nums = [3, -1, -5, -9];
  const l = [0, 1, 0];
  const r = [3, 3, 2];

  const res = f.checkArithmeticSubarrays(nums, l, r);

  expect(res).toEqual([true, true, true]);
});

test('should check arithmetic subarrays function returns "[true, false, false]"', () => {
  const nums = [1, 2, 3, 4, 6, 8];
  const l = [0, 2, 1];
  const r = [2, 4, 5];

  const res = f.checkArithmeticSubarrays(nums, l, r);

  expect(res).toEqual([true, false, false]);
});

test('should check arithmetic subarrays function returns "[true]"', () => {
  const nums = [10, 20, 30, 40];
  const l = [0];
  const r = [3];

  const res = f.checkArithmeticSubarrays(nums, l, r);

  expect(res).toEqual([true]);
});

test('should check arithmetic subarrays function returns "[true, false, true, false]"', () => {
  const nums = [1, 5, 9, 15, 19, 23];
  const l = [0, 1, 3, 2];
  const r = [2, 4, 5, 4];

  const res = f.checkArithmeticSubarrays(nums, l, r);

  expect(res).toEqual([true, false, true, false]);
});

test('should check arithmetic subarrays function returns "[true, true, true]"', () => {
  const nums = [4, 4, 4, 4, 4];
  const l = [0, 1, 2];
  const r = [4, 3, 4];

  const res = f.checkArithmeticSubarrays(nums, l, r);

  expect(res).toEqual([true, true, true]);
});

test('should check arithmetic subarrays function returns "[true, true, false]"', () => {
  const nums = [5, 3, 1, 2, 4];
  const l = [0, 1, 2];
  const r = [2, 3, 4];

  const res = f.checkArithmeticSubarrays(nums, l, r);

  expect(res).toEqual([true, true, false]);
});

test('should check arithmetic subarrays function returns "[true, true, true]"', () => {
  const nums = [-3, -1, 1, 3];
  const l = [0, 1, 2];
  const r = [3, 3, 3];

  const res = f.checkArithmeticSubarrays(nums, l, r);

  expect(res).toEqual([true, true, true]);
});
