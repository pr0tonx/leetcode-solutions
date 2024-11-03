/*
https://leetcode.com/problems/find-common-elements-between-two-arrays/description/
 */

/*
Description:

You are given two integer arrays nums1 and nums2 of sizes n and m, respectively. Calculate the following values:
answer1 : the number of indices i such that nums1[i] exists in nums2.
answer2 : the number of indices i such that nums2[i] exists in nums1.
Return [answer1,answer2].

Constraints:

n == nums1.length
m == nums2.length
1 <= n, m <= 100
1 <= nums1[i], nums2[i] <= 100
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/*
Space complexity: O(n);
Time complexity: O(n);
 */

const findIntersectionValues = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const count1 = nums1.reduce((count, num) => count + (set2.has(num) ? 1 : 0), 0);
  const count2 = nums2.reduce((count, num) => count + (set1.has(num) ? 1 : 0), 0);

  return [count1, count2];
};

module.exports = {
  findIntersectionValues
}
