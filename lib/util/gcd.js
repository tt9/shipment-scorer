/**
 * Greatest Common Divisor function
 * @param {number} a 
 * @param {number} b 
 * @returns Greatest Common Divisor
 */
function gcd(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

module.exports = gcd;