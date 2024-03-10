const f = require('./1480-summing-1d-array');

test('should running sum function returns "[1, 3, 6, 10]"', () => {
    const nums = [1, 2, 3, 4];

    const res = f.runningSum(nums);

    expect(res).toEqual([1, 3, 6, 10]);
});

test('should running sum function returns "[1, 2, 3, 4, 5]"', () => {
    const nums = [1, 1, 1, 1, 1];

    const res = f.runningSum(nums);

    expect(res).toEqual([1, 2, 3, 4, 5]);
});

test('should running sum function returns "[3, 4, 6, 16, 17]"', () => {
    const nums = [3, 1, 2, 10, 1];

    const res = f.runningSum(nums);

    expect(res).toEqual([3, 4, 6, 16, 17]);
});