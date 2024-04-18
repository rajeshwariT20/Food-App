import React from "react";
import CarouselImg01 from '../Assets/CarouselImg01.jpg';
import CarouselImg04 from '../Assets/CarouselImg04.jpg';
import CarouselImg03 from '../Assets/CarouselImg03.jpg';

export default function Carousel(){
    return(
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div class="carousel-item active">
                <img src={CarouselImg01} width="100%" height="595px" />
                </div>
                <div className="carousel-item">
                <img src={CarouselImg03} width="100%" height="595px" />
                </div>
                <div className="carousel-item">
                    <img src={CarouselImg04} width="100%" height="595px"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
        </div>
    )
}