//gameplay variables
let compScore = 0;
let playerScore = 0;
let roundCount = 0;
const weapons = ['scissors', 'paper', 'rock'];

const scissors = document.querySelector('#scissors');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');

//html manipulation variables
const playerScoreCard = document.querySelector('#playerScore');
const compScoreCard = document.querySelector('#compScore');

const commentaryContainer = document.querySelector('.commentary-container');

const gameResult = document.createElement('div');
gameResult.style.cssText = 'font-size: 48px;';


// generate random choice for computer
function getComputerChoice() {
    let computerChoice = weapons[Math.floor(Math.random() * 3)];
    return computerChoice;
}

// reset game 
function resetGame() {
    roundCount = 0;
    playerScore = 0;
    compScore = 0;
    playerScoreCard.textContent = playerScore;
    compScoreCard.textContent = compScore;

    while (commentaryContainer.hasChildNodes) {
        commentaryContainer.removeChild(commentaryContainer.lastChild);
    }
}
//generate game mechanics
function play(player, computer) {
    roundCount += 1;
    if (player == 'scissors') {
        if (computer == 'scissors') {
            return 'Tie! Your scissors are unable to vanquish each other!';
        }

        else if (computer == 'paper') {
            playerScore++;
            return 'Win! Your scissors have sliced n diced their paper to shreds!'
        }

        else {
            compScore++;
            return 'Loss! Your scissors have been crushed by their rock'
        }
    }

    else if (player == 'paper') {
        if (computer == 'paper') {
            return 'Tie! Your papers are unable to vanquish each other!';
        }

        else if (computer == 'rock') {
            playerScore++;
            return 'Win! Your paper has smothered their rock to fatality!'
        }

        else {
            compScore++;
            return 'Loss! Your paper was carved up by their scissors!'
        }
    }

    else if (player == 'rock'){
        if (computer == 'rock') {
            return 'Tie! Your rocks are unable to vanquish each other!';
        }

        else if (computer == 'scissors') {
            playerScore++;
            return 'Win! Your rock has crushed their scissors to fatality!'
        }

        else {
            compScore++;
            return 'Loss! Your rock has been smothered by their paper!'
        }
    }

    else {
        return 'Your choices are: "rock" or "paper" or "scissors"! Pick one!'
    }
}

//print game winner
function printGameWinner(playerScore, compScore) {
    if (playerScore == compScore) {
        return 'Damn ya\'ll tied! Run it again!!';
    }

    else if (playerScore > compScore) {
        return 'You came! You conquered! Noice!'
    }

    else {
        return 'Damn you really gon let a computer do you like this? :$';
    }
}


function printGameWinner(playerScore, compScore) {
    if (playerScore == compScore) {
        return 'Damn ya\'ll tied! Run it again!!';
    }

    else if (playerScore > compScore) {
        return 'You came! You conquered! Noice!'
    }

    else {
        return 'Damn you really gon let a computer do you like this? :$';
    }
}


//main game of 5 rounds
function game() {
    if (roundCount >= 5) {
        resetGame();
    }
    
    const computerSelection = getComputerChoice();

    // printing game commentary placed here so it would create a running list instead of replacing old commentary.
    const commentary = document.createElement('div');
    commentary.classList.add('commentary');
    commentary.textContent = `Round ${roundCount +1}: Computer chose ${computerSelection}!\n ${play(this.id, computerSelection)}`;
    commentaryContainer.appendChild(commentary);
    playerScoreCard.textContent = playerScore;
    compScoreCard.textContent = compScore;

    if (roundCount >= 5) {

        gameResult.textContent = `Thats game! Your score is ${playerScore}! The computer's is ${compScore}! ${printGameWinner(playerScore, compScore)}`;
        commentaryContainer.appendChild(gameResult);
    }
    // console.log('Computer chose ' + computerSelection);
    // console.log(string);

} 


scissors.addEventListener('click', game);
rock.addEventListener('click', game);
paper.addEventListener('click', game); 



