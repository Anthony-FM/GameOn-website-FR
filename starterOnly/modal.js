function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// création d'un variable close
const close = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close span 'close'
close.addEventListener("click", closeModal);

function closeModal(){
  
  return modalbg.style.display = "none";
}

// FORMULAIRE
//=================================================================

//Variable du formulaire
//=================================================================

let first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const checkboxLocation = document.getElementById("location");
const location1 = document.getElementById("location1");
const location2 = document.getElementById("location2");
const location3 = document.getElementById("location3");
const location4 = document.getElementById("location4");
const location5 = document.getElementById("location5");
const location6 = document.getElementById("location6");

// constante RegExp
//==================================================================
const firstRegex = /^[a-zA-Zéèîïêë]+$/g; // RegExp pour les Prénoms et Noms
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // RegExp pour les adresses emails
const dateRegex = /^([0-2]{1}[0-9]{3})\/([0-1]{1}[0-9]{1})\/([0-2]{1}[0-9]{1}|30|31)/g // RegExp pour les dates
const quantityRegex = /\d{1,2}/; // RegExp pour la quantitée allant de 0 à 99;

//  Création des span pour les messages d'erreurs
//==================================================================

// Erreur First
let spanErrorFirst = document.createElement('span');
first.parentElement.appendChild(spanErrorFirst);
spanErrorFirst.classList.add('textError');

//Erreur Last
let spanErrorLast = document.createElement('span');
last.parentElement.appendChild(spanErrorLast);
spanErrorLast.classList.add('textError');

// Erreur email
let spanErrorEmail = document.createElement('span');
email.parentElement.appendChild(spanErrorEmail);
spanErrorEmail.classList.add('textError');

// Erreur birthdate
let spanErrorBirthdate = document.createElement('span');
birthdate.parentElement.appendChild(spanErrorBirthdate);
spanErrorBirthdate.classList.add('textError');

// Erreur quantity
let spanErrorQuantity = document.createElement('span');
quantity.parentElement.appendChild(spanErrorQuantity);
spanErrorQuantity.classList.add('textError');

// Erreur checkbox
let spanErrorCheckbox = document.createElement('span');
checkboxLocation.appendChild(spanErrorCheckbox);
spanErrorCheckbox.classList.add('textError');

// Création des écoutes d'évènements
//==================================================================


first.addEventListener('input', function(e){  
  let firstValue = e.target.value; 

    if(firstValue == ''){
      
      spanErrorFirst.innerHTML = "Veuillez renseigner un prénom";

    } else if(!firstValue.match(firstRegex)){   
          
      spanErrorFirst.innerHTML = "Ce champ requiere une prénom valide"; 

    } else if(firstValue.match(firstRegex)){

      spanErrorFirst.innerHTML = "";  
    }

    return first;
})

last.addEventListener('input', function(e){  
  let lastValue = e.target.value; 

    if(lastValue == ''){
      
      spanErrorLast.innerHTML = "Veuillez renseigner un Nom";

    } else if(!lastValue.match(firstRegex)){   
          
      spanErrorLast.innerHTML = "Ce champ requiere une nom valide"; 

    } else if(lastValue.match(firstRegex)){

      spanErrorLast.innerHTML = "";  
    }

    return last;
})

email.addEventListener('input', function(e){  
  let emailValue = e.target.value; 

    if(emailValue == ''){
      
      spanErrorEmail.innerHTML = "Veuillez renseigner un Email";

    } else if(!emailValue.match(emailRegex)){   
          
      spanErrorEmail.innerHTML = "Ce champ requiere un email valide"; 

    } else if(emailValue.match(emailRegex)){

      spanErrorEmail.innerHTML = "";  
    }

    return email;
})

birthdate.addEventListener('input', function(e){  
  let birthdateValue = new Date(e.target.value);  // récupération de la valeur entré par l'utilisateur 
  // console.log(birthdateValue);
  let today = new Date(); // récupération de la date du jour de l'ordinateur
  // console.log(today)

  let diff = Math.abs(today-birthdateValue); // on fait la différence entre la valeur de l'ordinateur à celui de l'utilisateur
  let days = Math.floor(diff/(1000 * 3600 * 24)) // convertion des milliseconde en jour
  // console.log(days);
  

    if(days <= 0){
      
      spanErrorBirthdate.innerHTML = "Veuillez renseigner votre date de naissance";
      return birthdateValue = false;

    } else if (!birthdateValue == dateRegex || days <= 0 || days > 43800){ // Ajout d'une valeur max(minimum) de 120ans (Peut-être qu'à 120 ans on peut encore jouer...)

      spanErrorBirthdate.innerHTML = "Veuillez entrer une date valide";
      return birthdateValue = false;

    } else if(days < 6570 ){ // 18 années = 6570 jour ! 
          
      spanErrorBirthdate.innerHTML = "Vous êtes trop jeune pour vous inscrire aux jeux"; 
      return birthdateValue = false;

    } else if(days >= 6570){

      spanErrorBirthdate.innerHTML = "";  
      return birthdateValue = true;
    }

    return birthdateValue;
})

quantity.addEventListener('input', function(e){  
  let quantityValue = e.target.value; 

    if(quantityValue == ''){
      
      spanErrorQuantity.innerHTML = "Veuillez renseigner une quantitée";
      return quantityValue = false;

    } else if(!quantityValue.match(quantityRegex) || (quantityValue > 99)){   
          
      spanErrorQuantity.innerHTML = "Ce champ requiere une quantitée raisonnable"; 
      return quantityValue = false;

    } else if(quantityValue >= 0 && quantityValue <= 99 && quantityValue.match(quantityRegex)){

      spanErrorQuantity.innerHTML = ""; 
      return quantityValue = true; 
    }

   console.log(quantity);
})

checkboxLocation.addEventListener('change', function(event){
  let check = event.target.value;

  if(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked){
    return check = true;
    
  } else {
    spanErrorCheckbox.innerHTML = "Veuillez renseigner une ville";
    return check = false;
  }
  
})

document.forms["reserve"].addEventListener('submit', function validate(e){
  e.preventDefault();
  e.stopPropagation();
  reserve.innerHTML = '<p class="paragrapheCloseModal">Merci pour <br/> votre inscription</p> <br/> <button id="secondClose" class="closeButton">fermer</button>';
  document.getElementById("secondClose").addEventListener("click", closeModal);
  function closeModal(){    
    return modalbg.style.display = "none";
  }
  
})
