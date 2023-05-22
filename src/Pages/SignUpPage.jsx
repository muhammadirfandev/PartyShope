import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { TopBar } from '../Components/TopBar/TopBar';
import { Footer } from '../Components/Footer/Footer';
import SignupForm from '../Components/SignupForm/SignupForm';

export const SignUpPage=()=>{


    return(<>
    
    <TopBar/>

    <Navbar/>
    
    <SignupForm/>

    <Footer/>

    </>);

    }

