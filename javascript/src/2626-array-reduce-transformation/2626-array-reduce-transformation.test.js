const f = require('./2626-array-reduce-transformation');

test('should reduce function return 0', () => {
    const nums = [1, 2, 3, 4];
    const fn = function sum(accum, curr) {
        return accum + curr;
    }
    const init = 0;

    const res = f.reduce(nums, fn, init);

    expect(res).toBe(10);
});

test('should reduce function return 130', () => {
    const nums = [1, 2, 3, 4];
    const fn = function sum(accum, curr) {
        return accum + curr * curr;
    }
    const init = 100;

    const res = f.reduce(nums, fn, init);

    expect(res).toBe(130);
});

test('should reduce function return 25', () => {
    const nums = [];
    const fn = function sum(accum, curr) {
        return 0;
    };
    const init = 0;

    const res = f.reduce(nums, fn, init);

    expect(res).toBe(0);
});
