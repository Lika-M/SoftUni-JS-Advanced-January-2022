let library = require('../library');
let { expect } = require('chai');

describe('Test library', () => {

    describe('Test calcPriceOfBook', () => {

        it('Should return result when the two parameters are correct', () => {
            expect(library.calcPriceOfBook('My book', 1980)).to.equal(`Price of My book is 10.00`)
        });

        it('Should return Error when first parameter is incorrect', () => {
            expect(() => {library.calcPriceOfBook(undefined)}).to.throw("Invalid input");
            expect(() => {library.calcPriceOfBook(5)}).to.throw("Invalid input");
            expect(() => {library.calcPriceOfBook([])}).to.throw("Invalid input");
            expect(() => {library.calcPriceOfBook(null)}).to.throw("Invalid input");
            expect(() => {library.calcPriceOfBook('')}).to.throw("Invalid input");
        });
        it('Should return Error when second parameter is incorrect', () => {
            expect(() => {library.calcPriceOfBook('book', undefined)}).to.throw("Invalid input");
            expect(() => {library.calcPriceOfBook('book', 1234.5)}).to.throw("Invalid input");
            expect(() => {library.calcPriceOfBook('book', '')}).to.throw("Invalid input");
            expect(() => {library.calcPriceOfBook('book',null)}).to.throw("Invalid input");
            expect(() => {library.calcPriceOfBook('book', [])}).to.throw("Invalid input");
        });
       
       
    });

    describe('Test findBook', () => {

    });

    describe('Test arrangeTheBooks', () => {

    });
});