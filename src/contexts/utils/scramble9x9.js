import { getRowIndices } from "./getIndices";

const scramble9x9 = (puzzle) => {
    let newPuzzle = puzzle;
    const scramblePattern = chooseType();
    const bigRowNumber1 = Math.floor(Math.random() * 3) * 3;
    let row0 = getRowIndices(bigRowNumber1, 3, 3);
    let row1 = getRowIndices(bigRowNumber1 + 1, 3, 3);
    let row2 = getRowIndices(bigRowNumber1 + 2, 3, 3);
    mixRows(row0, row1, row2);
    
    let bigRowNumber2 = Math.floor(Math.random() * 3) * 3;
    // choose a different second row if they're the same
    while(bigRowNumber1 === bigRowNumber2) {
        bigRowNumber2 = Math.floor(Math.random() * 3) * 3;
    }
    row0 = getRowIndices(bigRowNumber2, 3, 3);
    row1 = getRowIndices(bigRowNumber2 + 1, 3, 3);
    row2 = getRowIndices(bigRowNumber2 + 2, 3, 3);
    mixRows(row0, row1, row2);

    // helper function to mix rows based on pattern
    function mixRows(row0, row1, row2) {
        // swap along each column, by pattern
        // skip first column, which is left alone initially
        for(let colIndex = 1; colIndex < 9; colIndex++) {
            switch (scramblePattern[colIndex]) {
                case "acb":
                    const acbSwap = newPuzzle[row1[colIndex]];
                    newPuzzle[row1[colIndex]] = newPuzzle[row2[colIndex]];
                    newPuzzle[row2[colIndex]] = acbSwap;
                    break;
                case "bac":
                    const bacSwap = newPuzzle[row0[colIndex]];
                    newPuzzle[row0[colIndex]] = newPuzzle[row1[colIndex]];
                    newPuzzle[row1[colIndex]] = bacSwap;
                    break;
                case "bca":
                    const bcaSwap = newPuzzle[row0[colIndex]];
                    newPuzzle[row0[colIndex]] = newPuzzle[row1[colIndex]];
                    newPuzzle[row1[colIndex]] = newPuzzle[row2[colIndex]];
                    newPuzzle[row2[colIndex]] = bcaSwap;
                    break;
                case "cab":
                    const cabSwap = newPuzzle[row0[colIndex]];
                    newPuzzle[row0[colIndex]] = newPuzzle[row2[colIndex]];
                    newPuzzle[row2[colIndex]] = newPuzzle[row1[colIndex]];
                    newPuzzle[row1[colIndex]] = cabSwap;
                    break;
                case "cba":
                    const cbaSwap = newPuzzle[row0[colIndex]];
                    newPuzzle[row0[colIndex]] = newPuzzle[row2[colIndex]];
                    newPuzzle[row2[colIndex]] = cbaSwap;
                    break;
                case "abc":
                default: // includes "abc"
                // leave alone
                    break;
            }
        }
    }
    
    return newPuzzle;
}

// helper function to choose a random scramble pattern
function chooseType() {
    let scrambleArray = [];
    switch(Math.floor(Math.random() * 6)) {
        case 0:
            scrambleArray = ["abc", "acb", "abc", "bca", "bac", "bca", "cab", "cba", "cab"];
            break;
        case 1:
            scrambleArray = ["abc", "acb", "acb", "bca", "bac", "bac", "cab", "cba", "cba"];
            break;
        case 2:
            scrambleArray = ["abc", "acb", "cba", "bca", "cab", "acb", "cab", "abc", "cab"];
            break;
        case 3:
            scrambleArray = ["abc", "bca", "cab", "bca", "cab", "abc", "bac", "acb", "cba"]
            break;
        case 4:
            scrambleArray = ["abc", "cab", "acb", "cba", "abc", "bac", "acb", "cba", "cba"];;
            break;
        case 5:
            scrambleArray = ["abc", "cab", "bac", "cba", "abc", "bca", "acb", "bca", "cab"];
            break;
        default:
            // leave pattern alone
            scrambleArray = ["abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc", "abc"];
    }

    return scrambleArray;
}

export {scramble9x9};
