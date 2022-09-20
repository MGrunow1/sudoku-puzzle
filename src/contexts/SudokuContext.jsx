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
        // swap random rows, to avoid the column pattern repeating
        for(let bigRowNumber = 0; bigRowNumber < subcols; bigRowNumber++) {
            if(subrows <= 2) {
                // if there are just two rows, decide randomly whether to swap
                if(Math.random() < .6) {
                    const row1 = bigRowNumber * subrows;
                    const row2 = 1 + (bigRowNumber * subrows);
                    swapRows(row1, row2);
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
                    newPuzzle[rowIndices1[index]] = newPuzzle[rowIndices2[index]];                        newPuzzle[rowIndices2[index]] = temp;
                }
            }
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
    
    // get the list of index numbers for cells in a row
    const getRowIndices = (rowNum, subcols=puzzleSize.subcols, subrows=puzzleSize.subrows) => {
        const subGridSize = subcols * subrows;
        const bigRowNum = Math.floor(rowNum / subrows);
        let rowStart = (rowNum % subrows) * subcols;
        rowStart += bigRowNum * (subrows * subGridSize);
        let indexArray = [];
        for(let bigColIndex = 0; bigColIndex < subrows; bigColIndex++) {
            for(let colIndex = 0; colIndex < subcols; colIndex++) {
                const index = rowStart + colIndex + (bigColIndex * subGridSize);
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
