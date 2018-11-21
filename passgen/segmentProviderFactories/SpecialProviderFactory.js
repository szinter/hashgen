const {SegmentProviderFactory} = require('./segmentProviderFactory');
const segments = require('./segments');

class SpecialProviderFactory extends SegmentProviderFactory {
    constructor() {
        super();
        this.setOfReturnables = segments.SPECIALS;
    }
}

module.exports = SpecialProviderFactory;