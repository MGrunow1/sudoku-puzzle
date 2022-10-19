import { createContext, useState } from "react";
import { fillPuzzle } from "./utils/fillPuzzle";
import { getCellCol, getCellRow } from "./utils/getCellLocation";
import { getColIndices, getRowIndices } from "./utils/getIndices";
import { hidingCellArray } from "./utils/hidingCellArray";
import { mixPuzzle } from "./utils/mixPuzzle";
import turnPuzzle from "./utils/turnPuzzle";

const SudokuContext = createContext([]);

const SudokuProvider = (props) => {
    const [userPuzzle, setUserPuzzle] = useState([]);
    const [cellType, setCellType] = useState([]);
    const [puzzleSize, setPuzzleSize] = useState({subrows: 0, subcols: 0});
    const [puzzleCompleted, setPuzzleCompleted] = useState(false);
    const [puzzleCreated, setPuzzleCreated] = useState(false);
    const [optionList, setOptionList] = useState([]);
    // Use -1 for no cell chosen, because index starts with 0
    const [chosenCell, setChosenCell] = useState({index: -1, moveTop: '0', horizontal: ''});

    const deselectCell = () => {
        setChosenCell({index: -1, moveTop: '0', horizontal: ''});
    }

    const selectCell = (index) => {
        const cellCol = getCellCol(index);
        const cellRow = getCellRow(index);
        const moveTop = (cellRow * 27) + 60;
        let horizontalCSS = '';
        let horizontal = (cellCol - (puzzleSize.subcols * puzzleSize.subrows)/2);
        if(horizontal<0) {
            horizontalCSS = 'right: ';
            horizontal = -horizontal;
            let multiplier = 30;
            // choose amount based on puzzle size
            switch(puzzleSize.subcols * puzzleSize.subrows) {
                case 6:
                    multiplier = 12;
                    break;
                case 8:
                    multiplier = 19;
                    break;
                case 9:
                    multiplier = 21;
                    break;
                case 12:
                    multiplier = 26;
                    break;
                case 15:
                    multiplier = 28;
                    break;
                case 16:
                    multiplier = 29;
                    break;
                case 20:
                    multiplier = 30;
                    break;
                default:
                    // 
            }
            horizontal = horizontal * multiplier;
            horizontalCSS = horizontalCSS + horizontal.toString() + 'px;'
        } else {
            horizontalCSS = 'left: ';
            let multiplier = 30;
            // choose amount based on puzzle size
            switch(puzzleSize.subcols * puzzleSize.subrows) {
                case 6:
                    multiplier = 19;
                    break;
                case 8:
                    multiplier = 25;
                    break;
                case 9:
                    multiplier = 26;
                    break;
                case 12:
                    multiplier = 30;
                    break;
                case 15:
                    multiplier = 31;
                    break;
                case 16:
                    multiplier = 32;
                    break;
                case 20:
                    multiplier = 34;
                    break;
                default:
                    // 
            }
            horizontal = horizontal * multiplier;
            horizontalCSS = horizontalCSS + horizontal.toString() + 'px;'
        }
        const cellInfo = {index: index, moveTop: `${moveTop}px`, horizontal: horizontalCSS};
        setChosenCell(cellInfo);
    }

    // reset the puzzle to make a new one
    const resetPuzzle = () => {
        deselectCell();
        setPuzzleCreated(false);
        setPuzzleCompleted(false);
    }

    // set up new puzzle
    const resizeSudoku = (size) => {
        const {subrows, subcols} = size;
        const maxNumber = subcols * subrows;
        // create the empty array
        let newPuzzle = fillPuzzle(subcols, subrows);
        // mix by swapping rows, and swapping columns
        newPuzzle = mixPuzzle(newPuzzle, subcols, subrows);
        if(Math.random() < .4) {
            // rotate puzzle 90 degrees sometimes
            newPuzzle = turnPuzzle(newPuzzle, subcols, subrows);
            const turnedSize = {subrows: subcols, subcols: subrows};
            setPuzzleSize(turnedSize);
            hideCells(newPuzzle, subrows, subcols);
        } else {
            setPuzzleSize(size);
            hideCells(newPuzzle, subcols, subrows);
        }
        // set the list of number options
        let numbers=[];
        for(let loop=1;loop<=maxNumber;loop++) {
            numbers.push(loop);
        }
        setOptionList(numbers);
        setPuzzleCreated(true);
    }

    const tryCellValue = (value) =>  {
        // Test for match if the input isn't blank
        if(value) {
            let rowSafe = true;
            let colSafe = true;
            let subgridSafe = true;
            const rowNumber = getCellRow(chosenCell.index, puzzleSize.subcols, puzzleSize.subrows);
            const rowIndices = getRowIndices(rowNumber, puzzleSize.subcols, puzzleSize.subrows);
            // Loop through the row
            for(const checkRow of rowIndices) {
                if(checkRow !== chosenCell.index && (userPuzzle[checkRow] === value)) {
                    rowSafe = false;
                    if(cellType[checkRow] === 'clue') {
                        // If it's clue, it can't be changed
                        // Set warning and quit
                        return 'A space in this row already has that number in it, and it cannot be changed!';
                    }                    
                }
            }
            // Loop through the column
            const colNumber = getCellCol(chosenCell.index, puzzleSize.subcols, puzzleSize.subrows);
            const colIndices = getColIndices(colNumber, puzzleSize.subcols, puzzleSize.subrows);
            for (const checkCol of colIndices) {
                if(checkCol !== chosenCell.index && (userPuzzle[checkCol] === value)) {
                    colSafe = false;
                    if(cellType[checkCol] === 'clue') {
                        // If it's clue, it can't be changed
                        // Set warning and quit
                        return 'A space in this column already has that number in it, and it cannot be changed!';
                    }
                }
            }
            // Loop through the subgrid (box)
            const subGridNumber = Math.floor(chosenCell.index / (puzzleSize.subcols * puzzleSize.subrows));
            const min = subGridNumber * (puzzleSize.subcols * puzzleSize.subrows);
            const max = min + (puzzleSize.subcols * puzzleSize.subrows);
            for(let checkGrid=min;checkGrid<max;checkGrid++) {
                if(checkGrid !== chosenCell.index && (userPuzzle[checkGrid] === value)) {
                    subgridSafe = false;
                    if(cellType[checkGrid] === 'clue') {
                        // If it's clue, it can't be changed
                        // Set warning and quit
                        return 'A space in this box already has that number in it, and it cannot be changed!';
                    }                   
                }
            }
            // warnings
            if(!rowSafe && (!colSafe && !subgridSafe)) {
                // Set warning and quit
                return 'Spaces in this row, column, and box already have that number in it!';
            }
            if(!rowSafe || (!colSafe || !subgridSafe)) {
                let place = '';
                if(!rowSafe) {
                    place='row';
                }
                if(!colSafe) {
                    place='column';
                }
                if(!subgridSafe) {
                    place='box';
                }
                return `A space in this ${place} has that number in it!`;
            }
        }
        let newPuzzle = [];
        newPuzzle = userPuzzle;
        newPuzzle[chosenCell.index] = value;
        setUserPuzzle(newPuzzle);
        // check if puzzle is complete (no null spaces left)
        if(newPuzzle.every(element => element !== null)) {
            setPuzzleCompleted(true);
        }
        return 'safe';
    }

    const hideCells = (puzzle, subcols, subrows) => {
        // create the array of cell types
        let newCellArray = hidingCellArray(puzzle, subcols, subrows);
        
        // remove hidden cells
        for(let index=0;index<puzzle.length;index++) {
            if(newCellArray[index] === 'hidden') {
                puzzle[index] = null;
            }
        }
        setCellType(newCellArray);
        setUserPuzzle(puzzle);
    }
    
    return (
        <SudokuContext.Provider value={{
                userPuzzle,
                cellType,
                chosenCell,
                optionList,
                puzzleSize,
                puzzleCreated,
                puzzleCompleted,
                deselectCell,
                resetPuzzle,
                resizeSudoku,
                selectCell,
                tryCellValue }}>
            {props.children}
        </SudokuContext.Provider>
    )
}

export { SudokuContext, SudokuProvider };
