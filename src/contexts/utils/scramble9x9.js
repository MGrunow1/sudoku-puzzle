import { getRowIndices } from "./getIndices";

const scramble9x9 = (puzzle) => {
    let newPuzzle = puzzle;
    const scramblePattern = chooseType();
    const bigRowNumber = Math.floor(Math.random() * 3) * 3;
    const row0 = getRowIndices(bigRowNumber, 3, 3);
    const row1 = getRowIndices(bigRowNumber + 1, 3, 3);
    const row2 = getRowIndices(bigRowNumber + 2, 3, 3);

    // swap along each column, by pattern
    for(let colIndex = 0; colIndex < 9; colIndex++) {
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
