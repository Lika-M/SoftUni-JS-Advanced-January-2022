// that is not mine

function solve() {
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let descriptionInput = document.getElementById('description');
    let priceInput = document.getElementById('price');
 
    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', add);
    let total = 0;
 
    function add(e) {
        e.preventDefault();
        let year = Number(yearInput.value) > 0;
        let price = Number(priceInput.value).toFixed(2) > 0;
        if (modelInput.value &&
            year &&
            descriptionInput.value &&
            price) {
 
            let tbody = document.getElementById('furniture-list');
 
            let infoRow = document.createElement('tr');
            infoRow.classList = 'info';
 
            let modelTableData = document.createElement('td');
            modelTableData.textContent = modelInput.value;
 
            let priceTableData = document.createElement('td');
            priceTableData.textContent = Number(priceInput.value).toFixed(2);
 
            let buttonsTableData = document.createElement('td');
 
            let moreBtn = document.createElement('button');
            moreBtn.addEventListener('click', more);
            moreBtn.classList = 'moreBtn';
            moreBtn.textContent = 'More Info';
 
            let buyBtn = document.createElement('button');
            buyBtn.addEventListener('click', buy);
            buyBtn.classList = 'buyBtn';
            buyBtn.textContent = 'Buy it';
 
            buttonsTableData.appendChild(moreBtn);
            buttonsTableData.appendChild(buyBtn);
 
            infoRow.appendChild(modelTableData);
            infoRow.appendChild(priceTableData);
            infoRow.appendChild(buttonsTableData);
 
            let hiddenRow = document.createElement('tr');
            hiddenRow.classList = 'hide';
 
            let yearTableData = document.createElement('td');
            yearTableData.textContent = `Year: ${yearInput.value}`;
 
            let descriptionTableData = document.createElement('td');
            descriptionTableData.setAttribute('colspan', 3);
            descriptionTableData.textContent = `Description: ${descriptionInput.value}`;
 
            hiddenRow.appendChild(yearTableData);
            hiddenRow.appendChild(descriptionTableData);
            tbody.appendChild(infoRow);
            tbody.appendChild(hiddenRow);
 
            modelInput.value = '';
            yearInput.value = '';
            priceInput.value = '';
            descriptionInput.value = '';
        }
    }
 
    function more(e) {
        e.preventDefault();
        if (e.target.textContent == "More Info") {
            document.querySelector('.hide').style.display = 'contents';
            e.target.textContent = 'Less Info';
        } else if (e.target.textContent == "Less Info") {
            document.querySelector('.hide').style.display = 'none';
            e.target.textContent = 'More Info';
        }
    }
 
    function buy(e) {
        e.preventDefault();
        let totalPrice = document.querySelector('.total-price');
        let currentPrice = document.querySelector('.info td:nth-of-type(2)').textContent;
        total += Number(currentPrice);
        totalPrice.textContent = total.toFixed(2);
        e.target.parentElement.parentElement.remove();
 
    }
}