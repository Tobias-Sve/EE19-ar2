//Läs in talen
const rutaTal1 = document.querySelector(".tal1");
const rutaTal2 = document.querySelector(".tal2");
const rutaMinus = document.querySelector(".plus");
const rutaPlus = document.querySelector(".minus");
const knappRäkna = document.querySelector(".räkna");


//Globala var
var tal1 = rutaTal1.value;
var tal2 = rutaTal2.value;


//Räkna
var plus = tal1 + tal2;
var minus = tal1 - tal2;


//Lyssna på knapptryck
knappRäkna.addEventListener("click", function () {
    rutaPlus.textContent = plus
    rutaMinus.textContent = minus
})

