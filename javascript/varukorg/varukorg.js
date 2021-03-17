//Väljer elemnten som vi behöver
const rutaPris = document.querySelector(".pris");
const rutaAntal = document.querySelector("input");
const rutaSumma = document.querySelector(".summa");
const knappPlus = document.querySelector(".plus")
const knappMinus = document.querySelector(".minus")
// Globala variabler
var antal = rutaAntal.value;
console.log("antal", antal);
var pris = rutaPris.textContent;
console.log("pris ", pris);

// Räkna ut summan
var summa = antal * pris + "kr"
console.log("summa", summa);

// Skriv ut summan
rutaSumma.textContent = summa;

// Lyssna på ändring i input-ruta
rutaAntal.addEventListener("change", function () {
    antal = rutaAntal.value;
    summa = antal * pris + " kr"
    rutaSumma.textContent = summa;
});

// Knapp plus
knappPlus.addEventListener("click", function () {
    console.log("Klickat på Plus!");
    rutaAntal.value++;
    antal++;
    summa = antal * pris + " kr"
    rutaSumma.textContent = summa;
});
// Knapp minus
knappMinus.addEventListener("click", function () {
    console.log("Klickat på Minus!");
    if (rutaAntal.value > 0) {
        antal--;
        rutaAntal.value = antal;   
    }
    summa = antal * pris + " kr"
    rutaSumma.textContent = summa;
});