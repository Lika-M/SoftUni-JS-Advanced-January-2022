
const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

// this is the code;
function factory(library, orders) {

    const array = [];
    for (const obj of orders) {

        const object = Object.assign({}, obj.template);
       
        for (let part of obj.parts) {
            object[part] = library[part];
        }
        array.push(object);
    }
    return array;
}

// this is the code;

const products = factory(library, orders);
console.log(products);

const player = products[3];
player.play('Mick Jagger', 'Sympathy for the devil');
