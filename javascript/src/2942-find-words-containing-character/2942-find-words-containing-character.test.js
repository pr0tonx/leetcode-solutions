const f = require('./2942-find-words-containing-character');

test('should find words containing function returns "[0, 1]"', () => {
    const words = ['leet', 'code'];
    const x = 'e';

    const res = f.findWordsContaining(words, x);

    expect(res).toEqual([0, 1]);
});

test('should find words containing function returns "[0, 2]"', () => {
    const words = ['abc', 'bcd', 'aaaa', 'cbc'];
    const x = 'a';

    const res = f.findWordsContaining(words, x);

    expect(res).toEqual([0, 2]);
});

test('should find words containing function returns "[0, 1]"', () => {
    const words = ['abc', 'bcd', 'aaaa', 'cbc'];
    const x = 'z';

    const res = f.findWordsContaining(words, x);

    expect(res).toEqual([]);
});