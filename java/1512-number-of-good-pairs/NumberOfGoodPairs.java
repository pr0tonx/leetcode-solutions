/*
https://leetcode.com/problems/number-of-good-pairs/description/
 */

/*
Description:

Given an array of integers nums, return the number of good pairs. A pair (i, j) is called good if nums[i] == nums[j]
and i < j.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/*
Space complexity: O(1)
Time complexity: O(n²)
 */

public class NumberOfGoodPairs {

    public static void main(String[] args) {
        int sample1 = numIdenticalPairs(new int[]{1, 2, 3, 1, 1, 3});
        int sample2 = numIdenticalPairs(new int[]{1, 1, 1, 1});
        int sample3 = numIdenticalPairs(new int[]{1, 2, 3});

        System.out.println(sample1);
        System.out.println(sample2);
        System.out.println(sample3);
    }

    public static int numIdenticalPairs(int[] nums) {
        int numGoodPairs = 0;

        for (int i = 0; i < nums.length; i++) {
            for (int j = 0; j < nums.length; j++) {
                if (nums[i] == nums[j] && i < j) numGoodPairs++;
            }
        }

        return numGoodPairs;
    }
}
