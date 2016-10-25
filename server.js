var express = require('express');

var app = express();

app.get('/', function (req, res){
	res.send('Hola!');
})

app.listen(3000, function(err) {
	if (err) return console.log('hubo un error'), process.exit(1);

	console.log('Photofer en el puerto 3000 :)');
})