let playerScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissor"];
const rules = {
    rock: "scissor",
    scissor: "paper",
    paper: "rock"
};

const playerInput = document.getElementById("playerInput");
const loader = document.getElementById("loader");
const resultBox = document.getElementById("resultBox");

const playerChoiceText = document.getElementById("playerChoice");
const computerChoiceText = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerScoreText = document.getElementById("playerScore");
const computerScoreText = document.getElementById("computerScore");

function playGame() {
    const playerChoice = playerInput.value.trim().toLowerCase();

    if (!options.includes(playerChoice)) {
        alert("Please enter rock, paper, or scissor");
        return;
    }

    loader.style.display = "block";
    resultBox.style.display = "none";

    setTimeout(() => {
        loader.style.display = "none";

        const computerChoice =
            options[Math.floor(Math.random() * options.length)];

        let resultMessage = "";

        if (playerChoice === computerChoice) {
            resultMessage = "It's a tie 🤝";
        } else if (rules[playerChoice] === computerChoice) {
            resultMessage = "You win 🎉";
            playerScore++;

            document.body.classList.add("hurrah");
            setTimeout(() => {
                document.body.classList.remove("hurrah");
            }, 2000);
        } else {
            resultMessage = "Computer wins 💻";
            computerScore++;
        }

        playerChoiceText.innerText = "You chose: " + playerChoice;
        computerChoiceText.innerText = "Computer chose: " + computerChoice;
        resultText.innerText = resultMessage;

        playerScoreText.innerText = playerScore;
        computerScoreText.innerText = computerScore;

        resultBox.style.display = "block";
        playerInput.value = "";
    }, 600);
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;

    playerScoreText.innerText = 0;
    computerScoreText.innerText = 0;
    resultBox.style.display = "none";
}

function submitFeedback() {
    alert("Thanks for your feedback! 🙌");
}

playerInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        playGame();
    }
});
