window.$ = require("jquery");
$(function() {
  var socket = require('socket.io-client')('http://54.65.112.209:3000');
  socket.on('new message', function(data) {
	var comment = document.createElement("marquee");
	comment.setAttribute('loop', '1');
	comment.setAttribute('style', 'position: absolute; left: -10px; top: ' + (Math.random() * screen.height) + 'px');
	comment.setAttribute('scrollamount', 12); // default 6
	comment.setAttribute('scrolldelay' , 20); // degault 85
	comment.innerHTML = data['message'];

	var lap =  document.createElement("p");
	lap.setAttribute('class', 'comment');
	lap.appendChild(comment);
	
	$('div').append(lap);
  });
});
