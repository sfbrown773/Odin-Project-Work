/*Ok...so when you need to create many of the same sort of object, you need a constructor function

Your book objects should have the book’s title, author, the number of pages,
 and whether or not you have read the book*/

const myLibrary = [];

function createBook(title,author,numberPages,haveRead) {
    this.title = title;
    this.author = author;
    this.numberPages = numberPages;
    this.haveRead = haveRead;
    this.messageHaveRead = function () {
        if (this.haveRead === true) {
            return 'have read'
        } else {
            return 'not yet read'
        }
    },
    this.info = function () {
        return  `${this.title} by ${this.author}, ${this.numberPages} pages, ${this.messageHaveRead()}`;
    };
}

function addBookToLibrary(title, author, numberPages, haveRead) {
    const newBook = new createBook(title, author, numberPages, haveRead)
    myLibrary.push(newBook);
    return newBook;
  }

const addedBook = addBookToLibrary('asdf','asdf',4,true);
console.log(addedBook.info());

myLibrary.push(new createBook('1984', 'George Orwell', 328, true));
myLibrary.push(new createBook('To Kill a Mockingbird', 'Harper Lee', 281, false));
myLibrary.forEach(book => {
    console.log(book.info()); // Log the info of each book
});