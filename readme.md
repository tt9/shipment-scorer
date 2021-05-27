# Super Secret Shipment Scorer

(SSSS)
![Image of a snake](./img/snake.png)

## Description

Utilize secret data algorithm to assign drivers to shipments and optimize total suitability score.

### How it works

By using the top secret algorithm, we can create a suitability score matrix between drivers and shipments, which in essence is a profit assignment matrix.

For the calculation, we invert the profit matrix into a cost matrix, then we can apply the Kuhn-Munkres assignment algorithm to maximize sutability score across the shipment.

## Usage

### Requirements

NodeJs 14.5+ is required to run the application. You can install it from [their website](https://nodejs.org/en/)

### First time setup

After pulling down the repository for the first time, at the root of the project run 
```
npm install
```
to install all necessary dependencies.

### Executing the program

To execute the program, run the following command at the root of the project:
```
node shipment-scorer.js <<shipments-file>> <<drivers-file>>
```
replacing `<<shipments-file>>` with the path to your shipping destinations file and `<<drivers-file>>` with the path to your driver names file.

### Testing the program

At the root of the project you can run
```
npm run test
```
the application uses the mocha test framework.

All tests, as wells as a pair of test input files can be found in the test/ directory.

## Troubleshooting

Make sure you are passing the shipment file as the first argument and the driver file as the second argument.