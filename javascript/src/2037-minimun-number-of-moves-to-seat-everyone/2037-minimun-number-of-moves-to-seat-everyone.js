/*
https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/description/
 */

/*
Description:

There are n availabe seats and n students standing in a room. You are given an array seats of length n, where seats[i]
is the position of the ith seat. You are also given the array students of length n, where students[j] is the position
of the jth student.
You may perform the following move any number of times:
Increase or decrease the position of the ith student by 1 (i.e., moving the ith student from position x to x + 1 or
x - 1)
Return the minimum number of moves required to move each student to a seat such that no two students are in the same seat.
Note that there may be multiple seats or students in the same position at the beginning.

Constraints:

n == seats.length == students.length
1 <= n <= 100
1 <= seats[i], students[j] <= 100
 */

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */

/*
Space complexity: O(1)
Time complexity: O(nlogn)
 */

const minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  let moves = 0;
  for (let i = 0; i < students.length; i++) moves += Math.abs(students[i] - seats[i]);

  return moves;
};

module.exports = {
  minMovesToSeat
}