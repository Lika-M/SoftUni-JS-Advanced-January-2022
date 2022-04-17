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
    const commands = {
        restock(item, qty) {
            stock[item] += qty;
            return 'Success';
        },
        prepare(recipe, qty) {
            const gradients = library[recipe];
            let temp = {}
            for (const item in gradients) {
                let restQty = stock[item] - library[recipe][item] * qty;
                if (restQty < 0) {
                    return `Error: not enough ${item} in stock`;
                } else {
                    temp[item] = restQty;
                }
            }
            Object.assign(stock, temp);
            return 'Success';
        },
        report() {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
        }
    }

    return (input) => {
        let [command, item, count] = input.split(' ');
        return commands[command](item, Number(count));
    }
}

let manager = solution();
console.log(manager("prepare turkey 1")); // Success 
console.log(manager('restock protein 10')); // Error: not enough carbohydrate in stock 
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));

//  ['prepare turkey 1',// 'Error: not enough protein in stock'],
//     ['restock protein 10',// 'Success'],
//     ['prepare turkey 1', //'Error: not enough carbohydrate in stock'],
//     ['restock carbohydrate 10',// 'Success'],
//     ['prepare turkey 1', //'Error: not enough fat in stock'],
//     ['restock fat 10', //'Success'],
//     ['prepare turkey 1', //'Error: not enough flavour in stock'],
//     ['restock flavour 10',// 'Success'],
//     ['prepare turkey 1', //'Success'],
//     ['report',// 'protein=0 carbohydrate=0 fat=0 flavour=0']
// ]