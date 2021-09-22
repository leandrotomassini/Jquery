(function(){


	var $cajaRoja = $(".cajaRoja");

	$("#botTamano").on("click",function(){
		$cajaRoja.animate({
			opacity: "1",
			windth: "+=100px",
			height: "+=100px"
		}, function(){
			console.log('Animación completa.');
			
		}).animate({
			windth: "-=100px",
			height: "-=100px"
		})
		.animate({
			opacity: "0.2"
		},1500, function(){
			$(this).remove();
		})
	});



})();