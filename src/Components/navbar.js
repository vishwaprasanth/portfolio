import React from "react";
import './navbar.css'

function navbar(){
    return(
        <div class="header">
        <div class="logo">Vishwa <span>Prasanth</span></div>

        <div class="navbar">
                <a href="home.html" class="active">home</a>
                <a href="about.html">About</a>
                <a href="project.html">Project</a>
                <a href="contact.html">contact</a>
        </div>
            </div>
    )
}
export default navbar