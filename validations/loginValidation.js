window.addEventListener("load", function () {
    // variables
    const form = document.querySelector("#form");
    const submitbutton = document.querySelector("#submitbutton");
    const first_name = document.querySelector("#first_name");
    const last_name = document.querySelector("#last_name");
    const username = document.querySelector("#username");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");
    const rePassword = document.querySelector("#rePassword");
  
    // errores
	let first_nameError = document.querySelector(".first_nameError");
	let last_nameError = document.querySelector(".last_nameError");
	let usernameError = document.querySelector(".usernameError");
	let emailError = document.querySelector(".emailError");
	let passwordError = document.querySelector(".passwordError");
	let rePasswordError = document.querySelector(".rePasswordError");

    submitbutton.addEventListener("click", function (event) {
      event.preventDefault();
      let errores = {};
      if (first_name.value.length < 1) {
        errores.first_name = "*El campo debe estar completo";
      }
      if (last_name.value.length < 1) {
        errores.last_name = "*El campo debe estar completo";
      }
      if (username.value.length < 1) {
        errores.username = "*El campo debe estar completo";
      }
      if (email.value.length < 1) {
        errores.email = "*El campo debe estar completo";
      }
      if (password.value.length < 1) {
        errores.password = "*El campo debe estar completo";
      }
      if (rePassword.value.length < 1) {
        errores.rePassword = "*El campo debe estar completo";
      }
      if (Object.keys(errores).length >= 1) {
        first_nameError.innerText = errores.first_name ? errores.first_name : "";
        last_nameError.innerText = errores.last_name ? errores.last_name : "";
        usernameError.innerText = errores.username ? errores.username : "";
        emailError.innerText = errores.email ? errores.email : "";
        passwordError.innerText = errores.password ? errores.password : "";
        rePasswordError.innerText = errores.rePassword ? errores.rePassword : "";
      } else {
        form.submit();
      }
    });
  });