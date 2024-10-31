const f = require('./1021-remove-outermost-parentheses');

test('should remove outer parentheses function returns "()()()"', () => {
  const s = '(()())(())';

  const res = f.removeOuterParentheses(s);

  expect(res).toBe('()()()');
});

test('should remove outer parentheses function returns "()()()()(())"', () => {
  const s = '(()())(())(()(()))';

  const res = f.removeOuterParentheses(s);

  expect(res).toBe('()()()()(())');
});

test('should remove outer parentheses function returns ""', () => {
  const s = '()()';

  const res = f.removeOuterParentheses(s);

  expect(res).toBe('');
});

test('should remove outer parentheses function returns ""', () => {
  const s = '()';

  const res = f.removeOuterParentheses(s);

  expect(res).toBe('');
});

test('should remove outer parentheses function returns "()()"', () => {
  const s = '(())(())';

  const res = f.removeOuterParentheses(s);

  expect(res).toBe('()()');
});

test('should remove outer parentheses function returns "((()))"', () => {
  const s = '(((())))';

  const res = f.removeOuterParentheses(s);

  expect(res).toBe('((()))');
});

test('should remove outer parentheses function returns "((()))"', () => {
  const s = '(()()(()))(((())))';

  const res = f.removeOuterParentheses(s);

  expect(res).toBe('()()(())((()))');
});