function fruit(type, num1, num2) {
    
    let weight = Number(num1) / 1000;
    let price = Number(num2);
    let money = weight * price;
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type}.`);
}
fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)