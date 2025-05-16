const f = require('./3498-reverse-degree-of-a-string');

test('should reverse degree function returns "148"', () => {
  const s = 'abc';

  const res = f.reverseDegree(s);

  expect(res).toBe(148);
});

test('should reverse degree function returns "160"', () => {
  const s = 'zaza';

  const res = f.reverseDegree(s);

  expect(res).toBe(160);
});

test('should reverse degree function returns "26"', () => {
  const s = 'a';

  const res = f.reverseDegree(s);

  expect(res).toBe(26);
});

test('should reverse degree function returns "28"', () => {
  const s = 'az';

  const res = f.reverseDegree(s);

  expect(res).toBe(28);
});

test('should reverse degree function returns "84"', () => {
  const s = 'mmm';

  const res = f.reverseDegree(s);

  expect(res).toBe(84);
});

test('should reverse degree function returns "14"', () => {
  const s = 'zyx';

  const res = f.reverseDegree(s);

  expect(res).toBe(14);
});

test('should reverse degree function returns "55"', () => {
  const s = 'zzzzzzzzzz';

  const res = f.reverseDegree(s);

  expect(res).toBe(55);
});

test('should reverse degree function returns "1430"', () => {
  const s = 'aaaaaaaaaa';

  const res = f.reverseDegree(s);

  expect(res).toBe(1430);
});

test('should reverse degree function returns "246"', () => {
  const s = 'azazaz';

  const res = f.reverseDegree(s);

  expect(res).toBe(246);
});

test('should reverse degree function returns "13013000"', () => {
  const s = 'a'.repeat(1000);

  const res = f.reverseDegree(s);

  expect(res).toBe(13013000);
});

test('should reverse degree function returns "500500"', () => {
  const s = 'z'.repeat(1000);

  const res = f.reverseDegree(s);

  expect(res).toBe(500500);
});