function solution() {
    const library = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }
    const stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }
    function restock(item, qty) {
        stock[item] += qty;
        return 'Success';
    }
    function prepare(recipe, qty) {
        const gradients = Object.entries(library[recipe]);
    
        for (let [item, count] of gradients) {
            if (stock[item] < count * qty) {
                return `Error: not enough ${item} in stock`
            }
        }
        gradients.forEach(([item, count]) => {
            stock[item] -= count * qty;
        });

        return 'Success';
    }
    function report() {
        return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
    }
    function getInputData(string) {
        let [command, item, qty] = string.split(' ');
        qty = Number(qty);
        if (command == 'restock') {
            return restock(item, qty);
        } else if (command === 'prepare') {
            return prepare(item, qty);
        } else if (command === 'report') {
            return report();
        }
    }
    return getInputData;
}
'---------------------------------------------------------------------'
function robot() {
 
    let recipes = {
        'apple': { carbohydrate: 1, flavour: 2 },
        'lemonade': { carbohydrate: 10, flavour: 20 },
        'burger': { carbohydrate: 5, fat: 7, flavour: 3 },
        'eggs': { protein: 5, fat: 1, flavour: 1 },
        'turkey': { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }
    let storage = {
        'protein': 0,
        'carbohydrate': 0,
        'fat': 0,
        'flavour': 0
    }
    ////////////////////////////////////////
    function restock(micro, quantity) {
        storage[micro] += +quantity;
        return 'Success';
    };
    /////////////////////////////
    function prepare(recipe, quantity) {
        let isEnough = true;
        let entries = Object.entries(recipes[recipe]);
        for (let entry of entries) {
            let micro = entry[0];
            let value = entry[1];
            if (storage[micro] - (value * +quantity) < 0) {
                isEnough = false;
                return `Error: not enough ${micro} in stock`;
 
            }
        }
        if (isEnough) {
            for (let entry of entries) {
                let micro = entry[0];
                let value = entry[1];
                storage[micro] -= value * +quantity;
            }
            return 'Success';
        }
    };
    /////////////////////////////
    function report() {
        let output = [];
        for (item in storage) {
            output.push(`${item}=${storage[item]}`);
        };
        return output.join(' ');
    }
    /////////////////////////////
    function distribute(str) {
 
        let [command, ...rest] = str.split(' ');
        switch (command) {
            case 'restock': return restock(rest[0], rest[1]);
            case 'prepare': return prepare(rest[0], rest[1]);
            case 'report': return report();
        }
 
    }
    return distribute;
}