const {SegmentProvider} = require('../segmentProvider');

class SegmentProviderFactory {
    constructor() {
        if (this.constructor == SegmentProviderFactory) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    create() {
        const index = Math.round(Math.random() * this.setOfReturnables.length - 1);
        const segment = this.setOfReturnables[index];
        return new SegmentProvider(segment);
    }
}

module.exports = {
    SegmentProviderFactory
}