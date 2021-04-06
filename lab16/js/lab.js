//Lab 16: Libraries & Intro to jQuery
//Author: Maddy Willey <mwilley@csumb.edu>
//Created: April 8, 2021
//License: Public Domain
//Javavscript code borrowed from Wes Modes <wmodes@csumb.edu>
//I would also like to note that the majority of this lab was based on Wes's already existing Javascript


window.onload = function () {

	// Create a <button> element (in jQuery, NOT In your HTML).
	var myButton = $("<button>");

	// Give it a text label
	myButton.html("Please Click me");

	// Add it to your output div
	$("#output").append(myButton);

	// Add a click event to it that will bring up an alert
  // Restyle the button with jQuery so it is a pleasant green.
	myButton.click(function(){
		myButton.css("background-color", "#a8d973");
		myButton.addClass("green-button");
		alert("Please don't touch me.");
		$("#pop-up").toggleClass("shown");
	})

	$("#pop-submit").click(function(){
		var name = $("#stuff").val();
		$("#your-name-here").html(name);
		$("#pop-up").removeClass("shown");
	})

}
