const f = require('./1365-smaller-number-than-current');

test('should smaller numbers than current function returns "[4, 0, 1, 1, 3]"', () => {
    const nums = [8, 1, 2, 2, 3];

    const res = f.smallerNumbersThanCurrent(nums);

    expect(res).toEqual([4, 0, 1, 1, 3]);
});

test('should smaller numbers than current function returns "[2, 1, 0, 3]"', () => {
    const nums = [6, 5, 4, 8];

    const res = f.smallerNumbersThanCurrent(nums);

    expect(res).toEqual([2, 1, 0, 3]);
});

test('should smaller numbers than current function returns "[0, 0, 0, 0]"', () => {
    const nums = [7, 7, 7, 7];

    const res = f.smallerNumbersThanCurrent(nums);

    expect(res).toEqual([0, 0, 0, 0]);
});
