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
        alert(`we have a winner. player has ${playerScore} points, computer has ${computerScore} points.`);
        playerScore = 0;
        computerScore = 0;
    } else {
        alert(`${result}. player has ${playerScore} points, computer has ${computerScore} points.`);
    }
}
    
const play = document.querySelector('#play');
play.addEventListener('click', game);
    

//console.log(`${playRound(playerSelection,computerSelection)}`);
// playRound takes the input from the game function (playerSelection and computerSelection) and figures out who wins each round by comparing.
function playRound(playerSelection, computerSelection) {
    
    //playerSelection = playerSelection.toLowerCase();
       if ((playerSelection === "rock" || computerSelection === "rock") && (playerSelection === "scissors" || computerSelection === "scissors") ) {
        if (playerSelection ==="rock") {
            playerScore++;
            result = `player wins. rock beats scissors`;
            
        } 
        else 
        {
            computerScore++;
            result = `computer wins. scissors beats rock`;
            
        }
       } 

        else if ((playerSelection === "paper" || computerSelection === "paper") && (playerSelection === "rock" || computerSelection === "rock")) {
            if (playerSelection ==="paper") {
                playerScore++;
                result = `player wins. paper beats rock`;
                
            } 
            else {
                computerScore++;
                result = `computer wins. paper beats rock`;
                    
            }
        }
        else if ((playerSelection === "scissors" || computerSelection === "scissors") && (playerSelection === "paper" || computerSelection === "paper")) {
            if (playerSelection ==="scissors") {
                playerScore++;
                result = `player wins. scissors beats paper`;
                
            } 
            else {
                computerScore++;
                result = `computer wins. scissors beats paper`;
                
            }
        }
        else if (playerSelection === computerSelection) {
            result = `DRAW.`
        }
       else {
        result = `invalid user entry. sorry you broke it`;
        
       }
       
    };

