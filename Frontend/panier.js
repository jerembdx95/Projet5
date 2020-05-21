
var ours = function ours(name, price, description, img, titre, id){ 
    this.name = name;
    this.price = price;
    this.description = description;
    this.img = img;
    this.titre = titre;
    this.id = id;
   }

var simba = new ours("simba",333 + ' €',"Fabuleux Ours en peluche made in France ! Fait main", "/backend/images/teddy_1.jpg", "Ours Simba", 1)
var fuzzy = new ours("fuzzy",234 + ' €',"Fabuleux Ours en peluche made in France ! Fait main", "/backend/images/teddy_2.jpg" , "Ours fuzzy", 2)
var Squishy = new ours("squishy",145 + ' €',"Fabuleux Ours en peluche made in France ! Fait main", "/backend/images/teddy_3.jpg", "Ours squishy", 3)
var Sprinkles = new ours("sprinkles",189 + ' €',"Fabuleux Ours en peluche made in France ! Fait main", "/backend/images/teddy_4.jpg", "Ours sprinkles", 4)
var Alfred = new ours("Alfred",220 + ' €',"Fabuleux Ours en peluche made in France ! Fait main", "/backend/images/teddy_5.jpg", "Ours ALfred", 5)

const catalogue = [ simba , fuzzy , Squishy, Sprinkles, Alfred];

/////////////////////Page Panier//////////////////////

catalogue.forEach(element => { 

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
    };

    if (localStorage.getItem(element.id) > 0){
        produit_panier.innerHTML = element.name;
        quantité_P1.innerHTML = localStorage.getItem(element.id);
        prix_P1.innerHTML = localStorage.getItem(element.id) * parseInt(element.price);
    };
});

/* total commande */

var total = document.getElementById('total_commande');


