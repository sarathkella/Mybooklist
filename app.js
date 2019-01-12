class book {
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
 }

 document.addEventListener('DOMContentLoaded', UI.displayBooks);



 