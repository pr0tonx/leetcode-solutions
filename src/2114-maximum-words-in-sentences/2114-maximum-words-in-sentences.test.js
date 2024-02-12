const f = require('./2114-maximum-words-in-sentences');

test('should most words found function returns "6"', () => {
    const sentences = ['alice and bob love leetcode', 'i think so too', 'this is great thanks very much'];

    const res = f.mostWordsFound(sentences);

    expect(res).toBe(6);
});

test('should most words found function returns "3"', () => {
    const sentences = ['please wait', 'continue to fight', 'continue to win'];

    const res = f.mostWordsFound(sentences);

    expect(res).toBe(3);
});