var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function(ctx, next) {
  title('Photofer');
  var main = document.getElementById('main-container');

  var pictures = [
  	{
  		user: {
  			username: 'el',
  			avatar: 'office.jpg'
  		},
  		url: 'office.jpg',
  		likes: 10,
  		liked: true
  	}, 
  	{
  		user: {
  			username: 'y el otro',
  			avatar: 'office.jpg'
  		},
  		url: 'office.jpg',
  		likes: 10,
  		liked: true
  	}

  ];
  empty(main).appendChild(template(pictures)); 
})
