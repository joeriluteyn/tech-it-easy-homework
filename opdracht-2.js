// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
// for loop die inventory.sold optelt in een variable
let soldTvs = 0;
for (let i = 0; i < inventory.length; i++) {
    soldTvs += inventory[i].sold
}

console.log(soldTvs);

// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
// placeholder (h3) met id aanmaken in html deze vervolgens laten vervangen door javascript en groen aanpassen in css

const amountOfTvsSold = document.getElementById("amount-of-tvs-sold");
amountOfTvsSold.textContent = soldTvs;

//     Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let boughtTvs = 0;
for (let i = 0; i < inventory.length; i++) {
    boughtTvs += inventory[i].originalStock
}
console.log(boughtTvs)
// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

const amountoftvsbought = document.getElementById("amount-of-tvs-bought")
amountoftvsbought.textContent = boughtTvs

//     Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.


const amountOfTvsToSell = document.getElementById("amount-of-tvs-to-sell")
amountOfTvsToSell.textContent = boughtTvs - soldTvs