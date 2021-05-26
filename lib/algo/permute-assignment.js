const calculateSuitabilityScoreMatrix = require('../util/calculate-suitability-score-matrix');
const swap = require('../util/swap');

/**
 * Makes use of an exhaustive search through the entire set of permutations
 * of drivers and shipments to determine an exactly correct answer
 * @param {Array<Driver>} drivers 
 * @param {Array<Shipment>} shipments 
 * @returns {{score: number, assignments: Array<any>}}
 */
function permuteAssignment(drivers, shipments) {

    // Matrix of suitability scores
    const ssMatrix = calculateSuitabilityScoreMatrix(drivers, shipments);

    // As we permute through the available options
    // we will use these two variables to track our best 
    // cases.
    let maxScore = 0;
    let optimalShippingOrder = null;

    function sumTotalSuitabilityScore(shipmentEvalOrder) {
        let sum = 0;
        for (let i = 0; i < shipmentEvalOrder.length; i++) {
            sum += ssMatrix[i][shipmentEvalOrder[i]];
        }
        return sum;
    }

    function evaluateShippingPermutations(shipmentEvalArr, lowIndex, highIndex) {

        // base case
        if (lowIndex === highIndex) {
            const score = sumTotalSuitabilityScore(shipmentEvalArr);
            if (score > maxScore) {
                optimalShippingOrder = [...shipmentEvalArr];
                maxScore = score;
            }
            return;
        }

        for (let i = lowIndex; i <= highIndex; i++) {
            swap(shipmentEvalArr, lowIndex, i);
            evaluateShippingPermutations(shipmentEvalArr, lowIndex + 1, highIndex);
            swap(shipmentEvalArr, lowIndex, i);
        }
    }

    evaluateShippingPermutations(shipments.map((_, index) => index), 0, shipments.length - 1);

    const assignments = drivers.map((driver, index) => {
        const shipment = shipments[optimalShippingOrder[index]];
        return [driver, shipment];
    })

    return {
        score: maxScore,
        assignments
    }
}

module.exports = permuteAssignment;
