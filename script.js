const hideElement = document.querySelector(".hide");
//console.log(hideElement)
const emailElement = document.querySelector("input#email");
//console.log(emailElement)
const formElement = document.getElementById("form-section");
//console.log(formElement)
formElement.addEventListener("submit", submitForm);

//console.log(  hideElement.classList.remove  )
//console.log(  hideElement.classList.remove("hide") )

function submitForm(evt){
  evt.preventDefault();

  if(emailElement.value === ""){
    //console.log(emailElement.value)
    hideElement.classList.remove('hide');

  } else {
   hideElement.classList.add('hide');
  }
}