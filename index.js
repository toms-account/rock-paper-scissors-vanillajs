
// User and computer score and counters
let userScore = 0;

let computerScore = 0;

let roundCounter = 0;

let drawCounter = 0;

let winCounter = 0;

let loseCounter = 0;

// DOM Variables
const userScore_div = document.getElementById("user-score");

const computerScore_div = document.getElementById("computer-score");

const result_p = document.querySelector(".result > p");

const  userBadge_p = document.querySelector(".user-badge");

const compChoice_p = document.querySelector(".computer-badge");

const roundCounter_p = document.getElementById("round-counter");

const drawCounter_span = document.getElementById("draw-counter");

const winCounter_span = document.getElementById("win-counter");

const loseCounter_span = document.getElementById("lose-counter");

// Rock Paper Scissor variables
const rock_div = document.getElementById("r");

const paper_div = document.getElementById("p");

const scissors_div = document.getElementById("s");


// Game functions

//Computer choice

function getComputerChoice() {
    let choices = ["r", "p", "s"];
    return choices[Math.floor(Math.random() * 3)];
}

// String to Word 

function convertWord(letter) {
    if (letter === "r") {
        return "Rock";
    }
    else if (letter === "p") {
        return "Paper";
    }
    else if (letter === "s") {
        return "Scissors";
    }
}

// Win Lose Draw

function win(usrChoice, compChoice) {
    userScore++;
    userScore_div.innerHTML = userScore;
    result_p.innerHTML = `User's ${convertWord(usrChoice)} beats Comp's ${convertWord(compChoice)}. You Win !`;
    const choice_div = document.getElementById(usrChoice);
    choice_div.classList.add("green-glow");
    setTimeout( () => {
        choice_div.classList.remove("green-glow");
    }, 400);
    userBadge_p.classList.remove("win-highlights", "lose-highlights", "draw-highlights");
    compChoice_p.classList.remove("win-highlights", "lose-highlights", "draw-highlights");
    userBadge_p.classList.add("win-highlights");
    compChoice_p.classList.add("lose-highlights");
    roundCounter++;
    winCounter++;
    roundCounter_p.innerHTML = roundCounter;
    winCounter_span.innerHTML = winCounter;
}

function lose(usrChoice, compChoice) {
    computerScore++;
    computerScore_div.innerHTML = computerScore;
    result_p.innerHTML = `User's ${convertWord(usrChoice)} loses to Comp's ${convertWord(compChoice)}. You Lose !`;
    const choice_div = document.getElementById(usrChoice);
    choice_div.classList.add("red-glow");
    setTimeout( () => {
        choice_div.classList.remove("red-glow");
    }, 400);
    userBadge_p.classList.remove("win-highlights", "lose-highlights", "draw-highlights");
    compChoice_p.classList.remove("win-highlights", "lose-highlights", "draw-highlights");
    userBadge_p.classList.add("lose-highlights");
    compChoice_p.classList.add("win-highlights");
    roundCounter++;
    loseCounter++;
    roundCounter_p.innerHTML = roundCounter;
    loseCounter_span.innerHTML =  loseCounter;
}

function draw(usrChoice) {
    result_p.innerHTML = `It's a draw !`;
    const choice_div = document.getElementById(usrChoice);
    choice_div.classList.add("draw-glow");
    setTimeout( () => {
        choice_div.classList.remove("draw-glow");
    }, 400);
    userBadge_p.classList.remove("win-highlights", "lose-highlights", "draw-highlights");
    compChoice_p.classList.remove("win-highlights", "lose-highlights", "draw-highlights");
    userBadge_p.classList.add("draw-highlights");
    compChoice_p.classList.add("draw-highlights");
    roundCounter++;
    drawCounter++;
    roundCounter_p.innerHTML = roundCounter;
    drawCounter_span.innerHTML = drawCounter;
}


//Play func

function play(userChoice) {
    let computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        //Win Condition
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break;
        //Lose Condition
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice)
            break;
        //Draw Condition
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice);
            break;
    }
}

 // Event listeners

rock_div.addEventListener("click", () => {
    play("r");
});
paper_div.addEventListener("click", () => {
    play("p");
});
scissors_div.addEventListener("click", () => {
    play("s");
});
