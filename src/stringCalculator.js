const _ = require('lodash');

const stringCalculator = (input) => {
    if (_.isEmpty(input)) {
        return 0;
    }

    return null;
}

module.exports = stringCalculator;

const fn = async (argv) => {
    const input = _.get(argv, 0);
    return stringCalculator(input);
}

if (require.main === module) {
    fn(process.argv.slice(2)).then(() => process.exit(0))
}