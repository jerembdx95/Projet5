
 /* Lien API */

var xhr = new XMLHttpRequest();
var ours ;
var data;
var produit = [];
var panier;
var URL = document.location.href;

xhr.onreadystatechange = function (){
  if (this.readyState == 4 && this.status == 200){  
     data = JSON.parse(this.response);
     
     for (i=0 ; i < data.length ; i++){
      ours = {name: data[i].name , id: data[i]._id , description: data[i].description , img: data[i].imageUrl , price: data[i].price, colors: data[i].colors };
      produit.push(ours); 
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
    prix.innerHTML = element.price;
    img.src = element.img;

    var objet = 0;

/* page produit */

    container.onclick = function (){



    var page_Liste_produit = document.querySelector('section')
    page_Liste_produit.innerHTML = '';

    page_Liste_produit = document.createElement('article');
    let titre_produit = document.createElement("h2");
    let prix_produit = document.createElement("h3");
    let img_produit = document.createElement("img");
    let description_produit = document.createElement("p");
    let ajouteraupanier = document.createElement('button');
    let select_Produit = document.createElement('select');
  
    page_Liste_produit.appendChild(titre_produit);
    page_Liste_produit.appendChild(prix_produit);
    page_Liste_produit.appendChild(img_produit);
    page_Liste_produit.appendChild(description_produit);
    page_Liste_produit.appendChild(ajouteraupanier);
    page_Liste_produit.appendChild(select_Produit);
  
    description_produit.className = 'description';
  
    titre_produit.innerHTML = element.name;
    prix_produit.innerHTML = element.price;
    img_produit.src = element.img;
    description_produit.innerHTML = element.description;
    ajouteraupanier.innerHTML = "ajouter au panier";

    var container_PageProduit = document.querySelector('main');
    container_PageProduit.appendChild(page_Liste_produit);

    URL += "?id=" + element.id;
    

    document.querySelector('button').addEventListener("click", function(){
      ++ objet
    localStorage.setItem (element.id , objet);

    });
    document.querySelector('button').addEventListener("click", function(){
      alert('Le Produit à été ajouté au panier ! ');
      location.reload();
    });}});}};

xhr.open("GET", "http://localhost:3000/api/teddies", true);
xhr.send();

/* widget panier */

  let indice = document.getElementById('cart');
  let indice_widget = document.createElement('p');
  indice.appendChild(indice_widget);
  indice_widget.innerHTML = localStorage.length;
  indice_widget.className = 'indicePanier';

