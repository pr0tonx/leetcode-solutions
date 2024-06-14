const f = require('./2974-minimum-number-game');

test('should number game function returns "[3, 2, 5, 4]"', () => {
    const nums = [5, 4, 2, 3];

    const res = f.numberGame(nums);

    expect(res).toEqual([3, 2, 5, 4]);
});

test('should number game function returns "[5, 2]"', () => {
    const nums = [2, 5];

    const res = f.numberGame(nums);

    expect(res).toEqual([5, 2]);
});