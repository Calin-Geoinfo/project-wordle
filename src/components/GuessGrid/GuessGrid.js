import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessGrid({ guesses, answer }) {
  const rows = range(NUM_OF_GUESSES_ALLOWED);
  const columns = range(5);

  return (
    <div className="guess-results">
      {rows.map((row, rowIndex) => {
        const check =
          guesses &&
          guesses.length > rowIndex &&
          checkGuess(guesses[rowIndex], answer);

        return (
          <p key={rowIndex} className="guess">
            {columns.map((column, colIndex) => {
              return (
                <span
                  key={colIndex}
                  className={`cell ${check ? check[colIndex].status : ""}`}
                >
                  {check && check[colIndex].letter}
                </span>
              );
            })}
          </p>
        );
      })}
    </div>
  );
}

export default GuessGrid;
