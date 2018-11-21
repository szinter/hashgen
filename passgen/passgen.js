const { generateCombination, mixCombination, getPassFromCombination } = require('./combinationService');
const { NumberProviderFactory, UpperCaseProviderFactory, SpecialProviderFactory, LowerCaseProviderFactory } = require('./segmentProviderFactories');

const combinationSegments = [];
const numberProviderFactory = new NumberProviderFactory();
const upperCaseProviderFactory = new UpperCaseProviderFactory();
const lowerCaseProviderFactory = new LowerCaseProviderFactory();
const specialProviderFactory = new SpecialProviderFactory();

class Passgen {
    withNumbers(count) {
        for (let i = 0; i < count; i++) {
            combinationSegments.push(numberProviderFactory.create())
        }

        return this;
    }

    withUppercase(count) {
        for (let i = 0; i < count; i++) {
            combinationSegments.push(upperCaseProviderFactory.create())
        }

        return this;
    }

    withLowercase(count) {
        for (let i = 0; i < count; i++) {
            combinationSegments.push(lowerCaseProviderFactory.create())
        }
        return this;
    }

    withSpecial(count) {
        for (let i = 0; i < count; i++) {
            combinationSegments.push(specialProviderFactory.create())
        }

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