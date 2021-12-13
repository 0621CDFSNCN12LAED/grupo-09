const userAuth = (req, res, next) => {
	if (req.session.isAuth) {
		next();
	} else {
		res.render('login');
		console.log(req.session);
	}
};

module.exports = userAuth;
