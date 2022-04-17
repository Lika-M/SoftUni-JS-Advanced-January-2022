function solve(input) {

    let list = {};

    for (const data of input) {
        let [brand, model, qty] = data.split(' | ');
        qty = Number(qty);

        if (!list[brand]) {
            list[brand] = {};
        }
        if (!list[brand][model]) {
            list[brand][model] = 0;
        }
        list[brand][model] += qty;

    }

    for (const brand of Object.entries(list)) {
        console.log(`${brand[0]}`);
        for (const model of Object.entries(brand[1])) {
            console.log(`###${model[0]} -> ${model[1]}`);
        }
       
    }

}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)