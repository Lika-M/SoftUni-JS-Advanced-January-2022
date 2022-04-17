class List {

    constructor() {
        this.data = [];
        this.size = this.data.length;
    }
    add(element) {
        this.data.push(element);
        this.size ++;
        return this.data.sort((a, b) => a - b);
    }
    remove(index){
        if (this.size > 0 && index >= 0 && index < this.size){
            this.data.splice(index, 1);
            this.size --;
        }
        return this.data;
    }
    get (index){
        if (this.size > 0 && index >= 0 && index < this.size){
            return this.data[index];
        }
    }
    
}

let list = new List();
list.add(10);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));	
console.log(list.size);



/*•	add(elemenent) - adds a new element to the collection
•	remove(index) - removes the element at position index
•	get(index) - returns the value of the element at position index
•	size - number of elements stored in the collection
 */
