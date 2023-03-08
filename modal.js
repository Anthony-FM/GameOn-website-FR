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
  document.querySelector(".content").classList.remove("modalClose")
}

// Close span 'close'
close.addEventListener("click", closeModal);

function closeModal(){
  document.querySelector(".content").classList.add("modalClose")
  
  setTimeout(() => {
    modalbg.style.display = "none";
  }, 750);
}

// FORMULAIRE
//=================================================================

//Variable du formulaire
//=================================================================

const first = document.getElementById("first");
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
const checkboxCondition = document.getElementById("checkbox1");

// constante RegExp
//==================================================================
const firstRegex = /^([a-zA-Zéèîïêë]{2,})+$/g; // RegExp pour les Prénoms et Noms
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; // RegExp pour les adresses emails
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
// spanErrorCheckbox.innerHTML = "Vous devez choisir une option."
// if(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked){
//   spanErrorCheckbox.innerHTML = "";
// }

// Erreur Checkbox Condition
let spanErrorCondition = document.createElement('span');
checkboxCondition.nextElementSibling.appendChild(spanErrorCondition);
spanErrorCondition.classList.add('textError');
// spanErrorCondition.innerHTML = "Ce champ est obligatoire";


// Création des écoutes d'évènements
//==================================================================

let firstTest = false;
first.addEventListener('input', function(event){  
  let firstValue = event.target.value;   

    if(firstValue.length < 2){      
      spanErrorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
      firstTest = false;

    } else if(!firstValue.match(firstRegex)){ 
      spanErrorFirst.innerHTML = "Ce champ requiere une prénom valide"; 
      firstTest = false;

    } else if(firstValue.match(firstRegex)){
      spanErrorFirst.innerHTML = "";  
      firstTest = true;
    }

    console.log("First name: "+ firstTest);
    return firstTest;
})

let lastTest = false;
last.addEventListener('input', function(event){  
  let lastValue = event.target.value;   

    if(lastValue.length < 2){      
      spanErrorLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
      lastTest = false;

    } else if(!lastValue.match(firstRegex)){             
      spanErrorLast.innerHTML = "Ce champ requiere une nom valide"; 
      lastTest = false;

    } else if(lastValue.match(firstRegex)){
      spanErrorLast.innerHTML = ""; 
      lastTest = true; 

    }
    console.log("Last name: "+ lastTest);
    return lastTest;
})

let emailTest = false;
email.addEventListener('input', function(event){  
  let emailValue = event.target.value; 

    if(emailValue == ''){      
      spanErrorEmail.innerHTML = "Veuillez renseigner un Email";
      emailTest = false;

    } else if(!emailValue.match(emailRegex)){             
      spanErrorEmail.innerHTML = "Ce champ requiere un email valide"; 
      emailTest = false;

    } else if(emailValue.match(emailRegex)){
      spanErrorEmail.innerHTML = "";
      emailTest = true;  

    }
    console.log("email: "+ emailTest);
    return emailTest;
})

let daysTest = false;
birthdate.addEventListener('input', function(event){  
  let birthdateValue = new Date(event.target.value);  // récupération de la valeur entré par l'utilisateur 
  // console.log(birthdateValue);
  let today = new Date(); // récupération de la date du jour de l'ordinateur
  // console.log(today)

  let diff = Math.abs(today-birthdateValue); // on fait la différence entre la valeur de l'ordinateur à celui de l'utilisateur
  let days = Math.floor(diff/(1000 * 3600 * 24)) // convertion des milliseconde en jour
  // console.log(days);

    if(days <= 0){      
      spanErrorBirthdate.innerHTML = "Vous devez entrer votre date de naissance";
      daysTest = false;

    } else if (!birthdateValue == dateRegex || days < 0 || days > 43800){ // Ajout d'une valeur max(minimum) de 120ans (Peut-être qu'à 120 ans on peut encore jouer...)
      spanErrorBirthdate.innerHTML = "Veuillez entrer une date valide";
      daysTest = false;

    } else if(days < 6570 ){ // 18 années = 6570 jour !           
      spanErrorBirthdate.innerHTML = "Vous êtes trop jeune pour vous inscrire aux jeux"; 
      daysTest = false;

    } else if(days >= 6570){
      spanErrorBirthdate.innerHTML = "";  
      daysTest = true;

    }

    console.log("birthdate: "+ daysTest)
    return daysTest;
})

let quantityTest = false;
quantity.addEventListener('input', function(event){  
  let quantityValue = event.target.value; 

    if(quantityValue == ''){      
      spanErrorQuantity.innerHTML = "Veuillez renseigner une quantitée";
      quantityTest = false;

    } else if(!quantityValue.match(quantityRegex) || (quantityValue > 99)){   
          
      spanErrorQuantity.innerHTML = "Ce champ requiere une quantitée raisonnable"; 
      quantityTest = false;

    } else if(quantityValue >= 0 && quantityValue <= 99 && quantityValue.match(quantityRegex)){

      spanErrorQuantity.innerHTML = ""; 
      quantityTest = true; 
    }

   console.log("quantité: "+quantityTest);
   return quantityTest;
})

let checkTest = false;
checkboxLocation.addEventListener('change', function(event){
  let check = event.target.value;

  if(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked){
    spanErrorCheckbox.innerHTML = ""
    checkTest = true;
    
  } else {
    spanErrorCheckbox.innerHTML = "Veuillez renseigner une ville";
    checkTest = false;
  }

  console.log("checkbox: " + checkTest);
  return check;  
})

let conditionTest = false;
checkboxCondition.addEventListener('change', function(e){  
    if(!checkboxCondition.checked){      
      spanErrorCondition.innerHTML = "Ce champ est obligatoire";
      conditionTest = false;

    } else {
      spanErrorCondition.innerHTML = "";
      conditionTest = true;
    } 
    console.log("condition: "+ conditionTest);
    return conditionTest;
})

function validate(event){
  event.preventDefault();
  event.stopPropagation();

  if(firstTest && lastTest && emailTest && daysTest && quantityTest && checkTest && conditionTest){
    // On supprime les données une fois que c'est validé et la page rafraichit
    first.value = "";
    last.value = "";
    email.value = "";
    birthdate.value = "";
    quantity.value = "";
    checkboxCondition.checked = false; 
    location1.checked = false;
    location2.checked = false;
    location3.checked = false;
    location4.checked = false;
    location5.checked = false;
    location6.checked = false;

    // On crée un nouveau modal de remerciement
    reserve.innerHTML = '<p class="paragrapheCloseModal">Merci pour <br/> votre inscription</p> <br/> <button id="secondClose" class="closeButton">fermer</button>';
    document.getElementById("secondClose").addEventListener("click", closeModal1);   
     // Création de la fermeture du modale remerciement
    function closeModal1(){    
      modalbg.style.display = "none";
      location.reload();
      return;
    }  
      
  } 

  // Si les valeurs ne sont pas remplie avant la validation, on averti l'utilisateur
  if(!first.value) {
    spanErrorFirst.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  }
  if(!last.value){
    spanErrorLast.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }
  if (!email.value) {
      spanErrorEmail.innerHTML = "Veuillez renseigner un Email";
  }
  if (!birthdate.value) {
    spanErrorBirthdate.innerHTML = "Vous devez entrer votre date de naissance";
  }
  if (!quantity.value) {
    spanErrorQuantity.innerHTML = "Veuillez renseigner une quantitée";
  }
  if (!(location1.checked || location2.checked || location3.checked || location4.checked || location5.checked || location6.checked)) {  
    spanErrorCheckbox.innerHTML = "Veuillez renseigner une ville";
  }
  if (!checkboxCondition.checked) {  spanErrorCondition.innerHTML = "Ce champ est obligatoire";
}

//test d'erreur lors de la validation
  console.log("prénom: " + firstTest + " nom: " + lastTest + " email: " + emailTest + " anniversaire: " + daysTest + 
              " quantité: " + quantityTest  + " check " + checkTest + " condition: " + conditionTest);
}