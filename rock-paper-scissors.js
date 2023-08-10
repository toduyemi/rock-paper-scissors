let compScore = 0;
let playerScore = 0;

// generate random choice for computer
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1)
    switch(computerChoice) {
        case 1:
            computerChoice = 'scissors';
            break;
        case 2:
            computerChoice = 'paper';
            break;
        case 3:
            computerChoice = 'rock';
    }
    return computerChoice;
}

//generate game mechanics
function play(player, computer) {
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
            return 'Loss! Your paper has carved up by their scissors!'
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

//main game of 5 rounds
function game() {
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Make your selection! ').toLowerCase();
        const computerSelection = getComputerChoice();
        console.log('Computer chose ' + computerSelection);
        console.log(play(playerSelection, computerSelection));
    }

    return `Thats game! Your score is ${playerScore}! The computer's is ${compScore}! `;
} 

console.log(game() + printGameWinner(playerScore, compScore))
