import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import background from "./img-wallpapers/locations.png";

import minielephant from './img-news/minielephant.jpg';
import minielephant1 from './img-news/minielephant1.jpg';
import minielephant2 from './img-news/minielephant2.jpg';

function Map() {
  return (
    <div style={{ backgroundImage: `url(${background})`,backgroundSize: `100vh`, backgroundPosition: `cover`, backgroundRepeat: `repeat` }}>

  <div className="welcome">
    <img src={require("./img/logo.png")} className="col-lg-8" alt="" />
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
                <tr>
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
              </table>
              <table className="jegy">
                <tr>
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
              </table>
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
                <li>SZÉP kártya (OTP, MKB, K&H)</li>
                <li>Ajándékkártya</li>
              </ul>
              <h4 id="kiemelt">A számlaigényét kérjük, hogy előre jelezze. A számlát a pénztárnál tudja majd átvenni.</h4>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="mid">
              <div className="content-map">
                <h2 className="divheader">Térkép</h2>
                <div className="terkep">
                  <img src={require('./img-map/map.png')} alt="" />
                </div>
              </div>

              <div className="events">
                <h2 className="divheader">Programjaink</h2>
                <div className="container">
                  <div className="row">



                    <div className="col-lg-12">
                      <div className="eventcard">
                        <p className="eventheader">Gyalogtúra</p>
                        <div className="eventimg">
                          <img src={require('./img-programok/gyalogtura.jpg')} alt="" />
                        </div>
                        <table className="eventdata">
                          <tr>
                            <td className="eventlogo"><img src="img-logo/location.png" className="logo" alt="" /></td>
                            <td className="event-td">Nyugati főbejárat</td>
                          </tr>
                          <tr>
                            <td className="eventlogo"><img src="img-logo/time.png" className="logo" alt="" /></td>
                            <td className="event-td">Minden nap<br />12:00 - 14:00</td>
                          </tr>
                        </table>
                        <div className="eventdescription">
                          <p>Gyalogtúrázás a Nyugati főbejárattól a Keleti főbejáratig.</p>
                        </div>
                      </div>
                    </div>



                    <div className="col-lg-12">
                      <div className="eventcard">
                        <p className="eventheader">Jóga</p>
                        <div className="eventimg">
                          <img src={require('./img-programok/joga.jpg')} className="eventimg" alt="" />
                        </div>
                        <table className="eventdata">
                          <tr>
                            <td className="eventlogo"><img src="img-logo/location.png" className="logo" alt="" /></td>
                            <td className="event-td">Strand</td>
                          </tr>
                          <tr>
                            <td className="eventlogo"><img src="img-logo/time.png" className="logo" alt="" /></td>
                            <td className="event-td">Szombatonként<br />13:00 - 14:00</td>
                          </tr>
                        </table>
                        <div className="eventdescription">
                          <p>Márk Katalin szellemi jóga gyakorlatokat tart kedves vendégeinknek.</p>
                        </div>
                      </div>
                    </div>



                    <div className="col-lg-12">
                      <div className="eventcard">
                        <p className="eventheader">Barkácsolás</p>
                        <div className="eventimg">
                          <img src={require('./img-programok/barkacsolas.jpg')} className="eventimg" alt="" />
                        </div>
                        <table className="eventdata">
                          <tr>
                            <td className="eventlogo"><img src="img-logo/location.png" className="logo" alt="" /></td>
                            <td className="event-td">Déli főbejárat</td>
                          </tr>
                          <tr>
                            <td className="eventlogo"><img src="img-logo/time.png" className="logo" alt="" /></td>
                            <td className="event-td">Keddenként<br />15:00 - 16:00</td>
                          </tr>
                        </table>
                        <div className="eventdescription">
                          <p>Elek Takács ezermester gyakorlati órát tart a barkácsolásról és a házban megtalálható lehetőségekről.</p>
                        </div>
                      </div>
                    </div>



                    <div className="col-lg-12">
                      <div className="eventcard">
                        <p className="eventheader">Mountain bike / BMX verseny</p>
                        <div className="eventimg">
                          <img src={require('./img-programok/mtb.jpeg')} className="eventimg" alt="" />
                        </div>
                        <table className="eventdata">
                          <tr>
                            <td className="eventlogo"><img src="img-logo/location.png" className="logo" alt="" /></td>
                            <td className="event-td">Crosspálya</td>
                          </tr>
                          <tr>
                            <td className="eventlogo"><img src="img-logo/time.png" className="logo" alt="" /></td>
                            <td className="event-td">Csütörtökönként<br />14:30 - 15:00</td>
                          </tr>
                        </table>
                        <div className="eventdescription">
                          <p></p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right col-lg-3">
            <h2 className="divheader">Friss hírek</h2>
            <div className="row">

              <div className="card col-lg-4"  style={{ width: '18rem' }}>
                <img className="card-img-top" src={minielephant2} alt="Elefánt" />
                <div className="card-body">
                  <h5 className="card-title"><strong>Kiselefánt látogatása</strong></h5>
                  <p className="card-text">2023. február 17.-től a kiselefánt látogatása is elérhető a látógatóink számára!</p>
                  <a href="http://localhost:3000/static/media/minielephant2.54008bed9a1b789cd664.jpg" target="_blank" rel="noreferrer" className="btn btn-primary">Bővebb információ</a>
                </div>
              </div>

              <div className="card col-lg-4"  style={{ width: '18rem' }}>
                <img className="card-img-top" src={minielephant} alt="Elefánt" />
                <div className="card-body">
                  <h5 className="card-title"><strong>Elnevezték az elefántot</strong></h5>
                  <p className="card-text">A látogatók által beküldött nevekből első helyen végzett a Suzy név, így a kiselefánt azt a nevet kapta.</p>
                  <a href="http://localhost:3000/static/media/minielephant.c317118d8dd9b0d1596f.jpg" target="_blank" rel="noreferrer" className="btn btn-primary">Bővebb információ</a>
                </div>
              </div>

              <div className="card col-lg-4" style={{ width: '18rem' }}>
                <img className="card-img-top" src={minielephant1} alt="Elefánt" />
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

      <div className="container-fluid marg">
        <div className="locations">
          <h2 className="divheader">Helyszínek</h2>
          <div className="row">

            <div className="mapcard">
              <div className="mapimg">
                <p className="mapheader">Főbejárat, pénztár</p>
                <img src={require('./img-projekt/checkout2.jpg')} alt="" />
              </div>
              <div className="mapdata">
                <p>A látogatóink a főbejáratot átlépve azonnal a pénztárunkkal találkoznak, ahol meg tudják váltani a jegyeiket, illetve tájékoztatást kérhetnek.</p>
              </div>
            </div>

            <div className="mapcard">
              <div className="mapimg">
                <p className="mapheader">Állatkert</p>
                <img src={require('./img-projekt/zoo.jpeg')} alt="" />
              </div>
              <div className="mapdata">
                <p>Az állatkert parkunk egyik fő attrakciója, amely a park területének 1/4-ét tölti ki. Számos kontinensekről származó állatfaj található itt, amelyeket naponta több száz látogató csodál meg az ország minden pontjából. Az állatok földrészenként csoportosított kifutókban tekinthetőek meg. Az állatkerten belül számos helyszín van kijelölve, ahol állatsimogatásra és etetésre van lehetőségük a látogatóknak.</p>
              </div>
            </div>

            <div className="mapcard">
              <div className="mapimg">
                <p className="mapheader">Tópart</p>
                <img src={require('./img-projekt/lake.jpeg')} alt="" />
              </div>
              <div className="mapdata">
                <p>A kikapcsolódásra vágyó látogatóknak a park strandja a legideálisabb hely. A partszakaszon egy ételbár üzemel minden nap reggel 7 órától éjfélig, amely lángost, pizzát és különleges koktélokat kínál. Az ételbár mellett egy vízibicikli kölcsönző is üzemel reggel 7 órától délután 4 óráig. A tó fürdésre, a tópart sátrazásra és tábortűzrakásra is ideális, természetesen szigorú szabályok mellett.</p>
              </div>
            </div>

            <div className="mapcard">
              <div className="mapimg">
                <p className="mapheader">Erdő</p>
                <img src={require('./img-projekt/path_forest.jpeg')} alt="" />
              </div>
              <div className="mapdata">
                <p>A parkerdőben kitaposott ösvényeken haladva számos facsoportokat tekinthetnek meg a látogatók. Az erdő jelentős része alkalmas a sátrazásra. A kerékpárral érkező látogatóknak lehetőségük van kipróbálni a crosspályát, melynek domborzata földkupacokból kialakított ugratókból állnak. A rámpák magassága a három métert is meghaladják.</p>
              </div>
            </div>

            <div className="mapcard">
              <div className="mapimg">
                <p className="mapheader">Étterem</p>
                <img src={require('./img-projekt/restaurant_forest.jpeg')} alt="" />
              </div>
              <div className="mapdata">
                <p>A park étterme a tölgyerdő mélyén az állatkert és a tópart látványától elszigetelve helyezkedik el, azonban a háromemeletes épület teraszairól a körülötte lévő erdő elképesztő látványt biztosít vendégeinek.</p>
              </div>
            </div>

            <div className="mapcard">
              <div className="mapimg">
                <p className="mapheader">Játszótér</p>
                <img src={require('./img-projekt/playground.jpg')} alt="" />
              </div>
              <div className="mapdata">
                <p>A kisgyermekekre gondolva a park területén megtalható egy játszótér is, ahol egészen 2-12 éves korig lehet játszani, fejleszteni a képességeiket. A kisebb korosztály kizárólag szülői felügyelettel tartózkodhat a játszótér területén.</p>
              </div>
            </div>

            <div className="mapcard">
              <div className="mapimg">
                <p className="mapheader">ZOO csemege</p>
                <img src={require('./img-projekt/zoovegetables.jpg')} alt="" />
              </div>
              <div className="mapdata">
                <p>A ZOO csemege standnál lehet megvásárolni az eledelt az állatoknak és kizárólag csak azzal lehet őket etetni, a kijelölt helyen.</p>
              </div>
            </div>

            <div className="mapcard">
              <div className="mapimg">
                <p className="mapheader">Sátrazás, kemping</p>
                <img src={require('./img-projekt/camping_day.jpeg')} alt="" />
              </div>
              <div className="mapdata">
                <p>A látogatók részére lehetőség van kempingezni, sátorozni. Ez a helyszín csak nyár folyamán elérhető akkor, mikor egymást követő több napon is tiszta az időjárás.</p>
              </div>
            </div>

            <div className="mapcard">
              <div className="mapimg">
                <p className="mapheader">Tábortűz</p>
                <img src={require('./img-projekt/campfire.jpeg')} alt="" />
              </div>
              <div className="mapdata">
                <p>A kempingezők részére az este folyamán tábortűz lehetőség is van, amelyet kizárólag a szigorú szabály betartásával lehet elkezdeni.</p>
              </div>
            </div>

            <div className="mapcard">
              <div className="mapimg">
                <p className="mapheader">Ajándékbolt</p>
                <img src={require('./img-projekt/giftshop.jpg')} alt="" />
              </div>
              <div className="mapdata">
                <p>A park területén több helyen elhelyeztünk kis ajándékstandokat, ahol különböző ajándékokat, képeslapokat, hűtőmágneseket és további kiegészítőket vásárolhattok meg saját részre, vagy pedig egy kedves embernek ajándékba.</p>
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

export default Map;