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

let playerScore = 0;
let computerScore = 0;
    

// game runs the 5 round game of rock paper scissors and stops after 5 rounds.
function game() {
    for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt("please choose 'rock', 'paper' or 'scissors'.");
        const computerSelection = getComputerChoice();
        console.log(`round ${i}, ${playRound(playerSelection,computerSelection)}`);
        
        
    }
}

// playRound takes the input from the game function (playerSelection and computerSelection) and figures out who wins each round by comparing.
function playRound(playerSelection, computerSelection) {
    let result;
    playerSelection = playerSelection.toLowerCase();
       if ((playerSelection === "rock" || computerSelection === "rock") && (playerSelection === "scissors" || computerSelection === "scissors") ) {
        if (playerSelection ==="rock") {
            playerScore++;
            return `player wins. rock beats scissors`;
            
        } 
        else 
        {
            computerScore++;
            return `computer wins. scissors beats rock`;
            
        }
       } 

        else if ((playerSelection === "paper" || computerSelection === "paper") && (playerSelection === "rock" || computerSelection === "rock")) {
            if (playerSelection ==="paper") {
                playerScore++;
                return `player wins. paper beats rock`;
                
            } 
            else {
                computerScore++;
                return `computer wins. paper beats rock`;
                    
            }
        }
        else if ((playerSelection === "scissors" || computerSelection === "scissors") && (playerSelection === "paper" || computerSelection === "paper")) {
            if (playerSelection ==="scissors") {
                playerScore++;
                return `player wins. scissors beats paper`;
                
            } 
            else {
                computerScore++;
                return `computer wins. scissors beats paper`;
                
            }
        }
        else if (playerSelection === computerSelection) {
            return `DRAW.`
        }
       else {
        return `invalid user entry. sorry you broke it`;
        
       }
       
    }

game(); //game runs
//console logs the end result.
if (playerScore > computerScore) {
    console.log(`player has ${playerScore} points, computer has ${computerScore} points. player wins!`);
} else if (computerScore > playerScore) {
    console.log(`player has ${playerScore} points, computer has ${computerScore} points. computer wins!`);
} else {
    console.log(`player has ${playerScore} points, computer has ${computerScore} points. The game ends in a draw!`);
}
