/* Lien API */

var xhr = new XMLHttpRequest();
var ours ;
var data;
var produit = [];
var prix ;
var Panier;
var totalpanier = [];
var y = 0;

xhr.onreadystatechange = function (){
  if (this.readyState == 4 && this.status == 200){
     data = JSON.parse(this.response);
     
     for (i=0 ; i < data.length ; i++){
      ours = {name: data[i].name , id: data[i]._id , description: data[i].description , img: data[i].imageUrl , price: data[i].price, colors: data[i].colors };
      produit.push(ours); 
   };

/////////////////////Page Panier//////////////////////

if(localStorage.length == 0){

   var table = document.getElementById("panier_page_tab");
   table.innerHTML = "";

   var panier_vide = document.createElement("p");
   table.appendChild(panier_vide);
   panier_vide.innerHTML = "Votre Panier est vide pour le moment";
   panier_vide.className = "panier_vide";
   var Lien_button = document.createElement("a");
   panier_vide.appendChild(Lien_button);
   Lien_button.setAttribute("href", "index.html")
   var button_catalogue = document.createElement("button");
   Lien_button.appendChild(button_catalogue);
   button_catalogue.innerHTML = "Voir le catalogue produit";
   button_catalogue.setAttribute ("href", 'index.html');
   button_catalogue.className=("button_catalogue");
}

produit.forEach(element => { 

    var tableau = document.querySelector('table')

    if (localStorage.getItem(element.id) > 0){
    
    var tableau = document.querySelector('table')
    var ligne1 = document.createElement ('tr')
    tableau.appendChild(ligne1);
    var produit_panier = document.createElement('th')
    ligne1.appendChild(produit_panier);
    var quantité_P1 = document.createElement('th')
    ligne1.appendChild(quantité_P1);
    var prix_P1 = document.createElement('th')
    ligne1.appendChild(prix_P1)
    prix_P1.className = 'prix';
    var supprimer = document.createElement('th')
    ligne1.appendChild(supprimer)
    produit_panier.innerHTML = element.name;
    quantité_P1.innerHTML = localStorage.getItem(element.id);
    prix = localStorage.getItem(element.id) * parseInt(element.price);
    prix_P1.innerHTML = prix / 100;

   panier = {id: element.id, price: localStorage.getItem(element.id) * parseInt(element.price) };
   totalpanier.push(panier);
   
  /* supprimer element panier */

   supprimer.innerHTML = 'supprimer'; 
   supprimer.onclick = function (){
   localStorage.removeItem(element.id);
   location.reload();   
   };;}})

  /* total commande */
  for (i=0; i<totalpanier.length; i++){
     var x = totalpanier[i].price ;
      y += x;}
  
   var commande = document.getElementById("total_commande")
   var totalC = document.createElement ('p')
   totalC.className = "total";
   commande.appendChild(totalC);
   totalC.innerHTML = y/100 + " €";

}}
 xhr.open("GET", "http://localhost:3000/api/teddies" , true);
 xhr.send();

 
/* formulaire */


var submit = document.getElementById ("button_form");
submit.onclick = function(){ 


checkInput = () => {
  //Controle Regex
  let checkNumber = /[0-9]/;
  let checkMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let checkSpecialCharacter = /[§!@#$%^&*().?":{}|<>]/;

  //message fin de controle
  let checkMessage = "";

  //Récupération des inputs

  let nom = document.getElementById("nom").value;
  let prenom = document.getElementById("prenom").value;
  let email = document.getElementById("email").value;
  let adresse = document.getElementById("adresse").value;
  let ville = document.getElementById("ville").value;

  /* Test Nom */

  if (
    checkNumber.test(nom) == true ||
    checkSpecialCharacter.test(nom) == true ||
    nom == ""
  ) {
    checkMessage = "Veuillez vérifier ou renseigner votre nom";
  } else {
    console.log("Nom accepté");
  }
  
  /* Test Prenom */

  if (
    checkNumber.test(prenom) == true ||
    checkSpecialCharacter.test(prenom) == true ||
    prenom == ""
  ) {
    checkMessage = checkMessage + "\n" + "Vérifier/renseigner votre prénom";
  } else {
    console.log("Prénom accepté");
  }
  /* Test Mail */

  if (checkMail.test(email) == false) {
    checkMessage = checkMessage + "\n" + "Vérifier/renseigner votre email";
  } else {
    console.log("Adresse mail acceptée");
  }
  /* Test adresse */

  if (checkSpecialCharacter.test(adresse) == true || adresse == "") {
    checkMessage = checkMessage + "\n" + "Vérifier/renseigner votre adresse";
  } else {
    console.log(" Adresse postale acceptée");
  }
  /* Test ville */
  if (
    (checkSpecialCharacter.test(ville) == true &&
      checkNumber.test(ville) == true) ||
    ville == ""
  ) {
    checkMessage = checkMessage + "\n" + "Vérifier/renseigner votre ville";
  } else {
    console.log("Ville acceptée");
  }
 
  if (checkMessage != "") {
    alert("Il est nécessaire de :" + "\n" + checkMessage);
  }
 
  else {
    contact = {
      lastName: nom,
      firstName: prenom,
      address: adresse,
      city: ville,
      email: email,
    };
    return contact;
  }
};

/* Check  panier */

checkPanier = () => {
  let etatPanier = JSON.parse(localStorage.length);
  if (etatPanier.length < 1) {
    alert("Votre panier est vide");
    return false;
  } else {
    console.log("Le panier n'est pas vide");
    return true;
  }
};

/* Envoi API */

if (contact == true && etatPanier == true){ 

var xhr = new XMLHttpRequest();

xhr.open("get", "http://localhost:3000/api/teddies/order", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send(contact);
console.log("Bien envoyé")
windows.location = "./PageValidation.html"
}

}





