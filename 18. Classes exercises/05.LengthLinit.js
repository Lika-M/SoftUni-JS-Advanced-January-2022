class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }
    increase(num) {
       return  this.innerLength += num;

    };
    decrease(num) {
        if (this.innerLength - num < 0) {
          return   this.innerLength = 0;
        } else {
           return  this.innerLength -= num;
        }
    };
    toString() {
        if (this.innerString.length > this.innerLength) {
            let diff = this.innerString.length - this.innerLength;

            return `${this.innerString.slice(0, -diff)}...`

        } else if (this.innerString.length <= this.innerLength) {
            return `${this.innerString}`
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
