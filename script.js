let playerScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissor"];
const rules = {
    rock: "scissor",
    scissor: "paper",
    paper: "rock"
};

function playGame() {
    const input = document.getElementById("playerInput");
    const playerChoice = input.value.trim().toLowerCase();
    const loader = document.getElementById("loader");
    const resultBox = document.getElementById("resultBox");

    if (!options.includes(playerChoice)) {
        alert("Please enter rock, paper, or scissor");
        return;
    }

    loader.style.display = "block";
    resultBox.style.display = "none";

    setTimeout(() => {
        loader.style.display = "none";

        const computerChoice = options[Math.floor(Math.random() * options.length)];
        let result;

        if (playerChoice === computerChoice) {
            result = "It's a tie 🤝";
        } else if (rules[playerChoice] === computerChoice) {
            result = "You win 🎉";
            playerScore++;
        } else {
            result = "Computer wins 💻";
            computerScore++;
        }

        document.getElementById("playerChoice").innerText =
            "You chose: " + playerChoice;
        document.getElementById("computerChoice").innerText =
            "Computer chose: " + computerChoice;
        document.getElementById("resultText").innerText = result;

        document.getElementById("playerScore").innerText = playerScore;
        document.getElementById("computerScore").innerText = computerScore;

        resultBox.style.display = "block";
        input.value = "";
    }, 600);
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;

    document.getElementById("playerScore").innerText = 0;
    document.getElementById("computerScore").innerText = 0;
    document.getElementById("resultBox").style.display = "none";
}
