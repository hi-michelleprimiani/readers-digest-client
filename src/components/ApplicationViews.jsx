import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Register } from "../pages/Register"
import { Authorized } from "./Authorized"
import { Login } from "../pages/Login"
import { BookList } from "./BookList"
import { BookDetails } from "./BookDetails"

export const ApplicationViews = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<Authorized />}>
            <Route path="/" element={<BookList />} />
            <Route path="book/:bookId" element={<BookDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  