import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Component } from 'react';

import Book from './components/book';
import Booklist from './components/booklist';

class App extends Component {
  constructor(props) {
    super(props);

    let storedBooks = localStorage.getItem('books') ? localStorage.getItem('books') : '[]';
    const books = JSON.parse(storedBooks)

    this.state = { books: books };
  }

  onBookCreated(book) {
    this.state.books.push(book);
    this.saveBooks(this.state.books);
  }

  onBookRemoved(bookId) {
    const updatedBooks = this.state.books.filter(book => book.id !== bookId);
    this.saveBooks(updatedBooks);
  }

  saveBooks(booksArr) {
    this.setState({ books: booksArr });
    localStorage.setItem('books', JSON.stringify(booksArr));
  }


  render() {
    return (
      <div className="container card mt-4 p-4">
        <div className="text-center">
          <h1> BookList</h1>
        </div>

        <hr />
        <div className="text-center">
          <h2> Add Book:</h2>
        </div>

        <Book createBook={(book) => this.onBookCreated(book)} />
        <Booklist books={this.state.books} bookRemoved={(bookId) => this.onBookRemoved(bookId)} />
      </div>
    );
  }
}

export default App;
