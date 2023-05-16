
import React from 'react';
import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import { ProductsApi } from './Components/Products/Products';
import { TopBar } from './Components/TopBar/TopBar';

function App() {
  return (
    <>
    <TopBar/>
    <Navbar/>
    <Hero/>
    <ProductsApi/>
    <Footer/>
      </>
  );
}

export default App;
