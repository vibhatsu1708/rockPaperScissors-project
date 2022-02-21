let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const winner_p = document.querySelector(".winner > p");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice () {
    const choices = ['r', 'p', 's'];
    const randomNumber = (Math.floor(Math.random() * choices.length));
    return choices[randomNumber];
}

function movePlayed (move) {
    if (move === "r") return "Rock";
    if (move === "p") return "Paper";
    if (move === "s") return "Scissors";
}

function userWin (userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${movePlayed(userChoice)} beats ${movePlayed(computerChoice)}`;
    winner_p.innerHTML = "You win!";
}
function computerWin (userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${movePlayed(computerChoice)} beats ${movePlayed(userChoice)}`;
    winner_p.innerHTML = "Computer wins!";
}
function draw (userChoice, computerChoice) {
    result_p.innerHTML = "Draw"
    winner_p.innerHTML = "Nobody wins!";
}

function game (userChoice) {
    const computerChoice = getComputerChoice();
    
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            userWin(userChoice, computerChoice);
            break;

        case "sr":
        case "rp":
        case "ps":
            computerWin(userChoice, computerChoice);
            break;

        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
        
    }
}

function main () {
    rock_div.addEventListener (
        'click', function () {
            game("r");
        }
    )
    paper_div.addEventListener (
        'click', function () {
            game("p");
        }
    )
    scissors_div.addEventListener (
        'click', function () {
            game("s");
        }
    )
}

main();