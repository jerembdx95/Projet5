
/*Lien avec l'API */
getAllTeddies = () => {
    return new Promise((resolve) => {
      let request = new XMLHttpRequest();
      request.onreadystatechange = function () {
        if (
          this.readyState == XMLHttpRequest.DONE &&
          this.status >= 200 &&
          this.status < 400
        ) {
          resolve(JSON.parse(this.responseText));
          console.log("Connecté");
        } else {
        }
      };
      request.open("GET", "http://localhost:3000/api/teddies/" );
      request.send();
    });
  };


 /* Objet ours */

 var ours = function ours(name, price, description, img, titre){ 
     this.name = name;
     this.price = price;
     this.description = description;
     this.img = img;
     this.titre = titre;
    }
 
 var simba = new ours("simba",333 + ' €',"Fabuleux Ours en peluche made in France ! Fait main", "", "Ours Simba")
 var fuzzy = new ours("fuzzy",234 + ' €',"Fabuleux Ours en peluche made in France ! Fait main", "" , "Ours fuzzy")
 var Squishy = new ours("squishy",145 + ' €',"Fabuleux Ours en peluche made in France ! Fait main", "", "Ours squishy")
 var Sprinkles = new ours("sprinkles",189 + ' €',"Fabuleux Ours en peluche made in France ! Fait main", "", "Ours sprinkles")
 var Alfred = new ours("Alfred",220 + ' €',"Fabuleux Ours en peluche made in France ! Fait main", "", "Ours ALfred")

 /* Création Produit, page principale + Page produit */

/////////////////* création Simba *//////////////////

  let container = document.createElement("div");
  let titre = document.createElement("h2");
  let prix = document.createElement("p");
  let img = document.createElement("img");
  
  let parent = document.getElementById("liste_produit");

  parent.appendChild(container);
  container.appendChild(titre);
  container.appendChild(prix);
  container.appendChild(img);

  titre.innerHTML = simba.name;
  prix.innerHTML = simba.price;
  img.src = "/backend/images/teddy_1.jpg";

  var objet1 = 0;

/*Page Produit*/

  container.onclick = function (){
    var page_Liste_produit = document.querySelector('section')
    page_Liste_produit.innerHTML = '';
    
    page_Liste_produit = document.createElement('article');
    let titre_produit_simba = document.createElement("h2");
    let prix_produit_simba = document.createElement("h3");
    let img_produit_simba = document.createElement("img");
    let description_produit_simba = document.createElement("p");
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
    
    page_Liste_produit.appendChild(titre_produit_simba);
    page_Liste_produit.appendChild(prix_produit_simba);
    page_Liste_produit.appendChild(img_produit_simba);
    page_Liste_produit.appendChild(description_produit_simba);
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

    ajouteraupanier.setAttribute ('data-id', 1);
    ajouteraupanier.setAttribute ('data-name', "simba");
    ajouteraupanier.setAttribute ('data-price', 333);
    
    titre_produit_simba.innerHTML = simba.name;
    prix_produit_simba.innerHTML = simba.price;
    img_produit_simba.src = "/backend/images/teddy_1.jpg";
    description_produit_simba.innerHTML = simba.description;
    ajouteraupanier.innerHTML = "ajouter au panier";
    select_value.innerText = "Choisir une couleur";
    select_value2.innerHTML = "bleu";
    select_value3.innerHTML = "Vert";
    select_value4.innerHTML = "Violet";

    var container_PageProduit = document.querySelector('main');
    container_PageProduit.appendChild(page_Liste_produit);

    
    document.querySelector('button').addEventListener("click", function(){
      ++ objet1
    localStorage.setItem ('objet1', objet1)
    var x = parseInt(localStorage.getItem('objet1'));
    });
}
  /////////////////* création Fuzzy *///////////////

  let container_fuzzy = document.createElement("div");
  let titre_fuzzy = document.createElement("h2");
  let prix_fuzzy = document.createElement("p");
  let img_fuzzy = document.createElement("img");

  let parent_fuzzy = document.getElementById("liste_produit");

  parent_fuzzy.appendChild(container_fuzzy);
  container_fuzzy.appendChild(titre_fuzzy);
  container_fuzzy.appendChild(prix_fuzzy);
  container_fuzzy.appendChild(img_fuzzy);

  titre_fuzzy.innerHTML = fuzzy.name;
  prix_fuzzy.innerHTML = fuzzy.price;
  img_fuzzy.src = "/backend/images/teddy_2.jpg"

  var objet2 = 0;

/*Page Produit*/

  container_fuzzy.onclick = function (){
    var page_Liste_produit = document.querySelector('section')
    page_Liste_produit.innerHTML = '';
    
    page_Liste_produit = document.createElement('article');
    let titre_produit_fuzzy = document.createElement("h2");
    let prix_produit_fuzzy = document.createElement("h3");
    let img_produit_fuzzy = document.createElement("img");
    let description_fuzzy = document.createElement("p");
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
   
    page_Liste_produit.appendChild(titre_produit_fuzzy);
    page_Liste_produit.appendChild(prix_produit_fuzzy);
    page_Liste_produit.appendChild(img_produit_fuzzy);
    page_Liste_produit.appendChild(description_fuzzy);
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
  
    titre_produit_fuzzy.innerHTML = fuzzy.name;
    prix_produit_fuzzy.innerHTML = fuzzy.price;
    img_produit_fuzzy.src = "/backend/images/teddy_2.jpg";
    description_fuzzy.innerHTML = fuzzy.description;
    ajouteraupanier.innerHTML = "ajouter au panier";
    select_value.innerText = "Choisir une couleur";
    select_value2.innerHTML = "bleu";
    select_value3.innerHTML = "Vert";
    select_value4.innerHTML = "Violet";
    
    var container_PageProduit = document.querySelector('main');
    container_PageProduit.appendChild(page_Liste_produit);

    document.querySelector('button').addEventListener("click", function(){
      ++ objet2
    localStorage.setItem ('objet2', objet2)
    var x = parseInt(localStorage.getItem('objet2'));
    });
  };

   ////////* création Squishy *///////////

   let container_Squishy = document.createElement("div");
   let titre_Squishy = document.createElement("h2");
   let prix_Squishy = document.createElement("p");
   let img_Squishy = document.createElement("img");
 
   let parent_Squishy = document.getElementById("liste_produit");
 
   parent_Squishy.appendChild(container_Squishy);
   container_Squishy.appendChild(titre_Squishy);
   container_Squishy.appendChild(prix_Squishy);
   container_Squishy.appendChild(img_Squishy);

   titre_Squishy.innerHTML = Squishy.name;
   prix_Squishy.innerHTML = Squishy.price;
   img_Squishy.src = "/backend/images/teddy_3.jpg"

   var objet3 = 0;

/*Page Produit*/


   container_Squishy.onclick = function (){
    var page_Liste_produit = document.querySelector('section')
    page_Liste_produit.innerHTML = '';
    
    page_Liste_produit = document.createElement('article');
    let titre_produit_Squishy = document.createElement("h2");
    let prix_produit_Squishy = document.createElement("h3");
    let img_produit_Squishy = document.createElement("img");
    let description_Squishy = document.createElement("p");
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
   
    page_Liste_produit.appendChild(titre_produit_Squishy);
    page_Liste_produit.appendChild(prix_produit_Squishy);
    page_Liste_produit.appendChild(img_produit_Squishy);
    page_Liste_produit.appendChild(description_Squishy);
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
  
  
    titre_produit_Squishy.innerHTML = Squishy.name;
    prix_produit_Squishy.innerHTML = Squishy.price;
    img_produit_Squishy.src = "/backend/images/teddy_3.jpg";
    description_Squishy.innerHTML = Squishy.description;
    ajouteraupanier.innerHTML = "ajouter au panier";
    select_value.innerText = "Choisir une couleur";
    select_value2.innerHTML = "bleu";
    select_value3.innerHTML = "Vert";
    select_value4.innerHTML = "Violet";

    var container_PageProduit = document.querySelector('main');
    container_PageProduit.appendChild(page_Liste_produit);

    document.querySelector('button').addEventListener("click", function(){
      ++ objet3
    localStorage.setItem ('objet3', objet3)
    var x = parseInt(localStorage.getItem('objet3'));
    });

  }
   /* création Sprinkles */

   let container_Sprinkles = document.createElement("div");
   let titre_Sprinkles = document.createElement("h2");
   let prix_Sprinkles = document.createElement("p");
   let img_Sprinkles = document.createElement("img");
 
   let parent_Sprinkles = document.getElementById("liste_produit");
 
   parent_Sprinkles.appendChild(container_Sprinkles);
   container_Sprinkles.appendChild(titre_Sprinkles);
   container_Sprinkles.appendChild(prix_Sprinkles);
   container_Sprinkles.appendChild(img_Sprinkles);
 
   titre_Sprinkles.innerHTML = Sprinkles.name;
   prix_Sprinkles.innerHTML = Sprinkles.price;
   img_Sprinkles.src = "/backend/images/teddy_4.jpg"

   var objet4 = 0;

   container_Sprinkles.onclick = function (){
    var page_Liste_produit = document.querySelector('section')
    page_Liste_produit.innerHTML = '';
    
    page_Liste_produit = document.createElement('article');
    let titre_produit_Sprinkles = document.createElement("h2");
    let prix_produit_Sprinkles = document.createElement("h3");
    let img_produit_Sprinkles = document.createElement("img");
    let description_Sprinkles = document.createElement("p");
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
   
    page_Liste_produit.appendChild(titre_produit_Sprinkles);
    page_Liste_produit.appendChild(prix_produit_Sprinkles);
    page_Liste_produit.appendChild(img_produit_Sprinkles);
    page_Liste_produit.appendChild(description_Sprinkles);
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
  
    titre_produit_Sprinkles.innerHTML = Sprinkles.name;
    prix_produit_Sprinkles.innerHTML =Sprinkles.price;
    img_produit_Sprinkles.src = "/backend/images/teddy_3.jpg";
    description_Sprinkles.innerHTML = Sprinkles.description;
    ajouteraupanier.innerHTML = "ajouter au panier";
    select_value.innerText = "Choisir une couleur";
    select_value2.innerHTML = "Rouge";
    select_value3.innerHTML = "Vert";
    select_value4.innerHTML = "Violet";
  
    var container_PageProduit = document.querySelector('main');
    container_PageProduit.appendChild(page_Liste_produit);

    document.querySelector('button').addEventListener("click", function(){
      ++ objet4
    localStorage.setItem ('objet4', objet4)
    var x = parseInt(localStorage.getItem('objet4'));
    });

  };
  
  ///////////////* création Alfred */////////////////////////////

   let container_Alfred = document.createElement("div");
   let titre_Alfred = document.createElement("h2");
   let prix_Alfred = document.createElement("p");
   let img_Alfred = document.createElement("img");
 
   let parent_Alfred = document.getElementById("liste_produit");
 
   parent_Alfred.appendChild(container_Alfred);
   container_Alfred.appendChild(titre_Alfred);
   container_Alfred.appendChild(prix_Alfred);
   container_Alfred.appendChild(img_Alfred);
 
   titre_Alfred.innerHTML = Alfred.name;
   prix_Alfred.innerHTML = Alfred.price;
   img_Alfred.src = "/backend/images/teddy_5.jpg"

   var objet5 = 0;

   /* Page produit */

   container_Alfred.onclick = function (){
    var page_Liste_produit = document.querySelector('section')
    page_Liste_produit.innerHTML = '';
    
    page_Liste_produit = document.createElement('article');
    let titre_produit_Alfred = document.createElement("h2");
    let prix_produit_Alfred = document.createElement("h3");
    let img_produit_Alfred = document.createElement("img");
    let description_Alfred = document.createElement("p");
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
   
    page_Liste_produit.appendChild(titre_produit_Alfred);
    page_Liste_produit.appendChild(prix_produit_Alfred);
    page_Liste_produit.appendChild(img_produit_Alfred);
    page_Liste_produit.appendChild(description_Alfred);
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
  
    titre_produit_Alfred.innerHTML = Alfred.name;
    prix_produit_Alfred.innerHTML =Alfred.price;
    img_produit_Alfred.src = "/backend/images/teddy_4.jpg";
    description_Alfred.innerHTML = Alfred.description;
    ajouteraupanier.innerHTML = "ajouter au panier";
    select_value.innerText = "Choisir une couleur";
    select_value2.innerHTML = "bleu";
    select_value3.innerHTML = "Orange";
    select_value4.innerHTML = "Violet";

    var container_PageProduit = document.querySelector('main');
    container_PageProduit.appendChild(page_Liste_produit);

    document.querySelector('button').addEventListener("click", function(){
      ++ objet5
    localStorage.setItem ('objet5', objet5)
    var x = parseInt(localStorage.getItem('objet5'));
    });

  };
  
  ////////////////*  widjet Panier *///////////////////

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





