
let x = document.getElementsByClassName("Tableau_final");


if( sessionStorage.length == 0 ){

     x.innerHTML = "yes";
}

/* Numéros de commande */

var numeros = document.getElementById('numeros_commande');
numeros.innerHTML = localStorage.getItem("orderData");

/* Prix Total de la commande */

var Validation_totale = document.getElementById("final_price");
Validation_totale.innerHTML = sessionStorage.getItem("prixTotal")/100 + " €";

/* Le localStorage se vide si on retourne en arrière afin d'éviter les erreurs */

localStorage.clear();