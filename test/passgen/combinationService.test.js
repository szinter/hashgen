const sinon  = require('sinon');
const { expect } = require('chai');
const { combinationService } = require('../../passgen');

describe('combinationService', () => {
    it('should be an object', () => {
        expect(combinationService).to.be.an('object');
    });

    it('should expose .genrateCombination', () => {
        expect(combinationService.generateCombination).to.be.a('function');
    });

    it('should expose .mixCombination', () => {
        expect(combinationService.mixCombination).to.be.a('function');
    });

    it('should expose .getPassFromCombination', () => {
        expect(combinationService.getPassFromCombination).to.be.a('function');
    });

    describe('.getPassFromCombination', () => {
        it('should return a string', () => {
            const combination = [];
            expect(combinationService.getPassFromCombination(combination)).to.be.a('string');
        });
    });

    describe('.mixCombination', () => {
        it('should return a string', () => {
            const combination = [];
            expect(combinationService.mixCombination(combination)).to.be.instanceof(Array);
        });

        it('should return an array with same values of original array', () => {
            const combination = [1, 2, 3, 4];

            const mixedCombination = combinationService.mixCombination(combination);
            
            expect(mixedCombination.sort()).to.be.deep.eql(combination.sort());
        });

        it('should return an array with same values of original array but mixed', () => {
            const combination = [1, 2, 3, 4];
            
            const mixedCombination = combinationService.mixCombination(combination);

            expect(mixedCombination).to.not.be.deep.eql(combination);
        });
    });

    describe('.genrateCombination', () => {
        it('should return an array', () => {
            const segments = [];

            const combination = combinationService.generateCombination(segments);

            expect(combination).to.be.instanceOf(Array);
        });

        it('should iterate through the combination segments and call them', () => {
            const segmentSpy1 = sinon.spy();
            const segmentSpy2 = sinon.spy();
            const segmentSpy3 = sinon.spy();
            const segmentSpy4 = sinon.spy();
            const segments = [segmentSpy1, segmentSpy2, segmentSpy3, segmentSpy4];

            combinationService.generateCombination(segments);

            expect(segmentSpy1.called).to.be.true;
            expect(segmentSpy2.called).to.be.true;
            expect(segmentSpy3.called).to.be.true;
            expect(segmentSpy4.called).to.be.true;
        });

        it('should include the result calling the segment', () => {
            const segmentResult = 1;
            const segmentStub = sinon.stub();
            segmentStub.returns(segmentResult);
            const segments = [segmentStub];

            const result = combinationService.generateCombination(segments);

            expect(result.indexOf(segmentResult)).to.be.above(-1);
        });
    });
}); 