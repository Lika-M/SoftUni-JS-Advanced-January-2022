//  expect(isOddOrEven(undefined)).to.equal(undefined);   //

// let {isOddOrEven} = require('../02.evenOrOdd');
// let {expect} = require('chai');

// describe('EvenOrOdd', () => {
//     it('Should return udefined with invalid parameters', () => {
//         expect(isOddOrEven(undefined)).to.equal(undefined)
//         expect(isOddOrEven(5)).to.equal(undefined)
//         expect(isOddOrEven([])).to.equal(undefined)
//         expect(isOddOrEven(null)).to.equal(undefined)
//         expect(isOddOrEven(true)).to.equal(undefined)
//         expect(isOddOrEven(false)).to.equal(undefined)
//     });
//     it('Should return even if length of string is even', () =>{
//         expect(isOddOrEven('string')).to.equal('even');
//         expect(isOddOrEven('')).to.equal('even');
//     });
//     it('Should return odd if length of string is odd', () =>{
//         expect(isOddOrEven('old')).to.equal('odd');
//         expect(isOddOrEven('start')).to.equal('odd');
//     })
// });