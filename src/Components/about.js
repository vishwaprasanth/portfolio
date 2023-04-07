import React from "react";
import './about.css';

function About(){
    return(
        <div className="about">
            <h1>About</h1>
            <p>Hello, My name is Vishwa Prasanth. I completed BE computer science.</p>
            <p>I'm a self-taught Front End developer from India. I build websites with a focus on providing the experience for everyone using them and responsiveness. Curious to learn more about developing scalable distribution systems, love problem solving, and care about writing and maintainable code. A responsive design makes your website accessible to all users, regardless of their devices.</p>
            <div className="my-stack">
                <h1>MY TECH Stack</h1>
                <ul>
                    <li>HTML5</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Reactjs</li>
                    <li>Git</li>
                </ul>
            </div>

        </div>
    )
}

export default About;