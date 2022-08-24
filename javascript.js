function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function getComputerChoice() {
    let computerchoice = randomNumber(0,3)
    
    if (computerchoice == 0) {
        return "rock";
    }else if (computerchoice == 1) {
        return "paper";
    }else if (computerchoice == 2) {
        return "scissors";
    }
}

function getPlayerSelection() {
    let playerselection = prompt("Select your move: Rock/Paper/Scissors");
    return playerselection.toLowerCase();
}

function playRound() {
    // 0 == PLAYER WINS 1 == COMPUTER WINS 2 == DRAW
    let playerselection = getPlayerSelection();
    let computerselection = getComputerChoice();
    if (playerselection == "rock" && computerselection == "paper"){
        return 1;
    }else if (playerselection == "rock" && computerselection == "scissors"){
        return 0;
    }else if (playerselection == "paper" && computerselection == "rock"){
        return 0;
    }else if (playerselection == "paper" && computerselection == "scissors"){
        return 1;
    }else if (playerselection == "scissors" && computerselection == "paper"){
        return 0;
    }else if (playerselection == "scissors" && computerselection == "rock"){
        return 1;
    }else if (playerselection == "rock" && computerselection == "rock"){
        return 2;
    }else if (playerselection == "paper" && computerselection == "paper"){
        return 2;
    }else if (playerselection == "scissors" && computerselection == "scissors"){
        return 2;
    }
}

function game() {
    let playerscore = 0;
    let computercore = 0;

    for (let i=0 ; i<5 ; i++) {
        let winner = playRound();
        if (winner == 1) {
            console.log("Computer Wins!");
            computercore ++;
        }else if (winner == 0 ){
            console.log("Player Wins!");
            playerscore ++;
        }else if (winner == 2){
            console.log("Draw!");
        }
    }
    console.log("Total Score: Player: " + playerscore + "\nComputer: " + computercore);
}

game();
