function inform(){
	alert("inform");
}


$(document).ready(function(){

	$("#addcarBTN").click(function(){
		$("#content").css("display", "none");
		$("#carfield").css("display", "inline");
		$("#manufield").css("display", "none");
		$("#carform").load("carform.html");
	});

	$("#addmanufBTN").click(function(){
		//$("#content").empty();
		$("#content").css("display", "none");
		$("#carfield").css("display", "none");
		$("#manufield").css("display", "inline");
		$("#manuform").load("manufform.html");
	});

	$("#showcarsBTN").click(function(){
		$("#content").css("display", "inline");
		$("#carfield").css("display", "none");
		$("#manufield").css("display", "none");
		loadCars();
		//$("#carform").hide();
	});

	$("#showmanufBTN").click(function(){
		$("#content").css("display", "inline");
		$("#carfield").css("display", "none");
		$("#manufield").css("display", "none");
		loadManuf();
	});

	$("#homeBTN").click(function(){
		$("#content").css("display", "inline");
		$("#carfield").css("display", "none");
		$("#manufield").css("display", "none");
		$("#content").load("index.html #content");
	});

	
});



function loadManuf() {
	$.getJSON('manufacturers', function (data) {
		var table = $('<table class="tablemain"></table>');
		table.append('<tr><th>Name</th><th>Country</th><th>Founded</th></tr>');
		$.each(data, function (key, value) {
			var row = $('<tr></tr>');
			var nameCell = $('<td>' + value.name + '</td>');
			// var nameCell = $('<td onclick="openBooks(' + "'" + value.name + "'" + ')">' + value.name + '</td>');
			var countryCell = $('<td>' + value.country + '</td>');
			var foundedCell = $('<td>' + value.founded + '</td>');
			row.append(nameCell);
			row.append(countryCell);
			row.append(foundedCell);
			table.append(row);

		});
		// $("#content")=('');
		$("#content").empty();
		$("#content").append(table);
	})
} 

function loadCars() {
	$.getJSON('cars', function (data) {
		var table = $('<table class="tablemain"></table>');
		table.append('<tr><th>Name</th><th>Manufacturer</th><th>Consumption</th><th>Color</th><th>Available</th><th>Year of production</th><th>Horsepower</th></tr>');
		$.each(data, function (key, value) {
			var row = $('<tr></tr>');
			var nameCell = $('<td>' + value.name + '</td>');
			var nameCell = $('<td onclick="openBooks(' + "'" + value.name + "'" + ')">' + value.name + '</td>');
			var manufacturerCell = $('<td>' + value.manufacturer + '</td>');
			var consumptionCell = $('<td>' + value.consumption + '</td>');
			var colorCell = $('<td>' + value.color + '</td>');
			var availableCell = $('<td>' + value.available + '</td>');
			var yearCell = $('<td>' + value.year + '</td>');
			var horsepowerCell = $('<td>' + value.horsepower + '</td>');
			row.append(nameCell);
			row.append(manufacturerCell);
			row.append(consumptionCell);
			row.append(colorCell);
			row.append(availableCell);
			row.append(yearCell);
			row.append(horsepowerCell);
			table.append(row);

		});
		// $("#content")=('');
		$("#content").empty();
		$("#content").append(table);
	})

	
} 

/*
function openBooks(author) {
	document.cookie = "name=" + author;
	alert(author);
}
*/
