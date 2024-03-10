const f = require('./2703-arguments-length');

test('should arguments length function return 1', () => {
    const res = f.argumentsLength([5]);

    expect(res).toBe(1);
});

test('should arguments length function return 3', () => {
    const res = f.argumentsLength({}, null, "3");

    expect(res).toBe(3);
});
