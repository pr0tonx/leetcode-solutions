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
Space complexity: O(n)
Time complexity: O(n)
 */

const defangIPaddr = function (address) {
    return address.split('').map(x => x.replace('.', '[.]')).join('');
};

module.exports = {
    defangIPaddr
}