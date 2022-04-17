let mathEnforcer = require('../04.mathEnforser');
let { expect } = require('chai');

describe('Math-forcer', () => {
    
    describe('addFive', () => {  

        it('Should return undefined when parameter is not a number', () => {
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
            expect(mathEnforcer.addFive('3')).to.equal(undefined);
        });
        it('Should return num plus five when parameter is number', () => {
            expect(mathEnforcer.addFive(10)).to.equal(15);
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
            expect(mathEnforcer.addFive(4.2)).to.closeTo(9.2, 0.01);
        })
    });

    describe('subtractTen', () => {
       
        it('Should return undefined when parameter is not a number', () => {
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
            expect(mathEnforcer.subtractTen('5')).to.equal(undefined);
        });
        it('Should return number minus ten when parameter is number', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(4.2)).to.closeTo(-5.8, 0.01);
            
        });
    });

    describe('sum', () => {

        it('Should return undefined when first parameter is not a number', () => {
            expect(mathEnforcer.sum(undefined, 5)).to.equal(undefined);
            expect(mathEnforcer.sum(null, 5)).to.equal(undefined);
            expect(mathEnforcer.sum('20', 5)).to.equal(undefined);

        });
        it('Should return undefined when second parameter is not a number', () => {
            expect(mathEnforcer.sum(5, undefined)).to.equal(undefined);
            expect(mathEnforcer.sum(5, null)).to.equal(undefined);
            expect(mathEnforcer.sum(5, '20')).to.equal(undefined);

        });
        it('Should return first plus second when two parameters are numbers', () => {
            expect(mathEnforcer.sum(-1, -10)).to.equal(-11);
            expect(mathEnforcer.sum(10, 10)).to.equal(20);
            expect(mathEnforcer.sum(10, 10)).to.equal(20);
            expect(mathEnforcer.sum(10, -1)).to.equal(9);
            expect(mathEnforcer.sum(-1, 10)).to.equal(9);
            expect(mathEnforcer.sum(4.2, -5)).to.closeTo(-0.8, 0.01);
            expect(mathEnforcer.sum(4.02, 2.4)).to.closeTo(6.42, 0.01);
            expect(mathEnforcer.sum(-4.02, 5)).to.closeTo(0.98, 0.01);
        });
    });

});