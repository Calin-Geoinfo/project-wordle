import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Guess from "../Guess";
import PreviousGuesses from "../PreviousGuesses";
import GuessGrid from "../GuessGrid";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  function addGuess(guess) {
    nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);

    if (guess === answer) setGameStatus("won");
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) setGameStatus("lost");
  }

  return (
    <>
      {gameStatus}
      <GuessGrid guesses={guesses} answer={answer} />
      <Guess
        addGuess={addGuess}
        answer={answer}
        gameStatus={gameStatus}
        numGuesses={guesses.length}
      />
    </>
  );
}

export default Game;
