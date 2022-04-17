class Company {
    constructor() {
        this.departments = {};
    }
    addEmployee(username, salary, position, department) {
        if (!username || !position || !department 
            || !salary || salary < 0) {
            throw new Error('Invalid input!')
        }
        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({ username, salary, position })
        return `New employee is hired. Name: ${username}. Position: ${position}`
    }
    bestDepartment() {
        let bestAVGsalary = 0;
        let bestDepartment = '';

        for (const department in this.departments) {
            let currentAVGSalary = this.departments[department]
                .reduce((acc, c) => acc + c.salary, 0) / this.departments[department].length;

            if (currentAVGSalary > bestAVGsalary) {
                bestAVGsalary = currentAVGSalary;
                bestDepartment = department;
            }
        }
        let output = [];
        output.push(`Best Department is: ${bestDepartment}\nAverage salary: ${bestAVGsalary.toFixed(2)}`);

        this.departments[bestDepartment].
            sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
            .forEach(empl => {
                output.push(`${empl.username} ${empl.salary} ${empl.position}`)
            });
        return output.join('\n')
    }
}

let c = new Company();
// c.addEmployee("Stanimir", 2000, "engineer", "Construction");
// c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
// c.addEmployee("Slavi", 500, "dyer", "Construction");
// c.addEmployee("Stan", 2000, "architect", "Construction");
// c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
// c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
// c.addEmployee("Gosho", 1350, "HR", "Human resources");

c.addEmployee("Pesho", 0, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


// 'Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR'  
// 'Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR'
'Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR\n'
'Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR'