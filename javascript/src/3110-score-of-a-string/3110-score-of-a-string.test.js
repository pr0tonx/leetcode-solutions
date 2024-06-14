const f = require('./3110-score-of-a-string');

test('should score a string function returns "13"', () => {
  const s = 'hello';

  const res = f.scoreOfString(s);

  expect(res).toBe(13);
});

test('should score a string function returns "50"', () => {
  const s = 'zaz';

  const res = f.scoreOfString(s);

  expect(res).toBe(50);
});