module.exports = {
	//renderisar la pagina del home
	home: (req, res) => {
		res.render('home');
	},
	//renderisar la carta de producto
	cartaProducto: (req, res) => {
		res.render('productCart');
	},
};
