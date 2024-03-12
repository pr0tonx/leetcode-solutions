const f = require('./1688-count-matches-in-tournament');

test('should number of matches function returns "7"', () => {
    const n = 7;

    const res = f.numberOfMatches(n);

    expect(res).toBe(6);
});

test('should number of matches function returns "13"', () => {
    const n = 14;

    const res = f.numberOfMatches(n);

    expect(res).toBe(13);
});