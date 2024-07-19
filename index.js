/*
// (1) getting computer's choice
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3)
    let computerChoice;
    switch (randomNumber) {
        case 0:
            computerChoice="rock"
            break;
            case 1:
                computerChoice="scissor"
                break;
                case 2:
                computerChoice="paper"
            break;
            default: console.log("there is an error")
    }
    return computerChoice
}

const computerSelection = getComputerChoice()
console.log("computerSelection is " + computerSelection)


// (2) asking the user to input his/her choice
let userSelection = prompt("What is your choice? Possible choices are rock, scissor, and paper.").toLowerCase();
console.log("user's selection is " + userSelection)

// (3) Player's score
var userScore = 0;
var computerScore = 0;
var game = 0;

// (4) single round
function playRound(userSelection, computerSelection) {
    const rule = {
        "rock": { "scissor":1, "rock":0, "paper":-1},
        "scissor": { "scissor":0, "rock":-1, "paper":1},
        "paper": { "scissor":-1, "rock":1, "paper":0}
    };

    if (rule[userSelection][computerSelection]===1) {
        userScore++;
        alert("You won! The Score is " + userScore + "(You) vs " + computerScore + "(Computer)")
    } else if (rule[userSelection][computerSelection]===-1) {
        computerScore++;
        alert("You lost! The Score is " + userScore + "(You) vs " + computerScore + "(Computer)")
    } else {
        alert("Draw! The Score is " + userScore + "(You) vs " + computerScore + "(Computer)")
    };
}

// (5) entire game of 5 rounds
function entireGame() {
   
    playRound(userSelection, computerSelection);

}
*/ 

var userScore=0;
var computerScore=0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3)
    let computerChoice;
    switch (randomNumber) {
        case 0:
            computerChoice="rock"
            break;
            case 1:
                computerChoice="scissor"
                break;
                case 2:
                computerChoice="paper"
            break;
            default: console.log("there is an error")
    }
    return computerChoice
}

function playRound(userSelection, computerSelection) {
    const rule = {
        "rock": { "scissor":1, "rock":0, "paper":-1},
        "scissor": { "scissor":0, "rock":-1, "paper":1},
        "paper": { "scissor":-1, "rock":1, "paper":0}
    };

    if (rule[userSelection][computerSelection]===1) {
        userScore++;
        alert("You won! The Score is " + userScore + "(You) vs " + computerScore + "(Computer)")
    } else if (rule[userSelection][computerSelection]===-1) {
        computerScore++;
        alert("You lost! The Score is " + userScore + "(You) vs " + computerScore + "(Computer)")
    } else {
        alert("Draw! The Score is " + userScore + "(You) vs " + computerScore + "(Computer)")
    };
}

function entireGame() {

    for (let i=0; i<5; i++) {
        const computerSelection = getComputerChoice();
        let userSelection = prompt("What is your choice? Possible choices are rock, scissor, and paper.").toLowerCase();
        console.log("user's selection is " + userSelection);
        playRound(userSelection,computerSelection);
    }

    if (userScore>computerScore) {
        alert("Congratulations! You won the game: " + userScore + "(Your Score) vs " + computerScore + "(Computer)")
    } else if (userScore<computerScore) {
        alert("Sorry, you lost the game: " + userScore + "(Your Score) vs " + computerScore + "(Computer)")
    } else {alert("Totally Draw!: " + userScore + "(Your Score) vs " + computerScore + "(Computer)")}
}

entireGame();


