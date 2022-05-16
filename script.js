const email = document.getElementById("email");
const submit = document.getElementById("submit");
const errorMobile = document.querySelector(".error-mobile");
const errorDesktop = document.querySelector(".error-desktop");
const desktop = window.matchMedia("(min-width: 1200px)");

const validateEmail = function () {
    const mailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email.value.match(mailformat)) {
      return true;
    } else {
      return false;
    }
  };

submit.addEventListener('click', function (e) {
    e.preventDefault();
    if (desktop.matches) {
        if (validateEmail() === false) {
            email.classList.add("red-border")
            errorDesktop.innerHTML = "Please provide a valid email address"
        }
    } else {
        if (validateEmail() === false) {
            email.classList.add("red-border")
            errorMobile.innerHTML = "Please provide a valid email address"
        }
    }

})

email.addEventListener('change',  function (e) {
    e.preventDefault();
    if (desktop.matches) {
        if (validateEmail() === false) {
            email.classList.remove("red-border")
            errorDesktop.innerHTML = ""
        }
    } else {
        if (validateEmail() === false) {
            email.classList.remove("red-border")
            errorMobile.innerHTML = ""
        }
    }
})