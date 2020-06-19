///* Déclaration Variables *//////

var xhr = new XMLHttpRequest();
var ours ;
var data;
var produit = [];
var products = [];
var panier;
var URL = document.location.href;
let x;
var prix ;
var Panier;
var totalpanier = [];
var y = 0;

 ////////////* Connexion API */////////////////////

const getAllTeddies = async () => {
  const response = await fetch('http://localhost:3000/api/teddies');
  data = await response.json()
}

async function teddies(){
  const teddies = await getAllTeddies();
  for (i=0 ; i < data.length ; i++){
    ours = {name: data[i].name , id: data[i]._id , description: data[i].description , img: data[i].imageUrl , price: data[i].price, colors: data[i].colors };
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
  
      var objet = 0;

 ////////////* Page produit Simple */////////////////////

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

   ////////////* Personnalisation du produit */////////////////////

      element.colors.forEach(colors => { 
    
      let couleur = document.createElement ('option');
      select_Produit.appendChild(couleur);
      couleur.innerHTML = colors;
    });
    
  /////////://///* Ajout au local Storage *//////////////

        document.querySelector('button').addEventListener("click", function(){
          ++ objet
        localStorage.setItem (element.id , objet);
        alert("Le produit à été ajouté à votre panier")
        });
      }
    })

 ////////////* Widget Panier */////////////////////

  let indice = document.getElementById('cart');
  let indice_widget = document.createElement('p');
  indice.appendChild(indice_widget);
  indice_widget.innerHTML = localStorage.length ;
  indice_widget.className = 'indicePanier';
}

 ////////////* Page Panier */////////////////////

  async function Page_Panier(){
    const teddies = await getAllTeddies();
    for (i=0 ; i < data.length ; i++){
      ours = {name: data[i].name , id: data[i]._id , description: data[i].description , img: data[i].imageUrl , price: data[i].price, colors: data[i].colors };
      produit.push(ours); }
    
////////////* Erreur Panier Vide . */////////////////////
    
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

  ////////////* Création tableau Panier . */////////////////////

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

////////////* création de l'objet panier et tableau produit pour API */////////////////////

   panier = {id: element.id, price: localStorage.getItem(element.id) * parseInt(element.price) };
   totalpanier.push(panier);
   article = {id: element.id};
   products.push(article)

  ////////////* Delete element Panier */////////////////////

   supprimer.innerHTML = 'supprimer'; 
   supprimer.onclick = function (){
   localStorage.removeItem(element.id);
   location.reload();   

   };;}})

    ////////////* Total de la commande */////////////////////
  
  for (i=0; i<totalpanier.length; i++){
    var x = totalpanier[i].price ;
     y += x;}
 
  var commande = document.getElementById("total_commande")
  var totalC = document.createElement ('p')
  totalC.className = "total";
  commande.appendChild(totalC);
  totalC.innerHTML = y/100 + " €";

  sessionStorage.setItem("prixTotal" , y);
  }

 ////////////* Formulaire */////////////////////

function addForm(){ 
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
    
    let myOrder =  { contact, products }
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
                    console.error("Erreur au niveau des données dans la requête order", error);
                })  
                window.location.href = "PageValidation.html";
  })};