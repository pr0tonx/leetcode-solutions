/*
https://leetcode.com/problems/jewels-and-stones/description/
 */

/*
Description:

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you
have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also
jewels.
Letters are case-sensitive, so "a" is considered a different type of stone from "A".
 */

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

/*
Space complexity: O(1)
Time complexity: O(n)
 */

import java.util.HashMap;
import java.util.Map;

public class JewelsAndStones {

    public static void main(String[] args) {
        int sample1 = numJewelsInStones("aA", "aAAbbbb");
        int sample2 = numJewelsInStones("z", "ZZ");

        System.out.println(sample1);
        System.out.println(sample2);
    }

    public static int numJewelsInStones(String jewels, String stones) {
        Map<Character, Integer> stoneCount = new HashMap<>();

        for (char jewel : jewels.toCharArray()) {
            stoneCount.put(jewel, 0);
        }

        for (char stone : stones.toCharArray()) {
            if (stoneCount.containsKey(stone)) {
                stoneCount.put(stone, stoneCount.get(stone) + 1);
            }
        }

        int jewelsFound = 0;
        for (int count : stoneCount.values()) {
            jewelsFound += count;
        }

        return jewelsFound;
    }
}
