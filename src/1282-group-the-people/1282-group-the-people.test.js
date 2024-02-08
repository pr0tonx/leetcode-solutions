const f = require('./1282-group-the-people');

xtest('should group the people function return "[[5], [0, 1, 2], [3, 4, 6]]"', () => {
    const arr = [3, 3, 3, 3, 3, 1, 3];

    const res = f.groupThePeople(arr);

    expect(res).toEqual([[5], [0, 1, 2], [3, 4, 6]]);
});

xtest('should group the people function return "[[1], [0, 5], [2, 3, 4]]"', () => {
    const arr = [2, 1, 3, 3, 3, 2];

    const res = f.groupThePeople(arr);

    expect(res).toEqual([[1], [0, 5], [2, 3, 4]]);
});
