function storeCatalogue(array) {

    const list = {}
    for (const line of array) {
        let [product, price] = line.split(' : ');
        list[product] = Number(price);
    }
    let sorted = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));

    let symbol = sorted[0][0][0];
    console.log(symbol);
    for (const line of sorted) {
        if (symbol === line[0][0]) {
            console.log(`  ${line[0]}: ${line[1]}`)
        } else {
            symbol = line[0][0];
            console.log(symbol);
            if (symbol === line[0][0]) {
                console.log(`  ${line[0]}: ${line[1]}`)
            }
        }
    }

}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)
console.log('----------------');

storeCatalogue([
    'Banana : 2',
    'Rubics Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
)