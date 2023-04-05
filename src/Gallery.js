import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Gallery.css';
import './App.css';


import camping_day from './img-projekt/camping_day.jpeg';
import path_tunnel from './img-projekt/path_tunnel.jpeg';
import vizibicikli from './img-projekt/vizibicikli.jpeg';
import undercliff from './img-projekt/undercliff.jpeg';
import gyalogtura from './img-programok/gyalogtura.jpg';
import camping_night from './img-projekt/camping_night.jpeg';
import lake from './img-projekt/lake.jpeg';
import zoovegetables from './img-projekt/zoovegetables.jpg';
import boat from './img-projekt/boat.jpeg';
import giftshop from './img-projekt/giftshop.jpg';
import campfire from './img-projekt/campfire.jpeg';
import playground from './img-projekt/playground.jpg';

function Gallery() {
    return (
        <div>
        <div id="content" className="">
        <h1>Galéria</h1>
        <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
                className="w-100 shadow-1-strong rounded mb-4"
                src={camping_day}
                alt="Boat on Calm Water"
            />
        
            <img
                className="w-100 shadow-1-strong rounded mb-4"
                src={path_tunnel}
                alt="Wintry Mountain Landscape"
            />

            </div>
        
            <div className="col-lg-4 mb-4 mb-lg-0">
            <img
                className="w-100 shadow-1-strong rounded mb-4"
                src={vizibicikli}
                alt="Mountains in the Clouds"
            />
        
            <img
                className="w-100 shadow-1-strong rounded mb-4"
                src={undercliff}
                alt="Boat on Calm Water"
            />
            </div>
        
            <div className="col-lg-4 mb-4 mb-lg-0">
            <img
                className="w-100 shadow-1-strong rounded mb-4"
                src={gyalogtura}
                alt="Waves at Sea"
            />
        
            <img
                className="w-100 shadow-1-strong rounded mb-4"
                src={camping_night}
                alt="Yosemite National Park"
            />
            </div>


            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                    className="w-100 shadow-1-strong rounded mb-4"
                    src={lake}
                    alt="Boat on Calm Water"
                />
            
                <img
                    className="w-100 shadow-1-strong rounded mb-4"
                    src={zoovegetables}
                    alt="Wintry Mountain Landscape"
                />
                </div>
            
                <div className="col-lg-4 mb-4 mb-lg-0">
                <img
                    className="w-100 shadow-1-strong rounded mb-4"
                    src={boat}
                    alt="Mountains in the Clouds"
                />
            
                <img
                    className="w-100 shadow-1-strong rounded mb-4"
                    src={giftshop}
                    alt="Boat on Calm Water"
                />
                </div>
            
                <div className="col-lg-4 mb-4 mb-lg-0">
                <img
                    className="w-100 shadow-1-strong rounded mb-4"
                    src={campfire}
                    alt="Waves at Sea"
                />
            
                <img
                    className="w-100 shadow-1-strong rounded mb-4"
                    src={playground}
                    alt="Yosemite National Park"
                />
                </div>
        </div>
        </div>
        <footer>
            <div className="text-center p-3 text-light" style={{backgroundColor: "#29221A", left: "0", bottom: "0", width: "100%", position: "fixed"}}>
                Készítette: Nagy Tibor, Tóth Tamás Levente, Kolozsvári László Krisztián
            </div>
        </footer>
        </div>
    )
}

export default Gallery;

