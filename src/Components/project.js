import React from "react";
// import './project.css';
import "./project.css";

function project(){
    return(
        <div className="container">
            <h1>Project</h1>
            <div className="projects">

            <div className="project">
                <img className="project-img" src="https://static.thenounproject.com/png/3907595-200.png"></img>
                <p>in this project i created a dino jumb game</p>

                <div className="links">
                <a href="https://vishwa-t-rex.netlify.app" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/7268/7268615.png" alt="#">
                    </img>
                </a>
                <a href="https://github.com/vishwaprasanth/T-rex"><img src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png"/></a>
                </div>
            </div>

            <div className="project">
                <img className="project-img" src="https://thumbnails.production.thenounproject.com/wq64qL6rM2gA99UhUlshKMdKKtA=/fit-in/1000x1000/photos.production.thenounproject.com/photos/top_view_of_two_hands_holding_fries-scopio-af35bfc9-256e-4333-acfb-fc255aae9dc6.jpg"></img>
                <p>it a recipe app project</p>

                <div className="links">
                <a href="https://recipe-app-vishwaprasanth.netlify.app/" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/7268/7268615.png" alt="#">
                    </img>
                </a>
                <a href="https://github.com/vishwaprasanth/Recipe-app" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png"/></a>
                </div>
            </div>

            <div className="project">
                <img className="project-img" src="https://thumbnails.production.thenounproject.com/jKtwFIr4E4SpnC6sNTwD9P4GBsU=/fit-in/1000x1000/photos.production.thenounproject.com/photos/0277F058-D603-42A3-9590-CA2DD2917E99.jpg"></img>
                <p>it a recipe app project</p>

                <div className="links">
                <a href="https://vishwaprasanth-movie-app.netlify.app" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/7268/7268615.png" alt="#"></img>
                </a>
                <a href="https://vishwaprasanth-movie-app.netlify.app/" target="_blank">
                    <img src="https://cdn-icons-png.flaticon.com/512/4926/4926624.png"/>
                
                </a>
                </div>
            </div>
            </div>

        </div>
    )
}

export default project;