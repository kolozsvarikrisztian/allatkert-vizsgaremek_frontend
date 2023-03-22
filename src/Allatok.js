function Allatok() {
    return (
        <div id="allatok">
            {allatok.map((allat, ix) => (
                <Kartya key={ix} allat={allat} />
            ))}
        </div>
    )
};


function Allat({ allat }) {
    return (
    <div className="card col-lg-4 kartyak">
                <h2>Gímszarvas</h2>
                <img  src="img-animal/gímszarvas.jpg" alt="">
                <div>
                    <p class="text-center">Becenév: Gombi</p>
                    <p class="text-center">Életkor: 10 év</p>
                    <p class="text-center">Állatfaj: Cervus elaphus</p>
                    <p class="text-center">Származás: Európa</p>
                    <p class="text-center">Táplálék: Lágy szárú növények, a bokrok és fák rügyei</p>
                </div>
            </div>
    )
}

export default Allatok;