(function arrayExtension() {
    Array.prototype.last = function () {
        return this[this.length - 1];
    }
    Array.prototype.skip = function(n) {
        return this.slice(n);
    }
    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }
    Array.prototype.sum = function () {
       return this.reduce((a, acc) => a + acc, 0)
    }
    Array.prototype.average = function () {
       return this.reduce((a, acc) => a + acc, 0) / this.length;
    }
})();


let variable = new Array(1, 2, 3, 4, 5) // [1, 2, 3, 4, 5]
console.log(variable.last());
console.log(variable.skip(2));
console.log(variable.take(2));
console.log(variable.sum());
console.log(variable.average());
