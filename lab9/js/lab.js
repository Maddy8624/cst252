//Lab 9: JavaScript for Web
//Author: Maddy Willey <mwilley@csumb.edu>
//Created: March 2, 2021
//License: Public Domain
//Javavscript code borrowed from We Modes <wmodes@csumb.edu>


 window.onload = function () {

//Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("output");
    console.log("outputEl: ", outputEl);

//Create a new element with document.createElement("p") and assign it to a variable new1El
 var new1El = document.createElement("p");

//Change the html attribute of new1El to say something new.
new1El.innerHTML = "Something new.";
   new1El.id = "new-one";

//Create another new element and assign it to a variable new2El
var new2El = document.createElement("p");
   new1El.id = "new-two";

//Change the html attribute of new2El to say something else.
new2El.innerHTML = "Something else.";

//Append both new elements one at a time using appendChild()
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
outputEl.className = "changed";

//Change the css attributes of at least two elements of your page
new2El.style.color = "white";
output.style.border = "dashed 2px #002B49";

}
