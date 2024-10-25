const f = require('./2652-sum-multiples');

// base tests provided by leetcode
test('should sum of multiples function returns "21"', () => {
  const n = 7;

  const res = f.sumOfMultiples(n);

  expect(res).toBe(21);
});

test('should sum of multiples function returns "40"', () => {
  const n = 10;

  const res = f.sumOfMultiples(n);

  expect(res).toBe(40);
});

test('should sum of multiples function returns "30"', () => {
  const n = 9;

  const res = f.sumOfMultiples(n);

  expect(res).toBe(30);
});

// personal tests by the developer
test('should sum of multiple function returns "0"', () => {
  const n = 1;

  const res = f.sumOfMultiples(n);

  expect(res).toBe(0);
});

test('should sum of multiple function returns "2940"', () => {
  const n = 103;

  const res = f.sumOfMultiples(n);

  expect(res).toBe(2925);
});