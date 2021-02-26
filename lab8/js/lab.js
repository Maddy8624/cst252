//Lab 8: Anon Functions & Callbacks
//Author: Maddy Willey <mwilley@csumb.edu>
//Created: Feb 23, 2021
//License: Public Domain
//Javavscript code borrowed from We Modes <wmodes@csumb.edu>
//I'm going to be honest I have no idea what I am doing

var outputEl = document.getElementById("output");

function isEven(x){
    return(x % 2 == 0);
}

//test function
console.log("Is 1 even? ", isEven(1));
console.log("Is 2 even? ", isEven(2));


array = [7, 26, 10022, 13, 58, 29094, 88, 8888765];
console.log("My array", array);
//add array to document
var newEl = document.createElement("p");
newEl.innerHTML = "My array:" + JSON.stringify(array);



var result = array.map(isEven);
//[false, true, true, false, true, true, true, false]
console.log("Eveness of array:", result);
// add array to document
var newEl = document.createElement("p");
newEl.innerHTML = "Eveness of array:" + JSON.stringify(result);



var result = array.map(function(x){
    return x ** 2;
  })
  //[49, 676, 100440484, 169, 3364, 846460836, 7744, 79010143225225]
  console.log("Array squared:", result);
  // add array to document
var newEl = document.createElement("p");
newEl.innerHTML = "Array squared:" + JSON.stringify(result);
