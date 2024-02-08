const f = require('./1108-defanging-ip');

test('should defang ip function return "1[.]1[.]1[.]1"', () => {
    const address = '1.1.1.1';

    const res = f.defangIPaddr(address);

    expect(res).toBe('1[.]1[.]1[.]1');
});

test('should defang ip function return "255[.]100[.]50[.]0"', () => {
    const address = '255.100.50.0';

    const res = f.defangIPaddr(address);

    expect(res).toBe('255[.]100[.]50[.]0');
});