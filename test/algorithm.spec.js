const expect = require('expect.js');
const permuteAssignment = require('../lib/algo/permute-assignment');
const hungarianAssignment = require('../lib/algo/hungarian-assignment');


describe('assignment algorithms', function () {

    it('test case 1', function () {

        const shipments = ['even', 'odd', 'even', 'odd'];
        const drivers = ['a', 'b', 'aaaa', 'bbb'];

        const permuteResult = permuteAssignment(drivers, shipments);
        const hungarianResult = hungarianAssignment(drivers, shipments);
        expect(permuteResult.score).to.be(16);
        expect(hungarianResult.score).to.be(permuteResult.score)
    });

    it('test case 2', function () {

        const shipments = ['123 main', '88 mulbury rd', '1 santa way', '999 first st'];
        const drivers = ['aaab', 'abbb', 'bbbb', 'aaaa'];

        const permuteResult = permuteAssignment(drivers, shipments);
        const hungarianResult = hungarianAssignment(drivers, shipments);
        expect(permuteResult.score).to.be(22.75);
        expect(hungarianResult.score).to.be(permuteResult.score)
    });

    it('test case 3', function () {

        const shipments = ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaaa', 'aaaaaaaaa'];
        const drivers = ['dave', 'markus omega', 'jolly bobity', 'sample name really long with lots of letters', 'hi', 'hio', 'bibbity'];

        const permuteResult = permuteAssignment(drivers, shipments);
        const hungarianResult = hungarianAssignment(drivers, shipments);
        expect(hungarianResult.score).to.be(permuteResult.score)
    });

    it('test case 4', function () {

        const shipments = ['a', 'aa', 'aaa'];
        const drivers = ['dave', 'markus omega', 'sample name really long with lots of letters'];

        const permuteResult = permuteAssignment(drivers, shipments);
        const hungarianResult = hungarianAssignment(drivers, shipments);
        expect(hungarianResult.score).to.be(permuteResult.score)

    });

})