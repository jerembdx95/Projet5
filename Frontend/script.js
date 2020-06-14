 /* déclaration variable */

var xhr = new XMLHttpRequest();
var ours ;
var data;
var produit = [];
var colors_produit = [];
var panier;
var URL = document.location.href;

/* Lien API */

xhr.onreadystatechange = function (){
  
  if (this.readyState == 4 && this.status == 200){  
     data = JSON.parse(this.response);
     
     for (i=0 ; i < data.length ; i++){
      ours = {name: data[i].name , id: data[i]._id , description: data[i].description , img: data[i].imageUrl , price: data[i].price, colors: data[i].colors };
      produit.push(ours); 
      colors_produit.push(ours.colors);
   };

   /* page principale */

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

    var objet = 0;

/* page produit */

    container.onclick = function (){

    var stateObj = { foo: "index.html" };
    history.pushState(stateObj, "index.html", "index.html?id=" + element.id);
  
    var page_Liste_produit = document.querySelector('section')
    page_Liste_produit.innerHTML = '';

    page_Liste_produit = document.createElement('article');
    let titre_produit = document.createElement("h2");
    let prix_produit = document.createElement("h3");
    let img_produit = document.createElement("img");
    let description_produit = document.createElement("p");
    let ajouteraupanier = document.createElement('button');
    let select_Produit = document.createElement('select');
    let selector = document.createElement('option');
    let select_Quantity = document.createElement('select');
    let selector_Quantity = document.createElement('option');

    page_Liste_produit.appendChild(titre_produit);
    page_Liste_produit.appendChild(prix_produit);
    page_Liste_produit.appendChild(img_produit);
    page_Liste_produit.appendChild(description_produit);
    page_Liste_produit.appendChild(ajouteraupanier);
    page_Liste_produit.appendChild(select_Produit);
    select_Produit.appendChild(selector);
    
    description_produit.className = 'description';
    
    titre_produit.innerHTML = element.name;
    prix_produit.innerHTML = element.price / 100 + " €";
    img_produit.src = element.img;
    description_produit.innerHTML = element.description;
    ajouteraupanier.innerHTML = "ajouter au panier";
    selector.innerHTML = "Choisir une couleur";

    selector.className = "couleurs";

    var container_PageProduit = document.querySelector('main');
    container_PageProduit.appendChild(page_Liste_produit);

    /* personnalisation produit */

    colors_produit.forEach(array => {
      var colors_variation = document.createElement('option');
      selector.appendChild(colors_variation);
      colors_variation.innerHTML = '';
    })
  
    /* localStorage */

    document.querySelector('button').addEventListener("click", function(){
      ++ objet
    localStorage.setItem (element.id , objet);
    alert("Le produit à été ajouté à votre panier")
    });
  }
    })}}
   
xhr.open("GET", "http://localhost:3000/api/teddies", true);
xhr.send();

/* widget panier */

  let indice = document.getElementById('cart');
  let indice_widget = document.createElement('p');
  indice.appendChild(indice_widget);
  indice_widget.innerHTML = localStorage.length ;
  indice_widget.className = 'indicePanier';

