const f = require('./2652-sum-multiples');

// base tests provided by leetcode
xtest('should sum of multiples function returns "21"', () => {
  const n = 7;

  const res = f.sumOfMultiples(n);

  expect(res).toBe(21);
});

xtest('should sum of multiples function returns "40"', () => {
  const n = 10;

  const res = f.sumOfMultiples(n);

  expect(res).toBe(40);
});

xtest('should sum of multiples function returns "30"', () => {
  const n = 9;

  const res = f.sumOfMultiples(n);

  expect(res).toBe(30);
});

// personal tests by the developer
xtest('should sum of multiple function returns "0"', () => {
  const n = 1;

  const res = f.sumOfMultiples(n);

  expect(res).toBe(0);
});

xtest('should sum of multiple function returns "2940"', () => {
  const n = 103;

  const res = f.sumOfMultiples(n);

  expect(res).toBe(2925);
});