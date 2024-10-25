const f = require('./2373-largest-local-values-in-matrix');

test('should largest local function returns "[[9, 9], [8, 6]]"', () => {
  const grid = [[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]];

  const res = f.largestLocal(grid);

  expect(res).toEqual([[9, 9], [8, 6]]);
});

test('should largest local function returns "[[2, 2, 2], [2, 2, 2], [2, 2, 2]]"', () => {
  const grid = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]];

  const res = f.largestLocal(grid);

  expect(res).toEqual([[2, 2, 2], [2, 2, 2], [2, 2, 2]]);
});