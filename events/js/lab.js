//Events Experiments
//Author: Maddy Willey <mwilley@csumb.edu>
//Created: March 3, 2021
//License: Public Domain
//Javavscript code borrowed from We Modes <wmodes@csumb.edu>


var titleEl =document.getElementById("changeme");
console.log("Tilte element", titleEl);

var buttonEl = document.getElementById("my-button");
console.log("Heres da button:", buttonEl);

var inputEl = document.getElementById("my-input");
console.log("Heres da input field:", inputEl);

buttonEl.addEventListener("click", function(){
  var name=inputEl.value;
  //var name = prompt("What's your name?");
  titleEl.innerText = "Hello, " + name;
})
