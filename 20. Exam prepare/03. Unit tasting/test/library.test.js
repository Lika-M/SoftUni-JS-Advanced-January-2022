
/// 100/100
// let library = require('../library');
// let { expect } = require('chai');

// describe('Test library', () => {

//     describe('Test calcPriceOfBook', () => {

//         it('Should return result when the two parameters are correct', () => {
//             expect(library.calcPriceOfBook('My book', 1980)).to.equal(`Price of My book is 10.00`)
//             expect(library.calcPriceOfBook('My book', 1990)).to.equal(`Price of My book is 20.00`)
//         });

//         it('Should return Error when first parameter is incorrect', () => {
//             expect(() => { library.calcPriceOfBook(undefined, 1990) }).to.throw("Invalid input");
//             expect(() => { library.calcPriceOfBook(5, 1990) }).to.throw("Invalid input");
//             expect(() => { library.calcPriceOfBook([], 1990) }).to.throw("Invalid input");
//             expect(() => { library.calcPriceOfBook(null, 1990) }).to.throw("Invalid input");
//         });

//         it('Should return Error when second parameter is incorrect', () => {
//             expect(() => { library.calcPriceOfBook('book', undefined) }).to.throw("Invalid input");
//             expect(() => { library.calcPriceOfBook('book', 1234.5) }).to.throw("Invalid input");
//             expect(() => { library.calcPriceOfBook('book', '') }).to.throw("Invalid input");
//             expect(() => { library.calcPriceOfBook('book', null) }).to.throw("Invalid input");
//             expect(() => { library.calcPriceOfBook('book', []) }).to.throw("Invalid input");
//         });

//     });

//     describe('Test findBook', () => {
//         it('Should throw Error when first param is an empty array', () => {
//             expect(() => { library.findBook([], 'My book') }).to.throw("No books currently available")
//         });
//         it('Should return true if the book present in book array', () => {
//             expect(library.findBook(['My book'], 'My book')).to.equal("We found the book you want.")
//         });
//         it('Should return false if the book is not in book array', () => {
//             expect(library.findBook(['My liitle book'], 'My book')).to.equal("The book you are looking for is not here!")
//         });
//     });

//     describe('Test arrangeTheBooks', () => {
//         it('Should throw Error when input is incorrect', () => {
//             expect(() => { library.arrangeTheBooks(-5) }).to.throw("Invalid input")
//             expect(() => { library.arrangeTheBooks(3.3) }).to.throw("Invalid input")
//             expect(() => { library.arrangeTheBooks('3.3') }).to.throw("Invalid input")
//             expect(() => { library.arrangeTheBooks(undefined) }).to.throw("Invalid input")
//             expect(() => { library.arrangeTheBooks(null) }).to.throw("Invalid input")
//         });

//         it('Should result if the shelves are enought', () => {
//             expect(library.arrangeTheBooks(5)).to.equal("Great job, the books are arranged.")
//             expect(library.arrangeTheBooks(0)).to.equal("Great job, the books are arranged.")
//             expect(library.arrangeTheBooks(40)).to.equal("Great job, the books are arranged.")
//         });
//         it('Should result if the shelves are not enought', () => {
//             expect(library.arrangeTheBooks(50)).to.equal("Insufficient space, more shelves need to be purchased.")
//         });

//     });
// });



