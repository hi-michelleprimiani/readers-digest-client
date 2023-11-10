import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Register } from "../pages/Register"
import { Authorized } from "./Authorized"
import { Login } from "../pages/Login"
import { BookList } from "./BookList"
import { BookDetails } from "./BookDetails"
import { BookForm } from "./BookForm"

export const ApplicationViews = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Authorized />}>
            <Route path="/" element={<BookList />} />
            <Route path="book/:bookId" element={<BookDetails />} />
            <Route path="book/create" element={<BookForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  