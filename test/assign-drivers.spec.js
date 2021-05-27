const expect = require('expect.js');

const assignDrivers = require('../lib/assign-drivers');


describe('assignment algorithms', function () {

    it('test case 1', function () {
        const shipments = ['even', 'odd', 'even', 'odd'];
        const drivers = ['a', 'b', 'aaaa', 'bbb'];
        const result = assignDrivers(drivers, shipments);
        expect(result.score).to.be(16);
    });

    it('test case 2', function () {
        const shipments = ['123 main', '88 mulbury rd', '1 santa way', '999 first st'];
        const drivers = ['aaab', 'abbb', 'bbbb', 'aaaa'];
        const result = assignDrivers(drivers, shipments);
        expect(result.score).to.be(22.75);
    });

    it('test case 3', function () {
        const shipments = ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaaa', 'aaaaaaaaa'];
        const drivers = ['dave', 'markus omega', 'jolly bobity', 'sample name really long with lots of letters', 'hi', 'hio', 'bibbity'];
        const result = assignDrivers(drivers, shipments);
        expect(result.score).to.be(62.75);
    });

    it('test case 4', function () {
        const shipments = ['a', 'aa', 'aaa'];
        const drivers = ['dave', 'markus omega', 'sample name really long with lots of letters'];
        const result = assignDrivers(drivers, shipments);
        expect(result.score).to.be(38.5);
    });

    it('non even matrix', function () {
        const shipments = ['a', 'aa', 'aaa', 'bbbb', 'ccc', 'ddd'];
        const drivers = ['dave', 'markus omega', 'sample name really long with lots of letters'];
        const result = assignDrivers(drivers, shipments);
        expect(result.score).to.be(40.75);
    });

})