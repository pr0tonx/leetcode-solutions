const f = require('./88-merge-sorted-arrays');

test('should merge function returns "[1,2,2,3,5,6]"', () => {
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;

  const res = f.merge(nums1, m, nums2, n);

  expect(res).toBe(undefined);
});

test('should merge function returns "[1]"', () => {
  const nums1 = [1];
  const m = 1;
  const nums2 = [];
  const n = 0;

  const res = f.merge(nums1, m, nums2, n);

  expect(res).toEqual(undefined);
});

test('should merge function returns "[1]"', () => {
  const nums1 = [0];
  const m = 0;
  const nums2 = [1];
  const n = 1;

  const res = f.merge(nums1, m, nums2, n);

  expect(res).toEqual(undefined);
});