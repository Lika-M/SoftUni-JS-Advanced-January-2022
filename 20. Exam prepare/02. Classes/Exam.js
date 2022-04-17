class LibraryCollection {
    constructor(capacity) {

        this.capacity = capacity;
        this.books = [];
    }
    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw Error('Not enough space in the collection.')
        } else {
            let foundBook = this.books.find(b => b.bookName == bookName);
            if (foundBook == undefined) {
                this.books.push({ bookName, bookAuthor, payed: false });
                return `The ${bookName}, with an author ${bookAuthor}, collect.`
            }
        }
    }
    payBook(bookName) {
        let foundBook = this.books.find(b => b.bookName == bookName);

        if (foundBook == undefined) {
            throw Error(`${bookName} is not in the collection.`)
        }
        if (foundBook.payed == true) {
            throw Error(`${bookName} has already been paid.`)
        };
        foundBook.payed = true;
        return `${bookName} has been successfully paid.`
    }
    removeBook(bookName) {
        let foundBook = this.books.find(b => b.bookName == bookName);

        if (foundBook == undefined) {
            throw Error(`The book, you're looking for, is not found.`)
        }
        if (foundBook.payed == false) {
            throw Error(`${bookName} need to be paid before removing from the collection.`)
        };
        let findIndex = this.books.findIndex(b => b.bookName == bookName);
        this.books.splice(findIndex, 1);
        return `${bookName} remove from the collection.`
    }
    getStatistics() {
        let emptySlots = this.capacity - this.books.length
    let result = []
        if (emptySlots > 0) {
            return `The book collection has ${emptySlots} empty spots left.`
        }
    }
}

const library = new LibraryCollection(2)
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
console.log(library.removeBook('Don Quixote'));
console.log(library.removeBook('In Search of Lost Time'));



