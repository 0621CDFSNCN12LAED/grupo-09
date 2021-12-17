window.addEventListener("load", function () {
  // variables
  const form = document.querySelector("#form");
  const submitbutton = document.querySelector("#submitbutton");
  const user = document.querySelector("#user");
  const password = document.querySelector("#password");

  // errores
  let userError = document.querySelector(".userError");
  let passwordError = document.querySelector(".passwordError");

  submitbutton.addEventListener("click", function (event) {
    event.preventDefault();
    let errores = {};
    if (user.value.length < 1) {
      errores.user = "*El campo Usuario debe estar completo";
    }
    if (password.value.length < 1) {
      errores.password = "*El campo Password debe estar completo";
    }
    if (Object.keys(errores).length >= 1) {
      userError.innerText = errores.user ? errores.user : "";
      passwordError.innerText = errores.password ? errores.password : "";
    } else {
      form.submit();
    }
  });
});
