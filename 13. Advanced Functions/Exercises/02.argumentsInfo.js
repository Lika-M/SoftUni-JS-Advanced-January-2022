function argumrntInfo(...arg) {
    let obj = {};
    const arr = [...arg];
    let result = [];

    for (const arg of arr) {
        let type = typeof arg;

        if (!obj[type]) {
            obj[type] = {};
            obj[type].counter = 1;
            obj[type].items = [arg];
        } else {
            obj[type].items. push(arg);
            obj[type].counter += 1;
        }
    } 
    for (const key in obj) {
      obj[key].items.forEach(item => {
           result.push(`${key}: ${item}`);
       });
       result.push(`${key} = ${obj[key].counter}`);
    };
    console.log(result);
}

argumrntInfo('cat', 42, function () { console.log('Hello world!'); })