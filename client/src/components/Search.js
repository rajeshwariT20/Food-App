import React from "react";
import "./Search.css"

export default function Search(){

    return(
        <form className="form-inline search">
            <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn" type="submit"><i class="fa fa-search"></i></button>
        </form>
    )
}