//Lab 15: Object-Oriented Design
//Author: Maddy Willey <mwilley@csumb.edu>
//Created: March 28, 2021
//License: Public Domain
//Javavscript code borrowed from Wes Modes <wmodes@csumb.edu>
//I would also like to note that the majority of this lab was based on Wes's already existing HTML and Javascript

//This is the NEW class method
class Vehicle {
  constructor(make, model, year, color, extras, name) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.extras = extras;
    this.name = name;
  }
  info (){
      return this.color + " " + this.year + " " + this.make + " " +  this.model + " with " +  this.extras + " called " + this.name;
    }
  }

var vehicles = [];

vehicles.push(new Vehicle("Toyota", "Prius", 2015, "Red", "License plate is the name of the car", "ladybug"));
vehicles.push(new Vehicle("Ford", "Mustang", 2005, "Blue", "Yellow Racing Stripe", "Speedy"));

outputEl = document.getElementById("output");
for (var i = 0; i<vehicles.length; i++) {
  var newEl = document.createElement("li");
  newEl.innerText = vehicles[i].info();
  outputEl.appendChild(newEl);
}



//Design OOP for Hangman
  //Understand the Problem
  //Pseudocode the High Level Approach
  //Assign Actions to Objects
  //Make Javascript-ish Pseudocode

    //Create a Hnagman game that is directly controlled by the palyers
      //class Hangman
        //Start Game
          //Create Hangman Game Board
          //Set up player
            //Computer generates randomly selected word/string of words

        //Play Game
          //Allow player to guess letter
            //Create loop for part of hangman to be drawn if wrong guess of letter
            //Display letter if correct guess

        //Finish Game
          //Continue loop and game until hangman complete or word/string of words correctly guessed

        //Display Victory
          //If hangman completely drawn then computer wins and player loses
          //If word/string of words correctly guessed then player wins and computer loses
