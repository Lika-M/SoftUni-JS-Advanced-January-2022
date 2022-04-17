// it does not submit in judge!
class Parking {
    constructor(capacity) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    addCar(carModel, carNumber) {
        if (this.vehicles.length === this.capacity) {
            throw new Error(`Not enough parking space.`)
        } else {
            let car = {
                carModel,
                carNumber,
                payed: false
            };
            this.vehicles.push(car);
        }
        return `The ${carModel}, with a registration carNumber ${carNumber}, parked.`
    }

    removeCar(carNumber) {
        let indexOfcar = this.vehicles.findIndex(car => car.carNumber == carNumber);
        if (indexOfcar == -1) {
            throw new Error('The car, you\'re looking for, is not found.');
        } else if (this.vehicles[indexOfcar].payed === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`);
        } else {
            this.vehicles.splice(indexOfcar, 1);
            return `${carNumber} left the parking lot.`;
        }
    }
    pay(carNumber) {
        let indexOfcar = this.vehicles.findIndex(car => car.carNumber == carNumber);
        if (indexOfcar == -1) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        } else if (this.vehicles[indexOfcar].payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        } else {
            this.vehicles[indexOfcar].payed = true;
            return `${carNumber}'s driver successfully payed for his stay.`
        }
    }
    getStatistics(carNumber) {
        if (carNumber == undefined) {
            let emptySlots = this.capacity - this.vehicles.length;
            let sortedVehicles = this.vehicles
            .sort((a, b) => a.carModel.localeCompare(b.carModel));

            let result = sortedVehicles.map(c => `${c.carModel} == ${c.carNumber} - ${c.payed == true ? 'Has payed' : 'Not payed'}`);
            return `The Parking Lot has ${emptySlots} empty spots left.\n${result.join('\n')}`;
        } else {
            let indexOfcar = this.vehicles.findIndex(car => car.carNumber == carNumber);
            return `${this.vehicles[indexOfcar].carModel} == ${this.vehicles[indexOfcar].carNumber} - ${this.vehicles[indexOfcar].payed == true ? 'Has payed' : 'Not payed'}`;
        }
    }
}

const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics());

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));

