class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

 class UI{
     static displayBooks() {
         const StoredBooks = [
             {
                  title: 'Book one',
                  author: 'saarath',
                  isbn: '123564'
             },
             {
                title: 'Book two',
                author: 'saarath chandra',
                isbn: '12356463'
             }
         ];
         const books = StoredBooks;

         books.forEach((book)=> UI.AddBookToList(book))
     }

     static AddBookToList(book){
         const list = document.querySelector('#book-list');

         const row = document.createElement('tr');

         row.innerHTML = `<td>${book.title}</td>
                          <td>${book.author}</td>
                          <td>${book.isbn}</td>
         <td><a href = "#" class ="btn btn-danger btn-sm delete">X</a></td>`;

         list.appendChild(row);
     }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, classname){
           const div = document.createElement('div');
           div.className= `alert alert-${classname}`;
           div.appendChild(document.createTextNode(message));
           const container = document.querySelector('.container');
           const form = document.querySelector('#book-form');
           container.insertBefore(div, form);
           setTimeout(()=>document.querySelector('alert').remove(), 2000)
    }

     static clearFields(){
         document.querySelector('#title').value = '';
         document.querySelector('#author').value = '';
         document.querySelector('#isbn').value = '';
     }

 }

 document.addEventListener('DOMContentLoaded', UI.displayBooks);


 document.querySelector('#book-form').addEventListener('submit', (e) =>{

    e.preventDefault(); 
     
     const title = document.querySelector('#title').value;
     const author = document.querySelector('#author').value;
     const isbn = document.querySelector('#isbn').value;

    if(title === '' || author === '' || isbn === ''){
       UI.showAlert('fill all the fields', 'danger');
    }
    else {
        const book = new Book(title, author, isbn);
        UI.AddBookToList(book);
        UI.showAlert('Book added', 'success')
        UI.clearFields();
    }
 });


 document.querySelector('#book-list').addEventListener('click', (e) => {
          UI.deleteBook(e.target);
          UI.showAlert('Book removed','success');
 });



  