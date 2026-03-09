let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function locationA() {
    clear();
    print("\nI’ve finally arrived at McDonald’s, I can’t wait to try out the new Big Arch. I heard the CEO loves it!");
    print("\nWhere should I go? There's some intriguing creepy guy, but I'm also REALLY hungry" +
        "\n\tCreepyGuy" +
	"\n\tLobby");
    
    function processInput(input){
        if (input.toLowerCase() === "creepyguy") {
           creepyguy ();
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
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
