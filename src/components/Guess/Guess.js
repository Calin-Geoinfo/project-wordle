import React from "react";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ addGuess, answer, gameStatus, numGuesses }) {
  const [guess, setGuess] = React.useState("");

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          console.log(guess);
          addGuess(guess);
          setGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          disabled={gameStatus !== "running"}
          title="5-letter word"
          required
          minLength={5}
          id="guess-input"
          type="text"
          pattern="[A-Za-z]{5}"
          maxLength={5}
          value={guess}
          onChange={(event) => {
            let userInput = event.target.value;
            userInput = userInput.toUpperCase();
            setGuess(userInput);
          }}
        />
      </form>
      {gameStatus === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{numGuesses} guesses</strong>.
          </p>
        </div>
      )}
      {gameStatus === "lost" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}

export default Guess;
