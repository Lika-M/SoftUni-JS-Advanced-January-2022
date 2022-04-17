function sumTable() {
    let rows = document.getElementsByTagName("tr");
    let sum = 0;
    for(let i = 1; i < rows.length; i++){
        let col = rows[i].children;
        let cost = col[col.length - 1].textContent;
        sum += Number(cost);
    }
    document.getElementById("sum").textContent = sum;  
}