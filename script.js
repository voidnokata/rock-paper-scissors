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

function compute (playerSelection) {

    let computerSelection = getComputerChoice();
    
    if (playerSelection == computerSelection) {
        const announcement = document.querySelector("#announce");
        announcement.textContent = "THIS ROUND IS DRAW!"
    }
    
    else if (playerSelection == "rock") {

        if (computerSelection == "paper") {
            const announcement = document.querySelector("#announce");
            announcement.textContent = "YOU LOSE THIS ROUND!"
            computerscorecounter++;
            computercounter.textContent = computerscorecounter;
        }
        else {
            const announcement = document.querySelector("#announce");
            announcement.textContent = "YOU WIN THIS ROUND!"
            playerscorecounter++;
            playercounter.textContent = playerscorecounter;
        }
    }

    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            const announcement = document.querySelector("#announce");
            announcement.textContent = "YOU LOSE THIS ROUND!"
            computerscorecounter++;
            computercounter.textContent = computerscorecounter;
        }
        else {
            const announcement = document.querySelector("#announce");
            announcement.textContent = "YOU WIN THIS ROUND!"
            playerscorecounter++;
            playercounter.textContent = playerscorecounter;
        }
    }
    
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            const announcement = document.querySelector("#announce");
            announcement.textContent = "YOU LOSE THIS ROUND!"
            computerscorecounter++;
            computercounter.textContent = computerscorecounter;

        }
        else {
            const announcement = document.querySelector("#announce");
            announcement.textContent = "YOU WIN THIS ROUND!"
            playerscorecounter++;
            playercounter.textContent = playerscorecounter;
        }
    }

    if (playerscorecounter == 5) {
        const announcement = document.querySelector("#announce");
        announcement.textContent = "YOU WON! GAME IS OVER!"
        playerscorecounter = 0;
        computerscorecounter = 0;
        playercounter.textContent = playerscorecounter;
        computercounter.textContent = computerscorecounter;
    } 
    else if (computerscorecounter == 5) {
        const announcement = document.querySelector("#announce");
        announcement.textContent = "YOU WON! GAME IS OVER!"
        playerscorecounter = 0;
        computerscorecounter = 0;
        playercounter.textContent = playerscorecounter;
        computercounter.textContent = computerscorecounter;
    }

}


let playerscorecounter = 0;
let computerscorecounter = 0;

const playercounter = document.querySelector('#pscore');
const computercounter = document.querySelector('#cscore');

const rockbutton = document.querySelector("#rockbutton");
const paperbutton = document.querySelector("#paperbutton");
const scissorsbutton = document.querySelector("#scissorsbutton");

rockbutton.addEventListener("click", function() {
    compute("rock");
});
paperbutton.addEventListener("click", function() {
    compute("paper");
});
scissorsbutton.addEventListener("click", function() {
    compute("scissors");
});




