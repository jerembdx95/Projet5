 ////////////* Page Panier */////////////////////

 async function PagePanier(){
    const teddies = await getAllTeddies();
    for (i=0 ; i < data.length ; i++){
      teddie = {name: data[i].name, 
              id: data[i]._id, 
              description: data[i].description, 
              img: data[i].imageUrl,
              price: data[i].price, 
              colors: data[i].colors };

      produit.push(teddie); }
    
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

    supprimer.className = ("deleteCursor");

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
  let ProductPrice = totalPanier[i].price ;
   totalPrice += ProductPrice;}

let commande = document.getElementById("total_commande")
let totalC = document.createElement ('p')
totalC.className = "total";
commande.appendChild(totalC);
totalC.innerHTML = totalPrice/100 + " €";

sessionStorage.setItem("prixTotal" , totalPrice);
}

