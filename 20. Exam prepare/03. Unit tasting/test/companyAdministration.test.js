// const companyAdministration = require('../companyAdministration');
// const { expect } = require('chai');

// describe('Test companyAdministration', () => {
//     describe('Test hiringEmployee', () => {
//         it('position', () => {
//             expect(() => { companyAdministration.hiringEmployee('I', 'a', 3) }).to.throw('');
//             expect(() => { companyAdministration.hiringEmployee('I', 'a') }).to.throw('');
//         });
//         it('years', () => {
//             expect(companyAdministration.hiringEmployee('I', 'Programmer', 3)).to.equal(`I was successfully hired for the position Programmer.`);
//             expect(companyAdministration.hiringEmployee('I', 'Programmer', 2)).to.equal(`I is not approved for this position.`);

//         });
//     });
//     describe('Test calculateSalary', () => {
//         it('invalid input', () => {
//             expect(() => { companyAdministration.calculateSalary('5') }).to.throw('');
//             expect(() => { companyAdministration.calculateSalary(-5) }).to.throw('');
//             expect(() => { companyAdministration.calculateSalary() }).to.throw('');
//             expect(() => { companyAdministration.calculateSalary(undefined) }).to.throw('');
//             expect(() => { companyAdministration.calculateSalary(false) }).to.throw('');
//         });
//         it('<= 160 hour', () => {
//             expect(companyAdministration.calculateSalary(0)).to.equal(0);
//             expect(companyAdministration.calculateSalary(1)).to.equal(15);
//             expect(companyAdministration.calculateSalary(160)).to.equal(2400);
//             expect(companyAdministration.calculateSalary(150.5)).to.equal(2257.5);
//         });
//         it('> 160 hours', () => {
//             expect(companyAdministration.calculateSalary(161)).to.equal(3415);
//             expect(companyAdministration.calculateSalary(200.5)).to.equal(4007.5);
//         });
//     });
//     describe('Test firedEmployee', () => {
//         it('invalid array', () => {
//             expect(() => { companyAdministration.firedEmployee('', 0) }).to.throw('');
//             expect(() => { companyAdministration.firedEmployee({}, 0) }).to.throw('');
//             expect(() => { companyAdministration.firedEmployee('name, name2', 0) }).to.throw('');
//             expect(() => { companyAdministration.firedEmployee(undefined, 0) }).to.throw('');
//             expect(() => { companyAdministration.firedEmployee(null, 0) }).to.throw('');
//             expect(() => { companyAdministration.firedEmployee(NaN, 0)}).to.throw('');
//             expect(() => { companyAdministration.firedEmployee(false)}).to.throw('');
//         });
//         it('invalid index', () => {
//             expect(() => { companyAdministration.firedEmployee(['a', 'b', 'c'], 3) }).to.throw('');
//             expect(() => { companyAdministration.firedEmployee(['a', 'b', 'c'], -1) }).to.throw('');
//             expect(() => { companyAdministration.firedEmployee([p], undefined) }).to.throw('');
//             expect(() => { companyAdministration.firedEmployee(['a', 'b', 'c'], '3') }).to.throw('');
//             expect(() => { companyAdministration.firedEmployee(['a', 'b', 'c']) }).to.throw('');
//             expect(() => { companyAdministration.firedEmployee(['a', 'b', 'c'], 1.1) }).to.throw('');
//         });
//         it('return result', () => {
//             expect(companyAdministration.firedEmployee(['I', 'P', 'G'], 0)).to.equal('P, G');
//             expect(companyAdministration.firedEmployee(['I', 'P', 'G'], 2)).to.equal('I, P');
//             expect(companyAdministration.firedEmployee(['I', 'P', 'G'], 1)).to.equal('I, G');
//         });
//     });
// });