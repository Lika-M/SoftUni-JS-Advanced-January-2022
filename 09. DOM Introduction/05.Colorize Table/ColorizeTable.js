function colorize() {
    let rows = document.getElementsByTagName('tr');
    let count = 0;
    for (const row of rows) {
        count ++;
        if(count %2 === 0){
            row.style = "background-color: Teal";
        }
    }
}