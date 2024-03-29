import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import "../assets/styles/reset.css";
import "../assets/styles/global.css";

import Main from "../pages/main";
import Movie from "../pages/movie";
import Session from "../pages/session";
import Sucess from "../pages/sucess";
import NotFound from "../pages/notfound";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/session/:id" element={<Session />} />
                <Route path="/sucess" element={<Sucess />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
};