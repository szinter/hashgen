const shuffle = require('shuffle-array');

function generateCombination(combinationSegments) {
    const combination = [];

    combinationSegments.map(segment => {
        combination.push(segment());
    });

    return combination;
}

function mixCombination(combination) {
    return shuffle(combination.slice());
}

function getPassFromCombination(combination = []) {
    return combination.join('');
}

module.exports = {
    generateCombination: generateCombination,
    mixCombination: mixCombination,
    getPassFromCombination: getPassFromCombination
}