
 /* Lien API */

var xhr = new XMLHttpRequest();
var ours ;
var data;
var produit = [];
var catalogue;

xhr.onreadystatechange = function (){
  if (this.readyState == 4 && this.status == 200){
     data = JSON.parse(this.response);
     
     


     /*
     for (i=0 ; i < data.length ; i++){
      ours = {name: data[i].name , id: data[i]._id , description: data[i].description , img: data[i].imageUrl , price: data[i].price, colors: data[i].colors };
      produit.push(ours); */
    
   };
  
  }


xhr.open("GET", "http://localhost:3000/api/teddies", true);
xhr.send();

/* création objet ours */



/*
  let indice = document.getElementById('cart');
  let indice_widget = document.createElement('p');
  indice.appendChild(indice_widget);
  indice_widget.innerHTML = localStorage.length;
  indice_widget.className = 'indicePanier';

 

  var ours = function ours(name, price, description, img, titre, id){ 
     this.name = name;
     this.price = price;
     this.description = description;
     this.img = img;
     this.titre = titre;
     this.id = id;
    }
    var simba = new ours("simba",333 + ' €',"Entièrement tricoté à la main, ce doudou est le cadeau idéal pour une naissance. Sa confection minutieuse participe à préserver des savoir-faire et des techniques respectueuses des humains et de la nature. Il est réalisé en pure laine baby alpaga, une matière anti-bactérienne très douce, particulièrement adaptée aux peaux sensibles et est facile à tenir grâce à ses longues pattes.", "/backend/images/teddy_1.jpg", "Ours Simba", 1)
    var fuzzy = new ours("fuzzy",234 + ' €',"Entièrement tricoté à la main, ce doudou est le cadeau idéal pour une naissance. Sa confection minutieuse participe à préserver des savoir-faire et des techniques respectueuses des humains et de la nature. Il est réalisé en pure laine baby alpaga, une matière anti-bactérienne très douce, particulièrement adaptée aux peaux sensibles et est facile à tenir grâce à ses longues pattes.", "/backend/images/teddy_2.jpg",  "Ours fuzzy", 2)
    var Squishy = new ours("squishy",145 + ' €',"Entièrement tricoté à la main, ce doudou est le cadeau idéal pour une naissance. Sa confection minutieuse participe à préserver des savoir-faire et des techniques respectueuses des humains et de la nature. Il est réalisé en pure laine baby alpaga, une matière anti-bactérienne très douce, particulièrement adaptée aux peaux sensibles et est facile à tenir grâce à ses longues pattes.", "/backend/images/teddy_3.jpg", "Ours squishy", 3)
    var Sprinkles = new ours("sprinkles",189 + ' €',"Entièrement tricoté à la main, ce doudou est le cadeau idéal pour une naissance. Sa confection minutieuse participe à préserver des savoir-faire et des techniques respectueuses des humains et de la nature. Il est réalisé en pure laine baby alpaga, une matière anti-bactérienne très douce, particulièrement adaptée aux peaux sensibles et est facile à tenir grâce à ses longues pattes.", "/backend/images/teddy_4.jpg", "Ours sprinkles", 4)
    var Alfred = new ours("Alfred",220 + ' €',"Entièrement tricoté à la main, ce doudou est le cadeau idéal pour une naissance. Sa confection minutieuse participe à préserver des savoir-faire et des techniques respectueuses des humains et de la nature. Il est réalisé en pure laine baby alpaga, une matière anti-bactérienne très douce, particulièrement adaptée aux peaux sensibles et est facile à tenir grâce à ses longues pattes.", "/backend/images/teddy_5.jpg", "Ours ALfred", 5)

const catalogue = [ simba , fuzzy , Squishy, Sprinkles, Alfred];


catalogue.forEach(element => { 
  
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
    let select_option = document.createElement('option');
    let select_value = document.createElement('value');
    let select_option2 = document.createElement('option');
    let select_value2 = document.createElement('value');
    let select_option3 = document.createElement('option');
    let select_value3 = document.createElement('value');
    let select_option4 = document.createElement('option');
    let select_value4 = document.createElement('value');
    
    page_Liste_produit.appendChild(titre_produit);
    page_Liste_produit.appendChild(prix_produit);
    page_Liste_produit.appendChild(img_produit);
    page_Liste_produit.appendChild(description_produit);
    page_Liste_produit.appendChild(ajouteraupanier);
    page_Liste_produit.appendChild(select_Produit);
    select_Produit.appendChild(select_option);
    select_option.appendChild(select_value);
    select_Produit.appendChild(select_option2);
    select_option2.appendChild(select_value2);
    select_Produit.appendChild(select_option3);
    select_option3.appendChild(select_value3);
    select_Produit.appendChild(select_option4);
    select_option4.appendChild(select_value4);

    description_produit.className = 'description';

    titre_produit.innerHTML = element.name;
    prix_produit.innerHTML = element.price;
    img_produit.src = element.img;
    description_produit.innerHTML = element.description;
    ajouteraupanier.innerHTML = "ajouter au panier";
    select_value.innerText = "Personnalisation";
    select_value2.innerHTML = "bleu";
    select_value3.innerHTML = "Vert";
    select_value4.innerHTML = "Violet";

    var container_PageProduit = document.querySelector('main');
    container_PageProduit.appendChild(page_Liste_produit);

    document.querySelector('button').addEventListener("click", function(){
      ++ objet
    localStorage.setItem (element.id , objet)
    var x = parseInt(localStorage.getItem(element.id)
  );
    });
    document.querySelector('button').addEventListener("click", function(){
      alert('Le Produit à été ajouté au panier ! ');
      location.reload();
    });
  }});



var timeout;

  $('#cart').on({
      mouseenter: function() {
          $('#cart-dropdown').show();
      },
      mouseleave: function() {
          timeout = setTimeout(function() {
              $('#cart-dropdown').hide();
          }, 200);
      }
  });
  
  $('#cart-dropdown').on({
      mouseenter: function() {
          clearTimeout(timeout);
      },
      mouseleave: function() {
          $('#cart-dropdown').hide();
      }
  });

*/
  
