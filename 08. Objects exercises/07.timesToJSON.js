function timeToJSON(array) {

    let table = [];
    let [col1, col2, col3] = array.shift().slice(2, -2).split(' | ');
    //console.log(col1, col2, col3);
    for (let line of array) {
        line = line.slice(2, -2).split(' | ');

        if (!table.find(obj => obj['Town'] === line[0])) {
            let obj = {}
            obj[col1] = line[0];
            obj[col2] = Number(Number(line[1]).toFixed(2));
            obj[col3] = Number(Number(line[2]).toFixed(2));
            table.push(obj);
        }
    }
    let jsonTable = JSON.stringify(table);
    console.log(jsonTable);

}

timeToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
])