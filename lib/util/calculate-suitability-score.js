const { vowelCount, consonantsCount } = require("./letters");
const gcd = require('./gcd');

const VOWEL_MULTIPLIER = 1.5;
const CONSONANT_MULTIPLIER = 1;

function calculateSuitabilityScore(driver, shipment) {
    let score = 0;
    if (shipment.length % 2 === 0) {
        score = vowelCount(driver) * VOWEL_MULTIPLIER;
    } else {
        score = consonantsCount(driver) * CONSONANT_MULTIPLIER;
    }
    if (gcd(shipment.length, driver.length) > 1) {
        score *= 1.5;
    }
    return score;
}

module.exports = calculateSuitabilityScore;