const shuffle = require('shuffle-array');
const deepEqual = require('fast-deep-equal');

function generateCombination(combinationSegments) {
    const combination = [];

    for (let i = 0;i < combinationSegments.length; i++) {
        combination.push(combinationSegments[i].getSegment());
    }

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
    const shuffled = shuffle(shuffledCombination);
    return shuffled;
}

function getPassFromCombination(combination = []) {
    const conbinationnn = combination.join('');
    return conbinationnn;
}

module.exports = {
    generateCombination: generateCombination,
    mixCombination: mixCombination,
    getPassFromCombination: getPassFromCombination
}