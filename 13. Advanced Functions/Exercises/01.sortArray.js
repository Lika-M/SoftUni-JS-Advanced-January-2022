// function sortArray(arr, str) {

//     let obj = {
//         'asc': (array) => {return array.sort((a, b) => a - b) },
//         'desc': (array) => { return array.sort((a, b) => b - a) }
//     }

//     let result = str == 'asc'? obj['asc'](arr): obj['desc'](arr);
//     console.log(result);
// }

function sortArray(arr, str) {
    let result = str === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
    return result;
}

sortArray([3, 1, 2, 10], 'asc')
sortArray([14, 7, 17, 6, 8], 'desc')