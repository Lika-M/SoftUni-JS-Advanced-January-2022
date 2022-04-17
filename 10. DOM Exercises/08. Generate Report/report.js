
function generateReport() {
    let checkArr = []
    let checkBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]'))
    checkBoxes.forEach((x, i) => {
        if (x = x.checked) {
            checkArr.push(i);
        }
    });

    let rows = document.querySelectorAll('table tbody tr');
    let list = [];

    for (let i = 0; i <rows.length; i++) {
        let obj = {}
        let cols = rows[i].children

        for (let j = 0; j < cols.length; j++) {

            if (checkArr.includes(j)) {

                let key = checkBoxes[j].name
                let value = cols[j].textContent
                obj[key] = value;
            }
        }
      
        list.push(obj)
    }
    document.getElementById('output').value = JSON.stringify(list)


}
