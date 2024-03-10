const f = require('./1512-number-of-good-pairs');

test('should number of identical pairs function returns "4"', () => {
    const nums = [1, 2, 3, 1, 1, 3];

    const res = f.numIdenticalPairs(nums);

    expect(res).toBe(4);
});

test('should number of identical pairs function returns "6"', () => {
    const nums = [1, 1, 1, 1];

    const res = f.numIdenticalPairs(nums);

    expect(res).toBe(6);
});

test('should number of identical pairs function returns "0"', () => {
    const nums = [1, 2, 3];

    const res = f.numIdenticalPairs(nums);

    expect(res).toBe(0);
});
