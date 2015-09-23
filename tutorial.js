

/*
// ############
//    STEP 4
// ############
*/
var counter = 0;
// If the element with id 'link4' is clicked
$('#link4').on('click',function(e){


	var message = $('#messageInput1').val();

	var query1 = 'PREFIX dp: <http://www.LifeStyle.org/>\n\nSELECT ?FoodType {\n?client dp:hasLifeStyle ?FoodType. }';
	var endpoint = 'http://localhost:5820/LS/query';
	var format = 'JSON';
	var onOf = 'true';
	$.get('/sparql',data={'endpoint': endpoint, 'query': query1, 'format': format,'reasoning':onOf}, function(json){
		console.log(json);
		
		
			var vars = json.head.vars;
		
			var ul = $('<ul></ul>');
			ul.addClass('list-group');
		
			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];

    					var res = v_value.split("/");//split the string and get just the name
					
					if(message == res[res.length-1]){
						var query = 'PREFIX dp: <http://www.LifeStyle.org/>\n\nSELECT ?FoodType {\n?client dp:hasLifeStyle 							dp:'+message+' .\n ?client dp:isConsuming ?FoodType. }';
						$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format,'reasoning':onOf}, function(json){
							console.log(json);
		
							try {
								var vars = json.head.vars;
		
								var ul = $('<ul></ul>');
								ul.addClass('list-group');
		
								$.each(json.results.bindings, function(index,value){
									var li = $('<li></li>');
									li.addClass('list-group-item');
			
									$.each(vars, function(index, v){
										var v_type = value[v]['type'];
										var v_value = value[v]['value'];

					    					var res = v_value.split("/");//split the string and get just the name

										li.append('<strong>'+v+'</strong><br/>');
				
										// If the value is a URI, create a hyperlink
										if (v_type == 'uri') {
											var a = $('<a></a>');
											a.attr('href',v_value);
											a.text(res[res.length-1]);
											li.append(a);
										// Else we're just showing the value.
										} else {
											li.append(v_value);
										}
										li.append('<br/>');
					
									});
									ul.append(li);
			
								});
			
								$('#linktarget4').html(ul);
							} catch(err) {
								$('#linktarget4').html('Something went wrong!');
							}
		

		
						});
					}else{
						$('#linktarget4').html(message +' was not found in our database.');
					}
					
				});
			
			});
		
	});

	
		
	



});

/*
// ############
//    STEP 15
// ############
*/

$('#link15').on('click', function(e){
	
	var query = $('#query15').val();
	var endpoint = 'http://localhost:5820/LS/query';
	var format = 'JSON';
	var onOf = 'true';
	
	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format,'reasoning':onOf}, function(json){
		console.log(json);
		
		try {
			var vars = json.head.vars;
		
			var ul = $('<ul></ul>');
			ul.addClass('list-group');
		
			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
					
    					var res = v_value.split("/");//split the string and get just the name

					li.append('<strong>'+v+'</strong><br/>');
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(res[res.length-1]);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
					
				});
				ul.append(li);
			
			});
			
			$('#linktarget14').html(ul);
		} catch(err) {
			$('#linktarget14').html('Something went wrong!');
		}
		

		
	});
	
})

$('#link16').on('click', function(e){
	
	var query1 = $('#query16').val();
	var query2 = $('#query16_1').val();
	var endpoint = 'http://localhost:5820/LS/query';
	var format = 'JSON';
	var onOf = 'true';
	var com = $('#combo').val();
	if(com == 'of'){
		onOf = 'false';	
	}
	

	$.get('/sparql',data={'endpoint': endpoint, 'query': query1, 'format': format, 'reasoning':onOf}, function(json){
		console.log(json);
		
		try {
			var vars = json.head.vars;
		
			var ul = $('<ul></ul>');
			ul.addClass('list-group');
		
			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				

    					var res = v_value.split("/");//split the string and get just the name

					li.append('<strong>'+v+'</strong><br/>');
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(res[res.length-1]);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
					
				});
				ul.append(li);
			
			});
			
			$('#linktarget15').html(ul);
		} catch(err) {
			$('#linktarget15').html('Something went wrong!');
		}
		

		
	});

	$.get('/sparql',data={'endpoint': endpoint, 'query': query2, 'format': format, 'reasoning':onOf}, function(json){
		console.log(json);
		
		try {
			var vars = json.head.vars;
		
			var ul = $('<ul></ul>');
			ul.addClass('list-group');
		
			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];

					var res = v_value.split("/");//split the string and get just the name

					li.append('<strong>'+v+'</strong><br/>');
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(res[res.length-1]);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
					
				});
				ul.append(li);
			
			});
			
			$('#style').html(ul);
		} catch(err) {
			$('#style').html('Something went wrong!');
		}
		

		
	});
	
})

$('#link17').on('click', function(e){
	
	var query1 = $('#query17').val();
	var query2 = $('#query17_1').val();
	var endpoint = 'http://localhost:5820/LS/query';
	var format = 'JSON';
	var onOf = 'true';
	var com = $('#combo').val();
	if(com == 'of'){
		onOf = 'false';	
	}

	$.get('/sparql',data={'endpoint': endpoint, 'query': query1, 'format': format, 'reasoning':onOf}, function(json){
		console.log(json);
		
		try {
			var vars = json.head.vars;
		
			var ul = $('<ul></ul>');
			ul.addClass('list-group');
		
			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];

					var res = v_value.split("/");//split the string and get just the name
				
					li.append('<strong>'+v+'</strong><br/>');
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(res[res.length-1]);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
					
				});
				ul.append(li);
			
			});
			
			$('#linktarget15').html(ul);
		} catch(err) {
			$('#linktarget15').html('Something went wrong!');
		}
		

		
	});

	$.get('/sparql',data={'endpoint': endpoint, 'query': query2, 'format': format, 'reasoning':onOf}, function(json){
		console.log(json);
		
		try {
			var vars = json.head.vars;
		
			var ul = $('<ul></ul>');
			ul.addClass('list-group');
		
			$.each(json.results.bindings, function(index,value){
				var li = $('<li></li>');
				li.addClass('list-group-item');
			
				$.each(vars, function(index, v){
					var v_type = value[v]['type'];
					var v_value = value[v]['value'];
				
					var res = v_value.split("/");//split the string and get just the name
				
					li.append('<strong>'+v+'</strong><br/>');
				
					// If the value is a URI, create a hyperlink
					if (v_type == 'uri') {
						var a = $('<a></a>');
						a.attr('href',v_value);
						a.text(res[res.length-1]);
						li.append(a);
					// Else we're just showing the value.
					} else {
						li.append(v_value);
					}
					li.append('<br/>');
					
				});
				ul.append(li);
			
			});
			
			$('#style').html(ul);
		} catch(err) {
			$('#style').html('Something went wrong!');
		}
		

		
	});
	
})

