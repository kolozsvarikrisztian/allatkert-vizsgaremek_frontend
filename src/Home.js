import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Home.css';
import './App.css';

import Minielefant from './img-news/minielephant2.jpg';
import Minielefant1 from './img-news/minielephant.jpg';
import Minielefant2 from './img-news/minielephant1.jpg';


function Home() {
    return (
        <div id="menu">
            <ul>
            <li><a href="index.html"><strong>Főoldal</strong></a></li>
            <li><a href="rolunk.html"><strong>Rólunk</strong></a></li>
            <li><a href="allatok.html"><strong>Állatok</strong></a></li>
            <li><a href="programok.html"><strong>Programok</strong></a></li>
            <li><a href="helyszinek.html"><strong>Helyszínek</strong></a></li>
            <li><a href="galeria.html"><strong>Galéria</strong></a></li>
            <li><a href="jegyek.html"><strong>Jegyek</strong></a></li>
            <li><a href="kapcsolat.html"><strong>Kapcsolat</strong></a></li>
        </ul>
        <div className="page">
            <div id="content">
                <h1>Erdőkilátó Állatkert és Szabadidő Park</h1>
                <h4 id="leiras">Üdvözöljük az Erdőkilátó Állatkert és Szabadidő Park oldalán!</h4>
                <h4 id="leiras">Kellemes kikapcsolódást és böngészést kíván az állatkert egész csapata, ha tehetik akkor látogassanak el Hozzánk személyesen is!</h4>
                <h1>Friss hírek</h1>
                <div className="container">
                    <div className="row">
                        <div className="card col-lg-4" style={{width:"18rem"}}>
                        <img className="card-img-top" src={Minielefant} alt="Elefánt" />
                            <div className="card-body">
                                <h5 className="card-title"><strong>Kiselefánt látogatása</strong></h5>
                                <p className="card-text">2023. február 17.-től a kiselefánt látogatása is elérhető a látógatóink számára!</p>
                                <a href="#" className="btn btn-primary">Bővebb információ</a>
                            </div>
                        </div>

                        <div className="card col-lg-4" style={{width:"18rem"}}>
                        <img className="card-img-top" src={Minielefant1} alt="Elefánt" />
                            <div className="card-body">
                                <h5 className="card-title"><strong>Elnevezték az elefántot</strong></h5>
                                <p className="card-text">A látogatók által beküldött nevekből első helyen végzett a Suzy név, így a kiselefánt azt a nevet kapta.</p>
                                <a href="#" className="btn btn-primary">Bővebb információ</a>
                            </div>
                        </div>

                        <div className="card col-lg-4" style={{width:"18rem"}}>
                        <img className="card-img-top" src={Minielefant2} alt="Elefánt" />
                            <div className="card-body">
                                <h5 className="card-title"><strong>Új kiselefánt született</strong></h5>
                                <p className="card-text">2023. január 28.-án nőstény kiselefánt született az állatkertünkbe.</p>
                                <a href="#" className="btn btn-primary">Bővebb információ</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <footer>
                <div className="text-center p-3 text-light" style={{backgroundColor: "#29221A", left: "0", bottom: "0", width: "100%", position: "fixed"}}>
                Készítette: Nagy Tibor, Tóth Tamás Levente, Kolozsvári László Krisztián
                </div>
                {/* Copyright */}
            </footer>
        </div>
        </div>
    )
}

export default Home;