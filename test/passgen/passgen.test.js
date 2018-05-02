const { expect } = require('chai');
const { Passgen } = require('../../passgen');

describe('Passgen', () => {
    let instance;

    beforeEach(() => {
        instance = new Passgen();
    });

    it('should be a class', () => {
        expect(instance).to.be.an('object');
        expect(instance).to.be.an.instanceof(Passgen);
    });

    it('should expose .withNumbers', () => {
        expect(instance.withNumbers).to.be.a('function');
    });

    it('should expose .withUppercase', () => {
        expect(instance.withUppercase).to.be.a('function');
    });

    it('should expose .withLowercase', () => {
        expect(instance.withLowercase).to.be.a('function');
    });

    it('should expose .withSpecial', () => {
        expect(instance.withSpecial).to.be.a('function');
    });

    it('should expose .withLength', () => {
        expect(instance.withLength).to.be.a('function');
    });

    it('should expose .generate', () => {
        expect(instance.generate).to.be.a('function');
    });

    describe('.withNumbers', () => {
        it('should return the instance', () => {
            const result = instance.withNumbers()
            expect(result).to.be.equal(instance);
        });
    });

    describe('.withUppercase', () => {
        it('should return the instance', () => {
            const result = instance.withUppercase()
            expect(result).to.be.equal(instance);
        });
    });

    describe('.withLowercase', () => {
        it('should return the instance', () => {
            const result = instance.withLowercase()
            expect(result).to.be.equal(instance);
        });
    });

    describe('.withSpecial', () => {
        it('should return the instance', () => {
            const result = instance.withSpecial()
            expect(result).to.be.equal(instance);
        });
    });

    describe('.withLength', () => {
        it('should return the instance', () => {
            const result = instance.withLength()
            expect(result).to.be.equal(instance);
        });
    });

    describe('.generate', () => {
        it('should return a string', () => {
            const result = instance.generate()
            expect(result).to.be.a('string');
        });
    });
});