class ChristmasDinner {
    #budget;
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
    get budget() {
        return this.#budget;
    }
    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }
        this.#budget = value;
    }
    shopping(product) {
        let [type, price] = product;
        if (this.budget < Number(price)) {
            throw ('Not enough money to buy this product');
        }
        this.products.push(type);
        this.budget -= Number(price);
        return `You have successfully bought ${type}!`
    };
    recipes(recipe) {
        let currentProducts = recipe.productsList;
        currentProducts.forEach(p => {
            if (!this.products.includes(p)) {
                throw 'We do not have this product'
            }
        });
        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`
    };
    inviteGuests(name, dish) {
        if (!this.dishes.find(x => x.recipeName == dish)) {
            throw 'We do not have this dish'
        };
        if (this.guests.hasOwnProperty(name)) {
            throw 'This guest has already been invited'
        };
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    };
    showAttendance() {
        let result = [];
        for (const guest in this.guests) {
            let dish = this.guests[guest]
            let output = `${guest} will eat ${dish}, which consists of `
            output += this.dishes.find(x => x.recipeName == dish).productsList.join(', ')
            result.push(output);
        }
        return result.join(`\n`)
    };
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());



