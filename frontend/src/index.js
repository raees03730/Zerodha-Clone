import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './index.css';
import HomePage from './landinge_page/home/HomePage';
import Signup from "./landinge_page/signup/Signup"
import AboutPage from "./landinge_page/about/AboutPage"
import ProductPage from "./landinge_page/products/ProductsPage"
import PricingPage from "./landinge_page/pricing/PricingPage"
import SupportPage from "./landinge_page/support/SupportPage"

import NotFound  from "./landinge_page/NotFound"
import Navbar from './landinge_page/Navbar';
import Footer from './landinge_page/Footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/about" element={<AboutPage />}/>
    <Route path="/product" element={<ProductPage />}/>
    <Route path="/pricing" element={<PricingPage />}/>
    <Route path="/support" element={<SupportPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer />
  </BrowserRouter>
);

