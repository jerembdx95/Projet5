function sendForm(){ 
 
    let submit = document.getElementById("Form");
  
    submit.addEventListener('submit', function(e){
     e.preventDefault();
    
      contact = {
        lastName: nom,
        firstName: prenom,
        address: adresse,
        city: ville,
        email: email,
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
                    console.log(response.json());
                  /*  window.location.href = "PageValidation.html"; */
                    return response.json();
                  })
              
                  .catch(function(error) {
                      console.error("Erreur", error);
                  })  
                })}
                
                
