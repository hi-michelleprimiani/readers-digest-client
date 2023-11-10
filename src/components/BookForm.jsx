import { useEffect, useState } from "react";
import { getAllBooks } from "../services/Books";
import { useNavigate } from "react-router-dom";

export const BookForm = () => {
    const initialBookState = {
        title: "",
        isbn_number: "",
        author: "",
        cover_image: ""
    }

    const navigate = useNavigate()
    const [book, UpdateBookProps] = useState(initialBookState)
    const [chosenCategories, updateChosen] = useState(new Set())
    const [categories, ChangeCategories] = useState([{ id: 1, name: "Fiction"}, {id: 2, name: "Non-Fiction"}])



    const fetchCategories = async () => {
        const response = await fetch("http://localhost:8000/categories", {
            headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("book_token")).token}`
            }
        })
        const categories = await response.json()
        ChangeCategories(categories)
    }

    const shelveBook = async (evt) => {
        evt.preventDefault()

        await fetch(`http://localhost:8000/books`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("book_token")).token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...book, categories: Array.from(chosenCategories)})
        })
        await getAllBooks()
        navigate("/")
    }


   const handleUserInput = (e) => UpdateBookProps({ ...book, [e.target.id]: e.target.value })

   const formInput = (prop) => <input id={prop} type="text" value={book[prop]}
        className="form-control" onChange={handleUserInput} />


    const handleCategoryChosen = (category) => {
        const copy = new Set(chosenCategories)
        copy.has(category.id) ? copy.delete(category.id) : copy.add(category.id)
        updateChosen(copy)
    }


    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <form className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Add A New Book!</h2>
          <fieldset className="mb-4">
            <div className="mb-2">
              <label htmlFor="title" className="block text-gray-600">Title:</label>
            {formInput("title")}
            </div>
          </fieldset>
          <fieldset className="mb-4">
            <div className="mb-2">
              <label htmlFor="author" className="block text-gray-600">Author:</label>
            {formInput("author")}
            </div>
          </fieldset>
          <fieldset className="mb-4">
            <div className="mb-2">
              <label htmlFor="imgUrl" className="block text-gray-600">Image URL:</label>
            {formInput("cover_image")}
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
                <div>Categories:</div>
                {
                    categories.map(c => <div key={`category-${c.id}`}>
                        <input type="checkbox"
                                checked={chosenCategories.has(c.id)}
                                onChange={() => handleCategoryChosen(c)}
                        /> {c.name}
                    </div>)
                }
            </div>
          </fieldset>
          <button 
          type="submit"
          onClick={shelveBook}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Add Book
          </button>
        </form>
      );
    }      