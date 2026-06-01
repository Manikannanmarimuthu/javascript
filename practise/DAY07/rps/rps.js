function rockPaperScissors(){
    console.log("Welcome to Rock, Paper, Scissors!");
    const choices = ["rock", "paper", "scissors"];
    const userChoice = prompt("Please enter your choice (rock, paper, or scissors):").toLowerCase();
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    } else if ((userChoice === "rock" && computerChoice === "scissors") ||
               (userChoice === "paper" && computerChoice === "rock") ||
               (userChoice === "scissors" && computerChoice === "paper")) {
        console.log("You win!");
    } else if (choices.includes(userChoice)) {
        console.log("Computer wins!");
    } else {
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
    }

}

rockPaperScissors();