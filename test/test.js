const assert = require('assert');
const stringCalculator = require('../src/stringCalculator');

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
    })

});