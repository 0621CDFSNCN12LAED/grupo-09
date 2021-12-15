const { body } = require("express-validator");

const validacion = [
  body("first_name")
    .trim()
    .notEmpty()
    .withMessage("Debes completar el nombre")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Debes ingresar tu nombre completo"),
  body("last_name")
    .trim()
    .notEmpty()
    .withMessage("Debes completar el apellido")
    .bail()
    .isLength({ min: 2 })
    .withMessage("Debes ingresar tu apellido completo"),
  body("username")
    .trim()
    .notEmpty()
    .withMessage("Debes ingresar un nombre de usuario")
    .isLength({ min: 4 })
    .withMessage("Tu nombre de usuario debe tener por lo menos 4 caracteres"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Debes completar el email")
    .bail()
    .isEmail()
    .withMessage("Debe ingresar un email"),
  body("password")
    .trim()
    .notEmpty()
    .withMessage("Debes ingresar una contraseña")
    .isLength({ min: 5 })
    .withMessage("La contraseña debe tener por lo menos 5 caracteres"),
  body("rePassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password Confirmation does not match password");
    }
    return true;
  }),
  body("userProfile")
    //.notEmpty()
    .isIn([1, 2, 3])
    .withMessage("Debes aclarar tipo de usuario"),
];

module.exports = validacion;
