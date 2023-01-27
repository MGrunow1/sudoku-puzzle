import { getColIndices, getRowIndices } from "./getIndices";
import { rowMixer } from "./rowMixer";
import { scramble9x9 } from "./scramble9x9";

const mixPuzzle = (puzzle, subcols, subrows) => {
    const maxNumber = subcols * subrows;
    let newPuzzle = puzzle;
    // if a 9x9 grid, do extra scrambling
    if(subcols === 3 && subrows === 3) {
        newPuzzle = scramble9x9(newPuzzle);
    } else {
        newPuzzle = rowMixer(newPuzzle, subcols, subrows);
    }

    // swap random rows, to avoid the column pattern repeating
    for(let bigRowNumber = 0; bigRowNumber < subcols; bigRowNumber++) {
        if(subrows <= 2) {
            // if there are just two rows, decide randomly whether to swap
            if(Math.random() < .6) {
                const row1 = bigRowNumber * subrows;
                const row2 = 1 + (bigRowNumber * subrows);
                swapRows(row1, row2);
            }
        } else if(subrows === 3) {
            // sometimes swap 2 rows
            if(Math.random() < .5) {
                const randomRow1 = Math.floor(Math.random() * subrows) + (bigRowNumber * subrows);
                let randomRow2 = Math.floor(Math.random() * subrows) + (bigRowNumber * subrows);
                // choose a different second row if they're the same
                while(randomRow1 === randomRow2) {
                    randomRow2 = Math.floor(Math.random() * subrows) + (bigRowNumber * subrows);
                }
                swapRows(randomRow1, randomRow2);
            }
        } else {
            // always choose 2 rows to swap
            const randomRow1 = Math.floor(Math.random() * subrows) + (bigRowNumber * subrows);
            let randomRow2 = Math.floor(Math.random() * subrows) + (bigRowNumber * subrows);
            // choose a different second row if they're the same
            while(randomRow1 === randomRow2) {
                randomRow2 = Math.floor(Math.random() * subrows) + (bigRowNumber * subrows);
            }
            swapRows(randomRow1, randomRow2);
        }
        // helper function to swap rows in the same row of subgrids
        function swapRows(row1, row2) {
            const rowIndices1 = getRowIndices(row1, subcols, subrows);
            const rowIndices2 = getRowIndices(row2, subcols, subrows);
            for(let index = 0; index<maxNumber; index++) {
                // swap the values
                const temp = newPuzzle[rowIndices1[index]];
                newPuzzle[rowIndices1[index]] = newPuzzle[rowIndices2[index]];
                newPuzzle[rowIndices2[index]] = temp;
            }
        }
    }
    // swap random columns, to avoid the row pattern repeating
    for(let bigColNumber = 0; bigColNumber < subrows; bigColNumber++) {
        if(subcols <= 2) {
            // if there are just 2 columns, decide randomly whether to swap
            if(Math.random() < .6) {
                const col1 = bigColNumber * subrows;
                const col2 = 1 + (bigColNumber * subrows);
                swapCols(col1, col2);
            }
        } else if(subcols === 3) {
            // sometimes swap 2 columns
            if(Math.random() < .5) {
                const randomCol1 = Math.floor(Math.random() * subcols) + (bigColNumber * subcols);
                let randomCol2 = Math.floor(Math.random() * subcols) + (bigColNumber * subcols);
                // choose a different second row if they're the same
                while(randomCol1 === randomCol2) {
                    randomCol2 = Math.floor(Math.random() * subcols) + (bigColNumber * subcols);
                }
                swapCols(randomCol1, randomCol2);
            }
        } else {
            // always choose 2 columns to swap
            const randomCol1 = Math.floor(Math.random() * subcols) + (bigColNumber * subcols);
            let randomCol2 = Math.floor(Math.random() * subcols) + (bigColNumber * subcols);
            // choose a different second row if they're the same
            while(randomCol1 === randomCol2) {
                randomCol2 = Math.floor(Math.random() * subcols) + (bigColNumber * subcols);
            }
            swapCols(randomCol1, randomCol2);
        }
        // helper function to swap columns in the same row of subgrids
        function swapCols(col1, col2) {
            const colIndices1 = getColIndices(col1, subcols, subrows);
            const colIndices2 = getColIndices(col2, subcols, subrows);
            for(let index = 0; index<maxNumber; index++) {
                // swap the values
                const temp = newPuzzle[colIndices1[index]];
                newPuzzle[colIndices1[index]] = newPuzzle[colIndices2[index]];
                newPuzzle[colIndices2[index]] = temp;
            }
        }
    }
    return newPuzzle;
}

export { mixPuzzle };
