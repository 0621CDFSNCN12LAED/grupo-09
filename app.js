/** @format */

const express = require('express');
const app = express();

const path = require('path');
const router = require('./routes/main');
const methodOverride = require('method-override');
const session = require('express-session');
var cookieParser = require('cookie-parser');
const productRouter = require('./routes/product');
const userRouter = require('./routes/users');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(
	session({
		secret: 'secreto!!',
		cookie: {maxAge: 60},
		saveUninitialized: false,
	})
);
app.set('view engine', 'ejs');

app.listen(3000, () => {
	console.log('Servidor corriendo');
});

app.use('/', router);
app.use('/product', productRouter);
app.use('/users', userRouter);
