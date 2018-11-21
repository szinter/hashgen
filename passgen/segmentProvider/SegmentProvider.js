class SegmentProvider {
    constructor(segment) {
        this.returnable = segment;
    }

    getSegment() {
        return this.returnable;
    }
}

module.exports = SegmentProvider;