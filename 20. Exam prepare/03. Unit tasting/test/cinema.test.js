// const cinema = require('../cinema');
// const { expect } = require('chai');

// describe('Test Cinema', () => {

//     describe('Test showMovies', () => {
//         it('Should return list of films when array is not empty', () => {
//             expect(cinema.showMovies(['film1', 'film2', 'film3'])).to.equal('film1, film2, film3');
//         });
//         it('Should return film name when the film is only one', () => {
//             expect(cinema.showMovies(['film1'])).to.equal('film1');
//         });
//         it('Should return list of films when array is empty', () => {
//             expect(cinema.showMovies([])).to.equal("There are currently no movies to show.");
//         });
//     });

//     describe('Test ticketPrice', () => {
//         it('Should return tecket price when there is matching', () => {
//             expect(cinema.ticketPrice("Premiere")).to.equal(12.00);
//             expect(cinema.ticketPrice("Normal")).to.equal(7.50);
//             expect(cinema.ticketPrice("Discount")).to.equal(5.50);
//         });
//         it('Should throw when there is no matching', () => {
//             expect(() => { cinema.ticketPrice("Something") }).to.throw('Invalid projection type.');
//         });
//         it('Should throw when there is no projection', () => {
//             expect(() => { cinema.ticketPrice() }).to.throw('Invalid projection type.');

//         });
//     });
    
//     describe('Test swapSeatsInHall', () => {
//         it('Should return successful change when given numbers are correct', () => {
//             expect(cinema.swapSeatsInHall(5, 4)).to.equal("Successful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(1, 20)).to.equal("Successful change of seats in the hall.");
//         })
//         it('Should return unsuccessful change when given numbers are not numbers', () => {
//             expect(cinema.swapSeatsInHall(4)).to.equal("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall('5', 4)).to.equal("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(5, '4')).to.equal("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(undefined, 4)).to.equal("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(5, undefined)).to.equal("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(5.5, 4)).to.equal("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(5, 4.5)).to.equal("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(null, 4)).to.equal("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(5, null)).to.equal("Unsuccessful change of seats in the hall.");

//         });
//         it('Should return unsuccessful change when given numbers are not in the range', ()=>{
//             expect(cinema.swapSeatsInHall(22, 4)).to.equal("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(5, 22)).to.equal("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(-5, 20)).to.equal("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(20, -4)).to.equal("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(0, 20)).to.equal("Unsuccessful change of seats in the hall.");
//             expect(cinema.swapSeatsInHall(20, 0)).to.equal("Unsuccessful change of seats in the hall.");
//         });
//         it('Should return unsuccessful change when given numbers are equal', ()=>{
//             expect(cinema.swapSeatsInHall(5, 5)).to.equal("Unsuccessful change of seats in the hall.");
//         });
//     });

// });