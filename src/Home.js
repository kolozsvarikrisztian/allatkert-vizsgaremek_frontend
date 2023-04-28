import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import background from "./img-wallpapers/main.png";

function Home() {

  const [allatok, SetAllatok] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/api/allatok")
      .then(response => {
        return response.json()
      })
      .then(data => {
        SetAllatok(data)
      })
  }, [])

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: `100vh`, backgroundPosition: `cover`, backgroundRepeat: `repeat` }}>

      <div className="welcome">
        <img src={require("./img/logo.png")} className="col-lg-8" alt="logo" />
        <div className="col-lg-2 welcometext">
          <h4>Üdvözöljük az Erdőkilátó Állatkert és Szabadidő Park oldalán!</h4>
          <h4>Kellemes kikapcsolódást és böngészést kíván az állatkert egész csapata,</h4>
          <h4>ha tehetik akkor látogassanak el Hozzánk személyesen is!</h4>
        </div>
      </div>
      <div className="container-fluid">
        <div className="content">
          <div className="col-lg-3 left">
            <div className="contact">
              <h2 className="divheader">Kapcsolat</h2>
              <p>Cím: <i>5520 Szeghalom, Állatkert utca 1-7.</i></p>
              <p>E-mail: <i>erdokilato@gmail.com</i></p>
              <p>Központi vonal: <i>+36 / 66 / 000-1234</i></p>
              <p>Információs vonal: <i>+36 / 66 / 111-1234</i></p>
            </div>
            <div className="jegyek">
              <p className="leftdivheader"><strong>Tájékoztató a jelenlegi jegyárainkról</strong></p>
              <table className="jegy">
                <tbody><tr>
                  <th class="jegytipusok">Jegytípusok</th>
                  <th id="arak">Ár</th>
                </tr>
                  <tr>
                    <td class="jegytipus">Gyerek (3-14 év)</td>
                    <td id="ar">3500 Ft</td>
                  </tr>
                  <tr>
                    <td class="jegytipus">Diák</td>
                    <td id="ar">3800 Ft</td>
                  </tr><tr>
                    <td class="jegytipus">Felnőtt</td>
                    <td id="ar">5800 Ft</td>
                  </tr>
                  <tr>
                    <td class="jegytipus">Nyugdíjás</td>
                    <td id="ar">3800 Ft</td>
                  </tr>
                  <tr>
                    <td class="jegytipus">70 év felett</td>
                    <td id="ar">2000 Ft</td>
                  </tr>
                  <tr>
                    <td class="jegytipus">Fogyatékkal élők részére(1 fő + kísérő)</td>
                    <td id="ar">2000 Ft</td>
                  </tr>
                </tbody></table>
              <table className="jegy">
                <tbody><tr>
                  <th class="jegytipusok">Kedvezményes, csoportos jegytípusok</th>
                  <th id="arak">Ár</th>
                </tr>
                  <tr>
                    <td class="jegytipus">2 felnőtt + 1 gyermek</td>
                    <td id="ar">12500 Ft</td>
                  </tr>
                  <tr>
                    <td class="jegytipus">2 felnőtt + 2 gyermek</td>
                    <td id="ar">15500 Ft</td>
                  </tr>
                  <tr>
                    <td class="jegytipus">2 felnőtt + 3 gyermek</td>
                    <td id="ar">17500 Ft</td>
                  </tr>
                  <tr>
                    <td class="jegytipus">Óvodás csoport (15 fő után 2 kisérő 300 Ft / fő):</td>
                    <td id="ar">1000 Ft</td>
                  </tr>
                  <tr>
                    <td class="jegytipus">Diák csoport (15 fő után 2 kisérő 300 Ft / fő):</td>
                    <td id="ar">2500 Ft</td>
                  </tr>
                  <tr>
                    <td class="jegytipus">Felnőtt csoport (15 fő, az ár fejenként értendő):</td>
                    <td id="ar">4800 Ft</td>
                  </tr>
                  <tr>
                    <td class="jegytipus">Nyugdíjas csoport (15 fő, az ár fejenként értendő):</td>
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
                <li>Készpénz (HUF)</li>
                <li>Bankkártyás fizetés (Mastercard, Visa, American Express)</li>
                <li>Apple Pay, Simple Pay</li>
                <li>SZÉP kártya (OTP, MKB, K&amp;H)</li>
                <li>Ajándékkártya</li>
              </ul>
              <h4 id="kiemelt">A számlaigényét kérjük, hogy előre jelezze. A számlát a pénztárnál tudja majd átvenni.</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mid">
              <div className="rolunk">
                <h2 className="divheader">Rólunk</h2>
                <h4 className="leiras">
                  Az erdőkilátói állatkert és szabadidőpark Szeghalom városától 20 km-re az erdő mélyén a varázslatos fák közé megálmodott helyszín 2023 óta fogadja a vendégeit, melynek célja, hogy a látogatók minél több élménnyel gazdagodva térjenek haza. A dolgozók lelkes munkájuknak köszönhetően lett olyan ez az állatkert, mint ahogy elképzeltük.
                </h4>
                <h4 className="leiras">
                  Az állatkert fő attrakciója, amely a park területének az 1/4-ét tölti ki, jelenleg 55 állatnak ad otthont. Számos kontinensekről származó állatfaj található itt, amelyeket naponta több száz látogató csodál meg az ország minden pontjáról. Az állatok földrészenként csoportosított kifutókban tekinthetőek meg.
                </h4>
                <h4 className="leiras">
                  A szabadidőpark részei: egy tó, tópart, tanösvény, erdő, krosszpálya, játszótér, étterem.
                  A tópart a kikapcsolódásra vágyó látogatóknak a park strandja a legideálisabb hely. A partszakaszon egy ételbár üzemel reggeltől késő délutánig. A tó fürdésre, a tópart sátorozásra és tábortűzrakásra is ideális, természetesen a szigorú szabályok betartása mellett.
                  Az erdő a parkerdőben kitaposott ösvényeken haladva számos facsoportokat tekinthetnek meg a látogatók. Az erdő jelentős része is alkalmas sátorozásra.
                  A kerékpárral érkező látogatóknak lehetőségük van kipróbálni a krosszpályát, melynek domborzata földkupacokból kialakított ugratókból állnak. A rámpák mérete a 3 métert is meghaladják.
                  Az étterem a park étterme a tölgyerdő mélyén az állatkert és a tópart látványától elszigetelve helyezkedik el, azonban az épület teraszairól a körülötte lévő erdő elképesztő látványt biztosít a vendégeinek.
                </h4>
                <h4 className="leiras">Kívánjuk, hogy sétái során visszatérő vendégként is fedezze fel az Erdőkilátói Állatkert és Szabadidőpark ezernyi csodáját és értékét.</h4>
              </div>
              <div id="animals" className="row">
                <h2 className="divheader">Állataink</h2>

                {allatok.map(value => (
                  <div className="animalcard">
                  <h2>{value.nev}</h2>
                  <div className="tableimg"><img src={value.kepUrl} alt={value.nev} /></div>
                  <table>
                    <tbody>
                        <tr>
                          <td className="kategoria onerow">Becenév</td>
                          <td className="adat onerow">{value.becenev}</td>
                        </tr>
                        <tr>
                          <td className="kategoria onerow">Életkor</td>
                          <td className="adat onerow">{value.eletkor}</td>
                        </tr>
                        <tr>
                          <td className="kategoria doublerow">Származás</td>
                          <td className="adat doublerow">{value.szarmazas}</td>
                        </tr>
                        <tr>
                          <td className="kategoria fourrows">Táplálék</td>
                          <td className="adat fourrows">{value.taplalek}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ))}
                
                
              </div>
            </div>
          </div>
          <div className="right col-lg-3">
            <h2 className="divheader">Friss hírek</h2>
            <div className="row">
              <div className="card col-lg-4" style={{ width: '18rem' }}>
                <img className="card-img-top" src={require('./img-news/minielephant2.jpg')} alt="Elefánt" />
                <div className="card-body">
                  <h5 className="card-title"><strong>Kiselefánt látogatása</strong></h5>
                  <p className="card-text">2023. február 17.-től a kiselefánt látogatása is elérhető a látógatóink számára!</p>
                  <a href="http://localhost:3000/static/media/minielephant2.54008bed9a1b789cd664.jpg" target="_blank" rel="noreferrer" className="btn btn-primary">Bővebb információ</a>
                </div>
              </div>
              <div className="card col-lg-4" style={{ width: '18rem' }}>
                <img className="card-img-top" src={require('./img-news/minielephant.jpg')} alt="Elefánt" />
                <div className="card-body">
                  <h5 className="card-title"><strong>Elnevezték az elefántot</strong></h5>
                  <p className="card-text">A látogatók által beküldött nevekből első helyen végzett a Suzy név, így a kiselefánt azt a nevet kapta.</p>
                  <a href="http://localhost:3000/static/media/minielephant.c317118d8dd9b0d1596f.jpg" target="_blank" rel="noreferrer" className="btn btn-primary">Bővebb információ</a>
                </div>
              </div>
              <div className="card col-lg-4" style={{ width: '18rem' }}>
                <img className="card-img-top" src={require('./img-news/minielephant1.jpg')} alt="Elefánt" />
                <div className="card-body">
                  <h5 className="card-title"><strong>Új kiselefánt született</strong></h5>
                  <p className="card-text">2023. január 28.-án nőstény kiselefánt született az állatkertünkbe.</p>
                  <a href="http://localhost:3000/static/media/minielephant1.e664ee1b6ae679f9a2ed.jpg" target="_blank" rel="noreferrer" className="btn btn-primary">Bővebb információ</a>
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
      </footer>
    </div>
  );
}

export default Home;