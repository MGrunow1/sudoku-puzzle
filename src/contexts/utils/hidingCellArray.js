import { getCellCol, getCellRow } from "./getCellLocation";
import { getColIndices, getRowIndices } from "./getIndices";
import { scrambledCount } from "./scrambledCount"

const hidingCellArray = (puzzle, subcols, subrows) => {
    const maxNumber = subcols * subrows;
    // Create the empty array
    let newCellArray = [];
    // Set its length to the total number of spaces
    newCellArray.length = maxNumber * maxNumber;
    newCellArray.fill('unset');
    // Set the initial cell, randomly
    if(Math.random() < .6) {
        newCellArray[0] = 'hidden';
    } else {
         newCellArray[0] = 'clue'
    }
    /* Loop through the array in a random order, to avoid
     having empty spaces bunched at the starting point */
    const scrambledIndices = scrambledCount(newCellArray.length);
    for(const index of scrambledIndices) {
        // Set only if it's not already set
        if(newCellArray[index] === 'unset') {
            const value = puzzle[index];
            const rowNumber = getCellRow(index, subcols, subrows);
            const rowIndices = getRowIndices(rowNumber, subcols, subrows);
            let neededForRow = false;
            let neededForCol = false;
            // Loop through space in the row
            for (const checkRow of rowIndices) {
                const colNumber = getCellCol(checkRow, subcols, subrows);
                const colIndices = getColIndices(colNumber, subcols, subrows);
                if(checkRow !== index && (newCellArray[checkRow] === 'hidden')) {
                    let isSafe = false;
                     /* Check the column for each space in the
                    row, to see if another space keeps the value
                    from being there instead */
                    for (const checkCol of colIndices) {
                        if((newCellArray[checkCol] !== 'hidden')
                            && (puzzle[checkCol] === value)
                            && (checkCol !== index)) {
                            isSafe = true;
                        }
                    }
                    if(isSafe === false) {
                        neededForRow = true;
                    }
                    // for smaller puzzles, hide more cells
                    if((maxNumber < 10) && neededForRow) {
                        const colNumber2 = getCellCol(index, subcols, subrows);
                        const colIndices2 = getColIndices(colNumber2, subcols, subrows);
                        // Loop through space in the column
                        for (const checkCol of colIndices2) {
                            const rowNumber2 = getCellRow(checkCol, subcols, subrows);
                            const rowIndices2 = getRowIndices(rowNumber2, subcols, subrows);
                            if(checkRow !== index && (newCellArray[checkCol] === 'hidden')) {
                                let isSafe = false;
                                /* Check the column for each space in the
                                row, to see if another space keeps the value
                                from being there instead */
                                for (const checkRow of rowIndices2) {
                                    if((newCellArray[checkRow] !== 'hidden')
                                        && (puzzle[checkRow] === value)
                                        && (checkRow !== index)) {
                                        isSafe = true;
                                    }
                                }
                                if(isSafe === false) {
                                    neededForCol = true;
                                }
                            }
                        }
                    } else {
                        /* Assume needed for column for large
                        puzzles. It's ok if not needed for row,
                        then it will still be hidden. */
                        neededForCol = true;
                    }
                }
            }
            // Decide on cell type
            if(neededForRow && neededForCol) {
                newCellArray[index] = 'clue';
            } else {
                newCellArray[index] = 'hidden';
            }
        }
    }
    return newCellArray;
}
    

export { hidingCellArray }
