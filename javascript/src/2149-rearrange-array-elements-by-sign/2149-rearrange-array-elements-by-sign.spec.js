const f = require('./2149-rearrange-array-elements-by-sign');

test('should rearrange array function returns "[3, -2, 1, -5, 2, -4]"', () => {
  const nums = [3, 1, -2, -5, 2, -4];

  const res = f.rearrangeArray(nums);

  expect(res).toEqual([3, -2, 1, -5, 2, -4]);
});

test('should rearrange array function returns "[1, -1]"', () => {
  const nums = [-1, 1];

  const res = f.rearrangeArray(nums);

  expect(res).toEqual([1, -1]);
});

test('should rearrange array function returns "[1, -1]"', () => {
  const nums = [-1, 1];

  const res = f.rearrangeArray(nums);

  expect(res).toEqual([1, -1]);
});

test('should rearrange array function returns "[1, -1, 2, -2, 3, -3]"', () => {
  const nums = [1, -1, 2, -2, 3, -3];

  const res = f.rearrangeArray(nums);

  expect(res).toEqual([1, -1, 2, -2, 3, -3]);
});

test('should rearrange array function returns "[1, -1, 2, -2]"', () => {
  const nums = [1, 2, -1, -2];

  const res = f.rearrangeArray(nums);

  expect(res).toEqual([1, -1, 2, -2]);
});

test('should rearrange array function returns "[1, -1, 2, -2]"', () => {
  const nums = [-1, -2, 1, 2];

  const res = f.rearrangeArray(nums);

  expect(res).toEqual([1, -1, 2, -2]);
});

test('should rearrange array function returns "[3, -1, 1, -3, 2, -2]"', () => {
  const nums = [3, 1, -1, -3, 2, -2];

  const res = f.rearrangeArray(nums);

  expect(res).toEqual([3, -1, 1, -3, 2, -2]);
});

test('should rearrange array function returns "[5, -6, 7, -8, 9, -10]"', () => {
  const nums = [5, -6, 7, -8, 9, -10];

  const res = f.rearrangeArray(nums);

  expect(res).toEqual([5, -6, 7, -8, 9, -10]);
});

test('should rearrange array function returns "[4, -1, 2, -3]"', () => {
  const nums = [4, -1, -3, 2];

  const res = f.rearrangeArray(nums);

  expect(res).toEqual([4, -1, 2, -3]);
});

test('should rearrange array function returns "[4, -1, 2, -3]"', () => {
  const nums = [4, -1, -3, 2];

  const res = f.rearrangeArray(nums);

  expect(res).toEqual([4, -1, 2, -3]);
});
