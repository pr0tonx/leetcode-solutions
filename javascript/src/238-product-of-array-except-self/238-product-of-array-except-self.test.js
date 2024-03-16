const f = require('./238-product-of-array-except-self');

test('should product except self function returns "[24, 12, 8, 6]"', () => {
    const nums = [1, 2, 3, 4];

    const res = f.productExceptSelf(nums);

    expect(res).toEqual([24, 12, 8, 6]);
});

test('should product except self function returns "[0, 0, 9, 0, 0]"', () => {
    const nums = [-1, 1, 0, -3, 3];

    const res = f.productExceptSelf(nums);

    expect(res).toEqual([-0, 0, 9, -0, 0]);
});