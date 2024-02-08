const f = require('./1929-array-concatenation');

test('should get concatenation function returns "[1, 2, 1, 1, 2, 1]"', () => {
    const nums = [1, 2, 1];

    const res = f.getConcatenation(nums);

    expect(res).toEqual([1, 2, 1, 1, 2, 1]);
});

test('should get concatenation function returns "[1, 3, 2, 1, 1, 3, 2, 1]"', () => {
    const nums = [1, 3, 2, 1];

    const res = f.getConcatenation(nums);

    expect(res).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
});

Input: nums = [1, 2, 1]
Output: [1, 2, 1, 1, 2, 1]