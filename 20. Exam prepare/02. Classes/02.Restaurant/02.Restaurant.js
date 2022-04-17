
//     100/100

class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = []
    }
    loadProducts(products) { 
        for (const product of products) {
            let [productName, productQuantity, productTotalPrice] = product.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);

            if (productTotalPrice <= this.budgetMoney) {
                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = 0;
                }
                this.stockProducts[productName] += productQuantity;
                this.budgetMoney -= productTotalPrice;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        }
        return this.history.join('\n');
    };
    addToMenu(meal, neededProducts, price) {

        let products = [];
        for (const product of neededProducts) {
            let [productName, productQuantity] = product.split(' ');
            productQuantity = Number(productQuantity);
            products.push({ productName, productQuantity })
        }
        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = { products, price };
            let numbersOfMeals = Object.keys(this.menu).length;
            if (numbersOfMeals == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            } else {
                return `Great idea! Now with the ${meal} we have ${numbersOfMeals} meals in the menu, other ideas?`
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    };
    showTheMenu() {
        let meals = Object.entries(this.menu);
        let result = '';

        if (meals.length > 0) {
            for (const item of meals) {
                result += `${item[0]} - $ ${item[1].price}\n`
            }
            return result.trimEnd();
        } else {
            return "Our menu is not ready yet, please come later..."
        }
    };
    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        } else {
            let { products, price } = this.menu[meal];
            for (const product of products) {
                let { productName, productQuantity } = product;
                if (this.stockProducts.hasOwnProperty(productName) &&
                    this.stockProducts[productName] >= productQuantity) {
                    this.stockProducts[productName] -= productQuantity;
                    this.budgetMoney += this.menu[meal].price;
                    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`
                } else {
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                }
            }
        }
    }
};

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));

