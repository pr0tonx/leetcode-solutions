const f = require('./1342-steps-to-reduce-to-zero');

test('should number of steps function returns "6"', () => {
    const num = 14;

    const res = f.numberOfSteps(num);

    expect(res).toEqual(6);
});

test('should number of steps function returns "4"', () => {
    const num = 8;

    const res = f.numberOfSteps(num);

    expect(res).toEqual(4);
});

test('should number of steps function returns "12"', () => {
    const num = 123;

    const res = f.numberOfSteps(num);

    expect(res).toEqual(12);
});