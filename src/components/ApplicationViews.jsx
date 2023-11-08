import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Register } from "../pages/Register"
import { Authorized } from "./Authorized"
import { Login } from "../pages/Login"
import { Home } from "../pages/Home"

export const ApplicationViews = () => {



    return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized/>}>
            <Route path="/" element={<Home />} />


        </Route>
    </Routes>
    </BrowserRouter>
    )
}