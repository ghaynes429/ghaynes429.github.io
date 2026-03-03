"use strict"

function addToBody(text){
	document.body.innerHTML += "<p>" + text + "</p>";
}

/*
console.log("it works!");
let yourName = prompt("What's your name?");
console.log("Hi " + yourName);
*/

let temp = prompt("What temperature is it outside?");
temp = Number(temp);


if (temp < 32){
	addToBody("It's freezing! Watch out for ice!");
}else if(temp < 80){
	addToBody("Take a walk loser");
}else{
	addToBody("Go to the beach");
}
