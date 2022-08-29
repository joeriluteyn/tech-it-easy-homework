// Opdracht 1 - Array Methoden
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
// map methode op names

const tvNames = inventory.map((tvName) => {
    return tvName.name
})

// console.log(tvNames)

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
// filter methode waar origalStock === sold

const tvsSoldOut = inventory.filter((tvSoldOut) => {
    if (tvSoldOut.originalStock === tvSoldOut.sold) {
        return true
    }
})

// console.log(tvsSoldOut)

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
// filter methode op ambilight === true
const tvsWithAmbilight = inventory.filter((tvWithAmbilight) => {
    return tvWithAmbilight.options.ambiLight === true
})

// console.log(tvsWithAmbilight)

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

inventory.sort((a, b) => a.price - b.price)
console.log(inventory)