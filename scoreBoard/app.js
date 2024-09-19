const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");
const buttonReset = document.querySelector("#reset");
const scoreWinner = document.querySelector("#maxScore")

let p1Score = 0;
let p2Score = 0;
let maxScore = 3;
let isWinner = false;

p1Button.addEventListener("click", () => {
    if (!isWinner) {
        p1Score += 1;
        if (p1Score === maxScore) {
            isWinner = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", () => {
    if (!isWinner) {
        p2Score += 1;
        if (p2Score === maxScore) {
            isWinner = true;
        }
        p2Display.textContent = p2Score;
    }
});

function reset() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    isWinner = false;
}

buttonReset.addEventListener("click", reset);

scoreWinner.addEventListener("change",()=>{
    maxScore = parseInt(scoreWinner.value);
    reset()
})
