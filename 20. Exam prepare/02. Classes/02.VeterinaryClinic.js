class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = []
        this.totalProfit = 0;
        this.workLoad = [];
    };
    newCustomer(ownerName, petName, kind, procedures) {
        if (this.clients.length == this.capacity) {
            throw Error("Sorry, we are not able to accept more patients!");
        };
        let foundOwner = this.clients.find(c => c.ownerName == ownerName);

        if (foundOwner) {
            let foundPet = foundOwner.pets.find(p => p.petName == petName);
            if (foundPet) {
                if (foundPet.procedures.length > 0) {
                    throw Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${procedures.join(', ')}.`)
                };
                if  (foundPet.procedures.length == 0) {
                    foundPet.procedures = procedures;
                };
            } else {
                foundOwner.pets.push({ petName, kind, procedures })
            };
        } else {
            let newClient = {
                ownerName,
                pets: []
            };
            let petInfo = {
                petName,
                kind,
                procedures
            };
            newClient.pets.push(petInfo);
            this.clients.push(newClient);
        };

        this.workLoad.push({ petName, procedures });
        return `Welcome ${petName}!`
    };
    onLeaving(ownerName, petName) {
        let foundOwner = this.clients.find(c => c.ownerName == ownerName);
        let foundPet = foundOwner.pets.find(p => p.petName == petName);
        if (!foundOwner) {
            throw Error(`Sorry, there is no such owner!`)
        };
        if (!foundPet || (foundPet && foundPet.procedures.length == 0)) {
            throw Error(`Sorry, there are no procedures for ${petName}!`)
        };
        let pay = foundPet.procedures.length * 500;
        this.totalProfit += pay;
        foundPet.procedures = [];
        this.workLoad.find(p => p.petName == petName).procedures = [];
        return `Goodbye ${petName}. Stay safe!`
    };
    toString() {
        let result = []
        let busyInPercentige = this.workLoad.filter(p => p.procedures.length > 0).length / this.capacity * 100;
        result.push(`${this.clinicName} is ${Math.floor(busyInPercentige)}% busy today!`);
        result.push(`Total profit: ${this.totalProfit.toFixed(2)}$`);

        this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName))
            .forEach(c => {
                result.push(`${c.ownerName} with:`);
                c.pets.sort((a, b) => a.petName.localeCompare(b.petName)).forEach(p => {
                    result.push(`---${p.petName} - a ${p.kind.toLowerCase()} that needs: ${p.procedures.join(', ')}`)
                });
            });
        return result.join('\n')
    };
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
console.log(clinic.toString());
clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']);
console.log(clinic.toString());


class VeterinaryClinic {
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = []
        this.totalProfit = 0;
        this.workLoad = [];
    };
    newCustomer(ownerName, petName, kind, procedures) {
        if (this.clients.length == this.capacity) {
            throw Error("Sorry, we are not able to accept more patients!");
        };
        let foundOwner = this.clients.find(c => c.ownerName == ownerName);
 
        if (foundOwner) {
            let foundPet = foundOwner.pets.find(p => p.petName == petName);
            if (foundPet) {
                if (foundPet.procedures.length > 0) {
                    throw Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${procedures.join(', ')}.`)
                };
                if  (foundPet.procedures.length == 0) {
                    foundPet.procedures = procedures;
                };
            } else {
                foundOwner.pets.push({ petName, kind, procedures })
            };
        } else {
            let newClient = {
                ownerName,
                pets: []
            };
            let petInfo = {
                petName,
                kind: kind.toLowerCase(),
                procedures
            };
            newClient.pets.push(petInfo);
            this.clients.push(newClient);
        };
 
        this.workLoad.push({ petName, procedures });
        return `Welcome ${petName}!`
    };
    onLeaving(ownerName, petName) {
        let foundOwner = this.clients.find(c => c.ownerName === ownerName);
        if(foundOwner===undefined){
 
            throw new Error('Sorry, there is no such client!')
        }
        let foundPet = foundOwner.pets.find(p => p.petName === petName);
        if (foundPet === undefined || foundPet.procedures.length === 0) {
            throw Error(`Sorry, there are no procedures for ${petName}!`)
        };
        let pay = foundPet.procedures.length * 500;
        this.totalProfit += pay;
        foundPet.procedures = [];
        this.workLoad.find(p => p.petName == petName).procedures = [];
        return `Goodbye ${petName}. Stay safe!`
    };
    toString() {
        let result = []
        let busyInPercentige = this.workLoad.filter(p => p.procedures.length > 0).length / this.capacity * 100;
        result.push(`${this.clinicName} is ${Math.floor(busyInPercentige)}% busy today!`);
        result.push(`Total profit: ${this.totalProfit.toFixed(2)}$`);
 
        this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName))
            .forEach(c => {
                result.push(`${c.ownerName} with:`);
                c.pets.sort((a, b) => a.petName.localeCompare(b.petName)).forEach(p => {
                    result.push(`---${p.petName} - a ${p.kind.toLowerCase()} that needs: ${p.procedures.join(', ')}`)
                });
            });
        return result.join('\n')
    };
}
