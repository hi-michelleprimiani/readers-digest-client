import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"



export const BookDetails = () => {
    const [chosenBook, setChosenBook] = useState([])
    const {bookId} = useParams()

    const getBookById = async () => {
        let url = `http://localhost:8000/books/${bookId}`;
        const response = await fetch(url, {
          headers: {
            Authorization: `Token ${
              JSON.parse(localStorage.getItem("book_token")).token
            }`,
          },
        });
        const book = await response.json();
        setChosenBook(book);
      };

    
      useEffect(() => {
        getBookById();
      }, []);



      return (
        <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="details-container">
            <h2 className="font-bold text-4xl mb-2">{chosenBook.title}</h2>
            <p className="text-gray-700 text-1xl">{chosenBook.author}</p>
            <img
              className="w-full"
              src={chosenBook.cover_image}
              alt={chosenBook.title}
            />
          <div className="category font-bold text-xl p-3">Categories</div>
          {chosenBook.categories?.map((category) => {
            return <div key={category.id}>
              {category.name}
            </div>
          })}
          </div>
          <br/>
          <div className="reviews-container">
            <div className="review details-container text-center p-10">
              <div className="text-xl font-bold p-3">Reviews</div>
            {chosenBook.reviews?.map((review) => {
              return (
                <div key={review.id}>
                  {review.user.first_name} {review.user.last_name} left a {review.rating} star review <br/>{review.comments} <br/>
                  <br/>
                </div>
              );
            })}
            </div>
          </div>
        </div>
      );
      
    
}