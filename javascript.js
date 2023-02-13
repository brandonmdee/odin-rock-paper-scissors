// rng to determine computerSelection
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

let result;
let playerScore = 0;
let computerScore = 0;
let playerSelection;
let computerSelection;


const container = document.querySelector('#container');
const games = document.querySelector('#games');
const reset = document.querySelector('#reset');
const playAgain = document.createElement('button');
playAgain.textContent = `PLAY AGAIN`;
const score = document.querySelector('#score');
const roundResult = document.querySelector('#round-result');
const rounds = document.createElement('div');
const matchUp = document.createElement('div');
const buttons = document.querySelectorAll('#button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.className;
        console.log(playerSelection);
        

    })
});


function game() {
    
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore > computerScore) {
            matchUp.textContent = `Player wins with 5 points.`;
            games.appendChild(playAgain);
            
        } else if (computerScore > playerScore) {
            matchUp.textContent = `Computer wins with 5 points.`;
            games.appendChild(playAgain);
        }
        
        playerScore = 0;
        computerScore = 0;
        games.appendChild(matchUp);

    } else {
        
        //alert(`${result}. player has ${playerScore} points, computer has ${computerScore} points.`);
        matchUp.textContent = `The player currently has ${playerScore} points. The computer currently has ${computerScore} points.`;
    }
    

}
    
const play = document.querySelector('#play');
play.addEventListener('click', game);
    


// playRound takes the input from the game function (playerSelection and computerSelection) and figures out who wins each round by comparing.
function playRound(playerSelection, computerSelection) {
    
       if ((playerSelection === "rock" || computerSelection === "rock") && (playerSelection === "scissors" || computerSelection === "scissors") ) {
        if (playerSelection ==="rock") {
            playerScore++;
            rounds.textContent = `player wins. rock beats scissors`;
            roundResult.appendChild(rounds);
        } 
        else 
        {
            computerScore++;
            rounds.textContent = `computer wins. scissors beats rock`;
            roundResult.appendChild(rounds);
        }
       } 

        else if ((playerSelection === "paper" || computerSelection === "paper") && (playerSelection === "rock" || computerSelection === "rock")) {
            if (playerSelection ==="paper") {
                playerScore++;
                rounds.textContent = `player wins. paper beats rock`;
                roundResult.appendChild(rounds);
            } 
            else {
                computerScore++;
                rounds.textContent = `computer wins. paper beats rock`;
                roundResult.appendChild(rounds);
            }
        }
        else if ((playerSelection === "scissors" || computerSelection === "scissors") && (playerSelection === "paper" || computerSelection === "paper")) {
            if (playerSelection ==="scissors") {
                playerScore++;
                rounds.textContent = `player wins. scissors beats paper`;
                roundResult.appendChild(rounds);
            } 
            else {
                computerScore++;
                rounds.textContent = `computer wins. scissors beats paper`;
                roundResult.appendChild(rounds);
            }
        }
        else if (playerSelection === computerSelection) {
            rounds.textContent = `DRAW.`
            roundResult.appendChild(rounds);
        }
       else {
        result = `invalid user entry. sorry you broke it`;
        
       }
       score.appendChild(matchUp);
    };

playAgain.addEventListener('click',reseter);
function reseter () {
    rounds.textContent = ``;
    matchUp.textContent = ``;
    games.removeChild(playAgain);
    game;

};