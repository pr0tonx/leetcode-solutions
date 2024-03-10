const f = require('./2469-convert-temperature');

test('should convert temperature returns [309.65000, 97.70000]', () => {
    const celsius = 36.5;

    const res = f.convertTemperature(celsius);

    expect(res).toEqual([309.65000, 97.70000]);
});

test('should convert temperature returns [395.26000, 251.79800]', () => {
    const celsius = 122.11;

    const res = f.convertTemperature(celsius);

    expect(res).toEqual([395.26000, 251.79800]);
});