/** @format */

const express = require('express');
const app = express();

const path = require('path');
const router = require('./routes/main');
const methodOverride = require('method-override');
const session = require('express-session');
const productRouter = require('./routes/product');
const userRouter = require('./routes/users');

const db = require('./database/models');
const Users = db.Usuario;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
	session({
		secret: 'secreto!!',
		resave: false,
		saveUninitialized: false,
	})
);
app.set('view engine', 'ejs');

app.listen(3000, () => {
	console.log('Servidor corriendo');
});
app.use(async (req, res, next) => {
	if (req.session.userId) {
		res.locals.user = await Users.findByPk(req.session.userId);
	}
	next();
});
app.use('/', router);
app.use('/product', productRouter);
app.use('/users', userRouter);

app.get('/slider', (req, res) => {
	res.render('slider');
});
