const f = require('./2610-convert-array-into-2d');

test('should find matrix function returns "[[1, 3, 4, 2], [1, 3], [1]]"', () => {
    const nums = [1, 3, 4, 1, 2, 3, 1];

    const res = f.findMatrix(nums);

    expect(res).toEqual([[1, 3, 4, 2], [1, 3], [1]]);
})

test('should find matrix function returns "[[1, 2, 3, 4]]"', () => {
    const nums = [1, 2, 3, 4];

    const res = f.findMatrix(nums);

    expect(res).toEqual([[1, 2, 3, 4]]);
})
