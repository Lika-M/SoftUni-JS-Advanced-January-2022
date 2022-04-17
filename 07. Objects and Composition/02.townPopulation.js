function townPopulation(array) {
    let cityData = {}

    for (const line of array) {
        [city, population] = line.split(' <-> ');
        population = Number(population);

        if (cityData[city]) {
            population += cityData[city];
        }
        cityData[city] = population;
    }
    for (const city in cityData) {
        console.log(`${city} : ${cityData[city]}`);
    }

}

townPopulation(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

)