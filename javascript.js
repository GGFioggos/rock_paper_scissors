const result = document.querySelector("#result");
const score = document.querySelector("#score");
const btns = document.querySelectorAll("button");

let playerscore = 0;
let computerscore = 0;

btns.forEach(btn => btn.addEventListener("click", () => {
    game(btn.getAttribute("data-key"));
}))




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

function playRound(playerselection) {
    // 0 == PLAYER WINS 1 == COMPUTER WINS 2 == DRAW
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

function game(playerselection) {

    
    let winner = playRound(playerselection);
    if (winner == 1) {
        result.textContent = "Result: Computer Wins Round";
        computerscore ++;
    }else if (winner == 0 ){
        result.textContent = "Result: Player Wins Round";
        playerscore ++;
    }else{
        result.textContent = "Result: It's a Draw!";
    }
    score.textContent = "Score: Player: " + playerscore + " Computer: " + computerscore;
        

    if (playerscore == 5){
        result.textContent = "Result: Player Wins!";
        gameover();
    }else if (computerscore == 5){
        result.textContent = "Result: Computer Wins!";
        gameover();
    }
}

function gameover(){
    btns.forEach(btn => {
        btn.disabled = true;
    })
}