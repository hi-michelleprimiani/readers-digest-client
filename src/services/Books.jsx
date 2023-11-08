

export const getAllBooks = () => {
    return fetch(`http://localhost:8000/books`, {
      headers: {
        Authorization: `Token ${
          JSON.parse(localStorage.getItem("book_token")).token
        }`,
      },
    }).then((res) => res.json());
  };