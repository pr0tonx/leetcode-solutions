const f = require('./1828-queries-on-number-of-points-inside-circle');

test('should count points function returns "[3, 2, 2]"', () => {
  const points = [[1, 3], [3, 3], [5, 3], [2, 2]];
  const queries = [[2, 3, 1], [4, 3, 1], [1, 1, 2]];

  const res = f.countPoints(points, queries);

  expect(res).toEqual([3, 2, 2]);
});

test('should count points function returns "[2, 3, 2, 4]"', () => {
  const points = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]];
  const queries = [[1, 2, 2], [2, 2, 2], [4, 3, 2], [4, 3, 3]];

  const res = f.countPoints(points, queries);

  expect(res).toEqual([2, 3, 2, 4]);
});

test('should count points function returns "[1]"', () => {
  const points = [[1, 1]];
  const queries = [[1, 1, 1]];

  const res = f.countPoints(points, queries);

  expect(res).toEqual([1]);
});

test('should count points function returns "[1]"', () => {
  const points = [[3, 0]];
  const queries = [[0, 0, 3]];

  const res = f.countPoints(points, queries);

  expect(res).toEqual([1]);
});

test('should count points function returns "[0]"', () => {
  const points = [[4, 0]];
  const queries = [[0, 0, 3]];

  const res = f.countPoints(points, queries);

  expect(res).toEqual([0]);
});

test('should count points function returns "[10]"', () => {
  const points = Array(10).fill([100, 100]);
  const queries = [[100, 100, 5]];

  const res = f.countPoints(points, queries);

  expect(res).toEqual([10]);
});

test('should count points function returns "[1, 1, 1, 1]"', () => {
  const points = [[0, 0], [100, 100], [250, 250], [500, 500]];
  const queries = [[0, 0, 1], [100, 100, 10], [250, 250, 0], [500, 500, 100]];

  const res = f.countPoints(points, queries);

  expect(res).toEqual([1, 1, 1, 1]);
});

test('should count points function returns "[5]"', () => {
  const points = [[125, 125], [92, 105], [245, 250], [1, 1], [499, 499]];
  const queries = [[250, 250, 500]];

  const res = f.countPoints(points, queries);

  expect(res).toEqual([5]);
});

test('should count points function returns "[0]"', () => {
  const points = [[10, 10], [20, 20], [30, 30]];
  const queries = [[500, 500, 10]];

  const res = f.countPoints(points, queries);

  expect(res).toEqual([0]);
});

test('should count points function returns "[4]"', () => {
  const points = [[3, 4], [-3, 4], [-3, -4], [3, -4]];
  const queries = [[0, 0, 5]];

  const res = f.countPoints(points, queries);

  expect(res).toEqual([4]);
});

test('should count points function returns "[1, 1, 2]"', () => {
  const points = [[0, 0], [500, 500]];
  const queries = [[0, 0, 0], [500, 500, 0], [250, 250, 500]];

  const res = f.countPoints(points, queries);

  expect(res).toEqual([1, 1, 2]);
});

test('should count points function returns "[500, 500, 500]"', () => {
  const points = Array(500).fill([250, 250]);
  const queries = [[250, 250, 1], [250, 250, 100], [250, 250, 500]];

  const res = f.countPoints(points, queries);

  expect(res).toEqual([500, 500, 500]);
});
