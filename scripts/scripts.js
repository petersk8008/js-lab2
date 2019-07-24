
//Arrow function
//randomDamage with no parameters and returns random whole number between 1 and 10.

const randomDamage = () => {
    return Math.ceil(Math.random() * 10)
};
//chooseOption that has two parameters named opt1
// and opt2. chooseOption does two things:
// ○ Declares and initializes a variable named randNum to either a 0 or 1, randomly.
// ○ Returns opt1 if randNum is equal to 0 otherwise return opt2 . (Use a ternary
// operator)
const chooseOption = (opt1, opt2) => {
    let randNum = Math.floor(Math.random() * 2);
    return (randNum === 0) ? opt1 : opt2;
};
// logHealth that has two parameters named player
// and health which has a console.log method to state the following message: “player
// health: health”.
const logHealth = (player, health) => {
    console.log(`${player} health: ${health}`);
};
// logDeath that has two parameters named winner
// and loser which has a console.log method to state the following message: “winner
// defeated loser”
const logDeath = (winner, loser) => {
    console.log(`${winner} defeated ${loser}`);
};
//isDead that has one parameter named health
// which returns a boolean value of true or false based on the following condition: health
// <= 0;
const isDead = (health) => {
    return health <= 0;
};
// Function expression
// attackPlayer that has one parameter named
// health which returns a number equal to health minus the product of the
// randomDamage function.
//
const attackPlayer = function(health){
    return health - randomDamage();
};

// function declaration
//fight that has no parameters.
function fight() {
// The function does
// the following:
// ○ Declares and initializes the following variables:
// ■ player1: string (e.g “Mitch”)
// ■ player2: string (e.g “Adam”)
// ■ player1Health: number (100)
// ■ player2Health: number (100)
    let player1 = "Kody Peters";
    let player2 = "Grant Chirpus";
    let player1Health = 100;
    let player2Health = 100;
//Write a while loop that
// ■ Loops while true
    while (true) {
// ■ Declares and initializes a variable named attacker equal to the
// chooseOption function with player1 and player2 as arguments.
        let attacker = chooseOption(player1, player2);
// ■ Has an if statement that is triggered when attacker is equal to player1.
        if (attacker === player1){
// ● Set player2Health equal to the product of attackPlayer with
// player2Health as its argument.
            player2Health = attackPlayer(player2Health);
// ● Calls the logHealth function with player2 and player2Health
// as its arguments.
            logHealth(player2, player2Health);
            if (isDead(player2Health) === true) {
                logDeath(player1, player2);
                break;
            }
// ● Has an if statement that runs if the product of isDead, with
// player2Health as an argument, equates to true. If true:
// ○ Call the logDeath function with player1 and player2 as
// arguments.
// ○ Break
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if (isDead(player1Health) === true){
                logDeath(player2, player1);
                break;
            }
        }
// ■ Has an else statement that:
// ● Sets player1Health equal to the attackPlayer function with
// player1Health as its argument.
// ● Call the logHealth function with player1 and player1Health as
// its arguments.
// ● Has an if statement that runs if the product of isDead with
// player1Health as an argument equates to true. If true:
// ■ Call the logDeath function with player2 and
// player1 as arguments.
// ■ Break
    }
}
fight();