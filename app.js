/*
Co je za úkol v tomto projektu:

1) Do prvku s id="recepty" vygeneruj z dat seznam všech receptů z naší "databáze".
HTML vzor, jak vygenerovaný recept vypadá, je zakomentovaný v index.html.

2) Doplň hledání - v hlavičce odkomentuj pole pro hledání. Pri kliknutí na tlačítko Hledat
by se měl seznam receptů vyfiltrovat podle hledaného slova.

3) Doplň filtrovanání receptů podle kategorie.

4) Doplň řazení receptů podle hodnocení.

5) Na recepty v seznamu by mělo jít kliknout a na pravé polovině, se objeví detail receptu.
Doplň patričné údaje receptu do HTML prvků s ID recept-foto, recept-kategorie,
recept-hodnoceni, recept-nazev, recept-popis.

6) Poslední vybraný recept ulož do Local Storage, aby se při novém otevření aplikace načetl.
*/




// 1) Zobraz recepty


function zobrazReceptMenu(recept, index) {
    let receptElement = document.createElement('div')
    receptElement.className = "recept"

    // obrázek receptu
    let receptObrazekElement = document.createElement('div')
    receptObrazekElement.className = "recept-obrazek"

    let receptObrazekSrcElement = document.createElement('img')
    receptObrazekSrcElement.src = recept.img
    receptObrazekSrcElement.alt = "Obrázek receptu"
    receptObrazekElement.appendChild(receptObrazekSrcElement)

    // info receptu
    let receptInfoElement = document.createElement('div')
    receptInfoElement.className = "recept-info"

    let receptNadpisElement = document.createElement('h3')
    receptNadpisElement.textContent = recept.nadpis
    receptInfoElement.appendChild(receptNadpisElement)

    // spojení pod div class=recept
    receptElement.appendChild(receptObrazekElement)
    receptElement.appendChild(receptInfoElement)

    receptElement.addEventListener('click', () => {
        zobrazReceptDetail(index);
    });

    return receptElement

}

//2) Doplň hledání

let vyhledavaniElement = document.getElementById('hledat')
vyhledavaniElement.addEventListener('keydown', () => {
    najdiRecept();
});

function najdiRecept () {
    let vyhledavaniElement = document.getElementById('hledat')
    let vyhledaneRecepty = recepty.filter(recept => recept.nadpis.toLowerCase().includes(vyhledavaniElement.value))
    zobrazSeznamReceptu(vyhledaneRecepty)
}


let nalezeneRecepty = recepty;

zobrazSeznamReceptu(nalezeneRecepty)

function zobrazSeznamReceptu(nalezeneRecepty) {
    let seznamReceptuElement = document.getElementById('recepty')

    nalezeneRecepty.forEach((recept, index) => {
        let receptElement = zobrazReceptMenu(recept, index)
        seznamReceptuElement.appendChild(receptElement)
    })
}

//3) Doplň filtrování receptů podle kategorie

//4) Doplň řazení receptů podle hodnocení

//5) Zobraz detail receptu

function zobrazReceptDetail(index) {
    let aktualniRecept = recepty[index]
    let receptFoto = document.getElementById('recept-foto')
    receptFoto.src = aktualniRecept.img

    let receptKategorie = document.getElementById('recept-kategorie')
    receptKategorie.textContent = aktualniRecept.kategorie

    let receptHodnoceni = document.getElementById('recept-hodnoceni')
    receptHodnoceni.textContent = aktualniRecept.hodnoceni

    let receptNazev = document.getElementById('recept-nazev')
    receptNazev.textContent = aktualniRecept.nadpis

    let receptPopis = document.getElementById('recept-popis')
    receptPopis.textContent = aktualniRecept.popis 

}

//6) Local Storage

let aktualniReceptStorage = localStorage.getItem('aktualniRecept')
if (aktualniReceptStorage !== null) {
    zobrazReceptDetail(Number(aktualniReceptStorage))
}