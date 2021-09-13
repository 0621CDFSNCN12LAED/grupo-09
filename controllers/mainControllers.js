module.exports = {
  //renderisar la pagina del home
  home: (req, res) => {
    res.render("home");
  },
  //renderisar la pagina del login
  login: (req, res) => {
    res.render("login");
  },
  //renderisar la pagina del registro
  registro: (req, res) => {
    res.render("registro");
  },
  //renderisar la carta de producto
  cartaProducto: (req, res) => {
    res.render("productCart");
  },
};
