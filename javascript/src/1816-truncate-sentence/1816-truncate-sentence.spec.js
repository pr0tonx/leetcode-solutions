const f = require('./1816-truncate-sentence');

test('should truncate sentence function returns "Hello how are you"', () => {
  const s = 'Hello how are you Contestant';
  const k = 4;

  const res = f.truncateSentence(s, k);

  expect(res).toBe('Hello how are you');
});

test('should truncate sentence function returns "What is the solution"', () => {
  const s = 'What is the solution to this problem';
  const k = 4;

  const res = f.truncateSentence(s, k);

  expect(res).toBe('What is the solution');
});

test('should truncate sentence function returns "chopper is not a tanuki"', () => {
  const s = 'chopper is not a tanuki';
  const k = 5;

  const res = f.truncateSentence(s, k);

  expect(res).toBe('chopper is not a tanuki');
});

test('should truncate sentence function returns "Truncate"', () => {
  const s = 'Truncate only one word';
  const k = 1;

  const res = f.truncateSentence(s, k);

  expect(res).toBe('Truncate');
});

test('should truncate sentence function returns "Keep the whole sentence"', () => {
  const s = 'Keep the whole sentence';
  const k = 4;

  const res = f.truncateSentence(s, k);

  expect(res).toBe('Keep the whole sentence');
});

test('should truncate sentence function returns a bunch of "word"', () => {
  const s = 'word '.repeat(100).trim();
  const k = 50;

  const res = f.truncateSentence(s, k);

  expect(res).toBe('word '.repeat(50).trim());
});

test('should truncate sentence function returns "Single"', () => {
  const s = 'Single'
  const k = 1;

  const res = f.truncateSentence(s, k);

  expect(res).toBe('Single');
});

test('should truncate sentence function returns "word"', () => {
  const s = 'word '.repeat(500).trim()
  const k = 1;

  const res = f.truncateSentence(s, k);

  expect(res).toBe('word');
});

test('should truncate sentence function returns "The full sentence should remain unchanged"', () => {
  const s = 'The full sentence should remain unchanged'
  const k = 6;

  const res = f.truncateSentence(s, k);

  expect(res).toBe('The full sentence should remain unchanged');
});