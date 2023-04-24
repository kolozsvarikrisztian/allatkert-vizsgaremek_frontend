import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import background from "./img-wallpapers/main.png";


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
import minielephant from './img-news/minielephant.jpg';
import minielephant1 from './img-news/minielephant1.jpg';
import minielephant2 from './img-news/minielephant2.jpg';

import Home from "./Home";

function Gallery() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>

<div className="welcome">
    <img src={require("./img/logo.png")} className="col-lg-8" alt="" />
    <div className="col-lg-2 welcometext">
      <h4>Üdvözöljük az Erdőkilátó Állatkert és Szabadidő Park galéria oldalán!</h4>
      <h4>Kellemes kikapcsolódást és böngészést kíván az állatkert egész csapata.</h4>
    </div>
    </div>
      <div className="container-fluid">
        <div className="content">
          <div className="col-lg-3 left">
            <div className="contact">
              <h2 className="divheader">Kapcsolat</h2>
              <p>Cím: <i>5520 Szeghalom, Állatkert utca 1-7.</i></p>
              <p>Központi vonal: <i>+36 / 66 / 000-1234</i></p>
              <p>Információs vonal: <i>+36 / 66 / 111-1234</i></p>
            </div>
            <div className="jegyek">
              <p className="leftdivheader"><strong>Tájékoztató a jelenlegi jegyárainkról</strong></p>
              <table className="jegy">
                <tbody><tr>
                  <th id="jegytipusok">Jegytípusok</th>
                  <th id="arak">Ár</th>
                </tr>
                  <tr>
                    <td id="jegytipus">Gyerek (3-14 év)</td>
                    <td id="ar">3500 Ft</td>
                  </tr>
                  <tr>
                    <td id="jegytipus">Diák</td>
                    <td id="ar">3800 Ft</td>
                  </tr>
                  <tr>
                    <td id="jegytipus">Felnőtt</td>
                    <td id="ar">5800 Ft</td>
                  </tr>
                  <tr>
                    <td id="jegytipus">Nyugdíjás</td>
                    <td id="ar">3800 Ft</td>
                  </tr>
                  <tr>
                    <td id="jegytipus">70 év felett</td>
                    <td id="ar">2000 Ft</td>
                  </tr>
                  <tr>
                    <td id="jegytipus">Fogyatékkal élők részére(1 fő + kísérő)</td>
                    <td id="ar">2000 Ft</td>
                  </tr>
                </tbody></table>
              <table className="jegy">
                <tbody><tr>
                  <th id="jegytipusok">Kedvezményes, csoportos jegytípusok</th>
                  <th id="arak">Ár</th>
                </tr>
                  <tr>
                    <td id="jegytipus">2 felnőtt + 1 gyermek</td>
                    <td id="ar">12500 Ft</td>
                  </tr>
                  <tr>
                    <td id="jegytipus">2 felnőtt + 2 gyermek</td>
                    <td id="ar">15500 Ft</td>
                  </tr>
                  <tr>
                    <td id="jegytipus">2 felnőtt + 3 gyermek</td>
                    <td id="ar">17500 Ft</td>
                  </tr>
                  <tr>
                    <td id="jegytipus">Óvodás csoport (15 fő után 2 kisérő 300 Ft / fő):</td>
                    <td id="ar">1000 Ft</td>
                  </tr>
                  <tr>
                    <td id="jegytipus">Diák csoport (15 fő után 2 kisérő 300 Ft / fő):</td>
                    <td id="ar">2500 Ft</td>
                  </tr>
                  <tr>
                    <td id="jegytipus">Felnőtt csoport (15 fő, az ár fejenként értendő):</td>
                    <td id="ar">4800 Ft</td>
                  </tr>
                  <tr>
                    <td id="jegytipus">Nyugdíjas csoport (15 fő, az ár fejenként értendő):</td>
                    <td id="ar">2800 Ft</td>
                  </tr>
                </tbody></table>
              <p className="leftdivheader"><strong>Kedvezményes jegytípus</strong></p>
              <p>Kérjük vegyék igénybe a fent megemlített kedvezményes jegytípusok valamelyikjét, ha Önök jogosultak rá.</p>
              <p className="leftdivheader"><strong>Csoportos kedvezmény</strong></p>
              <p>Amennyiben Önök valamilyen intézményből (iskola, óvoda, közintézmény) érkeznek, és a csoportjuk létszáma meghaladja a 15 főt, akkor jogosultak a fent megemlített csoportos kedvezményekre.</p>
              <h4 id="kiemelt">A csoportoknak előzetes bejelentkezés, illetve időpontegyeztetés szükséges azért, hogy elkerüljük a csoportok ütközését, és ezáltal kialakult kellemetlenségeket.</h4>
              <p className="leftdivheader"><strong>Fizetési lehetőségek</strong></p>
              <ul>
                <li id="fizetesimod">Készpénz (HUF)</li>
                <li id="fizetesimod">Bankkártyás fizetés (Mastercard, Visa, American Express)</li>
                <li id="fizetesimod">Apple Pay, Simple Pay</li>
                <li id="fizetesimod">SZÉP kártya (OTP, MKB, K&amp;H)</li>
                <li id="fizetesimod">Ajándékkártya</li>
              </ul>
              <h4 id="kiemelt">A számlaigényét kérjük, hogy előre jelezze. A számlát a pénztárnál tudja majd átvenni.</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mid">
              <h2 className="divheader">Galéria</h2>
              <div className="row">
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <img src={camping_day} className="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
                  <img src={path_tunnel} className="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape" />
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <img src={vizibicikli} className="w-100 shadow-1-strong rounded mb-4" alt="Mountains in the Clouds" />
                  <img src={undercliff} className="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <img src={gyalogtura} className="w-100 shadow-1-strong rounded mb-4" alt="Waves at Sea" />
                  <img src={camping_night} className="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" />
                </div>
                <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                  <img src={lake} className="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
                  <img src={zoovegetables} className="w-100 shadow-1-strong rounded mb-4" alt="Wintry Mountain Landscape" />
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <img src={boat} className="w-100 shadow-1-strong rounded mb-4" alt="Mountains in the Clouds" />
                  <img src={giftshop} className="w-100 shadow-1-strong rounded mb-4" alt="Boat on Calm Water" />
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <img src={campfire} className="w-100 shadow-1-strong rounded mb-4" alt="Waves at Sea" />
                  <img src={playground} className="w-100 shadow-1-strong rounded mb-4" alt="Yosemite National Park" />
                </div>
              </div>
            </div>
          </div>
          <div className="right col-lg-3">
            <h2 className="divheader">Friss hírek</h2>
            <div className="row">
              <div className="card col-lg-4" style={{ width: '18rem' }}>
                <img className="card-img-top" src={minielephant2} alt="Elefánt" />
                <div className="card-body">
                  <h5 className="card-title"><strong>Kiselefánt látogatása</strong></h5>
                  <p className="card-text">2023. február 17.-től a kiselefánt látogatása is elérhető a látógatóink számára!</p>
                  <a href="#" className="btn btn-primary">Bővebb információ</a>
                </div>
              </div>
              <div className="card col-lg-4" style={{ width: '18rem' }}>
                <img className="card-img-top" src={minielephant} alt="Elefánt" />
                <div className="card-body">
                  <h5 className="card-title"><strong>Elnevezték az elefántot</strong></h5>
                  <p className="card-text">A látogatók által beküldött nevekből első helyen végzett a Suzy név, így a kiselefánt azt a nevet kapta.</p>
                  <a href="#" className="btn btn-primary">Bővebb információ</a>
                </div>
              </div>
              <div className="card col-lg-4" style={{ width: '18rem' }}>
                <img className="card-img-top" src={minielephant1} alt="Elefánt" />
                <div className="card-body">
                  <h5 className="card-title"><strong>Új kiselefánt született</strong></h5>
                  <p className="card-text">2023. január 28.-án nőstény kiselefánt született az állatkertünkbe.</p>
                  <a href="#" className="btn btn-primary">Bővebb információ</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div className="text-center p-3 text-light" style={{ backgroundColor: '#29221A', left: 0, bottom: 0, width: '100%', position: 'fixed' }}>
          Készítette: Nagy Tibor, Tóth Tamás Levente, Kolozsvári László Krisztián
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}

export default Gallery;

