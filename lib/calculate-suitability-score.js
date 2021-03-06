const { vowelCount, consonantsCount } = require("./util/letters");
const gcd = require('./util/gcd');

const VOWEL_MULTIPLIER = 1.5;
const CONSONANT_MULTIPLIER = 1;
const GCD_MULTIPLIER = 1.5;
function calculateSuitabilityScore(driver, shipment) {
    let score = 0;
    if (shipment.length % 2 === 0) {
        score = vowelCount(driver) * VOWEL_MULTIPLIER;
    } else {
        score = consonantsCount(driver) * CONSONANT_MULTIPLIER;
    }
    if (gcd(shipment.length, driver.length) > 1) {
        score *= GCD_MULTIPLIER;
    }
    return score;
}

module.exports = calculateSuitabilityScore;