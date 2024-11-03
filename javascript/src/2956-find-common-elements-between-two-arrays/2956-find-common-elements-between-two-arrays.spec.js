const f = require('./2956-find-common-elements-between-two-arrays');

test('should find intersection values function returns "[2, 1]"', () => {
  const nums1 = [2, 3, 2];
  const nums2 = [1, 2];

  const res = f.findIntersectionValues(nums1, nums2);

  expect(res).toEqual([2, 1]);
});

test('should find intersection values function returns "[3, 4]"', () => {
  const nums1 = [4, 3, 2, 3, 1];
  const nums2 = [2, 2, 5, 2, 3, 6];

  const res = f.findIntersectionValues(nums1, nums2);

  expect(res).toEqual([3, 4]);
});

test('should find intersection values function returns "[0, 0]"', () => {
  const nums1 = [3, 4, 2, 3];
  const nums2 = [1, 5];

  const res = f.findIntersectionValues(nums1, nums2);

  expect(res).toEqual([0, 0]);
});

test('should find intersection values function returns "[2, 2]"', () => {
  const nums1 = [1, 2, 3, 4];
  const nums2 = [3, 4, 5, 6];

  const res = f.findIntersectionValues(nums1, nums2);

  expect(res).toEqual([2, 2]);
});

test('should find intersection values function returns "[0, 0]"', () => {
  const nums1 = [1, 2, 3];
  const nums2 = [4, 5, 6];

  const res = f.findIntersectionValues(nums1, nums2);

  expect(res).toEqual([0, 0]);
});

test('should find intersection values function returns "[1, 1]"', () => {
  const nums1 = [1];
  const nums2 = [1];

  const res = f.findIntersectionValues(nums1, nums2);

  expect(res).toEqual([1, 1]);
});

test('should find intersection values function returns "[0, 0]"', () => {
  const nums1 = [100];
  const nums2 = [99];

  const res = f.findIntersectionValues(nums1, nums2);

  expect(res).toEqual([0, 0]);
});

test('should find intersection values function returns "[3, 3]"', () => {
  const nums1 = [1, 2, 2, 3];
  const nums2 = [2, 3, 3, 4];

  const res = f.findIntersectionValues(nums1, nums2);

  expect(res).toEqual([3, 3]);
});

test('should find intersection values function returns "[2, 2]"', () => {
  const nums1 = [1, 2, 3];
  const nums2 = [2, 3, 4, 5];

  const res = f.findIntersectionValues(nums1, nums2);

  expect(res).toEqual([2, 2]);
});

test('should find intersection values function returns "[2, 2]"', () => {
  const nums1 = [1, 100];
  const nums2 = [100, 1];

  const res = f.findIntersectionValues(nums1, nums2);

  expect(res).toEqual([2, 2]);
});

test('should find intersection values function returns "[2, 2]"', () => {
  const nums1 = [1, 2, 3, 4, 5];
  const nums2 = [2, 4];

  const res = f.findIntersectionValues(nums1, nums2);

  expect(res).toEqual([2, 2]);
});

test('should find intersection values function returns "[4, 4]"', () => {
  const nums1 = [5, 5, 5, 5];
  const nums2 = [5, 5, 5, 5];

  const res = f.findIntersectionValues(nums1, nums2);

  expect(res).toEqual([4, 4]);
});

test('should find intersection values function returns "[0, 0]"', () => {
  const nums1 = [];
  for (let i = 1; i < 101; i++) nums1.push(i);
  const nums2 = [];
  for (let i = 101; i < 201; i++) nums2.push(i);

  const res = f.findIntersectionValues(nums1, nums2);

  expect(res).toEqual([0, 0]);
});

test('should find intersection values function returns "[5, 5]"', () => {
  const nums1 = [1, 2, 3, 4, 5];
  const nums2 = [5, 4, 3, 2, 1];

  const res = f.findIntersectionValues(nums1, nums2);

  expect(res).toEqual([5, 5]);
});

test('should find intersection values function returns "[5, 5]"', () => {
  const nums1 = [2, 4, 6, 8, 10];
  const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const res = f.findIntersectionValues(nums1, nums2);

  expect(res).toEqual([5, 5]);
});
