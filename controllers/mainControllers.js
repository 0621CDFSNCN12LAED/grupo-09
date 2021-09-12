module.exports = {
  home: (req, res) => {
    res.render("home");
  },
  login: (req, res) => {
    res.render("login");
  },
  registro: (req, res) => {
    res.render("registro");
  },

  cartaProducto: (req, res) => {
    res.render("productCart");
  },
};
