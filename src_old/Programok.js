import './Programok.css';
import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Programok() {
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
                    <h1>Programok</h1>
                    <h4 id="leiras">Programjaink az állatkert és szabadidőpark területén</h4>
                </div>
                <div id="container">
                    <div className="card">
                        <div className="card-header">Gyalogtúra</div>
                        <img src="img-programok/gyalogtura.jpg" alt=""/>
                            <p>Helyszín: Nyugati főbejárat</p>
                            <p>Időpont: Minden hét szerdán 12:00 - 14:00</p>
                            <p>Gyalogtúrázás a Nyugati főbejárattól a Keleti főbejáratig.</p>
                    </div>
                    <div className="card">
                        <div className="card-header">Jóga</div>
                        <img src="img-programok/joga.jpg" alt=""/>
                            <p>Helyszín: Strand</p>
                            <p>Időpont: Minden hét szombat 13:00 - 14:00</p>
                            <p>Márk Katalin szellemi jóga gyakorlatokat tart kedves vendégeinknek.</p>
                    </div>
                    <div className="card">
                        <div className="card-header">Barkácsolás</div>
                        <img src="img-programok/barkacsolas.jpg" alt=""/>
                            <p>Helyszín: Déli főbejárat</p>
                            <p>Időpont: Minden hét kedd 15:00 - 16:00</p>
                            <p>Elek Takács ezermester gyakorlati órát tart a barkácsolásról és a házban megtalálható lehetőségekről.</p>
                    </div>
                </div>

                <footer>
                    <div className="text-center p-3 text-light">
                        Készítette: Nagy Tibor, Tóth Tamás Levente, Kolozsvári László Krisztián
                    </div>
                    {/* Copyright */}
                </footer>
            </div>
        </div>
    )
}

export default Programok;