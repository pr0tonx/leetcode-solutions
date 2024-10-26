const f = require('./3289-two-sneaky-numbers-of-digitville');

test('should get sneaky numbers function returns "[1, 0]"', () => {
  const nums = [0, 1, 1, 0];

  const res = f.getSneakyNumbers(nums);

  expect(res.sort()).toEqual([0, 1]);
});

test('should get sneaky numbers function returns "[2, 3]"', () => {
  const nums = [0, 3, 2, 1, 3, 2];

  const res = f.getSneakyNumbers(nums);

  expect(res.sort()).toEqual([2, 3]);
});

test('should get sneaky numbers function returns "[4, 5]"', () => {
  const nums = [7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2];

  const res = f.getSneakyNumbers(nums);

  expect(res.sort()).toEqual([4, 5]);
});

test('should get sneaky numbers function returns "[1, 4]"', () => {
  const nums = [1, 1, 0, 2, 3, 4, 4];

  const res = f.getSneakyNumbers(nums);

  expect(res.sort()).toEqual([1, 4]);
});

test('should get sneaky numbers function returns "[3, 5]"', () => {
  const nums = [0, 1, 2, 3, 3, 4, 5, 5];

  const res = f.getSneakyNumbers(nums);

  expect(res.sort()).toEqual([3, 5]);
});

test('should get sneaky numbers function returns "[2, 2]"', () => {
  const nums = [0, 1, 2, 2, 3, 4, 2, 5];

  const res = f.getSneakyNumbers(nums);

  expect(res.sort()).toEqual([2, 2]);
});

test('should get sneaky numbers function returns "[3, 5]"', () => {
  const nums = [0, 3, 1, 3, 4, 2, 5, 5];

  const res = f.getSneakyNumbers(nums);

  expect(res.sort()).toEqual([3, 5]);
});

test('should get sneaky numbers function returns "[1]"', () => {
  const nums = [0, 1, 1, 2];

  const res = f.getSneakyNumbers(nums);

  expect(res.sort()).toEqual([1]);
});

test('should get sneaky numbers function returns "[2, 3]"', () => {
  const nums = [5, 4, 3, 2, 1, 0, 2, 3];

  const res = f.getSneakyNumbers(nums);

  expect(res.sort()).toEqual([2, 3]);
});

test('should get sneaky numbers function returns "[0, 4]"', () => {
  const nums = [4, 0, 1, 2, 3, 4, 5, 0];

  const res = f.getSneakyNumbers(nums);

  expect(res.sort()).toEqual([0, 4]);
});