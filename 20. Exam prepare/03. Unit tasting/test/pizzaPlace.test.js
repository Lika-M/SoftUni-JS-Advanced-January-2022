// // this task is not submitted in Judge!


const pizzUni = require('../pizzaPlace');
const { expect } = require('chai');

describe('Test pizzaUni', () => {

    describe('Test makeAnOrder', () => {
        it('Should return result when order is correct', () => {
            expect(pizzUni.makeAnOrder({ orderedPizza: 'Margarita' })).to.equal(`You just ordered Margarita`);
            expect(pizzUni.makeAnOrder({ orderedPizza: 'Margarita', orderedDrink: 'Cola' })).to.equal(`You just ordered Margarita and Cola.`);
        });
        it('Should throw Error when not ordered pizza', () => {
            expect(() => { pizzUni.makeAnOrder({}) }).to.throw('You must order at least 1 Pizza to finish the order.');
            expect(() => { pizzUni.makeAnOrder({ orderedDrink: 'Cola' }) }).to.throw('You must order at least 1 Pizza to finish the order.');
        });
        it('Should throw Error when not input is given', () => {
            expect(() => { pizzUni.makeAnOrder() }).to.throw();

        });

    });
    describe('Test getRemainingWork', () => {
        it('Should return prepare when order is not finished', () => {
            let statusArr = [
                { pizzaName: 'Quadro', status: 'preparing' }
            ]
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`The following pizzas are still preparing: Quadro.`);
        });
        it('Should return prepare when order with two pizzas is not finished', () => {
            let statusArr = [
                { pizzaName: 'Quadro', status: 'preparing' },
                { pizzaName: 'Margaritta', status: 'preparing' }
            ]
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`The following pizzas are still preparing: Quadro, Margaritta.`);
        });
        it('Should return complete when order is finished', () => {
            expect(pizzUni.getRemainingWork([])).to.equal(`All orders are complete!`);

        });
        it('Should return complete when order is finished', () => {
            let statusArr = [
                { pizzaName: 'Quadro', status: 'ready' },
                { pizzaName: 'Margaritta', status: 'ready' }
            ]
            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`All orders are complete!`);
        });

    });
    describe('Test orderType', () => {
        it('Should return sum when type of order is Carry Out', () => {
            expect(pizzUni.orderType(100, 'Carry Out')).to.equal(90);
            expect(pizzUni.orderType(25.25, 'Carry Out')).to.equal(22.725);
        });

        it('Should return sum when type of order is Delivery', () => {
            expect(pizzUni.orderType(100, 'Delivery')).to.equal(100);
            expect(pizzUni.orderType(25.25, 'Delivery')).to.equal(25.25);
        });
    });

});

