const sinon  = require('sinon');
const { expect } = require('chai');
const { SegmentProviderFactory } = require('../../../passgen/segmentProviderFactories');

describe('SegmentProviderFactory', () => {

    it('should be an abstract class', () => {
        expect(() => new SegmentProviderFactory()).to.throw();
    });

    it('should define .create for descendants', () => {
        const Child = class Child extends SegmentProviderFactory {};
        
        const instance = new Child();

        expect(instance.create).to.be.a('function');        
    });
});