/**
 * 
 * @param {*} clickedButton 
 */
function play(clickedButton) {
    const humanChoice = clickedButton
    console.log("Human = ", clickedButton);
    const computerChoice = randomSelection();
    console.log("Computer = ", computerChoice);
    const result = whoWins(clickedButton, computerChoice);
    console.log("Wins = ", result);
}

/**
 * 
 */
function randomSelection() {
    const handSign = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * handSign.length);
    const randomImage = handSign[randomIndex];
    return randomImage;
}

function whoWins(H, C) {
    if (H === C) {
        return "draw";
    } else if (beats(H, C)) {
        return "human";
    } else {
        return "computer";
    }
}

function beats(A, B) {
    return (
        (A === 'rock' && B === 'scissors') ||
        (A === 'scissors' && B === 'paper') ||
        (A === 'paper' && B === 'rock')
    );
}