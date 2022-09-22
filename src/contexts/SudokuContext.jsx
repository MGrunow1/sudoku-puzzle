import { createContext, useState } from "react";
import { scrambledCount } from "./utils";

const SudokuContext = createContext([]);

const SudokuProvider = (props) => {
    const [puzzleSolution, setPuzzleSolution] = useState([]);
    const [cellType, setCellType] = useState([]);
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
                    newPuzzle[rowIndices1[index]] = newPuzzle[rowIndices2[index]];
                    newPuzzle[rowIndices2[index]] = temp;
                }
            }
        }
        // swap random columns, to avoid the row pattern repeating
        for(let bigColNumber = 0; bigColNumber < subrows; bigColNumber++) {
            if(subcols > 2) {
                // choose 2 columns to swap
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
        setPuzzleSolution(newPuzzle);
        setPuzzleSize(size);
        setPuzzleCreated(true);
        hideCells(newPuzzle, subcols, subrows);
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

    const hideCells = (puzzle, subcols, subrows) => {
        const maxNumber = subcols * subrows;
        // Create the empty array
        let newCellArray = [];
        // Set its length to the total number of spaces
        newCellArray.length = maxNumber * maxNumber;
        newCellArray.fill('unset');
        // Set the initial cell, randomly
        if(Math.random() < .6) {
            newCellArray[0] = 'hidden';
        } else {
            newCellArray[0] = 'cell'
        }
        /* Loop through the array in a random order, to avoid
         having empty spaces bunched at the starting point */
        const scrambledIndices = scrambledCount(newCellArray.length);
        for(const index of scrambledIndices) {
            // Set only if it's not already set
            if(newCellArray[index] === 'unset') {
                const value = puzzle[index];
                const subGridNumber = Math.floor(index / maxNumber);
                const bigRow = Math.floor(subGridNumber / subrows);
                const rowNumber = (Math.floor(index/subcols) % subrows) + (bigRow * subrows);
                const rowIndices = getRowIndices(rowNumber, subcols, subrows);
                let isNeeded = false;
                // Loop through space in the row
                for (const checkRow of rowIndices) {
                    const bigCol = Math.floor(checkRow / maxNumber) % subrows;
                    const colNumber = (checkRow % subcols) + (bigCol * subcols);
                    const colIndices = getColIndices(colNumber, subcols, subrows);
                    if(checkRow !== index && (newCellArray[checkRow] === 'hidden')) {
                        let isSafe = false;
                        /* Check the column for each space in the
                        row, to see if another space keeps the value
                        from being there instead */
                        for (const checkCol of colIndices) {
                            if((newCellArray[checkCol] !== 'hidden')
                             && (puzzle[checkCol] === value)
                             && (checkCol !== index)) {
                                isSafe = true;
                            }
                        }
                        if(isSafe === false) {
                            isNeeded = true;
                        }
                    }
                }
                // Decide on cell type
                if(isNeeded) {
                    newCellArray[index] = 'clue';
                } else {
                    newCellArray[index] = 'hidden';
                }
            }
        }
    setCellType(newCellArray);
    }
    
    return (
        <SudokuContext.Provider value={{puzzleSolution, puzzleSize, puzzleCreated, cellType, resizeSudoku }}>
            {props.children}
        </SudokuContext.Provider>
    )
}

export { SudokuContext, SudokuProvider };
