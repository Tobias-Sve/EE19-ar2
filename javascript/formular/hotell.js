//Hitta alla element i html

const antalInput = document.querySelector('.antal');
const rumInput = document.querySelector('.rum');
const wifiInput = document.querySelector('.wifi');
const parkeringInput = document.querySelector('.parkering');
const räknaKnapp = document.querySelector('button');
const prisRumRuta = document.querySelector('.prisRummet');
const prisTillRuta = document.querySelector('.prisTillägg');
const totalRuta = document.querySelector('.total');

//Lyssna på knapp
räknaKnapp.addEventListener('click', function () {
    console.log(antalInput.value);
    console.log(rumInput.value);
    console.log(wifiInput.value);
    console.log(parkeringInput.value);

    //Räkna ut pris för rummet
    prisRumRuta.value = antalInput.value * rumInput.value;

    //Räkna ut summa för tillägg
    prisTillRuta.value = parseInt(wifiInput.value) + parseInt(parkeringInput.value);

    //Räkna ut total summan
    totalRuta.value = parseInt(prisTillRuta.value) + parseInt(prisRumRuta.value);
})