//Lab 6: Arrays & Objects
//Author: Maddy Willey <mwilley@csumb.edu>
//Created: Feb 16, 2021
//License: Public Domain
//Javavscript code borrowed from We Modes <wmodes@csumb.edu>


console.log("Check this Out")


//Define Variables
myTransport = ["Honda Fit", " Mountain Bike"];


myMainRide = {
    make: "Honda",
    model: "Fit",
    year: 2007,
    color: "light blue",
    extras: "pink seat covers"
    }


//Declare a boolean Variables
  var ownIt = true;


//calculate
    var age = new Date().getFullYear();

//output
document.writeln("My Hot Ride: " , myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
