const f = require('./3190-find-minimun-operations-to-divide-all-by-three');

test('should minimun operations function returns "3"', () => {
  const nums = [1, 2, 3, 4];

  const res = f.minimumOperations(nums);

  expect(res).toBe(3);
});

test('should minimun operations function returns "0"', () => {
  const nums = [3, 6, 9];

  const res = f.minimumOperations(nums);

  expect(res).toBe(0);
});