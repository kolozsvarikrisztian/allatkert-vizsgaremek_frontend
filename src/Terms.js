import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import background from "./img-wallpapers/terms.png";

function Terms() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>


      <div className="welcome">
        <h1>Erdőkilátó Állatkert és Szabadidő Park</h1>
        <h4 id="leiras">Üdvözöljük az Erdőkilátó Állatkert és Szabadidő Park oldalán!</h4>
        <h4 id="leiras">Kellemes kikapcsolódást és böngészést kíván az állatkert egész csapata, ha tehetik akkor látogassanak el Hozzánk személyesen is!</h4>
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
                <li id="fizetesimod">Készpénz (HUF)</li>
                <li id="fizetesimod">Bankkártyás fizetés (Mastercard, Visa, American Express)</li>
                <li id="fizetesimod">Apple Pay, Simple Pay</li>
                <li id="fizetesimod">SZÉP kártya (OTP, MKB, K&H)</li>
                <li id="fizetesimod">Ajándékkártya</li>
              </ul>
              <h4 id="kiemelt">A számlaigényét kérjük, hogy előre jelezze. A számlát a pénztárnál tudja majd átvenni.</h4>
            </div>
          </div>

          <div className="col-lg-6 terms">
            <h2><b>Az Erdőkilátó Állatkert és Szabadidő Park szabályai</b></h2>
            <p>Az állatkertre vonatkozó szabályok:</p>
            <ul>
              <li>Az állatkertben lévő állatokat kizárólag csak a helyszínen megvásárolt ZOO csemegével szabad etetni, az otthonról hozott ételekkel, maradékokkal szigorúan TILOS!</li>
              <li>Az állatok simogatásra csak a kijelölt helyszíneken van lehetőség. A kiskorú gyermekek csak szülői felügyelettel simogathatják meg az állatainkat!</li>
              <li>12 év alatt kizárólag csak szülői felügyelettel látogatható az állatkert!</li>
              <li>A park teljes területén a szemetelés, rongálás, a berendezések szabálytalan használata TILOS!</li>
              <li>Dohányozni, gyújtóeszközt használni csak, az arra kijelölt, táblával jelzett helyen szabad, egyébként SZIGORÚAN TILOS!</li>
            </ul>
            <p>A szabadidőparkra vonatkozó szabályok:</p>
            <ul>
              <li>A szabadidőparkba való belépéssel, a jegyek megvásárlásával, a szolgáltatások igénybevételével tudomásul veszed a házirendet, és magadra nézve kötelezően elfogadod az ismertetett biztonsági szabályokat is. E szabályokat minden esetben be kell tartanod és másokkal is be kell tartatnod.</li>
              <li>Szolgáltatásainkat mindenki a saját felelősségére veheti igénybe, saját és mások testi épségére vigyázva! Kiskorú vendégeink testi épségéért, valamint az általuk esetlegesen okozott balesetekért/károkért a szülő/ gondviselő visel felelősséget, még abban az esetben is, ha nincs jelen.</li>
              <li>Kérjük a szülőket és kísérőket, hogy a kiskorúak felügyeletéről gondoskodjanak, mert a bekövetkezett balesetekért és sérülésekért felelősséget nem vállalunk!</li>
              <li>A park teljes területén a szemetelés, rongálás, a berendezések szabálytalan használata TILOS!</li>
              <li>Dohányozni, gyújtóeszközt használni csak, az arra kijelölt, táblával jelzett helyen szabad, egyébként SZIGORÚAN TILOS!</li>
              <li>A szabadidőpark használata csak saját felelőségre használható!</li>
            </ul>
            <p>Az erdőben kirándulók csak a kijelölt tűzrakóhelyeken gyújthatnak tüzet az alábbi szabályok betartása mellett:</p>
            <ul>
              <li>a tűz meggyújtása előtt a tűzrakóhely környékét meg kell tisztítani a levelektől, faágaktól annak érdekében, hogy a tűz ne terjedhessen át az erdőre;</li>
              <li>a tüzet nem szabad felügyelet nélkül hagyni, de a még ki nem hűlt parazsat, hamu sem;</li>
              <li>amint feltámad a szél, a tüzet el kell oltani: gondoskodni kell arról, hogy készenlétben legyen a tűz oltására alkalmas anyag, eszköz (pl. víz, homok, lapát);</li>
              <li>az égetés befejezése után a tüzet gondosan el kell oltani, meg kell győződni arról, hogy tényleg elaludt, a hamura távozás előtt lehetőleg földet kell szórni.</li>
            </ul>
            <p>Nyitvatartás a kihelyezett tájékoztató szerint!</p>
          </div>

          <div className=" right col-lg-3">

            <h2 className="divheader">Friss hírek</h2>

            <div className="row">

              <div className="card col-lg-4"  style={{ width: '18rem' }}>
                <img className="card-img-top" src="img-news/minielephant2.jpg" alt="Elefánt" />
                <div className="card-body">
                  <h5 className="card-title"><strong>Kiselefánt látogatása</strong></h5>
                  <p className="card-text">2023. február 17.-től a kiselefánt látogatása is elérhető a látógatóink számára!</p>
                  <a href="#" className="btn btn-primary">Bővebb információ</a>
                </div>
              </div>

              <div className="card col-lg-4"  style={{ width: '18rem' }}>
                <img className="card-img-top" src="img-news/minielephant.jpg" alt="Elefánt" />
                <div className="card-body">
                  <h5 className="card-title"><strong>Elnevezték az elefántot</strong></h5>
                  <p className="card-text">A látogatók által beküldött nevekből első helyen végzett a Suzy név, így a kiselefánt azt a nevet kapta.</p>
                  <a href="#" className="btn btn-primary">Bővebb információ</a>
                </div>
              </div>

              <div className="card col-lg-4"  style={{ width: '18rem' }}>
                <img className="card-img-top" src="img-news/minielephant1.jpg" alt="Elefánt" />
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
        <div className="text-center p-3 text-light" style="background-color: #29221A; left: 0; bottom: 0; width: 100%; position: fixed;">
          Készítette: Nagy Tibor, Tóth Tamás Levente, Kolozsvári László Krisztián
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}

export default Terms;