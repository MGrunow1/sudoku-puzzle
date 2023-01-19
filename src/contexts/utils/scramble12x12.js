import { getRowIndices } from "./getIndices";
import { shuffleRowsByPattern } from "./shuffleRowsByPattern";

const scramble12x12 = (puzzle) => {
    let newPuzzle = puzzle;
    const scramblePattern = chooseType();
    for (let bigRowNumber = 0; bigRowNumber < 12; bigRowNumber += 4) {
        let rows = [];
        rows[0] = getRowIndices(bigRowNumber, 3, 4);
        rows[1] = getRowIndices(bigRowNumber + 1, 3, 4);
        rows[2] = getRowIndices(bigRowNumber + 2, 3, 4);
        rows[3] = getRowIndices(bigRowNumber + 3, 3, 4);
        newPuzzle = shuffleRowsByPattern(newPuzzle, rows, scramblePattern, 3, 4);
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
