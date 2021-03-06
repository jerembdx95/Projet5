///* Déclaration variaiables *//////
let xhr = new XMLHttpRequest();
let teddie ;
let data;
let produit = [];
let products = [];
let productList  = [];
let panier;
let URL = document.location.href;
let ProductPrice;
let prix ;
let Panier;
let totalPanier = [];
let totalPrice = 0;
let contact = [];
let form;
let indice;
let Widget;
let selectQuantity;
let numberQuantity;
let selectElmt;
let valeurselectionnee;
let liste = [];
let id = [];

 ////////////* Connexion API */////////////////////

const getAllTeddies = async () => {
  const response = await fetch('http://localhost:3000/api/teddies');
  data = await response.json()
  }

async function teddies(){
  const teddies = await getAllTeddies();
  for (i=0 ; i < data.length ; i++){
    teddie = {name: data[i].name, 
           id: data[i]._id, 
           description: data[i].description, 
           img: data[i].imageUrl, 
           price: data[i].price, 
           colors: data[i].colors };
    produit.push(teddie); }
    
////////* Page Produit Principale */

produit.forEach(element => {

      let container = document.createElement("div");
      let titre = document.createElement("h2");
      let prix = document.createElement("p");
      let img = document.createElement("img");
      let parent = document.getElementById("liste_produit");
  
      parent.appendChild(container);
      container.appendChild(titre);
      container.appendChild(prix);
      container.appendChild(img);
  
      titre.innerHTML = element.name;
      prix.innerHTML = element.price / 100 + " €";
      img.src = element.img;
  
      let objet = 0;

      container.onclick = function (){

        window.location.href = "produit.html?id=" + element.id;
}})
}