$(function () {
	$("#manuform").on('submit', function (e) {
		e.preventDefault();

		$.ajax({
			type:"post",
			url: 'addManufacturers',
			data: $("#manuform").serialize(),
			success: function (data){
				alert("Manufacturer added successfully");
			//	loadManuf();
			},
			error: function () {
				alert("oopsyyy :/ cannot add manufacturer");
			}
		})
	})
});

function testing(){
	alert("testing function from manufform.js");
}

// $( "#manuform" ).submit(function( event ) {
// 	event.preventDefault();
//   alert( "Handler for .submit() called." );
  
// });
