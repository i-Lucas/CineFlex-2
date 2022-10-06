import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import "../assets/styles/reset.css";
import "../assets/styles/global.css";

import Main from "../pages/main";
import Movie from "../pages/movie";
import Session from "../pages/session";

export default function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/session/:id" element={<Session />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
};

function NotFound() {
    return <h1>NotFound</h1>
};