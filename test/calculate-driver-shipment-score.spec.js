const expect = require('expect.js');
const calculateDriverShipmentScore = require('../lib/util/calculate-suitability-score');


describe('calculateDriverSuitabilityScore', function () {
    it('should produce the expected calculations', function () {

        // driver / shipment / expected
        const testCases = [
            ['abcdfgh', 'even', 1.5],
            ['faeeiiiooouuu', 'odd', 1],
            ['aeiou', 'EvenEven', 7.5],
            ['farrtqy', 'OddOddOdd', 6],
            ['aeiou', 'gcdAndEven', 11.25],
            ['qqq', 'gcdAndOdd', 4.5],
            ['bob barker', '123 main st', 6],
            ['bob barkers', '123 main st', 10.5],
            ['bibbity', 'aaaaaaa', 7.5],
            ['sample name really long with lots of letters', 'aaaa', 27],
            ['sample name really long with lots of letters', 'aaa', 25]
        ];

        for (let testCase of testCases) {
            const score = calculateDriverShipmentScore(testCase[0], testCase[1]);
            expect(score).to.be(testCase[2]);
        }

    });
});