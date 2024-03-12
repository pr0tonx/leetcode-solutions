const f = require('2894-divisible-and-non-divisible-sums');

test('should difference of sums function returns "19"', () => {
    const n = 10;
    const m = 3;

    const res = f.differenceOfSums(n, m);

    expect(res).toBe(19);
});

test('should difference of sums function returns "15"', () => {
    const n = 5;
    const m = 6;

    const res = f.differenceOfSums(n, m);

    expect(res).toBe(15);
});

test('should difference of sums function returns "-15"', () => {
    const n = 5;
    const m = 1;

    const res = f.differenceOfSums(n, m);

    expect(res).toBe(-15);
});