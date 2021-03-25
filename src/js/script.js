let myLibrary = [];

function Book(title, author, noOfPage, read) {
  this.title = title;
  this.author = author;
  this.noOfPage = noOfPage;
  this.read = read;
}

function emptyInputs() {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('noOfPage').value = '';
}

function closeModal() {
  document.getElementById('close').click();
}

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

// setting Library to be stored in local storage
function setData() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const noOfPage = document.getElementById('noOfPage').value;
  const read = document.getElementById('chk');

  const errors = document.getElementById('error');
  errors.innerHTML = '';

  if (title === '') {
    errors.innerHTML += 'Title can\'t be empty';
    return;
  }
  if (author === '') {
    errors.innerHTML += 'Author can\'t be empty';
    return;
  }
  if (noOfPage === '') {
    errors.innerHTML += 'Page number can\'t be empty';
    return;
  }
  if (!Number.isInteger(parseInt(noOfPage, 10))) {
    errors.innerHTML += 'Page number should be integer ';
    return;
  }

  const book = new Book(title, author, noOfPage, read.checked);
  myLibrary.push(book);
  listBooks();
  setData();
  emptyInputs();
  closeModal();
}


function deleteBook(id) {
  myLibrary.splice(id, 1);
  listBooks();
  setData();
}

function readBook(id) {
  myLibrary[id].read = !myLibrary[id].read;
  listBooks();
}

// pulls books from local storage when page is refreshed
function restore() {
  if (!localStorage.myLibrary) {
    listBooks();
  } else {
    let objects = localStorage.getItem('myLibrary'); // gets information from local storage to use in below loop to create DOM/display
    objects = JSON.parse(objects);
    myLibrary = objects;
    listBooks();
  }
}

restore();