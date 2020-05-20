
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

/////////////////////Page Panier//////////////////////

var tableau = document.querySelector('table')

if (localStorage.getItem('objet1') > 0){

var tableau = document.querySelector('table')
var ligne1 = document.createElement ('tr')
tableau.appendChild(ligne1);
var produit_panier = document.createElement('th')
ligne1.appendChild(produit_panier);
var quantité_P1 = document.createElement('th')
ligne1.appendChild(quantité_P1);
var prix_P1 = document.createElement('th')
ligne1.appendChild(prix_P1)

var ligne2 = document.createElement ('tr')
tableau.appendChild(ligne2);
var produit_panier2 = document.createElement('th')
ligne2.appendChild(produit_panier2);
var quantité_P2 = document.createElement('th')
ligne2.appendChild(quantité_P2);
var prix_P2 = document.createElement('th')
ligne2.appendChild(prix_P2)

var ligne3 = document.createElement ('tr')
tableau.appendChild(ligne3);
var produit_panier3 = document.createElement('th')
ligne3.appendChild(produit_panier3);
var quantité_P3 = document.createElement('th')
ligne3.appendChild(quantité_P3);
var prix_P3 = document.createElement('th')
ligne3.appendChild(prix_P3)

var ligne4 = document.createElement ('tr')
tableau.appendChild(ligne4);
var produit_panier4 = document.createElement('th')
ligne4.appendChild(produit_panier4);
var quantité_P4 = document.createElement('th')
ligne4.appendChild(quantité_P4);
var prix_P4 = document.createElement('th')
ligne4.appendChild(prix_P4)

var ligne5 = document.createElement ('tr')
tableau.appendChild(ligne5);
var produit_panier5 = document.createElement('th')
ligne5.appendChild(produit_panier5);
var quantité_P5 = document.createElement('th')
ligne5.appendChild(quantité_P5);
var prix_P5 = document.createElement('th')
ligne5.appendChild(prix_P5) }


if (localStorage.getItem('objet1') > 0){
    produit_panier.innerHTML = "Simba";
    quantité_P1.innerHTML = localStorage.getItem('objet1');
    prix_P1.innerHTML = localStorage.getItem('objet1') * parseInt(simba.price);
};

if (localStorage.getItem('objet2') > 0){
    produit_panier2.innerHTML = "Fuzzy";
    quantité_P2.innerHTML = localStorage.getItem('objet2');
    prix_P2.innerHTML = localStorage.getItem('objet2') * parseInt(fuzzy.price);
};

if (localStorage.getItem('objet3') > 0){
    produit_panier3.innerHTML = "Squishy";
    quantité_P3.innerHTML = localStorage.getItem('objet3');
    prix_P3.innerHTML = localStorage.getItem('objet3') * parseInt(Squishy.price);
};

if (localStorage.getItem('objet4') > 0){
    produit_panier4.innerHTML = "Sprinkles";
    quantité_P4.innerHTML = localStorage.getItem('objet4');
    prix_P4.innerHTML = localStorage.getItem('objet4') * parseInt(Sprinkles.price);
};

if (localStorage.getItem('objet5') > 0){
    produit_panier5.innerHTML = "Alfred";
    quantité_P5.innerHTML = localStorage.getItem('objet5');
    prix_P5.innerHTML = localStorage.getItem('objet5') * parseInt(Alfred.price);
};

/* total commande */



