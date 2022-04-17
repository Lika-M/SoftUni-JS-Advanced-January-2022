function solve() {
  let [input, output] = (document.querySelectorAll('textarea'));
  let [configurationBTN, byeBtn] = (document.querySelectorAll('button'));
  let tBody = document.querySelector('tbody');

  configurationBTN.addEventListener('click', generate);
  byeBtn.addEventListener('click', bye);

  function generate(e) {

    let data = JSON.parse(input.value);

    for (const item of data) {
      let row = document.createElement('tr');

      let imgTd = document.createElement('td');
      let img = document.createElement('img');
      img.src = item.img;
      imgTd.appendChild(img);

      let nameTd = document.createElement('td');
      let pName = document.createElement('p');
      pName.textContent = item.name;
      nameTd.appendChild(pName);

      let priceTd = document.createElement('td');
      let pPrice = document.createElement('p');
      pPrice.textContent = Number(item.price);
      priceTd.appendChild(pPrice);

      let factorTd = document.createElement('td');
      let pFactor = document.createElement('p');
      pFactor.textContent = Number(item.decFactor);
      factorTd.appendChild(pFactor);

      let checkTd = document.createElement('td');
      let inpCheck = document.createElement('input');
      inpCheck.type = 'checkbox';
      checkTd.appendChild(inpCheck);

      row.appendChild(imgTd);
      row.appendChild(nameTd);
      row.appendChild(priceTd);
      row.appendChild(factorTd);
      row.appendChild(checkTd);

      tBody.appendChild(row)
    }
  }

  function bye(e) {
    let checkBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]'))
      .filter(b => b.checked);

    let furnitures = [];

    for (const box of checkBoxes) {
      let fName = box.parentElement.parentElement.children[1].textContent;
      let fPrice = box.parentElement.parentElement.children[2].textContent;
      let fDecFactor = box.parentElement.parentElement.children[3].textContent;

      let fData = {
        fName,
        fPrice: Number(fPrice),
        fDecFactor: Number(fDecFactor)
      }
      furnitures.push(fData);
    }
    console.log(furnitures);

    let finalNames = [];
    let finalPrice = 0;
    let finalDecFactor = 0;

    for (const item of furnitures) {
      finalNames.push(item.fName);
      finalPrice += item.fPrice;
      finalDecFactor += item.fDecFactor;
    }

    let outputText = `Bought furniture: ${finalNames.join(', ')}
Total price: ${finalPrice.toFixed(2)}
Average decoration factor: ${finalDecFactor / finalNames.length}`

    output.textContent = outputText;
  }

}