import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import background from "./img-wallpapers/terms.png";

import minielephant from './img-news/minielephant.jpg';
import minielephant1 from './img-news/minielephant1.jpg';
import minielephant2 from './img-news/minielephant2.jpg';

function Terms() {
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

          <div className="col-lg-6 terms">
            <h2><b>Az Erdőkilátó Állatkert és Szabadidő Park szabályai</b></h2>
            <p><b>Az állatkertre vonatkozó szabályok:</b></p>
            <ul>
              <li>Az állatkertben lévő állatokat kizárólag csak a helyszínen megvásárolt ZOO csemegével szabad etetni, az otthonról hozott ételekkel, maradékokkal szigorúan TILOS!</li>
              <li>Az állatok simogatásra csak a kijelölt helyszíneken van lehetőség. A kiskorú gyermekek csak szülői felügyelettel simogathatják meg az állatainkat!</li>
              <li>12 év alatt kizárólag csak szülői felügyelettel látogatható az állatkert!</li>
              <li>A park teljes területén a szemetelés, rongálás, a berendezések szabálytalan használata TILOS!</li>
              <li>Dohányozni, gyújtóeszközt használni csak, az arra kijelölt, táblával jelzett helyen szabad, egyébként SZIGORÚAN TILOS!</li>
            </ul>
            <p><b>A szabadidőparkra vonatkozó szabályok:</b></p>
            <ul>
              <li>A szabadidőparkba való belépéssel, a jegyek megvásárlásával, a szolgáltatások igénybevételével tudomásul veszed a házirendet, és magadra nézve kötelezően elfogadod az ismertetett biztonsági szabályokat is. E szabályokat minden esetben be kell tartanod és másokkal is be kell tartatnod.</li>
              <li>Szolgáltatásainkat mindenki a saját felelősségére veheti igénybe, saját és mások testi épségére vigyázva! Kiskorú vendégeink testi épségéért, valamint az általuk esetlegesen okozott balesetekért/károkért a szülő/ gondviselő visel felelősséget, még abban az esetben is, ha nincs jelen.</li>
              <li>Kérjük a szülőket és kísérőket, hogy a kiskorúak felügyeletéről gondoskodjanak, mert a bekövetkezett balesetekért és sérülésekért felelősséget nem vállalunk!</li>
              <li>A park teljes területén a szemetelés, rongálás, a berendezések szabálytalan használata TILOS!</li>
              <li>Dohányozni, gyújtóeszközt használni csak, az arra kijelölt, táblával jelzett helyen szabad, egyébként SZIGORÚAN TILOS!</li>
              <li>A szabadidőpark használata csak saját felelőségre használható!</li>
            </ul>
            <p><b>Az erdőben kirándulók csak a kijelölt tűzrakóhelyeken gyújthatnak tüzet az alábbi szabályok betartása mellett:</b></p>
            <ul>
              <li>a tűz meggyújtása előtt a tűzrakóhely környékét meg kell tisztítani a levelektől, faágaktól annak érdekében, hogy a tűz ne terjedhessen át az erdőre;</li>
              <li>a tüzet nem szabad felügyelet nélkül hagyni, de a még ki nem hűlt parazsat, hamu sem;</li>
              <li>amint feltámad a szél, a tüzet el kell oltani: gondoskodni kell arról, hogy készenlétben legyen a tűz oltására alkalmas anyag, eszköz (pl. víz, homok, lapát);</li>
              <li>az égetés befejezése után a tüzet gondosan el kell oltani, meg kell győződni arról, hogy tényleg elaludt, a hamura távozás előtt lehetőleg földet kell szórni.</li>
            </ul>
            <p><b>Nyitvatartás a kihelyezett tájékoztató szerint!</b></p>
          </div>

          <div className=" right col-lg-3">

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

              <div className="card col-lg-4"  style={{ width: '18rem' }}>
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
      <footer>
        <div className="text-center p-3 text-light" style={{ backgroundColor: '#29221A', left: 0, bottom: 0, width: '100%', position: 'fixed' }}>
          Készítette: Nagy Tibor, Tóth Tamás Levente, Kolozsvári László Krisztián
        </div>
      </footer>
    </div>
  );
}

export default Terms;