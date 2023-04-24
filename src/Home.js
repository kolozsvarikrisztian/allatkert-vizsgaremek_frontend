import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import background from "./img-wallpapers/main.png";


function Home() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>

  <div className="welcome">
    <img src={require("./img/logo.png")} className="col-lg-8" alt="" />
    <div className="col-lg-2 welcometext">
      <h4>Üdvözöljük az Erdőkilátó Állatkert és Szabadidő Park oldalán!</h4>
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
                  </tr><tr>
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
                <div className="animalcard">
                  <h2>Gímszarvas</h2>
                  <div className="tableimg"><img src={require('./img-animal/gímszarvas.jpg')} alt="" /></div>
                  <table>
                    <tbody><tr>
                      <td id="onerow" className="kategoria">Becenév</td>
                      <td id="onerow" className="adat">Gombi</td>
                    </tr>
                      <tr>
                        <td id="onerow" className="kategoria">Életkor</td>
                        <td id="onerow" className="adat">10 év</td>
                      </tr>
                      <tr>
                        <td id="doublerow" className="kategoria">Állatfaj</td>
                        <td id="doublerow" className="adat">Cervus elaphus</td>
                      </tr>
                      <tr>
                        <td id="doublerow" className="kategoria">Származás</td>
                        <td id="doublerow" className="adat">Európa</td>
                      </tr>
                      <tr>
                        <td id="fourrows" className="kategoria">Táplálék</td>
                        <td id="fourrows" className="adat">Lágy szárú növények, a bokrok és fák rügyei</td>
                      </tr>
                    </tbody></table>
                </div>
                <div className="animalcard">
                  <h2>Hullámos papagáj</h2>
                  <div className="tableimg"><img src={require('./img-animal/hullamospapagaj.jpg')} alt="" /></div>
                  <div>
                    <table>
                      <tbody><tr>
                        <td id="onerow" className="kategoria">Becenév</td>
                        <td id="onerow" className="adat">Arász</td>
                      </tr>
                        <tr>
                          <td id="onerow" className="kategoria">Életkor</td>
                          <td id="onerow" className="adat">5 év</td>
                        </tr>
                        <tr>
                          <td id="doublerow" className="kategoria">Állatfaj</td>
                          <td id="doublerow" className="adat">Melopsittacus undulatus</td>
                        </tr>
                        <tr>
                          <td id="doublerow" className="kategoria">Származás</td>
                          <td id="doublerow" className="adat">Ausztrália</td>
                        </tr>
                        <tr>
                          <td id="fourrows" className="kategoria">Táplálék</td>
                          <td id="fourrows" className="adat">Fűmagvak, kedvence a köles</td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
                <div className="animalcard">
                  <h2>Indiai elefánt</h2>
                  <div className="tableimg"><img src={require('./img-animal/indiaielefant.jpg')} alt="" /></div>
                  <div>
                    <table>
                      <tbody><tr>
                        <td id="onerow" className="kategoria">Becenév</td>
                        <td id="onerow" className="adat">Bence</td>
                      </tr>
                        <tr>
                          <td id="onerow" className="kategoria">Életkor</td>
                          <td id="onerow" className="adat">26 év</td>
                        </tr>
                        <tr>
                          <td id="doublerow" className="kategoria">Állatfaj</td>
                          <td id="doublerow" className="adat">Elephas maximus indicus</td>
                        </tr>
                        <tr>
                          <td id="doublerow" className="kategoria">Származás</td>
                          <td id="doublerow" className="adat">India</td>
                        </tr>
                        <tr>
                          <td id="fourrows" className="kategoria">Táplálék</td>
                          <td id="fourrows" className="adat">füvet, fakérget, gyökeret és gyümölcsöt eszik</td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
                <div className="animalcard">
                  <h2>Jegesmedve</h2>
                  <div className="tableimg"><img src={require('./img-animal/jegesmedve.jpg')} alt="" /></div>
                  <div>
                    <table>
                      <tbody><tr>
                        <td id="onerow" className="kategoria">Becenév</td>
                        <td id="onerow" className="adat">Lackó</td>
                      </tr>
                        <tr>
                          <td id="onerow" className="kategoria">Életkor</td>
                          <td id="onerow" className="adat">14 év</td>
                        </tr>
                        <tr>
                          <td id="doublerow" className="kategoria">Állatfaj</td>
                          <td id="doublerow" className="adat">Ursus maritimus</td>
                        </tr>
                        <tr>
                          <td id="doublerow" className="kategoria">Származás</td>
                          <td id="doublerow" className="adat">Északi Sarkvidék</td>
                        </tr>
                        <tr>
                          <td id="fourrows" className="kategoria">Táplálék</td>
                          <td id="fourrows" className="adat">húsevő, kedvenc prédája a fókák</td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
                <div className="animalcard">
                  <h2>Kanadai hiúz</h2>
                  <div className="tableimg"><img src={require('./img-animal/kanadaihiúz.jpg')} alt="" /></div>
                  <div>
                    <table>
                      <tbody><tr>
                        <td id="onerow" className="kategoria">Becenév</td>
                        <td id="onerow" className="adat">Kancsi</td>
                      </tr>
                        <tr>
                          <td id="onerow" className="kategoria">Életkor</td>
                          <td id="onerow" className="adat">10 év</td>
                        </tr>
                        <tr>
                          <td id="doublerow" className="kategoria">Állatfaj</td>
                          <td id="doublerow" className="adat">Lynx canadensis</td>
                        </tr>
                        <tr>
                          <td id="doublerow" className="kategoria">Származás</td>
                          <td id="doublerow" className="adat">Észak Amerika, Kanada</td>
                        </tr>
                        <tr>
                          <td id="fourrows" className="kategoria">Táplálék</td>
                          <td id="fourrows" className="adat">húsevő, prédája a hócipős nyúl</td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
                <div className="animalcard">
                  <h2>Leopárd</h2>
                  <div className="tableimg"><img src={require('./img-animal/leopard.jpg')} alt="" /></div>
                  <div>
                    <table>
                      <tbody><tr>
                        <td id="onerow" className="kategoria">Becenév</td>
                        <td id="onerow" className="adat">Foltos</td>
                      </tr>
                        <tr>
                          <td id="onerow" className="kategoria">Életkor</td>
                          <td id="onerow" className="adat">8 év</td>
                        </tr>
                        <tr>
                          <td id="doublerow" className="kategoria">Állatfaj</td>
                          <td id="doublerow" className="adat">Panthera pardus</td>
                        </tr>
                        <tr>
                          <td id="doublerow" className="kategoria">Származás</td>
                          <td id="doublerow" className="adat">Dél Afrika</td>
                        </tr>
                        <tr>
                          <td id="fourrows" className="kategoria">Táplálék</td>
                          <td id="fourrows" className="adat">húsevő, gyakran eszik bogarakat, rágcsálókat és halakat</td>
                        </tr>
                      </tbody></table>
                  </div>
                </div>
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
                  <a href="#" className="btn btn-primary">Bővebb információ</a>
                </div>
              </div>
              <div className="card col-lg-4" style={{ width: '18rem' }}>
                <img className="card-img-top" src={require('./img-news/minielephant.jpg')} alt="Elefánt" />
                <div className="card-body">
                  <h5 className="card-title"><strong>Elnevezték az elefántot</strong></h5>
                  <p className="card-text">A látogatók által beküldött nevekből első helyen végzett a Suzy név, így a kiselefánt azt a nevet kapta.</p>
                  <a href="#" className="btn btn-primary">Bővebb információ</a>
                </div>
              </div>
              <div className="card col-lg-4" style={{ width: '18rem' }}>
                <img className="card-img-top" src={require('./img-news/minielephant1.jpg')} alt="Elefánt" />
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

export default Home;