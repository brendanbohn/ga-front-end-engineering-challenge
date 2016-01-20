$(document).ready(function() {
	console.log("Sanity check: JS working");

	var $loginNavButton = $('#login-nav-button');
	var $logoutButton = $('#logout-button');
	var $loginDiv = $('#login-div');

	$loginDiv.hide();
	$logoutButton.hide();

	$loginNavButton.on('click', function() {
		console.log('Clicked the Login button');
		$loginNavButton.css("background-color","#d3f8f2");
		$loginDiv.show();
	});

	$logoutButton.on('click', function() {
		console.log('Clicked the Logout button');
		$loginNavButton.show();
		$logoutButton.hide();
	});

	$('#login-form').on('submit', function(e) {
		e.preventDefault();
		console.log('Clicked Sign in button on form');
		$loginNavButton.css("background-color","inherit");
		$loginNavButton.hide();
		$logoutButton.show();
		$loginDiv.hide();
	});

});