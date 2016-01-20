$(document).ready(function() {
	console.log("Sanity check: JS working");

	var $loginNavButton = $('#login-nav-button');
	var $logoutButton = $('#logout-button');
	var $loginDiv = $('#login-div');

	$loginDiv.hide();
	$logoutButton.hide();
	$('#invalid-email').hide();

	$loginNavButton.on('click', function() {
		console.log('Clicked the Login button');
		$loginNavButton.css("background-color","#d3f8f2");
		$loginDiv.show();
	});

	$logoutButton.on('click', function() {
		console.log('Clicked the Logout button');
		$loginNavButton.show();
		$logoutButton.hide();
		$('#welcome').remove();
	});

	$('#login-form').on('submit', function(e) {
		e.preventDefault();
		$('#invalid-email').hide();
		var user = $('#email-input').val();
		console.log(user);
		console.log('Clicked Sign in button on form');
		$loginNavButton.css("background-color","inherit");
		$loginNavButton.hide();
		$logoutButton.show();
		$loginDiv.hide();
		$('body').append("<div id='welcome'><h1>Welcome, <h1><h2>" + user + "<h2></div>");
	});

	$(document).mouseup(function (e) {
	    var container = $loginDiv;
	    if (!container.is(e.target) // if the target of the click isn't the container...
	        && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	        container.hide();
	        $loginNavButton.css("background-color","inherit");
	    }
	});

});