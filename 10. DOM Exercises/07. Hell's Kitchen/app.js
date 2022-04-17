function solve() {
  document.querySelector('#btnSend').addEventListener('click', onClick);

  
  function onClick() {
    let inputText = document.querySelector('#inputs textarea').value;
    let input = JSON.parse(inputText);
    let p1Element = document.querySelector('#bestRestaurant p');
    let p2Element = document.querySelector('#workers p');

    let obj = {};

    for (const restorant of input) {
      let [nameRestorant, rest] = restorant.split(' - '); 
      let info = rest.split(', ');

      if (!obj[nameRestorant]) {
        obj[nameRestorant] = {};
      }
      let salary = [];

      for (const worker of info) {
        let [name, money] = worker.split(' ');
        money = Number(money);
        obj[nameRestorant][name] = money;
        salary.push(money);
      }
    
      salary = salary.sort((a, b) => b - a);
      let avgSalary = salary.reduce((a, b) => a + b, 0) / salary.length;
      let bestSalary = salary[0];
      obj[nameRestorant].slr = [avgSalary, bestSalary];
    }

    let sort = Object.entries(obj).sort((a, b) => b[1].slr[0] - a[1].slr[0]);
    
    let output1 = '';
    let output2 = '';

    for (const obj of sort) {
      output1 = `Name: ${obj[0]} Average Salary: ${obj[1].slr[0].toFixed(2)} Best Salary: ${obj[1].slr[1].toFixed(2)}`;
      delete obj[1].slr;
      let sortedObj = Object.entries(obj[1]).sort((a, b) => b[1] - a[1])
      for (const man of sortedObj) {
        output2 += `Name: ${man[0]} With Salary: ${man[1]} `
      }

      break;
    }

    p1Element.textContent = output1;
    p2Element.textContent = output2;
  }
}


// function solve(input) {

//   let obj = {};
//   for (const restorant of input) {
//       let [nameRestorant, inputworkers] = restorant.split(' - ');
//       workers = inputworkers.split(', ');

//       if (!obj[nameRestorant]) {
//           obj[nameRestorant] = {
//               workers: []
//           };
//       }
//       obj[nameRestorant].workers = obj[nameRestorant].workers.concat(workers);

//       let avg = workers.map(x => x.split(' ')[1])
//           .map(Number).reduce((sum, a) => sum + a, 0) / workers.length;
//       obj[nameRestorant].avgSalary = avg;
//   }

//   let sortBySalary = Object.entries(obj).sort((a, b) => b[1].avgSalary - a[1].avgSalary)[0];
//   let avgS = sortBySalary[1].avgSalary.toFixed(2);
//   let bestS = sortBySalary[1].workers[0].split(', ')
//       .map(x => x.split(' ')[1])
//       .map(Number)
//       .sort((a, b) => b - a)[0].toFixed(2);

//   let output1 = `Name: ${sortBySalary[0]} Average Salary: ${avgS} Best Salary: ${bestS}`;
//   let output2 = '';
//   let sortedWorkers = sortBySalary[1].workers.sort((a, b) => b.split(' ')[1] - a.split(' ')[1]);
//   for (const worker of sortedWorkers) {
//       let [name, salary] = worker.split(' ');
//       output2 += `Name: ${name} With Salary: ${salary} `
//   }

// }