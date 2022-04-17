function wordsUpperCase(string) {

    let pattern = /\b\w+\b/g;
        
    let arr = [];
    let matches = pattern.exec(string);

    while (matches !== null) {
        let word = matches[0].toUpperCase();
        arr.push(word);
        matches = pattern.exec(string);
    }
   console.log(arr.join(', '));
}

wordsUpperCase('Functions in JS can be nested, i.e. hold other functions')