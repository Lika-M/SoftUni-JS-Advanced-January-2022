function manageDataBase(dataBase, description) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    const result = [];
    dataBase.forEach(dB => {
        [d, p, s] = dB.split('|');
        let tD = new Ticket(d, p, s);
        result.push(tD);
    });

    let sortedResult = description != 'price'
        ? result.sort((a, b) => (a[description]).localeCompare(b[description]))
        : result.sort((a, b) => a[description] - b[description]);

    return sortedResult;
}



let output = manageDataBase(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
);
let output2 = manageDataBase(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
)
console.log(output);
console.log(output2);