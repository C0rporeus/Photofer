var yo = require('yo-yo');
var layout = require('../layout');
<<<<<<< HEAD
var picture = require('../picture-card');

module.exports = function (pictures) { 
	var el = yo`<div class="container timeline">
                    <div class="row">
                      <div class="col s12 m10 offset-m1 l6 offset-l3">
                      
                      ${pictures.map (function (pic){
                      	return picture(pic);
                      })}
                      </div>
                    </div>
                  </div>`;
return layout(el);
}
=======

var template = yo`<div class="container timeline">
                    <div class="row">
                      <div class="col s12 m10 offset-m1 l6 offset-l3">
                      content
                      </div>
                    </div>
                  </div>`;

    module.exports = layout(template);
>>>>>>> 80dceb32f6e86b83947d947fb6cfc5e9844d828c
