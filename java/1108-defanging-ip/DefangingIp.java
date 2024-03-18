/*
https://leetcode.com/problems/defanging-an-ip-address/description/
 */

/*
Description:

Given a valid (IPv4) IP address, return a defanged version of that IP address. A defanged IP address replaces every
period "." with "[.]".
 */

/**
 * @param {string} address
 * @return {string}
 */

/*
Space complexity: O(1)
Time complexity: O(n)
 */

public class DefangingIp {

    public static void main(String[] args) {
        String sample1 = defangIPaddr("1.1.1.1");
        String sample2 = defangIPaddr("255.100.50.0");

        System.out.println(sample1);
        System.out.println(sample2);
    }

    public static String defangIPaddr(String address) {
        return address.replace(".", "[.]");
    }
}
