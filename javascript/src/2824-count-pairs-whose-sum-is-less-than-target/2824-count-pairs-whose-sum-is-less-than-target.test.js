const f = require('./2824-count-pairs-whose-sum-is-less-than-target');

test('should count pairs function returns "3"', () => {
  const nums = [-1, 1, 2, 3, 1];
  const target = 2;

  const res = f.countPairs(nums, target);

  expect(res).toBe(3);
});

test('should count pairs function returns "10"', () => {
  const nums = [-6, 2, 5, -2, -7, -1, 3];
  const target = -2;

  const res = f.countPairs(nums, target);

  expect(res).toBe(10);
});