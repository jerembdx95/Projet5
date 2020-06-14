/* Déclaration variable */

var xhr = new XMLHttpRequest();
var ours ;
var data;
var produit = [];
var prix ;
var Panier;
var totalpanier = [];
var y = 0;
let products = [];

/* Lien API */

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

/* Panier et tableau produit */ 

   panier = {id: element.id, price: localStorage.getItem(element.id) * parseInt(element.price) };
   totalpanier.push(panier);
   article = {id: element.id};
   products.push(article)

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

   sessionStorage.setItem("prixTotal" , y);

}}
 xhr.open("GET", "http://localhost:3000/api/teddies" , true);
 xhr.send();

/* formulaire */

let submit = document.getElementById("button_form");

  submit.addEventListener("click", function(e){
   e.preventDefault();

  let nom = document.getElementById("nom").value;
  let prenom = document.getElementById("prenom").value;
  let email = document.getElementById("email").value;
  let adresse = document.getElementById("adresse").value;
  let ville = document.getElementById("ville").value;
  
   let contact = {
       lastName: nom,
       firstName: prenom,
       address: adresse,
       city: ville,
       email: email,
      };
    console.log(contact);

    var xhr = new XMLHttpRequest();

    xhr.open("post", "http://localhost:3000/api/teddies/order", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
       products: products, 
       contact: contact,
    }
    
    ));
    console.log("Bien envoyé")
    window.location = './PageValidation.html' 
  })




