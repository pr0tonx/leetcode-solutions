/*
https://leetcode.com/problems/final-value-of-variable-after-performing-operations/description/
 */

/*
Description:

There is a programming language with only four operations and one variable X:
++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0. Given an array of strings operations containing a list of operations, return the final
value of X after performing all the operations.
 */

import java.sql.Array;

/**
 * @param {string[]} operations
 * @return {number}
 */

/*
Space complexity: O(1)
Time complexity: O(n)
 */

public class FindValueAfterOperations {

    public static void main(String[] args) {
        int sample1 = finalValueAfterOperations(new String[]{"--X", "X++", "X++"});
        int sample2 = finalValueAfterOperations(new String[]{"++X", "++X", "X++"});
        int sample3 = finalValueAfterOperations(new String[]{"X++", "++X", "--X", "X--"});

        System.out.println(sample1);
        System.out.println(sample2);
        System.out.println(sample3);
    }

    public static int finalValueAfterOperations(String[] operations) {
        int x = 0;
        for (String op : operations) {
            if (op.equals("--X") || op.equals("X--")) x--;
            else if (op.equals("++X") || op.equals("X++")) x++;
        }

        return x;
    }
}
