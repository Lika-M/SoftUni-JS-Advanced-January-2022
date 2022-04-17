// const numberOperations = require('../number-operations')
// const { expect } = require('chai');

// describe('Test numberOperations', () => {
//     describe('Test powNumber', () => {
//         it('Should return power of number', () => {
//             expect(numberOperations.powNumber(2)).to.equal(4);
//             expect(numberOperations.powNumber(1)).to.equal(1);
//             expect(numberOperations.powNumber(-1)).to.equal(1);
//             expect(numberOperations.powNumber(0)).to.equal(0);
//             expect(numberOperations.powNumber(-2)).to.equal(4);
//             expect(numberOperations.powNumber(2.2)).to.closeTo(4.84, 00001);
//             expect(numberOperations.powNumber(-2.2)).to.closeTo(4.84, 00001);
//         });
//     });
//     describe('Test numberChecker', () => {
//         it('Should return number when input is valid and it is lower than 100', () => {
//             expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
//             expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
//             expect(numberOperations.numberChecker(99.99)).to.equal('The number is lower than 100!');
//             expect(numberOperations.numberChecker(-100)).to.equal('The number is lower than 100!');
//             expect(numberOperations.numberChecker(-100.001)).to.equal('The number is lower than 100!');
//             expect(numberOperations.numberChecker('99')).to.equal('The number is lower than 100!');
//             expect(numberOperations.numberChecker('-99')).to.equal('The number is lower than 100!');
//             expect(numberOperations.numberChecker('0')).to.equal('The number is lower than 100!');
//             expect(numberOperations.numberChecker('')).to.equal('The number is lower than 100!');
//             expect(numberOperations.numberChecker(' ')).to.equal('The number is lower than 100!');
//         });
//         it('Should return number when input is valid and it is bigger or equal to 100', () => {
//             expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
//             expect(numberOperations.numberChecker(100.5)).to.equal('The number is greater or equal to 100!');
//             expect(numberOperations.numberChecker(200.40)).to.equal('The number is greater or equal to 100!');
//             expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!');
//             expect(numberOperations.numberChecker('100.22')).to.equal('The number is greater or equal to 100!');   
//         });
//         it('Should return error when input is not a number', () => {
//             expect(() => numberOperations.numberChecker(NaN)).to.throw();
//             expect(() => numberOperations.numberChecker('str')).to.throw();
//             expect(() => numberOperations.numberChecker(undefined)).to.throw();
//             expect(() => numberOperations.numberChecker({})).to.throw();
//             expect(() => numberOperations.numberChecker('100GH')).to.throw();

//         });
//     });
//     describe('Test sumArrays', () => {
//         it('Should return sum when second array is longer', () => {
//             let first = [1];
//             let second = [1, 2];
//             let result = [2, 2];
//             expect(numberOperations.sumArrays(first, second)).deep.to.equal(result);
//         });
//         it('Should return sum when first array is longer', () => {
//             let first = [1, 2, 3, 4];
//             let second = [1, 2];
//             let result = [2, 4, 3, 4];
//             expect(numberOperations.sumArrays(first, second)).deep.to.equal(result);
//         });
//         it('Should return sum when numbers are negative', () => {
//             let first = [-1, -2, -3, -4];
//             let second = [1, 2];
//             let result = [0, 0, -3, -4];
//             expect(numberOperations.sumArrays(first, second)).deep.to.equal(result);
//         });
//         it('Should return sum when numbers are floating point', () => {
//             let first = [1.1, 2.2, 3.3, 4.4];
//             let second = [1, 2];
//             let result = [2.1, 4.2,  3.3, 4.4];
//             expect(numberOperations.sumArrays(first, second)).deep.to.equal(result);
//         });   
//     });
// });