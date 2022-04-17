describe('Test pizzaUni', () => {

    describe('Test makeAnOrder', () => {                                    
        it('Should return result when order is correct', () => {
            expect(pizzUni.makeAnOrder({ orderedPizza: 'Margarita' })).to.equal(`You just ordered Margarita`);
            expect(pizzUni.makeAnOrder({ orderedPizza: 'Margarita', orderedDrink: 'Cola' })).to.equal(`You just ordered Margarita and Cola.`);
        });
        //тест за throw 
        
        it('Should throw Error when not ordered pizza', () => {
            expect(() => { pizzUni.makeAnOrder({}) }).to.throw('You must order at least 1 Pizza to finish the order.');
            expect(() => { pizzUni.makeAnOrder({ orderedDrink: 'Cola' }) }).to.throw('You must order at least 1 Pizza to finish the order.');
        });

    });
});
//тест за throw 
expect(() => {library.calcPriceOfBook(undefined)}).to.throw("Invalid input");
