

export const getAllBooks = () => {
    return fetch(`http://localhost:8000/books`, {
      headers: {
        Authorization: `Token ${
          JSON.parse(localStorage.getItem("book_token")).token
        }`,
      },
    }).then((res) => res.json());
  };



  export const getBookById = async (bookId) => {
    const response = await fetch(`http://localhost:8000/books/${bookId}`, {
      headers: {
        Authorization: `Token ${
          JSON.parse(localStorage.getItem("book_token")).token
        }`,
      },
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch book with ID ${bookId}`);
    }
  
    const book = await response.json();
    return book;
  };
  