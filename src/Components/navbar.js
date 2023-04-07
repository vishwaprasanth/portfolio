import React from "react";
import './navbar.css'

function navbar(){
    return(
        <div class="header">
        <div class="logo">Vishwa <span>Prasanth</span></div>

        <div class="navbar">
                <a href="./Components/home.js" class="active">home</a>
                <a href="./Components/about.js">About</a>
                <a href="./Components/project.js">Project</a>
                <a href="./Components/contact">contact</a>
        </div>
            </div>
    )
}
export default navbar