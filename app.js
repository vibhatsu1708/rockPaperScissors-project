// Gets the move played by the computer.
function getComputerChoice () {
    let choices = ["r", "p", "s"];
    let choicesLength = choices.length;
    let movePlayed = choices[Math.floor(Math.random() * choicesLength)];
    return movePlayed
}

// A single round of game played between the user and the computer
function playRound (playerSelection, computerSelection) {
    let move = playerSelection + computerSelection;
    console.log(move);

    switch (move) {
        // Tie
        case "rr":
        case "pp":
        case "ss":
            return "Tie";
            break;

        // Player wins
        case "rs":
            return "You win, Rock beats Scissors";
            break;
        case "pr":
            return "You win, Paper beats Rock";
            break;
        case "sp":
            return "You win, Scissors beats Paper";
            break;

        // Computer Wins
        case "sr":
            return "You lose, Rock beats Scissors";
            break;
        case "rp":
            return "You lose, Paper beats Rock";
            break;
        case "ps":
            return "You lose, Scissors beats Paper";
            break;
    }
}

// Keeps track of the score for the game
function game (playerSelection, computerSelection) {

    let move = playerSelection + computerSelection;
    // Player score for the game
    let playerScore = 0; 
    // Computer score for the game
    let computerScore = 0;

    for (let i=0; i<5; i++) {
        // Player wins
        if (move == "rs" || move == "pr" || move == "sp") {
            playerScore++;
        }
        else if (move == "sr" || move == "rp" || move == "ps") {
            computerScore++;
        }
        return playerScore + " " + computerScore;
    }
}
playerSelection = "r";
computerSelection = getComputerChoice();
console.log(game());