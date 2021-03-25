let myLibrary = [
    {
        title: 'Boss',
        author: 'Hritik Roshan',
        noOfPages: 210
    },
    {
        title: 'Vampires Blood',
        author: 'Natasia Poleman',
        noOfPage: 456
    }
];

function Book(title,author,noOfPage, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.noOfPage = noOfPage;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
  const book = new Book('Vampires Blood', 'Natasia Poleman', 456)
  myLibrary.push = book;

}

console.log(myLibrary);
addBookToLibrary();