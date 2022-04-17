// const dealership = require('../dealerShip');
// const { expect } = require('chai')

// describe("Tests dealership", () => {

//     describe("Tests newCarCost", () => {
//         it('Should return price with discount', () => {
//             expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
//         });
//         it('Should return new price, when you are not returning your old car', () => {
//             expect(dealership.newCarCost('a', 1)).to.equal(1); 
//         });
//     });
//     describe("Tests carEquipment", () => {
//         it('Should return extras, when there are', () => {
//             expect(dealership.carEquipment(['e1'], [0])).to.eql(['e1']);
//             expect(dealership.carEquipment(['e1', 'e2', 'e3', 'e4'], [0, 2])).to.eql(['e1', 'e3']);
//         });
//     });
//     describe("Tests euroCategory", () => {
//         it('Should return price with discount, when have eurostandart', () => {
//             expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
//         });
//         it('Should return price without discount, when not have eurostandart', () => {
//             expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
//         });
//     });
// });
