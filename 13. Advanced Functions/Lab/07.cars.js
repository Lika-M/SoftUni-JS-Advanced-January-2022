// недовършена!!! заради наследяването!
function cars(input) {
    const result = {};

    let listOfFunc = {
        create,
        set,
        print
    };

    function create(objName, newObjName) {
        if (!result[objName]) {
            result[objName] = {};
        } else {
            let copyProp = result[objName];
            result[newObjName] = copyProp;
        }
    }
    function set(objName, key, value) {
        result[objName][key] = value;
    }
    function print(objName) {
        console.log(result[objName]);
    }

    for (let line of input) {
        line = line.split(' ');
        if (line[0] == 'create') {
            if (line.length == 2) {
                listOfFunc.create(line[1]);
            } else {
                listOfFunc.create(line[3], line[1])
            }
        } else if (line[0] == 'set') {
            listOfFunc.set(line[1], line[2], line[3])
        } else if (line[0] == 'print') {
            listOfFunc.print(line[1])
        }
    }
}

cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
])