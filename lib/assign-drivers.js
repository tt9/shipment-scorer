const calculateSuitabilityScoreMatrix = require('./calculate-suitability-score-matrix');
const munkres = require('munkres-js');

function assignDrivers(drivers, shipments) {

    const ssMatrix = calculateSuitabilityScoreMatrix(drivers, shipments);

    const costMatrix = munkres.make_cost_matrix(ssMatrix);

    const assignmentIndicies = munkres(costMatrix);

    const assignments = [];

    let score = 0;
    for (let i = 0; i < assignmentIndicies.length; i++) {
        const indexPair = assignmentIndicies[i];
        score += ssMatrix[indexPair[0]][indexPair[1]];
        assignments.push([drivers[indexPair[0]], shipments[indexPair[1]]]);
    }
    return {
        score,
        assignments
    }
}

module.exports = assignDrivers;
