let returnable;

class SegmentProvider {
    constructor(segment) {
        returnable = segment;
    }

    getSegment() {
        return returnable;
    }
}

module.exports = SegmentProvider;