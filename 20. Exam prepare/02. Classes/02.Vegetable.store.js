class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    };
    loadingVegetables(vegetables) {
        let output = 'Successfully added ';
        let result = [];

        for (const item of vegetables) {
            let [type, quantity, price] = item.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            let foundProduct = this.availableProducts.find(p => p.type == type);
            if (foundProduct !== undefined) {
                foundProduct.quantity += quantity;
                if (foundProduct.price < price) {
                    foundProduct.price = price;
                };
            } else {
                let products = { type, quantity, price };
                this.availableProducts.push(products);
                result.push(`${type}`);
            };

        };
        return output + result.join(', ');
    };
    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        
        for (const item of selectedProducts) {
            let [type, quantity] = item.split(' ');
            let foundProduct = this.availableProducts.find(p => p.type == type);
        
            if (foundProduct == undefined) {
                throw Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            };
            if (quantity > foundProduct.quantity) {
                throw `The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`
            };
            foundProduct.quantity -= quantity;
            totalPrice += (quantity * foundProduct.price);
        };
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    };
    rottingVegetable(type, quantity) {
        let findProduct = this.availableProducts.find(p => p.type == type);
        if (findProduct == undefined) {
            throw Error(`${type} is not available in the store.`)
        };
        if (quantity > findProduct.quantity) {
            findProduct.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        } else {
            findProduct.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }
    };
    revision() {
        let result = ["Available vegetables:"];
        this.availableProducts.sort((a, b) => a.price - b.price)
            .forEach(p => {
                result.push(`${p.type}-${p.quantity}-$${p.price}`)
            });
        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)
        return result.join('\n');
    };

}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

// 'The quantity 1.5 for the vegetable Okra is not available in the store, your current bill is $22.40.' but got
// 'The quantity 1.5 for the vegetable Okra is not available in the store, your current bill is 0.'



