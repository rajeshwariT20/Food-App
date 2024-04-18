import React from "react";
import './Home.css';
import Carousel from "./Carousel";
// import OrganicImg from '../Assets/OrganicImg.jpg';

export default function Home(){
    return(
        <div>
            <header className="home">
                <Carousel></Carousel>
            </header>
        </div>
    )
}