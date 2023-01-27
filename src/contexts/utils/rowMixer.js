import { getRowIndices } from "./getIndices";
import { randomPattern } from "./randomPattern";
import { shuffleRowsByPattern } from "./shuffleRowsByPattern";

const rowMixer = (puzzle, subcols, subrows) => {
    let newPuzzle = puzzle;
        // loop through the rows
        for (let startRowNumber = 0; startRowNumber < (subcols * subrows); startRowNumber += subrows) {
            let rows = [];
            for(let rowNumber = 0; rowNumber < subrows; rowNumber++) {
                rows[rowNumber] = getRowIndices(startRowNumber + rowNumber, subcols, subrows);
            }
            const scramblePattern = randomPattern(subcols, subrows);
        // shuffle only if there is a pattern
        if (scramblePattern.length > 0) {
            newPuzzle = shuffleRowsByPattern(newPuzzle, rows, scramblePattern, subcols, subrows);
        }   
    }
    return newPuzzle;
}

export { rowMixer };
