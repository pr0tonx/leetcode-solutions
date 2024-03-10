const f = require('./2574-left-and-right-sum-differences');

test('should left right difference function returns [15, 1, 11, 22]', () => {
    const nums = [10, 4, 8, 3];

    const res = f.leftRightDifference(nums);

    expect(res).toEqual([15, 1, 11, 22]);
});

test('should left right difference function returns [0]', () => {
    const nums = [1];

    const res = f.leftRightDifference(nums);

    expect(res).toEqual([0]);
});