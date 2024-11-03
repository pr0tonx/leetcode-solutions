const f = require('./1732-find-the-highest-altitude');

test('should largest altitude function returns "1"', () => {
  const gain = [-5, 1, 5, 0, -7];

  const res = f.largestAltitude(gain);

  expect(res).toBe(1);
});

test('should largest altitude function returns "0"', () => {
  const gain = [-4, -3, -2, -1, 4, 3, 2];

  const res = f.largestAltitude(gain);

  expect(res).toBe(0);
});

test('should largest altitude function returns "15"', () => {
  const gain = [1, 2, 3, 4, 5];


  const res = f.largestAltitude(gain);

  expect(res).toBe(15);
});

test('should largest altitude function returns "0"', () => {
  const gain = [-4, -3, -2, -1, 4, 3, 2];


  const res = f.largestAltitude(gain);

  expect(res).toBe(0);
});

test('should largest altitude function returns "4"', () => {
  const gain = [1, -1, 2, -2, 3, -3, 4, -4];


  const res = f.largestAltitude(gain);

  expect(res).toBe(4);
});

test('should largest altitude function returns "0"', () => {
  const gain = [-1, -2, -3, -4];


  const res = f.largestAltitude(gain);

  expect(res).toBe(0);
});

test('should largest altitude function returns "25"', () => {
  const gain = [10, -5, 20, -10];


  const res = f.largestAltitude(gain);

  expect(res).toBe(25);
});

test('should largest altitude function returns "1"', () => {
  const gain = [];
  for (let i = 0; i < 101; i++) {
    i % 2 === 0 ? gain.push(1) : gain.push(-1);
  }

  const res = f.largestAltitude(gain);

  expect(res).toBe(1);
});
