const f = require('./2810-faulty-keyboard');

test('should final string function returns "rtsng"', () => {
  const s = 'string';

  const res = f.finalString(s)

  expect(res).toBe('rtsng');
});

test('should final string function returns "ponter"', () => {
  const s = 'poiinter';

  const res = f.finalString(s)

  expect(res).toBe('ponter');
});

test('should final string function returns "a"', () => {
  const s = 'a';

  const res = f.finalString(s)

  expect(res).toBe('a');
});

test('should final string function returns "abc"', () => {
  const s = 'abc';

  const res = f.finalString(s)

  expect(res).toBe('abc');
});

test('should final string function returns "a"', () => {
  const s = 'ai';

  const res = f.finalString(s)

  expect(res).toBe('a');
});

test('should final string function returns "ba"', () => {
  const s = 'abi';

  const res = f.finalString(s)

  expect(res).toBe('ba');
});

test('should final string function returns "cba"', () => {
  const s = 'abci';

  const res = f.finalString(s)

  expect(res).toBe('cba');
});

test('should final string function returns "abc"', () => {
  const s = 'abcii';

  const res = f.finalString(s)

  expect(res).toBe('abc');
});

test('should final string function returns "dcba"', () => {
  const s = 'abcdiii';

  const res = f.finalString(s)

  expect(res).toBe('dcba');
});

test('should final string function returns "abcdefg"', () => {
  const s = 'abcdefgii';

  const res = f.finalString(s)

  expect(res).toBe('abcdefg');
});

test('should final string function returns "bac"', () => {
  const s = 'abic';

  const res = f.finalString(s)

  expect(res).toBe('bac');
});

test('should final string function returns "dbac"', () => {
  const s = 'aibicidi';

  const res = f.finalString(s)

  expect(res).toBe('dbac');
});

test('should final string function returns "dbacef"', () => {
  const s = 'aibicidiefiiiiiiii';

  const res = f.finalString(s)

  expect(res).toBe('dbacef');
});
