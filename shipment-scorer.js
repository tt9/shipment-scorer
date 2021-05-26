const fs = require('fs/promises');
const path = require('path');
const yargs = require('yargs');

const permuteAssignment = require('./lib/algo/permute-assignment');
const hungarianAssigment = require('./lib/algo/hungarian-assignment');


async function readInputFiles(driversFilePath, shipmentsFilePath) {
    const driverData = await fs.readFile(driversFilePath)
    const shipmentData = await fs.readFile(shipmentsFilePath);

    const driversList = driverData.toString()
        .split('\n')
        .filter(x => !!x);
    const shipmentsList = shipmentData.toString()
        .split('\n')
        .filter(x => !!x);

    return {
        driversList,
        shipmentsList
    };
}

async function run() {

    const argv = yargs
        .option('method', {
            alias: 'm',
            description: 'calculation method',
            type: 'string',
            default: 'hungarian'
        })
        .option('drivers', {
            alias: 'd',
            description: 'path to drivers file',
            type: 'string',
            demandOption: true
        })
        .option('shipments', {
            alias: 's',
            description: 'path to shipments file',
            type: 'string',
            demandOption: true
        })
        .help()
        .alias('help', 'h')
        .argv;


    const { drivers, shipments } = argv;
    let heuristic = argv.method || 'hungarian';

    const driversFile = path.join(__dirname, drivers);
    const shipmentsFile = path.join(__dirname, shipments);

    const { driversList, shipmentsList } = await readInputFiles(driversFile, shipmentsFile);

    let result;
    switch (heuristic) {
        case 'permute':
            result = permuteAssignment(driversList, shipmentsList);
            break;
        case 'hungarian':
            result = hungarianAssigment(driversList, shipmentsList);
            break;
        default:
            console.error('Heuristic must be one of "permute", "hungarian');
            return 1;
    }


    console.log(`Shipping Assignments: `);
    for (let i = 0; i < result.assignments.length; i++) {
        const assignment = result.assignments[i];
        console.log(`${assignment[0]}: ${assignment[1]}`);
    }
    console.log(`
    ---
    `);
    console.log(`Maximum Suitability Score: ${result.score}`);
    console.log(`Method used: ${heuristic}.`);

}

run();