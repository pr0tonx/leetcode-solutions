const f = require('./1431-kids-with-greatest-number-of-candies');

test('should kids with candies function returns "[true, true, true, false, true]"', () => {
  const candies = [2, 3, 5, 1, 3];
  const extraCandies = 3;

  const res = f.kidsWithCandies(candies, extraCandies);

  expect(res).toEqual([true, true, true, false, true]);
});

test('should kids with candies function returns "[true, false, false, false, false]"', () => {
  const candies = [4, 2, 1, 1, 2];
  const extraCandies = 1;

  const res = f.kidsWithCandies(candies, extraCandies);

  expect(res).toEqual([true, false, false, false, false]);
});