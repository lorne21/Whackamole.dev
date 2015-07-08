"use strict";
(function (){



	var holeArray = [];
	var userClick = 0;

	function randomHole(){
		var moleHole = $('.hole')
		var rand = Math.floor(Math.random()*17);
		var toAnimate = moleHole[rand]
		var id = toAnimate.getAttribute('id')
		holeArray.push(id);
		console.log(holeArray);
	}
	    
	function animateHole(id){
		$("#" + id).fadeTo('slow', 0.3, function(){
		    $(this).css('background-image', 'url(/duck6.jpg)');
		}).fadeTo('slow', 1);
	};

	function moleTurn(){
		var i=0;
		var animateInterval = setInterval(function(){
			if(i >= holeArray.length){
				clearInterval(animateInterval)
			} animateHole(holeArray[i]);
			i++;
		}, 1000)
		
	};

	$('#startBtn').click(function(e) {
		randomHole();
		moleTurn();
		

	});







})();