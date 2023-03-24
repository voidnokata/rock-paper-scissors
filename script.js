function getComputerChoice() {
    randomnumber = (Math.random()) * 100;

    if (randomnumber < 33) {
    computerchoice = "rock";
    }
    else if (randomnumber < 66) {
    computerchoice = "paper";
    }
    else {
    computerchoice = "scissors";
    }
    return computerchoice;
}


function singleround(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        alert("Round Draw!");
    }
    
    else if (playerSelection == "rock") {

        if (computerSelection == "paper") {
            alert("You lose the round!");
            computerscore++;
        }
        else {
            alert("You win the round!");
            playerscore++;
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            alert("You lose the round!");
            computerscore++;
        }
        else {
            alert("You win the round!");
            playerscore++;
        }
    }
    
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            alert("You lose the round!");
            computerscore++;
        }
        else {
            alert("You win the round!");
            playerscore++;
        }
    }
}

function fiveround() {
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Your move?")?.toLowerCase();
        computerSelection = getComputerChoice();
        alert("Computer moved:" + computerSelection);
        singleround(playerSelection, computerSelection);
      }
    if (playerscore > computerscore) {
        alert("You won the game!")
    }
    else if (computerscore > playerscore) {
        alert("You lose the game!")
    }
}

let computerscore = 0;
let playerscore = 0;
fiveround();