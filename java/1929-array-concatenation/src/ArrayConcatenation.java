/*
https://leetcode.com/problems/concatenation-of-array/description
 */

/*
Description:

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and
ans[i + n] == nums[i] for 0 <= i < n (0-indexed). Specifically, ans is the concatenation of two nums arrays.
Return the array ans.
 */

import java.lang.reflect.Array;
import java.util.ArrayList;

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
Space complexity: O(n)
Time complexity: O(n)
 */

public class ArrayConcatenation {

    public static void main(String[] args) {
        int[] arr = getConcatenation(new int[]{1, 2, 1});

        for (Integer i : arr) {
            System.out.println(i);
        }
    }

    public static int[] getConcatenation(int[] nums) {
        int size = nums.length * 2;
        int[] arr = new int[size];

        for (int i = 0; i < nums.length; i++) {
            arr[i] = nums[i];
            arr[i + nums.length] = nums[i];
        }

        return arr;
    }
}
