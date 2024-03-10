const f = require('./771-jewels-and-stones');

test('should number of jewels in stones function returns 3', () => {
    const jewels = 'aA';
    const stones = 'aAAbbbb';

    const res = f.numJewelsInStones(jewels, stones);

    expect(res).toBe(3);
})

test('should number of jewels in stones function returns 0', () => {
    const jewels = 'z';
    const stones = 'ZZ';

    const res = f.numJewelsInStones(jewels, stones);

    expect(res).toBe(0);
})