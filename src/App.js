import React from "react";
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import MyWorks from "./myWorks/MyWorks";
import HireMe from "./hireMe/HireMe";
import Contacts from "./contacts/Contacts";
import Footer from "./footer/Footer";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <MyWorks/>
            <HireMe/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
