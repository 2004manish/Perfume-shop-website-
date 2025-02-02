import React from "react";
import { createRoot } from 'react-dom/client';
// import Homepage from "./pages/Homepage";
// import ProductPage from "./pages/ProductPage";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";


const root = createRoot(document.getElementById('root'));
root.render(<App />);
