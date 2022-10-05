import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import "../assets/styles/reset.css";
import "../assets/styles/global.css";

import Main from "../pages/main";
import Sessions from "../pages/sessions";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/sessoes:id" element={<Sessions />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
};

function NotFound() {
    return <h1>NotFound</h1>
};