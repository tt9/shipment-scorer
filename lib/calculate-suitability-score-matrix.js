const calculateSuitabilityScore = require('./calculate-suitability-score');

function calculateSuitabilityScoreMatrix(drivers, shipments) {

    const ssMatrix = [];

    drivers.forEach((driver) => {
        const driverSuitabilityScores = [];
        shipments.forEach((shipment) => {
            const score = calculateSuitabilityScore(driver, shipment);
            driverSuitabilityScores.push(score);
        })
        ssMatrix.push(driverSuitabilityScores);
    });

    return ssMatrix;
}

module.exports = calculateSuitabilityScoreMatrix;