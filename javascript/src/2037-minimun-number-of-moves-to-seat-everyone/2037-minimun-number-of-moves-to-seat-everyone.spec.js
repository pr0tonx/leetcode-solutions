const f = require('./2037-minimun-number-of-moves-to-seat-everyone');

test('should min moves to seat function returns "4"', () => {
  const seats = [3, 1, 5];
  const students = [2, 7, 4];

  const res = f.minMovesToSeat(seats, students);

  expect(res).toBe(4);
});

test('should min moves to seat function returns "7"', () => {
  const seats = [4, 1, 5, 9];
  const students = [1, 3, 2, 6];

  const res = f.minMovesToSeat(seats, students);

  expect(res).toBe(7);
});

test('should min moves to seat function returns "4"', () => {
  const seats = [2, 2, 6, 6];
  const students = [1, 3, 2, 6];

  const res = f.minMovesToSeat(seats, students);

  expect(res).toBe(4);
});

test('should min moves to seat function returns "0"', () => {
  const seats = [1];
  const students = [1];

  const res = f.minMovesToSeat(seats, students);

  expect(res).toBe(0);
});

test('should min moves to seat function returns "99"', () => {
  const seats = [1];
  const students = [100];

  const res = f.minMovesToSeat(seats, students);

  expect(res).toBe(99);
});

test('should min moves to seat function returns "0"', () => {
  const seats = [50, 50, 50];
  const students = [50, 50, 50];

  const res = f.minMovesToSeat(seats, students);

  expect(res).toBe(0);
});

test('should min moves to seat function returns "0"', () => {
  const seats = [1, 2, 3];
  const students = [3, 2, 1];

  const res = f.minMovesToSeat(seats, students);

  expect(res).toBe(0);
});

test('should min moves to seat function returns "3"', () => {
  const seats = [1, 3, 5];
  const students = [2, 4, 6];

  const res = f.minMovesToSeat(seats, students);

  expect(res).toBe(3);
});

test('should min moves to seat function returns "225"', () => {
  const seats = [10, 20, 30];
  const students = [90, 95, 100];

  const res = f.minMovesToSeat(seats, students);

  expect(res).toBe(225);
});

test('should min moves to seat function returns "0"', () => {
  const seats = Array.from({length: 100}, (_, i) => i + 1);
  const students = Array.from({length: 100}, (_, i) => i + 1);

  const res = f.minMovesToSeat(seats, students);

  expect(res).toBe(0);
});

test('should min moves to seat function returns "0"', () => {
  const seats = Array.from({length: 100}, (_, i) => i + 1);
  const students = Array.from({length: 100}, (_, i) => 100 - i);

  const res = f.minMovesToSeat(seats, students);

  expect(res).toBe(0);
});

test('should min moves to seat function returns "0"', () => {
  const seats = Array.from({length: 100}, (_, i) => (i % 10) + 1);
  const students = Array.from({length: 100}, (_, i) => ((i + 5) % 10) + 1);

  const res = f.minMovesToSeat(seats, students);

  expect(res).toBe(0);
});

test('should min moves to seat function returns "9900"', () => {
  const seats = Array.from({length: 100}, () => 1);
  const students = Array.from({length: 100}, () => 100);

  const res = f.minMovesToSeat(seats, students);

  expect(res).toBe(9900);
});
