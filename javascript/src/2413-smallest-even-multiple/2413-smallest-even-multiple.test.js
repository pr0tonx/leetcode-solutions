const f = require('./2413-smallest-even-multiple');

test('should smallest even multiple function returns "10"', () => {
    const res = f.smallestEvenMultiple(5);

    expect(res).toBe(10);
});

test('should smallest even multiple function returns "6"', () => {
    const res = f.smallestEvenMultiple(6);

    expect(res).toBe(6);
});
