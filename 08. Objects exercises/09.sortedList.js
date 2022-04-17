function createSortedList() {
    let obj = {
        arr: [],
        size: 0,
        add(element) {
            this.arr.push(element);
            this.size += 1;
            return this.arr.sort((a, b) => a - b);
        },
        remove(index) {
            if (index >= 0 && index < this.arr.length) {
                this.arr.splice(index, 1);
                this.size -=1;
                return this.arr.sort((a, b) => a - b);
            }
            
        },
        get(index) {
            if (index >= 0 && index < this.arr.length) {
                return this.arr[index];
            }
        },
    }
    return obj;
}

// let list = createSortedList();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1)); 
// list.remove(1);
// console.log(list.get(1));

var myList = createSortedList();
expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");

// Generate random list of 20 numbers
var expectedArray = [];
for (let i = 0; i < 20; i++) {
    expectedArray.push(Math.floor(Math.random() * 200) - 100);
}
// Add to collection
for (let i = 0; i < expectedArray.length; i++) {
    myList.add(expectedArray[i]);
}
expect(myList.size).to.equal(20, "Elements weren't added");
// Sort array
expectedArray.sort((a, b) => a - b);
// Compare with collection
for (let i = 0; i < expectedArray.length; i++) {
    expect(myList.get(i)).to.equal(expectedArray[i], "Array wasn't sorted");
}

