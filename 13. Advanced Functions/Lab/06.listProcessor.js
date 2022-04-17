function listProcessor(input) {

    let output = [];

    const libraryOfFunctions = {
        add: (str) => output.push(str),
        remove: (str) => output = output.filter(x => x !== str),
        print: () => console.log(output.join(',')),

    };

    for (const line of input) {
        let [command, string] = line.split(' ');

        if (command !== 'print') {
            libraryOfFunctions[command](string);
        } else {
            libraryOfFunctions[command]();
        }
    }

}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);