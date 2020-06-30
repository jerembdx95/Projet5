let orderId;

function sendForm(){ 
 
    let submit = document.getElementById("Form");

    submit.addEventListener('submit', function(e){
     e.preventDefault();

     contact = {
      lastName: nom.value,
      firstName: prenom.value,
      address: adresse.value,
      city: ville.value,
      email: email.value,
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
    .then((orderData) => {
      localStorage.clear();
      localStorage.setItem("orderData", JSON.stringify(orderData.orderId));
      window.location.href = "PageValidation.html"; 
    })
    .catch(function(error) {
        console.error("Erreur", error);
    })  
  })}
