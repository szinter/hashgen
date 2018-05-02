const { generateCombination, mixCombination, getPassFromCombination } = require('./combinationService');

const combinationSegments = [];

class Passgen {
    withNumbers() {
        return this;
    }

    withUppercase() {
        return this;
    }

    withLowercase() {
        return this;
    }

    withSpecial() {
        return this;
    }

    withLength() {
        return this;
    }

    generate() {
        const combination = generateCombination(combinationSegments);
        const mixedCombination = mixCombination(combination);

        const pass = getPassFromCombination(mixedCombination);

        return pass;
    }
};

module.exports = Passgen;