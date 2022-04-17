// let { lookupChar } = require('../03.charLookUp');
// let { expect } = require('chai');

// describe('lookUpChar', () => {

//     describe('Should return undefined when two parameters are incorrect', () =>{

//         it('Should return "undefined" when first parameter type is incorrect', () => {
//             expect(lookupChar(undefined, 1)).to.equal(undefined);
//             expect(lookupChar(true, 1)).to.equal(undefined);
//             expect(lookupChar(1, 0)).to.equal(undefined);
//             expect(lookupChar(null, undefined)).to.equal(undefined);
//         });
    
//         it('Should return "undefined" when second parameter type is incorrect', () => {
//             expect(lookupChar('some', 1.3)).to.equal(undefined);
//             expect(lookupChar('some','2')).to.equal(undefined);
//             expect(lookupChar('some', null)).to.equal(undefined);
//             expect(lookupChar('some', undefined)).to.equal(undefined);
//         });
//     });

    
//     it('Should return "Incorrect index" when index is out of range', () => {  
//         expect(lookupChar('some', 5)).to.equal("Incorrect index");
//         expect(lookupChar('some', -1)).to.equal("Incorrect index");
//     });
    
//     it('Should return "Happy path" when index of char is correct', () => {  
//         expect(lookupChar('some', 1)).to.equal('o');
//     });

// });