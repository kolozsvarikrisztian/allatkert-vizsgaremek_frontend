import './Allatok.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Allatok() {
    return (
        <div id="allatok">
            {allatok.map((allat, ix) => (
                <Allat key={ix} allat={allat} />
            ))}
        </div>
    )
};


function Allat({ allat }) {
    return (
        <div className="card col-lg-4">
            <h2>{allat.nev}</h2>
            <img src={allat.kep} />
            <div>
                <p class="text-center">Becenév: {allat.becenev}</p>
                <p class="text-center">Életkora: {allat.elletkor}</p>
                <p class="text-center">Állatfaj: {allat.faj}</p>
                <p class="text-center">Származás: {allat.szarmazas}</p>
                <p class="text-center">Táplálék: {allat.taplalek}</p>
            </div>
        </div>
    )
}

export default Allatok;

const allatok = [
    {
        nev: "Gímszarvas",
        kep: "./src/img-animal/gímszarvas.jpg",
        becenev: "Gombi",
        elletkor: "10 év",
        faj: "Cervus elaphus",
        szarmazas: "Európa",
        taplalek: "Lágy szárú növények, a bokrok és fák rügyei"
    },
    {
        nev: "Hullámos papagáj",
        kep: "./src/img-animal/hullamospapagaj.jpg",
        becenev: "Arász",
        elletkor: "5 év",
        faj: "Melopsittacus undulatus",
        szarmazas: "Ausztrália",
        taplalek: "Fűmagvak, kedvence a köles"
    },
    {
        nev: "Indiai elefánt",
        kep: "./src/img-animal/indiaielefant.jpg",
        becenev: "Bence",
        elletkor: "26 év",
        faj: "Elephas maximus indicus",
        szarmazas: "India",
        taplalek: "Füvet, fakérget, gyökeret és gyümölcsöt eszik"
    },
    {
        nev: "Jegesmedve",
        kep: "./src/img-animal/jegesmedve.jpg",
        becenev: "Lackó",
        elletkor: "14 év",
        faj: "Ursus maritimus",
        szarmazas: "Északi Sarkvidék",
        taplalek: "Húsevő, kedvenc prédája a fókák"
    },
    {
        nev: "Kanadai hiúz",
        kep: "./src/img-animal/kanadaihiúz.jpg",
        becenev: "Kancsi",
        elletkor: "10 év",
        faj: "Lynx canadensis",
        szarmazas: "Észak Amerika, Kanada",
        taplalek: "Húsevő, prédája a hócipős nyúl"
    },
    {
        nev: "Leopárd",
        kep: "./src/img-animal/leopard.jpg",
        becenev: "Foltos",
        elletkor: "8 év",
        faj: "Panthera pardus",
        szarmazas: "Dél Afrika",
        taplalek: "Húsevő, gyakran eszik bogarakat, rágcsálókat és halakat"
    }
]

