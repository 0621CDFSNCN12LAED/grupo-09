const express = require('express');
const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname, './public')
));

app.listen(3000, () => {
    console.log('Servidor corriendo')
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html')
    )
});

app.route('/login')
 	.get(function (req, res) {
		res.sendFile(path.join(__dirname, "/views/login.html"));
	});

    app.route('/register')
 	.get(function (req, res) {
		res.sendFile(path.join(__dirname, "/views/Registro.html"));
	});

