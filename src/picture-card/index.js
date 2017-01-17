var yo = require('yo-yo');


module.exports = function(pic) {
              return yo`<div class="card">
                      <div class="card-image">
                        <img class="activator" src="${pic.url}">
                      </div>
                      <div class="card-content">
                        <a href="/user/${pic.user.username}" class="card-title">
                          <img src="${pic.user.avatar}" class="avatar" />
                        <span class="username">${pic.user.username}</span>
                        </a>
                        <small class="rigth time">Hace 1 dia</small>
                        <p>
                          <a href=""> </a>
                        </p>
                      </div>
                    </div>`;
}