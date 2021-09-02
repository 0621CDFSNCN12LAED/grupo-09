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
  detalleProducto: (req, res) => {
    res.render("productDetail");
  },
  cartaProducto: (req, res) => {
    res.render("productCart");
  },
};
