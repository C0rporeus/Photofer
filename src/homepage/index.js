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
  		liked: true,
      createdAt: new Date()
  	}, 
  	{
  		user: {
  			username: 'y el otro',
  			avatar: 'office.jpg'
  		},
  		url: 'office.jpg',
  		likes: 10,
  		liked: false,
      createdAt: new Date().setDate(new Date().getDate() - 10)
  	}

  ];
  empty(main).appendChild(template(pictures)); 
})
