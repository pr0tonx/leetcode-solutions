const f = require('./1470-shuffle-array');

test('should shuffle function returns "[2, 3, 5, 4, 1, 7]"', () => {
    const nums = [2, 5, 1, 3, 4, 7];
    const n = 3;

    const res = f.shuffle(nums, n);

    expect(res).toEqual([2, 3, 5, 4, 1, 7]);
});

test('should shuffle function returns "[1, 4, 2, 3, 3, 2, 4, 1]"', () => {
    const nums = [1, 2, 3, 4, 4, 3, 2, 1];
    const n = 4;

    const res = f.shuffle(nums, n);

    expect(res).toEqual([1, 4, 2, 3, 3, 2, 4, 1]);
});

test('should shuffle function returns "[1, 2, 1, 2]"', () => {
    const nums = [1, 1, 2, 2];
    const n = 2;

    const res = f.shuffle(nums, n);

    expect(res).toEqual([1, 2, 1, 2])
});
