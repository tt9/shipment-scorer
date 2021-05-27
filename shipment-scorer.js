const fs = require('fs/promises');
const path = require('path');
const assignDrivers = require('./lib/assign-drivers');

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

    // eslint-disable-next-line no-unused-vars
    const [$0, $1, shipments, drivers] = process.argv;

    if (!shipments || !drivers) {
        console.error("format is <<path to shipments file>> <<path to drivers file>>");
        return 1;
    }
    const driversFile = path.isAbsolute(drivers) ? drivers : path.join(__dirname, drivers);
    const shipmentsFile = path.isAbsolute(shipments) ? shipments : path.join(__dirname, shipments);

    const { driversList, shipmentsList } = await readInputFiles(driversFile, shipmentsFile);

    let result = assignDrivers(driversList, shipmentsList);

    console.log(`Shipping Assignments: `);
    for (let i = 0; i < result.assignments.length; i++) {
        const assignment = result.assignments[i];
        console.log(`${assignment[0]}: ${assignment[1]}`);
    }
    console.log(`
    ---
    `);
    console.log(`Maximum Suitability Score: ${result.score}`);
}

run();