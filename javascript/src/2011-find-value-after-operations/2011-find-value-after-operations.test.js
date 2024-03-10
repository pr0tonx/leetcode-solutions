const f = require('./2011-find-value-after-operations');

test('should final value after operations function returns "1"', () => {
    const operations = ['--X', 'X++', 'X++'];

    const res = f.finalValueAfterOperations(operations);

    expect(res).toBe(1);
});

test('should final value after operations function returns "3"', () => {
    const operations = ['++X', '++X', 'X++'];

    const res = f.finalValueAfterOperations(operations);

    expect(res).toBe(3);
});

test('should final value after operations function returns "0"', () => {
    const operations = ['X++', '++X', '--X', 'X--'];

    const res = f.finalValueAfterOperations(operations);

    expect(res).toBe(0);
});