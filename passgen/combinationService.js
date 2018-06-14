const shuffle = require('shuffle-array');
const deepEqual = require('fast-deep-equal');

function generateCombination(combinationSegments) {
    const combination = [];

    combinationSegments.map(segmentAccessor => {
        combination.push(segmentAccessor());
    });

    return combination;
}

function mixCombination(combination) {
    if (combination.length < 2) {
        return combination;
    }

    let shuffledCombination = combination.slice();

    while(deepEqual(combination, shuffledCombination)) {
        shuffle(shuffledCombination);
    }

    return shuffle(shuffledCombination);
}

function getPassFromCombination(combination = []) {
    return combination.join('');
}

module.exports = {
    generateCombination: generateCombination,
    mixCombination: mixCombination,
    getPassFromCombination: getPassFromCombination
}