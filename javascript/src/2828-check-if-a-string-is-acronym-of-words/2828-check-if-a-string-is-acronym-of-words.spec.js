const f = require('./2828-check-if-a-string-is-acronym-of-words');

test('should is acronym function returns "true"', () => {
  const words = ['alice', 'bob', 'charlie'];
  const s = 'abc';

  const res = f.isAcronym(words, s);

  expect(res).toBe(true);
});

test('should is acronym function returns "false"', () => {
  const words = ['an', 'apple'];
  const s = 'a';

  const res = f.isAcronym(words, s);

  expect(res).toBe(false);
});

test('should is acronym function returns "true"', () => {
  const words = ['never', 'gonna', 'give', 'up', 'on', 'you'];
  const s = 'ngguoy';

  const res = f.isAcronym(words, s);

  expect(res).toBe(true);
});

test('should is acronym function returns "true"', () => {
  const words = ['bear', 'aardvark'];
  const s = 'ba';

  const res = f.isAcronym(words, s);

  expect(res).toBe(true);
});

test('should is acronym function returns "false"', () => {
  const words = ['dog', 'elephant'];
  const s = 'd';

  const res = f.isAcronym(words, s);

  expect(res).toBe(false);
});

test('should is acronym function returns "false"', () => {
  const words = ['dog', 'elephant'];
  const s = 'deer';

  const res = f.isAcronym(words, s);

  expect(res).toBe(false);
});

test('should is acronym function returns "true"', () => {
  const words = ['a', 'b', 'c'];
  const s = 'abc';

  const res = f.isAcronym(words, s);

  expect(res).toBe(true);
});

test('should is acronym function returns "true"', () => {
  const words = [];
  let s = '';
  for (let i = 0; i < 100; i++) {
    words.push('a');
    s += 'a';
  }

  const res = f.isAcronym(words, s);

  expect(res).toBe(true);
});