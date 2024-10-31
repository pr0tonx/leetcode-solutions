const f = require('./1773-count-items-matching-a-rule');

test('should count matches function returns "1"', () => {
  const items = [['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo'], ['phone', 'gold', 'iphone']];
  const ruleKey = 'color';
  const ruleValue = 'silver';

  const res = f.countMatches(items, ruleKey, ruleValue);

  expect(res).toBe(1);
});

test('should count matches function returns "2"', () => {
  const items = [['phone', 'blue', 'pixel'], ['computer', 'silver', 'phone'], ['phone', 'gold', 'iphone']];
  const ruleKey = 'type';
  const ruleValue = 'phone';

  const res = f.countMatches(items, ruleKey, ruleValue);

  expect(res).toBe(2);
});

test('should count matches function returns "0"', () => {
  const items = [['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo'], ['phone', 'gold', 'iphone']];
  const ruleKey = 'type';
  const ruleValue = 'tablet';

  const res = f.countMatches(items, ruleKey, ruleValue);

  expect(res).toBe(0);
});

test('should count matches function returns "3"', () => {
  const items = [['phone', 'blue', 'pixel'], ['phone', 'blue', 'galaxy'], ['phone', 'blue', 'iphone']];
  const ruleKey = 'color';
  const ruleValue = 'blue';

  const res = f.countMatches(items, ruleKey, ruleValue);

  expect(res).toBe(3);
});

test('should count matches function returns "2"', () => {
  const items = [['phone', 'blue', 'pixel'], ['phone', 'blue', 'pixel'], ['computer', 'silver', 'lenovo']];
  const ruleKey = 'name';
  const ruleValue = 'pixel';

  const res = f.countMatches(items, ruleKey, ruleValue);

  expect(res).toBe(2);
});

test('should count matches function returns "1"', () => {
  const items = [['phone', 'black', 'iphone'], ['phone', 'black', 'galaxy'], ['phone', 'white', 'pixel']];
  const ruleKey = 'name';
  const ruleValue = 'galaxy';

  const res = f.countMatches(items, ruleKey, ruleValue);

  expect(res).toBe(1);
});

test('should count matches function returns "1"', () => {
  const items = [['phone', 'red', 'samsung']];
  const ruleKey = 'color';
  const ruleValue = 'red';

  const res = f.countMatches(items, ruleKey, ruleValue);

  expect(res).toBe(1);
});

test('should count matches function returns "1"', () => {
  const items = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']];
  const ruleKey = 'type';
  const ruleValue = 'a';

  const res = f.countMatches(items, ruleKey, ruleValue);

  expect(res).toBe(1);
});

test('should count matches function returns "1"', () => {
  const items = [];

  for (let i = 0; i < 1000; i++) items.push(['phone', 'black', 'pixel']);
  items.push(['tablet', 'black', 'ipad']);

  const ruleKey = 'type';
  const ruleValue = 'tablet';

  const res = f.countMatches(items, ruleKey, ruleValue);

  expect(res).toBe(1);
});

test('should count matches function returns "1000"', () => {
  const items = [];

  for (let i = 0; i < 1000; i++) items.push(['phone', 'black', 'pixel']);
  items.push(['tablet', 'black', 'ipad']);

  const ruleKey = 'type';
  const ruleValue = 'phone';

  const res = f.countMatches(items, ruleKey, ruleValue);

  expect(res).toBe(1000);
});

test('should count matches function returns "2"', () => {
  const items = [['laptop', 'blue', 'pixelbook'], ['desktop', 'blueberry', 'macbook'], ['tablet', 'blue', 'ipad']];
  const ruleKey = 'color';
  const ruleValue = 'blue';

  const res = f.countMatches(items, ruleKey, ruleValue);

  expect(res).toBe(2);
});