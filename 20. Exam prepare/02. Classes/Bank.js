class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    };
    newCustomer(customer) {
        let foundCusomer = this.allCustomers.find(x => JSON.stringify(x) == JSON.stringify(customer));
        if (foundCusomer) {
            throw Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        };
        this.allCustomers.push(customer);
        return (customer);
    };
    depositMoney(personalId, amount) {
        if(typeof personalId != 'number' || typeof amount != 'number'){
            return;
        };
        let found = this.allCustomers.find(c => c.personalId == personalId)
        if (!found) {
            throw Error(`We have no customer with this ID!`)
        };
        if(!found.totalMoney){
            found.totalMoney = 0;
        };
        found.totalMoney += amount; 
        if(!found.info){
            found.info = [];
        };
        found.info.push(`${found.firstName} ${found.lastName} made deposit of ${amount}$!`)
        return `${found.totalMoney}$`
    };
    withdrawMoney(personalId, amount) {
        if(typeof personalId != 'number' || typeof amount != 'number'){
            return;
        };
        let found = this.allCustomers.find(c => c.personalId == personalId);
        if (!found) {
            throw Error(`We have no customer with this ID!`)
        };
        if (found.totalMoney < amount) {
            throw Error(`${found.firstName} ${found.lastName} does not have enough money to withdraw that amount!`)
        };
        found.totalMoney -= amount;
        found.info.push(`${found.firstName} ${found.lastName} withdrew ${amount}$!`)
        return `${found.totalMoney}$`
    };
    customerInfo(personalId) {
        if(typeof personalId != 'number'){
            return;
        };
        let found = this.allCustomers.find(c => c.personalId == personalId); 
        if (!found) {
            throw Error(`We have no customer with this ID!`)
        };
        let information = found.info.map((e, i) => `${i+1}. ${e}`).reverse() ;
        let info = [];
        info.push(`Bank name: ${this._bankName}`);
        info.push(`Customer name: ${found.firstName} ${found.lastName}`);
        info.push(`Customer ID: ${found.personalId}`);
        info.push(`Total Money: ${found.totalMoney}$`);
        info.push(`Transactions:`);
        info.push(...information);
        return info.join('\n');
    };
}


let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));


