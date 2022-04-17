                                                                                  
function carFactory(input) {

    let model = input.model;
    let power = input.power;
    let color = input.color;
    let carriage = input.carriage;
    let wheelsize = input.wheelsize;

    if(wheelsize % 2 == 0)
        wheelsize -= 1;

    let engine = ''
    if(power <= 90)
        engine = { power: 90, volume: 1800 };
    else if (power <= 120)
        engine = { power: 120, volume: 2400 };
    else if(power > 120)
        engine = { power: 200, volume: 3500 };


    let factory = {
        model: model,
        engine: {
            power: engine.power,
            volume: engine.volume
        },
        carriage: {
            type: carriage,
            color: color
        },
        wheels:[wheelsize, wheelsize, wheelsize, wheelsize]
    };

    return factory;
};

//     { model: 'VW Golf II',
//   engine: { power: 90,
//             volume: 1800 },
//   carriage: { type: 'hatchback',
//               color: 'blue' },
//   wheels: [13, 13, 13, 13] }

let myCar = carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
)
console.log(myCar);
const myCar2 = carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
)
console.log(myCar2);

