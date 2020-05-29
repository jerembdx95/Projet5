var ours = function ours(name, price, description, img, titre, id){ 
    this.name = name;
    this.price = price;
    this.description = description;
    this.img = img;
    this.titre = titre;
    this.id = id;
   }

var simba = new ours("simba", 333 + ' €',"Entièrement tricoté à la main, ce doudou est le cadeau idéal pour une naissance. Sa confection minutieuse participe à préserver des savoir-faire et des techniques respectueuses des humains et de la nature. Il est réalisé en pure laine baby alpaga, une matière anti-bactérienne très douce, particulièrement adaptée aux peaux sensibles et est facile à tenir grâce à ses longues pattes.", "/backend/images/teddy_1.jpg", "Ours Simba", 1)
var fuzzy = new ours("fuzzy", 234 + ' €',"Entièrement tricoté à la main, ce doudou est le cadeau idéal pour une naissance. Sa confection minutieuse participe à préserver des savoir-faire et des techniques respectueuses des humains et de la nature. Il est réalisé en pure laine baby alpaga, une matière anti-bactérienne très douce, particulièrement adaptée aux peaux sensibles et est facile à tenir grâce à ses longues pattes.", "/backend/images/teddy_2.jpg",  "Ours fuzzy", 2)
var Squishy = new ours("squishy", 145 + ' €',"Entièrement tricoté à la main, ce doudou est le cadeau idéal pour une naissance. Sa confection minutieuse participe à préserver des savoir-faire et des techniques respectueuses des humains et de la nature. Il est réalisé en pure laine baby alpaga, une matière anti-bactérienne très douce, particulièrement adaptée aux peaux sensibles et est facile à tenir grâce à ses longues pattes.", "/backend/images/teddy_3.jpg", "Ours squishy", 3)
var Sprinkles = new ours("sprinkles", 189 + ' €',"Entièrement tricoté à la main, ce doudou est le cadeau idéal pour une naissance. Sa confection minutieuse participe à préserver des savoir-faire et des techniques respectueuses des humains et de la nature. Il est réalisé en pure laine baby alpaga, une matière anti-bactérienne très douce, particulièrement adaptée aux peaux sensibles et est facile à tenir grâce à ses longues pattes.", "/backend/images/teddy_4.jpg", "Ours sprinkles", 4)
var Alfred = new ours("Alfred", 220 + ' €',"Entièrement tricoté à la main, ce doudou est le cadeau idéal pour une naissance. Sa confection minutieuse participe à préserver des savoir-faire et des techniques respectueuses des humains et de la nature. Il est réalisé en pure laine baby alpaga, une matière anti-bactérienne très douce, particulièrement adaptée aux peaux sensibles et est facile à tenir grâce à ses longues pattes.", "/backend/images/teddy_5.jpg", "Ours ALfred", 5)

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
    prix_P1.className = 'prix';
    var supprimer = document.createElement('th')
    ligne1.appendChild(supprimer)
    }
    
    if (localStorage.getItem(element.id) > 0){
        produit_panier.innerHTML = element.name;
        quantité_P1.innerHTML = localStorage.getItem(element.id);
        prix_P1.innerHTML = localStorage.getItem(element.id) * parseInt(element.price);
        supprimer.innerHTML = 'supprimer'; 
        supprimer.onclick = function (){
        localStorage.removeItem(element.id);
        location.reload();
        };
    }
    });

/* Total Commande */

var total = document.getElementById('total_commande');
var element_total = document.createElement('p');
total.appendChild(element_total);
element_total.innerHTML = '';

 
 //--------------------FORMULAIRE----------------//

