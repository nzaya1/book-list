import React, { Component } from 'react';
import BookModel from '../models/Book';

export default class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      author: '',
      isbn: ''
    };
  }

  onAddBook() {
    const book = new BookModel(this.state.name, this.state.author, this.state.isbn);
    this.props.createBook(book);
    this.setState({ name: '', author: '', isbn: '' });
  }

  render() {
    return (
      <div className="mt-3">
        <form>

          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              className="form-control"
              placeholder="Book Title" />
          </div>

          <div className="mb-3">
            <label className="form-label">Author</label>
            <input
              value={this.state.author}
              onChange={(e) => this.setState({ author: e.target.value })}
              type="text"
              className="form-control"
              placeholder="Author" />
          </div>

          <div className="mb-3">
            <label className="form-label">ISBN#</label>
            <input
              value={this.state.isbn}
              onChange={(e) => this.setState({ isbn: e.target.value })}
              type="text"
              className="form-control"
              placeholder="ISBN" />
          </div>

          <div className="d-grid gap-2 mb-4">
            <button onClick={() => this.onAddBook()}
              className="btn btn-outline-primary"
              type="button">
              Submit
            </button>
          </div>
        </form>
      </div>

    )
  }
}
