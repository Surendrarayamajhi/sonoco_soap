import React from 'react'
import Home from '../pages/Home';
import Product from '../pages/Products/Product';
import ProductDetails from '../pages/Products/ProductDetails';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Team from '../pages/teams/team';
import Gallery from '../pages/gallery/gallery';
import About from '../pages/about';

import {Routes, Route} from 'react-router-dom';

const Routers = () => {
  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/products' element={<Product />} />
    <Route path='/products/:id' element={<ProductDetails />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/team' element={<Team />} />
    <Route path='/gallery' element={<Gallery />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
}

export default Routers;