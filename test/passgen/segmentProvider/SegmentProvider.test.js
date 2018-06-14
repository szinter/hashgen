const sinon  = require('sinon');
const { expect } = require('chai');
const { SegmentProvider } = require('../../../passgen/segmentProvider');

describe('SegmentProvider', () => {
    let instance;

    it('should expose .getSegment', () => {
        instance = new SegmentProvider();

        expect(instance.getSegment).to.be.a('function');
    })

    describe('.getSegment', () => {
        it('should return the segment that passed to the constructor', () => {
            const segment = 'A';
            instance = new SegmentProvider(segment);

            expect(instance.getSegment()).to.equal(segment);
        });
    })
})