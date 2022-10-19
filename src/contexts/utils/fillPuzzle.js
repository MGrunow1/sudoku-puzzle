import { getColIndices } from "./getIndices";
import { scrambledCount } from "./scrambledCount"

const fillPuzzle = (subcols, subrows) => {
    const maxNumber = subcols * subrows;
    // create the empty array
    let newPuzzle = [];
    // set its length to the total number of spaces
    newPuzzle.length = maxNumber * maxNumber;
    // create a scrambled list from 1 to the maximum number
    let columnValues = scrambledCount(maxNumber);
    // fill the new puzzle with values
    for(let colNumber = 0; colNumber<maxNumber; colNumber++) {
        const indices = getColIndices(colNumber, subcols, subrows);
        // shift for every large block of columns, to avoid repeating
        if(colNumber % subcols === 0) {
            let value=columnValues.shift()
            columnValues.push(value);
        }
        // put the values in the proper places
        for(const index in indices) {
            newPuzzle[indices[index]] = columnValues[index];
        }
        // shift the values for the next column
        columnValues = columnValues.slice(subrows, maxNumber).concat(columnValues.slice(0,subrows));
    }
    return newPuzzle;
}

export { fillPuzzle };
