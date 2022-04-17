class Hex {
    constructor(value) {
        this.value = value;
    }
    velueOf() {
        return valueOf(this.value)
    }
    toString() {
        // This function will show its hexadecimal value starting with "0x"
        return '0x' + (this.value.toString(16)).toUpperCase();
    }
    plus(c) {
        // 'This function should add a number or Hex object and return a new Hex object.'
        let currentValue = this.value + c.value;
        return new Hex(currentValue);
    }
    minus(d) {
        //This function should subtract a number or Hex object and return a new Hex object.
        let currentValue = this.value - d.value;
        return new Hex(currentValue);
    }
    static parse(str){
        //Create a parse class method that can parse 
        // Hexidecimal numbers and convert them to standard decimal numbers.
        return parseInt(str, 16)
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(Hex.parse('AAA'));

