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
            const string = '1';
            const stringCalculatorResponse = stringCalculator(string);
            assert.equal(stringCalculatorResponse, 0);
        });

        it('Check string calculator for single input', () => {
            const string = '1';
            const stringCalculatorResponse = stringCalculator(string);
            assert.equal(stringCalculatorResponse, 1);
        });


        it('Check string calculator for simple input', () => {
            const string = '1,5';
            const stringCalculatorResponse = stringCalculator(string);
            assert.equal(stringCalculatorResponse, 6);
        })
    })

});