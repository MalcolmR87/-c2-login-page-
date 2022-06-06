const hideForm = document.getElementById("hidden");
const formSection = document.getElementById("form-section");
const loginEl = document.getElementById("email", "password");
const loginBtn = document.querySelector("#Login")


function loginIn(event) {
  event.preventDefault();
  
  if( loginEl === ""); {

    hideForm.classList.remove("hide");
    loginBtn.value = "Logging In";
  }
}

formSection.addEventListener("Submit", loginIn);