import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Register } from "../pages/Register"
import { Authorized } from "./Authorized"
import { Login } from "../pages/Login"
import { BookList } from "./BookList"

export const ApplicationViews = () => {



    return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized/>}>
            <Route path="/" element={<BookList />}>


            </Route>



        </Route>
    </Routes>
    </BrowserRouter>
    )
}