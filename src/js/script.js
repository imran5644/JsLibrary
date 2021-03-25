let myLibrary = [
    {
        title: 'Boss',
        author: 'Hritik Roshan',
        noOfPage: 900,
        read: false
    },
    {
        title: 'Vampires Blood',
        author: 'Natasia Poleman',
        noOfPage: 456,
        read: true
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
  const book = new Book('Vampires Blood', 'Natasia Poleman', 467)
  myLibrary.push = book;

}

console.log(myLibrary);


function listBooks() {
    document.getElementById('list').innerHTML = '';
    const d = document.getElementById('list');
    for (let i = 0; i < myLibrary.length; i += 1) {
      d.innerHTML += `
      <div class="col-5">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${myLibrary[i].title} ( ${myLibrary[i].noOfPage} pages)</h5>
            <h6 class="card-subtitle mb-2 text-muted">${myLibrary[i].author}</h6>
            <p class="card-text">Have you read it before? ${myLibrary[i].read}</p>
            <div class="d-grid gap-2">
              <button class="btn btn-primary" onClick="deleteBook(${i})" class="card-link">Delete</button>
              <button class="btn btn-primary" onClick="readBook(${i})" class="card-link">Change read</button>
            </div>
          </div>
        </div>
      </div>`;
    }
  }

  function readBook(id) {
    myLibrary[id].read = !myLibrary[id].read;
    listBooks();
  }

  window.onload = function() {
    listBooks()
  };
  