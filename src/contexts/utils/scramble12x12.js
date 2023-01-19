import { getRowIndices } from "./getIndices";

const scramble12x12 = (puzzle) => {
    let newPuzzle = puzzle;
    const scramblePattern = chooseType();
    for (let bigRowNumber = 0; bigRowNumber < 12; bigRowNumber += 4) {
        let rows = [];
        rows[0] = getRowIndices(bigRowNumber, 3, 4);
        rows[1] = getRowIndices(bigRowNumber + 1, 3, 4);
        rows[2] = getRowIndices(bigRowNumber + 2, 3, 4);
        rows[3] = getRowIndices(bigRowNumber + 3, 3, 4);
        mixRows(rows);
    }
    
    // helper function to mix rows based on pattern
    function mixRows(rows) {
        // swap along each column, by pattern
        // skip first column, which is left alone initially
        for(let colIndex = 1; colIndex < 12; colIndex++) {
            // store the values from the rows
            let valueArray = [];
            for(let pieces = 0; pieces < 4; pieces++) {
                const value= newPuzzle[rows[pieces][colIndex]];
                valueArray.push(value);
            }
            // loop through the letters in the pattern
            for(let pieces = 0; pieces < 4; pieces++) {
                // find location of letter in unscrambled pattern
                const position = scramblePattern[0].indexOf(scramblePattern[colIndex][pieces]);
                // use that location to choose which value to use
                newPuzzle[rows[pieces][colIndex]] = valueArray[position];
            }
        }
    }
    
    return newPuzzle;
}

// helper function to choose a random scramble pattern
function chooseType() {
    let scrambleArray = [];
    switch(Math.floor(Math.random() * 0)) {
        case 0:
            scrambleArray = ["abcd", "acbd", "cdab", "cdab", "acbd", "abcd", "abcd", "bcda", "bcad", "dcab", "bcad", "cdba"];
            break;
        default:
            // leave pattern alone
            scrambleArray = ["abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd", "abcd"];
    }

    return scrambleArray;
}

export {scramble12x12};
