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
