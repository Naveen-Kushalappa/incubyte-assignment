const _ = require('lodash');

const stringCalculator = (input) => {
    if (_.isEmpty(input)) {
        return 0;
    }

    const cleanedInput = _.replace(input, /\n/g, '');
    const inputArray = _.split(cleanedInput, ',');

    return _.reduce(inputArray, (sum, value) => {
        return sum + parseInt(value);
    }, 0);
}

module.exports = stringCalculator;

const fn = async (argv) => {
    const input = _.get(argv, 0);
    const result = stringCalculator(input);
    console.log("Result", result);
    return result;
}

if (require.main === module) {
    fn(process.argv.slice(2)).then(() => process.exit(0))
}