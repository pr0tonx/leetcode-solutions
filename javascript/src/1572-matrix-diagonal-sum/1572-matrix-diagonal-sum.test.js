const f = require('./1572-matrix-diagonal-sum');

test('should diagonal sum function returns "25"', () => {
    const mat = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    const res = f.diagonalSum(mat);

    expect(res).toBe(25);
});

test('should diagonal sum function returns "8"', () => {
    const mat = [
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1]
    ];

    const res = f.diagonalSum(mat);

    expect(res).toBe(8);
});

test('should diagonal sum function returns 5"', () => {
    const mat = [[5]];

    const res = f.diagonalSum(mat);

    expect(res).toBe(5);
});