const f = require('./2634-filter-from-array');

test('should filter function return "[20, 30]"', () => {
    const arr = [0, 10, 20, 30];
    const fn = function greaterThan10(n) {
        return n > 10;
    };

    const res = f.filter(arr, fn);

    expect(res).toEqual([20, 30]);
});

test('should filter function return "[1]"', () => {
    const arr = [1, 2, 3];
    const fn = function firstIndex(n, i) {
        return i === 0;
    }

    const res = f.filter(arr, fn);

    expect(res).toEqual([1]);
});

test('should filter function return "[-2, 0, 1, 2]"', () => {
    const arr = [-2, -1, 0, 1, 2];
    const fn = function plusOne(n) {
        return n + 1
    }

    const res = f.filter(arr, fn);

    expect(res).toEqual([-2, 0, 1, 2]);
});
