// let testNumbers = require('../testNumbers');
// let { expect } = require('chai');

// describe("Tests testNumbers", () => {
//     describe("Test sumNumbers", () => {

//         it("Should return sum when two arguments are numbers ", () => {
//             expect(testNumbers.sumNumbers(0, 100)).to.equal('100.00');
//             expect(testNumbers.sumNumbers(-100, 100)).to.equal('0.00');
//             expect(testNumbers.sumNumbers(-100, 0)).to.equal('-100.00');
//             expect(testNumbers.sumNumbers(3.5, 5)).to.equal('8.50');
//             expect(testNumbers.sumNumbers(5, 3.55)).to.equal('8.55');
//             expect(testNumbers.sumNumbers(5.554, 3)).to.equal('8.55');
//             expect(testNumbers.sumNumbers(5.555, 3)).to.equal('8.55');
//             expect(testNumbers.sumNumbers(0, 5.5555)).to.equal('5.56');
//             expect(testNumbers.sumNumbers(2, 5.5555)).to.equal('7.56');
//         });
//         it("Should return sum when two arguments are not numbers ", () => {
//             expect(testNumbers.sumNumbers('0', 100)).to.equal(undefined);
//             expect(testNumbers.sumNumbers(0, '100')).to.equal(undefined);
//             expect(testNumbers.sumNumbers('0', '100')).to.equal(undefined);
//             expect(testNumbers.sumNumbers(0)).to.equal(undefined);
//             expect(testNumbers.sumNumbers()).to.equal(undefined);
//             expect(testNumbers.sumNumbers('0')).to.equal(undefined);
//             expect(testNumbers.sumNumbers(undefined, 5)).to.equal(undefined);
//             expect(testNumbers.sumNumbers(100, undefined)).to.equal(undefined);
//             expect(testNumbers.sumNumbers(100, null)).to.equal(undefined);
//             expect(testNumbers.sumNumbers(null, 5)).to.equal(undefined);
            
//         });
//     });
//     describe("Test numberChecker", () => {
//         it("Should throw when the input is not a number/NaN ", () => {
//             expect(() => {testNumbers.numberChecker('string')}).to.throw();
//         });
//         it("Should return even when the input is number or string as number are even", () => {
//             expect(testNumbers.numberChecker('100')).to.equal('The number is even!');
//             expect(testNumbers.numberChecker(100)).to.equal('The number is even!');
//             expect(testNumbers.numberChecker('-100')).to.equal('The number is even!');
//             expect(testNumbers.numberChecker(-100)).to.equal('The number is even!');
//             expect(testNumbers.numberChecker('')).to.equal('The number is even!');    
//         });
//         it("Should return odd when the input is number or string as number are odd", () => {
//             expect(testNumbers.numberChecker('101')).to.equal('The number is odd!');
//             expect(testNumbers.numberChecker(101)).to.equal('The number is odd!');
//             expect(testNumbers.numberChecker('-101')).to.equal('The number is odd!');
//             expect(testNumbers.numberChecker(-101)).to.equal('The number is odd!');
//         });
//     });
//     describe("Test averageSumArray", () => {
//         it("Should return average sum when array is from positive numbers ", () => {
//             expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2)
//             expect(testNumbers.averageSumArray([1, 2])).to.equal(1.5)
//             expect(testNumbers.averageSumArray([1])).to.equal(1);
//             expect(testNumbers.averageSumArray([0])).to.equal(0);
//             expect(testNumbers.averageSumArray([1.25, 2.25, 5.5])).to.equal(3);
//         });
//         it("Should return average sum when array is from negative and positive numbers ", () => {
//             expect(testNumbers.averageSumArray([-1, 2, 2])).to.equal(1)
//             expect(testNumbers.averageSumArray([6, -2])).to.equal(2)
//             expect(testNumbers.averageSumArray([-6, -2])).to.equal(-4)
//             expect(testNumbers.averageSumArray([-6, -2, -4])).to.equal(-4)
//             expect(testNumbers.averageSumArray([-1])).to.equal(-1);
//             expect(testNumbers.averageSumArray([-1, 11])).to.equal(5); 
//             expect(testNumbers.averageSumArray([-1, 12])).to.equal(5.5); 
//             expect(testNumbers.averageSumArray([-1.5, 3, -1.5])).to.equal(0);
//             expect(testNumbers.averageSumArray([-1.25, 12.55, -5])).to.equal(2.1);
//         });
//     });

// });
