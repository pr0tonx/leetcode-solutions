const f = require('./709-to-lower-case');

test('should to lower case function returns "hello word"', () => {
  const s = 'Hello World';

  const res = f.toLowerCase(s);

  expect(res).toBe('hello world');
});

test('should to lower case function returns "hello"', () => {
  const s = 'hello';

  const res = f.toLowerCase(s);

  expect(res).toBe('hello');
});

test('should to lower case function returns "hello"', () => {
  const s = 'HELLO';

  const res = f.toLowerCase(s);

  expect(res).toBe('hello');
});

test('should to lower case function returns "javascript is awesome"', () => {
  const s = 'JaVaScRiPt Is AwEsOmE';

  const res = f.toLowerCase(s);

  expect(res).toBe('javascript is awesome');
});

test('should to lower case function returns ""', () => {
  const s = '';

  const res = f.toLowerCase(s);

  expect(res).toBe('');
});

test('should to lower case function returns "1234!@#$%^&*()"', () => {
  const s = '1234!@#$%^&*()';

  const res = f.toLowerCase(s);

  expect(res).toBe('1234!@#$%^&*()');
});

test('should to lower case function returns "a1!bc$de%"', () => {
  const s = 'A1!bC$dE%';

  const res = f.toLowerCase(s);

  expect(res).toBe('a1!bc$de%');
});

test('should to lower case function returns a bunch of a\'s', () => {
  let s = '';
  let sLower = '';
  for (let i = 0; i < 100; i++) s += 'A';
  for (let i = 0; i < 100; i++) sLower += 'a';

  const res = f.toLowerCase(s);

  expect(res).toBe(sLower);
});

test('should to lower case function returns "abcdegihijkl"', () => {
  let s = 'AbCdeFGhiJKl';

  const res = f.toLowerCase(s);

  expect(res).toBe('abcdefghijkl');
});

test('should to lower case function returns " hello! @world "', () => {
  let s = ' Hello! @World ';

  const res = f.toLowerCase(s);

  expect(res).toBe(' hello! @world ');
});
