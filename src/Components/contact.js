import React from "react";
import './contact.css';

function Contact(){
    return(
        <div className="contact">
            <h1>Let's Get In Touch</h1>

            <p>As of now, I'm not looking for any new job opportunities, but my inbox is always open if you want to communicate with me. Hit me up if you have some question, want a collaboration or just play a game of chess. I'll try to get back to you as soon as I can.</p>

            <h2>Here are my Socials</h2>
            <div className="socialMedias">
            <ul>
                    <li><a href="https://github.com/vishwaprasanth" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png"/></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/vishwa-prasanth-161850247/" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"/></a>
                    </li>
                    <li><a href="mailto:vishwaprasanth1411@gmail.com" target="_blank">
                        <img src="https://cdn-icons-png.flaticon.com/128/2099/2099199.png"/></a>
                    </li>
                </ul>
                    
            </div>
        </div>
    )
}
export default Contact