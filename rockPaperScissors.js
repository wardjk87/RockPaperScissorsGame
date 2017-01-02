var choices = ['rock', 'paper', 'scissors'];

var randomNumber = Math.round(Math.random()*(choices.length-1));


do {

var outcome = "undecided";

var userChoice = prompt("Do you choose rock, paper or scissors?");


    
    if (userChoice !== "rock") {
        if (userChoice !== "paper"){
            if (userChoice !==  "scissors") {
            alert("Your choice of " + userChoice + " is not an option in rock, paper or scissors!");
            var userChoice = prompt("Last chance to pick rock, paper or scissors; otherwise, the computer will randomly choose for you!");
            }
        }
    }

    if (userChoice !== "rock") {
        if (userChoice !== "paper"){
            if (userChoice !==  "scissors") {
            alert("Your choice of " + userChoice + " is not an option in rock, paper or scissors! Now the computer will randomly choose for you!");
            userChoice = choices[randomNumber];
            alert("The computer has randomly selected your move as " + userChoice + ". Best of Luck!")
            }
        }
    }

    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    } alert("Computer: " + computerChoice);

    var compare = function (choice1, choice2) {
        if (choice1 === choice2) {
            alert("The result is a tie!");
            outcome = "tie"
        } else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                alert("Rock Wins. You Win!");
                outcome ="win";
                
            } else {
                alert("Paper Wins. You Lose!");
                outcome ="lose";
            }
        } else if (choice1 === "paper") {
            if (choice2 === "rock") {
                alert("Paper Wins! You Win!");
                outcome ="win";
            } else {
                alert("Scissors Wins! You Lose!");
                outcome ="lose";
            }
        } else if (choice1 === "scissors") {
            if (choice2 === "rock") {
                alert("Rock Wins! You Lose!");
                outcome ="lose";
            } else {
                alert("Scissors Wins! You Win!");
                outcome ="win";
            }
        }
    }
    compare(userChoice, computerChoice);
} while (outcome === "tie");