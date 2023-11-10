import { useEffect, useState } from "react";
import { getAllBooks } from "../services/Books";
import { Navigate, useNavigate } from "react-router-dom";

export const BookList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    getAllBooks().then((bookData) => {
      setBooks(bookData);
    });
  }, []);

  return (
    <main>
      <h1 className="text-4xl text-center">Welcome to Readers Digest</h1>
      <div className="book-list-container flex flex-wrap gap-5 items-center justify-between my-10">
        {books.map((book) => {
          return (
            <div
              key={book.id}
              className="book-card"
              onClick={() => {
                navigate(`/book/${book.id}`);}}
            >
              <div className="book-title">
                {book.title}
              </div>
              <div className="book-author">{book.author}</div>
              <img
                className="book_img"
                src={book.cover_image}
                alt={book.title}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};
