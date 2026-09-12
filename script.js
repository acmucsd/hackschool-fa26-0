const game = {
  answer: "WORLD",
  guesses: ["BLOCK"],
  currentRow: 1
};

const input = document.querySelector("#guess");
const submitButton = document.querySelector("#submit");
const rows = document.querySelectorAll(".row");

const checkGuess = (guess) => {
  const result = [];

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === game.answer[i]) {
      result.push("correct");
    } else if (game.answer.includes(guess[i])) {
      result.push("present");
    } else {
      result.push("absent");
    }
  }

  return result;
};

const submitGuess = () => {
  const guess = input.value.toUpperCase();

  if (guess.length !== 5) {
    return;
  }

  game.guesses.push(guess);

  const result = checkGuess(guess);
  const row = rows[game.currentRow];

  for (let i = 0; i < 5; i++) {
    row.children[i].textContent = guess[i];
    row.children[i].classList.add(result[i]);
  }

  // TODO: If the guess is correct, display "You won!"

  game.currentRow++;
  input.value = "";
};

submitButton.addEventListener("click", submitGuess);