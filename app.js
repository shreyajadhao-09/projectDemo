let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    let options = ["rock", "paper", "Scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});