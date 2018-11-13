$(function () {
	$('form').on('submit', function (e) {
		e.preventDefault();

		$.ajax({
			type:"post",
			url: 'addCar',
			data: $('form').serialize(),
			success: function (data){
				loadCars();
			},
			error: function () {
				alert("oops, probably this name already exists");
			}
		})
	})
});