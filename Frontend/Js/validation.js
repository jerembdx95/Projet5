
if (localStorage.length == 1){ 

let x = document.getElementsByClassName("Tableau_final");

/* Numéros de commande */

var numeros = document.getElementById('numeros_commande');
numeros.innerHTML = localStorage.getItem("orderData");

/* Prix Total de la commande */

var Validation_totale = document.getElementById("final_price");
Validation_totale.innerHTML = sessionStorage.getItem("prixTotal")/100 + " €";

/* Le localStorage se vide si on retourne en arrière afin d'éviter les erreurs */

localStorage.clear();
}


else{
    let titre = document.querySelector('h1')
    titre.innerHTML = 'Error 404';
    let final = document.getElementById('Tableau_final');
    final.innerHTML = "";

   
    setTimeout( function(){ 
     window.location.href = "index.html"; }, 1000)
}