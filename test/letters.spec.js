
const expect = require('expect.js');
const { vowelCount, consonantsCount } = require('../lib/util/letters');


describe('vowelCount', function () {
    it('should output the correct number of vowels in all test cases', function () {

        const testCases = [
            ['aeiou', 5],
            ['aeiouy', 5],
            ['aaaaa', 5],
            ['bbbbb', 0],
            ['abcde', 2],
            ['abcdeau', 4],
            ['a', 1],
            ['e', 1],
            ['i', 1],
            ['o', 1],
            ['u', 1],
            ['y', 0],
            ['w', 0],
        ];

        for (let testCase of testCases) {
            const score = vowelCount(testCase[0]);
            expect(score).to.be(testCase[1]);
        }

    });
});

describe('consonantsCount', function () {

    it('should output the correct number of consonants in all test cases', function () {

        const testCases = [
            ['aeiou', 0],
            ['aeiouy', 1],
            ['aaaaa', 0],
            ['bbbbb', 5],
            ['abcde', 3],
            ['abcdeau', 3],
            ['a', 0],
            ['e', 0],
            ['i', 0],
            ['o', 0],
            ['u', 0],
            ['y', 1],
            ['w', 1],
        ];

        for (let testCase of testCases) {
            const score = consonantsCount(testCase[0]);
            expect(score).to.be(testCase[1]);
        }

    });
})