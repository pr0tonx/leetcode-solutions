const f = require('./1662-check-if-strings-are-equivalent');

test('should array of strings are equal function returns "true"', () => {
    const num1 = ['ab', 'c'];
    const num2 = ['a', 'bc'];

    const res = f.arrayStringsAreEqual(num1, num2);

    expect(res).toBe(true)
});

test('should array of string are equal function returns "false"', () => {
    const num1 = ['a', 'cb'];
    const num2 = ['ab', 'c'];

    const res = f.arrayStringsAreEqual(num1, num2);

    expect(res).toBe(false);
});

test('should array os strings are equal function returns "true"', () => {
    const num1 = ['abc', 'd', 'defg'];
    const num2 = ['abcddefg'];

    const res = f.arrayStringsAreEqual(num1, num2);

    expect(res).toBe(true);
});
