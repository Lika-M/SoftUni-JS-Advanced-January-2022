function calorieObject(array) {
    let obj = {};
    for (let i = 0; i < array.length; i += 2) {
        if (i % 2 === 0) {
            obj[array[i]] = Number(array[i + 1]);
        }
    }
    console.log(obj);

}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])