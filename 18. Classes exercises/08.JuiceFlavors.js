function juiceFlavors(input) {

    const juices = new Map();
    const bottles = new Map();

    for (const data of input) {
        let [fruit, currentQty] = data.split(' => ');
        currentQty = Number(currentQty);

        if (!juices.has(fruit)) {
            juices.set(fruit, 0);
        }
        let qty = juices.get(fruit) + currentQty;
        juices.set(fruit, qty)

        if (juices.get(fruit) >= 1000) {

            if (!bottles.has(fruit)) {
                bottles.set(fruit, 0);
            }
            let bottleQty = bottles.get(fruit) + parseInt(juices.get(fruit) / 1000);
            bottles.set(fruit, bottleQty);
            let juicesQty = juices.get(fruit) % 1000;
            juices.set(fruit, juicesQty);

        }

    }
    Array.from(bottles).forEach(b => console.log(`${b[0]} => ${b[1]}`))

}

juiceFlavors([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);