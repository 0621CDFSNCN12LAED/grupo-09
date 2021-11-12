module.exports = (req, res, next) => {
	req.user = req.cookies.user;
	next();
};
