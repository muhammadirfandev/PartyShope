import React from 'react'
import { Footer } from '../Components/Footer/Footer';
import { Hero } from '../Components/Hero/Hero';
import { ProductsApi } from '../Components/Products/Products';
import {TopBar} from './../Components/TopBar/TopBar';
import { Navbar } from './../Components/Navbar/Navbar';


export const Home=()=>
 {
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


