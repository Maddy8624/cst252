//Lab 11: Conditionals
//Author: Maddy Willey <mwilley@csumb.edu>
//Created: March 9, 2021
//License: Public Domain
//Javavscript code borrowed from Wes Modes <wmodes@csumb.edu>

housesArray = [
   {
       title: "Gryffindor",
       text: "Values 'bravery, daring, nerve, and chivalry.' Those sorted in this house are not always what you may think of as 'brave' (they can be afraid), but they almost always will choose to do the right thing, despite consequences. They are the popular house and all the Potterheads want to be Gryffindor, even if they don't necessarily belong."
   },
   {
       title: "Hufflepuff",
       text: "Values 'hard work, dedication, patience, loyalty, and fair play.' They are generally kind-hearted, diligent, and reliable. But they are also the unpopular house and many Potterheads treat being sorted into Hufflepuff like being worse than getting kissed by a dementor."
   },
   {
       title: "Ravenclaw",
       text: "Values 'intelligence, knowledge, and wit.' The nerds of Hogwarts, but in the best way. They don't need a wand to disarm you. Their words will cut you to the bone. They are highly intelligent, resourceful, creative, and clever. They're pretty cool and most Potterheads don't mind being sorted into Ravenclaw"
   },
   {
       title: "Slytherin",
       text: "Values 'ambition, cunning, and resourcefulness.' They are sly and clever in every way. They don't need to be brash to get what they want. They are considered the bullies of Hogwarts and the general all around evil-doers. But there are tons of great Slytherin alumni. We just hear a whole lot about the bad ones"
   }
]
//Code & descriptions borrowed from Wes Modes
credit = '<div class="credits">Code borrowed from Wes Modes. Hogwarts house descriptions courtesy of <a href="https://iamjustdandi.wordpress.com/2015/11/06/those-in-between-hogwarts-houses/">iamjustdandi</a></div>';


// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// depending on length mod 4
function sortingHatLength(str) {
 len = str.length;
 mod = len % 4;
 if (mod == 0) {
   return "Gryffindor"
 }
 else if (mod == 1) {
   return "Ravenclaw"
 }
 else if (mod == 2) {
   return "Slytherin"
 }
 else if (mod == 3) {
   return "Hufflepuff"
 }
}

// take a string and return a hashed checksum of the string
// from https://stackoverflow.com/questions/26057572/
function checksum(s) {
 var hash = 0, strlen = s.length, i, c;
 if ( strlen === 0 ) {
   return hash;
 }
 for ( i = 0; i < strlen; i++ ) {
   c = s.charCodeAt( i );
   hash = ((hash << 5) - hash) + c;
   hash = hash & hash; // Convert to 32bit integer
 }
 return hash;
};

// Given a name, hash the string, and
// return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
function sortingHatHash(str) {
 checksumValue = checksum(str);
 mod = Math.abs(checksumValue) % housesArray.length;
 return housesArray[mod];      // returns an object from the array
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
 // get value from input field
 var name = document.getElementById("input").value;
 // use name to get house from SortingHat function
 var houseObj = sortingHatHash(name);
 // output to output div (adding some text and HTML around the results)
 newText = "<h3>The Sorting Hat has sorted you into " + houseObj.title + "</h3>" +
         "<p>" + houseObj.text + "</p>" + credit;
 document.getElementById("output").innerHTML = newText;
})
