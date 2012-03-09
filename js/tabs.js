$(document).ready(function() {

	$('a').on('click', function(ev) {
		$.ajax({
			cache: true
		});
	});

	$('.boba').on('click', function(ev) {
		$('.tabfill').load('boba.html');
	});

	$('.dengar').on('click', function(ev) {
		$('.tabfill').load('dengar.html');
	});

	$('.ig').on('click', function(ev) {
		$('.tabfill').load('ig.html');
	});

	$('.bossk').on('click', function(ev) {

		$('.tabfill').load('bossk.html');

	});


});