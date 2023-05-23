import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { TopBar } from '../Components/TopBar/TopBar';
import { Footer } from '../Components/Footer/Footer';
import LoginForm from '../Components/LoginForm/LoginForm';

export const LoginPage=()=>{


    return(<>
    
    <TopBar/>

    <Navbar/>
    
    <LoginForm/>

    <Footer/>
    
    </>);

}
