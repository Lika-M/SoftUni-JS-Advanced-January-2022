function cityTaxes(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population = Math.floor(this.population + percentage * this.population / 100);
        },
        applyRecession(percentage) {
            this.treasury = Math.floor(this.treasury - percentage * this.treasury / 100);
        }

    }
    return city;

}


// let tortuga = cityTaxes('Tortuga',
//     7000,
//     15000)

// console.log(tortuga);
// tortuga.collectTaxes();
// console.log(tortuga);
// tortuga.applyGrowth(5);
// console.log(tortuga);
// tortuga.applyRecession(5);
// console.log(tortuga);

const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
