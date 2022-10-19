import { getColIndices, getRowIndices } from "./getIndices"

export default function turnPuzzle(puzzle, subcols, subrows) {
    const maxNumber = subcols * subrows;
    // Create the empty array
    let turnedArray = [];
    turnedArray.length = puzzle.length;
    // Loop through the list of columns
    for(let loop=0;loop<maxNumber;loop++) {
        const colIndices = getColIndices(loop, subcols, subrows);
        const rowIndices = getRowIndices(loop, subrows, subcols);
        // take values from columns, put into rows
        for(let index=0;index<maxNumber;index++) {
            const value = puzzle[colIndices[index]];
            turnedArray[rowIndices[index]] = value;
        }
    }
    return turnedArray;
}
