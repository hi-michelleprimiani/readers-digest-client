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
              className="books flex items-center basis-80 flex-wrap justify-center text-center"
              style={{
                border: "1px solid black", // Soft border
                borderRadius: "10px", // Small border radius
                backgroundColor: "#d9f7f7", // Pale blue background color
                padding: "10px", // Add some padding for spacing
              }}
              onClick={() => {
                navigate(`/book/${book.id}`);}}
            >
              <div className="book-title text-2xl px-12 py-2">
                {book.title}
              </div>
              <div className="book-author font-light">Author: {book.author}</div>
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
