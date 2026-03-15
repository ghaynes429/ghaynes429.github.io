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
        print("\nWhere should I go?" + "\n\tFrontDesk" + "\n\tCustomer" + "\n\tPlayplaceLobby" + "\n\tFrontDoor");

    }
}

function locationB() {
    clear();
    print("\nYou are in location B!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationA");
    
    function processInput(input){
        if (input.toLowerCase() === "locationa") {
            locationA();
        } else {
            stayHere();
            waitThenCall(locationB);
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
