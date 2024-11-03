const f = require('./3300-minimum-element-after-replacement-with-digit-sum');

test('should minimum element function returns "1"', () => {
  const nums = [10, 12, 13, 14];

  const res = f.minElement(nums);

  expect(res).toBe(1);
});

test('should minimum element function returns "1"', () => {
  const nums = [1, 2, 3, 4]

  const res = f.minElement(nums);

  expect(res).toBe(1);
});

test('should minimum element function returns "10"', () => {
  const nums = [999, 19, 199];

  const res = f.minElement(nums);

  expect(res).toBe(10);
});

test('should minimum element function returns "6"', () => {
  const nums = [123, 45, 67, 89];

  const res = f.minElement(nums);

  expect(res).toBe(6);
});

test('should minimum element function returns "2"', () => {
  const nums = [11, 22, 33, 44];

  const res = f.minElement(nums);

  expect(res).toBe(2);
});

test('should minimum element function returns "1"', () => {
  const nums = [100, 99, 10, 5];

  const res = f.minElement(nums);

  expect(res).toBe(1);
});

test('should minimum element function returns "2"', () => {
  const nums = [101, 202, 303, 404];

  const res = f.minElement(nums);

  expect(res).toBe(2);
});

test('should minimum element function returns "6"', () => {
  const nums = [123, 456, 789, 321];

  const res = f.minElement(nums);

  expect(res).toBe(6);
});

test('should minimum element function returns "10"', () => {
  const nums = [1234, 5678, 9101, 4321];

  const res = f.minElement(nums);

  expect(res).toBe(10);
});

test('should minimum element function returns "2"', () => {
  const nums = [
    123, 456, 789, 101, 202, 303, 404, 505, 606, 707, 808, 909, 111, 222, 333, 444, 555, 666, 777,
    888, 999, 321, 654, 987, 1234, 2345, 3456, 4567, 5678, 6789, 7890, 8901, 9012, 1010, 2020,
    3030, 4040, 5050, 6060, 7070, 8080, 9090, 1001, 1100, 1200, 1300, 1400, 1500, 1600, 1700
  ];

  const res = f.minElement(nums);

  expect(res).toBe(2);
});
