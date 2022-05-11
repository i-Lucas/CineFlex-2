import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import '../public/stylesheets/reset.css';
import '../public/stylesheets/global.css';
import '../public/stylesheets/fonts.css';

import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Components/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

const container = document.querySelector('.root');
const root = createRoot(container);
root.render(<App />);