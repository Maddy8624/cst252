//Lab 17: Advanced jQuery
//Author: Maddy Willey <mwilley@csumb.edu>
//Created: April 8, 2021
//License: Public Domain
//Javavscript code borrowed from Wes Modes <wmodes@csumb.edu>
//I would also like to note that the majority of this lab was based on Wes's already existing Javascript


// add event listener to button
$("#Challenge-Button").click(function(){
	$("#Results-Button").toggleClass("buster");
})

// add event listener to button
$("#Subject-Button").click(function(){
  $("#Challenge-Button").toggleClass("york");
})


$("#Results-Button").click(function(){
  $("#Subject-Button").toggleClass("peggy");
})

$("#submit").click(function(){
	// pure JS
	//var fullname = document.getElementById("full-name").value;

  // jQuery
  var fullname = $("#fullname").val();
  $("#replace").html(fullname + "'s");
  $("#thing1-button").html(fullname + " 1");
  $("#thing2-button").html(fullname + " 2");

})
