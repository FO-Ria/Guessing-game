// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 3;

function makeGuess() {
    const guessInput = document.getElementById('guess-box');
    const result = document.getElementById('result');
    const userGuess = parseInt(guessInput.value);

    // Validate input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        result.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    // Check the guess
    attempts--;
    if (userGuess === randomNumber) {
        result.textContent = `Congratulations! You guessed the correct number ${randomNumber}.`;
        guessInput.disabled = true;
    } else if (attempts === 0) {
        result.textContent = `Sorry, you've run out of attempts. The correct number was ${randomNumber}.`;
        guessInput.disabled = true;
    } else if (userGuess < randomNumber) {
        result.textContent = `Too low! You have ${attempts} attempts left.`;
    } else if (userGuess > randomNumber) {
        result.textContent = `Too high! You have ${attempts} attempts left.`;
    }

    // Clear the input field
    guessInput.value = '';
}
