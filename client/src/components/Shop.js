import React from 'react';
import './Shop.css';


export default function Shop(){
    return(
        <>
        <header className="shopProfile">
            <div className='container'>
                <div className='row shop-heading'>
                    <div className='col-sm-12'>
                    <h3>Our Products</h3>
                    <h4> Fresh Farm Veggies, Delivers at your Door Step</h4>
                    </div>
                </div>
            </div>
        </header>
        <section className='container'>
        <div className="row list">
            <div className='col-sm-12'> 
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
        </section>
        </>
    )
}