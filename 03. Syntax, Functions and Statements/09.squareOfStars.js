function squareOfStars(n) {
    if (typeof(n) === 'number') {
        for (let i = 1; i <= n; i++) {
            let result = '* '.repeat(n).trim();
            console.log(result);
        }
    } else {
        for (let i = 1; i <= 5; i++) {
            let result = '* '.repeat(5).trim();
            console.log(result);
        }
    }
}
squareOfStars()