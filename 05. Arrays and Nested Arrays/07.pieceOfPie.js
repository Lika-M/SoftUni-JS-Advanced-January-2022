function pieceOfPie(arr, str1, str2) {

    let firstIndex = arr.indexOf(str1);
    let lastIndex = arr.indexOf(str2);
    let list = arr.slice(firstIndex, lastIndex + 1);
    return list;

}

console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
))