const f = require('./1313-decompress-encoded-list');

test('should decompress list function resturn "[2,4,4,4]"', () => {
    const nums = [1,2,3,4];

    const res = f.decompressRLElist(nums);

    expect(res).toEqual([2,4,4,4]);
});

test('should decompress list function resturn "[1,3,3]"', () => {
    const nums = [1,1,2,3];

    const res = f.decompressRLElist(nums);

    expect(res).toEqual([1,3,3]);
});