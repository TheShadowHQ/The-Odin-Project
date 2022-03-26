let playerScore = 0;
let computerScore = 0;

const computerChoice = document.querySelector('.computer-choice');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const instruction = document.querySelector('.instruction');
const playerScoreNum = document.querySelector('.player-score');
const computerScoreNum = document.querySelector('.computer-score');
const result = document.querySelector('.result');
const resetBtn = document.querySelector('.reset-btn');
const scoreBoard = document.querySelector('.score-board')

const clickRock = () => {
    instruction.remove();
    result.textContent = playRound('Rock');
    finalResult();
}

const clickPaper = () => {
    instruction.remove();
    result.textContent = playRound('Paper');
    finalResult();
}

const clickScissors = () => {
    instruction.remove();
    result.textContent = playRound('Scissors');
    finalResult();
}

const addPlayerScore = () => {
    playerScore++;
    playerScoreNum.textContent = playerScore;
}

const addComputerScore = () => {
    computerScore++;
    computerScoreNum.textContent = computerScore;
}

const computerPlay = () => {
    let choice = Math.floor(Math.random() * 3);
    switch(choice) {
        case 0: 
            return 'Rock'; 
            break;
        case 1: return 'Paper'; break;
        case 2: return 'Scissors'; break;
    }
}

const playRound = (playerSelection) => {
    const computerSelection = computerPlay();

    if (playerSelection === computerSelection) {
        return `${playerSelection} vs ${computerSelection}. It's a tie`;
    }

    if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            addComputerScore();
            return `${playerSelection} vs ${computerSelection}. You lose this round.`;
        } else {
            addPlayerScore();
            return `${playerSelection} vs ${computerSelection}. You win this round.`;
        }
    }

    if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            addComputerScore();
            return `${playerSelection} vs ${computerSelection}. You lose this round.`;
        } else {
            addPlayerScore();
            return `${playerSelection} vs ${computerSelection}. You win this round.`;
        }
    }

    if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            addComputerScore();
            return `${playerSelection} vs ${computerSelection}. You lose this round.`;
        } else {
            addPlayerScore();
            return `${playerSelection} vs ${computerSelection}. You win this round.`;
        }
    }
}

const clickReset = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreNum.textContent = playerScore;
    computerScoreNum.textContent = computerScore;

    result.textContent = "";
    rockBtn.addEventListener('click', clickRock);
    paperBtn.addEventListener('click', clickPaper);
    scissorsBtn.addEventListener('click', clickScissors);
    scoreBoard.removeChild(resetBtn);
}

const removeClickButtons = () => {
    rockBtn.removeEventListener('click', clickRock);
    paperBtn.removeEventListener('click', clickPaper);
    scissorsBtn.removeEventListener('click', clickScissors);
}

const finalResult = () => {
    if (playerScore === 5) {
        removeClickButtons();
        result.textContent = `You win the computer! Congratulations!`
        scoreBoard.appendChild(resetBtn);
        resetBtn.addEventListener('click', clickReset);
    } 
    
    if (computerScore === 5) {
        removeClickButtons();
        result.textContent = `Oh no! Computer wins! Good luck next time.`
        scoreBoard.appendChild(resetBtn);
        resetBtn.addEventListener('click', clickReset);
    }
}

const main = () => {
    scoreBoard.removeChild(resetBtn);
    rockBtn.addEventListener('click', clickRock);
    paperBtn.addEventListener('click', clickPaper);
    scissorsBtn.addEventListener('click', clickScissors);
}

main();