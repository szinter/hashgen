const {SegmentProviderFactory} = require('./segmentProviderFactory');
const segments = require('./segments');

class UpperCaseProviderFactory extends SegmentProviderFactory {
    constructor() {
        super();
        this.setOfReturnables = segments.UPPERCASES;
    }
}

module.exports = UpperCaseProviderFactory;