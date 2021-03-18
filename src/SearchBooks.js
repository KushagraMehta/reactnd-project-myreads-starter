import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class SearchBooks extends Component {
  state = {
    searchBooks: [],
  };

  updateQuery = (query) => {
    BooksAPI.search(query, 10).then((books) => {
      this.setState({
        searchBooks: books.error ? [] : books,
      });
    });
  };

  render() {
    // update book.shelf for find book in accordance with local data
    const mergedBooks = this.state.searchBooks.map((searchBook) => {
      const intersectedBook = this.props.books.find((book) => {
        return book.id === searchBook.id;
      });
      searchBook.shelf = intersectedBook ? intersectedBook.shelf : "none";

      return searchBook;
    });

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {mergedBooks.map((book) => (
              <Book
                key={book.id}
                book={book}
                updateShelf={this.props.updateShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
