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
				alert("oopsyyy :/ name already exists");
			}
		})
	})
});
