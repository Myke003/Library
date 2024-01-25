const myLibrary = []

function Book (){

    let titleValue = document.getElementById('title').value
    let authorValue = document.getElementById('author').value
    let pagesValue = document.getElementById('pages').value

    if (titleValue != "" && authorValue != "" && pagesValue != ""){

        let newBook = {titleValue, authorValue, pagesValue};
    
        myLibrary.push(newBook);
        
        console.log(myLibrary)

        addBookToLibrary();

        document.getElementById('title').value = "";
        document.getElementById('author').value = "";
        document.getElementById('pages').value = "";

    }else{
        return
    }

}

function addBookToLibrary() {
    let lastBook = myLibrary[myLibrary.length - 1];

    let book = document.createElement('div');
    book.classList.add('card');

    let title = document.createElement('h4');
    title.classList.add('card-title');
    title.textContent = lastBook.titleValue;

    let author = document.createElement('p');
    author.classList.add('card-author');
    author.textContent = lastBook.authorValue;

    let pages = document.createElement('p');
    pages.classList.add('card-pages');
    pages.textContent = lastBook.pagesValue;

    book.appendChild(title);
    book.appendChild(author);
    book.appendChild(pages);

    let booksContainer = document.getElementsByClassName("books-container")[0];

    booksContainer.appendChild(book);
}

