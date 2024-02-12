const f = require('./2798-employees-who-met-target');

test('should number of employees who met target function returns 3', () => {
    const hours = [0, 1, 2, 3, 4];
    const target = 2;

    const res = f.numberOfEmployeesWhoMetTarget(hours, target);

    expect(res).toBe(3);
});

test('should number of employees who met target function returns 0', () => {
    const hours = [5, 1, 4, 2, 2];
    const target = 6;

    const res = f.numberOfEmployeesWhoMetTarget(hours, target);

    expect(res).toBe(0);
});
