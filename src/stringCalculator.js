const _ = require('lodash');

const stringCalculator = (input) => {
    if (_.isEmpty(input)) {
        return 0;
    }

    let cleanedInput = _.replace(input, /\n/g, '');

    let delimiter = ',';
    if (_.startsWith(cleanedInput, '//')){
        cleanedInput = _.replace(cleanedInput, /^\/\//, '');
        delimiter = _.head(cleanedInput);
        cleanedInput = _.join(_.tail(cleanedInput), '');
    }
    const inputArray = _.split(cleanedInput, delimiter);
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