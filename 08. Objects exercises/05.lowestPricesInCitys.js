function lowestPricesInCitys(array) {

    let list = {};
    for (const line of array) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (!list[product]) {
            list[product] = {};
        }
        list[product][town] = price;
    }

    for (const item in list) {  
        const sorted = Object.entries(list[item]).sort((a, b) => a[1] - b[1]);
        const result = `${item} -> ${sorted[0][1]} (${sorted[0][0]})`
        console.log(result);
    }
    
}

lowestPricesInCitys([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
])