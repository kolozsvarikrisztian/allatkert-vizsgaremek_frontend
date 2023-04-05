import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Home.css';
import './App.css';

function Home() {
    return (
        <div>

        <div id="menu">
      <ul>
          <li class="active"><strong>Főoldal</strong></li>
          <li><a href="terms.html"><strong>Szabályzat</strong></a></li>
          <li><a href="map.html"><strong>Térkép</strong></a></li>
          <li><a href="galeria.html"><strong>Galéria</strong></a></li>
      </ul>
  </div>

  <div class="welcome">
    <h1>Erdőkilátó Állatkert és Szabadidő Park</h1>
    <h4 id="leiras">Üdvözöljük az Erdőkilátó Állatkert és Szabadidő Park oldalán!</h4>
    <h4 id="leiras">Kellemes kikapcsolódást és böngészést kíván az állatkert egész csapata, <br> ha tehetik akkor látogassanak el Hozzánk személyesen is!</h4>
  </div>

  <div class="container-fluid">  
            <div class="content">
              <div class="col-lg-3 left">
                <div class="contact">
                  <h2 class="divheader">Kapcsolat</h2>
                  <p>Cím: <i>5520 Szeghalom, Állatkert utca 1-7.</i></p>
                  <p>Központi vonal: <i>+36 / 66 / 000-1234</i></p>
                  <p>Információs vonal: <i>+36 / 66 / 111-1234</i></p>
                </div>
                <div class="jegyek">
                  <p class="leftdivheader"><strong>Tájékoztató a jelenlegi jegyárainkról</strong></p>
                  <table class="jegy">
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
                    </tr>0
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
                  <table class="jegy">
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
                    <p class="leftdivheader"><strong>Kedvezményes jegytípus</strong></p>
                    <p>Kérjük vegyék igénybe a fent megemlített kedvezményes jegytípusok valamelyikjét, ha Önök jogosultak rá.</p>
                    <p class="leftdivheader"><strong>Csoportos kedvezmény</strong></p>
                    <p>Amennyiben Önök valamilyen intézményből (iskola, óvoda, közintézmény) érkeznek, és a csoportjuk létszáma meghaladja a 15 főt, akkor jogosultak a fent megemlített csoportos kedvezményekre.</p>
                    <h4 id="kiemelt">A csoportoknak előzetes bejelentkezés, illetve időpontegyeztetés szükséges azért, hogy elkerüljük a csoportok ütközését, és ezáltal kialakult kellemetlenségeket.</h4>
                    <p class="leftdivheader"><strong>Fizetési lehetőségek</strong></p>
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
  
        <div class="col-lg-6">
          <div class="mid">
            <div class="rolunk">
              <h2 class="divheader">Rólunk</h2>
              <h4 class="leiras">
                Az erdőkilátói állatkert és szabadidőpark Szeghalom városától 20 km-re az erdő mélyén a varázslatos fák közé megálmodott helyszín 2023 óta fogadja a vendégeit, melynek célja, hogy a látogatók minél több élménnyel gazdagodva térjenek haza. A dolgozók lelkes munkájuknak köszönhetően lett olyan ez az állatkert, mint ahogy elképzeltük.
              </h4>
              <h4 class="leiras">
                Az állatkert fő attrakciója, amely a park területének az 1/4-ét tölti ki, jelenleg 55 állatnak ad otthont. Számos kontinensekről származó állatfaj található itt, amelyeket naponta több száz látogató csodál meg az ország minden pontjáról. Az állatok földrészenként csoportosított kifutókban tekinthetőek meg.
              </h4>
              <h4 class="leiras">
                A szabadidőpark részei: egy tó, tópart, tanösvény, erdő, krosszpálya, játszótér, étterem.
                A tópart a kikapcsolódásra vágyó látogatóknak a park strandja a legideálisabb hely. A partszakaszon egy ételbár üzemel reggeltől késő délutánig. A tó fürdésre, a tópart sátorozásra és tábortűzrakásra is ideális, természetesen a szigorú szabályok betartása mellett.
                Az erdő a parkerdőben kitaposott ösvényeken haladva számos facsoportokat tekinthetnek meg a látogatók. Az erdő jelentős része is alkalmas sátorozásra.
                A kerékpárral érkező látogatóknak lehetőségük van kipróbálni a krosszpályát, melynek domborzata földkupacokból kialakított ugratókból állnak. A rámpák mérete a 3 métert is meghaladják.
                Az étterem a park étterme a tölgyerdő mélyén az állatkert és a tópart látványától elszigetelve helyezkedik el, azonban az épület teraszairól a körülötte lévő erdő elképesztő látványt biztosít a vendégeinek.
              </h4>
              <h4 class="leiras">Kívánjuk, hogy sétái során visszatérő vendégként is fedezze fel az Erdőkilátói Állatkert és Szabadidőpark ezernyi csodáját és értékét.</h4>
            </div>
            <div id="animals" class="row">
              <h2 class="divheader">Állataink</h2>
              <div class="animalcard">
                <h2>Gímszarvas</h2>
                <div class="tableimg"><img  src="img-animal/gímszarvas.jpg" alt=""></div>
                <table>
                  <tr>
                    <td id="onerow" class="kategoria">Becenév</td>
                    <td id="onerow" class="adat">Gombi</td>
                  </tr>
                  <tr>
                    <td id="onerow" class="kategoria">Életkor</td>
                    <td id="onerow" class="adat">10 év</td>
                  </tr>
                  <tr>
                    <td id="doublerow" class="kategoria">Állatfaj</td>
                    <td id="doublerow" class="adat">Cervus elaphus</td>
                  </tr>
                  <tr>
                    <td id="doublerow" class="kategoria">Származás</td>
                    <td id="doublerow" class="adat">Európa</td>
                  </tr>
                  <tr>
                    <td id="fourrows" class="kategoria">Táplálék</td>
                    <td id="fourrows" class="adat">Lágy szárú növények, a bokrok és fák rügyei</td>
                  </tr>
                </table>
              </div>
              <div class="animalcard">
                <h2>Hullámos papagáj</h2>
                <div class="tableimg"><img  src="img-animal/hullamospapagaj.jpg" alt=""></div>
                <div>
                  <table>
                    <tr>
                      <td id="onerow" class="kategoria">Becenév</td>
                      <td id="onerow" class="adat">Arász</td>
                    </tr>
                    <tr>
                      <td id="onerow" class="kategoria">Életkor</td>
                      <td id="onerow" class="adat">5 év</td>
                    </tr>
                    <tr>
                      <td id="doublerow" class="kategoria">Állatfaj</td>
                      <td id="doublerow" class="adat">Melopsittacus undulatus</td>
                    </tr>
                    <tr>
                      <td id="doublerow" class="kategoria">Származás</td>
                      <td id="doublerow" class="adat">Ausztrália</td>
                    </tr>
                    <tr>
                      <td id="fourrows" class="kategoria">Táplálék</td>
                      <td id="fourrows" class="adat">Fűmagvak, kedvence a köles</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="animalcard">
                <h2>Indiai elefánt</h2>
                <div class="tableimg"><img  src="img-animal/indiaielefant.jpg" alt=""></div>
                <div>
                  <table>
                    <tr>
                      <td id="onerow" class="kategoria">Becenév</td>
                      <td id="onerow" class="adat">Bence</td>
                    </tr>
                    <tr>
                      <td id="onerow" class="kategoria">Életkor</td>
                      <td id="onerow" class="adat">26 év</td>
                    </tr>
                    <tr>
                      <td id="doublerow" class="kategoria">Állatfaj</td>
                      <td id="doublerow" class="adat">Elephas maximus indicus</td>
                    </tr>
                    <tr>
                      <td id="doublerow" class="kategoria">Származás</td>
                      <td id="doublerow" class="adat">India</td>
                    </tr>
                    <tr>
                      <td id="fourrows" class="kategoria">Táplálék</td>
                      <td id="fourrows" class="adat">füvet, fakérget, gyökeret és gyümölcsöt eszik</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="animalcard">
                <h2>Jegesmedve</h2>
                <div class="tableimg"><img  src="img-animal/jegesmedve.jpg" alt=""></div>
                <div>
                  <table>
                    <tr>
                      <td id="onerow" class="kategoria">Becenév</td>
                      <td id="onerow" class="adat">Lackó</td>
                    </tr>
                    <tr>
                      <td id="onerow" class="kategoria">Életkor</td>
                      <td id="onerow" class="adat">14 év</td>
                    </tr>
                    <tr>
                      <td id="doublerow" class="kategoria">Állatfaj</td>
                      <td id="doublerow" class="adat">Ursus maritimus</td>
                    </tr>
                    <tr>
                      <td id="doublerow" class="kategoria">Származás</td>
                      <td id="doublerow" class="adat">Északi Sarkvidék</td>
                    </tr>
                    <tr>
                      <td id="fourrows" class="kategoria">Táplálék</td>
                      <td id="fourrows" class="adat">húsevő, kedvenc prédája a fókák</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="animalcard">
                <h2>Kanadai hiúz</h2>
                <div class="tableimg"><img  src="img-animal/kanadaihiúz.jpg" alt=""></div>
                <div>
                  <table>
                    <tr>
                      <td id="onerow" class="kategoria">Becenév</td>
                      <td id="onerow" class="adat">Kancsi</td>
                    </tr>
                    <tr>
                      <td id="onerow" class="kategoria">Életkor</td>
                      <td id="onerow" class="adat">10 év</td>
                    </tr>
                    <tr>
                      <td id="doublerow" class="kategoria">Állatfaj</td>
                      <td id="doublerow" class="adat">Lynx canadensis</td>
                    </tr>
                    <tr>
                      <td id="doublerow" class="kategoria">Származás</td>
                      <td id="doublerow" class="adat">Észak Amerika, Kanada</td>
                    </tr>
                    <tr>
                      <td id="fourrows" class="kategoria">Táplálék</td>
                      <td id="fourrows" class="adat">húsevő, prédája a hócipős nyúl</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="animalcard">
                <h2>Leopárd</h2>
                <div class="tableimg"><img  src="img-animal/leopard.jpg" alt=""></div>
                <div>
                  <table>
                    <tr>
                      <td id="onerow" class="kategoria">Becenév</td>
                      <td id="onerow" class="adat">Foltos</td>
                    </tr>
                    <tr>
                      <td id="onerow" class="kategoria">Életkor</td>
                      <td id="onerow" class="adat">8 év</td>
                    </tr>
                    <tr>
                      <td id="doublerow" class="kategoria">Állatfaj</td>
                      <td id="doublerow" class="adat">Panthera pardus</td>
                    </tr>
                    <tr>
                      <td id="doublerow" class="kategoria">Származás</td>
                      <td id="doublerow" class="adat">Dél Afrika</td>
                    </tr>
                    <tr>
                      <td id="fourrows" class="kategoria">Táplálék</td>
                      <td id="fourrows" class="adat">húsevő, gyakran eszik bogarakat, rágcsálókat és halakat</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div class="col-lg-3">
          <!-- <div class="right"> -->
            <!-- <div class="news"> -->
              <h2 class="divheader">Friss hírek</h2>
              <!-- <div class="container"> -->
                <div class="row">

                  <div class="card col-lg-4" style="width: 18rem;">
                    <img class="card-img-top" src="img-news/minielephant2.jpg" alt="Elefánt">
                    <div class="card-body">
                      <h5 class="card-title"><strong>Kiselefánt látogatása</strong></h5>
                      <p class="card-text">2023. február 17.-től a kiselefánt látogatása is elérhető a látógatóink számára!</p>
                      <a href="#" class="btn btn-primary">Bővebb információ</a>
                    </div>
                  </div>

                  <div class="card col-lg-4" style="width: 18rem;">
                    <img class="card-img-top" src="img-news/minielephant.jpg" alt="Elefánt">
                    <div class="card-body">
                      <h5 class="card-title"><strong>Elnevezték az elefántot</strong></h5>
                      <p class="card-text">A látogatók által beküldött nevekből első helyen végzett a Suzy név, így a kiselefánt azt a nevet kapta.</p>
                      <a href="#" class="btn btn-primary">Bővebb információ</a>
                    </div>
                  </div>

                  <div class="card col-lg-4" style="width: 18rem;">
                    <img class="card-img-top" src="img-news/minielephant1.jpg" alt="Elefánt">
                    <div class="card-body">
                      <h5 class="card-title"><strong>Új kiselefánt született</strong></h5>
                      <p class="card-text">2023. január 28.-án nőstény kiselefánt született az állatkertünkbe.</p>
                      <a href="#" class="btn btn-primary">Bővebb információ</a>
                    </div>
                  </div>
                  
                </div>
              <!-- </div> -->
            <!-- </div> -->
          <!-- </div> -->
          </div>
</div>
  </div>
  <footer>
      <div class="text-center p-3 text-light" style="background-color: #29221A; left: 0; bottom: 0; width: 100%; position: fixed;">
          Készítette: Nagy Tibor, Tóth Tamás Levente, Kolozsvári László Krisztián
      </div>
  </footer>
  </div>

    )
}

export default Home;