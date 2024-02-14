document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start');
    const submitButton = document.getElementById('submit');
    const guessInput = document.getElementById('guess');
    const resultMessage = document.getElementById('result');
    const attemptsMessage = document.getElementById('attempts');
    const instructions = document.getElementById('instructions');
    const difficultySelect = document.getElementById('difficulty');

    let secretNumber;
    let attempts;
    let maxAttempts;

    function startGame() {
        const difficulty = difficultySelect.value;
        switch (difficulty) {
            case 'easy':
                secretNumber = Math.floor(Math.random() * 10) + 1;
                maxAttempts = 3;
                break;
            case 'medium':
                secretNumber = Math.floor(Math.random() * 50) + 1;
                maxAttempts = 5;
                break;
            case 'hard':
                secretNumber = Math.floor(Math.random() * 100) + 1;
                maxAttempts = 7;
                break;
            default:
                secretNumber = Math.floor(Math.random() * 10) + 1;
                maxAttempts = 3;
        }
        attempts = 0;
        resultMessage.textContent = '';
        attemptsMessage.textContent = '';
        instructions.textContent = `Guess a number between 1 and ${difficulty === 'easy' ? 10 : (difficulty === 'medium' ? 50 : 100)}. You have ${maxAttempts} attempts.`;
    }

    function checkGuess() {
        const guess = parseInt(guessInput.value);
        if (isNaN(guess) || guess < 1 || guess > (difficultySelect.value === 'easy' ? 10 : (difficultySelect.value === 'medium' ? 50 : 100))) {
            resultMessage.textContent = 'Please enter a valid number.';
            return;
        }

        attempts++;

        if (guess === secretNumber) {
            resultMessage.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
            return;
        }

        if (attempts >= maxAttempts) {
            resultMessage.textContent = `Game Over. The correct number was ${secretNumber}.`;
            return;
        }

        const hint = guess < secretNumber ? 'higher' : 'lower';
        resultMessage.textContent = `Incorrect. Try a ${hint} number. ${maxAttempts - attempts} attempts left.`;
    }

    startButton.addEventListener('click', startGame);
    submitButton.addEventListener('click', checkGuess);
});
