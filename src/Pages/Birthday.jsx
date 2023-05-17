import React from 'react'
import { Footer } from '../Components/Footer/Footer';
import { Hero } from '../Components/Hero/Hero';
import { ProductsApi } from '../Components/Products/Products';
import {TopBar} from './../Components/TopBar/TopBar';
import { Navbar } from './../Components/Navbar/Navbar';

export const BirthdayPage=()=>
 {
  return (
    <>
    <TopBar/>
    <Navbar/>
    
    <h1>This is Birthday Page</h1>
    <Footer/>
      </>
  );
}


