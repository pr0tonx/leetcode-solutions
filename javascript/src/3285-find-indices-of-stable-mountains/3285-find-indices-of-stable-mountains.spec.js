const f = require('./3285-find-indices-of-stable-mountains');

test('should get stable mountains function returns "[3, 4]"', () => {
  const height = [1, 2, 3, 4, 5];
  const threshold = 2;

  const res = f.stableMountains(height, threshold);

  expect(res).toEqual([3, 4]);
});

test('should get stable mountains function returns "[1, 3]"', () => {
  const height = [10, 1, 10, 1, 10];
  const threshold = 3;

  const res = f.stableMountains(height, threshold);

  expect(res).toEqual([1, 3]);
});

test('should get stable mountains function returns "[]"', () => {
  const height = [10, 1, 10, 1, 10];
  const threshold = 10;

  const res = f.stableMountains(height, threshold);

  expect(res).toEqual([]);
});

test('should get stable mountains function returns "[]"', () => {
  const height = [5, 3, 2, 1];
  const threshold = 5;

  const res = f.stableMountains(height, threshold);

  expect(res).toEqual([]);
});

test('should get stable mountains function returns "[1, 2, 3]"', () => {
  const height = [10, 9, 8, 7];
  const threshold = 5;

  const res = f.stableMountains(height, threshold);

  expect(res).toEqual([1, 2, 3]);
});

test('should get stable mountains function returns "[3]"', () => {
  const height = [5, 5, 7, 8];
  const threshold = 5;

  const res = f.stableMountains(height, threshold);

  expect(res).toEqual([3]);
});

test('should get stable mountains function returns "[1, 2]"', () => {
  const height = [10, 10, 5, 6];
  const threshold = 9;

  const res = f.stableMountains(height, threshold);

  expect(res).toEqual([1, 2]);
});

test('should get stable mountains function returns "[2, 4]"', () => {
  const height = [3, 6, 2, 9, 3, 10];
  const threshold = 5;

  const res = f.stableMountains(height, threshold);

  expect(res).toEqual([2, 4]);
});
