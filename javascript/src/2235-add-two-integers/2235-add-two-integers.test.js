const f = require('./2235-add-two-integers');

test('should sum function returns "17"', () => {
    const num1 = 12;
    const num2 = 5;

    const res = f.sum(num1, num2);

    expect(res).toBe(17);
});

test('should sum function returns "-6"', () => {
    const num1 = -10;
    const num2 = 4;

    const res = f.sum(num1, num2);

    expect(res).toBe(-6);
});