class SegmentProviderFactory {
    constructor() {
        if (this.constructor == SegmentProviderFactory) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    create() {

    }
}

module.exports = SegmentProviderFactory;