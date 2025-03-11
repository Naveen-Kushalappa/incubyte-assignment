const assert = require('assert');
const stringCalculator = require('../src/stringCalculator');
const _ = require("lodash");

describe('Test suite',  () => {
    describe('Health check',  () => {
        it('Check health of the test suite', () => {
            assert.equal(true, true);
        });
    });

    describe('String calculator' , () => {
        it('Check string calculator for empty input', () => {
            const stringInput = "";
            const stringCalculatorResponse = stringCalculator(stringInput);
            assert.equal(stringCalculatorResponse, 0);
        });

        it('Check string calculator for single input', () => {
            const stringInput = '1';
            const stringCalculatorResponse = stringCalculator(stringInput);
            assert.equal(stringCalculatorResponse, 1);
        });


        it('Check string calculator for simple input', () => {
            const stringInput = '1,5';
            const stringCalculatorResponse = stringCalculator(stringInput);
            assert.equal(stringCalculatorResponse, 6);
        })

        it('Check for any size of input ', () => {
            const stringInput = _.times(10000000, () => _.random(1000, 5000)).join(',');
            const stringCalculatorResponse = stringCalculator(stringInput);
            assert.ok(stringCalculatorResponse); // Ensures result is truthy
        });

        it('Check if new lines are accepted ', () => {
            const stringInput = '1,\n3,5\n';
            const stringCalculatorResponse = stringCalculator(stringInput);
            assert.equal(stringCalculatorResponse, 9);
        });

        it('Check if custom delimiter is accepted ', () => {
            const stringInput = '//;\n1;\n3;5\n';
            const stringCalculatorResponse = stringCalculator(stringInput);
            assert.equal(stringCalculatorResponse, 9);
        });

        it('Check if negative numbers are handled', () => {
            const stringInput = '1,-2,5,-9';
            try {
                const stringCalculatorResponse = stringCalculator(stringInput);
                assert.fail(stringCalculatorResponse); // Fail if there was no exception raised
            } catch (err) {
                assert.ok(err instanceof Error); // Passes if err is an instance of Error
                assert.equal(err.message, 'negative numbers not allowed -2,-9'); // Ensures correct message
            }
        });
    })

});