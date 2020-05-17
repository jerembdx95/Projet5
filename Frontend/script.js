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
 
 var simba = new ours("simba",333 + ' €',"ours en peluche made in France , fait main", "", "Ours Simba")
 var fuzzy = new ours("fuzzy",234 + ' €',"ours en peluche made in France , fait main", "" , "Ours fuzzy")
 var Squishy = new ours("squishy",145 + ' €',"ours en peluche made in France , fait main", "", "Ours squishy")
 var Sprinkles = new ours("sprinkles",189 + ' €',"ours en peluche made in France , fait main", "", "Ours sprinkles")
 var Alfred = new ours("Alfred",220 + ' €',"ours en peluche made in France , fait main", "", "Ours ALfred")

 /* Création Produit page principale */

/* création Simba */


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

  container.onclick = function (){
    var page_Liste_produit = document.querySelector('section')
    page_Liste_produit.innerHTML = '';
    
    page_Liste_produit = document.createElement('article');
    let titre_produit_simba = document.createElement("h2");
    let prix_produit_simba = document.createElement("h3");
    let img_produit_simba = document.createElement("img");
    let description_produit_simba = document.createElement("p");
   
    page_Liste_produit.appendChild(titre_produit_simba);
    page_Liste_produit.appendChild(prix_produit_simba);
    page_Liste_produit.appendChild(img_produit_simba);
    page_Liste_produit.appendChild(description_produit_simba);
  
    titre_produit_simba.innerHTML = simba.name;
    prix_produit_simba.innerHTML = simba.price;
    img_produit_simba.src = "/backend/images/teddy_1.jpg";
    description_produit_simba.innerHTML = simba.description;
  
    var container_PageProduit = document.querySelector('main');
    container_PageProduit.appendChild(page_Liste_produit);
  };

  /* création Fuzzy */

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
  container_fuzzy.onclick = function (){
    var page_Liste_produit = document.querySelector('section')
    page_Liste_produit.innerHTML = '';
    
    page_Liste_produit = document.createElement('article');
    let titre_produit_fuzzy = document.createElement("h2");
    let prix_produit_fuzzy = document.createElement("h3");
    let img_produit_fuzzy = document.createElement("img");
    let description_fuzzy = document.createElement("p");
   
    page_Liste_produit.appendChild(titre_produit_fuzzy);
    page_Liste_produit.appendChild(prix_produit_fuzzy);
    page_Liste_produit.appendChild(img_produit_fuzzy);
    page_Liste_produit.appendChild(description_fuzzy);
  
    titre_produit_fuzzy.innerHTML = fuzzy.name;
    prix_produit_fuzzy.innerHTML = fuzzy.price;
    img_produit_fuzzy.src = "/backend/images/teddy_2.jpg";
    description_fuzzy.innerHTML = fuzzy.description;
  
    var container_PageProduit = document.querySelector('main');
    container_PageProduit.appendChild(page_Liste_produit);
  };



   /* création Squishy */

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

   container_Squishy.onclick = function (){
    var page_Liste_produit = document.querySelector('section')
    page_Liste_produit.innerHTML = '';
    
    page_Liste_produit = document.createElement('article');
    let titre_produit_Squishy = document.createElement("h2");
    let prix_produit_Squishy = document.createElement("h3");
    let img_produit_Squishy = document.createElement("img");
    let description_Squishy = document.createElement("p");
   
    page_Liste_produit.appendChild(titre_produit_Squishy);
    page_Liste_produit.appendChild(prix_produit_Squishy);
    page_Liste_produit.appendChild(img_produit_Squishy);
    page_Liste_produit.appendChild(description_Squishy);
  
    titre_produit_Squishy.innerHTML = Squishy.name;
    prix_produit_Squishy.innerHTML = Squishy.price;
    img_produit_Squishy.src = "/backend/images/teddy_3.jpg";
    description_Squishy.innerHTML = Squishy.description;
  
    var container_PageProduit = document.querySelector('main');
    container_PageProduit.appendChild(page_Liste_produit);
  };


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

   container_Sprinkles.onclick = function (){
    var page_Liste_produit = document.querySelector('section')
    page_Liste_produit.innerHTML = '';
    
    page_Liste_produit = document.createElement('article');
    let titre_produit_Sprinkles = document.createElement("h2");
    let prix_produit_Sprinkles = document.createElement("h3");
    let img_produit_Sprinkles = document.createElement("img");
    let description_Sprinkles = document.createElement("p");
   
    page_Liste_produit.appendChild(titre_produit_Sprinkles);
    page_Liste_produit.appendChild(prix_produit_Sprinkles);
    page_Liste_produit.appendChild(img_produit_Sprinkles);
    page_Liste_produit.appendChild(description_Sprinkles);
  
    titre_produit_Sprinkles.innerHTML = Sprinkles.name;
    prix_produit_Sprinkles.innerHTML =Sprinkles.price;
    img_produit_Sprinkles.src = "/backend/images/teddy_3.jpg";
    description_Sprinkles.innerHTML = Sprinkles.description;
  
    var container_PageProduit = document.querySelector('main');
    container_PageProduit.appendChild(page_Liste_produit);
  };

   /* création Alfred */

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

   container_Alfred.onclick = function (){
    var page_Liste_produit = document.querySelector('section')
    page_Liste_produit.innerHTML = '';
    
    page_Liste_produit = document.createElement('article');
    let titre_produit_Alfred = document.createElement("h2");
    let prix_produit_Alfred = document.createElement("h3");
    let img_produit_Alfred = document.createElement("img");
    let description_Alfred = document.createElement("p");
   
    page_Liste_produit.appendChild(titre_produit_Alfred);
    page_Liste_produit.appendChild(prix_produit_Alfred);
    page_Liste_produit.appendChild(img_produit_Alfred);
    page_Liste_produit.appendChild(description_Alfred);
  
    titre_produit_Alfred.innerHTML = Alfred.name;
    prix_produit_Alfred.innerHTML =Alfred.price;
    img_produit_Alfred.src = "/backend/images/teddy_4.jpg";
    description_Alfred.innerHTML = Alfred.description;
  
    var container_PageProduit = document.querySelector('main');
    container_PageProduit.appendChild(page_Liste_produit);
  };
  
 
