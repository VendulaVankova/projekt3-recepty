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


// 1) Zobraz seznam receptů

let nalezeneRecepty = recept;

zobrazSeznamReceptu(nalezeneRecepty)

function zobrazSeznamReceptu(nalezeneRecepty) {
    let seznamReceptuElement = document.getElementById('recepty');

    nalezeneRecepty.forEach((recept, index) => {
        let receptElement = zobrazReceptMenu(recept, index)
        seznamReceptuElement.appendChild(receptElement)
    })
}