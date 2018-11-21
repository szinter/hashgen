const {SegmentProviderFactory} = require('./segmentProviderFactory');
const segments = require('./segments');

class NumberProviderFactory extends SegmentProviderFactory {
    constructor() {
        super();
        this.setOfReturnables = segments.NUMBERS;
    }
}

module.exports = NumberProviderFactory;