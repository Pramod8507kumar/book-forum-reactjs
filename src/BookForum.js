import React, { useState } from 'react';
import './style.css';

function BookForum() {
  const [books, setBooks] = useState([]);
  const [bookName, setBookName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [isbnNumber, setIsbnNumber] = useState('');

  function handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    switch (name) {
      case 'bookName':
        setBookName(value);
        break;
      case 'authorName':
        setAuthorName(value);
        break;
      case 'isbnNumber':
        setIsbnNumber(value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newBook = {
      bookName: bookName,
      authorName: authorName,
      isbnNumber: isbnNumber
    };
    setBooks([...books, newBook]);
    resetForm();
  }

  function resetForm() {
    setBookName('');
    setAuthorName('');
    setIsbnNumber('');
  }

  function handleDeleteBook(index) {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  }

  function handleDeleteAllBooks() {
    setBooks([]);
  }
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Book Name:
          <input
            className="form-input"
            name="bookName"
            type="text"
            value={bookName}
            onChange={handleInputChange} required
          />
        </label>
        <br />
        <label className="form-label">
          Author Name:
          <input
            className="form-input"
            name="authorName"
            type="text"
            value={authorName}
            onChange={handleInputChange} required
          />
        </label>
        <br />
        <label className="form-label">
          ISBN Number:
          <input
            className="form-input"
            name="isbnNumber"
            type="text"
            value={isbnNumber}
            onChange={handleInputChange} required
          />
        </label>
        <br />
        <button className="btn btn-primary btn-lg" type="submit">Submit</button>
      </form>
      <hr/>
      <h2 className="subtitle">Books:</h2>
      {books.length > 0 ? books.map((book, index) => (
        <div className="book" key={index}>
          <h5>Book {index + 1}</h5>
          <p>{book.bookName}</p>
          <p>{book.authorName}</p>
          <p>{book.isbnNumber}</p>
          <span onClick={() => handleDeleteBook(index)}><img src="./delete.png" alt="delete" /></span>
        </div>
      )) : <h3>No book to display</h3>}
      <hr/>
      {books.length > 0 && <button className="delete-btn btn btn-danger" onClick={() => handleDeleteAllBooks()}>Delete all books</button>
      }</div>
  );
}

export default BookForum;
