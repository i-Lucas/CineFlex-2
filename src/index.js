import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';

import '../public/stylesheets/reset.css';
import '../public/stylesheets/global.css';
import '../public/stylesheets/fonts.css';

import ComponentA from './Components/ComponentA';
import ComponentB from './Components/ComponentB';
import ComponentC from './Components/ComponentC';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ComponentA />} />
				<Route path="/B" element={<ComponentB />} />
				<Route path="/C" element={<ComponentC />} />
			</Routes>
		</BrowserRouter>
	);
}

const container = document.querySelector('.root');
const root = createRoot(container);
root.render(<App />);