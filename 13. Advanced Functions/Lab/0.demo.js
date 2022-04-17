// function fly(x){
//     console.log(this.name, 'I can fly!', x); // => global
// };

// let obj = {
//     name: 'Pesho',
//     fly,
// }

// fly(10); // this => global obj, 
// fly.apply(obj); /// there are not args => underfind
// fly.apply({name: 'Angel'}, [16]) /// args are in array
// fly.call(obj, 5); // args are putting one by one
// const myFunction = fly.bind(obj, 40); // !!! Change context without execution!
// myFunction(); // Execution when invoke


function start(a){
    let counter = 0;
    function increment(){
        counter += a;
        console.log(counter);
    }
    return increment;
}
const myIncrement = start(5);
myIncrement(2)
myIncrement(2)
myIncrement(2)
