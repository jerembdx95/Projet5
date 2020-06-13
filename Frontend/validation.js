
function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numeros = document.getElementById('numeros_commande');
numeros.innerHTML = entierAleatoire(100, 10000000);


var Validation_totale = document.getElementById("final_price");
Validation_totale.innerHTML = sessionStorage.getItem("prixTotal")/100 + " €";
