const {SegmentProviderFactory} = require('./segmentProviderFactory');
const segments = require('./segments');

class LowerCaseProviderFactory extends SegmentProviderFactory {
    constructor() {
        super();
        this.setOfReturnables = segments.LOWERCASES;
    }
}

module.exports = LowerCaseProviderFactory;