function solve(area, vol, input) {

    let figureCoordinates = JSON.parse(input);
    let outputArr = [];

    for (const item of figureCoordinates) {

        let outputObj = {
            area: area.call(item),
            volume: vol.call(item)
        }
        outputArr.push(outputObj);
    }
    return outputArr;
}

// function solve(area, vol, input) {

//     return JSON.parse(input)
//     .map(x => ({area: area.call(x), volume: vol.call(x)}))

// }

function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};

solve(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`)