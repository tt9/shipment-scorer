const calculateSuitabilityScore = require('./calculate-suitability-score');

function calculateSuitabilityScoreMatrix(drivers, shipments) {

    const ssMatrix = [];

    // Create a matrix of sustainabilityScores
    // for each combination of a driver and a shipment
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