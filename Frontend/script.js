///* Déclaration letiables *//////

let xhr = new XMLHttpRequest();
let ours ;
let data;
let produit = [];
let products = [];
let productList  = [];
let panier;
let URL = document.location.href;
let x;
let prix ;
let Panier;
let totalPanier = [];
let y = 0;
let contact = [];
let form;
let indice;
let Widget;
let selectQuantity;
let numberQuantity;
let selectElmt;
let valeurselectionnee;
let liste = [];

 ////////////* Connexion API */////////////////////

const getAllTeddies = async () => {
  const response = await fetch('http://localhost:3000/api/teddies');
  data = await response.json()
  }

async function teddies(){
  const teddies = await getAllTeddies();
  for (i=0 ; i < data.length ; i++){
    ours = {name: data[i].name, 
           id: data[i]._id, 
           description: data[i].description, 
           img: data[i].imageUrl, 
           price: data[i].price, 
           colors: data[i].colors };
    produit.push(ours); }
    
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
///////////* Page produit Simple */////////////////////

  async function detailTeddies(){
     
    const detailTeddies = await getAllTeddies();

    for (i=0 ; i < data.length ; i++){
      ours = {name: data[i].name, 
             id: data[i]._id, 
             description: data[i].description, 
             img: data[i].imageUrl, 
             price: data[i].price, 
             colors: data[i].colors };
      produit.push(ours); }

    /* recuperation de l'id afin de créer un nouvel objet */
    
      idNounours = location.search.substring(4);

      for (i=0 ; i<produit.length; i++){
        if (idNounours == produit[i].id){
          oursDetail = {
               name: produit[i].name,
               price: produit[i].price,
               description: produit[i].description,
               img: produit[i].img,
               colors: produit[i].colors,
               id: produit[i].id  
             }; 
            break;}
      }

        let pageListeProduit = document.querySelector('section')
        pageListeProduit.innerHTML = '';
    
        pageListeProduit = document.createElement('article');
        let titreProduit = document.createElement("h2");
        let prixProduit = document.createElement("h3");
        let imgProduit = document.createElement("img");
        let descriptionProduit = document.createElement("p");
        let selectProduit = document.createElement('select');
        let selector = document.createElement('option');
        let selectQuantity = document.createElement('select');
        let selectorQuantity = document.createElement('option');
        let ajouterAuPanier = document.createElement('button');
        
        pageListeProduit.appendChild(titreProduit);
        pageListeProduit.appendChild(prixProduit);
        pageListeProduit.appendChild(imgProduit);
        pageListeProduit.appendChild(descriptionProduit);
        pageListeProduit.appendChild(selectProduit);
        selectProduit.appendChild(selector);
        pageListeProduit.appendChild(selectQuantity);
        selectQuantity.appendChild(selectorQuantity);
        pageListeProduit.appendChild(ajouterAuPanier);
        
        descriptionProduit.className = 'description';
        
        titreProduit.innerHTML = oursDetail.name;
        prixProduit.innerHTML = oursDetail.price / 100 + " €";
        imgProduit.src = oursDetail.img;
        descriptionProduit.innerHTML = oursDetail.description;
        ajouterAuPanier.innerHTML = "ajouter au panier";  
        selector.innerHTML = "Choisir une couleur";
        selectorQuantity.innerHTML = "Quantités";
        selectQuantity.id = 'yes';
    
        selector.className = "couleurs";
    
        let containerPageProduit = document.querySelector('main');
        containerPageProduit.appendChild(pageListeProduit);

  ///* Personnalisation du Produit *//////////////

      oursDetail.colors.forEach(colors => { 
    
      let couleur = document.createElement ('option');
      selectProduit.appendChild(couleur);
      couleur.innerHTML = colors;
    });

//////* Personnalisation quantités *////////

for (i=0; i<11; i++){
  let numberQuantity = document.createElement('option');
  selectQuantity.appendChild(numberQuantity)
  numberQuantity.innerHTML = i;
}

selectElmt = document.getElementById("yes");
valeurselectionnee = selectElmt.options[selectElmt.selectedIndex].value;

////////* Ajout au panier *//////////////////

        document.querySelector('button').addEventListener("click", function(){
          if ( selectElmt.options[selectElmt.selectedIndex].value == "Quantités"){
            alert(" Merci de selectionner une quantité ")
          }
          else { 
        localStorage.setItem (oursDetail.id, selectElmt.options[selectElmt.selectedIndex].value);
        alert(" Félicitation ! Le produit à été ajouté à votre panier");
        indiceWidget();
      }
        });
      }

///////////* Indice Panier */////////

function indiceWidget(){
indice = document.getElementById('numberPanier');
indice.innerHTML = localStorage.length;
}

 ////////////* Page Panier */////////////////////

  async function PagePanier(){
    const teddies = await getAllTeddies();
    for (i=0 ; i < data.length ; i++){
      ours = {name: data[i].name, 
              id: data[i]._id, 
              description: data[i].description, 
              img: data[i].imageUrl,
              price: data[i].price, 
              colors: data[i].colors };

      produit.push(ours); }
    
////////////* Erreur Panier Vide . */////////////////////
    
    if(localStorage.length == 0){

      form = document.getElementById('formulaire');
      form.innerHTML= '';

      let table = document.getElementById("panierPageTab");
      table.innerHTML = "";
   
      let panierVide = document.createElement("p");
      table.appendChild(panierVide);
      panierVide.innerHTML = "Votre Panier est vide pour le moment";
      panierVide.className = "panier_vide";
      let LienButton = document.createElement("a");
      panierVide.appendChild(LienButton);
      LienButton.setAttribute("href", "index.html")
      let buttonCatalogue = document.createElement("button");
      LienButton.appendChild(buttonCatalogue);
      buttonCatalogue.innerHTML = "Voir le catalogue produit";
      buttonCatalogue.setAttribute ("href", 'index.html');
      buttonCatalogue.className=("button_catalogue");
   }

  ////////////* Création tableau Panier . */////////////////////

   produit.forEach(element => { 

    let tableau = document.querySelector('table')

    if (localStorage.getItem( element.id) > 0){
    
    let tableau = document.querySelector('table')
    let ligne1 = document.createElement ('tr')
    tableau.appendChild(ligne1);
    let produitPanier = document.createElement('th')
    ligne1.appendChild(produitPanier);
    let quantité_P1 = document.createElement('th')
    ligne1.appendChild(quantité_P1);
    let prixUnitaire = document.createElement('th')
    ligne1.appendChild(prixUnitaire);
    
    let prix_P1 = document.createElement('th')
    ligne1.appendChild(prix_P1)
    prix_P1.className = 'prix';
    let supprimer = document.createElement('th')
    ligne1.appendChild(supprimer)

    produitPanier.innerHTML = element.name;
    quantité_P1.innerHTML = localStorage.getItem(element.id);
    prix = localStorage.getItem(element.id) * parseInt(element.price);
    prix_P1.innerHTML = prix / 100;
    prixUnitaire.innerHTML = parseInt(element.price)/100;

////////////* création de l'objet panier et tableau produit pour API */////////////////////

   panier = {id: element.id, price: localStorage.getItem(element.id) * parseInt(element.price), quantité: localStorage.getItem(element.id) };
   totalPanier.push(panier);
   article = [element.id];
   products.push(article);

   for (i=0; i<totalPanier.length; i++){ 
    let z = parseInt(totalPanier[i].quantité);
    for (i=0; i<z ; i++){
      products.push(element.id)
    }
   }
  ////////////* Delete element Panier */////////////////////

   supprimer.innerHTML = 'supprimer'; 
   supprimer.onclick = function (){
   localStorage.removeItem(element.id);
    location.reload();
   };;    
}})

////////////* Total de la commande */////////////////////
  
for (i=0; i<totalPanier.length; i++){
  let x = totalPanier[i].price ;
   y += x;}

let commande = document.getElementById("total_commande")
let totalC = document.createElement ('p')
totalC.className = "total";
commande.appendChild(totalC);
totalC.innerHTML = y/100 + " €";

sessionStorage.setItem("prixTotal" , y);
}
 ////////////* Formulaire */////////////////////


function sendForm(){ 
 
  let submit = document.getElementById("button_form");

  submit.addEventListener("click", function(e){
   e.preventDefault();

  
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let email = document.getElementById("email").value;
    let adresse = document.getElementById("adresse").value;
    let ville = document.getElementById("ville").value;

    contact = {
      lastName: nom,
      firstName: prenom,
      address: adresse,
      city: ville,
      email: email,
    };

    let myOrder =  {contact, products}
    console.log(myOrder);
 
    fetch('http://localhost:3000/api/teddies/order', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(myOrder)
                })
                .then(function(response) {
                    return response.json();
                    
                })
                .catch(function(error) {
                    console.error("Erreur", error);
                })  
                window.location.href = "PageValidation.html"; 
              })}
              