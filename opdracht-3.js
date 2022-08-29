// Opdracht 3 - Array methoden en functies
// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

const brandNames = inventory.map((brandname) => {
    return brandname.brand
})

const brandNamesList = document.getElementById("brand-names-list")
brandNamesList.textContent = brandNames


// Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!

function brandNamesArr ( arr ){
    const brandNamesList = document.getElementById("brand-names-list")
    return arr.map((entry) => {
        brandNamesList.innerHTML += `
        <li class="brand-names-list-item">${entry.brand}</li>
        `
    })
}

brandNamesArr(inventory)