//Hitta alla element i html
const namnInput = document.querySelector('.namn');
const antalInput = document.querySelector('.antal');

const enkRadio = document.querySelector('.enkRum');
const dubRadio = document.querySelector('.dubRum');
const famRadio = document.querySelector('.famRum');

const wifiInput = document.querySelector('.wifi');
const parkeringInput = document.querySelector('.parkering');

const räknaKnapp = document.querySelector('button');

const totalRuta = document.querySelector('.total');

var rumKost = 0, wifi = 0, parkering = 0;
//Lyssna på enkradioknapp
enkRadio.addEventListener('click', function () {
    console.log("Du har klickar på enkelrum");
    rumKost = 800;
    räknaKnapp.disabled = false;
})


//Lyssna på dubradioknapp
dubRadio.addEventListener('click', function () {
    console.log("Du har klickar på dubbelrum");
    rumKost = 1200;
    räknaKnapp.disabled = false;
})

räknaKnapp.addEventListener('click', function () {
    console.log("Pris för rummet = ", rumKost);
    var namn = namnInput.value;
    var nätter = antalInput.value;

    var totalPris = nätter * rumKost;
    //Är wifi vald:
    if (wifiInput.checked) {
        totalPris += 50
    }
    //Är parkering vald:
    if (parkeringInput.checked) {
        totalPris += 100
    }
    totalRuta.value = totalPris;
})