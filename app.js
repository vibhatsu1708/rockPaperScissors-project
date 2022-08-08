const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

let scoreScreenText = document.getElementById('score-screen-text');
let playerHeaderScore = document.getElementById('player-header-score');
let computerHeaderScore = document.getElementById('computer-header-score');
scoreScreenText.textContent = "can you beat the computer?";
playerHeaderScore.textContent = "0";
computerHeaderScore.textContent = "0";


let playerScore = 0;
let computerScore = 0;

// Gets the move played by the computer.
function getComputerChoice () {
    let choices = ["r", "p", "s"];
    let choicesLength = choices.length;
    let movePlayed = choices[Math.floor(Math.random() * choicesLength)];
    return movePlayed;
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
            scoreScreenText.textContent = "Tie";
            break;

        // Player wins
        case "rs":
            playerScore += 1;
            playerHeaderScore.textContent = playerScore;
            scoreScreenText.textContent = "You win, Rock beats Scissors";
            break;
        case "pr":
            playerScore += 1;
            playerHeaderScore.textContent = playerScore;
            scoreScreenText.textContent = "You win, Paper beats Rock";
            break;
        case "sp":
            playerScore += 1;
            playerHeaderScore.textContent = playerScore;
            scoreScreenText.textContent = "You win, Scissors beats Paper";
            break;

        // Computer Wins
        case "sr":
            computerScore += 1;
            computerHeaderScore.textContent = computerScore;
            scoreScreenText.textContent = "You lose, Rock beats Scissors";
            break;
        case "rp":
            computerScore += 1;
            computerHeaderScore.textContent = computerScore;
            scoreScreenText.textContent = "You lose, Paper beats Rock";
            break;
        case "ps":
            computerScore += 1;
            computerHeaderScore.textContent = computerScore;
            scoreScreenText.textContent = "You lose, Scissors beats Paper";
            break;
    }
}
// playerSelection = "r";
// computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));

// event listeners for each button.
rockButton.addEventListener(
    'click', () => {
        let playerSelection = 'r';
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

    }
)
paperButton.addEventListener(
    'click', () => {
        let playerSelection = 'p';
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
)
scissorsButton.addEventListener(
    'click', () => {
        let playerSelection = 's';
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
)
