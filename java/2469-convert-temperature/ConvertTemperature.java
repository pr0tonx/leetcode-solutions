/*
https://leetcode.com/problems/convert-the-temperature/description/
 */

/*
Description:

You are given a non-negative floating point number rounded to two decimal places celsius, that denotes the temperature
in Celsius. You should convert Celsius into Kelvin and Fahrenheit and return it as an array ans = [kelvin, fahrenheit].
Return the array ans. Answers within 10-5 of the actual answer will be accepted.
 */

/**
 * @param {number} celsius
 * @return {number[]}
 */

/*
Space complexity: O(1)
Time complexity: O(1)
 */

public class ConvertTemperature {

    public static void main(String[] args) {
        double[] sample1 = convertTemperature(36.50);
        double[] sample2 = convertTemperature(122.11);

        for (double i : sample1) {
            System.out.println(i);
        }

        for (double i : sample2) {
            System.out.println(i);
        }
    }

    public static double[] convertTemperature(double celsius) {
        double kelvin = celsius + (273.15);
        double fahrenheit = (celsius * 1.80) + 32.00;

        return new double[]{kelvin, fahrenheit};
    }
}
