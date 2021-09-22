(function(){


	$.ajax({
		type: 'GET',
		url : 'http://www.json-generator.com/api/json/get/cfaeGHNvvS?indent=2',
		dataType: 'json'
	})
	.done(function( data ){
		
       var personas = data;
	   for(var i=0; i< personas.length; i++){
		
		var persona = personas[i];
		
		var tags = "";
		for(var j=0; j<persona.tags.length; j++){
			tags += ", " + persona.tags[j];
		}
		
		var html = "";
		      html += '<tr>';
			  html += '<th>'+ persona.name +'</th>';
			  html += '<th>'+ persona.age +'</th>';
			  html += '<th>'+ tags +'</th>';
			  html += '</tr>';
	    $(".table").append(html);
	}


	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});








})();