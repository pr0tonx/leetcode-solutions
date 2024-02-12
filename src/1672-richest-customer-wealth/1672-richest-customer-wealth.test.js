const f = require('./1672-richest-customer-wealth');

test('should maximum wealth function returns 6', () => {
    const wealthArr = [[1, 2, 3], [3, 2, 1]];

    const res = f.maximumWealth(wealthArr);

    expect(res).toBe(6);
});

test('should maximum wealth function returns 10', () => {
    const wealthArr = [[1, 5], [7, 3], [3, 5]];

    const res = f.maximumWealth(wealthArr);

    expect(res).toBe(10);
});
