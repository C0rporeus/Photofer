var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res){
	res.render('index', { 
		title: 'Photofer' 
	});
})
app.get('/signup', function(req, res) {
	res.render('index', { 
		title: 'Photofer - Signup' 
	});
})
app.get('/signin', function(req, res) {
	res.render('index', { 
		title: 'Photofer - Signin'
	 });
})

app.listen(3000, function(err) {
	if (err) return console.log('hubo un error'), process.exit(1);

	console.log('Photofer en el puerto 3000 :)');
});