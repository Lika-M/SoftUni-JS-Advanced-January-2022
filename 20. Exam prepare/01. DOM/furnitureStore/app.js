window.addEventListener('load', solve);

function solve() {
    let modelInputElement = document.getElementById('model');
    let yearInputElement = document.getElementById('year');
    let descriptionInputElement = document.getElementById('description');
    let priceInputElement = document.getElementById('price');
    let btnAddElement = document.getElementById('add');
    btnAddElement.addEventListener('click', addFurniture);

    function addFurniture(e) {
        e.preventDefault();
        let model = modelInputElement.value;
        let year = Number(yearInputElement.value);
        let description = descriptionInputElement.value;
        let price = Number(priceInputElement.value);

        if(model == '' || description == '' || year == '' || price == '' ||
            year < 0 || price < 0){
            return;
        };
        let tableField = document.getElementById('furniture-list');

        let row1 = document.createElement('tr');
        row1.classList.add('info');

        let cellName = document.createElement('td');
        cellName.textContent = model;
        row1.appendChild(cellName);

        let cellPrice = document.createElement('td');
        cellPrice.textContent = price.toFixed(2);
        row1.appendChild(cellPrice);

        let tdForBtn = document.createElement('td');

        let btnMoreInfo = document.createElement('button');
        btnMoreInfo.classList.add('moreBtn');
        btnMoreInfo.textContent = 'More Info';
        btnMoreInfo.addEventListener('click', showMoreInfo);
        tdForBtn.appendChild(btnMoreInfo);

        let btnBuy = document.createElement('button');
        btnBuy.classList.add('buyBtn');
        btnBuy.textContent = 'Buy it';
        btnBuy.addEventListener('click', buyIt)
        tdForBtn.appendChild(btnBuy);

        let row2 = document.createElement('tr');
        row2.classList.add('hide');
        row2.setAttribute('style', 'display: "none"');

        let cellYear = document.createElement('td')
        cellYear.textContent = 'Year: ' + year;
        row2.appendChild(cellYear);

        let cellDescription = document.createElement('td');
        cellDescription.setAttribute('colspan', '3')
        cellDescription.textContent = 'Description: ' + description;
        row2.appendChild(cellDescription);

        row1.appendChild(tdForBtn);
        tableField.appendChild(row1);
        tableField.appendChild(row2);

        modelInputElement.value = '';
        yearInputElement.value = '';
        descriptionInputElement.value = '';
        priceInputElement.value = '';
    }

    function showMoreInfo(e) {
        let hideTr = e.target.parentElement.parentElement.nextSibling;
        if (e.target.textContent === 'More Info') {
            e.target.textContent = 'Less Info';
            hideTr.setAttribute('style', 'display: contents;');
        } else {
            e.target.textContent = 'More Info';
            hideTr.setAttribute('style', 'display: none');
        }

    };
    function buyIt(e) {
        let totalPriceElement = document.querySelector('#information td.total-price');
        let currentPrice = e.target.parentElement.parentElement.children[1].textContent;
        let totalPrice = Number(totalPriceElement.textContent) + Number(currentPrice);
        totalPriceElement.textContent = totalPrice.toFixed(2);
        e.target.parentElement.parentElement.textContent = '';
    }

}

