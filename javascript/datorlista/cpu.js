//Hitta element vi behöver
const inputNamn = document.querySelector("input");
const meny = document.querySelector("select");
const knapp = document.querySelector("button");
const lista = document.querySelector("ul");

//Knapp tryck
knapp.addEventListener("click", function () {
    //Lagra const i variabel
    var namn = inputNamn.value;
    var cpu = meny.value;
    console.log(namn, cpu);

    //Skriv i ul-listan
    switch (cpu) {
        case "5 3600":
            lista.innerHTML = 
                "<li>" +
                "<img src=\"https://inetimg2.se/img/688x386/5301793_1.jpg\">" + 
                "AMD Ryzen 5 3600 " +
                "3.6 GHz 35MB" +
                "</li>";
            break;
        case "5 5600X":
            lista.innerHTML = 
            "<li>" + 
            "<img src=\"https://inetimg2.se/img/688x386/5301793_1.jpg\">" +
            "AMD Ryzen 5 5600X" + 
            "3.7 GHz 35MB" + 
            "</li>"
            break;
        case "9 3900XT":
            lista.innerHTML = 
            "<li>" + 
            "<img src=\"https://inetimg2.se/img/688x386/5301793_1.jpg\">" + 
            "AMD Ryzen 9 3900XT" + 
            "3.8GHz 70MB" +
            "</li>"
            break;
        case "9 5950X":
            lista.innerHTML = 
            "<li>" + 
            "<img src=\"https://inetimg2.se/img/688x386/5303237_0.jpg\">" + 
            "AMD Ryzen 9 5950X" + 
            "3.4 GHz 72MB" + 
            "</li>"
            break;
        default:
            break;
    }


})