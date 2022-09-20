import { createContext, useState } from "react";
import { scrambledCount } from "./utils";

const SudokuContext = createContext([]);

const SudokuProvider = (props) => {
    const [puzzleSolution, setPuzzleSolution] = useState([]);
    const [puzzleSize, setPuzzleSize] = useState({subrows: 0, subcols: 0});
    const [puzzleCreated, setPuzzleCreated] = useState(false);

    // set up new puzzle
    const resizeSudoku = (size) => {
        const {subrows, subcols} = size;
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
        setPuzzleSolution(newPuzzle);
        setPuzzleSize(size);
        setPuzzleCreated(true);
    }
    // get the list of index numbers for cells in a column
    const getColIndices = (colNum, subcols=puzzleSize.subcols, subrows=puzzleSize.subrows) => {
        const subGridSize = subcols * subrows;
        const bigColNum = Math.floor(colNum / subcols);
        let colStart = (colNum % subcols)
        colStart += bigColNum * subGridSize;
        let indexArray = [];
        for(let bigRowIndex = 0; bigRowIndex < subcols; bigRowIndex++) {
            for(let rowIndex = 0; rowIndex < subrows; rowIndex++) {
                const index = colStart + (rowIndex * subcols) + (bigRowIndex * subGridSize * subrows);
                indexArray.push(index);
            }
        }
        return indexArray;
    }
    
    return (
        <SudokuContext.Provider value={{puzzleSolution, puzzleSize, puzzleCreated, resizeSudoku }}>
            {props.children}
        </SudokuContext.Provider>
    )
}

export { SudokuContext, SudokuProvider };
