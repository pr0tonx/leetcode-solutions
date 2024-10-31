const f = require('./2418-sort-the-people');

test('should sort people function returns "[Mary, Emma, John]"', () => {
  const names = ['Mary', 'John', 'Emma'];
  const heights = [180, 165, 170];

  const res = f.sortPeople(names, heights);

  expect(res).toEqual(['Mary', 'Emma', 'John']);
});

test('should sort people function returns "[Bob, Alice, Bob]"', () => {
  const names = ['Alice', 'Bob', 'Bob'];
  const heights = [155, 185, 150];

  const res = f.sortPeople(names, heights);

  expect(res).toEqual(['Bob', 'Alice', 'Bob']);
});

test('should sort people function returns "[Solo]"', () => {
  const names = ['Solo'];
  const heights = [100];

  const res = f.sortPeople(names, heights);

  expect(res).toEqual(['Solo']);
});

test('should sort people function returns "[Tall, Medium, Short]"', () => {
  const names = ['Tall', 'Medium', 'Short'];
  const heights = [200, 150, 100];

  const res = f.sortPeople(names, heights);

  expect(res).toEqual(['Tall', 'Medium', 'Short']);
});

test('should sort people function returns "[Tall, Medium, Short]"', () => {
  const names = ['Short', 'Medium', 'Tall'];
  const heights = [100, 150, 200]

  const res = f.sortPeople(names, heights);

  expect(res).toEqual(['Tall', 'Medium', 'Short']);
});

test('should sort people function returns "[Bob, David, Alice, Charlie]"', () => {
  const names = ['Alice', 'Bob', 'Charlie', 'David'];
  const heights = [160, 190, 150, 180];

  const res = f.sortPeople(names, heights);

  expect(res).toEqual(['Bob', 'David', 'Alice', 'Charlie']);
});

test('should sort people function returns "[PersonB, PersonD, PersonC, PersonA]"', () => {
  const names = ['PersonA', 'PersonB', 'PersonC', 'PersonD'];
  const heights = [10, 500, 300, 400];

  const res = f.sortPeople(names, heights);

  expect(res).toEqual(['PersonB', 'PersonD', 'PersonC', 'PersonA']);
});

test('should sort people function returns "[Anna, Max, Sam]"', () => {
  const names = ['Sam', 'Max', 'Anna'];
  const heights = [101, 102, 103];

  const res = f.sortPeople(names, heights);

  expect(res).toEqual(['Anna', 'Max', 'Sam']);
});

test('should sort people function returns "[Max, Mid, Min]"', () => {
  const names = ['Min', 'Mid', 'Max'];
  const heights = [1, 50000, 100000];

  const res = f.sortPeople(names, heights);

  expect(res).toEqual(['Max', 'Mid', 'Min']);
});

test('should sort people function returns "[LongerName, Short, X]"', () => {
  const names = ['X', 'LongerName', 'Short'];
  const heights = [150, 200, 175];

  const res = f.sortPeople(names, heights);

  expect(res).toEqual(['LongerName', 'Short', 'X']);
});

