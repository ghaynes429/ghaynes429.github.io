let gameActive = true;
let talktoCreepy = false;
let haveNote = false;
let haveMcChicken = false;
let day = 0;
let minutes = 0;


  

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function locationA() {
    clear();
    print("\nI’ve finally arrived at McDonald’s, I can’t wait to try out the new Big Arch. I heard the CEO loves it!");
    print("\nWhere should I go? There's some intriguing creepy guy, but I'm also REALLY hungry" + "\n\tCreepyGuy" + "\n\tLobby");

       function processInput(input){
        if (input.toLowerCase() === "creepyguy") {
		creepyguy();
	}	else if (input.toLowerCase() === "lobby"){
		lobby();
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);

}
function creepyguy(){
	talktoCreepy = true;
    clear();
    print("\nI’m gonna talk to this creepy guy… hopefully I don’t get robbed or something…");print("\nCreepy Guy: H-hey… do you by chance have money to spare…? I’d REALLY like a McChicken..." + "\n\tLobby");
}
function lobby(){
    clear();

    if (talktoCreepy == false){
        print("\nDrats! It’s locked, I guess I might as well talk to the creepy guy…" + "\n\tCreepyGuy");
    }

    else{

        print("\nOh wow, I could've swore it was locked before...");
	print("\nI look back and see the same guy walking to the door and use a key to turn the doorknob... I hear a weird *click* noise... I try to open the door and then...");
	print("\nWhat the hell??? That creepy bastard locked me in!");
        print("\nWhere should I go?" + "\n\tFrontDesk" + "\n\tCustomer" + "\n\tPlayplaceLobby" + "\n\tFrontDoor");

    }
}
  function processInput(input){


        if (input.toLowerCase() === "frontdesk"){
            frontDesk();
        }

        else if (input.toLowerCase() === "customer"){
            talkCustomer();
        }

        else if (input.toLowerCase() === "playplacelobby"){
            playplaceLobby();
        }

        else if (input.toLowerCase() === "frontdoor"){
            frontDoor();
        }

        else{
            stayHere();
            waitThenCall(lobby);
        }
    }

    waitForInput(processInput);


function frontDesk(){
    clear();

    if(haveNote == false){

        print("\nYou walk up to the front desk.");
        print("\n[INSERT TEXT HERE LATER]");
        print("\n\tLobby");

    }

    else if(haveNote == true && haveMcChicken == false){

        print("\nWorker: Oh! You found the note from the playplace?");
        print("\nWorker: Alright... I guess I'll sell you a McChicken.");

        haveMcChicken = true;

        print("\nYou obtained a McChicken!");
        print("\n\tLobby");

    }

    else{

        print("\nWorker: Enjoy your McChicken.");
        print("\n\tLobby");

    }

    function processInput(input){

        if(input.toLowerCase() === "lobby"){
            lobby();
        }

        else{
            stayHere();
            waitThenCall(frontDesk);
        }
    }

    waitForInput(processInput);
}


//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            locationA();
    }
    waitForInput(processInput);
}
