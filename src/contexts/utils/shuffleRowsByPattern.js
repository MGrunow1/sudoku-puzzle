// mix rows based on pattern
const shuffleRowsByPattern = (puzzle, rowArray, scramblePattern, subcols, subrows) => {
    let newPuzzle = puzzle;
   
    // skip first column, which is left alone initially
    for(let colIndex = 1; colIndex < (subcols * subrows); colIndex++) {
        // store the values from the rows
        let valueArray = [];
        for(let pieces = 0; pieces < subrows; pieces++) {
            const value= newPuzzle[rowArray[pieces][colIndex]];
            valueArray.push(value);
        }
        // loop through the letters in the pattern
        for(let pieces = 0; pieces < subrows; pieces++) {
            // find location of letter in unscrambled pattern
            const position = scramblePattern[0].indexOf(scramblePattern[colIndex][pieces]);
            // use that location to choose which value to use
            newPuzzle[rowArray[pieces][colIndex]] = valueArray[position];
        }
    }

    return newPuzzle;
}

export { shuffleRowsByPattern };
