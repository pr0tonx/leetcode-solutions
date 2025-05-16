/*
https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/description/
 */

/*
Description:

You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane. Multiple
points can have the same coordinates.

You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a
radius of rj.

For each query queries[j], compute the number of points inside the jth circle. Points on the border of the circle are
considered inside.

Return an array answer, where answer[j] is the answer to the jth query.

Constraints:

1 <= points.length <= 500
points[i].length == 2
0 <= xi, yi <= 500
1 <= queries.length <= 500
queries[j].length == 3
0 <= xj, yj <= 500
1 <= rj <= 500
All coordinates are integers.
 */

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */

/*
Space complexity: O(n);
Time complexity: O(n * m);
 */

const countPoints = function (points, queries) {
  const arr = [];
  for (let i = 0; i < queries.length; i++) {

    let count = 0;
    for (let j = 0; j < points.length; j++) {
      const x = Math.abs(queries[i][0] - points[j][0]);
      const y = Math.abs(queries[i][1] - points[j][1]);
      const r = Math.pow(x, 2) + Math.pow(y, 2);

      if (r <= Math.pow(queries[i][2], 2)) count++;
    }

    arr.push(count);
  }

  return arr;
};

module.exports = {
  countPoints
}